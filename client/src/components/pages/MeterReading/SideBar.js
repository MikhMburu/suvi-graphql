// Import libraries
import React, { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
// Import files and functions
// -------------REDUX
import { actionCreators } from "../../../redux/Actions";
// Import Components
import TableItem from "./TableItem";
import TableContainer from "./TableContainer";

const SideBar = () => {
  // ------GraphQL
  // eslint-disable-next-line

  // ------Redux
  const dispatch = useDispatch();
  const { callConsumption } = bindActionCreators(actionCreators, dispatch);
  const houses = useSelector((state) => state.readings.occupiedHouses);
  // ------React State
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
        const res = await axios.post("/meter-readings", readingsArr, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        // res comes back with a success and a msg key
        if (res.data.success) {
          alert(res.data.msg);
          callConsumption();

          // TODO: Get consumption by querying database for previous readings
        }
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
