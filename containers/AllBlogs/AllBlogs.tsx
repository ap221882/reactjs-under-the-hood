"use client";
import BlogListing from "@/components/BlogListing/BlogListing";
import React from "react";

type Props = {};

const AllBlogs = (props: Props) => {
  return (
    <div>
      <BlogListing heading="All Blog Posts">
        <>Hi</>
      </BlogListing>
    </div>
  );
};

export default AllBlogs;
