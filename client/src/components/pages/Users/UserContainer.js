import React from "react";

const UserContainer = (props) => {
  return (
    <section id="team" className="team">
      <div className="container">
        <div className="row">{props.children}</div>
      </div>
    </section>
  );
};

export default UserContainer;
