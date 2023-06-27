const axios = require("axios");
const {
  rocketApi: { url },
} = require("../Config/Config");
const getRocketsModel = async () => {
  try {
    const fetchRockets = await fetch(url + "/rockets");
    const rockets = await fetchRockets.json();

    return rockets;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

const getOneRocketModel = async (rocketId) => {
  try {
    const fetchOneRocket = await fetch(url + "/rockets/" + rocketId);
    const oneRocket = await fetchOneRocket.json();
    return oneRocket;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

module.exports = { getRocketsModel, getOneRocketModel };
