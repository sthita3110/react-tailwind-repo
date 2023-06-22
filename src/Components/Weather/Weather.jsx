import { useState } from "react";
import {
  getWeatherDetails,
  getWeatherForecastDetails,
} from "../../Shared/Api/weatherApi";
// import Button from "../../Shared/Button";
// import Input from "../../Shared/Input";
import Loader from "../../Shared/Loader";
import { useEffect } from "react";
import WeatherBox from "./WeatherBox";
import WeatherCurrentDetails from "./WeatherCurrentDetails";
import WeatherTemp from "./WeatherTemp";
import WeatherSearch from "./WeatherSearch";

const Weather = () => {
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [time, setTime] = useState("");
  const [country, setCountry] = useState("");
  const [cityname, setCityName] = useState("");
  const [checkTempDegree, setCheckTempDegree] = useState("c");
  const [toggleClass, setToggleClass] = useState("c");
  const [loader, setLoader] = useState(true);
  const [weatherDetails, setWeatherDetails] = useState({
    current: {
      condition: {},
    },
    location: {},
  });
  const [weatherForecastData, setWeatherForecastData] = useState({
    location: {},
    forecast: {
      forecastday: [
        {
          hour: [],
        },
      ],
    },
    current: {},
  });

  const cityNameHandler = (event) => {
    setCityName(event.target.value);
  };
  const toggleClassHandler = (temp) => {
    setCheckTempDegree(temp);
    if (temp === "c") {
      setToggleClass("c");
    } else {
      setToggleClass("f");
    }
  };

  const getCurrentWeatherHandler = async () => {
    setLoader(true);
    const weatherDetails = await getWeatherDetails(cityname);
    const weatherForecastDetails = await getWeatherForecastDetails(cityname);
    const weatherData = (await weatherDetails.data) || {};
    const weatherForeCastData = (await weatherForecastDetails.data) || {};
    setWeatherDetails({ ...weatherData });
    setWeatherForecastData({ ...weatherForeCastData });
    console.log(weatherForeCastData);
    setLoader(false);
  };
  useEffect(() => {
    console.log(weatherForecastData);
  }, [weatherForecastData]);

  return (
    <>
      {/* toggle between temp */}
      {!loader && (
        <WeatherTemp
          toggleClass={toggleClass}
          toggleClassHandler={toggleClassHandler}
        />
      )}
      {/* search city input */}
      <WeatherSearch
        cityNameHandler={cityNameHandler}
        getCurrentWeatherHandler={getCurrentWeatherHandler}
      />
      {/* weather details box */}
      {!loader && <WeatherBox location={weatherDetails.location} />}
      {/* weather details box */}
      {!loader && (
        <WeatherCurrentDetails
          current={weatherDetails.current}
          forecast={weatherForecastData.forecast}
          checkTemp={checkTempDegree}
        />
      )}
      {loader && (
        <div className="flex justify-center items-center my-5rem">
          <Loader loaderType={"progress"} />
        </div>
      )}
    </>
  );
};
export default Weather;
