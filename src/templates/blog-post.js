import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default ({ data }) => {
  const post = data.markdownRemark;
  const {
    html,
    frontmatter: { path, date },
  } = post;
  return (
    <Layout>
      <article class="h-entry">
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <a className="u-url" href={`${path}`}>
          Published <time className="dt-published">{date}</time>
        </a>
      </article>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        path
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
