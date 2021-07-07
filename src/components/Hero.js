import React from "react";
import HeroImage from "../assets/image_01@2x.png";
import HeroShape from "../assets/Shape_01@2x.png";
import "../App.css";

export default function Hero() {
  return (
    <>
      <div className="Background-gradient-hero hero-height">
        <div className="container mx-auto flex justify-between items-center w-full pt-14">
          <div className="flex-1 flex-col justify-start items-start text-left px-8">
            <p className="text-bold text-white text-1xl Font-S-Bold">BUSINESS WORKFLOW</p>
            <div className="text-bold text-white py-4 Font-Bold">
              <p className="text-5xl">Get the most </p>
              <p className="text-5xl">efficient UI design for </p>
              <p className="text-5xl">your business now!</p>
            </div>
            <div className="text-bold text-white py-4">
              <p className="text-2xl">
                Hire me to design a clean and modern UI for your
              </p>
              <p className="text-2xl">product's website </p>
            </div>
            <div className="text-bold text-white py-4">
              <button class="bg-white border border-white hover:Global-purple-bg hover:text-white font-bold py-2 px-12 rounded-full Global-purple">
                HIRE ME
              </button>
              <button class="bg-transparent border border-white hover:bg-purple-700 hover:text-white text-white font-bold py-2 px-10 rounded-full ml-4">
                PORTFOLIO
              </button>
              
            </div>
          </div>
          <div className="flex-1 flex justify-end">
            <img src={HeroImage} alt="Hero Image" />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img src={HeroShape} className="hero-bottom-image" />
      </div>
    </>
  );
}
