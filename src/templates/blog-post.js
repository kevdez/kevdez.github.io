import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import "./blog-post.css";

export default ({ data }) => {
  const post = data.markdownRemark;
  const {
    html,
    frontmatter: { author, categories, date, path },
  } = post;
  console.log(categories);
  const CategoriesList = categories.map(cat => {
    return (
      <span key={cat}>
        <a className="p-category" href="/about">
          {cat}{" "}
        </a>
      </span>
    );
  });
  return (
    <Layout>
      <article className="h-entry">
        <h1>{post.frontmatter.title}</h1>
        <div className="e-content blog-content" dangerouslySetInnerHTML={{ __html: html }} />
        <p>
          by{" "}
          <a rel="author" className="p-author h-card" href="/about">
            {author}
          </a>
        </p>
        <a className="u-url" href={`${path}`}>
          Published <time className="dt-published">{date}</time>
        </a>
        <div>{CategoriesList}</div>
      </article>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        author
        categories
        date(formatString: "MMMM DD, YYYY hh:mm")
        path
        title
      }
    }
  }
`;
