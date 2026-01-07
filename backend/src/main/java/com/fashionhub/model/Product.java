package com.fashionhub.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.mapping.Document;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Document(collection = "products")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Product {

    @Id
    private String id;

    private String name;

    private String description;

    private BigDecimal price;

    private BigDecimal originalPrice;

    private String category;

    // e.g. Men, Women, Kids, Shoes, Accessories
    private String section;

    private String brand;

    private String imageUrl;

    private List<String> sizes = new ArrayList<>();

    private List<String> colors = new ArrayList<>();

    private Integer stockQuantity = 0;

    private Double rating = 0.0;

    private Integer reviewCount = 0;

    private Boolean active = true;

    @CreatedDate
    private LocalDateTime createdAt;

    @LastModifiedDate
    private LocalDateTime updatedAt;
}
