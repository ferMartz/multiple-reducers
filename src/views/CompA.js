import React, { useContext } from "react";
import SiteContext from "../SiteContext";

function CompA() {
  const { state, dispatch } = useContext(SiteContext);
  console.log("reloading A");
  return (
    <>
      <div>The value of a is: {state.a}</div>
      <div>
        <button
          onClick={() => {
            dispatch({ type: "UPDATE_A", payload: state.a + 1 });
          }}
        >
          click me
        </button>
      </div>
    </>
  );
}

export default CompA;
