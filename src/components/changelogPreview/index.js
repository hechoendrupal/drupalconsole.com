import React from 'react';
import { useStaticQuery, graphql, Link } from "gatsby";
import slugify from "slugify";
// import PropTypes from 'prop-types';

const ChangelogPreview = props => {
  const { allChangelog } = useStaticQuery(
    graphql`
      query {
        allChangelog: allMdx(
            filter: {fileInfo: {sourceInstanceName: {eq: "changelog"}}}, 
            sort: {fields: frontmatter___date, order: DESC}
          ) {
          edges {
            node {
              id
              excerpt
              body
              frontmatter {
                title
                path
                redirect
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `
  );
  const lastEntry = allChangelog.edges[0];
  const slugLastEntry = slugify(lastEntry.node.frontmatter.title);
  return (
    <React.Fragment>
      <h4 >{lastEntry.node.frontmatter.title}</h4>
      <p className="text-light"><small>Released on {lastEntry.node.frontmatter.date}</small></p>
      <p>{lastEntry.node.excerpt}</p>
      <Link to={`/changelog/#${slugLastEntry}`}>Read more</Link>
    </React.Fragment>
  );
};

ChangelogPreview.propTypes = {

};

export default ChangelogPreview;