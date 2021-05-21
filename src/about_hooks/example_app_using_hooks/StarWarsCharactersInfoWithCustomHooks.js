import React, { useState } from "react";
import { RefactoredPickers } from "./components/RefactoredPickers";
import { RefactoredInfo } from "./components/RefactoredInfo";

export function StarWarsCharactersInfoWithCustomHooks() {
  let [destroyed, setDestroyed] = useState(false);
  let [selectedCharacter, setCharacter] = useState(1);
  let [chosenSide, setSide] = useState("light");
  let sideHandler = (side) => setSide(side);
  let characterHandler = (evt) => setCharacter(evt.target.value);
  let destructHandler = () => setDestroyed(true);

  let content2 = (
    <div style={{border: "solid"}}>
      <div style={{ border: "dotted" }}>
        <RefactoredPickers
          side={chosenSide}
          character={selectedCharacter}
          selectHandler={characterHandler}
        />
        <RefactoredInfo character={selectedCharacter} />
        <button onClick={sideHandler.bind(this, "dark")}>Dark Side</button>
        <button onClick={sideHandler.bind(this, "light")}>Light Side</button>
        <button onClick={destructHandler}>Destroy</button>
      </div>
    </div>
  );
  if (destroyed) content = <h4>total annhilation!!</h4>;
  return (
    <div>
      <p>starwars character info app</p>
      {content2}
    </div>
  );
}
