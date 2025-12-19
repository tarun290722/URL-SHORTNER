// import React from "react";

// const TableRows = ({ ele }) => {
//   let date = new Date(ele.createdAt);
//   date =
//     date.getFullYear() +
//     "-" +
//     String(date.getMonth() + 1).padStart(2, "0") +
//     "-" +
//     String(date.getDate()).padStart(2, "0");
//   return (
//     <tr>
//       <td>{ele.redirectUrl}</td>
//       <td className="truncate">{ele.shortUrl}</td>
//       <td></td>
//       <td>{date}</td>
//     </tr>
//   );
// };

// export default TableRows;

import React from "react";
import { motion } from "framer-motion";
const TableRows = ({ ele }) => {
  let date = new Date(ele.createdAt);
  date =
    date.getFullYear() +
    "-" +
    String(date.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(date.getDate()).padStart(2, "0");
  console.log(ele.totalClicks);

  return (
    <motion.tr
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      whileHover={{ scale: 1.01 }}
    >
      <td>{ele.redirectUrl}</td>
      <td className="truncate aTag">
        <a
          href={`http://localhost:8080/api/url/${ele.shortUrl}`}
          target="_blank"
          className="aTag"
        >
          {ele.shortUrl}
        </a>
      </td>
      <td>{ele.totalClicks}</td>
      <td>{date}</td>
    </motion.tr>
  );
};

export default TableRows;
