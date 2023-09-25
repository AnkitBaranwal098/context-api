import "./App.css";
import React, { createContext } from "react";
import CompoA from "./CompoA";

const fullName = createContext();


function App() {
  return (
    <fullName.Provider value={"Vinod Thappa"}>
      <div className="App">
        <CompoA />
      </div>
    </fullName.Provider>
  );
}

export default App;
export {fullName};
