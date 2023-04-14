import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function FindByGenre() {
  const [genre, setGenre] = useState("");
  const [videoGames, setVideoGames] = useState([]);
  const genres = [
    "Action-adventure",
    "Action role-playing",
    "Role-playing",
    "Action",
    "Third-person shooter",
    "Racing",
    "First-person shooter",
    "Battle royale",
    "Survival horror",
    "Metroidvania",
    "Adventure",
  ];
  
  useEffect(() => {
    if (genre) {
      fetch(`http://localhost:8080/videogames/getByGenre/${genre}`)
        .then((res) => res.json())
        .then((result) => {
          setVideoGames(result);
        });
    } else {
      setVideoGames([]);
    }
  }, [genre]);

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div>
      <button onClick={handleGoBack}>Previous Page</button>
      <h2>Find Video Games by Genre</h2>
      <select
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      >
        <option value="">Select a genre</option>
        {genres.map((genre, index) => (
          <option key={index} value={genre}>
            {genre}
          </option>
        ))}
      </select>
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