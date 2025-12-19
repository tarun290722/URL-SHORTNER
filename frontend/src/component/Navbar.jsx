// import { Link, NavLink } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <header className="nav">
//       <div className="nav-inner">
//         <Link to="/" className="nav-brand">
//           Shortly
//         </Link>

//         <nav className="nav-links">
//           <Link to="/" className="nav-link">
//             Shorten
//           </Link>
//           <Link to="/links" className="nav-link">
//             My Links
//           </Link>
//         </nav>

//         <div className="nav-auth">
//           <Link to="/signin" className="nav-btn nav-btn-outline">
//             Sign in
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header
      className="nav"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="nav-inner">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15 }}
        >
          <Link to="/" className="nav-brand">
            Shortly
          </Link>
        </motion.div>

        {/* Nav links */}
        <motion.nav
          className="nav-links"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
        >
          <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.96 }}>
            <Link to="/" className="nav-link">
              Shorten
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.96 }}>
            <Link to="/links" className="nav-link">
              My Links
            </Link>
          </motion.div>
        </motion.nav>

        {/* Auth button */}
        <motion.div
          className="nav-auth"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35 }}
        >
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link to="/signin" className="nav-btn nav-btn-outline">
              Sign in
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.header>
  );
}
