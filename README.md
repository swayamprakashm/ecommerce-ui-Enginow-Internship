---

# E-Commerce UI

A clean and responsive e‑commerce frontend built with **React** and **Vite**.  
This project serves as the user interface for a shopping platform with features like product listing, cart management, navigation, and checkout workflows.

---

## 🚀 Live Demo

<p align="center">
  <a href="https://ecommerce-ui-enginow.netlify.app/" target="_blank">
    <img src="https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge&logo=web" alt="Live Demo" />
  </a>

---

## 🎥 Demo Video



https://github.com/user-attachments/assets/9303b7c7-6152-4d68-b79e-6d72c66aecd6



---

## 🚀 Features

**User Experience**
- Home page with browsing UI  
- Product listings with add to cart  
- Persistent cart using `localStorage`  
- Cart page with quantity controls  
- Checkout page with multiple payment options  
  - Cash on Delivery  
  - Credit/Debit Card input fields  
  - UPI/QR payment display

**Navigation**
- Sticky header with product search  
- Live cart item count  
- Quick links to all major pages

**Footer**
- Responsive footer with site links, categories, and contact info

**Responsive and modern UI**
- Works on mobile, tablet, and desktop  
- Clean layout with readable typography

---

## 📁 Project Structure

```

ecommerce-ui/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── package.json
├── vite.config.js
└── README.md

````

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| React      | UI library |
| Vite       | Development server & build tool |
| JavaScript | Frontend logic |
| CSS        | Styling |
| localStorage | Cart persistence |

---

## 💻 Getting Started

### 🔹 Prerequisites

Make sure you have **Node.js (v14+)** and **npm** installed.

---

### 🔹 Install & Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/swayamprakashm/ecommerce-ui.git
   ```

2. Change directory:

   ```bash
   cd ecommerce-ui
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and go to:

   ```
   http://localhost:5173
   ```

---

## 🧪 Usage

* Browse products on the home page.
* Add items to the cart.
* Go to the Cart page to adjust quantities or remove items.
* Proceed to Checkout.

  * Choose payment method
  * If **Card** is selected, card detail fields show
  * If **UPI** is selected, a QR image displays (ensure your image is placed in `public/images`).

---

## 🎯 Future Enhancements

Here are some ideas you can add next:

* Backend API for products, auth, and orders
* User authentication & profiles
* Payment integration (Stripe, Razorpay)
* Product search & filters
* Wishlist & order history

---

## ❓ Contributing

Contributions are welcome! Feel free to open issues or pull requests with improvements.

---

## 🙏 Special Thanks

I would like to express my sincere gratitude to **Enginow** for giving me the opportunity to work as a Frontend Developer Intern.

The internship provided me with valuable real-world experience in building responsive web applications using HTML, CSS, and JavaScript. It helped me strengthen my technical skills, improve problem-solving abilities, and understand professional development workflows.

Thank you, Enginow, for the guidance and learning experience.
