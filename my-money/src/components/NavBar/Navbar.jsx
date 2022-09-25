import React from 'react';
import styles from "./NavBar.module.css"
import {Link} from "react-router-dom";
import {useLogout} from "../../hooks/useLogout";
import {useAuthContext} from "../../hooks/useAuthContext";

const Navbar = () => {
  const {logout} = useLogout()
  const {user} = useAuthContext()
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}><Link to="/">Dylan's Money</Link></li>
        {!user && (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
          </>
        )}
        {user && (
          <>
            <li>Hello, {user.displayName}</li>
            <li>
              <button className="btn" onClick={logout}>Logout</button>
            </li>
          </>
        )}

      </ul>
    </nav>
  );
};

export default Navbar;
