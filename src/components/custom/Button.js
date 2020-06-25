import React from "react";
import { connect } from "react-redux";
import { userLogin } from "../../redux/action";

let Button = ({ userLogin }) => (
  <button onClick={userLogin}>Press to see Data</button>
);
const mapDispatchToProps = {
  userLogin: userLogin,
};
Button = connect(null, mapDispatchToProps)(Button);
export default Button;
