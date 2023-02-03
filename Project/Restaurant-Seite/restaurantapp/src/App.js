import React from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";

import Category from "./components/Category";

import { FavoriteProvider } from "./context/FavoriteContex";
import FavoriteProduct from './components/FavoriteProduct'
import ProductCard from "./components/ProductCard";


function App() {
   
    return (
        <FavoriteProvider>
            <div>
                <BrowserRouter>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={
                            <>
                            <Category  category="Pizza" />
                            <Category category="Shawrma" />
                            <Category category="Dönner" />
                            <Category category="Salat" />
                            <Category category="Getränke" />
                            </>
                        } />
                        {/* <Route path="/pizza" element={<Pizza />} /> */}
                        <Route
                            path="/pizza"
                            element={<Category category="Pizza" />}
                        />
                        <Route
                            path="/getranke"
                            element={<Category category="Getränke" />}
                        />
                        <Route
                            path="/shawrma"
                            element={<Category category="Shawrma" />}
                        />
                        <Route
                            path="/salat"
                            element={<Category category="Salat" />}
                        />
                        <Route
                            path="/donner"
                            element={<Category category="Dönner" />}
                        />
                      <Route
                            path="/favoriteproduct"
                            element={<FavoriteProduct  />}
                        />
                         <Route
                            path="/fproductCard"
                            element={<ProductCard />}
                        />
                    </Routes>
                    {/* <MenuListe  /> */}
                </BrowserRouter>
     
            </div>
        </FavoriteProvider>
    );
}

export default App;
