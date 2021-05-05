import React, { Component } from "react";

export class FetchingData extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      character: {},
      starships: {},
    };
  }
  componentDidMount() {
    // to show a loding in progress message
    this.setState({ isLoading: true });

    // calling API for data
    fetch("https://swapi.dev/api/people/2")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // turning isLoading back to false, so that data can be shown on DOM
        this.setState({ character: data, isLoading: false });
      })
      // will catch any error there might be, without crashing app
      .catch((err) => console.log(err));

    // request for starships data
    this.setState({ isLoading: true });

    fetch("https://swapi.dev/api/starships/9")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          isLoading: false,
          starships: data,
        });
      })
      .catch((err) => console.log("error", err));
  }

//   componentDidUpdate(prevProps, prevState) {
//       console.log(this.state.starships !== prevState.starships)
//     if (this.state.starships !== prevState.starships) {
//       this.setState({ isLoading: true });

//       fetch("https://swapi.dev/api/starships/9")
//         .then((res) => res.json())
//         .then((data) => {
//           console.log(data);
//           this.setState({
//             isLoading: false,
//             starships: data,
//           });
//         })
//         .catch((err) => console.log("error", err));
//     }
//   }

  render() {
    return (
      <div>
        <p>Fetching Data From StarWarsAPI</p>
        {/* {this.state.character ? (
          <ShowData data={this.state.character} />
        ) : (
          this.state.character
        )} */}
        {this.state.isLoading ? (
          "Data Loading"
        ) : (
          <ShowData data={this.state.character} />
        )}

        {this.state.isLoading ? (
          "Data Loading"
        ) : (
          <ShowMore data={this.state.starships} />
        )}
      </div>
    );
  }
}

function ShowData(props) {
  return (
    <div>
      <h2>Character Detail</h2>
      <h4>{props.data.name}</h4>
      <h4>{props.data.eye_color}</h4>
      <h4>{props.data.mass}</h4>
      <h4>{props.data.skin_color}</h4>
    </div>
  );
}

function ShowMore(props) {
  return (
    <div>
      <h2>Starship Detail</h2>
      <h4>{props.data.name}</h4>
      <h4>{props.data.model}</h4>
      <h4>{props.data.manufacturer}</h4>
      <h4>{props.data.skin_length}</h4>
    </div>
  );
}
