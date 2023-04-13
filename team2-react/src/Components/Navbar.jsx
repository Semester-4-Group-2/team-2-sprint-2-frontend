import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap');
</style>

const Section = styled.div`
  display: flex;
  justify-content: center;
  background-color: #3e8e41 ;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  z-index: 100;

  @media only screen and (max-width: 768px) {
    width: 100%;
    scroll-snap-align: none;
  }
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;

  @media only screen and (max-width: 768px) {
    width: 100%;
     scroll-snap-align: none;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  height: 100%; /* Set a fixed height */

  & a {
    color: white;
    text-decoration: none;
    font-size: 20px;
    padding: 25px;
    line-height: 20px; /* Use line-height instead of padding */
  }

  & a:hover {
    color: black;
    background-color: white;
    border-radius: 5px;
  }
`;




const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <List>
            <Link to="/" className="links">
              Home
            </Link>
            <Link to="/videogames" className="links">
              Video Games
            </Link>
            <Link to="/binarysearch" className="links">
            </Link>
          </List>
        </Links>
      </Container>
    </Section>
  );
};

export default Navbar;
