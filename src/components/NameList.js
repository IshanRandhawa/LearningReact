import React from "react";
import Person from "./Person";

export default function NameList() {
  //   const names = [
  //     {
  //       id: 4,
  //       name: "ishan4",
  //       age: 24,
  //       skill: "react4",
  //     },
  //     {
  //       id: 1,
  //       name: "ishan",
  //       age: 22,
  //       skill: "react",
  //     },
  //     {
  //       id: 2,
  //       name: "ishan2",
  //       age: 23,
  //       skill: "react2",
  //     },
  //     {
  //       id: 3,
  //       name: "ishan3",
  //       age: 24,
  //       skill: "react3",
  //     },
  //   ];
  const names = ["Bruce", "diana", "clark", "clark", "Bruce"];
  const namelists = names.map((name, index) => (
    <h2 key={index}>
      {index}
      {name}
    </h2>
  ));
  return <div>{namelists}</div>;
}
