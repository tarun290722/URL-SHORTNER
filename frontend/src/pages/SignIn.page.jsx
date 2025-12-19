// import { useEffect, useRef, useState } from "react";
// import Navbar from "../component/Navbar";
// import { Link } from "react-router-dom";
// export default function SigninPage() {
//   const [signInMessage, setSignInMessage] = useState("");

//   useEffect(() => {
//     setTimeout(() => {
//       setSignInMessage("");
//     }, 5000);
//   }, [signInMessage]);
//   const password = useRef(null);
//   const email = useRef(null);
//   const handleSignIn = async (e) => {
//     const passwordForm = password.current.value.trim();
//     const emailForm = email.current.value.trim();
//     e.preventDefault();
//     console.log(passwordForm, emailForm);

//     if (email && password && email != "" && password != "") {
//       const res = await fetch("http://localhost:8080/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email: emailForm,
//           password: passwordForm,
//         }),
//       });
//       const data = await res.json();
//       if (data.session) {
//         localStorage.setItem("token", JSON.stringify(data.session));
//         password.current.value = "";
//         email.current.value = "";
//       }
//       setSignInMessage(data.msg);
//     }
//   };
//   return (
//     <>
//       <Navbar />
//       <section className="page auth-page">
//         <div className="card auth-card">
//           <h1 className="page-title">Welcome back</h1>
//           <p className="page-subtitle">
//             Sign in to access your dashboard and links.
//           </p>

//           <form className="auth-form" onSubmit={handleSignIn}>
//             <label className="label">
//               Email
//               <input
//                 ref={email}
//                 className="input"
//                 type="email"
//                 placeholder="you@example.com"
//               />
//             </label>

//             <label className="label">
//               Password
//               <input
//                 className="input"
//                 type="password"
//                 placeholder="••••••••"
//                 ref={password}
//               />
//             </label>

//             <div className="auth-extra-row">
//               <label className="checkbox-label">
//                 <input type="checkbox" />
//                 <span>Remember me</span>
//               </label>

//               <a href="#" className="auth-link small">
//                 Forgot password?
//               </a>
//             </div>

//             <button className="btn btn-primary" type="submit">
//               Sign in
//             </button>
//             <button className="btn btn-primary" type="reset">
//               Reset
//             </button>
//           </form>
//           <p>{signInMessage}</p>
//           <p className="auth-footer">
//             New here?{" "}
//             <Link to="/signup" className="auth-link">
//               Create an account
//             </Link>
//           </p>
//         </div>
//       </section>
//     </>
//   );
// }

import { useEffect, useRef, useState } from "react";
import Navbar from "../component/Navbar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function SigninPage() {
  const [signInMessage, setSignInMessage] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setSignInMessage("");
    }, 5005);
  }, [signInMessage]);

  const password = useRef(null);
  const email = useRef(null);

  const handleSignIn = async (e) => {
    const passwordForm = password.current.value.trim();
    const emailForm = email.current.value.trim();
    e.preventDefault();

    if (emailForm !== "" && passwordForm !== "") {
      const res = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailForm,
          password: passwordForm,
        }),
      });

      const data = await res.json();
      if (data.session) {
        localStorage.setItem("token", JSON.stringify(data.session));
        password.current.value = "";
        email.current.value = "";
      }
      setSignInMessage(data.msg);
    }
  };

  return (
    <>
      <Navbar />
      <motion.section
        className="page auth-page"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <motion.div
          className="card auth-card"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.35 }}
        >
          <h1 className="page-title">Welcome back</h1>
          <p className="page-subtitle">
            Sign in to access your dashboard and links.
          </p>

          <motion.form
            className="auth-form"
            onSubmit={handleSignIn}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <label className="label">
              Email
              <input
                ref={email}
                className="input"
                type="email"
                placeholder="you@example.com"
              />
            </label>

            <label className="label">
              Password
              <input
                className="input"
                type="password"
                placeholder="••••••••"
                ref={password}
              />
            </label>

            <div className="auth-extra-row">
              <label className="checkbox-label">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>

              <a href="#" className="auth-link small">
                Forgot password?
              </a>
            </div>

            <motion.button
              className="btn btn-primary"
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign in
            </motion.button>

            <motion.button
              className="btn btn-primary"
              type="reset"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
            >
              Reset
            </motion.button>
          </motion.form>

          {signInMessage && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {signInMessage}
            </motion.p>
          )}

          <p className="auth-footer">
            New here?{" "}
            <Link to="/signup" className="auth-link">
              Create an account
            </Link>
          </p>
        </motion.div>
      </motion.section>
    </>
  );
}
