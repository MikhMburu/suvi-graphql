import React from "react";
import TableItem from "./TableItem";

const SideBar = () => {
  return (
    <div id="side-bar">
      <form>
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
              <td>
                <input name="date_of_reading" type="date" />
              </td>
            </tr>
            <TableItem />
            <TableItem />
            <TableItem />
            <TableItem />
            <TableItem />
            <TableItem />
            <tr>
              <td colSpan="2">
                <button className="btn btn-outline-secondary form-control">
                  Submit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default SideBar;
