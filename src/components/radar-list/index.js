import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const RadarList = props => {
  const {list} = props;
  return (
    <ul className="nav nav-sidebar nav-sidebar-pill radar">
      {list.edges.map( (resource, key) => {
        return (
          <li className="nav-item" key={resource.node.id}>
            <a className="nav-link" href={resource.node.link}>{resource.node.title}</a>
            <p className="source">{resource.node.source}</p>
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