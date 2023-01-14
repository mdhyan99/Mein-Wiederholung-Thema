import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { person } from "./data";
import DatesCount from "./components/DatesCount";
import DatesList from "./components/DatesList";
import DatesAction from "./components/DatesAction";
import Termin from "./components/Termin";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    const [personData, setPersonData] = useState(person);
    const onDelete = () => {
        setPersonData([]);
    };
    const onViewData = () => {
        setPersonData(person);
    };

    const entfernVonList = (id) => {
        setPersonData((currItems) =>
            currItems.filter((item) => item.id !== id)
        );
    };
    useEffect(() => {
        setPersonData([]);
    }, []); // wenn wir die Seite offnen wir sehen keien Termin

    return (
        <Container className="py-5">
                <div className="font color-body">
                    <DatesCount person={personData} />
                 {/* <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/termin" element={<Termin />} />
                        <Route path="/datesaction" element={<DatesAction />} />
                    </Routes>
                    </BrowserRouter>  */}
                    <DatesList
                        person={personData}
                        entfernVonList={entfernVonList}
                    />
                    <DatesAction onDelete={onDelete} onViewData={onViewData} />
                </div>
            </Container>
    );
}

export default App;
