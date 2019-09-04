import React from "react"
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import './style.css';

const Maintainers = (props) => {

  const { maintainers } = useStaticQuery(
    graphql`
      query {
        maintainers: allContributor(
          sort: {fields: contributions, order: DESC}, 
          filter: {login: {in: ["jmolivas", "enzolutions", "omero"]}}
        ) {
          edges {
            node {
              id
              login
              avatar_url
              html_url
              contributions
            }
          }
        }
      }
    `
  )

  return (
    <div className="container">
      <div className="row justify-content-center pt-6">
        {maintainers.edges.map(item => {
          return (
            <div key={item.node.id} className="card-maintainer col-3 card px-2 py-2 shadow-11 hover-shadow-9 text-default border">
              <div className="card-body text-center">
                <div className="card-image">
                  <img src={item.node.avatar_url} className="card-title rounded-circle w-200px" alt={item.node.login} />
                </div>
                <div className="card-title">
                  <span>{` ${item.node.login} `}</span>
                </div>
                <div className="card-text row">
                  <a href={item.node.html_url} target="_blank" rel="noopener noreferrer" className="col"><i className="fab fa-github maintainer__icon"></i></a>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      {props.showListLink && <div className="row text-center justify-content-center py-4">
        <Link className="btn btn-md btn-primary" to="/contributors">
          <i className="fas fa-users"></i>  See full list of contributors
        </Link>
      </div>}
    </div>
  )
}

Maintainers.propTypes = {
  showLinkList: PropTypes.bool,
};
export default Maintainers;
