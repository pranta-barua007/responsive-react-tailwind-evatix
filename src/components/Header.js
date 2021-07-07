import React from "react";
import Logo from "../assets/logo_white.png";
import "../App.css";

export default function Header() {
  return (
    <header className="Background-gradient header-height Nav-sticky">
      <div className="container mx-auto flex justify-between items-center w-full">
        <div className="flex-1">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="flex-1">
          <nav>
            <ul className="lg:flex items-center justify-center text-lg pt-4 lg:pt-0">
              <li>
                <a
                  className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 text-gray-100 font-bold"
                  
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 text-gray-200"
              
                >
                  Portfolio
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex-1">
          <nav>
            <ul className="lg:flex items-center justify-end text-lg pt-4 lg:pt-0">
              <li>
                <a
                  className="lg:p-4 py-3 px-0 block lg:mb-0 mb-2"
                  
                >
                  <button class="bg-white hover:bg-purple-700 hover:text-white text-purple-500 font-bold py-2 px-8 rounded-full">
                    HIRE ME
                  </button>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
