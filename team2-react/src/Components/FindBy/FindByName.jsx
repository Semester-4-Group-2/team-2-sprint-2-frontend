import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function FindByName() {
  const [query, setQuery] = useState("");
  const [videoGames, setVideoGames] = useState([]);
  const changeQuery = (e) => {
    setQuery(e.target.value);
    e.preventDefault();
  };
  useEffect(() => {
    fetch(`http://localhost:8080/videogames/getByName/${query}`)
      .then((res) => res.json())
      .then((result) => {
        setVideoGames(result);
      });
  }, []);

  return (
    <div>
      <h2>Find Video Games by Name</h2>
      <input type="text" onChange={changeQuery} />
      {videoGames.map((videoGame) => (
        <div key={videoGame.name}>
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
