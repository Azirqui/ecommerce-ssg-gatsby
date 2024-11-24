import React from "react";
import { Link } from "gatsby";
import { graphql } from "gatsby";
const HomePage = ({data}) => (
  <main>
    <h1>{data.site.siteMetadata.title}</h1>
    <p>{data.site.siteMetadata.description}</p>
    <Link to="/about">Go to About Page</Link>
    <br />
    <Link to="/blogpost">Go to BlogPost Page</Link>

  </main>
);

export default HomePage;


export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;