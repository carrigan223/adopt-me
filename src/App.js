import React from "react";
import { render } from "react-dom"; //curly braces to import a specified module  as opposed to whole module
import  Pet  from "./Pet";

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
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Nacho",
      animal: "Dog",
      breed: "Mutt",
    }),
    React.createElement(Pet, {
      name: "Hector",
      animal: "Dog",
      breed: "Bulldog",
    }),
    React.createElement(Pet, {
      name: "Sgt. Peppers",
      animal: "Cat",
      breed: "Mixed",
    }),
  ]);
};

//start back at video passing in props

render(React.createElement(App), document.getElementById("root"));
