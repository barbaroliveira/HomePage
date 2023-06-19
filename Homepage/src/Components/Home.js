import React from "react";
import Navbar from "./Navbar";
import bannerbackground from "../Assets/home-banner-background.png.png";
import BannerImage from "../Assets/home-banner-image.png.png";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
    return (
        <div className="home-container">
        <Navbar/>
        <div className="home-banner-container">
            <div className="home-bannerImage-container">
                <img src={bannerbackground} alt="" />
            </div>
        <div className="home-text-section">
            <h3 className="primary-heading">
                Your main Value Proposition
            </h3>
            <p className="primary-text">
                Supporting subtext
            </p>
            <button className="secondary-button" style={{ backgroundColor: '#87D5E9'}}>
                Call to Action <FiArrowRight />
            </button>
            </div>
                <div className="home-image-container">
                    <img src={BannerImage} alt=""/>
                </div>
            </div>;
        </div>
    );
};

export default Home;