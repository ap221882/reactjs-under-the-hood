"use client";

import BlogListing from "@/components/BlogListing/BlogListing";
import { blogData } from "@/services/blogs";
import Image from "next/image";
import React, { Fragment } from "react";

type Props = {};

//> Used in two pages/routes with different styling
const RecentBlogs = (props: Props) => {
  return (
    <div>
      <BlogListing heading="Recent Blogs">
        <>
          {blogData.map((blog) => {
            return (
              <Fragment key={blog.id}>
                <h5>{blog.heading}</h5>
                <p>{blog.Content}</p>
                <Image
                  src={blog.imgSrc}
                  alt={blog.heading}
                  width={50}
                  height={50}
                />
              </Fragment>
            );
          })}
        </>
      </BlogListing>
    </div>
  );
};

export default RecentBlogs;
