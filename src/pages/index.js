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
  console.log("edges:", edges);
  const Posts = edges
    .filter(edge => {
      const {date, path} = edge.node.frontmatter;
      const isNotWebmention = p => !p.includes("webmentions");
      return !!date && isNotWebmention(path);
    }) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />);
  return (
    <Layout>
      <SEO
        title="What's next for Kevin?"
        keywords={[
          "whatsnextforkev.in",
          "application",
          "indieweb",
          "Kevin",
          "react",
          "kevdez",
        ]}
      />
      <article className="h-entry">
        <div className="e-content p-name">
          <p>Hello. Welcome to my site.</p>
          <p>
            This is the first blog of my own where I have full control over all
            the content. As the site improves, I'll be targeting the direction
            of this site for good Search Engine Optimization (
            <a href="https://en.wikipedia.org/wiki/Search_engine_optimization">
              SEO
            </a>
            ), web{" "}
            <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility">
              accessibility
            </a>
            , and <a href="https://indieweb.org/">IndieWeb</a> practices. Let's
            hope I'm doing things correctly.
          </p>
          <p>
            This site is built with{" "}
            <a href="https://www.gatsbyjs.org/">Gatsby</a> as a static site,
            hosted on <a href="https://pages.github.com/">GitHub Pages</a>. I
            specifically went for a zero dollar website.
          </p>
          <p>
            Expect things to move around often—the site is under heavy
            construction.
          </p>
        </div>
      </article>
      <h4>Here are some recent blog posts:</h4>
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
