# FashionHub MongoDB Guide

This guide details the MongoDB database structure, collections, and common queries for the FashionHub backend.

## Database Information

*   **Database Name:** `fashionhub`
*   **Connection URI:** `mongodb://localhost:27017/fashionhub`

## Collections

The application uses the following collections:

1.  **`users`**
    *   Stores user account information, roles, and embedded/referenced data.
    *   **Fields:** `_id`, `firstName`, `lastName`, `email`, `password`, `roles`, `createdAt`, `updatedAt`, `enabled`, etc.

2.  **`products`**
    *   Stores the product catalog.
    *   **Fields:** `_id`, `name`, `description`, `price`, `category`, `brand`, `imageUrl`, `stockQuantity`, `sizes`, `colors`, `active`, etc.

3.  **`orders`**
    *   Stores customer orders.
    *   **Fields:** `_id`, `orderNumber`, `user` (reference), `orderItems` (embedded array), `totalAmount`, `status`, `shippingAddress`, `paymentMethod`, etc.

4.  **`cart_items`**
    *   Stores temporary items in user shopping carts.
    *   **Fields:** `_id`, `user` (reference), `product` (reference), `quantity`, `size`, `color`, `createdAt`.

5.  **`wishlist_items`**
    *   Stores user saved items.
    *   **Fields:** `_id`, `user` (reference), `product` (reference), `createdAt`.

---

## Useful MongoDB Queries (Shell Commands)

You can run these commands in the MongoDB Shell (`mongosh`) or a GUI tool like MongoDB Compass.

### 1. Basic Setup & Inspection

```javascript
// Switch to the database
use fashionhub

// List all collections
show collections

// Count documents in a collection
db.users.countDocuments()
db.products.countDocuments()
db.orders.countDocuments()
```

### 2. User Management

```javascript
// Find all users
db.users.find().pretty()

// Find a specific user by email
db.users.find({ email: "john.doe@example.com" }).pretty()

// Find all ADMIN users
db.users.find({ roles: "ROLE_ADMIN" }).pretty()

// Delete a user by email
db.users.deleteOne({ email: "test@example.com" })
```

### 3. Product Management

```javascript
// Find all active products
db.products.find({ active: true }).pretty()

// FInd products by category
db.products.find({ category: "women" }).pretty()

// Find products with low stock (e.g., less than 5)
db.products.find({ stockQuantity: { $lt: 5 } }).pretty()

// Search products by name (case-insensitive regex)
db.products.find({ name: { $regex: /shirt/i } }).pretty()

// Update product price
db.products.updateOne(
  { name: "Summer Dress" },
  { $set: { price: 15000 } }
)
```

### 4. Order Management

```javascript
// Find all orders
db.orders.find().pretty()

// Find orders for a specific user (requires User ObjectId)
db.orders.find({ user: ObjectId("YOUR_USER_ID_HERE") }).pretty()

// Find all PENDING orders
db.orders.find({ status: "PENDING" }).pretty()

// Find orders with total amount greater than 20,000
db.orders.find({ totalAmount: { $gt: 20000 } }).pretty()

// Update order status to SHIPPED
db.orders.updateOne(
  { orderNumber: "ORD-12345678" },
  { $set: { status: "SHIPPED", updatedAt: new Date() } }
)
```

### 5. Cart & Wishlist

```javascript
// View a user's cart items
db.cart_items.find({ user: ObjectId("YOUR_USER_ID_HERE") }).pretty()

// Clear a user's cart
db.cart_items.deleteMany({ user: ObjectId("YOUR_USER_ID_HERE") })

// View wishlist
db.wishlist_items.find({ user: ObjectId("YOUR_USER_ID_HERE") }).pretty()
```

### 6. Aggregation Examples

```javascript
// Calculate total revenue from all DELIVERED orders
db.orders.aggregate([
  { $match: { status: "DELIVERED" } },
  { $group: { _id: null, totalRevenue: { $sum: "$totalAmount" } } }
])

// Count orders by status
db.orders.aggregate([
  { $group: { _id: "$status", count: { $sum: 1 } } }
])
```

## Indexes

To improve performance, ensure the following indexes exist (Spring Data usually creates them automatically):

```javascript
// User email (unique)
db.users.createIndex({ email: 1 }, { unique: true })

// Order number (unique)
db.orders.createIndex({ orderNumber: 1 }, { unique: true })

// Product category (for filtering)
db.products.createIndex({ category: 1 })
```
