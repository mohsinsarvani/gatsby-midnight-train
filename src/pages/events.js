import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const EventsPage = ({ data, location }) => {
  const content = data.content.edges[0].node;
  const { title } = content.frontmatter;

  return (
    <Layout location={location}>
      <SEO title={title} />

      <h2>{title}</h2>

      {/* eslint-disable-next-line react/no-danger */}
      <div dangerouslySetInnerHTML={{ __html: content.html }} />
    </Layout>
  );
};

EventsPage.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
};

export default EventsPage;

export const pageQuery = graphql`
  query {
    content: allMarkdownRemark(
      filter: { fields: { slug: { eq: "/pages/events/" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
          }
          html
        }
      }
    }
  }
`;
