import React from "react";

const TenantContainer = (props) => {
  return (
    <section id="team" className="team">
      <div className="container-fluid">
        <div className="row">{props.children}</div>
      </div>
    </section>
  );
};

export default TenantContainer;
