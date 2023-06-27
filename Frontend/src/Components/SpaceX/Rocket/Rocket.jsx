import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRocketDetail } from "../../../Shared/Api/weatherApi";
import { FaWikipediaW } from "react-icons/fa";
const Rocket = () => {
  const params = useParams();
  const [rocketDetails, setRocketDetails] = useState({});
  const { id } = params;
  const getOneRocketData = useCallback(async () => {
    const oneRocketData = await getRocketDetail(id);
    setRocketDetails(oneRocketData.data);
  }, [id]);
  useEffect(() => {
    getOneRocketData();
  }, [getOneRocketData]);
  return (
    <>
      <div className="sm:mx-1rem md:mx-5rem lg:mx-10rem my-1rem">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src={
                rocketDetails.flickr_images && rocketDetails.flickr_images[0]
              }
              alt="Album"
              className="h-100%"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{rocketDetails.rocket_name}</h2>
            <p>{rocketDetails?.description}</p>
            <div>
              <div className=" font-semibold">
                Payload Weight ( id, mass, name ):{" "}
              </div>
              {rocketDetails.payload_weights &&
                rocketDetails.payload_weights.map((ele, i) => (
                  <div className="grid grid-cols-3 gap-4 my-1rem" key={i}>
                    <div>{ele.id}</div>
                    <div>{ele.kg} kg</div>
                    <div>{ele.name}</div>
                  </div>
                ))}
            </div>
            <p className=" font-semibold">More Images:</p>
            <div className="flex ">
              {rocketDetails.flickr_images &&
                rocketDetails.flickr_images.map((ele) => (
                  <div key={ele}>
                    <a href={ele} target="_blank">
                      <img
                        src={ele}
                        alt="rocketImages"
                        className="w-5rem h-5rem m-5px p-1"
                      />
                    </a>
                  </div>
                ))}
            </div>
            <div className="card-actions justify-end">
              <button>
                <a href={rocketDetails.wikipedia} target="_blank">
                  <FaWikipediaW />
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rocket;
