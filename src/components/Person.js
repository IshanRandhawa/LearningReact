import React from "react";

export default function Person(props) {
  const { name, age, skill } = props.person;
  return (
    <div>
      {" "}
      <h2>
        I am {name}. I am {age}, I know {skill}
      </h2>
    </div>
  );
}
