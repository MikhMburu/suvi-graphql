import React, { useState } from "react";
import TableItem from "./TableItem";
import TableContainer from "./TableContainer";

const SideBar = () => {
  const [mreadings, setMreadings] = useState(null);
  const onChangeHandler = (e) => {
    setMreadings({ ...mreadings, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(mreadings);
  };
  return (
    <div id="side-bar">
      <form onSubmit={onSubmitHandler}>
        <TableContainer onChange={onChangeHandler}>
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
