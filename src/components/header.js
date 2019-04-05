// import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { TiSocialGithub } from "react-icons/ti";

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#edddd4`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }} >
        <a
          className="h-card"
          rel="me"
          replace={true}
          href="http://www.whatsnextforkev.in/"
          style={{
            color: `#197278`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </a>
        <a href="https://github.com/kevdez" rel="me">
          <TiSocialGithub color="#283d3b" />
        </a>
      </h1>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
