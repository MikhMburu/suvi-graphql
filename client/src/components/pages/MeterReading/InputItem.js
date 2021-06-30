import React from "react";

const InputItem = ({ onChange, house }) => {
  return (
    <tr>
      <th scope="row">#{house.hseno}</th>
      <td>
        <input
          type="text"
          name={house._id}
          onChange={onChange}
          className="form-control p-1"
        />
      </td>
    </tr>
  );
};

export default InputItem;
