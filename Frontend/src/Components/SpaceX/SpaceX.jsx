import React, { Fragment, useEffect, useState } from "react";
import { getRocketsDetails } from "../../Shared/Api/weatherApi";
import { RocketsDetails } from "./RocketsDetails/RocketsDetails";
import SpaceLoader from "../../Shared/SpaceLoader";
const SpaceX = () => {
  const [rocketsData, setRocketsData] = useState([]);
  const [loader, setLoader] = useState(false);
  const getRocketsData = async () => {
    setLoader(true);
    const data = await getRocketsDetails();
    if (data.status === 200) {
      setLoader(false);
      console.log(data);
      console.log(typeof data.data);

      setRocketsData(data.data);
    } else {
      setLoader(false);
      setRocketsData([]);
    }
  };
  useEffect(() => {
    getRocketsData();
  }, []);

  return (
    <Fragment>
      <div className="flex justify-center items-center">
        {loader && <SpaceLoader />}
      </div>
      {rocketsData.length === 0 && !loader && <p>no data available</p>}
      {rocketsData.length !== 0 && (
        <div>
          {rocketsData.map((ele) => (
            <div key={ele.id}>
              <RocketsDetails
                id={ele.id}
                company={ele.company}
                country={ele.country}
                desc={ele.description}
                flickrImages={ele.flickr_images}
                rocketsName={ele.rocket_name}
                rocketsId={ele.rocket_id}
                rocketsType={ele.rocket_type}
                wiki={ele.wikipedia}
                mass={ele.mass}
                active={ele.active}
                firstFlight={ele.first_flight}
              />
            </div>
          ))}
        </div>
      )}
    </Fragment>
  );
};

export default SpaceX;
