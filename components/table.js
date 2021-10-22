import React, { useRef } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

function StripedTable({ data }) {
  const refButton = useRef(null);
  const thClass =
    "px-4 py-4 text-left bg-blue-900 text-white text-sm font-medium";
  const tdClass = "px-4 py-8 border-t border-b border-gray-300 text-sm";
  const trClass = "border-gray-300 even:bg-gray-300";
  return (
    <table className="w-full rounded-sm table-auto">
      <thead>
        <tr>
          <th className={thClass}>Stack</th>
          <th className={thClass}>Site Name</th>
          <th className={thClass}>Site Address</th>
          <th className={thClass}>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((i) => {
          return (
            <tr className={trClass} key={i._id}>
              <td className={tdClass}>
                <Link
                  href={`/sites/${i._id}`}
                  className="block mt-6 no-underline"
                >
                  <img
                    src="https://www.jayahost.com/blog/wp-content/uploads/2015/03/wordpress-logo.png"
                    className="h-8"
                  />
                </Link>
              </td>
              <td className={tdClass}>{i.name}</td>
              <td className={tdClass}>{i.address}</td>
              <td className={tdClass}>
                <div
                  className="inline-block px-2 py-1 text-xs font-medium text-center text-blue-400 bg-transparent border border-blue-400 border-solid rounded cursor-pointer hover:bg-blue-400 hover:text-white"
                  type=""
                >
                  <Link
                    href={`/sites/${i._id}`}
                    className="block mt-6 mr-2 no-underline"
                  >
                    Edit
                  </Link>
                </div>
                <div
                  className="inline-block px-2 py-1 mx-2 text-xs font-medium text-center text-red-400 bg-transparent border border-red-400 border-solid rounded cursor-pointer hover:bg-red-400 hover:text-white"
                  type=""
                >
                  <Link
                    href={`/sites/${i._id}`}
                    className="block mt-6 no-underline"
                  >
                    Manage
                  </Link>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default StripedTable;
