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
      {/* 1️⃣ Top Announcement Bar */}
      <div
        style={{
          backgroundColor: "#e0f7f7",
          padding: "10px",
          textAlign: "center",
          fontSize: "14px",
          position: "relative",
        }}
      >
        Wow Pickles Served with Mom's Love
        <span
          style={{
            position: "absolute",
            right: "20px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          ✕
        </span>
      </div>

      {/* 2️⃣ Contact Bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "12px 40px",
          fontSize: "14px",
          borderBottom: "1px solid #eee",
        }}
      >
        <div>
          ✉️ wowpickles@gmail.com &nbsp;&nbsp; 📞 +91 9493615914
        </div>
        <div>INR ⌄</div>
      </div>

      {/* 3️⃣ Logo */}
      <div style={{ textAlign: "center", padding: "20px 0" }}>
        <img src={logo} alt="Wow Pickles" style={{ height: "110px" }} />
      </div>

      {/* 4️⃣ Menu Bar (hover + routing) */}
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
        <Link
          to="/"
          style={menuStyle}
          onMouseEnter={hoverPink}
          onMouseLeave={hoverOut}
        >
          Home
        </Link>

        <Link
          to="/catalog"
          style={menuStyle}
          onMouseEnter={hoverPink}
          onMouseLeave={hoverOut}
        >
          Catalog
        </Link>

        <span
          style={menuStyle}
          onMouseEnter={hoverPink}
          onMouseLeave={hoverOut}
        >
          Collections ⌄
        </span>

        <span
          style={menuStyle}
          onMouseEnter={hoverPink}
          onMouseLeave={hoverOut}
        >
          Contact
        </span>

        <Link
          to="/about"
          style={menuStyle}
          onMouseEnter={hoverPink}
          onMouseLeave={hoverOut}
        >
          About Us
        </Link>
      </div>
    </div>
  );
}

export default Header;
