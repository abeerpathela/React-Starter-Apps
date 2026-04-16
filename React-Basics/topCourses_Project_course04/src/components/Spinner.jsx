import React from "react";
import "./Spinner.css";
import loadingImage from "./loading.png";
function Spinner() {
  return (
    <div className="main-spinner">
      <div>
        <div class="spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Spinner;
