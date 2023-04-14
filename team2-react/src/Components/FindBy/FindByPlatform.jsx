import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function FindByPlatform() {
  const [platform, setPlatform] = useState("");
  const [videoGames, setVideoGames] = useState([]);
  const platforms = [
    "PlayStation 4, Xbox One, PlayStation 3, Xbox 360, PC",
    "PlayStation 4",
    "PlayStation 4, Xbox One, Nintendo Switch, PC",
    "PlayStation 4, Xbox One, PC, Google Stadia",
    "Nintendo Switch, Wii U",
    "PlayStation 4, PlayStation 3",
    "PlayStation 4, Xbox One, PC, Nintendo Switch",
    "Xbox One, PC",
    "PlayStation 4, Xbox One, PC, Nintendo Switch, iOS, Android",
    "PlayStation 4, PlayStation 5",
    "PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S, PC",
    "PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S, PC, Nintendo Switch, Google Stadia",
    "PC",
  ];

  useEffect(() => {
    if (platform) {
      fetch(`http://localhost:8080/videogames/getByPlatforms/${platform}`)
        .then((res) => res.json())
        .then((result) => {
          setVideoGames(result);
        });
    }
  }, [platform]);

  const handleGoBack = () => {
    window.history.back();
  };

  const handleSearchClick = () => {
    setPlatform(platform);
  };

  return (
    <div>
      <button onClick={handleGoBack}>Previous Page</button>
      <h2>Find Video Games by Platform</h2>
      <select
        value={platform}
        onChange={(e) => setPlatform(e.target.value)}
      >
        <option value="">Select a platform</option>
        {platforms.map((platform, index) => (
          <option key={index} value={platform}>
            {platform}
          </option>
        ))}
      </select>
      {/* <button onClick={handleSearchClick}>Search</button> */}

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