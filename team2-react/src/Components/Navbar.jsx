import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;
  background-color: #3e8e41;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  z-index: 100;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Logo = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  color: white;
  text-decoration: none;
  margin-right: 50px;

  @media only screen and (max-width: 768px) {
    margin-right: 0;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  & a {
    color: white;
    text-decoration: none;
    font-size: 20px;
    padding: 25px;
    line-height: 20px; /* Use line-height instead of padding */
    border-bottom: none; /* Remove the underline */
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
  margin: 0;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const MenuIcon = styled.div`
  display: none;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    display: block;
    font-size: 24px;
    color: white;
  }
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Logo to="/">GameGo</Logo>
        <MenuIcon>☰</MenuIcon>
        <Links>
          <List>
            <li>
              <Link to="/" className="links">
                Home
              </Link>
            </li>
            <li>
              <Link to="/videogames" className="links">
                Video Games
              </Link>
            </li>
            <li>
              <Link to="/binarysearch" className="links">
                Sign Up
              </Link>
            </li>
            <li>
              <Link to="/binarysearch" className="links">
                Sign In
              </Link>
            </li>
          </List>
        </Links>
      </Container>
    </Section>
  );
};

export default Navbar;

