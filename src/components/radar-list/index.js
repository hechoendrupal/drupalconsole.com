import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from "gatsby";
import './style.css';

const RadarList = props => {
  const { allResourcesYaml } = useStaticQuery(
    graphql`
      query {
        allResourcesYaml {
          edges {
            node {
              id
              link
              source
              title
            }
          }
        }
      }
    `
  );

  return (
    <ul className="nav nav-sidebar nav-sidebar-pill radar">
      {allResourcesYaml.edges.map( (resource, key) => {
        return (
          <li className="nav-item" key={resource.node.id}>
            <a className="nav-link" href={resource.node.link}>{resource.node.title}</a>
            <span className="source">{resource.node.source}</span>
          </li>
        )
      })}
    </ul>
  );
};

RadarList.propTypes = {
  list: PropTypes.object,
};

export default RadarList;