import MainPage from "./pages/MainPage";
import About from  './pages/About';
import React, {useState} from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import CartPage from "./pages/CartPage";
import GoodsPage from "./pages/GoodsPage";
import LikedPage from "./pages/LikedPage";
import CatalogePage from "./pages/CatalogePage";
import { AdminPage } from "./pages/AdminPage";


function App() {
  return (
   
    
    <BrowserRouter>
         
         <Routes>
          <Route exact path="/" element={<MainPage/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/cart" element={<CartPage/>} />
          <Route path="/goodsPage/:id" element={<GoodsPage/>} />
          <Route path="/LikedPage" element={<LikedPage/>}/>
          <Route path="/catalogePage" element={<CatalogePage/>}/>
          <Route path="/adminPage" element={<AdminPage/>}/>
          
         
        </Routes>
         
       
    
    </BrowserRouter>
    
     
    
  

    
  );
}

export default App;

