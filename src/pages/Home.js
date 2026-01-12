import { Link } from "react-router-dom";
import nonVegImg from "../assets/nonveg.jpg";
import vegImg from "../assets/veg.jpg";
import podiImg from "../assets/podi.jpg";

function Home() {
  const categories = [
    {
      name: "Non Veg Pickles",
      count: 5,
      image: nonVegImg,
      type: "nonVeg",
    },
    {
      name: "Veg Pickles",
      count: 5,
      image: vegImg,
      type: "veg",
    },
    {
      name: "Karam Podis",
      count: 5,
      image: podiImg,
      type:"podi",
    },
  ];

  return (
    <div style={{ padding: "50px 0", textAlign: "center" }}>
      <h1 style={{ marginBottom: "10px", fontSize: "42px" }}>
        Featured Products
      </h1>

      {/* Tagline */}
      <p
        style={{
          marginBottom: "40px",
          fontSize: "18px",
          color: "#666",
          fontStyle: "italic",
        }}
      >
        Authentic homemade pickles, crafted with mom’s love ❤️
      </p>

      <div
        style={{
          display: "flex",
          gap: "40px",
          overflowX: "auto",
          padding: "20px 60px",
          justifyContent: "center",
        }}
      >
        {categories.map((cat, index) => (
          <div
            key={index}
            style={{
              minWidth: "320px",
              borderRadius: "20px",
              overflow: "hidden",
              backgroundColor: "#fff",
              transition: "transform 0.3s, box-shadow 0.3s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow =
                "0 12px 30px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 10px 25px rgba(0,0,0,0.15)";
            }}
          >
            {/* Image */}
            <img
              src={cat.image}
              alt={cat.name}
              style={{
                width: "100%",
                height: "380px",
                objectFit: "cover",
              }}
            />

            {/* Text */}
            <div style={{ padding: "20px" }}>
              <h2 style={{ marginBottom: "10px" }}>{cat.name}</h2>
              <p style={{ marginBottom: "15px" }}>
                {cat.count} varieties
              </p>

              {/* View Products → Catalog */}
              <Link
  to="/catalog"
  state={{ category: cat.type }}
  style={{ textDecoration: "none" }}
>
  <button
    style={{
      padding: "10px 22px",
      borderRadius: "25px",
      border: "none",
      backgroundColor: "#ff5ca8",
      color: "white",
      fontSize: "15px",
      cursor: "pointer",
      transition: "transform 0.3s, box-shadow 0.3s",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "scale(1.05)";
      e.currentTarget.style.boxShadow =
        "0 6px 16px rgba(255,92,168,0.4)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "scale(1)";
      e.currentTarget.style.boxShadow = "none";
    }}
  >
    View Products
  </button>
</Link>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
