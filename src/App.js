import React, { useState } from "react";
import "./styles.css";

var bgColor = "skyblue";
var textColor = "white";
var message = "none";

var emojiDictionary = {
  Smiling: "😊",
  Happy: "😃",
  Laughing: "😂",
  Heart: "❤️",
  Hug: "🤗",
  Surprise: "😳",
  Annoyance: "😑",
  Sad: "😔",
  Angry: "😡"
};

var emojis = Object.values(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      message = "block";
      meaning = "oop's unrecognized code,could you please try something else";
      setMeaning(meaning);
    } else {
      message = "block";
      setMeaning(meaning);
    }
  }

  function emojiClickHandler(emoji) {
    console.log(emoji.keys);
  }

  return (
    <div className="App">
      <h1 style={{ backgroundColor: bgColor }}>
        Welcome to
        <span style={{ color: textColor }}> EMOJI </span> center..!
      </h1>

      <input
        className="tooltiptext"
        onChange={emojiInputHandler}
        placeholder="How you are feeling today..? (Please try text using Captalize format i.e => Happy.)"
      />
      <h2 style={{ display: message }}> {meaning}</h2>

      <h2>Emojis </h2>

      {emojis.map((emoji) => {
        return (
          <span
            keys={emoji}
            style={{ fontSize: "2rem" }}
            onClick={() => emojiClickHandler(emoji)}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
