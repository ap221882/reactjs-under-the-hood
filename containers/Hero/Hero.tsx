"use client";

import React from "react";
import { styled } from "styled-components";

import NavBar from "@/components/NavBar/NavBar";
import Separator from "@/components/Separator/Separator";
import RecentBlogs from "../RecentBlogs/RecentBlogs";
import AllBlogs from "../AllBlogs/AllBlogs";
import Footer from "@/components/Footer/Footer";

const Hero = () => {
  return (
    <>
      <NavBar />
      <Separator />
      <Hero.Title title="ReactJS Under The Hood" />
      <Separator />
      <RecentBlogs />
      <AllBlogs />
      <Footer />
    </>
  );
};

Hero.Title = function HeroTitle({ title }: { title: string }) {
  return <HeroTitleHeading>{title}</HeroTitleHeading>;
};

const HeroTitleHeading = styled.h1`
  font-size: 10rem;
  font-weight: 600;
  text-align: center;
`;

export default Hero;
