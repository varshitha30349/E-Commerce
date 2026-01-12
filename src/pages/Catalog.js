import { useState } from "react";
import { useLocation } from "react-router-dom";
// 🔹 Veg images
import avakaya from "../assets/products/avakaya.jpg";
import gongura from "../assets/products/gongura.jpg";
import lemon from "../assets/products/lemon.jpg";
import tomato from "../assets/products/tomato.jpg";
import amla from "../assets/products/amla.jpg";

// 🔹 Non-Veg images
import chicken from "../assets/products/chicken.jpg";
import mutton from "../assets/products/mutton.webp";
import prawn from "../assets/products/prawn.jpg";
import fish from "../assets/products/fish.jpg";

// 🔹 Podi images
import coconutpodi from "../assets/products/coconutpodi.jpg";
import idlypodi from "../assets/products/idlypodi.jpg";
import curryleafpodi from "../assets/products/curryleafpodi.jpg";
import peanutpodi from "../assets/products/peanutpodi.jpg";
import flaxseedpodi from "../assets/products/flaxseedpodi.jpg";

/* ================= PRODUCT CARD ================= */
import { useNavigate } from "react-router-dom";
function ProductCard({ item }) {
  const [qty, setQty] = useState("250g");
const navigate = useNavigate();

  return (
    <div
      style={{
        height: "320px",
        borderRadius: "16px",
        overflow: "hidden",
        position: "relative",
        boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
        backgroundImage: `url(${item.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          padding: "15px",
          background:
            "linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0.15))",
          color: "white",
        }}
      >
        <h3>{item.name}</h3>

        <p style={{ margin: "4px 0", fontSize: "14px" }}>
          <strong>₹{item.prices[qty]}</strong> / {qty}
        </p>

        <select
          value={qty}
          onChange={(e) => setQty(e.target.value)}
          style={{
            marginTop: "6px",
            padding: "6px",
            borderRadius: "6px",
            border: "none",
            width: "100%",
          }}
        >
          {Object.keys(item.prices).map((q) => (
            <option key={q} value={q}>
              {q}
            </option>
          ))}
        </select>

        <button
  onClick={() =>
    navigate("/product", {
      state: item,
    })
  }
  style={{
    marginTop: "8px",
    padding: "6px 14px",
    borderRadius: "20px",
    border: "none",
    backgroundColor: "#ff5ca8",
    color: "white",
    cursor: "pointer",
    width: "100%",
  }}
>
  View Details
</button>

      </div>
    </div>
  );
}

/* ================= CATALOG ================= */
function Catalog() {
  const location = useLocation();
const initialCategory = location.state?.category || "all";

const [category, setCategory] = useState(initialCategory);


  const products = {
    veg: [
      {
        name: "Avakaya Pickle",
        image: avakaya,
        prices: { "250g": 220, "500g": 420, "1kg": 800 },
      },
      {
        name: "Gongura Pickle",
        image: gongura,
        prices: { "250g": 240, "500g": 450, "1kg": 850 },
      },
      {
        name: "Lemon Pickle",
        image: lemon,
        prices: { "250g": 200, "500g": 380, "1kg": 720 },
      },
      {
        name: "Tomato Pickle",
        image: tomato,
        prices: { "250g": 210, "500g": 400, "1kg": 760 },
      },
      {
        name: "Mixed Veg Pickle",
        image: amla,
        prices: { "250g": 230, "500g": 440, "1kg": 820 },
      },
    ],

    nonVeg: [
      {
        name: "Chicken Pickle",
        image: chicken,
        prices: { "250g": 450, "500g": 850, "1kg": 1600 },
      },
      {
        name: "Mutton Pickle",
        image: mutton,
        prices: { "250g": 550, "500g": 1050, "1kg": 2000 },
      },
      {
        name: "Prawn Pickle",
        image: prawn,
        prices: { "250g": 500, "500g": 950, "1kg": 1800 },
      },
      {
        name: "Fish Pickle",
        image: fish,
        prices: { "250g": 480, "500g": 900, "1kg": 1700 },
      },
    ],

    podi: [
      {
        name: "Coconut Podi",
        image: coconutpodi,
        prices: { "250g": 180, "500g": 340, "1kg": 650 },
      },
      {
        name: "Idli Podi",
        image: idlypodi,
        prices: { "250g": 160, "500g": 300, "1kg": 580 },
      },
      {
        name: "Curry Leaf Podi",
        image: curryleafpodi,
        prices: { "250g": 170, "500g": 320, "1kg": 600 },
      },
      {
        name: "Peanut Podi",
        image: peanutpodi,
        prices: { "250g": 150, "500g": 280, "1kg": 540 },
      },
      {
        name: "Flax Seed Podi",
        image: flaxseedpodi,
        prices: { "250g": 190, "500g": 360, "1kg": 680 },
      },
    ],
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "30px",
  };

  const renderSection = (title, items) => (
    <>
      <h2 style={{ margin: "50px 0 20px" }}>{title}</h2>
      <div style={gridStyle}>
        {items.map((item, i) => (
          <ProductCard key={i} item={item} />
        ))}
      </div>
    </>
  );

  return (
    <div style={{ padding: "50px 80px" }}>
      <h1 style={{ textAlign: "center" }}>Our Catalog</h1>

      {/* Category Filter */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        {["all", "veg", "nonVeg", "podi"].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            style={{
              padding: "8px 18px",
              borderRadius: "20px",
              border: "1px solid #ff5ca8",
              backgroundColor: category === cat ? "#ff5ca8" : "white",
              color: category === cat ? "white" : "#ff5ca8",
              cursor: "pointer",
            }}
          >
            {cat === "all"
              ? "All"
              : cat === "veg"
              ? "Veg"
              : cat === "nonVeg"
              ? "Non-Veg"
              : "Podis"}
          </button>
        ))}
      </div>

      {(category === "all" || category === "veg") &&
        renderSection("Veg Pickles", products.veg)}

      {(category === "all" || category === "nonVeg") &&
        renderSection("Non-Veg Pickles", products.nonVeg)}

      {(category === "all" || category === "podi") &&
        renderSection("Karam Podis", products.podi)}
    </div>
  );
}

export default Catalog;
