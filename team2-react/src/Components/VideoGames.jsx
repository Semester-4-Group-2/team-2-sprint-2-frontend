import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddVideoGame from "./AddVideoGame files/AddVideoGame";
import styled from "styled-components";

const VideoGamesWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const VideoGamesHeading = styled.h1`
  margin-bottom: 1rem;
`;

const VideoGamesNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const VideoGamesLink = styled(Link)`
  padding: 0.5rem 1rem;
  background-color: #4caf50;
  color: #fff;
  text-decoration: none;
  border-radius: 3px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #3d8a40;
  }
`;

export default function VideoGames() {
  return (
    <VideoGamesWrapper>
      <VideoGamesHeading>Select which function.</VideoGamesHeading>
      <VideoGamesNav>
        <VideoGamesLink to="/videogames/getAll">Get Full List</VideoGamesLink>
        <VideoGamesLink to="/videogames/getById/">Search By ID</VideoGamesLink>
        <VideoGamesLink to={"/videogames/getByName/"}>Search By Name</VideoGamesLink>
        <VideoGamesLink to={"/videogames/getByDevelopers/"}>Search By Developer</VideoGamesLink>
        <VideoGamesLink to={"/videogames/getByPlatforms/"}>Search By Platform</VideoGamesLink>
        <VideoGamesLink to={"/videogames/getByGenre/"}>Search By Genre</VideoGamesLink>
      </VideoGamesNav>
      <AddVideoGame />
    </VideoGamesWrapper>
  );
}