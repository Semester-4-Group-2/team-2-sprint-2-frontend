// import React from "react";
// import { Link } from "react-router-dom";
// import styled from "styled-components";

// const Section = styled.div`
//   display: flex;
//   justify-content: center;
//   background-color: #454545;
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   z-index: 100;

//   @media only screen and (max-width: 768px) {
//     width: 100%;
//     scroll-snap-align: none;
//   }
// `;

// const Container = styled.div`
//   width: 1400px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 10px 0;

//   @media only screen and (max-width: 768px) {
//     width: 100%;
//     padding: 10px;
//   }
// `;

// const Links = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 20px;

//   & a {
//     color: white;
//     text-decoration: none;
//   }
// `;

// const List = styled.ul`
//   display: flex;
//   gap: 20px;
//   list-style: none;

//   @media only screen and (max-width: 768px) {
//     display: none;
//   }
// `;

// const Navbar = () => {
//   return (
//     <Section>
//       <Container>
//         <Links>
//           <List>
//             <Link to="/" className="links">
//               Home
//             </Link>
//             <Link to="/videogames" className="links">
//               Video Games
//             </Link>
//             <Link to="/binarysearch" className="links">
//               Binary Search Tree
//             </Link>
//           </List>
//         </Links>
//       </Container>
//     </Section>
//   );
// };

// export default Navbar;
