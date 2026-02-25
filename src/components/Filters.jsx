function Filters({
  search,
  setSearch,
  category,
  setCategory,
  price,
  setPrice
}) {

  return (

    <div style={{ marginBottom: "20px", display: "flex", gap: "10px", flexWrap: "wrap" , alignItems: "center" }}>

      {/* Search */}
      <input
        type="text"
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Category */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">All</option>
        <option value="mobile">Mobile</option>
        <option value="laptop">Laptop</option>
        <option value="accessories">Accessories</option>
      </select>

      {/* Price Range */}
      <div>

        <input
          type="range"
          min="0"
          max="100000"
          step="1000"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <p>Max Price: ₹{price}</p>

      </div>

    </div>

  );
}

export default Filters;