import React from "react";

export default function ChildComponent(props) {
  const { greetHandler: greet } = props;
  return (
    <div>
      <button onClick={() => greet("ishan")}>Greet Parent</button>
    </div>
  );
}
