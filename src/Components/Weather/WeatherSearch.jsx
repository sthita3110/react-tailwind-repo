import React from "react";
import Input from "../../Shared/Input";
import Button from "../../Shared/Button";
const WeatherSearch = (props) => {
  return (
    <>
      <div className=" flex justify-center items-center">
        <Input
          type="text"
          placeholder="enter cityname"
          label="City Name"
          value={props.cityname}
          onChange={props.cityNameHandler}
        />
      </div>
      <div className=" flex justify-center items-center">
        <Button
          className="btn-primary"
          buttonname="Get Weather"
          onClick={props.getCurrentWeatherHandler}
        />
      </div>
    </>
  );
};

export default WeatherSearch;
