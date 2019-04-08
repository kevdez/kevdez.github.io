/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import styled from "@emotion/styled";

import Header from "./header";
import "./layout.css";

/**
 * my color scheme:
 * #283d3b gunmetal
 * #197278 skobeloff
 * #edddd4 champagne pink
 * #c44536 madder lake
 * #772e25 liver(organ)
 */

const ContentDiv = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
  color: #197278;
  & a {
    color: #c44536;
    &:hover {
      color: #772e25;
    }
  }
`;

const Footer = styled.footer`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  font-size: 11px;
  margin-top: 40px;
`;

const LayoutContainer = styled.div`
  background-color: #edddd4;
  min-height: 100vh;
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <LayoutContainer>
        <Header siteTitle={data.site.siteMetadata.title} />
        <ContentDiv>
          <main>{children}</main>
        </ContentDiv>
        <Footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Footer>
      </LayoutContainer>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
