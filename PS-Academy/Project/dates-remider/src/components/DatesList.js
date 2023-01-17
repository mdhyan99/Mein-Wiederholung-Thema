import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Termin from "./Termin";

import { Col, Row } from "react-bootstrap";

const DatesList = ({ person, entfernVonList }) => {
    // const { id } = useParams();
    // const product = person.find((i) => i.id === +id);
    return (
        <Row className="justify-content-center">
            <Col sm="8" className="">
                <div className="rectangle p-2">
                    {person.length ? (
                        person.map((item) => {
                            return (
                                // <div key={Math.random()} className="d-flex wenn kein id

                                <div
                                    key={item.id}
                                    className="d-flex justify-content-between  border-bottom mx-3 my-2"
                                >
                                    {" "}
                                    <img
                                        className="img-avatar"
                                        src="p1.webp"
                                        alt="person"
                                    />
                                    <div className="px-3">
                                        <p className="d-inline fs-5">
                                            {item.name}
                                        </p>
                                        <p className=" fs-6">{item.date}</p>
                                    </div>
                                    <button
                                        className="btn btn-primary "
                                        onClick={() => entfernVonList(item.id)}
                                    >
                                        löchen
                                    </button>
                                    <Link to="/termin ">

                                    <button className="btn btn-primary ">
                                        zeigen
                                    </button>
                                    </Link>
                                    {/* <Link to="/termin" >terg</Link> */}
                                </div>
                            );
                        })
                    ) : (
                        <h2 className="p-5 text-center">
                            🤭 Es gibt keine Termine 🤭{" "}
                        </h2>
                    )}
                </div>
            </Col>
        </Row>
    );
};

export default DatesList;
