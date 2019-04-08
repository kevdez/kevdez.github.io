// import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "@emotion/styled";
import { TiSocialGithub, TiSocialLinkedin } from "react-icons/ti";

const StyledHeader = styled.header`
  background-color: #c44536;
  margin-bottom: 1.45rem;
`;

const StyledDiv = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  display: flex;
  height: 70px;
  align-items: center;
  justify-content: space-between;
`;

const StyledH1 = styled.h1`
  margin: 0;
  height: 28px;
  font-size: 28px;
  & a {
    color: #283d3b;
    &:hover {
      color: #197278;
    }
  }
`;
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const IconLink = styled.a`
  display: flex;
  align-items: center;
  margin-left: 15px;
`;

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <StyledDiv>
      <StyledH1>
        <a className="h-card" rel="me" href="http://www.whatsnextforkev.in/">
          {siteTitle}
        </a>
      </StyledH1>
      <IconContainer>
      <IconLink href="https://github.com/kevdez" rel="me">
        <TiSocialGithub size="26" color="#283d3b" />
      </IconLink>
      <IconLink href="https://www.linkedin.com/in/kevdez/">
        <TiSocialLinkedin size="26" color="#283d3b" />
      </IconLink>
      </IconContainer>
    </StyledDiv>
  </StyledHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
