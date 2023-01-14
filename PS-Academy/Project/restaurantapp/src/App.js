import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./index.css";

import NavBar from "./components/NavBar";
import { Header } from "./components/Header";
import Catagory from "./components/Catagory";
import CardList from "./components/CardList";
import { items } from "./data";

function App() {
    const [itemsData, setItemsData] = useState(items);

    // get all cat unig
    const allCategory = ["all-menu", ...new Set(items.map((i) => i.category))];

    // filter by category
    const filterbyCategory = (cat) => {
        if (cat === "all-menu") {
            setItemsData(items);
        } else {
            const newArr = items.filter((item) => item.category === cat);
            setItemsData(newArr);
        }
    };
    // filter by search form
    const filterbySearch = (word) => {
        if (word !== "") {
            const newArr = items.filter((el) =>
                el.title.toLowerCase().includes(word.toLowerCase())
            );
            // toLwoerCase....  das für suchen mit klein Buchstaben und Große Buchstaben und includes für teil von word was wir schreiben
            setItemsData(newArr);
        }
    };

    return (
        <div className="color-body font">
            <NavBar filterbySearch={filterbySearch} />
            <Container>
                <Header />
                <Catagory
                    filterbyCategory={filterbyCategory}
                    allCategory={allCategory}
                />
                <CardList itemsData={itemsData} />
            </Container>
        </div>
    );
}

export default App;
