import React from "react";
import { CgSpinner } from "react-icons/cg";
const Spinner = () => {
  return (
    <div className="form-spinner">
      <div className="spinner-container">
        <CgSpinner size={80} color={"#4AD645"} />
      </div>
    </div>
  );
};

export default Spinner;
