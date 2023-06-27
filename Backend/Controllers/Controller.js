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
const {
  getUserModel,
  addUserModel,
  editUserModel,
  deleteUserModel,
  currentWeatherModel,
  forecastWeatherModel,
} = require("../Models/Model");
const getUser = (request, response) => {
  try {
    const data = getUserModel();
    const responseObj = {
      total: data.length,
      data,
      message: "SUCCESS",
      status: 200,
    };
    response.status(200).json(responseObj);
  } catch (error) {
    console.log(error.message);
    const errorObj = {
      total: 0,
      data: [],
      message: error.message,
      status: 400,
    };
    response.status(400).json(errorObj);
  }
};
const addUser = (request, response) => {
  const body = request.body;
  //const payload={...request.body}
  try {
    addUserModel(body);
    const responseObj = {
      message: "user added successfully",
      status: 200,
    };
    response.status(200).json(responseObj);
  } catch (error) {
    console.log(error.message);
    const errorObj = {
      total: 0,
      data: [],
      message: error.message,
      status: 400,
    };
    response.status(400).json(errorObj);
  }
};
const editUser = (request, response) => {
  const body = request.body;
  try {
    const editedData = editUserModel(body);
    const responseObj = {
      total: data.length,
      editedData,
      message: "user edited successfully",
      status: 200,
    };
    response.status(200).json(responseObj);
  } catch (error) {
    console.log(error.message);
    const errorObj = {
      total: 0,
      data: [],
      message: error.message,
      status: 400,
    };
    response.status(400).json(errorObj);
  }
};
const deleteUser = (request, response) => {
  const body = request.body;
  try {
    deleteUserModel(body);
    const responseObj = {
      message: "user deleted succesfully",
      status: 200,
    };
    response.status(200).json(responseObj);
  } catch (error) {
    console.log(error.message);
    const errorObj = {
      total: 0,
      data: [],
      message: error.message,
      status: 400,
    };
    response.status(400).json(errorObj);
  }
};
const currentWeather = async (request, response) => {
  try {
    const queryParams = request.query;
    const data = await currentWeatherModel(queryParams);
    response.status(200).json(data);
  } catch (error) {
    console.log(error.message);
    const errorObj = {
      total: 0,
      data: [],
      message: error.message,
      status: 400,
    };
    response.status(400).json(errorObj);
  }
};
const forecastWeather = async (request, response) => {
  try {
    const queryParams = request.query;
    const data = await forecastWeatherModel(queryParams);
    response.status(200).json(data);
  } catch (error) {
    console.log(error.message);
    const errorObj = {
      total: 0,
      data: [],
      message: error.message,
      status: 400,
    };
    response.status(400).json(errorObj);
  }
};
module.exports = {
  getUser,
  addUser,
  editUser,
  deleteUser,
  currentWeather,
  forecastWeather,
};
