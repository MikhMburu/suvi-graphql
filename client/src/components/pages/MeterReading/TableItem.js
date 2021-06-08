import React from "react";

const TableItem = ({ onChange, house }) => {
  return (
    <tr>
      <th scope="row">#{house.hseno}</th>
      <td>
        <input name={house._id} type="text" onChange={onChange} />
      </td>
    </tr>
  );
};

export default TableItem;
