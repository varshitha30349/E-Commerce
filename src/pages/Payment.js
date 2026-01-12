import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Payment() {
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ HOOKS MUST COME FIRST
  const [method, setMethod] = useState("upi");

  const product = location.state?.product;

  // ✅ SAFE CHECK AFTER HOOKS
  if (!product) {
    return <h2 style={{ padding: "40px" }}>No product selected</h2>;
  }

  const baseAmount = product.price;
  const finalAmount =
    method === "cod" ? baseAmount + 10 : baseAmount;

  return (
    <div style={{ padding: "60px 80px" }}>
      <h1 style={{ textAlign: "center" }}>Checkout</h1>

      <div
        style={{
          display: "flex",
          gap: "50px",
          marginTop: "40px",
        }}
      >
        {/* ORDER SUMMARY */}
        <div
          style={{
            flex: 1,
            border: "1px solid #ddd",
            borderRadius: "12px",
            padding: "25px",
          }}
        >
          <h2>Order Summary</h2>

          <p>
            {product.name} ({product.qty})
          </p>
          <p>Price: ₹{product.price}</p>

          {method === "cod" && (
            <p style={{ color: "red" }}>
              Cash on Delivery charge: ₹10
            </p>
          )}

          <hr style={{ margin: "20px 0" }} />

          <h3>Total: ₹{finalAmount}</h3>
        </div>

        {/* PAYMENT OPTIONS */}
        <div
          style={{
            flex: 1,
            border: "1px solid #ddd",
            borderRadius: "12px",
            padding: "25px",
          }}
        >
          <h2>Payment Method</h2>

          <div style={{ marginTop: "15px" }}>
            <label>
              <input
                type="radio"
                value="upi"
                checked={method === "upi"}
                onChange={(e) => setMethod(e.target.value)}
              />{" "}
              UPI
            </label>
            <br /><br />

            <label>
              <input
                type="radio"
                value="card"
                checked={method === "card"}
                onChange={(e) => setMethod(e.target.value)}
              />{" "}
              Card
            </label>
            <br /><br />

            <label>
              <input
                type="radio"
                value="cod"
                checked={method === "cod"}
                onChange={(e) => setMethod(e.target.value)}
              />{" "}
              Cash on Delivery
            </label>
          </div>

          <div style={{ marginTop: "25px" }}>
            {method === "upi" && (
              <>
                <input
                  placeholder="Enter UPI ID"
                  style={{
                    width: "100%",
                    padding: "10px",
                    marginBottom: "10px",
                  }}
                />
                <div
                  style={{
                    border: "1px dashed #aaa",
                    padding: "20px",
                    textAlign: "center",
                    color: "#777",
                  }}
                >
                  QR Code will appear here
                </div>
              </>
            )}

            {method === "card" && (
              <>
                <input
                  placeholder="Card Number"
                  style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
                />
                <input
                  placeholder="Expiry (MM/YY)"
                  style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
                />
                <input
                  placeholder="CVV"
                  style={{ width: "100%", padding: "10px" }}
                />
              </>
            )}

            {method === "cod" && (
              <p style={{ color: "#555" }}>
                You will pay ₹{finalAmount} when the order is delivered.
              </p>
            )}
          </div>

          <button
            onClick={() => navigate("/success")}
            style={{
              marginTop: "30px",
              width: "100%",
              padding: "12px",
              backgroundColor: "#ff5ca8",
              color: "white",
              border: "none",
              borderRadius: "25px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Pay ₹{finalAmount}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Payment;
