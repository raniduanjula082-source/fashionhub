package com.fashionhub.service;

import com.fashionhub.model.CartItem;
import com.fashionhub.model.Product;
import com.fashionhub.model.User;
import com.fashionhub.repository.CartItemRepository;
import com.fashionhub.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CartService {

    private final CartItemRepository cartItemRepository;
    private final ProductRepository productRepository;

    public List<CartItem> getUserCart(User user) {
        return cartItemRepository.findByUser(user);
    }

    @Transactional
    public CartItem addToCart(User user, String productId, Integer quantity, String size, String color) {
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new RuntimeException("Product not found"));

        // Check if item already exists in cart, if so update quantity
        List<CartItem> cartItems = cartItemRepository.findByUser(user);
        for (CartItem item : cartItems) {
            if (item.getProduct().getId().equals(productId) &&
                    (size == null || size.equals(item.getSize())) &&
                    (color == null || color.equals(item.getColor()))) {

                item.setQuantity(item.getQuantity() + quantity);
                return cartItemRepository.save(item);
            }
        }

        CartItem newItem = new CartItem();
        newItem.setUser(user);
        newItem.setProduct(product);
        newItem.setQuantity(quantity);
        newItem.setSize(size);
        newItem.setColor(color);

        return cartItemRepository.save(newItem);
    }

    @Transactional
    public void removeFromCart(String cartItemId, User user) {
        CartItem cartItem = cartItemRepository.findById(cartItemId)
                .orElseThrow(() -> new RuntimeException("Cart item not found"));

        if (!cartItem.getUser().getId().equals(user.getId())) {
            throw new RuntimeException("Unauthorized");
        }

        cartItemRepository.delete(cartItem);
    }

    @Transactional
    public void clearCart(User user) {
        cartItemRepository.deleteByUser(user);
    }
}
