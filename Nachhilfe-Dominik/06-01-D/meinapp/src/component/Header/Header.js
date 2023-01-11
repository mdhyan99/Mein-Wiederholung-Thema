import React from "react";
import Button from "../Button/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { TbPhoneCall } from "react-icons/tb";
import { BiMailSend } from "react-icons/bi";
import { BsHeart } from "react-icons/bs";
import { BsCartCheck } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
// import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

import "./Haeder.css";

const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <img
                        src="https://www.designevo.com/res/templates/thumb_small/rhombus-forest-and-tent.webp"
                        style={{
                            height: "50px",
                            borderRadius: "50px",
                            marginRight: "50px",
                        }}
                        alt="logo"
                    />
                

                   <Navbar.Brand ><Link className="link" to="/"> Home</Link></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home"><Link className="link"  to="/foto"> Foto</Link></Nav.Link>
                        <Nav.Link href="#features"><Link className="link" to="/video"> Video</Link></Nav.Link>
                        <Nav.Link href="#pricing"><Link className="link" to="/about"> About</Link></Nav.Link>
                    </Nav> 
                    <Button
                        onClick={() => console.log("Hallo2")}
                        label="Login" 
                    ></Button>
                    <div className="cart" ><BsCartCheck /></div>
                </Container>
            </Navbar>
            <Navbar bg="light" variant="dark">
                <Container>
                    <select className="selc">
                        <option>Englisch</option>
                        <option>Deutsch</option>
                        <option>Arabisch</option>
                    </select>
              <div >
              <input type="text" placeholder="suchen" />
                <AiOutlineSearch  />
              </div>
                </Container>
                <div>
                    <a className="kont" href="tel:0123456789">
                        <TbPhoneCall />
                    </a>
                </div>
                <div>
                    <a className="kont" href="mailto:rayan@example.de">
                        <BiMailSend />
                        

                    </a>
                </div>
                <div className="kont">
                <BsHeart />
                </div>
            </Navbar>
        </>
    );
};
export default Header;
