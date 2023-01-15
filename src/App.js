import React, { useState } from "react";
import "./styles.css";

const specialCharacters = {
  "!": "Exclamation",
  "@": "At sign",
  "#": "hash",
  $: "Dollar sign",
  "%": "percent",
  "^": "Caret",
  "&": "Ampersand",
  "*": "Asterisk",
  ":": "colon",
  "<": "Less than",
  "=": "Equal sign",
  ">": "Greater than",
  "~": "Tilde"
};

const specials = Object.keys(specialCharacters);

export default function App() {
  const [special, setSpecial] = useState("");
  const [meaning, setMeaning] = useState("translation will appear here..");

  function changeHandler(event) {
    const inputSpecial = event.target.value;
    setSpecial(inputSpecial);

    if (inputSpecial in specialCharacters) {
      setMeaning(specialCharacters[inputSpecial]);
    } else {
      setMeaning("failure to recognise this emoji");
    }
  }

  function specialClickHandler(inputSpecial) {
    setMeaning(specialCharacters[inputSpecial]);
  }

  return (
    <div className="App">
      <h1>🔣special Characters🔣</h1>
      <input
        onChange={changeHandler}
        value={special}
        placeholder={"Search your special character"}
        style={{
          padding: "1em",
          minWidth: "80%"
        }}
      />
      <h2> {special} </h2> {}
      <h3> {meaning} </h3> {}
      {specials.map((special) => (
        <span
          onClick={() => specialClickHandler(special)}
          style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
        >
          {" "}
          {special}{" "}
        </span>
      ))}
      <br />
      <br />
      <br />
      <h1>🔣</h1>
    </div>
  );
}
