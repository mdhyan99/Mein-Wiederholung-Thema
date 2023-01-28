import React, {useState,useEffect, createContext } from "react";

const AddTerminContext = createContext()

export const AddTerminProvider = ({children}) =>{

    const [addtermin, setAddTermin] = useState(
        JSON.parse(localStorage.getItem("addtermin")) || []
    );

    useEffect(() => {
        localStorage.setItem("addtermin", JSON.stringify(addtermin));
    }, [addtermin]);




    return(
        <AddTerminContext.Provider
        value={
            {
                addtermin:addtermin,
                setAddTermin,
              
            }
        }
        >
{children}
        </AddTerminContext.Provider>
    )

}
export default AddTerminContext;