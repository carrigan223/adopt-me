import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";
import useDropdown from './useDropdown'

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown] = useDropdown("Breed", "", breeds);


  /* 
    location is the current state while setLocation is an updater for the state
    so every time an event happens in my input it us updating state 
    with the value entered in our event target, this is a hook, all hooks begin with use
    in our case useState. useState will always take in an array of the first index being the 
    current state and the second index being a function that updates that state. HOOKS NEVER GO INSIDE IF STATEMENTS
    OR FOR LOOPS OR ANY CONDITIONAL LOGIC.


    we are also useing custom hooks for the animal and breed, we created a useDropdown hook which
    we are importing from useDropdown.js. this is allowing us to pass the nessecary information to 
    a generic dropdown component which we can then quickly and convenietly re-render
    */

  return (
    <div className="search-params">
      <h1>{location}</h1>
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
