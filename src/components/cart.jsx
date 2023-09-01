import { useContext } from "react";
import data from "../assets/db.json";
import { myContext } from "../context/catalogue-context";
import { CartItem } from "./Cartitem";
import "./cart.css";
import { Link } from "react-router-dom";


const Cart = () => {
  const { cartItems, TotalPricefun } = useContext(myContext);
  const totalprice = TotalPricefun();

  
  const today = new Date();
  const estimatedDeliveryDate = new Date(today);
  estimatedDeliveryDate.setDate(today.getDate() + 2);

  const handleConfirmOrder=()=>{

  }
  const isEmptyCart = Object.values(cartItems).every((count) => count === 0);

  return (
    <div className="cart">
      <div>
        <h1>Cart Items</h1>
      </div>
      {isEmptyCart ? (
        <div className="empty-cart">
          <h1>No product added</h1>
        </div>
      ) : (
        <div className="cartItems">
          {data.map((item) => {
            if (cartItems[item.id] !== 0) {
              return <CartItem card={item} key={item.id} />;
            }
            return null; 
          })}
        </div>
      )}
      {!isEmptyCart && (
        <div className="order-summary">
          <div>
            <p>Total Price: ₹ <b>{totalprice}</b></p>
          </div>
          <div>
            <p>Estimated Delivery Date: {estimatedDeliveryDate.toDateString()}</p>
          </div>
          
        </div>
      )}
    </div>
  );
};

export { Cart };
