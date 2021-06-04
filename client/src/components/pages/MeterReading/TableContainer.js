import React from "react";

const TableContainer = (props) => {
  const { onChange, children } = props;
  return (
    <table>
      <thead>
        <tr>
          <th scope="col" colSpan="2">
            Meter Readings
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Date</th>
          {/* <td>
            <input name="date_of_reading" onChange={onChange} type="date" />
          </td> */}
        </tr>
        {children}
        <tr>
          <td colSpan="2">
            <button
              type="submit"
              className="btn btn-outline-secondary form-control"
            >
              Submit
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableContainer;
