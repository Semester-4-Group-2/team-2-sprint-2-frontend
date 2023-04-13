import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function FindByID() {
  const [id, setId] = React.useState("");
  const [videoGame, setVideoGame] = React.useState({});

  const handleInputChange = (event) => {
    setId(event.target.value);
  };

  const handleSearchClick = () => {
    fetch(`http://localhost:8080/videogames/getById/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setVideoGame(data);
      })
      .catch((error) => {
        console.error("Error fetching video game:", error);
      });
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div>
      <button onClick={handleGoBack}>Previous Page</button>
      <h2>Search for a Video Game by ID</h2>
      <div>
        <label htmlFor="id-input">ID:</label>
        <input
          type="text"
          id="id-input"
          value={id}
          onChange={handleInputChange}
        />
        <button onClick={handleSearchClick}>Search</button>
      </div>
      {videoGame.name && (
        <div>
          <Link
            to="/videogames/game"
            state={{
              id: videoGame.id,
            }}
          >
            <h3>{videoGame.name}</h3>
          </Link>
          <p>Developers: {videoGame.developers}</p>
          <p>Platforms: {videoGame.platforms}</p>
          <p>Genre: {videoGame.genre}</p>
        </div>
      )}
    </div>
  );
}
