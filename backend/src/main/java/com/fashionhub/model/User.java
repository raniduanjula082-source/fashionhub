package com.fashionhub.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DBRef;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Document(collection = "users")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    private String id;

    private String firstName;

    private String lastName;

    @Indexed(unique = true)
    private String email;

    private String password;

    private String phone;

    private Set<String> roles = new HashSet<>();

    private Boolean enabled = true;

    @CreatedDate
    private LocalDateTime createdAt;

    @LastModifiedDate
    private LocalDateTime updatedAt;

    // In MongoDB, we might not always embed everything.
    // For simplicity, we can keep lists of IDs or embedded documents.
    // However, usually we keep relationships loose in Mongo or use @DBRef.
    // For high-traffic e-commerce, embedding Cart/Wishlist is fine, Orders maybe
    // separate.

    @DBRef
    private Set<Order> orders = new HashSet<>();

    @DBRef
    private Set<WishlistItem> wishlistItems = new HashSet<>();

    @DBRef
    private Set<CartItem> cartItems = new HashSet<>();
}
