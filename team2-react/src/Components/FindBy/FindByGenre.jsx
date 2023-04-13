import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function FindByGenre() {
  const [genre, setGenre] = useState("");
  const [videoGames, setVideoGames] = useState([]);

  const getFilteredItems = (genre, videoGames) => {
    if (!genre) {
      return videoGames;
    }

    fetch(`http://localhost:8080/videogames/getByGenre/${genre}`)
      .then((res) => res.json())
      .then((result) => {
        setVideoGames(result);
      });
  };

  const filteredItems = getFilteredItems(genre, videoGames);

  return (
    <div>
      <h2>Find Video Games by Platform</h2>
      <input
        type="text"
        genre="genre-input"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />

      {videoGames.map((videoGame) => (
        <div>
          <Link
            to="/videogames/game"
            state={{
              id: videoGame.id,
            }}
          >
            Name: {videoGame.name}
          </Link>
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
