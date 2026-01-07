package com.fashionhub.controller;

import com.fashionhub.model.User;
import com.fashionhub.model.WishlistItem;
import com.fashionhub.service.AuthService;
import com.fashionhub.service.WishlistService;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/wishlist")
@RequiredArgsConstructor
public class WishlistController {

    private final WishlistService wishlistService;
    private final AuthService authService;

    @GetMapping
    public ResponseEntity<List<WishlistItem>> getUserWishlist() {
        User user = authService.getCurrentUser();
        return ResponseEntity.ok(wishlistService.getUserWishlist(user));
    }

    @PostMapping
    public ResponseEntity<WishlistItem> addToWishlist(@RequestBody AddToWishlistRequest request) {
        User user = authService.getCurrentUser();
        return ResponseEntity.ok(wishlistService.addToWishlist(user, request.getProductId()));
    }

    @DeleteMapping("/{productId}")
    public ResponseEntity<Void> removeFromWishlist(@PathVariable String productId) {
        User user = authService.getCurrentUser();
        wishlistService.removeFromWishlist(user, productId);
        return ResponseEntity.ok().build();
    }

    @Data
    static class AddToWishlistRequest {
        private String productId;
    }
}
