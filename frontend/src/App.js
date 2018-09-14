import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { LetterForm, Results } from "./Components";

class App extends Component {
  state = { letters: "", results: [] };
  inputLetters = e => {
    this.setState({ letters: e.target.value.slice(-8) });
  };
  submit = e => {
    e.preventDefault();
    fetch(
      `https://us-central1-scrabblesolver-216415.cloudfunctions.net/find-words `,
      {
        method: "POST",
        body: JSON.stringify({ word: this.state.letters }),
        mode: "cors",
        headers: {
          "Access-Control-Allow-Origin": "*"
        }
      }
    )
      .then(res => {
        console.log(res);
        res.json();
      })
      .then(json => this.setState({ results: json.slice(10) }));
  };

  render() {
    const { letters } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Scrabble Solver</h1>
        </header>
        <h1>{letters}</h1>
        <p className="App-intro">
          If you enter some letters in here and hit enter, we WILL find the best
          scoring scrabble words for you.
        </p>
        <LetterForm
          letters={letters}
          inputLetters={this.inputLetters.bind(this)}
          submit={this.submit.bind(this)}
        />
        <Results data={this.state.results} />
      </div>
    );
  }
}
export default App;
