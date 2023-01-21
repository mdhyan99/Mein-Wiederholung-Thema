import React, { useState ,useEffect} from "react";
import { Container } from "react-bootstrap";
import person  from "./data.json";
import DatesCount from "./components/DatesCount";
import DatesList from "./components/DatesList";
import Termin from "./components/Termin";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// const initialpersonenData = localStorage.getItem("personendata")?JSON.parse(localStorage.getItem("personendata"))
// : [];

function App() {
    //   localStorage.clear()
    //   localStorage.setItem("name", data.person)

    // console.log(9078 , "ff");
    // console.log((7392 + (260000/5800) +(1205000/6030)+(607000/6250)+(585000/6400)+(2595000/6350) + 6 +(625000/6300) +(1210000/6220)+(1220000/6100)+(600000/6100)+(1835000/6220)+(630000/6390)+(1300000/6470)+560 +(1960000/6420)+(650000/6480)+9+(1787000/6420) -9078  -1920).toFixed(2) );
    const [personData, setPersonData] = useState(person);
    // const [data, setData] = useState(initialpersonenData);  247 

    // useEffect(() => {
    //     localStorage.setItem("personendat", JSON.stringify(data));
    // }, [data]);

   
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
    // useEffect(() => {  
    //     setPersonData([])
    //  }, []); // wenn wir die Seite offnen wir sehen keien Termin

    return (
        <Container className="py-5">
            
                <BrowserRouter>
                <div className="font color-body">
                    <DatesCount  person={personData} />
                    <Routes>
                        <Route
                            path="/"
                            element={
                                
                                <DatesList
                             
                                    person={personData}
                                    entfernVonList={entfernVonList}
                                    onDelete={onDelete} onViewData={onViewData}
                                    setPersonData={setPersonData}
                                />
                            }
                        />
                        <Route path="/termin/:id" element={<Termin person={personData}  entfernVonList={entfernVonList}/>} />
                    
                    </Routes>
                </div>
        </BrowserRouter>
                       
            </Container>
    );
}

export default App;
