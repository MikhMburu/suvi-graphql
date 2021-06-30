import React from "react";

const ProfContainer = (props) => {
  return (
    <section id="team" className="team">
      <div className="container">
        <div className="main-body">
          <div className="row gutters-sm">{props.children}</div>
        </div>
      </div>
    </section>
  );
};

export default ProfContainer;
