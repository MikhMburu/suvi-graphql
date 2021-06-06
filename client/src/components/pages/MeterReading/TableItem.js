import React from "react";

const TableItem = ({ onChange, name }) => {
  return (
    <tr>
      <th scope="row">#{name}</th>
      <td>
        <input name={name} type="text" onChange={onChange} />
      </td>
    </tr>
  );
};

export default TableItem;
