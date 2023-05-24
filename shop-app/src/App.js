import React from "react";
import { Route, Routes } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faTableTennisPaddleBall, faCartShopping, faBell } from '@fortawesome/free-solid-svg-icons';
import Home from "./views/Home/Home";
import NavBar from "./views/Navigation/Navigation";
import AboutUs from "./views/content/AboutUs";
import ContactUs from "./views/content/ContactUs";
import Blog from "./views/content/Blog";
import ProductDetail from "./views/Products/ProductDetail";
import Login from "./Login";
import './App.css';
import SignUp from "./views/SignUp/SignUp";

function App() {
  return (
    <>
      <div className="header">
            <div className="logo">
              <FontAwesomeIcon icon={faTableTennisPaddleBall} /> 
              <div>pingpong shop</div>
          </div>
          <div className="search">
              <input type="text" placeholder="Tìm kiếm"/>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
          <div className="profile">   
              <FontAwesomeIcon icon={faBell} />
              <FontAwesomeIcon icon={faCartShopping} />
          </div> 
      </div>
      <div className="navigationBar">
          <NavBar/>
          <div className="contener">
              <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/home" element={<Home/>} />
                <Route path="/content/about-us" element={<AboutUs/>} />
                <Route path="/content/contact-us" element={<ContactUs/>} />
                <Route path="/content/blog" element={<Blog/>} />
                {/* <Route path="/product" element={<Product/>} /> */}
                <Route path="/product" element={<ProductDetail/>} exact/>
                <Route path="" element={<Login/>}/>
              </Routes>
          </div>
      </div>
    </>
  );
}

export default App;