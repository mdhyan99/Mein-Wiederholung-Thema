import React from "react";
import AddItem from "./AddItem";
import TerminListe from "./TerminListe";

const Home = ({ items,addItem,deletItem}) => {
    return <div>
      <AddItem addItem={addItem} />
      <TerminListe items={items} deletItem={deletItem} />
    </div>;
};

export default Home;
