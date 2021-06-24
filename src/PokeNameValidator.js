import React, { useState, useRef } from "react";
import pokemons from "./pokemons";

export default function PokeNameValidator() {
  /**
   * Component logic goes here
   */
  const [selectedPokemon, setSelectedPokemon] = useState(RandomPokemon());
  const inputPokeValidatorRef = useRef();

  function RandomPokemon() {
    let randomNumber = Math.floor(Math.random() * pokemons.length);
    return pokemons[randomNumber];
  }

  function OnChange() {
    let input = inputPokeValidatorRef.current.value;

    if (selectedPokemon === input) {
      alert("Correct! Play again?");
      setSelectedPokemon(RandomPokemon);
      inputPokeValidatorRef.current.value = null;
    }
  }

  return (
    <div className="app">
      <h2>Mini Challenge 4: Poke Name Validator</h2>
      <p>
        Pokémon name:&nbsp;
        <strong>{selectedPokemon}</strong>
      </p>
      <p className="secondary">Type the Pokémon name correctly:</p>
      <input
        ref={inputPokeValidatorRef}
        type="text"
        onKeyUp={OnChange}
        placeholder="Enter the Pokémon name"
      />
    </div>
  );
}
