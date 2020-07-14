import React from "react";
import "./myStyles.css";
function Stylesheet(props) {
  const { primary } = props;
  let message = primary ? "primary" : "";
  return (
    <div>
      <h1 className={`${message} font-xl`}>Stylesheet</h1>
    </div>
  );
}

export default Stylesheet;
