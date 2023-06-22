import moment from "moment";

const WeatherCurrentDetails = ({ current, forecast, checkTemp }) => {
  return (
    <>
      <div className="bg-weather bg-no-repeat bg-center bg-cover md:mx-1rem lg:mx-5rem md:py-5 md:px-10 my-5 rounded-lg text-white">
        <div className="flex justify-around align-top">
          <div className="flex justify-center items-center flex-col-reverse">
            <p className=" font-bold font-mono">{current.condition.text}</p>
            <figure>
              <img
                height={100}
                width={100}
                src={"https:" + current.condition.icon}
                alt="weatherimage"
              />
            </figure>
          </div>
          <div className="flex-col justify-center items-center text-center">
            <p>Wind: {current.wind_kph} kmph</p>
            <p>Precip: {current.precip_in} in</p>
            <p>Pressure: {current.pressure_in} in</p>
            <p className="text-4xl mt-3">
              {checkTemp === "c" && <span>{current.temp_c} &deg;C</span>}{" "}
              {checkTemp === "f" && <span>{current.temp_f} &deg;F</span>}{" "}
            </p>
          </div>
        </div>
        {/* className="text-xs md:text-sm lg:text-lg flex-col" */}
        <div className="font-semibold grid grid-cols-6 gap-2 my-5rem mx-1rem md:mx-2rem lg:mx-3rem md:py-5 md:px-10 text-xs md:text-sm lg:text-lg ">
          {forecast.forecastday[0].hour.map((ele) => (
            <>
              <p>
                {moment
                  .unix(ele.time_epoch)
                  .format("dddd, MMMM Do, YYYY h:mm:ss A")}
              </p>
              {/* <p>{ele.temp_c} &deg;C </p> */}
              <p>
                {checkTemp === "c" && <span>{ele.temp_c} &deg;C</span>}
                {checkTemp === "f" && <span>{ele.temp_f} &deg;F</span>}
              </p>
              <figure>
                {ele.condition.text}
                <img src={"https:" + ele.condition.icon} alt="noimagefound" />
              </figure>
            </>
          ))}
        </div>
      </div>
    </>
  );
};
export default WeatherCurrentDetails;
