import React, { createContext, useState, useEffect } from "react";

const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
    const [favorite, setFavorite] = useState(
        JSON.parse(localStorage.getItem("favorite")) || []
    );

    useEffect(() => {
        localStorage.setItem("favorite", JSON.stringify(favorite));
    }, [favorite]);

    const addFav = (id) => {
        if (favorite.find((item) => item === id)) {
            const removeFav = favorite.filter((item) => item !== id);
            setFavorite(removeFav);
        } else {
            setFavorite([...favorite, id]);
        }
    };

    return (
        <FavoriteContext.Provider
            value={{
                favorite,
                addFav,
            }}
        >
            {children}
        </FavoriteContext.Provider>
    );
};

export default FavoriteContext;
