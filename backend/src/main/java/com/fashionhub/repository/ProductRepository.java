package com.fashionhub.repository;

import com.fashionhub.model.Product;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends MongoRepository<Product, String> {
    List<Product> findByCategory(String category);

    List<Product> findByBrand(String brand);

    List<Product> findByCategoryAndActiveTrue(String category);

    // Find by section (e.g. Men, Women)
    List<Product> findBySectionAndActiveTrue(String section);

    List<Product> findByActiveTrue();

    List<Product> findByNameContainingIgnoreCase(String name);
}
