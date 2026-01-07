package com.fashionhub.bootstrap;

import com.fashionhub.model.Product;
import com.fashionhub.repository.ProductRepository;
import com.fashionhub.model.User;
import com.fashionhub.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.util.Arrays;
import java.util.List;

@Component
@RequiredArgsConstructor
public class DataSeeder implements CommandLineRunner {

        private final ProductRepository productRepository;
        private final UserRepository userRepository;
        private final org.springframework.security.crypto.password.PasswordEncoder passwordEncoder;

        @Override
        public void run(String... args) throws Exception {
                // Always reset for this demo
                productRepository.deleteAll();
                seedProducts();

                // Seed Users if not exists
                if (userRepository.count() == 0) {
                        seedUsers();
                }
        }

        private void seedUsers() {
                // Create Admin
                User admin = new User();
                admin.setFirstName("Admin");
                admin.setLastName("User");
                admin.setEmail("admin@fashionhub.com");
                admin.setPassword(passwordEncoder.encode("admin123"));
                admin.setRoles(new java.util.HashSet<>(Arrays.asList("ROLE_ADMIN", "ROLE_USER")));
                admin.setEnabled(true);
                userRepository.save(admin);
                System.out.println("Seeded Admin User: admin@fashionhub.com / admin123");

                // Create Regular User
                User user = new User();
                user.setFirstName("John");
                user.setLastName("Doe");
                user.setEmail("user@fashionhub.com");
                user.setPassword(passwordEncoder.encode("user123"));
                user.setRoles(new java.util.HashSet<>(Arrays.asList("ROLE_USER")));
                user.setEnabled(true);
                userRepository.save(user);
                System.out.println("Seeded Regular User: user@fashionhub.com / user123");
        }

        private void seedProducts() {
                List<Product> products = Arrays.asList(
                                // Men's Products
                                createProduct("1", "Classic Blue Formal Shirt", "Formal Shirts", "Men", "Arrow",
                                                new BigDecimal("149.97"), new BigDecimal("239.97"),
                                                "/images/products/blue_formal_shirt_1767431154902.png",
                                                Arrays.asList("S", "M", "L", "XL"), Arrays.asList("Blue", "Navy"), 4.5,
                                                128),
                                createProduct("2", "Premium Cotton Casual Shirt", "Casual Shirts", "Men", "Van Heusen",
                                                new BigDecimal("119.97"), new BigDecimal("179.97"),
                                                "/images/products/casual_shirt_1767431170152.png",
                                                Arrays.asList("M", "L", "XL", "XXL"), Arrays.asList("White", "Blue"),
                                                4.8, 256),
                                createProduct("3", "Urban Style T-Shirt", "T-Shirts", "Men", "Nike",
                                                new BigDecimal("74.97"), new BigDecimal("104.97"),
                                                "/images/products/black_tshirt_1767431185645.png",
                                                Arrays.asList("S", "M", "L", "XL"), Arrays.asList("Black", "Gray"), 4.3,
                                                89),
                                createProduct("4", "Slim Fit Denim Jeans", "Jeans", "Men", "Levis",
                                                new BigDecimal("179.97"), new BigDecimal("269.97"),
                                                "/images/products/denim_jeans_1767431202408.png",
                                                Arrays.asList("28", "30", "32", "34", "36"), Arrays.asList("Blue"), 4.6,
                                                342),
                                createProduct("5", "Classic Polo Shirt", "Polo Shirts", "Men", "US Polo",
                                                new BigDecimal("104.97"), new BigDecimal("149.97"),
                                                "/images/products/polo_shirt_1767431219140.png",
                                                Arrays.asList("S", "M", "L", "XL"),
                                                Arrays.asList("Navy", "White", "Black"), 4.4, 156),
                                createProduct("6", "Comfortable Round Neck T-Shirt", "T-Shirts", "Men", "Adidas",
                                                new BigDecimal("59.97"), new BigDecimal("89.97"),
                                                "/images/products/white_tshirt_1767431238566.png",
                                                Arrays.asList("XS", "S", "M", "L", "XL"),
                                                Arrays.asList("Black", "White", "Gray"), 4.7, 423),
                                createProduct("7", "Striped Casual Shirt", "Casual Shirts", "Men", "Tommy Hilfiger",
                                                new BigDecimal("134.97"), new BigDecimal("194.97"),
                                                "/images/products/striped_shirt_1767431255052.png",
                                                Arrays.asList("M", "L", "XL"), Arrays.asList("Blue", "White"), 4.2, 78),
                                createProduct("8", "Formal Check Shirt", "Formal Shirts", "Men", "Peter England",
                                                new BigDecimal("164.97"), new BigDecimal("224.97"),
                                                "/images/products/check_shirt_1767431277466.png",
                                                Arrays.asList("S", "M", "L", "XL", "XXL"),
                                                Arrays.asList("Blue", "White"), 4.5, 201),

                                // Women's Products
                                createProduct("101", "Elegant Floral Dress", "Dresses", "Women", "Zara",
                                                new BigDecimal("209.97"), new BigDecimal("299.97"),
                                                "/images/products/womens_floral_dress_1767433523964.png",
                                                Arrays.asList("XS", "S", "M", "L", "XL"),
                                                Arrays.asList("Red", "Blue", "White"), 4.8, 234),
                                createProduct("102", "Casual Summer Blouse", "Casual Wear", "Women", "H&M",
                                                new BigDecimal("164.97"), new BigDecimal("239.97"),
                                                "/images/products/womens_casual_blouse_1767433544374.png",
                                                Arrays.asList("S", "M", "L", "XL"),
                                                Arrays.asList("White", "Black", "Navy"), 4.6, 187),
                                createProduct("103", "Stylish Maxi Dress", "Dresses", "Women", "Forever 21",
                                                new BigDecimal("239.97"), new BigDecimal("359.97"),
                                                "/images/products/womens_maxi_dress_1767433565791.png",
                                                Arrays.asList("XS", "S", "M", "L"),
                                                Arrays.asList("Blue", "Green", "Red"), 4.9, 312),
                                createProduct("104", "Chic Blouse", "Tops", "Women", "Mango", new BigDecimal("119.97"),
                                                new BigDecimal("179.97"),
                                                "/images/products/womens_casual_blouse_1767433544374.png",
                                                Arrays.asList("S", "M", "L", "XL"),
                                                Arrays.asList("White", "Pink", "Black"), 4.5, 156),
                                createProduct("105", "Designer Evening Gown", "Formal Wear", "Women", "Gucci",
                                                new BigDecimal("449.97"), new BigDecimal("599.97"),
                                                "/images/products/womens_maxi_dress_1767433565791.png",
                                                Arrays.asList("XS", "S", "M", "L"),
                                                Arrays.asList("Black", "Navy", "Red"), 5.0, 89),
                                createProduct("106", "Comfortable Joggers", "Activewear", "Women", "Puma",
                                                new BigDecimal("134.97"), new BigDecimal("194.97"),
                                                "/images/products/womens_casual_blouse_1767433544374.png",
                                                Arrays.asList("S", "M", "L", "XL"),
                                                Arrays.asList("Gray", "Black", "Navy"), 4.4, 201),

                                // Kids' Products
                                createProduct("201", "Kids' Colorful T-Shirt Set", "T-Shirts", "Kids", "Carter's",
                                                new BigDecimal("89.97"), new BigDecimal("134.97"),
                                                "/images/products/kids_tshirt_set_1767433588376.png",
                                                Arrays.asList("2-3Y", "4-5Y", "6-7Y", "8-9Y"),
                                                Arrays.asList("Blue", "Red", "Green"), 4.7, 145),
                                createProduct("202", "Girls' Party Dress", "Dresses", "Kids", "Gap Kids",
                                                new BigDecimal("149.97"), new BigDecimal("224.97"),
                                                "/images/products/girls_party_dress_1767433630552.png",
                                                Arrays.asList("3-4Y", "5-6Y", "7-8Y"),
                                                Arrays.asList("Pink", "White", "Blue"), 4.8, 98),
                                createProduct("203", "Boys' Casual Shorts", "Bottoms", "Kids", "Old Navy",
                                                new BigDecimal("74.97"), new BigDecimal("119.97"),
                                                "/images/products/boys_casual_shorts_1767433650909.png",
                                                Arrays.asList("4-5Y", "6-7Y", "8-9Y", "10-11Y"),
                                                Arrays.asList("Blue", "Black", "Gray"), 4.5, 167),
                                createProduct("204", "Kids' Denim Jacket", "Outerwear", "Kids", "Zara Kids",
                                                new BigDecimal("119.97"), new BigDecimal("179.97"),
                                                "/images/products/kids_tshirt_set_1767433588376.png",
                                                Arrays.asList("4-5Y", "6-7Y", "8-9Y"), Arrays.asList("Blue"), 4.6, 123),

                                // Shoes
                                createProduct("301", "Premium Running Sneakers", "Sneakers", "Shoes", "Nike",
                                                new BigDecimal("269.97"), new BigDecimal("389.97"),
                                                "/images/products/running_sneakers_1767433669781.png",
                                                Arrays.asList("7", "8", "9", "10", "11", "12"),
                                                Arrays.asList("White", "Black", "Blue"), 4.8, 456),
                                createProduct("302", "Classic Leather Boots", "Boots", "Shoes", "Timberland",
                                                new BigDecimal("359.97"), new BigDecimal("509.97"),
                                                "/images/products/leather_boots_1767433690470.png",
                                                Arrays.asList("7", "8", "9", "10", "11"),
                                                Arrays.asList("Brown", "Black"), 4.7, 298),
                                createProduct("303", "Casual Canvas Shoes", "Casual", "Shoes", "Converse",
                                                new BigDecimal("149.97"), new BigDecimal("224.97"),
                                                "/images/products/canvas_shoes_1767433719575.png",
                                                Arrays.asList("6", "7", "8", "9", "10", "11"),
                                                Arrays.asList("White", "Navy", "Red"), 4.5, 234),
                                createProduct("304", "Sport Training Shoes", "Athletic", "Shoes", "Adidas",
                                                new BigDecimal("239.97"), new BigDecimal("329.97"),
                                                "/images/products/running_sneakers_1767433669781.png",
                                                Arrays.asList("7", "8", "9", "10", "11", "12"),
                                                Arrays.asList("Black", "Blue", "Gray"), 4.6, 387),

                                // Accessories
                                createProduct("401", "Designer Leather Handbag", "Bags", "Accessories", "Michael Kors",
                                                new BigDecimal("299.97"), new BigDecimal("449.97"),
                                                "/images/products/designer_handbag_1767433738645.png",
                                                Arrays.asList("One Size"), Arrays.asList("Black", "Brown", "Beige"),
                                                4.9, 267),
                                createProduct("402", "Stylish Sunglasses", "Eyewear", "Accessories", "Ray-Ban",
                                                new BigDecimal("179.97"), new BigDecimal("269.97"),
                                                "/images/products/aviator_sunglasses_1767433756860.png",
                                                Arrays.asList("One Size"), Arrays.asList("Black", "Brown"), 4.7, 189),
                                createProduct("403", "Leather Belt", "Belts", "Accessories", "Tommy Hilfiger",
                                                new BigDecimal("104.97"), new BigDecimal("149.97"),
                                                "/images/products/designer_handbag_1767433738645.png",
                                                Arrays.asList("S", "M", "L", "XL"), Arrays.asList("Black", "Brown"),
                                                4.5, 123),
                                createProduct("404", "Luxury Watch", "Watches", "Accessories", "Fossil",
                                                new BigDecimal("599.97"), new BigDecimal("899.97"),
                                                "/images/products/luxury_watch_1767433775265.png",
                                                Arrays.asList("One Size"), Arrays.asList("Silver", "Gold", "Black"),
                                                4.8, 345));

                productRepository.saveAll(products);
                System.out.println("Seeded " + products.size() + " products.");
        }

        private Product createProduct(String id, String name, String category, String section, String brand,
                        BigDecimal price,
                        BigDecimal originalPrice, String imageUrl, List<String> sizes, List<String> colors,
                        Double rating,
                        Integer reviewCount) {
                Product product = new Product();
                product.setId(id);
                product.setName(name);
                product.setCategory(category);
                product.setSection(section);
                product.setBrand(brand);
                product.setPrice(price);
                product.setOriginalPrice(originalPrice);
                product.setImageUrl(imageUrl);
                product.setSizes(sizes);
                product.setColors(colors);
                product.setRating(rating);
                product.setReviewCount(reviewCount);
                product.setStockQuantity(100);
                product.setActive(true);
                product.setDescription("Experience premium quality with our " + name + ". Perfect for any occasion.");
                return product;
        }
}
