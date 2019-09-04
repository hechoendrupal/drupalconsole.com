import React from 'react';
import { useStaticQuery, graphql, Link } from "gatsby";
import slugify from "slugify";
// import PropTypes from 'prop-types';
import RadarList from '../radar-list';

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
    <div className="my-4">
      <h2>Changelog</h2>
      <div className="row">
        <div className="last-entry col-8">
          <h4 >{lastEntry.node.frontmatter.title}</h4>
          <p className="text-light"><small>Released on {lastEntry.node.frontmatter.date}</small></p>
          <p>{lastEntry.node.excerpt}</p>
          <Link to={`/changelog/#${slugLastEntry}`}>Read more</Link>
        </div>
        <aside className=" col-4" >
          <h6 className="sidebar-title">Drupal Consol radar</h6>
          <RadarList />
        </aside>
      </div>
    </div>
  );
};

ChangelogPreview.propTypes = {

};

export default ChangelogPreview;