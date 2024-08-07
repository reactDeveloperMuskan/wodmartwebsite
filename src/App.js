import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Header/About";
import { Home } from "./Home.js";
import { Shop } from "./Header/Shop.js";
import { Blog } from "./Header/Blog.js";
import { Footer } from "./Header/Footer/Footer.js";
import {FooterEnd } from"./Header/Footer/FooterEnd.js";
import Header from "./Header/Header";

const App = () => {

  return (
      <div>
        <Header />
        <Routes>
          <Route path="/about" exact element={<About/>}/>
          <Route path="/" exact element={<Home />} />
          <Route path="/shop" exact element={<Shop />} />
          <Route path="/Blog" exact element={<Blog />} />
        </Routes>
        <Footer/>
        <FooterEnd/>
      </div>



  )
}
export default App;