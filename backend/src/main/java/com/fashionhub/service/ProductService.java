package com.fashionhub.service;

import com.fashionhub.dto.ProductDTO;
import com.fashionhub.model.Product;
import com.fashionhub.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;

    public List<ProductDTO> getAllProducts() {
        return productRepository.findByActiveTrue()
                .stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public ProductDTO getProductById(String id) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found with id: " + id));
        return convertToDTO(product);
    }

    public List<ProductDTO> getProductsByCategory(String category) {
        // Try to find by category first
        List<Product> products = productRepository.findByCategoryAndActiveTrue(category);

        // If empty, try finding by Section (e.g. Men, Women)
        if (products.isEmpty()) {
            products = productRepository.findBySectionAndActiveTrue(category);
        }

        return products.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public List<ProductDTO> searchProducts(String keyword) {
        return productRepository.findByNameContainingIgnoreCase(keyword)
                .stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    @Transactional
    public ProductDTO createProduct(ProductDTO productDTO) {
        Product product = convertToEntity(productDTO);
        product.setActive(true);
        Product savedProduct = productRepository.save(product);
        return convertToDTO(savedProduct);
    }

    @Transactional
    public ProductDTO updateProduct(String id, ProductDTO productDTO) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found with id: " + id));

        product.setName(productDTO.getName());
        product.setDescription(productDTO.getDescription());
        product.setPrice(productDTO.getPrice());
        product.setOriginalPrice(productDTO.getOriginalPrice());
        product.setCategory(productDTO.getCategory());
        product.setBrand(productDTO.getBrand());
        product.setImageUrl(productDTO.getImageUrl());
        product.setSizes(productDTO.getSizes());
        product.setColors(productDTO.getColors());
        product.setStockQuantity(productDTO.getStockQuantity());

        Product updatedProduct = productRepository.save(product);
        return convertToDTO(updatedProduct);
    }

    @Transactional
    public void deleteProduct(String id) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found with id: " + id));
        product.setActive(false);
        productRepository.save(product);
    }

    private ProductDTO convertToDTO(Product product) {
        ProductDTO dto = new ProductDTO();
        dto.setId(product.getId());
        dto.setName(product.getName());
        dto.setDescription(product.getDescription());
        dto.setPrice(product.getPrice());
        dto.setOriginalPrice(product.getOriginalPrice());
        dto.setCategory(product.getCategory());
        dto.setSection(product.getSection());
        dto.setBrand(product.getBrand());
        dto.setImageUrl(product.getImageUrl());
        dto.setSizes(product.getSizes());
        dto.setColors(product.getColors());
        dto.setStockQuantity(product.getStockQuantity());
        dto.setRating(product.getRating());
        dto.setReviewCount(product.getReviewCount());
        dto.setActive(product.getActive());
        return dto;
    }

    private Product convertToEntity(ProductDTO dto) {
        Product product = new Product();
        product.setName(dto.getName());
        product.setDescription(dto.getDescription());
        product.setPrice(dto.getPrice());
        product.setOriginalPrice(dto.getOriginalPrice());
        product.setCategory(dto.getCategory());
        product.setSection(dto.getSection());
        product.setBrand(dto.getBrand());
        product.setImageUrl(dto.getImageUrl());
        product.setSizes(dto.getSizes());
        product.setColors(dto.getColors());
        product.setStockQuantity(dto.getStockQuantity());
        product.setRating(0.0);
        product.setReviewCount(0);
        return product;
    }
}
