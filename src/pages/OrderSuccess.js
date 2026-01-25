import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function OrderSuccess() {
  const navigate = useNavigate();
const orderId = "WOW" + Math.floor(100000 + Math.random() * 900000);

  // Calculate delivery dates
  const today = new Date();
  const minDate = new Date(today);
  minDate.setDate(today.getDate() + 3);

  const maxDate = new Date(today);
  maxDate.setDate(today.getDate() + 5);

  const formatDate = (date) =>
    date.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

  return (
    <div
      style={{
        padding: "80px",
        textAlign: "center",
      }}
    >
      <h1 style={{ color: "#2e7d32", fontSize: "40px" }}>
        🎉 Order Placed Successfully!
      </h1>

      <p style={{ fontSize: "18px", marginTop: "15px" }}>
        Thank you for ordering from <strong>Wow Pickles</strong> ❤️
      </p>
      <p style={{ marginBottom: "20px", color: "#555" }}>
          Your Order ID:
          <br />
          <strong>{orderId}</strong>
        </p>

      <p style={{ marginTop: "20px", fontSize: "17px" }}>
        <strong>Estimated Delivery:</strong>{" "}
        {formatDate(minDate)} – {formatDate(maxDate)}
      </p>

      <p style={{ marginTop: "10px", color: "#555" }}>
        Your delicious homemade pickles are on the way!
      </p>

      <button
        onClick={() => navigate("/")}
        style={{
          marginTop: "35px",
          padding: "12px 30px",
          backgroundColor: "#ff5ca8",
          color: "white",
          border: "none",
          borderRadius: "25px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Back to Home
      </button>
    </div>
  );
}

export default OrderSuccess;
