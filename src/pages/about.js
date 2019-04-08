import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default ({ data }) => (
  <Layout>
    <h1>About the site "{data.site.siteMetadata.title}"</h1>
    <p>
      {data.site.siteMetadata.description}
    </p>
  </Layout>
);

export const query = graphql`
  query {
    site {
      siteMetadata {
        title,
        author,
        description
      }
    }
  }
`;
