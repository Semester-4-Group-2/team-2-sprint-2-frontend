import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function FindByGenre() {
  const [genre, setGenre] = useState("");
  const [videoGames, setVideoGames] = useState([]);

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
      <select value={genre} onChange={(e) => setGenre(e.target.value)}>
  <option value="">Select a genre</option>
  <option value="Action">Action</option>
  <option value="Adventure">Adventure</option>
  <option value="RPG">RPG</option>
  <option value="Strategy">Strategy</option>
  <option value="Simulation">Simulation</option>
  <option value="Sports">Sports</option>
  <option value="Racing">Racing</option>
  {/* Add more genres as needed */}
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
