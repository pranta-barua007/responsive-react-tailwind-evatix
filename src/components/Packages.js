import React from "react";
import "../App.css";

export default function Packages({ packagesData }) {
  return (
    <div className="container mx-auto w-full py-20">
      <p className="inline-flex justify-center items-center text-bold text-5xl pb-8 mb-10 border-b-4 border-transparent border-pink-100 Font-Bold">
        Packages
      </p>
      <div className="flex justify-around items-center">
        {packagesData.map((data) => {
          return (
            <div className="flex-1">
              <figure class="md:flex bg-white rounded-xl md:p-0 Package-styles">
                <div class="md:p-8 text-center md:text-left space-y-4 mt-2">
                  <p className="text-bold text-purple-700 text-1xl Font-S-Bold">
                    {data.title}
                  </p>
                  <p className="text-bold text-2xl Font-Bold">{data.heading}</p>
                  <p class="text-sm">{data.description}</p>
                  <button class="bg-purple-700 hover:bg-WHITE hover:text-purple-700 text-white font-bold py-2 px-8 rounded-full">
                    SEE MORE
                  </button>
                </div>
              </figure>
            </div>
          );
        })}
      </div>
    </div>
  );
}
