import React, { Fragment } from "react";

function Columns() {
  const items = [
    {
      id: 4,
      title: "ishan4",
      age: 24,
      skill: "react4",
    },
    {
      id: 1,
      title: "ishan",
      age: 22,
      skill: "react",
    },
    {
      id: 2,
      title: "ishan2",
      age: 23,
      skill: "react2",
    },
    {
      id: 3,
      title: "ishan3",
      age: 24,
      skill: "react3",
    },
  ];

  let itemlist = items.map((item) => (
    <Fragment key={item.id}>
      <h1>Title</h1>
      <p>{item.title}</p>
    </Fragment>
  ));
  return <>{itemlist}</>;
}

export default Columns;
