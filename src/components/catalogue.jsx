import data from "../assets/db.json" 
import { useState } from "react";
import { Product } from "./product";
import "./catalogue.css"
const Catalogue=()=>{
    // const [data,setdata]=useState([]);
    // setdata(products);
    return (
        <div className="catalogue">
            <div className="catalogue-title">
                <h1>Catalogue</h1>
            </div>
            <div className="products">
                {data.map((item)=>{
                   return <Product card={item}/>
                })}
            </div>
        </div>
    )
}
export {Catalogue}