import React, { useState, useEffect } from "react";
import "./RotatingWord.css";

const WORDS = ["Studio", "Glass", "Cabinetry", "Tiles", "Fencing"];

const DURATION = 1500;
const STAGGER = 300;

const PAUSE = 200;

export default function RotatingWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const n = WORDS[index].length;
    const timeToLastLetter = (n - 1) * STAGGER + DURATION;
    const totalTime = timeToLastLetter + PAUSE;
    const id = setTimeout(
      () => setIndex((i) => (i + 1) % WORDS.length),
      totalTime
    );
    return () => clearTimeout(id);
  }, [index]);

  const chars = WORDS[index].split("");

  return (
    <span key={index} className="rotating-word">
      {chars.map((char, i) => (
        <span key={i} className="letter" style={{ "--letter-index": i }}>
          {char}
        </span>
      ))}
    </span>
  );
}
