import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import TableItem from "./TableItem";
import TableContainer from "./TableContainer";

const SideBar = () => {
  const houses = useSelector((state) => state.readings.occupiedHouses);
  const [rdate, setRdate] = useState("");
  const [mreadings, setMreadings] = useState([]);

  const onChangeHandler = (e) => {
    setMreadings({
      ...mreadings,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      if (mreadings) {
        const readingsArr = Object.keys(mreadings).map((item) => {
          return {
            tenant: item,
            date: rdate,
            reading: mreadings[item],
          };
        });
        // console.log("Readings array..\n", readingsArr);
        const res = await axios.post("/meter-readings", readingsArr, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log(res);
      }
    } catch (err) {
      console.log("Error in sending readings..\n", err);
    }
  };
  return (
    <div id="side-bar">
      <form onSubmit={onSubmitHandler}>
        <TableContainer setDate={setRdate}>
          {houses ? (
            houses.map((hse) => {
              return (
                <TableItem
                  onChange={onChangeHandler}
                  key={hse._id}
                  house={hse}
                />
              );
            })
          ) : (
            <tr>
              <td>No data</td>
            </tr>
          )}
        </TableContainer>
      </form>
    </div>
  );
};

export default SideBar;
