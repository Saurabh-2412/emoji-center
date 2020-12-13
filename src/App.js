import React, { useState } from "react";
import "./styles.css";

var bgColor = "skyblue";
var textColor = "white";
var message = "none";

var emojiDictionary = {
  "😊": "Smiling",
  "😃": "Happy",
  "😂": "Laughing",
  "❤️": "Heart",
  "🤗": "Hug",
  "😳": "Surprise",
  "😑": "Annoyance",
  "😔": "Sad",
  "😡": "Angry",
  "🙃": "Sarcasm",
  "😐": "Neutral",
  "😋": "Savouring"
};

var emojisweknow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "oop's unrecognized code,could you please try something else";
      setMeaning(meaning);
    } else {
      setMeaning(meaning);
    }
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 style={{ backgroundColor: bgColor }}>
        Welcome to
        <span style={{ color: textColor }}> EMOJI </span> center..!
      </h1>

      <input
        onChange={emojiInputHandler}
        placeholder="You can find few smaple emojis below"
      />
      <h2> {meaning}</h2>

      <h2 style={{ color: "gray" }}>Emojis we know</h2>
      {emojisweknow.map((emoji) => {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{
              fontSize: "2rem",
              cursor: "pointer",
              padding: "2px"
            }}
            keys={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
