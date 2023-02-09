import React, { createContext, useState, useEffect } from "react";
import WarenKorb from "../components/WarenKorb";
const WarenKorbContext = createContext();

export const WarenKorbProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    // für product in warenkorb
    const [cart, setCart] = useState(
        JSON.parse(localStorage.getItem("cart")) || []
    );

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

 // für add produckt in Warenkorb
    const addKorb = (id) => {
        if (cart.find((item) => item === id)) {
             
            const removeKorb = cart.filter((item)=> item !== id )

            setCart(removeKorb)
        }

        else {

        setCart([...cart, id]);
       }
   
    };
 
    const openCart = () => {
        setIsOpen(true);
      };
      const closeCart = () => {
        setIsOpen(false);
      };
    
    return (
        <WarenKorbContext.Provider
            value={{
                cart,
                setCart,
                addKorb,
                openCart,
                closeCart,
               
               
            }}
        >
            {children}
            <WarenKorb isOpen={isOpen}  />
        </WarenKorbContext.Provider>
    );
};
export default WarenKorbContext;
