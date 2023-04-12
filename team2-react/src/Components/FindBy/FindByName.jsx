import React from "react";

export default function FindByName() {
  const [name, setName] = React.useState("");
  const [videoGames, setVideoGames] = React.useState([]);

  const getFilteredItems = (name, videoGames) => {
    if (!name) {
      return videoGames;
    }

    fetch(`http://localhost:8080/videogames/getByName/${name}`)
      .then((res) => res.json())
      .then((result) => {
        setVideoGames(result);
      });
  };

  const handleClickCheck = () => {
    fetch(`http://localhost:8080/videogames/getByName/${name}`)
      .then((res) => res.json())
      .then((result) => {
        setVideoGames(result);
      });
  };

  const filteredItems = getFilteredItems(name, videoGames);

  return (
    <div>
      <h2>Find Video Games by Name</h2>
      <input
        type="text"
        name="name-input"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {videoGames.map((videoGame) => (
        <div>
          Name: {videoGame.name}
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
