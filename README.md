# 👗 FashionHub - Full Stack E-Commerce Platform

FashionHub is a premium, modern e-commerce application designed for a seamless shopping experience. It features a high-performance React frontend and a robust Spring Boot backend powered by MongoDB.

---

## 📸 Overview

FashionHub provides a state-of-the-art interface with smooth animations, responsive layouts, and a secure checkout flow. The project is structured as a monorepo containing both the frontend and backend source code.

---

## 🚀 Key Features

### 💻 Frontend
- **Modern UI/UX**: Built with **React** and **Tailwind CSS** for a sleek, responsive design.
- **Micro-Animations**: Uses **Framer Motion** for premium transitions and hover effects.
- **State Management**: Efficient handling of user sessions, cart state, and product catalogs.
- **Product Explorer**: Advanced filtering, category navigation, and detailed product views.
- **Secure Authentication**: Dedicated flows for login and registration with form validation using **React Hook Form**.

### ⚙️ Backend
- **Spring Boot 3.2**: A scalable and secure RESTful API.
- **MongoDB**: Flexible NoSQL database for managing users, products, carts, and orders.
- **JWT Security**: Stateless authentication and authorization via **Spring Security** and JSON Web Tokens.
- **Data Seeding**: Automatic seeding of initial products and user data for quick development and testing.
- **CORS Support**: Configured to work seamlessly with the React development server.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | React, TypeScript, Vite, Tailwind CSS, Lucide Icons, Framer Motion, Radix UI |
| **Backend** | Java 17+, Spring Boot, Spring Security, Spring Data MongoDB, Lombok, JJWT |
| **Database** | MongoDB (Local or Atlas) |

---

## 🏁 Getting Started

### Prerequisites
- [Java 17 or higher](https://www.oracle.com/java/technologies/downloads/)
- [Node.js 18+](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community) (Local instance running on port 27017)
- [Maven](https://maven.apache.org/) (Optional, `mvnw` wrapper is included)

### 1. Database Setup
1. Ensure your local MongoDB service is running.
2. The backend is configured to use the database `fashionhub`. It will automatically create collections and seed initial data on first run.

### 2. Backend Setup
```bash
cd backend
./mvnw spring-boot:run
```
The backend will start on **http://localhost:8080**.

### 3. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
The frontend will start on **http://localhost:5173**.

---

## 📂 Project Structure

```text
fashionhub/
├── frontend/             # React TypeScript Application
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Main route pages
│   │   ├── services/     # API interaction logic
│   │   ├── hooks/        # Custom React hooks
│   │   └── types/        # TypeScript interfaces
├── backend/              # Spring Boot Application
│   ├── src/main/java/
│   │   └── com/fashionhub/
│   │       ├── controller/ # REST Endpoints
│   │       ├── service/    # Business Logic
│   │       ├── repository/ # MongoDB Data Access
│   │       ├── model/      # Entity definitions
│   │       └── config/     # Security & App configuration
│   └── data/               # Mock JSON data for seeding
└── README.md
```

---

## 🔐 Default Credentials
Once the application starts and seeds the data, you can log in with:

- **Email**: `user@fashionhub.com`
- **Password**: `user123`

---

## 📝 License
This project is developed for the FashionHub E-commerce platform. All rights reserved.
