import React from "react";

const Greet = (props) => {
  const { name: Name, heroName: hero } = props;
  return (
    <div>
      <h1>
        Hello {Name} his hero name is {hero}
      </h1>
      {props.children}
    </div>
  );
};

export default Greet;
