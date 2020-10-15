import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";
import styles from "./LogIn.module.css";

const LogIn = () => {
  const { loginWithRedirect } = useAuth0();

  useEffect(() => {
    loginWithRedirect();
  }, []);
  return (
    <div className={styles.Login}>
      <h1 className={styles.mainTitle}>Baraka Flowers</h1>
    </div>
  );
};

export default LogIn;
