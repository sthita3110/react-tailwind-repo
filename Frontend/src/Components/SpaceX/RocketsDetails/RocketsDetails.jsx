import React from "react";
import { IoMdNavigate } from "react-icons/io";

import { useNavigate } from "react-router-dom";

export const RocketsDetails = ({
  key,
  id = "",
  company = "",
  country = "",
  desc = "",
  flickrImages = [],
  rocketsName = "",
  rocketsId = "",
  rocketsType = "",
  active = false,
  wiki = "",
  mass = { kg: 0, lb: 0 },
  firstFlight = "",
}) => {
  const navigate = useNavigate();
  const activeClass = active ? "bg-green-100" : "bg-rose-100";
  const RocketHandler = () => {
    console.log(rocketsId);
    navigate("/rocket/" + rocketsId);
  };
  return (
    <>
      <div className="flex justify-center items-center ">
        <div className="grid grid-cols-1 gap-2 m-10px">
          <div
            className={`card card-compact w-40rem bg-base-100 shadow-xl ${activeClass}`}
          >
            <figure>
              <div className="carousel rounded-box w-96">
                {flickrImages.map((ele, i) => (
                  <div className="carousel-item w-1/2">
                    <img src={ele} className="w-40rem" />
                  </div>
                ))}
              </div>
            </figure>

            <div className="card-body">
              <h2 className="card-title">
                {rocketsName}
                {"  "}({rocketsId})
              </h2>
              <p>{desc}</p>
              <div className="collapse bg-base-100">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                  More...
                </div>
                <div className="collapse-content">
                  <p>
                    {company}, {country} ({rocketsType})
                  </p>
                  <p>
                    kg: {mass.kg} || lb: {mass.lb}
                  </p>
                  <p>active: {"" + active}</p>
                  <p>first_flight: {firstFlight}</p>
                </div>
              </div>
              <div className="card-actions flex justify-evenly w-100%">
                <div className="flex justify-center items-center space-x-5 my-1rem w-100%">
                  <p>
                    <a
                      href={wiki}
                      target="_blank"
                      className=" text-blue-600 text-sm"
                    >
                      {wiki}
                    </a>
                  </p>
                  <button className="btn btn-primary" onClick={RocketHandler}>
                    <IoMdNavigate />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
