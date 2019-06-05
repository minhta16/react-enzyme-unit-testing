import React from "react";
import logo from "./logo.svg";
import "./App.css";

const Test = () => <div>Testing!</div>;
class App extends React.Component {
  state = {
    on: false,
    text: ""
  };

  handleStrings = string => {
    return string === "Hello World";
  };
  componentDidMount() {}
  componentWillReceiveProps() {}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <ul className="yolo">
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button onClick={e => this.setState({ on: true })}>Click</button>
          <div className="button-state">{this.state.on ? "Yes!" : "No :("}</div>
          <input
            onChange={e => this.setState({ text: e.currentTarget.value })}
          />
          <div className="input-text">{this.state.text}</div>
        </header>
        <Test />
      </div>
    );
  }
}

export class Link extends React.Component {
  render() {
    return this.props.hide ? null : <a href={this.props.address}>Click!</a>;
  }
}
export default App;
