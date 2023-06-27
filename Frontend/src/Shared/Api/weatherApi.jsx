import { weatherKey, weatherURL, localUrl } from "../../Config/weatherConfig";
import axios from "axios";
export const getWeatherDetails = async (cityName) => {
  try {
    const url = `${localUrl}currentWeather?city=${cityName}&aqi=no;`;
    const weatherData = await axios.get(url);
    return weatherData;
  } catch (error) {
    console.error(error.message);
    return error;
  }
};

export const getWeatherForecastDetails = async (cityName) => {
  try {
    const url = `${localUrl}forecastWeather?city=${cityName}&aqi=no;`;
    const weatherData = await axios.get(url);
    return weatherData;
  } catch (error) {
    console.error(error.message);
    return error;
  }
};
export const getRocketsDetails = async () => {
  try {
    const url = `${localUrl}space/rockets`;
    const rocketsFetch = await fetch(url);
    const rocketsData = await rocketsFetch.json();
    return rocketsData;
  } catch (error) {
    console.error(error.message);
    return error;
  }
};
export const getRocketDetail = async (rocketId = "") => {
  try {
    const url = `${localUrl}space/rocket/${rocketId}`;
    const rocketsFetch = await fetch(url);
    const rocketsData = await rocketsFetch.json();
    return rocketsData;
  } catch (error) {
    console.error(error.message);
    return error;
  }
};
//module.exports={getWeatherDetails}
