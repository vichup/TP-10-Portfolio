import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
function Pre(props) {
  return <div id={props.load ? "preloader" : "preloader-none"}></div>;
}

export default Pre;

Pre.propTypes = {

  load:propTypes.string

}