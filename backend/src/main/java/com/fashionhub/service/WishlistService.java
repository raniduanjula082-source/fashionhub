package com.fashionhub.service;

import com.fashionhub.model.Product;
import com.fashionhub.model.User;
import com.fashionhub.model.WishlistItem;
import com.fashionhub.repository.ProductRepository;
import com.fashionhub.repository.WishlistItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class WishlistService {

    private final WishlistItemRepository wishlistRepository;
    private final ProductRepository productRepository;

    public List<WishlistItem> getUserWishlist(User user) {
        return wishlistRepository.findByUser(user);
    }

    @Transactional
    public WishlistItem addToWishlist(User user, String productId) {
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new RuntimeException("Product not found"));

        // Check if already in wishlist
        List<WishlistItem> existingItems = wishlistRepository.findByUser(user);
        for (WishlistItem item : existingItems) {
            if (item.getProduct().getId().equals(productId)) {
                return item; // Already exists
            }
        }

        WishlistItem newItem = new WishlistItem();
        newItem.setUser(user);
        newItem.setProduct(product);

        return wishlistRepository.save(newItem);
    }

    @Transactional
    public void removeFromWishlist(User user, String productId) {
        // Since we refactored repository, let's implement the logic here
        List<WishlistItem> items = wishlistRepository.findByUser(user);
        for (WishlistItem item : items) {
            if (item.getProduct().getId().equals(productId)) {
                wishlistRepository.delete(item);
                return;
            }
        }
    }
}
