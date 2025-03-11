import React from "react";
import "../csslab/first.css";
import { useState } from "react";

export default function Add() {
  const [count, addcount] = useState(0);
  const [value, input] = useState("");
  function handleInputChange(event) {
    input(event.target.value);
  }
  function add() {
    if (value === "") alert("Please enter a number");
    else if (isNaN(value)) alert("Please enter a valid number");
    else addcount(count + Number(value));
  }
  function subtract() {
    if (value === "") alert("Please enter a number");
    else if (isNaN(value)) alert("Please enter a valid number");
    else addcount(count - Number(value));
  }
  function multiply() {
    if (value === "") alert("Please enter a number");
    else if (isNaN(Number(value))) alert("Please enter a valid number");
    else addcount(count * Number(value));
  }
  function divide() {
    if (value === "") alert("Please enter a number");
    else if (isNaN(Number(value))) alert("Please enter a valid number");
    else {
      if (value === 0) alert("Cannot divide by zero");
      else addcount(count / Number(value));
    }
  }
  function resetInput() {
    input("");
  }
  function resetResult() {
    addcount(0);
  }
  return (
    <div>
      <h2>Result : {count} </h2>
      <input
        type="text"
        placeholder="Enter a number"
        value={value}
        onChange={handleInputChange}
      />{" "}
      <br />
      <button onClick={add}>Add</button>
      <button onClick={subtract}>Subtract</button>
      <button onClick={multiply}>Multiply</button>
      <button onClick={divide}>Divide</button> <br />
      <button onClick={resetInput}>Reset Input</button>
      <button onClick={resetResult}>Reset Result</button>
    </div>
  );
}
