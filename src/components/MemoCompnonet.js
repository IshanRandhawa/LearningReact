import React from "react";

function MemoCompnonet({ name }) {
  console.log("rendering memo");
  return <div>{name}</div>;
}

export default React.memo(MemoCompnonet);
