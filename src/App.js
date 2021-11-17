
import React, { useState } from "react";
//import { makeStyles } from "@material-ui/core/styles";
//import Paper from "@material-ui/core/Paper";
//import { PinDropSharp } from "@material-ui/icons";

/*const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));*/

var colors = ["green", "red", "blue"];

export default function FloatingActionButtons() {

  const [currentColor, setCurrentColor] = useState(0);

  const changeColor = () => {
    let nextColor = currentColor + 1;
    if(nextColor === colors.length) nextColor = 0;
    console.log("currentColorb: " + currentColor);
    setCurrentColor(nextColor);
    console.log("currentColora: " + currentColor);
  }

  return (
    <>
      <h1>Hello World</h1>
      <button onClick={changeColor}>Change color</button>
      <ChildComponent color={colors[currentColor]}/>
    </>
  );
}

const ChildComponent = (props) => {
  return (
    <h1 style={{ background: props.color }}>
      Child component
    </h1>
  );
};

/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
