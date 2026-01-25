import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Auth() {
  const navigate = useNavigate();

  const [mode, setMode] = useState("login"); // login | signup
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  // 🔐 Admin credentials (frontend demo)
  const ADMIN_EMAIL = "admin@wowpickles.com";
  const ADMIN_PASSWORD = "wow123";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = () => {
    if (!form.email || !form.password || (mode === "signup" && !form.name)) {
      setError("Please fill all fields");
      return;
    }

    // 🔹 LOGIN FLOW
    if (mode === "login") {
      if (
        form.email === ADMIN_EMAIL &&
        form.password === ADMIN_PASSWORD
      ) {
        localStorage.setItem("isAdmin", "true");
        navigate("/admin");
      } else {
        // normal user login (demo)
        localStorage.removeItem("isAdmin");
        navigate("/");
      }
    }

    // 🔹 SIGNUP FLOW (frontend demo)
    if (mode === "signup") {
      alert("Account created successfully (demo)");
      localStorage.removeItem("isAdmin");
      navigate("/");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#fafafa",
      }}
    >
      <div
        style={{
          width: "360px",
          padding: "30px",
          borderRadius: "15px",
          border: "1px solid #ddd",
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
          backgroundColor: "white",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          {mode === "login" ? "Login" : "Sign Up"}
        </h2>

        {/* Name only for signup */}
        {mode === "signup" && (
          <input
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            style={inputStyle}
          />
        )}

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          style={inputStyle}
        />

        {error && (
          <p style={{ color: "red", fontSize: "14px" }}>{error}</p>
        )}

        <button
          onClick={handleSubmit}
          style={{
            width: "100%",
            marginTop: "10px",
            padding: "12px",
            backgroundColor: "#ff5ca8",
            color: "white",
            border: "none",
            borderRadius: "25px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          {mode === "login" ? "Login" : "Create Account"}
        </button>

        <p style={{ textAlign: "center", marginTop: "15px" }}>
          {mode === "login" ? "New user?" : "Already have an account?"}{" "}
          <span
            onClick={() =>
              setMode(mode === "login" ? "signup" : "login")
            }
            style={{ color: "#ff5ca8", cursor: "pointer" }}
          >
            {mode === "login" ? "Sign Up" : "Login"}
          </span>
        </p>

        {mode === "login" && (
          <p
            style={{
              fontSize: "12px",
              color: "#666",
              textAlign: "center",
              marginTop: "10px",
            }}
          >
            Admin demo:<br />
            <strong>admin@wowpickles.com</strong> / <strong>wow123</strong>
          </p>
        )}
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

export default Auth;
