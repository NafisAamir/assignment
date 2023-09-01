import {Link } from "react-router-dom";
import {FaShoppingCart} from "react-icons/fa"
import "./navbar.css";
const Navbar=()=>{
    return (
        <div className="navbar">
            <div className="links">
                <Link to="/">Catalogue</Link>
                <Link to="/cart"><FaShoppingCart size={32}/></Link>
            </div>
        </div>
    )
}
export {Navbar}