import React from "react";
import { Link } from "gatsby";

const PostLink = ({ className, post }) => (
  <div style={{marginBottom: "4px"}}>
    - <Link className={className} to={post.frontmatter.path}>
      {post.frontmatter.title} (<time className="dt-published">{post.frontmatter.date}</time>)
    </Link>
  </div>
);

export default PostLink;
