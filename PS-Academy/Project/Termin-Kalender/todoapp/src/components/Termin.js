import React from "react";
// import image from "./image/p1.webp";

import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Termin = ({ items, deletItem }) => {
    const listItems = items.length ? (
        items.map((item) => {
            return (
                <div key={item.id}>
                    <span className="name">{item.name}</span>
                    <span className="datum">{item.datum}</span>
                    <span className="uhr">{item.uhr}</span>
                    <span className="beschreibung">{item.beschreibung}</span>
                    <span
                        className="action title"
                        onClick={() => deletItem(item.id)}
                    >
                        Löchen
                    </span>
                </div>
            );
        })
    ) : (
        <p>es gibt kein Termine</p>
    );
    return (
        <div className="listItems">
            {/* <img className="imges" src={image} alt={image} /> */}
            <div>
                <span className="name title">Name</span>
                <span className="datum title">Datum</span>
                <span className="uhr title">Uhr Zeit</span>
                <span className="beschreibung title">Beshreib</span>
                <span className="action title">Action</span>
            </div>
            {listItems}
            <div>
                <Link to="/">
                    <Button
                        className="btn-style"
                        variant="primary"
                        type="submit"
                        value="add"
                    >
                        Startseite
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Termin;
