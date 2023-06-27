// const { response } = require("express");
const { request } = require("express");
const { getRocketsModel, getOneRocketModel } = require("../Models/RocketModel");
const getRockets = async (request, response) => {
  try {
    const rockets = await getRocketsModel();
    if (!!rockets && rockets.length === 0 && Array.isArray(rockets)) {
      const emptyRockets = {
        data: [],
        total: 0,
        message: "no data available",
        status: 400,
      };
      response.status(400).json(emptyRockets);
    } else {
      const successRockets = {
        data: rockets || [],
        total: rockets.length || 0,
        message: "data available",
        status: 200,
      };
      response.status(200).json(successRockets);
    }
  } catch (error) {
    const errorResponse = {
      data: [],
      total: 0,
      message: error.message || "internal server error",
      status: 500,
    };
    response.status(500).json(errorResponse);
  }
};

const getOneRocket = async (request, response) => {
  const { id } = request.params;
  try {
    const rockets = await getOneRocketModel(id);
    if (!!rockets && rockets.length === 0 && Array.isArray(rockets)) {
      const emptyRockets = {
        data: [],
        total: 0,
        message: "no data available",
        status: 400,
      };
      response.status(400).json(emptyRockets);
    } else {
      const successRockets = {
        data: rockets || [],
        total: rockets.length || 0,
        message: "data available",
        status: 200,
      };
      response.status(200).json(successRockets);
    }
  } catch (error) {
    const errorResponse = {
      data: [],
      total: 0,
      message: error.message || "internal server error",
      status: 500,
    };
    response.status(500).json(errorResponse);
  }
};

module.exports = { getRockets, getOneRocket };
