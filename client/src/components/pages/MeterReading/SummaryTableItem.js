import React from "react";
import isEmpty from "../../../utilities/isEmpty";
import { Link } from "react-router-dom";

const SummaryTableItem = ({ tenant }) => {
  // const {tenant_id} = useParams()
  const {
    _id,
    hseno,
    user: { first_name, other_names },
    current_mreading,
    prev_mreading,
  } = tenant;
  let current = 0;
  let previous = 0;
  let consumption;
  if (!isEmpty(current_mreading)) {
    current = current_mreading.reading;
  }
  if (!isEmpty(prev_mreading)) {
    previous = prev_mreading.reading;
  }
  consumption = current - previous;
  console.log(_id, typeof _id);

  return (
    <tr>
      <th scope="row">#{hseno}</th>
      <td>{`${first_name} ${other_names}`}</td>
      <td>{previous.toFixed(2)}</td>
      <td>{current.toFixed(2)}</td>
      <td>{consumption.toFixed(2)}</td>
      <td>
        <Link
          to={`/mreading/${_id}`}
          className="btn btn-outline-success form-control"
        >
          View Entry
        </Link>
      </td>
    </tr>
  );
};

export default SummaryTableItem;
