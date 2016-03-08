import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={["whatsnextforkev.in", "application", "react", "kevdez"]}
    />
    <h1>What's next for Kevin</h1>
    <p>hi. the site is still under development</p>
    <div style={{ maxWidth: "300px", marginBottom: "1.45rem" }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
