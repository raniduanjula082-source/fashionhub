package com.fashionhub.dto;

import com.fashionhub.model.Order;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderRequest {

    @NotEmpty(message = "Order items cannot be empty")
    private List<OrderItemRequest> items;

    @NotNull(message = "Payment method is required")
    private Order.PaymentMethod paymentMethod;

    @NotBlank(message = "Shipping address is required")
    private String shippingAddress;

    @NotBlank(message = "Shipping city is required")
    private String shippingCity;

    @NotBlank(message = "Shipping postal code is required")
    private String shippingPostalCode;

    private String shippingCountry = "Sri Lanka";

    @NotBlank(message = "Shipping phone is required")
    private String shippingPhone;

    private String billingAddress;
    private String billingCity;
    private String billingPostalCode;
    private String billingCountry = "Sri Lanka";

    private String notes;

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class OrderItemRequest {
        @NotNull(message = "Product ID is required")
        private String productId;

        @NotNull(message = "Quantity is required")
        private Integer quantity;

        private String size;
        private String color;
    }
}
