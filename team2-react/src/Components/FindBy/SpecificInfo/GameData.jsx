import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function GameData() {
  const location = useLocation();
  const { id } = location.state;
  const [videoGame, setVideoGame] = React.useState({});
  console.log(`The ID is : ${id}`);

  useEffect(() => {
    fetch(`http://localhost:8080/videogames/getById/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setVideoGame(data);
      });
  }, []);
  return (
    <div>
      <h3>{videoGame.name}</h3>
      <p>Developers: {videoGame.developers}</p>
      <p>Platforms: {videoGame.platforms}</p>
      <p>Genre: {videoGame.genre}</p>
      <Link to={{ pathname: `/videogames/edit/${id}`, state: { videoGame } }}>
        <button>Update</button>
      </Link>
    </div>
  );
}
