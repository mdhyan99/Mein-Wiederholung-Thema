import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Category from "./components/Category";
import {FavoriteProvider} from "./context/FavoriteContext";
import FavoriteProduct from "./components/FavoriteProduct";


function App() {
    return (
        <FavoriteProvider>
        
        <div className="">
          <BrowserRouter >
            <Header />
            <NavBar />
            <Routes>
                        <Route path="/" element={<Category />} />
            
                        <Route
                            path="/herren"
                            element={<Category category="Herren" />}
                        />
                        <Route
                            path="/kinder"
                            element={<Category category="Kinder" />}
                        />
                        <Route
                            path="/frauen"
                            element={<Category category="Frauen" />}
                        />
                             <Route
                            path="/favoriteproduct"
                            element={<FavoriteProduct/>}
                        />
                 
            
                    </Routes>
            {/* <ProductCard /> */}
          </BrowserRouter>
        </div>
            
         </FavoriteProvider>
    );
}

export default App;
