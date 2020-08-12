import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

export const imageQuery = graphql`
  query MyQuery {
    file(relativePath: { eq: "404.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const PageNotFound = ({ data }) => {
  return (
    <Layout>
      <Img alt="" fluid={data.file.childImageSharp.fluid} />
    </Layout>
  );
};

export default PageNotFound;