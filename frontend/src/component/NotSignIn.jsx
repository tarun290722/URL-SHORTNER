// import { Link } from "react-router-dom";

// export default function NotSignedIn() {
//   return (
//     <div className="not-signed-container">
//       <div className="not-signed-card">
//         <h2 className="not-signed-title">You're not signed in</h2>
//         <p className="not-signed-text">
//           Sign in to access your dashboard and manage your shortened links.
//         </p>

//         <div className="not-signed-actions">
//           <Link to="/signin" className="btn btn-primary">
//             Sign In
//           </Link>
//           <Link to="/signup" className="btn btn-secondary">
//             Create Account
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotSignedIn() {
  return (
    <motion.div
      className="not-signed-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        className="not-signed-card"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2 className="not-signed-title">You're not signed in</h2>

        <p className="not-signed-text">
          Sign in to access your dashboard and manage your shortened links.
        </p>

        <div className="not-signed-actions">
          <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
            <Link to="/signin" className="btn btn-primary">
              Sign In
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
            <Link to="/signup" className="btn btn-secondary">
              Create Account
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
