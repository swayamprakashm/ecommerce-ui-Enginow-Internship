import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const [count, setCount] = useState(0);

  const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    setCount(totalItems);
  };

  useEffect(() => {
    updateCartCount();

    // Listen for storage changes (cart updates in other tabs/components)
    window.addEventListener("storage", updateCartCount);

    return () => {
      window.removeEventListener("storage", updateCartCount);
    };
  }, []);

  return (
    <nav
      style={{
        position: "fixed",      // Stick to top
        top: 0,
        left: 0,
        width: "100%",          // Full width
        background: "#131921",  // Fill color
        padding: "15px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        color: "white",
        zIndex: 1000,           // Stay above other elements
        boxSizing: "border-box",
      }}
    >
      {/* Logo */}
      <Link
        to="/"
        style={{
          fontSize: "22px",
          fontWeight: "bold",
          color: "white",
          textDecoration: "none",
        }}
      >
        E-Shop
      </Link>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search products..."
        style={{
          width: "40%",
          padding: "8px",
          borderRadius: "30px",
          border: "none",
        }}
      />

      {/* Navigation Links */}
      <div style={{ display: "flex", gap: "25px", alignItems: "center" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Home
        </Link>
        <Link
          to="/products"
          style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}
        >
          Products
        </Link>
        <Link
          to="/cart"
          style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}
        >
          🛒 Cart ({count})
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;