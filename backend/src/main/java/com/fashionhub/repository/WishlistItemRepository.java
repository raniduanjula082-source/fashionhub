package com.fashionhub.repository;

import com.fashionhub.model.WishlistItem;
import com.fashionhub.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WishlistItemRepository extends MongoRepository<WishlistItem, String> {
    List<WishlistItem> findByUser(User user);

    // For deleting by user and product, we might need the product ID.
    // Since Product is a DBRef, this query might be complex in auto-generated
    // methods.
    // simpler to do deleteByUserIdAndProductId if we can match the ref structure,
    // or just fetch and delete. Let's try matching object structure first.
    void deleteByUserAndProductId(User user, String productId);
}
