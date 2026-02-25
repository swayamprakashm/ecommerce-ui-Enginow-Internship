import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products";

function ProductDetails() {

  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const addToCart = () => {

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existingProduct = cart.find(item => item.id === product.id);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } 
  else {

    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });

  }

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Product added to cart");
};

  const buyNow = () => {

    const cart = [{ ...product, quantity: 1 }];

    localStorage.setItem("cart", JSON.stringify(cart));

    navigate("/cart");
  };

  return (

    <div style={{ padding: "40px", maxWidth: "1100px", margin: "auto" }}>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
          alignItems: "center"
        }}
      >

        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "100%",
            maxHeight: "400px",
            objectFit: "contain",
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "5px"
          }}
        />

        <div>

          <h1>{product.name}</h1>

          <p style={{ fontSize: "22px", fontWeight: "bold" }}>
            ₹{product.price}
          </p>

          <p style={{ color: "#555" }}>⭐ {product.rating}</p>

          <p style={{ marginTop: "20px" }}>{product.description}</p>

          <h3 style={{ marginTop: "20px" }}>Features</h3>

          <ul>
            {product.details.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <div style={{ display: "flex", gap: "15px", marginTop: "25px" }}>

            <button
              onClick={addToCart}
              style={{
                padding: "12px 20px",
                background: "#ffea00",
                border: "none",
                borderRadius: "30px",
                cursor: "pointer",
                fontWeight: "bold"
              }}
            >
              Add to Cart
            </button>

            <button
              onClick={buyNow}
              style={{
                padding: "12px 20px",
                background: "#ff9900",
                border: "none",
                borderRadius: "30px",
                cursor: "pointer",
                fontWeight: "bold"
              }}
            >
              Buy Now
            </button>

          </div>

        </div>

      </div>

    </div>

  );
}

export default ProductDetails;