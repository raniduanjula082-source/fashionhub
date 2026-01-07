package com.fashionhub.controller;

import com.fashionhub.model.CartItem;
import com.fashionhub.model.User;
import com.fashionhub.service.AuthService;
import com.fashionhub.service.CartService;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/cart")
@RequiredArgsConstructor
public class CartController {

    private final CartService cartService;
    private final AuthService authService;

    @GetMapping
    public ResponseEntity<List<CartItem>> getUserCart() {
        User user = authService.getCurrentUser();
        return ResponseEntity.ok(cartService.getUserCart(user));
    }

    @PostMapping
    public ResponseEntity<CartItem> addToCart(@RequestBody AddToCartRequest request) {
        User user = authService.getCurrentUser();
        return ResponseEntity.ok(cartService.addToCart(
                user,
                request.getProductId(),
                request.getQuantity(),
                request.getSize(),
                request.getColor()));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> removeFromCart(@PathVariable String id) {
        User user = authService.getCurrentUser();
        cartService.removeFromCart(id, user);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping
    public ResponseEntity<Void> clearCart() {
        User user = authService.getCurrentUser();
        cartService.clearCart(user);
        return ResponseEntity.ok().build();
    }

    @Data
    static class AddToCartRequest {
        private String productId;
        private Integer quantity;
        private String size;
        private String color;
    }
}
