// import { useState } from "react";
// import Navbar from "../component/Navbar";
// import NotSignedIn from "../component/NotSignIn";
// import { useRef } from "react";
// export default function ShortenerPage() {
//   const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")));

//   const long_url = useRef(null);
//   const customAlias = useRef(null);
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const url = long_url.current.value;
//     const res = await fetch("http://localhost:8080/api/url", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         auth: `Bearer ${token}`,
//       },
//       body: JSON.stringify({
//         url,
//       }),
//     });
//     const data = await res.json();
//     console.log(data);
//   };
//   return (
//     <>
//       <Navbar />
//       {token && token != undefined ? (
//         <section className="page shortener-page">
//           <div className="page-header">
//             <h1 className="page-title">Shorten your link</h1>
//             <p className="page-subtitle">
//               Paste a long URL and generate a short one in seconds.
//             </p>
//           </div>

//           <div className="card shortener-card">
//             <form className="shortener-form" onSubmit={(e) => handleSubmit(e)}>
//               <div className="form-group">
//                 <label className="label">
//                   Long URL
//                   <input
//                     ref={long_url}
//                     className="input"
//                     type="url"
//                     placeholder="https://example.com/very/long/link..."
//                   />
//                 </label>
//               </div>

//               <div className="form-row">
//                 <label className="label">
//                   Custom alias (optional)
//                   <input
//                     ref={customAlias}
//                     className="input"
//                     type="text"
//                     placeholder="my-custom-alias"
//                   />
//                 </label>

//                 <button className="btn btn-primary" type="submit">
//                   Shorten
//                 </button>
//               </div>
//             </form>

//             <div className="short-result">
//               <div className="short-result-label">Short URL:</div>
//               <div className="short-result-value">
//                 {/* placeholder text */}
//                 your-short-url-will-appear-here
//               </div>
//               <button className="btn btn-secondary" type="button">
//                 Copy
//               </button>
//             </div>
//           </div>
//         </section>
//       ) : (
//         <NotSignedIn />
//       )}
//     </>
//   );
// }

import { useState, useRef } from "react";
import Navbar from "../component/Navbar";
import NotSignedIn from "../component/NotSignIn";
import { motion } from "framer-motion";

export default function ShortenerPage() {
  const [recUrl, setRecUrl] = useState("");
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")));

  const long_url = useRef(null);
  const customAlias = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = long_url.current.value;
    const res = await fetch("http://localhost:8080/api/url", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        auth: `Bearer ${token}`,
      },
      body: JSON.stringify({
        url,
        // alias: customAlias.current.value,  // use this if your backend supports it
      }),
    });
    const data = await res.json();
    // console.log(data);
    console.log(data);
    setRecUrl(`http://localhost:8080/api/url/${data.url}`);
  };

  return (
    <>
      <Navbar />
      {token && token != undefined ? (
        <motion.section
          className="page shortener-page"
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
            <h1 className="page-title">Shorten your link</h1>
            <p className="page-subtitle">
              Paste a long URL and generate a short one in seconds.
            </p>
          </motion.div>

          <motion.div
            className="card shortener-card"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.35 }}
          >
            <motion.form
              className="shortener-form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              <div className="form-group">
                <label className="label">
                  Long URL
                  <input
                    ref={long_url}
                    className="input"
                    type="url"
                    placeholder="https://example.com/very/long/link..."
                  />
                </label>
              </div>

              <div className="form-row">
                <label className="label">
                  Custom alias (optional)
                  <input
                    ref={customAlias}
                    className="input"
                    type="text"
                    placeholder="my-custom-alias"
                  />
                </label>

                <motion.button
                  className="btn btn-primary"
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Shorten
                </motion.button>
              </div>
            </motion.form>

            <motion.div
              className="short-result"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              <div className="short-result-label">Short URL:</div>
              <div className="short-result-value">
                {/* placeholder text */}
                {recUrl}
              </div>
              <motion.button
                className="btn btn-secondary"
                type="button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
              >
                Copy
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.section>
      ) : (
        <NotSignedIn />
      )}
    </>
  );
}
