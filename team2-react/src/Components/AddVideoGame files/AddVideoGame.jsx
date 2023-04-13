import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const AddFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 2rem;
  background-color: #f1f1f1;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const AddStyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

const AddStyledLabel = styled.label`
  font-weight: bold;
  font-size: 1rem;
`;

const AddStyledInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 3px;
  border: 1px solid #ccc;
  &:focus {
    border-color: #4caf50;
    box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
  }
`;

const AddStyledButton = styled(Link)`
  display: inline-block;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: #fff;
  background-color: #4caf50;
  border: none;
  border-radius: 3px;
  text-decoration: none;
  transition: background-color 0.3s;
  &:hover {
    background-color: #3d8a40;
  }
`;

export default function AddVideoGame() {
  const [name, setName] = React.useState("");
  const [developers, setDevelopers] = React.useState("");
  const [platforms, setPlatforms] = React.useState("");
  const [genre, setGenre] = React.useState("");

  const handleClick = (e) => {
    e.preventDefault();
    if (!name || !developers || !platforms || !genre) {
      alert("Please fill out all fields.");
      return;
    }
    const videoGame = { name, developers, platforms, genre };
    fetch("http://localhost:8080/videogames/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(videoGame),
    })
      .then(() => {
        // Redirect the user to the "/videogames/added" page
        alert("Game added!");
      })
      .catch((error) => {
        console.error("Error adding video game: ", error);
      });
  };

  return (
    <AddFormWrapper>
      <h3>Add a Video Game</h3>

      <AddStyledForm>
        <AddStyledLabel>
          Name
          <AddStyledInput
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </AddStyledLabel>
        <AddStyledLabel>
          Developer(s)
          <AddStyledInput
            value={developers}
            onChange={(e) => setDevelopers(e.target.value)}
          />
        </AddStyledLabel>
        <AddStyledLabel>
          Platform(s)
          <AddStyledInput
            value={platforms}
            onChange={(e) => setPlatforms(e.target.value)}
          />
        </AddStyledLabel>
        <AddStyledLabel>
          Genre
          <AddStyledInput
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </AddStyledLabel>
      </AddStyledForm>
      <AddStyledButton to="/videogames/added" onClick={handleClick}>
        Submit
      </AddStyledButton>
    </AddFormWrapper>
  );
}
