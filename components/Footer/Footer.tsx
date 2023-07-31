"use client";

import React from "react";
import { styled } from "styled-components";
import footerConfig from "./footerConfig";

type Props = {};

const Footer = (props: Props) => {
  const currentYear = new Date().getUTCFullYear();

  return (
    <Footer.Wrapper>
      <span>&copy; {currentYear}</span>
      <ul>
        {footerConfig.map((link) => {
          return <li key={link.id}>{link.title}</li>;
        })}
      </ul>
    </Footer.Wrapper>
  );
};

Footer.Wrapper = styled.div`
  padding: 0 5vw;
  font-size: 1.25rem;
  display: flex;
  gap: 2rem;
  & > ul {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }
`;

export default Footer;
