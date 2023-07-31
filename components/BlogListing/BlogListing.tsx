import React, { ReactElement } from "react";
import { styled } from "styled-components";

type BlogListingProps = {
  heading: string;
  children: ReactElement;
};

const BlogListing = ({ heading, children }: BlogListingProps) => {
  return (
    <BlogListing.Wrapper>
      <h4>{heading}</h4>
      {children}
    </BlogListing.Wrapper>
  );
};

BlogListing.Wrapper = styled.div`
  padding: 3rem 5vw;
  font-size: 2rem;
  h4 {
    padding-bottom: 2rem;
  }
`;

export default BlogListing;
