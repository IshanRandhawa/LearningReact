import React from "react";

// this allows us to directly refer the native element from the ref defined in the parent compnonent.
const FRInput = React.forwardRef((props, ref) => {
  return (
    <div>
      <input type="text" ref={ref}></input>
    </div>
  );
});

export default FRInput;
