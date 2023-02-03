import React, { createContext, useState, useEffect } from "react";

const LikeContext = createContext();

export const LikeProvider = ({ children }) => {
    const [like, setLike] = useState(
        JSON.parse(localStorage.getItem("like")) || []
    );

    useEffect(() => {
        localStorage.setItem("like", JSON.stringify(like));
    }, [like]);

    const addFav = (id) => {
        if (like.find((item) => item === id)) {
            const removeFav = like.filter((item) => item !== id);
            setLike(removeFav);
        } else {
            const ind = 
            setLike([...like, id]);
        }
    };

    return (
        <LikeContext.Provider
            value={{
                like,
                addFav,
            }}
        >
            {children}
        </LikeContext.Provider>
    );
};

export default likeContext;
