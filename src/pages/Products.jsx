import { useState } from "react";
import productsData from "../data/products";
import ProductCard from "../components/ProductCard";
import Filters from "../components/Filters";

function Products() {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(100000);

  const filteredProducts = productsData.filter(product => {

    return (
      product.name.toLowerCase().includes(search.toLowerCase()) &&
      (category === "" || product.category === category) &&
      product.price <= price
    );

  });

  return (

    <div style={{ padding: "40px" }}>

      <h2>Products</h2>

      <Filters
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        price={price}
        setPrice={setPrice}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px"
        }}
      >

        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}

      </div>

    </div>

  );
}

export default Products;