import React from "react";
import classNames from "classnames";

const HseListItem = ({ house, click }) => {
  if (!house) {
    return <p>Loading...</p>;
  } else {
    const { hseno, kplc_no, occupied } = house;
    return (
      <li
        className={classNames(
          "list-group-item d-flex          justify-content-between align-items-start mb-1",
          {
            "bg-dark text-light": occupied,
            "bg-light text-black-50": !occupied,
          }
        )}
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">
            <span onClick={() => click(house)} className="clickable">
              House #{hseno}
            </span>
          </div>
          Meter no. #{kplc_no}
        </div>
        {occupied ? (
          <i class="bx bxs-check-circle text-success">Occupied</i>
        ) : (
          <i className="bx bxs-minus-circle text-danger">Vacant</i>
        )}
      </li>
    );
  }
};

export default HseListItem;
