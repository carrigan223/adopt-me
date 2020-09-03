import React from "react"; //anywhere you use jsx you must have react in scope

//above are our import statements
/*
  Below on line 8 we our passing props from our parent App to the child Pet,
  we are destructuring those props and passing them down to be accesed
  at our child level
*/
export default function Pet({ name, animal, breed }) {
  //   return React.createElement("div", {}, [
  //     React.createElement("h1", {}, name),
  //     React.createElement("h2", {}, animal),
  //     React.createElement("h3", {}, breed),
  //   ]);
  // };
  //everything compiles to the above code from the jsx syntactic sugar
  //in the below code
  return (
    <div>
      <h1>{name}</h1>
      <h2>{animal}</h2>
      <h3>{breed}</h3>
    </div>
  );
}
