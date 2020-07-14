import React from "react";
import "./myStyles.css";

const heading = {
  fontSize: "72px",
  color: "blue",
};
export default function Inline() {
  return (
    <div>
      <h1 style={heading}>Inline styling</h1>
    </div>
  );
}
