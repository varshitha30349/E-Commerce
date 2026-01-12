function Login() {
  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "350px",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Sign In
        </h2>

        <input
          type="email"
          placeholder="Email"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "20px",
          }}
        />

        <button
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#ff5ca8",
            border: "none",
            color: "white",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          Login
        </button>

        <p style={{ textAlign: "center", marginTop: "15px" }}>
          Don’t have an account? <span style={{ color: "#ff5ca8", cursor: "pointer" }}>Sign Up</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
