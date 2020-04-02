import React from "react";
import "./App.css";

class App extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }

  clearBox(elementID) {
    document.getElementById(elementID).innerHTML = "";
  }

  createRoom() {
    this.clearBox("root");
    console.log("Creating Room");
  }

  joinRoom() {
    this.clearBox("root");
    console.log("Joining Room");
  }
}

export default App;
