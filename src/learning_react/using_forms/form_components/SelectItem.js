import React from "react";

export function SelectItem(props) {
  return (
    <div>
      <label>
        travelling to :
        <select
          name={props.name}
          onChange={props.onChange}
          value={props.location}
        >
          <option value="">please choose a destination</option>
          <option value="europe">europe</option>
          <option value="africa">africa</option>
          <option value="asia">asia pacific</option>
        </select>
      </label>
    </div>
  );
}
