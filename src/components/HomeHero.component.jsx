import React from "react";
import hero_ilustration_shadow from "../assets/hero_ilustration_shadow.svg";

function HomeHero() {
  return (
    <div className="mt-4 flex flex-col items-center justify-center">
      <div className="w-10/12">
        <h1 className="text-center text-3xl font-extrabold">
          Desarrollamos su presencia en línea{" "}
        </h1>
      </div>
      <img
        className="mt-4 block scale-95 
        transition-all
        duration-500 ease-in-out hover:scale-100 hover:transition-all hover:duration-500 hover:ease-in-out"
        src={hero_ilustration_shadow}
        alt="Main ilustration"
      />
    </div>
  );
}
export default HomeHero;
