// import { useEffect, useRef, useState } from "react";
// import Navbar from "../component/Navbar";
// import { Link } from "react-router-dom";
// export default function SignupPage() {
//   const [signUpMessage, setSignUpMessage] = useState("");
//   useEffect(() => {
//     setTimeout(() => {
//       setSignUpMessage("");
//     }, 5000);
//   }, [signUpMessage]);
//   const name = useRef(null);
//   const email = useRef(null);
//   const password = useRef(null);
//   const confirmPassword = useRef(null);
//   async function handleSubmitSignUp(e) {
//     const nameForm = name.current.value.trim();
//     const passwordForm = password.current.value.trim();
//     const confirmPasswordForm = confirmPassword.current.value.trim();
//     const emailForm = email.current.value.trim();
//     e.preventDefault();
//     console.log(nameForm, passwordForm, confirmPassword, emailForm);

//     if (
//       (nameForm &&
//         email &&
//         password &&
//         confirmPassword &&
//         nameForm != "" &&
//         passwordForm != "",
//       confirmPassword != "" && emailForm != "")
//     ) {
//       if (
//         nameForm.length > 3 &&
//         emailForm.includes("@") &&
//         passwordForm.length >= 5 &&
//         passwordForm == confirmPasswordForm
//       ) {
//         const res = await fetch("http://localhost:8080/auth/signup", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             name: nameForm,
//             email: emailForm,
//             password: passwordForm,
//           }),
//         });
//         const data = await res.json();
//         setSignUpMessage(data.msg);
//         name.current.value = "";
//         password.current.value = "";
//         email.current.value = "";
//         confirmPassword.current.value = "";
//       }
//     }
//   }
//   return (
//     <>
//       <Navbar />
//       <section className="page auth-page">
//         <div className="card auth-card">
//           <h1 className="page-title">Create an account</h1>
//           <p className="page-subtitle">
//             Sign up to save and manage all your shortened links.
//           </p>

//           <form className="auth-form" onSubmit={handleSubmitSignUp}>
//             <label className="label">
//               Name
//               <input
//                 className="input"
//                 type="text"
//                 placeholder="Your name"
//                 name="name"
//                 ref={name}
//               />
//             </label>

//             <label className="label">
//               Email
//               <input
//                 className="input"
//                 type="email"
//                 name="email"
//                 placeholder="you@example.com"
//                 ref={email}
//               />
//             </label>

//             <label className="label">
//               Password
//               <input
//                 className="input"
//                 type="password"
//                 placeholder="••••••••"
//                 name="password"
//                 ref={password}
//               />
//             </label>

//             <label className="label">
//               Confirm password
//               <input
//                 className="input"
//                 type="password"
//                 placeholder="••••••••"
//                 ref={confirmPassword}
//               />
//             </label>

//             <button className="btn btn-primary" type="submit">
//               Sign up
//             </button>
//             <button className="btn btn-primary" type="reset">
//               Reset
//             </button>
//           </form>
//           <p>{signUpMessage}</p>
//           <p className="auth-footer">
//             Already have an account?{" "}
//             <Link to="/signin" className="auth-link">
//               Sign in
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

export default function SignupPage() {
  const [signUpMessage, setSignUpMessage] = useState("");

  useEffect(() => {
    if (!signUpMessage) return;
    const timer = setTimeout(() => {
      setSignUpMessage("");
    }, 5000);

    return () => clearTimeout(timer);
  }, [signUpMessage]);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);

  async function handleSubmitSignUp(e) {
    e.preventDefault();

    const nameForm = name.current.value.trim();
    const passwordForm = password.current.value.trim();
    const confirmPasswordForm = confirmPassword.current.value.trim();
    const emailForm = email.current.value.trim();

    console.log(nameForm, passwordForm, confirmPasswordForm, emailForm);

    // fixed validation to actually use the values
    if (
      nameForm &&
      emailForm &&
      passwordForm &&
      confirmPasswordForm &&
      nameForm !== "" &&
      emailForm !== "" &&
      passwordForm !== "" &&
      confirmPasswordForm !== ""
    ) {
      if (
        nameForm.length > 3 &&
        emailForm.includes("@") &&
        passwordForm.length >= 5 &&
        passwordForm === confirmPasswordForm
      ) {
        const res = await fetch("http://localhost:8080/auth/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: nameForm,
            email: emailForm,
            password: passwordForm,
          }),
        });

        const data = await res.json();
        setSignUpMessage(data.msg);
        name.current.value = "";
        password.current.value = "";
        email.current.value = "";
        confirmPassword.current.value = "";
      } else {
        setSignUpMessage("Please check your details and try again.");
      }
    } else {
      setSignUpMessage("All fields are required.");
    }
  }

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
          <h1 className="page-title">Create an account</h1>
          <p className="page-subtitle">
            Sign up to save and manage all your shortened links.
          </p>

          <motion.form
            className="auth-form"
            onSubmit={handleSubmitSignUp}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <label className="label">
              Name
              <input
                className="input"
                type="text"
                placeholder="Your name"
                name="name"
                ref={name}
              />
            </label>

            <label className="label">
              Email
              <input
                className="input"
                type="email"
                name="email"
                placeholder="you@example.com"
                ref={email}
              />
            </label>

            <label className="label">
              Password
              <input
                className="input"
                type="password"
                placeholder="••••••••"
                name="password"
                ref={password}
              />
            </label>

            <label className="label">
              Confirm password
              <input
                className="input"
                type="password"
                placeholder="••••••••"
                ref={confirmPassword}
              />
            </label>

            <motion.button
              className="btn btn-primary"
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign up
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

          {signUpMessage && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {signUpMessage}
            </motion.p>
          )}

          <p className="auth-footer">
            Already have an account?{" "}
            <Link to="/signin" className="auth-link">
              Sign in
            </Link>
          </p>
        </motion.div>
      </motion.section>
    </>
  );
}
