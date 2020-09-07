import React from "react";
import ReactDOM from "react-dom"; //curly braces to import a specified module  as opposed to whole module
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1 id="something-inportant">Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root")); //rendering the main component App to the root element of our html document
