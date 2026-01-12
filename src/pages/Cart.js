import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cartItems = [] } = useContext(CartContext);

  return (
    <div style={{ padding: "50px 80px" }}>
      <h1>Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty 🛒</p>
      ) : (
        cartItems.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              gap: "20px",
              alignItems: "center",
              marginBottom: "20px",
              borderBottom: "1px solid #ddd",
              paddingBottom: "15px",
            }}
          >
            {/* IMAGE */}
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "100px",
                height: "100px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />

            {/* TEXT */}
            <div>
              <h3>{item.name}</h3>
              <p>Quantity: {item.qty}</p>
              <p>Price: ₹{item.price}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
