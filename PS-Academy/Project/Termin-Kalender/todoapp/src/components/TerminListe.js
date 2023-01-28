import React from "react";

const TerminListe = ({ items, deletItem }) => {

    const listItems = items.length ?(

    items.map((item) => {
        return (
            <div key={item.id} >
                <span className="name">{item.name}</span>
                <span className="datum">{item.datum}</span>
                <span className="action title" onClick={() => deletItem(item.id)} variant="primary" type="submit" value="add">
                    Löchen
                    </span >
                <div>
                </div>
            </div>
        );
    })): <p>es gibt kein Termine</p> 
    return (
    <div className="listItems">
       <div>
       <span className="name title" >Name</span>
       <span className="datum title" >Datum</span>
        <span className="action title" >Action</span>
       </div>
        {listItems}
        </div>);
};

export default TerminListe;
