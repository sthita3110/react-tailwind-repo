import React from "react";

const WeatherTemp = ({ toggleClass, toggleClassHandler }) => {
  return (
    <>
      <div
        className="flex justify-end items-center
      md:w-100%
      md:mx-10
      md:px-10
       lg:w-70%
       lg:mx-5
       lg:my-5
       "
      >
        <button
          className={`${
            toggleClass === "c"
              ? "btn btn-success mx-2 text-white rounded-none"
              : "btn"
          }`}
          onClick={() => toggleClassHandler("c")}
        >
          &deg; C
        </button>
        <button
          className={`${
            toggleClass === "f"
              ? "btn btn-error mx-2 text-white rounded-none"
              : "btn"
          }`}
          onClick={() => toggleClassHandler("f")}
        >
          &deg; F
        </button>
      </div>
    </>
  );
};

export default WeatherTemp;
