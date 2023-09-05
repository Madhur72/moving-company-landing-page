import React from "react";
import Navbar from "../Components/Navbar";
import background from "../assets/background.jpg";
import QuoteForm from "../Components/QuoteForm";
import "../App.css"
const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="banner-container">
        <div className="banner_background">
          <img src={background} alt="" />
        </div>
        <div className="banner-text-container">
          <div className="banner_headline">
            Get moving help with local
            <br />
            packing & loading services
          </div>
          <div className="sub_headline">
            Find the moving help you need, Where you need it, Where you need it.
          </div>
        </div>
        <div className="Quote-container">
          <QuoteForm />
        </div>
      </div>
    </div>
  );
};

export default Home;
