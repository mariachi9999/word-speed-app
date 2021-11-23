import React from "react";
import { useState, useEffect } from "react";

const divInput = {
  color: "tomato",
  width: "75%",
  height: "50vh",
  fontSize: "24px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "15px",
};

const divArea = {
  color: "tomato",
  width: "75%",
  height: "50vh",
  fontSize: "24px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "15px",
  borderRadius: "10px",
  resize: "none",
};

const inputButton = {
  color: "white",
  backgroundColor: "tomato",
  width: "25%",
  height: "10vh",
  fontSize: "24px",
  borderRadius: "10px",
  margin: "15px",
};

function Input({ words, setWords, setStart, setEnd, setSpeed, setStore }) {
  function handleChange(e) {
    setWords(e.target.value);
  }

  function handleClick() {
    setWords("");
    setStart(undefined);
    setEnd(undefined);
    setSpeed(0);
    setStore([]);
  }

  return (
    <div style={divInput}>
      <textarea
        style={divArea}
        onChange={(e) => handleChange(e)}
        value={words}
      ></textarea>
      <button style={inputButton} onClick={handleClick}>
        Reset
      </button>
    </div>
  );
}

export default Input;
