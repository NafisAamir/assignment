import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import { Navbar } from "./components/navbar";
import {Catalogue} from "./components/catalogue"
import { Cart } from "./components/cart";
import { CatalogueContextProvider } from "./context/catalogue-context";




function App() {
  return (
    <div className="App">
      <CatalogueContextProvider>
      <BrowserRouter>
      <Navbar/>
     <Routes>
      <Route path="/" element={<Catalogue/>}/>
      <Route path="/cart" element={<Cart/>}/>
      
     </Routes>
      </BrowserRouter>
      </CatalogueContextProvider>
      
    
    </div>
  );
}

export default App;
