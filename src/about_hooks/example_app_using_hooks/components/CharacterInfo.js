import React, { useEffect, useState } from "react";
import { SummaryComponent } from "./SummaryComponent";

export function CharacterInfo(props) {
  let [loadedCharacter, setCharacter] = useState({});
  let [isLoading, setLoading] = useState(false);

  useEffect(() => FetchingData(), [props.character]);

  let FetchingData = () => {
    console.log("fetching: ", props.character);
    setLoading(true);
    // fetch("https://swpi.co/api/people/" + props.character)
    fetch("https://swapi.dev/api/people/" + props.character)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("could not fetch character");
        }
      })
      .then((data) => {
        console.log("data:", data);
        setCharacter({
          id: props.character,
          name: data.name,
          height: data.height,
          colors: {
            hair: data.hair_color,
            skin: data.skin_color,
          },
          gender: data.gender,
          movieCount: data.films.length,
        });
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    return () => console.log("too sooon....");
  }, []);

  let content = <h4>Loading About Character Info....</h4>;

  if (!isLoading && loadedCharacter.id) {
    content = (
      <SummaryComponent
        name={loadedCharacter.name}
        gender={loadedCharacter.gender}
        height={loadedCharacter.height}
        hairColor={loadedCharacter.colors.hair}
        skinColor={loadedCharacter.colors.skin}
        movieCount={loadedCharacter.movieCount}
      />
    );
  } else if (!isLoading && !loadedCharacter.id) {
    content = <h4>failed to fetch character</h4>;
  }
  return content;
}
