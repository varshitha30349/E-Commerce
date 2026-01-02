function Catalog() {
  const products = {
    nonVeg: [
      { name: "Chicken Pickle", price: "₹450 / 250g" },
      { name: "Mutton Pickle", price: "₹550 / 250g" },
      { name: "Prawn Pickle", price: "₹500 / 250g" },
      { name: "Fish Pickle", price: "₹480 / 250g" },
      { name: "Crab Pickle", price: "₹520 / 250g" },
    ],
    veg: [
      { name: "Avakaya", price: "₹220 / 250g" },
      { name: "Gongura", price: "₹240 / 250g" },
      { name: "Tomato Pickle", price: "₹200 / 250g" },
      { name: "Lemon Pickle", price: "₹180 / 250g" },
      { name: "Mixed Veg Pickle", price: "₹230 / 250g" },
    ],
    podis: [
      { name: "Karam Podi", price: "₹180 / 250g" },
      { name: "Idli Podi", price: "₹160 / 250g" },
      { name: "Curry Leaf Podi", price: "₹170 / 250g" },
      { name: "Flax Seed Podi", price: "₹190 / 250g" },
      { name: "Peanut Podi", price: "₹150 / 250g" },
    ],
  };

  const sectionStyle = {
    marginBottom: "50px",
  };

  const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "15px",
    width: "220px",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
        Our Catalog
      </h1>

      {/* Non-Veg */}
      <div style={sectionStyle}>
        <h2>Non-Veg Pickles</h2>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {products.nonVeg.map((p, i) => (
            <div key={i} style={cardStyle}>
              <h4>{p.name}</h4>
              <p>{p.price}</p>
              <button>View</button>
            </div>
          ))}
        </div>
      </div>

      {/* Veg */}
      <div style={sectionStyle}>
        <h2>Veg Pickles</h2>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {products.veg.map((p, i) => (
            <div key={i} style={cardStyle}>
              <h4>{p.name}</h4>
              <p>{p.price}</p>
              <button>View</button>
            </div>
          ))}
        </div>
      </div>

      {/* Podis */}
      <div style={sectionStyle}>
        <h2>Karam Podis</h2>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {products.podis.map((p, i) => (
            <div key={i} style={cardStyle}>
              <h4>{p.name}</h4>
              <p>{p.price}</p>
              <button>View</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Catalog;
