import React from "react";

const SummaryTableItem = ({ tenant }) => {
  const {
    hseno,
    user: { first_name, other_names },
    current_mreading,
    prev_mreading,
  } = tenant;
  return (
    <tr>
      <th scope="row">{hseno}</th>
      <td>{`${first_name} ${other_names}`}</td>
      <td>{current_mreading.reading}</td>
      <td>{prev_mreading.reading}</td>
      <td>{current_mreading.reading - prev_mreading.reading}</td>
      <td>
        <a href="!#" className="btn btn-outline-success">
          Summary
        </a>
      </td>
    </tr>
  );
};

export default SummaryTableItem;
