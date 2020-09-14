import React from "react";
import ThemeContext from "./ThemeContext";
import pet from "@frontendmasters/pet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";

class Details extends React.Component {
  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       loading: true
  //     };
  //   }

  /* 
  
    componentdidupdate is very similar to useeffect, it gets run every
    time props or state changes. getderived state from error is called and
    returns true which leads to component did update being called. 
  
  */

  state = { loading: true };
  componentDidMount() {
    //throw new Error('lol'); //uncomment this line to test
    pet.animal(this.props.id).then(({ animal }) => {
      this.setState({
        name: animal.name,
        animal: animal.type,
        location: `${animal.contact.address.city},
                     ${animal.contact.address.state}`,
        description: animal.description,
        media: animal.photos,
        breed: animal.breeds.primary,
        loading: false
      });
    }, console.error);
  }

  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>;
    }

    const { animal, breed, location, description, name, media } = this.state;

    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2> {`${animal} - ${breed} - ${location}`} </h2>
          <ThemeContext.Consumer>
            {([theme]) => (
              <button
                style={{ backgroundColor: theme }}
                onClick={this.toggleModal}
              >
                Adopt {name}
              </button>
            )}
          </ThemeContext.Consumer>
          ;<p>{description}</p>
        </div>
      </div>
    );
  }
}

export default function DetailsWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
      {/*spreading the props to pass them to details
        after passing through ErrorBoundary, dont use this method of passing props 
        often
        */}
    </ErrorBoundary>
  );
}
