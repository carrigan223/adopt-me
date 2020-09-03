// your code is going to go here

/*
  we our passing props from our parent App to the child Pet,
  we are destructuring those props and passing them down to be accesed 
  at our child level
*/

const Pet = ({ name, animal, breed}) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h3", {}, breed),
  ]);
};

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
    React.createElement(Pet, { name: "Nacho", animal: "Dog", breed: "Mutt" }),
    React.createElement(Pet, { name: "Hector", animal: "Dog", breed: "Bulldog" }),
    React.createElement(Pet, { name: "Sgt. Peppers", animal: "Cat", breed: "Mixed" }),
  ]);
};

//start back at video passing in props

ReactDOM.render(React.createElement(App), document.getElementById("root"));
