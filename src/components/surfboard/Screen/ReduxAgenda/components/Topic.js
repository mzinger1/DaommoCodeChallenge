import React from "react";

function Topic(props) {
  return (
      <div>
        <h6>Description: </h6>{props.location.state.text}
        <h6>Time: </h6>{props.location.state.time}
      </div>
  );
}
export default Topic;