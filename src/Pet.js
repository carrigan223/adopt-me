import React from "react";
//above are our import statements
/*
  Below on line 8 we our passing props from our parent App to the child Pet,
  we are destructuring those props and passing them down to be accesed
  at our child level
*/
export default function Pet({ name, animal, breed }) {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h3", {}, breed),
  ]);
};
