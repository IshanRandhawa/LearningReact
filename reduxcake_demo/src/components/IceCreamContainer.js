import React from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../redux/IceCream/iceCreamActions";
import { increaseIceCream } from "../redux/IceCream/iceCreamActions";

function IceCreamContainer(props) {
  return (
    <div>
      <h2>Number of IceCream {props.numOfIceCreams}</h2>
      <button onClick={props.buyIceCream}>Buy IceCream</button>
      <button onClick={props.increaseIceCream}>Increase IceCream</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
    increaseIceCream: () => dispatch(increaseIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
