import React from "react";
import isEmpty from "../../../utilities/isEmpty";

const SummaryTableItem = ({ tenant }) => {
  const {
    hseno,
    user: { first_name, other_names },
    meter_readings,
    current_mreading,
    prev_mreading,
  } = tenant;

  let current = 0;
  let previous = 0;
  let consumption = 0;

  if (!isEmpty(meter_readings)) {
    current = current_mreading.reading;
    previous = prev_mreading.reading;
    consumption = current - previous;
  }

  return (
    <tr>
      <th scope="row">#{hseno}</th>
      <td>{`${first_name} ${other_names}`}</td>
      <td>{current.toFixed(2)}</td>
      <td>{previous.toFixed(2)}</td>
      <td>{consumption.toFixed(2)}</td>
    </tr>
  );
};

export default SummaryTableItem;
