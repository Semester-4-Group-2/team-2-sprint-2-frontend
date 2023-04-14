import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function FindByDev() {
  const [developers, setDevelopers] = useState("");
  const [videoGames, setVideoGames] = useState([]);

  const developersList = [
    "Rockstar",
    "Naughty Dog",
    "CD Projekt Red",
    "Rockstar Studios",
    "Santa Monica Studio",
    "FromSoftware",
    "Nintendo EPD",
    "Guerrilla Games",
    "Insomniac Games",
    "P-Studio",
    "Kojima Productions",
    "Ubisoft Quebec",
    "The Coalition",
    "Playground Games",
    "Bungie",
    "Blizzard Entertainment",
    "Epic Games",
    "Bioware",
    "Obsidian Entertainment",
    "Larian Studios",
    "Square Enix",
    "Respawn Entertainment",
    "EA DICE",
    "Treyarch",
    "id Software",
    "Capcom",
    "Arkane Studios",
    "Sucker Punch Productions",
    "Team Cherry",
    "Moon Studios",
    "Crytek",
    "Hello Games"
  ];


   useEffect(() => {
    fetch(`http://localhost:8080/videogames/getByDevelopers/${developers}`)
      .then((res) => res.json())
      .then((result) => {
        setVideoGames(result);
      });
  }, [developers]);

  const handleGoBack = () => {
    window.history.back();
  };

  const handleDeveloperChange = (event) => {
    setDevelopers(event.target.value);
  };

  return (
    <div>
      <button onClick={handleGoBack}>Previous Page</button>
      <h2>Find Video Games by Developing Studio</h2>
      <div>
        <label htmlFor="developers">Select Developer:</label>
        <select id="developers" value={developers} onChange={handleDeveloperChange}>
          <option value="">--Select--</option>
          {developersList.map((developer, index) => (
            <option key={index} value={developer}>
              {developer}
            </option>
          ))}
        </select>
      </div>

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