package com.fashionhub.repository;

import com.fashionhub.model.CartItem;
import com.fashionhub.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CartItemRepository extends MongoRepository<CartItem, String> {
    List<CartItem> findByUser(User user);

    void deleteByUser(User user);
}
