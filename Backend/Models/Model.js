const axios = require("axios");
const config = require("../Config/Config");
const { query } = require("express");
let data = [
  {
    id: 1,
    name: "sthitapragyan",
    age: 19,
  },
  {
    id: 2,
    name: "sai",
    age: 20,
  },
  {
    id: 3,
    name: "rahul",
    age: 31,
  },
];
const getUserModel = () => {
  try {
    return data;
  } catch (error) {
    return error;
  }
};
const addUserModel = (body) => {
  try {
    data = [...data, body];
    return data;
  } catch (error) {
    return error;
  }
};
const editUserModel = (body) => {
  try {
    const user = data.find((ele) => ele.id === body.id);
    console.log(user);

    user.name = body.name;
    return data;
  } catch (error) {
    return error;
  }
};
const deleteUserModel = (body) => {
  try {
    const updatedData = data.filter((ele, i) => ele.id !== body.id);
    data = [...updatedData];
    return data;
  } catch (error) {
    return error;
  }
};
const currentWeatherModel = async (queryParams) => {
  try {
    const data = await axios.get(
      config.weatherApi.url +
        "/current.json" +
        "?key=" +
        config.weatherApi.key +
        "&q=" +
        queryParams.city +
        "&aqi=" +
        queryParams.aqi
    );
    return data.data;
  } catch (error) {
    console.error(error.message);
    return error;
  }
};

const forecastWeatherModel = async (queryParams) => {
  try {
    const data = await axios.get(
      config.weatherApi.url +
        "/forecast.json" +
        "?" +
        "key=" +
        config.weatherApi.key +
        "&q=" +
        queryParams.city +
        "&day=" +
        "1" +
        "&aqi=" +
        queryParams.aqi +
        "&alert=" +
        "no"
    );
    return data.data;
  } catch (error) {
    console.error(error.message);
    return error;
  }
};
module.exports = {
  getUserModel,
  addUserModel,
  editUserModel,
  deleteUserModel,
  currentWeatherModel,
  forecastWeatherModel,
};
