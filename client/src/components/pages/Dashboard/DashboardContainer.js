import React from "react";

const DashboardContainer = (props) => {
  return (
    <section id="services" className="services">
      <div className="container-fluid">
        <div className="row">{props.children}</div>
      </div>
    </section>
  );
};
export default DashboardContainer;
