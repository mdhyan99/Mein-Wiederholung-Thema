import React from "react";
import Card from "react-bootstrap/Card";
import Button from "./Button/Button";
import { BsHeart } from "react-icons/bs";
import { BiLike } from "react-icons/bi";

const Product = ({ id, title, url, imag }) => {
    return (
        <Card>
            <Card.Img style={{ height: "250px" }} variant="top" src={imag} />

            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                </Card.Text>
                <div className="icon">
                    <Button label="in den Warenkorb"></Button>
                    <BsHeart />
                    <BiLike />
                </div>
            </Card.Body>
        </Card>
    );
};

export default Product;
