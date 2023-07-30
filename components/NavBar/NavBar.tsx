"use client";

import { styled } from "styled-components";
import navConfig from "./navConfig";

const NavHeader = () => {
  return <h3>Ajay Pathak</h3>;
};

const NavLinks = () => {
  return (
    <>
      <ul>
        {navConfig.map((navlink) => {
          return <li key={navlink.id}>{navlink.title}</li>;
        })}
      </ul>
    </>
  );
};

const NavBar = () => {
  return (
    <NavBar.Container>
      <NavHeader />
      <NavLinks />
    </NavBar.Container>
  );
};

NavBar.Container = styled.div`
  padding: 0 5vw;
`;

export default NavBar;
