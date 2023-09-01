import { useContext } from "react";
import { myContext } from "../context/catalogue-context";

// import "./cartitem.css"
const CartItem=(props)=>{
    const { id, name, image, weight, price } = props.card;
    const {cartItems,addtocart,removefromcart}=useContext(myContext);
    return (
        <div className="cartitem">
           <img src={image} alt={name} />
            <div className="details">
                <p><b>{name}</b></p>
                {/* <p>{weight}</p> */}
                <p><b>₹{price}</b></p>
                <div className="counter">
                    <button onClick={()=>{removefromcart(id)}}>-</button>
                    <input style={{width:"30px",textAlign:"center"}}  value={cartItems[id]} />
                    <button onClick={()=>{addtocart(id)}}>+</button>
                </div>
            </div>

        </div>
    )
}
export {CartItem}