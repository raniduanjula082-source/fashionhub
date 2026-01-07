# FashionHub - E-Commerce Website

A modern, responsive e-commerce website built with React, TypeScript, Vite, and Tailwind CSS.

## 🏗️ Project Structure

```
src/
├── assets/           # Static assets (images, icons, fonts)
├── components/       # Reusable UI components
│   ├── common/      # Generic reusable components
│   │   ├── ImageWithFallback.tsx
│   │   ├── ShoppingCartModal.tsx
│   │   └── index.ts
│   ├── layout/      # Layout components
│   │   ├── Header.tsx
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   └── index.ts
│   └── product/     # Product-specific components
│       ├── ProductCard.tsx
│       ├── ProductGrid.tsx
│       └── index.ts
├── pages/           # Page components
│   ├── ShopPage.tsx
│   ├── AboutPage.tsx
│   ├── CareersPage.tsx
│   └── ContactPage.tsx
├── hooks/           # Custom React hooks (future use)
├── context/         # React context providers
│   └── CartContext.tsx
├── utils/           # Utility functions (future use)
├── types/           # TypeScript type definitions
│   ├── product.ts
│   ├── navigation.ts
│   └── index.ts
├── constants/       # App constants
│   └── navigation.ts
├── data/            # Mock data
│   └── products.ts
├── styles/          # Global styles
│   ├── index.css
│   ├── tailwind.css
│   ├── theme.css
│   └── fonts.css
├── App.tsx          # Main application component
└── main.tsx         # Application entry point
```

## 🚀 Features

- **Modern UI/UX**: Clean, professional design with smooth animations
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Shopping Cart**: Full-featured cart with add, remove, and quantity management
- **Product Categories**: Men, Women, Kids, Shoes, Accessories, and Sale sections
- **Context API**: Global state management for shopping cart
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first CSS framework for rapid development
- **Custom Animations**: Smooth transitions and micro-interactions

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🎨 Design Highlights

- **Gradient Backgrounds**: Modern gradient effects on headers and buttons
- **Hover Effects**: Interactive hover states on products and buttons
- **Smooth Animations**: Custom keyframe animations for cart and modals
- **Custom Scrollbar**: Styled scrollbar for better aesthetics
- **Responsive Grid**: Adaptive product grid layout
- **Professional Typography**: Clean, readable font hierarchy

## 🛠️ Technologies

- **React 18.3.1**: Modern React with hooks
- **TypeScript**: Type-safe development
- **Vite**: Fast build tool and dev server
- **Tailwind CSS 4**: Utility-first CSS framework
- **Lucide React**: Beautiful icon library
- **Radix UI**: Accessible component primitives

## 📱 Pages

- **Shop Pages**: Men, Women, Kids, Shoes, Accessories, Sale
- **About**: Company information
- **Careers**: Job opportunities
- **Contact**: Contact form and information

## 🔧 Key Components

### CartContext
Global state management for shopping cart functionality using React Context API.

### ProductCard
Reusable product card component with:
- Product image with fallback
- Rating display
- Price with discount
- Size selection
- Add to cart functionality

### ShoppingCartModal
Slide-in cart modal with:
- Cart items list
- Quantity management
- Price calculation
- Checkout button

### Header
Sticky header with:
- Logo and branding
- Search functionality
- User actions (cart, wishlist, account)
- Mobile-responsive menu

## 🎯 Future Enhancements

- [ ] Product filtering and sorting
- [ ] User authentication
- [ ] Wishlist functionality
- [ ] Product detail pages
- [ ] Checkout process
- [ ] Order history
- [ ] Product reviews
- [ ] Search functionality

## 📄 License

This project is licensed under the MIT License.

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.