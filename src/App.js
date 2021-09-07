import React, { useContext, useReducer } from "react";
import Reducer from "./Reducer";
import SiteContext from "./SiteContext";
import Home from "./views/Home";

function App() {
  const initialState = useContext(SiteContext);
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <>
      <SiteContext.Provider value={{ state, dispatch }}>
        <Home />
      </SiteContext.Provider>
    </>
  );
}

export default App;
