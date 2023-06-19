import React from "react";
import logo from "../Assets/LOGO.svg";
import { BsTwitter, BsYoutube } from "react-icons/bs";
import {SiLinkedin, siLinkedin} from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper" >
        <div className="footer-section-one" >
            <div className="footer-logo-container" >
                <img src={logo} alt=""/>
            </div>
            <div className="footer-icons">
               <BsTwitter />
               <SiLinkedin />
               <BsYoutube />
               <FaFacebookF />
            </div>
        </div>
        <div className="footer-section-two" >
            <div className="footer-section-columns" >
                <span>Quality</span>
                <span>Help</span>
                <span>Share</span>
                <span>Carrers</span>
                <span>Testimonials</span>
                <span>Work</span>
            </div>
            <div className="footer-section-columns">
               <span>244-5333-7783</span>
               <span>hello@logo.com</span>
               <span>press@logo.com</span>
               <span>contact@logo.com</span>
            </div>
            <div className="footer-section-columns">
                <span>Terms & Conditions</span>
                <span>Privacy Policy</span>
            </div>
        </div>
    </div>
  )
}

export default Footer