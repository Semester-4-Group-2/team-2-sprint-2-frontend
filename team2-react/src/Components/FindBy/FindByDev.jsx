import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function FindByDev() {
  const [developers, setDevelopers] = useState("");
  const [videoGames, setVideoGames] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/videogames/getByDevelopers/${developers}`)
      .then((res) => res.json())
      .then((result) => {
        setVideoGames(result);

        return videoGames;
      });
  }, [developers, videoGames]);

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div>
      <button onClick={handleGoBack}>Previous Page</button>
      <h2>Find Video Games by Developing Studio</h2>
      <input
        type="text"
        developers="developers-input"
        value={developers}
        onChange={(e) => setDevelopers(e.target.value)}
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
