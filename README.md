# 🥭 Wow Pickles – Homemade Pickle E-Commerce Website

Wow Pickles is a frontend e-commerce web application built using **React** that allows users to browse, select, and purchase authentic homemade pickles prepared with mom’s love ❤️.

This project focuses on a clean UI, smooth navigation, and a complete **Buy Now → Payment → Order Success** flow.

---

## 🚀 Features

- 🏠 **Home Page**
  - Category-based navigation (Veg, Non-Veg, Karam Podis)
  - Attractive product cards with images
  - “View Products” redirects to filtered catalog

- 📦 **Catalog Page**
  - Displays all products
  - Category filter (Veg / Non-Veg / Podis)
  - Uniform product cards with images and prices

- 🔍 **Product Details Page**
  - Detailed view of selected product
  - Quantity selection (250g / 500g / 1kg)
  - Dynamic price update
  - Buy Now option

- 💳 **Payment Page**
  - Multiple payment methods:
    - UPI
    - Card
    - Cash on Delivery (+₹10 charge)
  - Dynamic total amount calculation
  - Conditional UI based on selected payment method

- ✅ **Order Success Page**
  - Order confirmation message
  - Auto-generated Order ID
  - “Continue Shopping” option

---

## 🛠️ Tech Stack

- **Frontend:** React.js  
- **Routing:** React Router DOM  
- **State Management:** React Hooks (`useState`, `useLocation`, `useNavigate`)  
- **Styling:** Inline CSS  
- **Version Control:** Git & GitHub  

---

## 📂 Project Structure

src/
│── components/
│ ├── Header.js
│ ├── Footer.js
│
│── pages/
│ ├── Home.js
│ ├── Catalog.js
│ ├── ProductDetails.js
│ ├── Payment.js
│ ├── OrderSuccess.js
│
│── assets/
│ ├── products/
│
│── App.js
│── index.js