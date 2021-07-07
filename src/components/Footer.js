import React from "react";
import "../App.css";
import FooterImage from "../assets/Shape_04@2x.png";

export default function Footer() {
  return (
    <div className="flex-col justify-center items-center w-full">
      <img src={FooterImage} alt="foooter" className="Footer-positioning" />
      <div className="flex-col Footer-description">
        <p className="inline-flex justify-center items-center text-bold text-white text-4xl pb-8 border-b-4 border-transparent border-pink-100 Font-Bold">
          Start a project with me!
        </p>
        <p className="text-bold text-white pt-4 text-2xl">
          let’s discuss our ideas for presenting your business to the
        </p>
        <p className="text-bold text-white pb-4 text-2xl">
          world in an attractive, efficient and effective way.
        </p>
        <button class="bg-white hover:bg-purple-500 hover:text-white font-bold py-2 px-14 mt-6 shadow-lg rounded-full Global-purple">
          HIRE ME
        </button>
      </div>
    </div>
  );
}
