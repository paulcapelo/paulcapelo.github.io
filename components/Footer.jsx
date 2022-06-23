import React from "react";
import { AiOutlineInstagram, AiFillTwitterSquare } from "react-icons/ai";

const Footer = () => {
  return (
    <div className=" footer-container ">
      <p> 2022 J pcapelo todos los derechos reservados</p>
      <p className="icons">
        <AiOutlineInstagram />
        <AiFillTwitterSquare />
      </p>
    </div>
  );
};

export default Footer;
