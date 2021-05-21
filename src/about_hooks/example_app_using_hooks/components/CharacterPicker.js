import React, { useEffect, useState } from "react";

export function CharacterPicker(props) {
  let [isLoading, setLoading] = useState(false);
  let [loadingCharacters, setCharacters] = useState([]);

  useEffect(() => fetchedData(), []);

  let fetchedData = () => {
    setLoading(true);
    // fetch("https://swpi.co/api/people")
    fetch("https://swapi.dev/api/people")
      .then((res) => {
        // console.log("response!!")
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("failed to fetch data");
        }
      })
      .then((data) => {
        let selectedCharacters = data.results.slice(0, 10);
        // setLoading(false);
        console.log("data:", data);
        setCharacters(
          selectedCharacters.map((char, idx) => ({
            name: char.name,
            id: idx + 1,
          }))
        );
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  // useEffect(() => fetchedData, []);
  let content = <h4>loading characters....</h4>;
  if (!isLoading && loadingCharacters && loadingCharacters.length > 0) {
    content = (
      <select onChange={props.selectHandler} value={props.character}>
        {loadingCharacters.map((char) => (
          <option key={char.id} value={char.id}>
            {char.name}
          </option>
        ))}
      </select>
    );
  } else if (
    !isLoading &&
    (!loadingCharacters || loadingCharacters.length === 0)
  ) {
    content = <h4>couldn't fetch any data</h4>;
  }
  return content;
}
