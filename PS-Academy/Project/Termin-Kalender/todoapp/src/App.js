import React, { useState ,useContext} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "./components/Home";
import Termin from "./components/Termin";
import { TerminProvider } from "./context/TerminContext";
import { AddTerminProvider } from "./context/AddTerminContext";
// import TerminContext from "./context/TerminContext";


function App() {
//   const {termin,setTermin}=useContext(TerminContext )
    const [state, setState] = useState({
        items: [],
    });

    const deletItem = (id) => {
        let items = state.items.filter((item) => {
            return item.id !== id;
        });

        setState({ items });
    };

    const addItem = (item) => {
        item.id = Math.random();
        let items = state.items;
        items.push(item);
        setState({ items });


    };

    // oder
    // const deletItem2 =(id) =>{
    //   let items = state.items
    //   let i = items.findIndex((item) => item.id === id )
    //   items.splice(i,1)
    // setState({items})
    // }

    return (
        
        
        <TerminProvider >
          <AddTerminProvider>
        <div className="App container">
            <BrowserRouter>
                <h1 className="text-center1"> Termin Liste</h1>
                <Routes>
                    <Route path="/" element={<Home addItem={addItem} 
                        items={state.items}
                        deletItem={deletItem} />} />
                    <Route path="/termin" element={<Termin items={state.items}
                                deletItem={deletItem}/>} />
                </Routes>
             
            </BrowserRouter>
        </div>
        </AddTerminProvider>
        </TerminProvider>
    );
}

export default App;
