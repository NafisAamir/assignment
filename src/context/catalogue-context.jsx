import React, { createContext, useState } from "react";
import data from "../assets/db.json"

export const myContext=createContext();

const getquantity=()=>{
    const cart={};
    for(let i=1;i<=data.length;i++){
        cart[i]=0;
    }
    return cart;
}

const CatalogueContextProvider=({children})=>{
    const [cartItems,setcartItems]=useState(getquantity());
    const addtocart=(id)=>{
        setcartItems((prev)=>({...prev,[id]: prev[id]+1}));
    }
    const removefromcart=(id)=>{
        setcartItems((prev)=>({...prev,[id]: prev[id]-1}));
    }
    const TotalPricefun=()=>{
        let totalAmount=0;
        for(const item in cartItems){
            if(cartItems[item] >0){
                let itemInfo=data.find((product)=>product.id===Number(item));
                totalAmount+=cartItems[item]*itemInfo.price
            }
        }
        return totalAmount;
    }
    return (
        <div>
            <myContext.Provider value={{cartItems,addtocart,removefromcart,TotalPricefun}}>{children}</myContext.Provider>
        </div>
    )
}
export {CatalogueContextProvider}