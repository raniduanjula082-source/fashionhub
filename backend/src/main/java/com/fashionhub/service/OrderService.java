package com.fashionhub.service;

import com.fashionhub.dto.OrderRequest;
import com.fashionhub.dto.OrderResponse;
import com.fashionhub.model.*;
import com.fashionhub.repository.OrderRepository;
import com.fashionhub.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class OrderService {

    private final OrderRepository orderRepository;
    private final ProductRepository productRepository;

    @Transactional
    public OrderResponse createOrder(User user, OrderRequest request) {
        Order order = new Order();
        order.setOrderNumber(generateOrderNumber());
        order.setUser(user);
        order.setPaymentMethod(request.getPaymentMethod());
        order.setStatus(Order.OrderStatus.PENDING);
        order.setPaymentStatus(Order.PaymentStatus.PENDING);

        // Set shipping address
        order.setShippingAddress(request.getShippingAddress());
        order.setShippingCity(request.getShippingCity());
        order.setShippingPostalCode(request.getShippingPostalCode());
        order.setShippingCountry(request.getShippingCountry());
        order.setShippingPhone(request.getShippingPhone());

        // Set billing address
        order.setBillingAddress(
                request.getBillingAddress() != null ? request.getBillingAddress() : request.getShippingAddress());
        order.setBillingCity(request.getBillingCity() != null ? request.getBillingCity() : request.getShippingCity());
        order.setBillingPostalCode(request.getBillingPostalCode() != null ? request.getBillingPostalCode()
                : request.getShippingPostalCode());
        order.setBillingCountry(
                request.getBillingCountry() != null ? request.getBillingCountry() : request.getShippingCountry());

        order.setNotes(request.getNotes());

        // Create order items
        BigDecimal totalAmount = BigDecimal.ZERO;
        for (OrderRequest.OrderItemRequest itemRequest : request.getItems()) {
            Product product = productRepository.findById(itemRequest.getProductId())
                    .orElseThrow(() -> new RuntimeException("Product not found: " + itemRequest.getProductId()));

            OrderItem orderItem = new OrderItem();
            // orderItem.setOrder(order); // No longer needed as embedded
            // Internal ID can be generated or left null
            orderItem.setId(UUID.randomUUID().toString());
            orderItem.setProduct(product);
            orderItem.setQuantity(itemRequest.getQuantity());
            orderItem.setPrice(product.getPrice());
            orderItem.setSize(itemRequest.getSize());
            orderItem.setColor(itemRequest.getColor());

            BigDecimal subtotal = product.getPrice().multiply(BigDecimal.valueOf(itemRequest.getQuantity()));
            orderItem.setSubtotal(subtotal);
            totalAmount = totalAmount.add(subtotal);

            order.getOrderItems().add(orderItem);
        }

        // Calculate shipping
        BigDecimal shippingCost = totalAmount.compareTo(BigDecimal.valueOf(15000)) >= 0 ? BigDecimal.ZERO
                : BigDecimal.valueOf(500);
        order.setShippingCost(shippingCost);
        order.setDiscount(BigDecimal.ZERO);
        order.setTotalAmount(totalAmount.add(shippingCost));

        Order savedOrder = orderRepository.save(order);
        return convertToResponse(savedOrder);
    }

    public List<OrderResponse> getUserOrders(User user) {
        return orderRepository.findByUserOrderByCreatedAtDesc(user)
                .stream()
                .map(this::convertToResponse)
                .collect(Collectors.toList());
    }

    public OrderResponse getOrderById(String orderId, User user) {
        Order order = orderRepository.findById(orderId)
                .orElseThrow(() -> new RuntimeException("Order not found: " + orderId));

        if (!order.getUser().getId().equals(user.getId())) {
            throw new RuntimeException("Unauthorized access to order");
        }

        return convertToResponse(order);
    }

    @Transactional
    public OrderResponse updateOrderStatus(String orderId, Order.OrderStatus status) {
        Order order = orderRepository.findById(orderId)
                .orElseThrow(() -> new RuntimeException("Order not found: " + orderId));

        order.setStatus(status);

        if (status == Order.OrderStatus.DELIVERED) {
            order.setDeliveredAt(LocalDateTime.now());
            order.setPaymentStatus(Order.PaymentStatus.PAID);
        }

        Order updatedOrder = orderRepository.save(order);
        return convertToResponse(updatedOrder);
    }

    private String generateOrderNumber() {
        return "ORD-" + UUID.randomUUID().toString().substring(0, 8).toUpperCase();
    }

    private OrderResponse convertToResponse(Order order) {
        OrderResponse response = new OrderResponse();
        response.setId(order.getId());
        response.setOrderNumber(order.getOrderNumber());
        response.setTotalAmount(order.getTotalAmount());
        response.setShippingCost(order.getShippingCost());
        response.setDiscount(order.getDiscount());
        response.setStatus(order.getStatus());
        response.setPaymentMethod(order.getPaymentMethod());
        response.setPaymentStatus(order.getPaymentStatus());
        response.setShippingAddress(order.getShippingAddress());
        response.setShippingCity(order.getShippingCity());
        response.setShippingPostalCode(order.getShippingPostalCode());
        response.setShippingCountry(order.getShippingCountry());
        response.setShippingPhone(order.getShippingPhone());
        response.setCreatedAt(order.getCreatedAt());
        response.setDeliveredAt(order.getDeliveredAt());

        List<OrderResponse.OrderItemResponse> items = order.getOrderItems().stream()
                .map(this::convertItemToResponse)
                .collect(Collectors.toList());
        response.setItems(items);

        return response;
    }

    private OrderResponse.OrderItemResponse convertItemToResponse(OrderItem item) {
        OrderResponse.OrderItemResponse response = new OrderResponse.OrderItemResponse();
        response.setId(item.getId());
        if (item.getProduct() != null) {
            response.setProductId(item.getProduct().getId());
            response.setProductName(item.getProduct().getName());
            response.setProductImage(item.getProduct().getImageUrl());
        }
        response.setQuantity(item.getQuantity());
        response.setPrice(item.getPrice());
        response.setSize(item.getSize());
        response.setColor(item.getColor());
        response.setSubtotal(item.getSubtotal());
        return response;
    }
}
