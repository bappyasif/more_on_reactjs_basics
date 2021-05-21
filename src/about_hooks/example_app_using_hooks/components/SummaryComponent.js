import React from "react";

export function SummaryComponent(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>
        Gender: <span>{props.gender}</span>
      </p>
      <p>
        Height: <span>{props.height}</span>
      </p>
      <p>
        Hair Color / Skin Color <span>{props.hairColor}</span>
        <span>{props.skinColor}</span>
      </p>
      <p>
        Appears in # Movies: <span>{props.movieCount}</span>
      </p>
    </div>
  );
}
