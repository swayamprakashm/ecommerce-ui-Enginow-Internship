import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("cod");
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  // Load cart from localStorage
  const loadCart = () => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  };

  useEffect(() => {
    loadCart();
    const handleCartUpdate = () => loadCart();
    window.addEventListener("cartUpdated", handleCartUpdate);
    return () => window.removeEventListener("cartUpdated", handleCartUpdate);
  }, []);

  const placeOrder = () => {
    if (!address) {
      alert("Please enter delivery address");
      return;
    }

    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    alert(`Order placed successfully!\nPayment method: ${payment}`);
    localStorage.removeItem("cart");
    window.dispatchEvent(new Event("cartUpdated"));
    navigate("/");
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ padding: "40px", maxWidth: "600px", margin: "auto" }}>
      <h2>Checkout</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div style={{ marginBottom: "20px" }}>
          <h3>Order Summary</h3>
          {cart.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px 0",
                borderBottom: "1px solid #ddd",
              }}
            >
              <span>{item.name} x {item.quantity}</span>
              <span>₹{item.price * item.quantity}</span>
            </div>
          ))}
          <h3 style={{ textAlign: "right", marginTop: "10px" }}>Total: ₹{total}</h3>
        </div>
      )}

      {/* Address */}
      <div style={{ marginBottom: "20px" }}>
        <h3>Delivery Address</h3>
        <textarea
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter your full address"
          style={{
            width: "100%",
            height: "100px",
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            resize: "vertical",
          }}
        />
      </div>

      {/* Payment Options */}
      <div style={{ marginBottom: "20px" }}>
        <h3>Payment Method</h3>

        <label style={{ display: "block", margin: "8px 0" }}>
          <input
            type="radio"
            value="cod"
            checked={payment === "cod"}
            onChange={(e) => setPayment(e.target.value)}
          />
          Cash on Delivery
        </label>

        <label style={{ display: "block", margin: "8px 0" }}>
          <input
            type="radio"
            value="card"
            checked={payment === "card"}
            onChange={(e) => setPayment(e.target.value)}
          />
          Credit / Debit Card
        </label>

        <label style={{ display: "block", margin: "8px 0" }}>
          <input
            type="radio"
            value="upi"
            checked={payment === "upi"}
            onChange={(e) => setPayment(e.target.value)}
          />
          UPI Payment
        </label>
      </div>

      {/* Conditional Fields */}
      {payment === "card" && (
        <div style={{ marginBottom: "20px" }}>
          <h4>Card Details</h4>
          <input type="text" placeholder="Card Number" style={{ width: "100%", padding: "10px", marginBottom: "10px" }} />
          <input type="text" placeholder="Name on Card" style={{ width: "100%", padding: "10px", marginBottom: "10px" }} />
          <div style={{ display: "flex", gap: "10px" }}>
            <input type="text" placeholder="Expiry MM/YY" style={{ flex: 1, padding: "10px" }} />
            <input type="text" placeholder="CVV" style={{ flex: 1, padding: "10px" }} />
          </div>
        </div>
      )}

      {payment === "upi" && (
        <div style={{ marginBottom: "20px" }}>
          <h4>Scan QR to Pay</h4>
          <img src="/images/qr-code.png" alt="QR Code" style={{ width: "600px", height: "600px" }} />
        </div>
      )}

      <button
        onClick={placeOrder}
        style={{
          padding: "12px 25px",
          background: "#28a745",
          color: "white",
          border: "none",
          borderRadius: "30px",
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "16px",
        }}
      >
        Place Order
      </button>
    </div>
  );
}

export default Checkout;