import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Spinner from "../../common/Spinner";
import Occupant from "./Occupant";

const HouseDetails = () => {
  const [hse, setHse] = useState(null);
  const hseDetails = useSelector((state) => state.house.selectedHouse);
  useEffect(() => {
    if (hseDetails) {
      setHse(hseDetails);
    }

    //eslint-disable-next-line
  }, [hseDetails, hse]);
  if (!hse) {
    return <Spinner />;
  } else {
    return (
      <div className="col-md-7 p-3">
        <h5 className="fw-bolder">House #{hse.hseno}</h5>
        <h6 className="font-monospace">Meter Number: {hse.kplc_no}</h6>
        <span className="text-decoration-underline text-primary fw-bold">
          Occupants
        </span>
        {hse.occupants.map((tenant, i) => (
          <Occupant key={i} occupant={tenant} />
        ))}
      </div>
    );
  }
};

export default HouseDetails;
