import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Header() {
  const menuStyle = {
    cursor: "pointer",
    color: "black",
    textDecoration: "none",
    transition: "color 0.3s",
  };

  const hoverPink = (e) => (e.target.style.color = "#ff5ca8");
  const hoverOut = (e) => (e.target.style.color = "black");

  return (
    <div>
      {/* 🔹 Top Announcement Bar */}
      <div
        style={{
          backgroundColor: "#e0f7f7",
          padding: "10px",
          textAlign: "center",
          fontSize: "14px",
        }}
      >
        Wow Pickles – Served with Mom’s Love 💖
      </div>

      {/* 🔹 Contact + Right Links */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "12px 40px",
          borderBottom: "1px solid #eee",
        }}
      >
        {/* Left */}
        <div style={{ fontSize: "14px" }}>
          ✉️ wowpickles@gmail.com &nbsp; 📞 +91 9493615914
        </div>

        {/* Right */}
        <div style={{ display: "flex", gap: "20px", fontSize: "16px" }}>
          {/* Login / Signup */}
          <Link
            to="/auth"
            style={menuStyle}
            onMouseEnter={hoverPink}
            onMouseLeave={hoverOut}
          >
            Login / Sign Up
          </Link>

          {/* Admin */}
          <Link
            to="/admin"
            style={menuStyle}
            onMouseEnter={hoverPink}
            onMouseLeave={hoverOut}
          >
            Admin
          </Link>
        </div>
      </div>

      {/* 🔹 Logo */}
      <div style={{ textAlign: "center", padding: "20px 0" }}>
        <img src={logo} alt="Wow Pickles" style={{ height: "110px" }} />
      </div>

      {/* 🔹 Menu */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          paddingBottom: "15px",
          fontSize: "16px",
          borderBottom: "1px solid #eee",
        }}
      >
        <Link to="/" style={menuStyle} onMouseEnter={hoverPink} onMouseLeave={hoverOut}>
          Home
        </Link>

        <Link to="/catalog" style={menuStyle} onMouseEnter={hoverPink} onMouseLeave={hoverOut}>
          Catalog
        </Link>

        <Link to="/about" style={menuStyle} onMouseEnter={hoverPink} onMouseLeave={hoverOut}>
          About Us
        </Link>
      </div>
    </div>
  );
}

export default Header;
