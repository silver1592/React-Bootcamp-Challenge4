import React, { useState, useEffect } from "react";
import pokemons from "./pokemons";

export default function PokeNameValidator() {
  /**
   * Component logic goes here
   */
  const [selectedPokemon, setSelectedPokemon] = useState(pokemons[0]);

  function RandomPokemon(currentPokemon) {
    let nextPokemon = {};
    do {
      let randomNumber = Math.floor(Math.random() * pokemons.length);
      nextPokemon = pokemons[randomNumber];
      console.log(nextPokemon);
    } while (nextPokemon === currentPokemon);

    return nextPokemon;
  }

  return (
    <div className="app">
      <h2>Mini Challenge 4: Poke Name Validator</h2>
      <p>
        Pokémon name:&nbsp;
        <strong>{selectedPokemon}</strong>
      </p>
      <p className="secondary">Type the Pokémon name correctly:</p>
      <input type="text" placeholder="Enter the Pokémon name" />
    </div>
  );
}
