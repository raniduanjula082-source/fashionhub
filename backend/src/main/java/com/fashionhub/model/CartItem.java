package com.fashionhub.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DBRef;

import java.time.LocalDateTime;

@Document(collection = "cart_items")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CartItem {

    @Id
    private String id;

    @DBRef
    private User user;

    @DBRef
    private Product product;

    private Integer quantity = 1;

    private String size;

    private String color;

    @CreatedDate
    private LocalDateTime createdAt;
}
