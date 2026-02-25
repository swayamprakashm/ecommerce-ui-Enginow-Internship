import { Link } from "react-router-dom";

function ProductCard({ product }) {

  const addToCart = () => {

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Product added to cart!");
  };

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        textAlign: "center",
        background: "#fff",
        transition: "all 0.3s ease",
        cursor: "pointer"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)";
        e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >

      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "100%",
          height: "180px",
          objectFit: "contain",
          transition: "transform 0.3s"
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      />

      <h4 style={{ marginTop: "10px" }}>{product.name}</h4>

      <p style={{ fontWeight: "bold" }}>₹{product.price}</p>

      <p style={{ color: "#555" }}>⭐ {product.rating}</p>

      <div style={{ display: "flex", gap: "10px", justifyContent: "center", marginTop: "10px" }}>

        <button
          onClick={addToCart}
          style={{
            padding: "8px 15px",
            background: "#ffd814",
            border: "none",
            borderRadius: "20px",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          Add to Cart
        </button>

        <Link to={`/product/${product.id}`}>
          <button
            style={{
              padding: "8px 15px",
              background: "#ff9900",
              border: "none",
              borderRadius: "20px",
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            View Product
          </button>
        </Link>

      </div>

    </div>
  );
}

export default ProductCard;