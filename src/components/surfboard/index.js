import React from "react";
import {Route} from "react-router-dom";
import Practice from "./Screen";

const Surfboard = () => {
  return(
      <div>
        <Route path={["/surfboard", "/surfboard/agenda"]} exact={true}>
          <Practice/>
        </Route>
      </div>
  )
}
export default Surfboard;