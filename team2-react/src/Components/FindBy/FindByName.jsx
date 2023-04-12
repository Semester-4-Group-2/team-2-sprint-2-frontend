import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function FindByName() {
  const [name, setName] = useState("");
  const [videoGames, setVideoGames] = useState([]);

  const getFilteredItems = (name, videoGames) => {
    if (!name) {
      return videoGames;
    }

    fetch(`http://localhost:8080/videogames/getByName/${name}`)
      .then((res) => res.json())
      .then((result) => {
        setVideoGames(result);
      });
  };

  const filteredItems = getFilteredItems(name, videoGames);

  return (
    <div>
      <h2>Find Video Games by Name</h2>
      <input
        type="text"
        name="name-input"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {videoGames.map((videoGame) => (
        <div>
          <Link>Name: {videoGame.name}</Link>
          <br />
          Developer(s): {videoGame.developers}
          <br />
          Platform(s): {videoGame.platforms}
          <br />
          Genre: {videoGame.genre}
          <br />
          <br />
        </div>
      ))}
    </div>
  );
}
