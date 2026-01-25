import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Address() {
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ hooks first
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    pincode: "",
  });

  const product = location.state?.product;

  // ✅ safety check AFTER hooks
  if (!product) {
    return <h2 style={{ padding: "40px" }}>No product selected</h2>;
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const isValid =
    form.name && form.phone && form.address && form.pincode;

  return (
    <div style={{ padding: "60px 80px" }}>
      <h1 style={{ textAlign: "center" }}>Delivery Address</h1>

      <div
        style={{
          maxWidth: "500px",
          margin: "40px auto",
          padding: "30px",
          border: "1px solid #ddd",
          borderRadius: "15px",
        }}
      >
        <input
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          name="phone"
          placeholder="Mobile Number"
          value={form.phone}
          onChange={handleChange}
          style={inputStyle}
        />

        <textarea
          name="address"
          placeholder="Full Address"
          value={form.address}
          onChange={handleChange}
          style={{ ...inputStyle, height: "80px" }}
        />

        <input
          name="pincode"
          placeholder="Pincode"
          value={form.pincode}
          onChange={handleChange}
          style={inputStyle}
        />

        <button
          disabled={!isValid}
          onClick={() =>
            navigate("/payment", {
              state: {
                product,
                address: form,
              },
            })
          }
          style={{
            width: "100%",
            marginTop: "20px",
            padding: "12px",
            backgroundColor: isValid ? "#ff5ca8" : "#ccc",
            color: "white",
            border: "none",
            borderRadius: "25px",
            fontSize: "16px",
            cursor: isValid ? "pointer" : "not-allowed",
          }}
        >
          Continue to Payment
        </button>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "15px",
  borderRadius: "8px",
  border: "1px solid #ccc",
};

export default Address;
