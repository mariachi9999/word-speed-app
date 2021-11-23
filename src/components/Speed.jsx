import React from "react";

const speedText = {
  color: "white",
  width: "100%",
  height: "25vh",
  fontSize: "24px",
};

const speedNumber = {
  color: "red",
  fontSize: "32px",
};

function Speed({ speed }) {
  return (
    <div>
      <p style={speedText}>
        You're typing <b style={speedNumber}>{speed}</b> words per minute!
      </p>
    </div>
  );
}

export default Speed;
