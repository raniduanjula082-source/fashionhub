package com.fashionhub.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DBRef;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Document(collection = "orders")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Order {

    @Id
    private String id;

    @Indexed(unique = true)
    private String orderNumber;

    @DBRef
    private User user;

    // Embed OrderItems directly for performance
    private List<OrderItem> orderItems = new ArrayList<>();

    private BigDecimal totalAmount;

    private BigDecimal shippingCost = BigDecimal.ZERO;

    private BigDecimal discount = BigDecimal.ZERO;

    private OrderStatus status = OrderStatus.PENDING;

    private PaymentMethod paymentMethod;

    private PaymentStatus paymentStatus = PaymentStatus.PENDING;

    // Shipping Address
    private String shippingAddress;

    private String shippingCity;

    private String shippingPostalCode;

    private String shippingCountry = "Sri Lanka";

    private String shippingPhone;

    // Billing Address
    private String billingAddress;
    private String billingCity;
    private String billingPostalCode;
    private String billingCountry = "Sri Lanka";

    private String notes;

    private LocalDateTime deliveredAt;

    @CreatedDate
    private LocalDateTime createdAt;

    @LastModifiedDate
    private LocalDateTime updatedAt;

    public enum OrderStatus {
        PENDING,
        CONFIRMED,
        PROCESSING,
        SHIPPED,
        DELIVERED,
        CANCELLED,
        REFUNDED
    }

    public enum PaymentMethod {
        CASH_ON_DELIVERY,
        CREDIT_CARD,
        DEBIT_CARD,
        GOOGLE_PAY,
        BANK_TRANSFER
    }

    public enum PaymentStatus {
        PENDING,
        PAID,
        FAILED,
        REFUNDED
    }
}
