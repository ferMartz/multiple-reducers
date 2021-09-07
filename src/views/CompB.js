import React, { useContext } from "react";
import SiteContext from "../SiteContext";

function CompB() {
  const { state, dispatch } = useContext(SiteContext);
  console.log("reloading B");
  return (
    <>
      <div>The value of a is: {state.b}</div>
      <div>
        <button
          onClick={() => {
            dispatch({ type: "UPDATE_B", payload: state.b + 1 });
          }}
        >
          click me
        </button>
      </div>
    </>
  );
}

export default CompB;
