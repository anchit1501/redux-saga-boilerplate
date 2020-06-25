import React from "react";
import { connect } from "react-redux";

let NewsItem = ({ data }) => (data ? <p>{data.user}</p> : null);

const mapStateToProps = (state) => ({
  data: state.userData,
});
NewsItem = connect(mapStateToProps, null)(NewsItem);
export default NewsItem;
