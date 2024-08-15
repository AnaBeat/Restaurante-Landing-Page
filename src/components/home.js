import React from "react";
import Navbar from "./navbar";
import BannerBackground from "../assets/home-banner-background.png";
import BannerImage from "../assets/home-banner-image.png";
import { IoIosArrowDropright } from "react-icons/io";

const Home = () => {
    return (
        <div className="home-container">
            <Navbar />
            <div className="home-banner-container">
                <div className="home-bannerImage-container">
                    <img src={BannerBackground} alt="" />
                </div>
                <div className="home-text-section">
                    <h1 className="primary-heading">
                    Seu alimento favorito entregue quente e fresco
                    </h1>
                    <p className="primary-text">
                        Os chefs fazem todo o trabalho de 
                        preparação, como descascar, picar e 
                        marinar, para que você possa cozinhar 
                        alimentos frescos.
                    </p>
                    <button className="secondary-button">
                        Peça agora <IoIosArrowDropright />
                    </button>
                </div>
                <div className="home-image-section">
                 <img src={BannerImage} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home;