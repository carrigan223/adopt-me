import React, { useState } from "react";
import ThemeContext from "./ThemeContext";
import ReactDOM from "react-dom"; //curly braces to import a specified module  as opposed to whole module
import { Router, Link } from "@reach/router";
import SearchParams from "./SearchParams";
import Details from "./Details";


const App = () => {
  const themeHook = useState("teal");//changing the state of them hook at app level
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};
ReactDOM.render(<App />, document.getElementById("root")); //rendering the main component App to the root element of our html document
