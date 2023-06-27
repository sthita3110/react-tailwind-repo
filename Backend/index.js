const http = require("http");
const express = require("express");
const chalk = require("chalk");
const exp = require("constants");
const morgan = require("morgan");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(morgan("dev"));
app.use(cors("*"));
const os = require("os");
const browser = require("browser-detect");
const router = require("./Routes/routes");
const rocketRouter = require("./Routes/RocketRoutes");

const PORT = 3001 || process.env.PORT;
app.use(router);
app.use("/space", rocketRouter);
app.get("/methods", (request, response) => {
  response.status = 200;
  response.json({
    currentOS: os.platform(),
    //networkInterface: os.networkInterfaces(),
    uptime: os.uptime(),
    version: os.version(),
    browser: browser(),
    // browser: browser(request.headers["user-agent"]),
  });
});
// http
//   .createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.write("hello node");
//     res.end();
//     console.log("Hello Node");
//   })
//   .listen(3001);
app.listen(PORT, () => {
  console.log(chalk.red("server is running on", chalk.blueBright(PORT)));
});
