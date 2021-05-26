import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Home() {
  return <h2>Home Component</h2>;
}

export function Photos() {
  let [photos, setPhotos] = useState([]);
  useEffect(() => fectchingData(), []);
  let fectchingData = () => {
    let url = "https://jsonplaceholder.typicode.com/photos";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data, data[0])
        let temp = data.filter((item) => item.id < 13);
        setPhotos(temp);
        // console.log(photos, temp);
      })
      .catch((err) => console.log(err));
  };
  let photosList = photos.map((photo) => (
    <p key={photo.id}>
      <Link to={`/photos/${photo.id}`}>{photo.title}</Link>
    </p>
  ));
  return (
    <div>
      <h4>Photos</h4>
      {/* {console.log(photos)} */}
      {photosList}
    </div>
  );
}

export function SpecificPhoto(match) {
  let [photo, setPhoto] = useState({});
  // console.log(match, match.match.params.id)
  useEffect(() => fetchPhoto(), []);
  let fetchPhoto = () => {
    let url = `https://jsonplaceholder.typicode.com/photos/${match.match.params.id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setPhoto(data);
      })
      .catch((err) => console.log(err));
  };
  let displayPhoto;
  if (photo) {
    // console.log(photo);
    displayPhoto = (
      <div>
        <h4>{photo.title}</h4>
        {/* <img src={photo.url} height="200px" width="200px" /> */}
        <img src="https://picsum.photos/200" />
      </div>
    );
  }
  return displayPhoto;
}

export function NavigationComponent() {
  return (
    <ul className="routeNav">
      <li className="nav-links">
        <Link to="/home">Home</Link>
      </li>
      <li className="nav-links">
        <Link to="/photos">Photos</Link>
      </li>
    </ul>
  );
}
