# React Context API Shopping Cart

A responsive shopping cart application built using React and Tailwind CSS. This project demonstrates global state management using the React Context API and reusable React components.

## Features

* Display products with images, prices, descriptions, categories, and ratings.
* Add products to the shopping cart.
* Share cart state across components using the Context API.
* Switch between the Home and Cart views.
* Reusable components for the navbar, product cards, and cart.
* Responsive product grid using Tailwind CSS.

## Tech Stack

* React.js
* JavaScript
* Vite
* Tailwind CSS
* React Context API

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Nareshjena2005/react-context-api-shopping-cart.git
```

### 2. Navigate to the project folder

```bash
cd react-context-api-shopping-cart
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL shown in your terminal.

## Project Structure

```text
src/
├── components/
│   ├── Card.jsx
│   ├── Navbar.jsx
│   └── ProductCard.jsx
├── Context/
│   └── MyContext.jsx
├── App.jsx
├── index.css
└── main.jsx
```

## State Management

The React Context API is used to share cart items and the selected view between components without passing props through every level of the component tree.

## Future Improvements

* Remove products from the cart.
* Display the total price and cart item count.
* Prevent duplicate cart entries and support product quantities.
* Persist cart items using localStorage.

## Author

Naresh Kumar Jena

GitHub: [Nareshjena2005](https://github.com/Nareshjena2005)
