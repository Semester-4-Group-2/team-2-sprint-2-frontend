import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import FindAll from "./Components/FindBy/FindAll";
import FindByDev from "./Components/FindBy/FindByDev";
import FindByGenre from "./Components/FindBy/FindByGenre";
import FindByID from "./Components/FindBy/FindByID";
import FindByName from "./Components/FindBy/FindByName";
import FindByPlatform from "./Components/FindBy/FindByPlatform";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import VideoGames from "./Components/VideoGames";
import Navbar from "./Components/Navbar";
import AddVideoGame from "./Components/AddVideoGame files/AddVideoGame";
import GameAdded from "./Components/AddVideoGame files/GameAdded";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scollintoview: smooth;
  scroll-behavior: smooth;
  overflow-y: scroll;
  scrollbar-width: none;
  padding-top: 60px; /* Add top padding to account for the navbar */

  &::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (max-width: 768px) {
    scroll-snap-type: none;
  }
`;

function App() {
  return (
    <Container>
      <Router>
        <header>
          <h1>Final Sprint, Team 2</h1>
          <Navbar />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videogames" element={<VideoGames />} />
          <Route path="/videogames/getAll" element={<FindAll />} />
          {/* confirm search specific */}
          <Route path="/videogames/getById/" element={<FindByID />} />
          <Route path="/videogames/getByName/{name}" element={<FindByName />} />
          <Route
            path="/videogames/getByGenre/{genre}"
            element={<FindByGenre />}
          />
          <Route
            path="/videogames/getByDevelopers/{developers}"
            element={<FindByDev />}
          />
          <Route
            path="/videogames/getByPlatform?platform={platform}"
            element={<FindByPlatform />}
          />
          <Route path="/videogames/add" element={<AddVideoGame />} />
          <Route path="/videogames/added" element={<GameAdded />} />
        </Routes>
        <Footer />
      </Router>
    </Container>
  );
}

export default App;
