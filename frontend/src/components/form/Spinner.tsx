import React from "react";
import { CgSpinner } from "react-icons/cg";
import styles from "../styles/form.module.scss";
const Spinner = () => {
  return (
    <div className={styles.formSpinner}>
      <div className={styles.spinnerContainer}>
        <CgSpinner size={80} color={"#4AD645"} />
      </div>
    </div>
  );
};

export default Spinner;
