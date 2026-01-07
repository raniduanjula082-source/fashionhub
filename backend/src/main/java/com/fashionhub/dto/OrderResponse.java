package com.fashionhub.dto;

import com.fashionhub.model.Order;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderResponse {
    private String id;
    private String orderNumber;
    private List<OrderItemResponse> items;
    private BigDecimal totalAmount;
    private BigDecimal shippingCost;
    private BigDecimal discount;
    private Order.OrderStatus status;
    private Order.PaymentMethod paymentMethod;
    private Order.PaymentStatus paymentStatus;
    private String shippingAddress;
    private String shippingCity;
    private String shippingPostalCode;
    private String shippingCountry;
    private String shippingPhone;
    private LocalDateTime createdAt;
    private LocalDateTime deliveredAt;

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class OrderItemResponse {
        private String id;
        private String productId;
        private String productName;
        private String productImage;
        private Integer quantity;
        private BigDecimal price;
        private String size;
        private String color;
        private BigDecimal subtotal;
    }
}
