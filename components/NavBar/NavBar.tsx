"use client";

import { styled } from "styled-components";
import navConfig from "./navConfig";

const NavHeader = () => {
  return <h3>Ajay Pathak</h3>;
};

const NavLinks = () => {
  return (
    <NavLinks.Wrapper>
      {navConfig.map((navlink) => {
        return <li key={navlink.id}>{navlink.title}</li>;
      })}
    </NavLinks.Wrapper>
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
  padding-top: 2rem;
  font-size: 2rem;
  display: flex;
  justify-content: space-between;
`;

NavLinks.Wrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 5rem;
  & > li {
  }
`;

export default NavBar;
