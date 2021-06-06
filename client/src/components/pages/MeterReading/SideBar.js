import React, { useState } from "react";
import axios from "axios";
import { useMutation } from "@apollo/client";
import { READ_METERS_GQL } from "../../../GraphQL/Mutations";
import TableItem from "./TableItem";
import TableContainer from "./TableContainer";

const SideBar = () => {
  const [rdate, setRdate] = useState("");
  const [mreadings, setMreadings] = useState([]);
  const [addReadingsBulk, { error }] = useMutation(READ_METERS_GQL);
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
          <TableItem onChange={onChangeHandler} name="1" />
          <TableItem onChange={onChangeHandler} name="2" />
          <TableItem onChange={onChangeHandler} name="3" />
          <TableItem onChange={onChangeHandler} name="4" />
          <TableItem onChange={onChangeHandler} name="5" />
          <TableItem onChange={onChangeHandler} name="6" />
        </TableContainer>
      </form>
    </div>
  );
};

export default SideBar;

// XHRPOSThttp://localhost:3000/meter-readings
// [HTTP/1.1 404 Not Found 3ms]

// 1

// [{"tenant":"1","date":"2021-06-09","reading":"45"},{"tenant":"2","date":"2021-06-09","reading":"88"},{"tenant":"3","date":"2021-06-09","reading":"97"},{"tenant":"4","date":"2021-06-09","reading":"64"},{"tenant":"5","date":"2021-06-09","reading":"31"},{"tenant":"6","date":"2021-06-09","reading":"21"}]
