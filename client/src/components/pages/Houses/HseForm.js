import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
// Import files and functions
import { ADD_HOUSE_GQL } from "../../../GraphQL/Mutations";
import { LOAD_HOUSES_GQL } from "../../../GraphQL/Queries";
import { actionCreators } from "../../../redux/Actions";

const HseForm = () => {
  // ____Define State
  const [hseno, setHseno] = useState("");
  const [mtrNo, setMtrno] = useState("");
  // ____GraphQL
  // eslint-disable-next-line
  const [addHouse, { error }] = useMutation(ADD_HOUSE_GQL, {
    refetchQueries: [{ query: LOAD_HOUSES_GQL }],
  });
  // ____Redux
  const dispatch = useDispatch();
  const { refreshHouseList } = bindActionCreators(actionCreators, dispatch);
  // ____Define functions
  const submitHandler = (e) => {
    e.preventDefault();
    if (mtrNo === "" || hseno === "") {
      return alert("One or all of the fields is missing");
    }
    addHouse({
      variables: {
        hseno: parseInt(hseno),
        kplc_no: mtrNo,
      },
    });
    setMtrno("");
    setHseno("");
    refreshHouseList();
  };
  return (
    <form className="hse-form" onSubmit={submitHandler}>
      <div className="input-group p-2">
        <input
          type="text"
          className="form-control hse"
          name="hseno"
          value={hseno}
          placeholder="Hse"
          onChange={(e) => setHseno(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          name="mtrNo"
          value={mtrNo}
          placeholder="Meter No."
          onChange={(e) => setMtrno(e.target.value)}
        />
        <button className="btn btn-outline-success">Submit</button>
      </div>
    </form>
  );
};

export default HseForm;
