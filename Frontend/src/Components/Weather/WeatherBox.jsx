import React from "react";

const WeatherBox = ({ location }) => {
  return (
    <>
      <div
        className="flex justify-center items-center mx-30rem "
        style={{ margin: "1rem 0 1rem 0 " }}
      >
        <span className="font-sans text-4xl m-5 font-semibold">
          {location.name} weather forecast,
        </span>
        <span className="text-gray text-2xl">
          {location.region} {location.country}
        </span>
      </div>
    </>
  );
};

export default WeatherBox;
