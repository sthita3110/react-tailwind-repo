import { weatherKey } from "../../Config/weatherConfig";
import { weatherURL } from "../../Config/weatherConfig";
import axios from "axios";
export const getWeatherDetails = async (cityName) => {
  try {
    const url = `${weatherURL}current.json?key=${weatherKey}&q=${cityName}&aqi=no;`;
    const weatherData = await axios.get(url);
    return weatherData;
  } catch (error) {
    console.error(error.message);
    return error;
  }
};

export const getWeatherForecastDetails = async (cityName) => {
  try {
    const url = `${weatherURL}forecast.json?key=${weatherKey}&q=${cityName}&days=1&aqi=no&alerts=no`;
    const weatherData = await axios.get(url);
    return weatherData;
  } catch (error) {
    console.error(error.message);
    return error;
  }
};
//module.exports={getWeatherDetails}
