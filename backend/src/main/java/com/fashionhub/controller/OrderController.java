package com.fashionhub.controller;

import com.fashionhub.dto.OrderRequest;
import com.fashionhub.dto.OrderResponse;
import com.fashionhub.model.Order;
import com.fashionhub.model.User;
import com.fashionhub.service.AuthService;
import com.fashionhub.service.OrderService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/orders")
@RequiredArgsConstructor
public class OrderController {

    private final OrderService orderService;
    private final AuthService authService;

    @PostMapping
    public ResponseEntity<OrderResponse> createOrder(@Valid @RequestBody OrderRequest orderRequest) {
        User user = authService.getCurrentUser();
        return ResponseEntity.ok(orderService.createOrder(user, orderRequest));
    }

    @GetMapping
    public ResponseEntity<List<OrderResponse>> getUserOrders() {
        User user = authService.getCurrentUser();
        return ResponseEntity.ok(orderService.getUserOrders(user));
    }

    @GetMapping("/{id}")
    public ResponseEntity<OrderResponse> getOrderById(@PathVariable String id) {
        User user = authService.getCurrentUser();
        return ResponseEntity.ok(orderService.getOrderById(id, user));
    }

    @PutMapping("/{id}/status")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<OrderResponse> updateOrderStatus(
            @PathVariable String id,
            @RequestParam Order.OrderStatus status) {
        return ResponseEntity.ok(orderService.updateOrderStatus(id, status));
    }
}
