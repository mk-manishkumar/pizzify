# Pizzify

Pizzify is an interactive pizza ordering application built with **React** and **TypeScript** using **Redux Toolkit** for global state management. This project demonstrates clean UI design, cart functionality, dynamic product pages, and a simulated checkout process — all styled using **Tailwind CSS**.

## 🚀 Deployed Link

This project is deployed on Netlify.
👉 [Visit Pizzify](https://pizzify.netlify.app/)

---

## 📦 Features

* 🍕 Browse pizzas (Veg & Non-Veg)
* 🛒 Add to cart, update quantity, and remove items
* 💳 Simulated checkout flow with form validation
* 🎟 Apply promo code for discounts
* ✅ Order confirmation modal
* 🔄 Fully responsive design for mobile and desktop
* 🌈 Toast notifications for user interactions

---

## 🛠️ Tech Stack

* **Frontend Framework:** React + TypeScript
* **Styling:** Tailwind CSS
* **Routing:** React Router DOM
* **State Management:** Redux Toolkit
* **Notifications:** React Toastify
* **Icons:** Lucide React Icons
* **Bundler:** Vite

---

## 🗂️ Project Structure

```
pizzify/
├── public/
│   ├── carouselImages/       # Carousel assets
│   ├── pizzalImages/         # Pizza item images
│   └── favicon/              # App icons
├── src/
│   ├── assets/               # Global static assets
│   ├── components/
│   │   ├── HomeComponents/   # Components for home page (Carousel, Pizza list)
│   │   └── SharedComponents/ # Reusable UI components (Navbar, Footer, etc.)
│   ├── data/
│   │   └── pizzas.ts         # Pizza dataset
│   ├── pages/
│   │   ├── Home.tsx          # Landing page
│   │   ├── Cart.tsx          # Cart page
│   │   ├── Checkout.tsx      # Checkout form & order summary
│   │   ├── ErrorPage.tsx     # 404 fallback
│   │   └── PizzaDetails.tsx  # Single pizza view
│   ├── redux/
│   │   ├── cartSlice.ts      # Cart state logic
│   │   └── store.ts          # Redux store setup
│   ├── utils/
│   │   └── slugify.tsx       # Utility to generate slugs
│   ├── App.tsx               # App root component
│   ├── main.tsx              # Vite entry point
│   ├── index.css             # Base styles
│   └── App.css               # App-level styles
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

---

## ⚙️ Prerequisites

* Node.js (v16+)
* npm or yarn

---

## 🧑‍💻 Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/pizzify.git
   cd pizzify
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

---

## 📜 Available Scripts

| Command           | Description                    |
| ----------------- | ------------------------------ |
| `npm run dev`     | Start local development server |
| `npm run build`   | Build for production           |
| `npm run preview` | Preview production build       |
| `npm run lint`    | Lint project using ESLint      |

---

## 🔍 Key Feature Details

### 🛒 Cart System

* Redux Toolkit-based state management
* Add, increment, decrement, and remove items
* Quantity controlled via UI buttons
* Total cost updates in real time

### 💳 Checkout Flow

* Form for name, email, phone, and address
* Promo code input (e.g., `DISCOUNT50`)
* Final cost calculation with fees
* Order confirmation modal with delivery message

### 🔍 Pizza Details

* Individual pizza description pages
* Dynamically routed using pizza ID or slug
* Clean responsive layout

---

## 📱 Responsive Design

* Fully mobile-optimized
* Built with Tailwind's utility-first classes
* Clean and readable UI design

---

## 🚀 Future Enhancements

* [ ] Add backend for real-time orders
* [ ] Implement user login & signup
* [ ] Save cart to localStorage or database
* [ ] Integrate payment gateway (e.g., Razorpay)
* [ ] Multi-category filters (e.g., price range, rating)

---

## 🌐 Browser Compatibility

* Chrome ✅
* Firefox ✅
* Safari ✅
* Edge ✅

---

## 🤝 Contributing

This project is intended for learning and demo purposes.
Feel free to fork and make contributions.

1. Fork the repo
2. Create a new branch (`feature/my-feature`)
3. Commit and push your changes
4. Open a pull request

---

## 📩 Contact

Feel free to reach out for feedback or questions:
📨 [Twitter/X](https://x.com/_manishmk)

