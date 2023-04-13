import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

export default function EditGame() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [videoGame, setVideoGame] = useState({
    name: "",
    developers: "",
    platforms: "",
    genre: "",
  });

  useEffect(() => {
    fetch(`http://localhost:8080/videogames/getById/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setVideoGame(data);
      });
  }, [id]);

  const handleChange = (event) => {
    setVideoGame({ ...videoGame, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:8080/videogames/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(videoGame),
    })
      .then(() => {
        navigate(`/videogames/game`, { state: { id } });
      })
      .catch((error) => {
        console.error("Error updating game:", error);
      });
  };

  return (
    <div>
      <h3>Edit {videoGame.name}</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={videoGame.name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="developers">Developers:</label>
        <input
          type="text"
          id="developers"
          name="developers"
          value={videoGame.developers}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="platforms">Platforms:</label>
        <input
          type="text"
          id="platforms"
          name="platforms"
          value={videoGame.platforms}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="genre">Genre:</label>
        <input
          type="text"
          id="genre"
          name="genre"
          value={videoGame.genre}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Save Changes</button>
      </form>
      <Link to={{ pathname: `/videogames/game`, state: { id } }}>
        <button>Cancel</button>
      </Link>
    </div>
  );
}