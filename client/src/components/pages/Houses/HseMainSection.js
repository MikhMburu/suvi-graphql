import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import HseOccupant from "./HseOccupant";
import Spinner from "../../common/Spinner";

const HseMainSection = () => {
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
        <h3 className="display-4 text-black-50">House {hse.hseno}</h3>
        <h4 className="subheading font-monospace">
          <span className="text-danger fw-bold">Mtr Number:</span> {hse.kplc_no}
        </h4>
        <p className="lead">
          House is located on the ground floor to the right.
        </p>
        <h5 className="text-primary text-decoration-underline">Occupants</h5>
        {hse.occupants.map((tenant, i) => (
          <HseOccupant key={i} occupant={tenant} />
        ))}
      </div>
    );
  }
};

export default HseMainSection;
