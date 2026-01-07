package com.fashionhub.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProductDTO {
    private String id;

    @NotBlank(message = "Product name is required")
    private String name;

    private String description;

    @NotNull(message = "Price is required")
    @Positive(message = "Price must be positive")
    private BigDecimal price;

    private BigDecimal originalPrice;

    @NotBlank(message = "Category is required")
    private String category;

    private String section;

    private String brand;
    private String imageUrl;
    private List<String> sizes;
    private List<String> colors;

    @NotNull(message = "Stock quantity is required")
    private Integer stockQuantity;

    private Double rating;
    private Integer reviewCount;
    private Boolean active;
}
