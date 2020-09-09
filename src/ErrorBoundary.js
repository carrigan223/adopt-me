import React, { Component } from "react";
import { Link } from "@reach/router";

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught and error", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <h1>
          There was an error with this listing. <Link to="/">Click Here</Link>
           to go back to the home page.
        </h1>
      );
    }

    return this.props.children;
  }
}
export default ErrorBoundary;

//remember error boundarys need to be a level above they will only catch for children