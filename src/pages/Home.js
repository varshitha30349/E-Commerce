import nonVegImg from "../assets/nonveg.jpg";
import vegImg from "../assets/veg.jpg";
import podiImg from "../assets/podi.jpg";

function Home() {
  const categories = [
    {
      name: "Non Veg Pickles",
      count: 5,
      image: nonVegImg,
    },
    {
      name: "Veg Pickles",
      count: 5,
      image: vegImg,
    },
    {
      name: "Karam Podis",
      count: 5,
      image: podiImg,
    },
  ];

  return (
    <div style={{ padding: "50px 0", textAlign: "center" }}>
      <h1 style={{ marginBottom: "40px", fontSize: "42px" }}>
        Featured Products
      </h1>

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
              boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
              backgroundColor: "#fff",
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
              <button
                style={{
                  padding: "10px 22px",
                  borderRadius: "25px",
                  border: "none",
                  backgroundColor: "#2e7d32",
                  color: "white",
                  fontSize: "15px",
                  cursor: "pointer",
                }}
              >
                View Products
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
