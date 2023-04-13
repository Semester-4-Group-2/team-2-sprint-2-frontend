import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function FindByPlatform() {
  const [platform, setPlatform] = useState("");
  const [videoGames, setVideoGames] = useState([]);

  const getFilteredItems = (platform, videoGames) => {
    if (!platform) {
      return videoGames;
    }

    fetch(`http://localhost:8080/videogames/getByPlatforms/${platform}`)
      .then((res) => res.json())
      .then((result) => {
        setVideoGames(result);
      });
  };

  const filteredItems = getFilteredItems(platform, videoGames);

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div>
      <button onClick={handleGoBack}>Previous Page</button>
      <h2>Find Video Games by Platform</h2>
      <input
        type="text"
        platform="platform-input"
        value={platform}
        onChange={(e) => setPlatform(e.target.value)}
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
