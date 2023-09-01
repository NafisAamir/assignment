import React, { useContext } from "react";
import { myContext } from "../context/catalogue-context";

const Product = (props) => {
    const { id, name, image, weight, price } = props.card;
    const { cartItems, addtocart, removefromcart } = useContext(myContext);
    const cartItemQuantity = cartItems[id];

    const handleAddToCart = () => {
        addtocart(id);
    };

    const handleRemoveFromCart = () => {
        removefromcart(id);
    };

    return (
        <div className="product">
            <img src={image} alt={name} />
            <div className="details">
                <p><b>{name}</b></p>
                <p>{weight}</p>
                <p><b>₹{price}</b></p>
            </div>
            <div className="cart-controls">
                {cartItemQuantity > 0 ? (
                    <div className="quantity">
                        <button style={{marginRight:"20px"}} className="cart-button" onClick={handleRemoveFromCart}>-</button>
                        <span><b>{cartItemQuantity}</b></span>
                        <button style={{marginLeft:"20px"}} className="cart-button" onClick={handleAddToCart}>+</button>
                    </div>
                ) : (
                    <button className="addtocartbtn" onClick={handleAddToCart}>Add to cart</button>
                )}
            </div>
        </div>
    );
};

export { Product };
