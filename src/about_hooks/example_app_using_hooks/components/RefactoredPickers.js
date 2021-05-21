import React from "react";
import { useHttp } from "./custom_hook/useHttp";

export function RefactoredPickers(props) {
  let url = "https://swapi.dev/api/people";
  let [isLoading, fetchedData] = useHttp(url, []);
  console.log("fetched", fetchedData)

  let loadedCharacters = fetchedData
    ? fetchedData.results.slice(0,10).map((char, idx) => ({
        name: char.name,
        id: idx + 1,
      }))
    : [];

  let content = <h4>loading characters....</h4>;
  if (!isLoading && loadedCharacters && loadedCharacters.length > 0) {
    content = (
      <select onChange={props.selectHandler} value={props.character}>
        {loadedCharacters.map((char) => (
          <option key={char.id} value={char.id}>
            {char.name}
          </option>
        ))}
      </select>
    );
  } else if (
    !isLoading &&
    (!loadedCharacters || loadedCharacters.length === 0)
  ) {
    content = <h4>couldn't fetch any data</h4>;
  }
  return content;
}
