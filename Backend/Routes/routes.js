const router = require("express").Router();
const {
  getUser,
  addUser,
  editUser,
  deleteUser,
  currentWeather,
} = require("../Controllers/Controller");

router.get("/user", getUser);
router.post("/user", addUser);
router.delete("/user", deleteUser);
router.put("/user", editUser);

router.get("/currentWeather", currentWeather);
module.exports = router;
