import React from "react";
import Loader from "../components/preloader";

function StripedTable({ data }) {
  const thClass =
    "px-4 py-4 text-left bg-blue-900 text-white text-sm font-medium";
  const tdClass = "px-4 py-8 border-t border-b border-gray-300 text-sm";
  const trClass = "border-gray-300 even:bg-gray-300";
  return (
    <table className="w-full rounded-sm table-auto">
      <thead>
        <tr>
          <th className={thClass}>Restaurant</th>
          <th className={thClass}>Food</th>
          <th className={thClass}>Date Eaten</th>
          <th className={thClass}>Rating</th>
          <th className={thClass}>Price</th>
        </tr>
      </thead>
      <tbody>
        {data.map((i) => {
          return (
            <tr className={trClass} key={i._id}>
              <td className={tdClass}>
                <img
                  src="https://www.brandingmag.com/wp-content/uploads/2012/08/D-FINAL.png"
                  className="h-8"
                />
              </td>
              <td className={tdClass}>{i.name}</td>
              <td className={tdClass}>March 1st</td>
              <td className={tdClass}>9</td>
              <td className={tdClass}>$10</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default StripedTable;
