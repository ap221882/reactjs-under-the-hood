"use client";

import BlogListing from "@/components/BlogListing/BlogListing";
import React from "react";

type Props = {};

//> Used in two pages/routes with different styling
const RecentBlogs = (props: Props) => {
  return (
    <div>
      <BlogListing heading="Recent Blogs">
        <>Hi</>
      </BlogListing>
    </div>
  );
};

export default RecentBlogs;
