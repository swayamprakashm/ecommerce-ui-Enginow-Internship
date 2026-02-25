import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const updateCart = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    updateCart(updatedCart);
  };

  const increaseQty = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    updateCart(updatedCart);
  };

  const decreaseQty = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
    }
    updateCart(updatedCart);
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "40px", maxWidth: "900px", margin: "auto" }}>
      <h2>Your Cart</h2>

      {cart.length === 0 && <p>Your cart is empty</p>}

      {cart.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "15px",
            marginBottom: "15px",
            background: "#fff",
          }}
        >
          <img
            src={item.image}
            alt={item.name}
            style={{
              width: "90px",
              height: "90px",
              objectFit: "contain",
            }}
          />

          <div style={{ flex: 1 }}>
            <h4>{item.name}</h4>
            <p>₹{item.price}</p>

            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <button onClick={() => decreaseQty(index)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => increaseQty(index)}>+</button>
            </div>
          </div>

          <button
            onClick={() => removeItem(index)}
            style={{
              background: "#ff4d4d",
              color: "white",
              border: "none",
              padding: "8px 12px",
              borderRadius: "30px",
              cursor: "pointer",
            }}
          >
            Remove
          </button>
        </div>
      ))}

      {cart.length > 0 && (
        <div style={{ marginTop: "30px", textAlign: "right" }}>
          <h3>Total: ₹{total}</h3>
          <button
            onClick={() => navigate("/checkout")}
            style={{
              padding: "12px 25px",
              background: "#28a745",
              color: "white",
              border: "none",
              borderRadius: "30px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;