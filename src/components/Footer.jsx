import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        background: "#222",
        color: "white",
        padding: "20px 15px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "30px",
        }}
      >
        {/* About */}
        <div>
          <h3>E-Shop</h3>
          <p>
            Your one-stop destination for gadgets, electronics
            and accessories at the best prices.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3>Quick Links</h3>
          <p><Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link></p>
          <p><Link to="/products" style={{ color: "white", textDecoration: "none" }}>Products</Link></p>
          <p><Link to="/cart" style={{ color: "white", textDecoration: "none" }}>Cart</Link></p>
        </div>

        {/* Categories */}
        <div>
          <h3>Categories</h3>
          <p><Link to="/products?category=mobiles" style={{ color: "white", textDecoration: "none" }}>Mobiles</Link></p>
          <p><Link to="/products?category=laptops" style={{ color: "white", textDecoration: "none" }}>Laptops</Link></p>
          <p><Link to="/products?category=accessories" style={{ color: "white", textDecoration: "none" }}>Accessories</Link></p>
        </div>

        {/* Contact */}
        <div>
          <h3>Contact</h3>
          <p>Email: support@eshop.com</p>
          <p>Phone: +91 9393003939</p>
        </div>
      </div>

      {/* Bottom */}
      <div
        style={{
          textAlign: "center",
          marginTop: "30px",
          borderTop: "1px solid #444",
          paddingTop: "15px",
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        <p style={{ margin: 0 }}>© 2026 E-Shop. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;