import React, {useState,useEffect, createContext } from "react";

const TerminContext = createContext()

export const TerminProvider = ({children}) =>{
    const [termin, setTermin] = useState(
        JSON.parse(localStorage.getItem("termin")) || []
    );

    useEffect(() => {
        localStorage.setItem("termin", JSON.stringify(termin));
    }, [termin]);

    return(
        <TerminContext.Provider
        value={
            {
                termin:termin,
                setTermin:setTermin,

            }
        }
        >
{children}
        </TerminContext.Provider>
    )

}
export default TerminContext;