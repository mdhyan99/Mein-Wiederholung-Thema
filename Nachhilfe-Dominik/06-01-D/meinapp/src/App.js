import React from "react";
// import Button from "./component/Button/Button";
import Header from "./component/Header/Header";
// import Cards from "./component/Card/Cards";
import "./App.css";
import Footer from "./component/Footer";
import Home from "./component/Home";
import Video from "./component/Video";
import Foto from "./component/Foto";
import About from "./component/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./component/Product";

function App() {
    // const handelClick = () => console.log("hallo4");

    // function dd() {
    //     console.log("hallo3");
    // }
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/foto" element={<Foto />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/video" element={<Video />} />
                    <Route path="/product" element={<Product />} />
                </Routes>
                <Footer />
                {/* <Cards /> */}
            </BrowserRouter>
            {/* <Button
                className="btn1 "
                onClick={() => console.log("Hallo1")}
                label="button1"
            ></Button>
            {/* hier wir haben onClick und className und label von Button.js importieren */}
            {/* <Button
                onClick={() => console.log("Hallo2")}
                label="button2"
            ></Button>
            <Button onClick={dd} label="button3"></Button>
            <Button
                className="btn4 "
                onClick={handelClick}
                label="button4"
            ></Button> */}
        </div>
    );
}

export default App;
