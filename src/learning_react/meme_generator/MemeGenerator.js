import React, { Component } from "react";
import { MemeDisplay } from "./MemeDisplay";
import { TextTypeInputElement } from "./TextTypeInputElement";

export class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "https://i.imgflip.com/1bij.jpg",
      allMemeImgs: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    let { name, value } = evt.target;
    this.setState({
      [name]: value,
    });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    let randomized = Math.floor(Math.random() * this.state.allMemeImgs.length);
    console.log(randomized, this.state.allMemeImgs[randomized].url);
    let randMeme = this.state.allMemeImgs[randomized].url;
    this.setState({
      randomImg: randMeme,
    });
  }
  componentDidMount() {
    let url = "https://api.imgflip.com/get_memes";
    fetch(url)
      .then((res) => {
        // console.log(res);
        return res.json();
      })
      .then((jsonResp) => {
        let { memes } = jsonResp.data;
        //   console.log(memes, jsonResp);
        this.setState({
          allMemeImgs: memes,
        });
      })
      .catch((err) => console.log(err));
  }
  render() {
    //   console.log(this.state.allMemeImgs);
    return (
      <div>
        <p>data here</p>
        <fieldset>
          <form onSubmit={this.handleSubmit}>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <TextTypeInputElement
                label="Top Text"
                name="topText"
                value={this.state.topText}
                onChange={this.handleChange}
              />
              <TextTypeInputElement
                label="Bottom Text"
                name="bottomText"
                value={this.state.bottomText}
                onChange={this.handleChange}
              />
              <button type="submit">Generate</button>
            </div>
          </form>
        </fieldset>
        <fieldset>
          <MemeDisplay data={this.state} generate={this.handleSubmit} />
        </fieldset>
      </div>
    );
  }
}
