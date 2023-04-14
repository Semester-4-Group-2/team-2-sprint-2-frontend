import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function FindByName() {
  const [name, setName] = useState("");
  const [videoGames, setVideoGames] = useState([]);

  useEffect(() => {
    if (name) {
      fetch(`http://localhost:8080/videogames/getByName/${name}`)
        .then((res) => res.json())
        .then((result) => {
          setVideoGames(result);
        });
    } else {
      setVideoGames([]);
    }
  }, [name]);

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div>
      <button onClick={handleGoBack}>Previous Page</button>
      <h2>Find Video Games by Name</h2>
      <input
        type="text"
        name="name-input"
        value={name}
        onChange={(e) => setName(e.target.value)}
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
