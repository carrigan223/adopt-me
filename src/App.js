import React from "react";
import { render } from "react-dom"; //curly braces to import a specified module  as opposed to whole module
import SearchParams from "./SearchParams";

//A component in react is something that returns markup

/*
        React.createElement creates a instance of a class,
        here the App function is creating the instance of a class 
        creating a div element, if you pass it a string it will create a 
        DOM tag with that as the string in our case that is "div", the second parameter 
        would contain attributes we are passing to the tag or component such as id or 
        style, the third param is creating the child h1 of that div
        ReactDOM.render method is then called and it is calling that instance of App
        which we created and pushing it to the root of our html document
      
      */
const App = () => {
  //   return React.createElement("div", {}, [
  //     React.createElement("h1", {}, "Adopt Me!"),
  //     React.createElement(Pet, {
  //       name: "Nacho",
  //       animal: "Dog",
  //       breed: "Mutt",
  //     }),
  //     React.createElement(Pet, {
  //       name: "Hector",
  //       animal: "Dog",
  //       breed: "Bulldog",
  //     }),
  //     React.createElement(Pet, {
  //       name: "Sgt. Peppers",
  //       animal: "Cat",
  //       breed: "Mixed",
  //     }),
  //   ]);
  // };
  //the above code is the pure JS of the JSX below

  return (
    <div>
      <h1 id="something-inportant">Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};
render(<App />, document.getElementById("root"));//rendering the main component App to the root element of our html document
