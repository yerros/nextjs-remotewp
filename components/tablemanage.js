import React, { useRef } from "react";
import Link from "next/link";
import { Button } from ".";

function TableManage({ data, id, details }) {
  const refButton = useRef(null);
  const thClass =
    "px-4 py-4 text-left bg-blue-900 text-white text-sm font-medium";
  const tdClass = "px-4 py-8 border-t border-b border-gray-300 text-sm";
  const trClass = "border-gray-300 even:bg-gray-300";

  //custom Button
  const MyButton = React.forwardRef(({ onClick, href }, ref) => {
    return (
      <a href={href} onClick={onClick} ref={ref}>
        Click Me
      </a>
    );
  });

  const onTrigger = (event) => {
    details(!details);
  };

  // end
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
            <tr className={trClass} key={i.id}>
              <td className={tdClass}>
                <Link
                  href={`/sites/${i._id}`}
                  className="block mt-6 no-underline"
                >
                  <img
                    src={i.yoast_head_json.og_image[0].url}
                    className="h-8"
                  />
                </Link>
              </td>
              <td className={tdClass}>{i.title.rendered}</td>
              <td className={tdClass}>{i.date}</td>
              <td className={tdClass}>
                <div
                  className="inline-block px-2 py-1 text-xs font-medium text-center text-blue-400 bg-transparent border border-blue-400 border-solid rounded cursor-pointer hover:bg-blue-400 hover:text-white"
                  type=""
                >
                  <Link
                    href={`/manage/${id}/${i.id}`}
                    passHref
                    className="block mt-6 mr-2 no-underline"
                  >
                    <MyButton onClick={onTrigger} />
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

export default TableManage;
