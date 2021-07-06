import React from "react";
import HseForm from "./HseForm";
import HouseList from "./HouseList";

const HseSideBar = () => {
  return (
    <div className="col-md-5">
      <h3 className="lead text-capitalize text-center">Add new house</h3>
      <HseForm />
      <HouseList />
    </div>
  );
};

export default HseSideBar;
