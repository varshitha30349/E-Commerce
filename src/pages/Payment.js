import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Payment() {
  const navigate = useNavigate();
  const location = useLocation();

  const product = location.state?.product;
  const address = location.state?.address;

  // ✅ hooks at top
  const [method, setMethod] = useState("upi");
  const [upiId, setUpiId] = useState("");

  if (!product || !address) {
    return <h2 style={{ padding: "40px" }}>Invalid payment data</h2>;
  }

  // ✅ UPI format validation
  const isValidUpi = (upi) => {
    const upiRegex = /^[a-zA-Z0-9.\-_]{2,}@[a-zA-Z]{2,}$/;
    return upiRegex.test(upi);
  };

  const baseAmount = product.price;
  const finalAmount = method === "cod" ? baseAmount + 10 : baseAmount;

  // ✅ enable / disable pay button
  const canPay =
    method === "cod" ||
    (method === "upi" && isValidUpi(upiId)) ||
    method === "card";

  return (
    <div style={{ padding: "60px 80px" }}>
      <h1 style={{ textAlign: "center" }}>Checkout</h1>

      <div style={{ display: "flex", gap: "40px", marginTop: "40px" }}>
        {/* LEFT */}
        <div style={{ flex: 1 }}>
          <div style={boxStyle}>
            <h2>Order Summary</h2>
            <p>
              <strong>{product.name}</strong> ({product.qty})
            </p>
            <p>Price: ₹{product.price}</p>
          </div>

          <div style={{ ...boxStyle, marginTop: "20px" }}>
            <h2>Delivery Address</h2>
            <p><strong>{address.name}</strong></p>
            <p>{address.phone}</p>
            <p>{address.address}</p>
            <p>Pincode: {address.pincode}</p>
          </div>
        </div>

        {/* RIGHT */}
        <div style={{ flex: 1 }}>
          <div style={boxStyle}>
            <h2>Payment Method</h2>

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
              Cash on Delivery (+₹10)
            </label>

            {/* CONDITIONAL UI */}
            <div style={{ marginTop: "20px" }}>
              {method === "upi" && (
                <>
                  <input
                    placeholder="Enter UPI ID (e.g. name@bank)"
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    style={inputStyle}
                  />
                  {upiId && !isValidUpi(upiId) && (
                    <p style={{ color: "red", fontSize: "13px" }}>
                      Invalid UPI ID format
                    </p>
                  )}
                </>
              )}

              {method === "card" && (
                <>
                  <input placeholder="Card Number" style={inputStyle} />
                  <input placeholder="Expiry (MM/YY)" style={inputStyle} />
                  <input placeholder="CVV" style={inputStyle} />
                </>
              )}
            </div>

            <hr style={{ margin: "20px 0" }} />

            <h3>Total: ₹{finalAmount}</h3>

            <button
              disabled={!canPay}
              onClick={() => navigate("/success")}
              style={{
                width: "100%",
                marginTop: "20px",
                padding: "12px",
                backgroundColor: canPay ? "#ff5ca8" : "#ccc",
                color: "white",
                border: "none",
                borderRadius: "25px",
                fontSize: "16px",
                cursor: canPay ? "pointer" : "not-allowed",
              }}
            >
              Pay ₹{finalAmount}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const boxStyle = {
  border: "1px solid #ddd",
  borderRadius: "15px",
  padding: "25px",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "10px",
  borderRadius: "8px",
  border: "1px solid #ccc",
};

export default Payment;
