import React, { useEffect } from "react";
import { useHttp } from "./custom_hook/useHttp";
import { SummaryComponent } from "./SummaryComponent";

export function RefactoredInfo(props) {
  let url = "https://swapi.dev/api/people/" + props.character;
  let [isLoading, fetchedData] = useHttp(url, [props.character]);

  let selectedCharacter = null;
  if (fetchedData) {
    selectedCharacter = {
      id: props.character,
      name: fetchedData.name,
      height: fetchedData.height,
      colors: {
        hair: fetchedData.hair_color,
        skin: fetchedData.skin_color,
      },
      gender: fetchedData.gender,
      movieCount: fetchedData.films.length,
    };
  }

  useEffect(() => {
    return () => console.log("too sooon component unmounted....");
  }, []);

  let content = <h4>Loading About Character Info....</h4>;

  if (!isLoading && selectedCharacter) {
    content = (
      <SummaryComponent
        name={selectedCharacter.name}
        gender={selectedCharacter.gender}
        height={selectedCharacter.height}
        hairColor={selectedCharacter.colors.hair}
        skinColor={selectedCharacter.colors.skin}
        movieCount={selectedCharacter.movieCount}
      />
    );
  } else if (!isLoading && !selectedCharacter) {
    content = <h4>failed to fetch character</h4>;
  }
  return content;
}
