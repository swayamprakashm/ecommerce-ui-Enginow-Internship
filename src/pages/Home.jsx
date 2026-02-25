import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Home() {

const featured = [
{
id: 1,
name: "Smartphone",
price: "₹80000",
image: "/assets/iphone14.png"
},
{
id: 2,
name: "Laptop",
price: "₹70000",
image: "/assets/laptophp.png"
},
{
id: 3,
name: "Headphones",
price: "₹5000",
image: "/assets/sonyheadphones.png"
}
];

const banners = [
"/assets/salesbanner.png",
"/assets/salesbanner2.png",
"/assets/salesbanner3.png"
];

const [current, setCurrent] = useState(0);

useEffect(() => {

const interval = setInterval(() => {
  setCurrent((prev) => (prev + 1) % banners.length);
}, 3000);

return () => clearInterval(interval);

}, []);

return (

<div style={{ padding: "40px", maxWidth: "1200px", margin: "auto" }}>

  {/* Hero Section */}
  <div style={{ textAlign: "center", marginBottom: "40px" }}>

    <h1>Welcome to E-Shop</h1>

    <p>Discover amazing gadgets and electronics at unbeatable prices.</p>

    <p>Explore our wide range of products and enjoy a seamless shopping experience.</p>

    <img
      src="/assets/shopping.png"
      alt="Hero"
      style={{
        width: "100%",
        maxHeight: "400px",
        objectFit: "contain",
        borderRadius: "10px",
        marginTop: "20px"
      }}
    />

    <Link to="/products">
      <button
        style={{
          padding: "12px 25px",
          marginTop: "20px",
          background: "#ffea00",
          border: "none",
          borderRadius: "30px",
          cursor: "pointer",
          fontWeight: "bold"
        }}
      >
        Shop Now
      </button>
    </Link>

  </div>

  {/* Sale Banner Slider */}
  <div
    style={{
      width: "100%",
      height: "350px",
      overflow: "hidden",
      borderRadius: "10px",
      marginBottom: "40px"
    }}
  >

    <img
      src={banners[current]}
      alt="Sale Banner"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "fill",
        transition: "0.5s"
      }}
    />

  </div>

  {/* Categories */}
  <h2>Categories</h2>

  <div
    style={{
      display: "flex",
      gap: "20px",
      marginTop: "15px",
      marginBottom: "40px"
    }}
  >

    <div style={{ padding: "15px 25px", background: "#eee", borderRadius: "8px" }}>
      Mobiles
    </div>

    <div style={{ padding: "15px 25px", background: "#eee", borderRadius: "8px" }}>
      Laptops
    </div>

    <div style={{ padding: "15px 25px", background: "#eee", borderRadius: "8px" }}>
      Accessories
    </div>

  </div>

  {/* Featured Products */}

  <h2>Featured Products</h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))",
      gap: "25px",
      marginTop: "20px"
    }}
  >

    {featured.map((item) => (

      <div
        key={item.id}
        style={{
          border: "1px solid #ddd",
          borderRadius: "10px",
          padding: "15px",
          textAlign: "center",
          background: "#fff",
          transition: "0.3s",
          cursor: "pointer"
        }}

        onMouseOver={(e)=>{
          e.currentTarget.style.transform="translateY(-8px)";
          e.currentTarget.style.boxShadow="0 10px 25px rgba(0,0,0,0.15)";
        }}

        onMouseOut={(e)=>{
          e.currentTarget.style.transform="translateY(0)";
          e.currentTarget.style.boxShadow="none";
        }}
      >

        <img
          src={item.image}
          alt={item.name}
          style={{
            width: "100%",
            height: "150px",
            objectFit: "contain",
            transition: "0.3s"
          }}

          onMouseOver={(e)=> e.currentTarget.style.transform="scale(1.1)"}
          onMouseOut={(e)=> e.currentTarget.style.transform="scale(1)"}
        />

        <h4>{item.name}</h4>

        <p>{item.price}</p>

        <Link to="/products">
          <button
            style={{
              padding: "8px 15px",
              background: "#ffea00",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            View
          </button>
        </Link>

      </div>

    ))}

  </div>

</div>

);

}

export default Home;