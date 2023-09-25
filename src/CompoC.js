import React from "react";
import { fullName } from "./App";

const CompoC = () => {
  return (
    <>
      <fullName.Consumer>
        {(fname) => {
          return <div>
            <h1>My name is {fname}!!!</h1>
          </div>;
        }}
      </fullName.Consumer>
    </>
  );
};

export default CompoC;
