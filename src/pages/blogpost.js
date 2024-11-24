import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const BlogList = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <main>
        <h1>Blog Posts</h1>
        <ul>
          {posts.map(({ node }) => (
            <li key={node.fields.slug}>
              <a href={node.fields.slug}>{node.frontmatter.title}</a>
              <p>{node.frontmatter.date}</p>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`;

export default BlogList;
