import React from "react";
import { graphql } from "gatsby";

import PostLink from "../components/post-link";
import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />);
  return (
    <Layout>
      <SEO
        title="What's next for Kevin?"
        keywords={[
          "whatsnextforkev.in",
          "application",
          "indieweb",
          "Kevin Hernandez",
          "react",
          "kevdez",
        ]}
      />
      <p>hello. welcome to my site.</p>
      <article className="h-entry">
        <div className="e-content p-name">
          This is my first indieweb blog. Let's hope I'm doing things right.
        </div>
      </article>
      <div>{Posts}</div>
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`;
