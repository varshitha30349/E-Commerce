import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Admin() {
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    category: "veg",
    price250: "",
    price500: "",
    price1kg: "",
    image: "",
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    console.log("NEW PRODUCT:", product);
    alert("Product added (demo)");
  };

  const logout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/");
  };

  return (
    <div style={{ padding: "60px" }}>
      <h1>Admin Dashboard</h1>

      <button onClick={logout} style={{ marginBottom: "30px" }}>
        Logout
      </button>

      <input name="name" placeholder="Product Name" onChange={handleChange} style={inputStyle} />

      <select name="category" onChange={handleChange} style={inputStyle}>
        <option value="veg">Veg</option>
        <option value="nonVeg">Non-Veg</option>
        <option value="podi">Podi</option>
      </select>

      <input name="price250" placeholder="250g Price" onChange={handleChange} style={inputStyle} />
      <input name="price500" placeholder="500g Price" onChange={handleChange} style={inputStyle} />
      <input name="price1kg" placeholder="1kg Price" onChange={handleChange} style={inputStyle} />
      <input name="image" placeholder="Image URL" onChange={handleChange} style={inputStyle} />

      <button onClick={handleAdd} style={btnStyle}>
        Add Product
      </button>
    </div>
  );
}

const inputStyle = {
  display: "block",
  marginBottom: "15px",
  padding: "10px",
  width: "320px",
};

const btnStyle = {
  padding: "10px 30px",
  backgroundColor: "#2e7d32",
  color: "white",
  border: "none",
  borderRadius: "20px",
  cursor: "pointer",
};

export default Admin;
