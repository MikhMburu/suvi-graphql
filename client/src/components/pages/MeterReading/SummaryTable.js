import React from "react";
import SummaryTableItem from "./SummaryTableItem";

const SummaryTable = () => {
  return (
    <table>
      <thead>
        <tr>
          <th scope="col">House</th>
          <th scope="col">Tenant</th>
          <th scope="col">Current</th>
          <th scope="col">Previous</th>
          <th scope="col">Consumption</th>
          <th scope="col">&nbsp;</th>
        </tr>
      </thead>
      <tbody className="font-monospace">
        <SummaryTableItem />
        <SummaryTableItem />
        <SummaryTableItem />
        <SummaryTableItem />
        <SummaryTableItem />
        <SummaryTableItem />
      </tbody>
    </table>
  );
};

export default SummaryTable;
