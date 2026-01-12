import { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function ProductDetails() {
  const { state } = useLocation();
const navigate = useNavigate();

  // 🔹 Hooks MUST be on top
  const [qty, setQty] = useState("250g");
  const { addToCart } = useContext(CartContext);

  // 🔹 Safety check
  if (!state) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "50px" }}>
        Product not found
      </h2>
    );
  }

  const { name, image, prices } = state;

  return (
    <div
      style={{
        padding: "60px 100px",
        display: "flex",
        gap: "60px",
      }}
    >
      {/* 🖼️ Product Image */}
      <img
        src={image}
        alt={name}
        style={{
          width: "420px",
          height: "420px",
          objectFit: "cover",
          borderRadius: "20px",
        }}
      />

      {/* 📦 Product Details */}
      <div>
        <h1>{name}</h1>

        <p style={{ fontSize: "20px", margin: "15px 0" }}>
          <strong>₹{prices[qty]}</strong> / {qty}
        </p>

        <label>Quantity</label>
        <br />
        <select
          value={qty}
          onChange={(e) => setQty(e.target.value)}
          style={{
            marginTop: "10px",
            padding: "8px",
            borderRadius: "6px",
          }}
        >
          {Object.keys(prices).map((q) => (
            <option key={q} value={q}>
              {q}
            </option>
          ))}
        </select>

        <p style={{ marginTop: "20px", maxWidth: "420px" }}>
          Home-made pickle prepared using traditional methods. No preservatives,
          authentic taste, served with mom’s love ❤️
        </p>

       
        <button
  onClick={() => {
    navigate("/payment", {
      state: {
        product: {
          name,
          image,
          qty,
          price: prices[qty],
        },
      },
    });
  }}
  style={{
    marginTop: "12px",
    padding: "12px 30px",
    backgroundColor: "#2e7d32",
    color: "white",
    border: "none",
    borderRadius: "25px",
    fontSize: "16px",
    cursor: "pointer",
  }}
>
  Buy Now
</button>

      </div>
    </div>
  );
}

export default ProductDetails;
