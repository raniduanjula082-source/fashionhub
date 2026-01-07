package com.fashionhub.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.DBRef;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderItem {

    // Optional internal ID if needed, but not strictly required for embedded
    private String id; // generated manually or UUID if needed

    @DBRef
    private Product product;

    private Integer quantity;

    private BigDecimal price;

    private String size;

    private String color;

    private BigDecimal subtotal;
}
