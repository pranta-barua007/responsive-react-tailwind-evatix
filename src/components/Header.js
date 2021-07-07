import React, {useState, useEffect} from "react";
import Logo from "../assets/logo_white.png";
import ScrollerLogo from '../assets/logo_01.png';
import "../App.css";

export default function Header() {
  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]); 
  return (
    <header className={`${!top ? 'bg-white blur shadow-lg' : 'Background-gradient'} header-height Nav-sticky bg-opacity-90 transition duration-300 ease-in-out`}>
      <div className="container mx-auto flex justify-between items-center w-full">
        <div className="flex-1">
          <img src={top ? Logo : ScrollerLogo} alt="Logo" />
        </div>
        <div className="flex-1">
          <nav>
            <ul className="lg:flex items-center justify-center text-lg pt-4 lg:pt-0">
              <li>
                <a
                  className={`lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 ${ top ? 'text-gray-100' : 'text-black'} font-bold`}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className={`lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 ${top ? 'text-gray-200' : 'black'}`}
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
                  <button class={`${!top ? 'Global-purple-bg': 'bg-white '} hover:bg-purple-700 hover:text-white font-bold py-2 px-8 rounded-full ${ !top ? 'text-white' : 'Global-purple'}`}>
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
