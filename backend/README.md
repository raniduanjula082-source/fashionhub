# FashionHub Backend API

Spring Boot backend for FashionHub E-commerce application.

## Project Structure

```
backend/
├── src/main/java/com/fashionhub/
│   ├── FashionHubApplication.java
│   ├── model/
│   │   ├── User.java
│   │   ├── Product.java
│   │   ├── Order.java
│   │   ├── OrderItem.java
│   │   ├── CartItem.java
│   │   └── WishlistItem.java
│   ├── dto/
│   │   ├── SignupRequest.java
│   │   ├── LoginRequest.java
│   │   ├── JwtResponse.java
│   │   ├── ProductDTO.java
│   │   ├── OrderRequest.java
│   │   └── OrderResponse.java
│   ├── repository/
│   │   ├── UserRepository.java
│   │   ├── ProductRepository.java
│   │   ├── OrderRepository.java
│   │   ├── CartItemRepository.java
│   │   └── WishlistItemRepository.java
│   ├── service/
│   │   ├── UserService.java
│   │   ├── ProductService.java
│   │   ├── OrderService.java
│   │   ├── CartService.java
│   │   └── WishlistService.java
│   ├── controller/
│   │   ├── AuthController.java
│   │   ├── ProductController.java
│   │   ├── OrderController.java
│   │   ├── CartController.java
│   │   └── WishlistController.java
│   └── config/
│       ├── SecurityConfig.java
│       ├── JwtUtils.java
│       └── CorsConfig.java
└── src/main/resources/
    └── application.properties
```

## Features

- **User Authentication**: JWT-based authentication with signup/login
- **Product Management**: CRUD operations for products
- **Order Management**: Complete order lifecycle (create, track, update status)
- **Shopping Cart**: Add/remove items, update quantities
- **Wishlist**: Save favorite products
- **Security**: Spring Security with JWT tokens
- **Database**: H2 (development), MySQL (production ready)

## Technologies

- Spring Boot 3.2.1
- Spring Security
- Spring Data JPA
- JWT (JSON Web Tokens)
- H2 Database
- Lombok
- Maven

## Getting Started

### Prerequisites
- Java 17 or higher
- Maven 3.6+

### Running the Application

1. Navigate to backend directory:
```bash
cd backend
```

2. Run with Maven:
```bash
mvn spring-boot:run
```

3. Or build and run JAR:
```bash
mvn clean package
java -jar target/fashionhub-backend-1.0.0.jar
```

The API will be available at `http://localhost:8080`

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - Login user

### Products
- `GET /api/products` - Get all products
- `GET /api/products/{id}` - Get product by ID
- `GET /api/products/category/{category}` - Get products by category
- `POST /api/products` - Create product (Admin)
- `PUT /api/products/{id}` - Update product (Admin)
- `DELETE /api/products/{id}` - Delete product (Admin)

### Orders
- `POST /api/orders` - Create new order
- `GET /api/orders` - Get user's orders
- `GET /api/orders/{id}` - Get order by ID
- `PUT /api/orders/{id}/status` - Update order status (Admin)

### Cart
- `GET /api/cart` - Get user's cart
- `POST /api/cart` - Add item to cart
- `PUT /api/cart/{id}` - Update cart item
- `DELETE /api/cart/{id}` - Remove item from cart

### Wishlist
- `GET /api/wishlist` - Get user's wishlist
- `POST /api/wishlist` - Add item to wishlist
- `DELETE /api/wishlist/{productId}` - Remove item from wishlist

## Database

### H2 Console (Development)
Access H2 console at: `http://localhost:8080/h2-console`
- JDBC URL: `jdbc:h2:mem:fashionhub`
- Username: `sa`
- Password: (empty)

### MySQL Configuration (Production)
Update `application.properties`:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/fashionhub
spring.datasource.username=your_username
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
```

## Security

- JWT tokens expire after 24 hours
- Passwords are encrypted using BCrypt
- CORS enabled for frontend (localhost:5173)
- Role-based access control (USER, ADMIN)

## Order Status Flow

1. PENDING - Order created
2. CONFIRMED - Payment confirmed
3. PROCESSING - Being prepared
4. SHIPPED - Out for delivery
5. DELIVERED - Completed
6. CANCELLED - Cancelled by user/admin
7. REFUNDED - Payment refunded

## Payment Methods

- Cash on Delivery
- Credit Card
- Debit Card
- Google Pay
- Bank Transfer

## Next Steps

1. Implement service layer
2. Implement controller layer
3. Add JWT configuration
4. Add security configuration
5. Add data initialization
6. Add unit tests
7. Add API documentation (Swagger)

## License

MIT License
