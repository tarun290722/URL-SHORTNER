// import { useState } from "react";
// import Navbar from "../component/Navbar";
// import NotSignedIn from "../component/NotSignIn";
// import { useEffect } from "react";
// import TableRows from "../component/tableRows";
// export default function LinksListPage() {
//   const [myUrls, setMyUrls] = useState([]);
//   const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")));
//   const handleLoad = async () => {
//     const res = await fetch("http://localhost:8080/api/url", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         auth: `Bearer ${token}`,
//       },
//     });
//     const data = await res.json();
//     console.log(data.data);

//     setMyUrls(data.data);
//     //  setMyUrls([data])
//   };
//   const resFromUseEffect = useEffect(() => {
//     handleLoad();
//   }, []);
//   // console.log(resFromUseEffect);

//   return (
//     <>
//       <Navbar />
//       {token && token != undefined ? (
//         <section className="page links-page">
//           <div className="page-header">
//             <h1 className="page-title">My shortened links</h1>
//             <p className="page-subtitle">
//               View and manage all the URLs you’ve shortened.
//             </p>
//           </div>

//           <div className="card links-card">
//             <div className="links-header">
//               <div className="links-search">
//                 <input
//                   className="input"
//                   type="text"
//                   placeholder="Search links..."
//                 />
//               </div>

//               <div className="links-filters">
//                 <select className="select">
//                   <option>Sort by latest</option>
//                   <option>Sort by oldest</option>
//                   <option>Most clicked</option>
//                 </select>
//               </div>
//             </div>

//             <div className="links-table-wrapper">
//               <table className="links-table">
//                 <thead>
//                   <tr>
//                     <th>Short URL</th>
//                     <th>Original URL</th>
//                     <th>Clicks</th>
//                     <th>Created</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {/* Static rows as structure */}
//                   {myUrls.map((ele, i) => {
//                     return <TableRows ele={ele} key={i}></TableRows>;
//                   })}
//                   {/* more rows later from data */}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </section>
//       ) : (
//         <NotSignedIn />
//       )}
//     </>
//   );
// }
import { useState, useEffect } from "react";
import Navbar from "../component/Navbar";
import NotSignedIn from "../component/NotSignIn";
import TableRows from "../component/tableRows";
import { motion } from "framer-motion";

export default function LinksListPage() {
  const [myUrls, setMyUrls] = useState([]);
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")));

  const handleLoad = async () => {
    const res = await fetch("http://localhost:8080/api/url", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        auth: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    console.log(data.data);
    setMyUrls(data.data);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <>
      <Navbar />
      {token && token != undefined ? (
        <motion.section
          className="page links-page"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <motion.div
            className="page-header"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <h1 className="page-title">My shortened links</h1>
            <p className="page-subtitle">
              View and manage all the URLs you’ve shortened.
            </p>
          </motion.div>

          <motion.div
            className="card links-card"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.35 }}
          >
            <div className="links-header">
              <div className="links-search">
                <input
                  className="input"
                  type="text"
                  placeholder="Search links..."
                />
              </div>

              <div className="links-filters">
                <select className="select">
                  <option>Sort by latest</option>
                  <option>Sort by oldest</option>
                  <option>Most clicked</option>
                </select>
              </div>
            </div>

            <motion.div
              className="links-table-wrapper"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <table className="links-table">
                <thead>
                  <tr>
                    <th>Short URL</th>
                    <th>Original URL</th>
                    <th>Clicks</th>
                    <th>Created</th>
                  </tr>
                </thead>
                <tbody>
                  {myUrls.map((ele, i) => {
                    return <TableRows ele={ele} key={i} />;
                  })}
                </tbody>
              </table>
            </motion.div>
          </motion.div>
        </motion.section>
      ) : (
        <NotSignedIn />
      )}
    </>
  );
}
