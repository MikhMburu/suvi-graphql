import React from "react";

const AddUserContainer = (props) => {
  return (
    <section className="team">
      <div className="container-fluid">{props.children}</div>
    </section>
  );
};

export default AddUserContainer;
