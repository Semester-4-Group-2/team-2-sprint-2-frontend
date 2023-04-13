import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

const Th = styled.th`
  padding: 10px;
  text-align: left;
  font-size: 18px;
  font-weight: bold;
  background-color: #f2f2f2;
`;

const Td = styled.td`
  padding: 10px;
  text-align: left;
`;

const EvenRow = styled.tr`
  background-color: #f9f9f9;
  &:hover,
  &:focus {
    background-color: #f2f2f2;
    cursor: pointer;
  }
`;

const OddRow = styled.tr`
  &:hover,
  &:focus {
    background-color: #f2f2f2;
    cursor: pointer;
  }
`;

const TitleCell = styled.td`
  font-size: 24px;
  font-weight: bold;
`;

const PlatformsCell = styled.td`
  font-size: 16px;
`;

export default function FindAll() {
  const [videoGames, setVideoGames] = React.useState([]);
  React.useEffect(() => {
    fetch("http://localhost:8080/videogames/getAll")
      .then((res) => res.json())
      .then((result) => {
        setVideoGames(result);
      });
  }, []);

  return (
    <Container>
      <Title>List of All Video Games</Title>
      <Table>
        <thead>
          <tr>
            <Th>Name</Th>
            <Th>Developer(s)</Th>
            <Th>Platform(s)</Th>
            <Th>Genre</Th>
          </tr>
        </thead>
        <tbody>
          {videoGames.map((videoGame, index) =>
            index % 2 === 0 ? (
              <EvenRow key={index}>
                <TitleCell>
                  <Link
                    to="/videogames/game"
                    state={{
                      id: videoGame.id,
                    }}
                  >
                    {videoGame.name}
                  </Link>
                </TitleCell>
                <Td>{videoGame.developers}</Td>
                <PlatformsCell>{videoGame.platforms}</PlatformsCell>
                <Td>{videoGame.genre}</Td>
              </EvenRow>
            ) : (
              <OddRow key={index}>
                <TitleCell>
                  <Link
                    to="/videogames/game"
                    state={{
                      id: videoGame.id,
                    }}
                  >
                    {videoGame.name}
                  </Link>
                </TitleCell>
                <Td>{videoGame.developers}</Td>
                <PlatformsCell>{videoGame.platforms}</PlatformsCell>
                <Td>{videoGame.genre}</Td>
              </OddRow>
            )
          )}
        </tbody>
      </Table>
    </Container>
  );
}
