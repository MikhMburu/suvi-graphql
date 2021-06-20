import React from "react";

const ProfContainer = (props) => {
  return (
    <section id="team" class="team">
      <div class="container">
        <div class="main-body">
          <div class="row gutters-sm">{props.children}</div>
        </div>
      </div>
    </section>
  );
};

export default ProfContainer;
