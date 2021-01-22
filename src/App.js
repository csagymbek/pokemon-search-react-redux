import { useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { NotFound } from "./components/NotFound";
import { Pokemon } from "./components/Pokemon";
import { Welcome } from "./components/Welcome";
import { loadPokemon } from "./reducers/pokemon";

function App() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="pokedex">
        <Switch>
          <Route path="/not-found" exact component={NotFound} />
          <Route path="/pokemon/:pokemonName" exact component={Pokemon} />
          <Route component={Welcome} />
        </Switch>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(loadPokemon(name));
          }}
        >
          <div className="ui action input app__inputDiv">
            <input
              type="text"
              placeholder="Enter here..."
              onChange={(e) => setName(e.currentTarget.value)}
              value={name}
            />
            <button className="ui button" type="submit">
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
