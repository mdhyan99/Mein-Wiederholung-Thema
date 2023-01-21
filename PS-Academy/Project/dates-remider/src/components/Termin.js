import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Link, useParams, useNavigate } from "react-router-dom";
import image from "../image/p1.webp";
import Sound  from './bird-alarm.mp3'

const song = new Audio(Sound)
// import DatesList from "./DatesList";
const Termin = ({ entfernVonList, person }) => {
    const navigate = useNavigate(); //  und     navigate("/"); // zu Starseite navigieren 


    const { id } = useParams(); 
    const termin = person.find((i) => i.id === +id);

   const entfernStartseite = () => {
        entfernVonList(termin.id);
        navigate("/"); // zu Starseite navigieren 
    };

    return (
        <Container>
            <Row>
                <Col>
                    <div className="text-center ">
                        <img className="img-avatar " src={image} alt="person" />
                    </div>
                    <div className="px-3 text-center">
                        <p className=" ">
                            <span>Termin mit: </span>
                            <br /> {termin.name}
                        </p>
                        <p className=" ">
                            <span>Datum: </span> <br />
                            {termin.date}
                        </p>
                        <p>
                            {" "}
                            <span>Termin Beschreibung: </span>
                            <br />
                            {termin.beschreibung}
                        </p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className=" d-flex justify-content-between">
                    <Link to={"/"}>
                        <button className=" btn-style p-2 ">Starseite</button>
                    </Link>
                    <button onClick={()=>song.play()}>Play</button>
                    <button onClick={()=>song.pause()}>Stop</button>
                    {/* <button onClick={()=>song.volume=0}>-</button>
                    <button onClick={()=>song.volume=1}>+</button> */}
                    <button
                        onClick={entfernStartseite}
                        className="btn-style p-2 "
                    >
                        Löchen
                    </button>
                </Col>
            </Row>
        </Container>
    );
};

export default Termin;
