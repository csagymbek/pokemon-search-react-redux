import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { loadPokemon } from "../reducers/pokemon";

export const Pokemon = () => {
  const { pokemonName } = useParams();
  const pokemon = useSelector((state) => state.pokemon.pokemon);
  console.log(pokemon);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!pokemon) {
      dispatch(loadPokemon(pokemonName));
    }
  }, [dispatch, pokemon, pokemonName]);

  return (
    <>
      {pokemon && (
        <div>
          <h1>{pokemonName}</h1>
          <img src={pokemon?.sprites.front_default} alt={pokemonName} />
        </div>
      )}
    </>
  );
};
