import React from "react";
import moment from "moment";
import isEmpty from "../../../utilities/isEmpty";

const SummaryTableItem = ({ tenant }) => {
  const {
    hseno,
    user: { first_name, other_names },
    meter_readings,
  } = tenant;
  const cdate = moment()
    .subtract(1, "months")
    .endOf("month")
    .format("YYYY-MM-DD");
  const pdate = moment()
    .subtract(2, "months")
    .endOf("month")
    .format("YYYY-MM-DD");
  let current = 0;
  let previous = 0;

  if (!isEmpty(meter_readings)) {
    current = meter_readings.filter((rd) => (rd.date = cdate));
    previous = meter_readings.filter((rd) => (rd.date = pdate));
  }
  console.log("Current reading: \n", current);
  console.log("Previous reading: \n", previous);

  return (
    <tr>
      <th scope="row">{hseno}</th>
      <td>{`${first_name} ${other_names}`}</td>
      <td>{current.toFixed(2)}</td>
      <td>{previous.toFixed(2)}</td>
      <td>{(current - previous).toFixed(2)}</td>
    </tr>
  );
};

export default SummaryTableItem;
