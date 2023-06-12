import { useState } from "react";
import { getWeatherDetails } from "../../Shared/Api/weatherApi";
import Button from "../../Shared/Button";
import Input from "../../Shared/Input";
import moment from "moment/moment";

const Weather = () => {
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [time, setTime] = useState("");
  const [country, setCountry] = useState("");
  const [cityname, setCityName] = useState("");

  const cityNameHandler = (event) => {
    setCityName(event.target.value);
  };

  const getCurrentWeatherHandler = async () => {
    const weatherDetails = await getWeatherDetails(cityname);
    const weatherData = (await weatherDetails.data) || {};
    console.log(weatherData?.location);
    setCity(weatherData?.location?.name);
    setRegion(weatherData?.location?.region);
    const customTime = moment
      .unix(weatherData?.location?.localtime_epoch)
      .format("dddd, MMMM Do, YYYY h:mm:ss A");
    setTime(customTime);
    setCountry(weatherData?.location?.country);
  };

  return (
    <>
      <div className=" flex justify-center items-center">
        <Input
          type="text"
          placeholder="enter cityname"
          label="City Name"
          value={cityname}
          onChange={cityNameHandler}
        />
      </div>
      <div className=" flex justify-center items-center">
        <Button buttonname="Get Weather" onClick={getCurrentWeatherHandler} />
      </div>
      <div className="flex justify-around items-center my-10 mx-5 rounded-sm border py-5 px-2">
        <div>
          <p>City</p>
          <p>{city}</p>
        </div>
        <div>
          <p>Region</p>
          <p>{region}</p>
        </div>
        <div>
          <p>Time</p>
          <p>{time}</p>
        </div>
        <div>
          <p>Country</p>
          <p>{country}</p>
        </div>
      </div>
    </>
  );
};
export default Weather;
