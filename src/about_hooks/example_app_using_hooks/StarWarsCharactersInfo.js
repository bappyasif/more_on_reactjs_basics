import React, { useState } from "react";
import { CharacterPicker } from "./components/CharacterPicker";
import { CharacterInfo } from "./components/CharacterInfo";
import { RefactoredPickers } from "./components/RefactoredPickers";
import { RefactoredInfo } from "./components/RefactoredInfo";

export function StarWarsCharactersInfo() {
  let [destroyed, setDestroyed] = useState(false);
  let [selectedCharacter, setCharacter] = useState(1);
  let [chosenSide, setSide] = useState("light");
  let sideHandler = (side) => setSide(side);
  let characterHandler = (evt) => setCharacter(evt.target.value);
  let destructHandler = () => setDestroyed(true);

  let content = (
    <div style={{border: "solid"}}>
      <div style={{ border: "dotted" }}>
        <CharacterPicker
          side={chosenSide}
          character={selectedCharacter}
          selectHandler={characterHandler}
        />
        <CharacterInfo character={selectedCharacter} />
        <button onClick={sideHandler.bind(this, "dark")}>Dark Side</button>
        <button onClick={sideHandler.bind(this, "light")}>Light Side</button>
        <button onClick={destructHandler}>Destroy</button>
      </div>
      {/* <div style={{ border: "dashed" }}>
        <RefactoredPickers
          side={chosenSide2}
          character={selectedCharacter2}
          selectHandler={characterHandler2}
        />
        <RefactoredInfo character={selectedCharacter2} />
        <button onClick={sideHandler2.bind(this, "dark")}>Dark Side</button>
        <button onClick={sideHandler2.bind(this, "light")}>Light Side</button>
        <button onClick={destructHandler2}>Destroy</button>
      </div> */}
    </div>
  );
  if (destroyed) content = <h4>total annhilation!!</h4>;
  return (
    <div>
      <p>starwars character info app</p>
      {content}
    </div>
  );
}
