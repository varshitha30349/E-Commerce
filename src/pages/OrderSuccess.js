import { useNavigate } from "react-router-dom";

function OrderSuccess() {
  const navigate = useNavigate();

  const orderId = "WOW" + Math.floor(100000 + Math.random() * 900000);

  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f9f9f9",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "40px 60px",
          borderRadius: "20px",
          textAlign: "center",
          boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
        }}
      >
        <h1 style={{ color: "#2e7d32", marginBottom: "10px" }}>
          ✅ Order Placed Successfully
        </h1>

        <p style={{ fontSize: "18px", marginBottom: "10px" }}>
          Thank you for ordering from <strong>Wow Pickles</strong>
        </p>

        <p style={{ marginBottom: "20px", color: "#555" }}>
          Your Order ID:
          <br />
          <strong>{orderId}</strong>
        </p>

        <p style={{ color: "#777", marginBottom: "30px" }}>
          We will deliver your order with mom’s love ❤️
        </p>

        <button
          onClick={() => navigate("/")}
          style={{
            padding: "12px 28px",
            backgroundColor: "#ff5ca8",
            color: "white",
            border: "none",
            borderRadius: "25px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}

export default OrderSuccess;
