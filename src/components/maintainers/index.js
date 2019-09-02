import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import './style.css';

const Maintainers = () => {

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
      <div className="row justify-content-center">
        {maintainers.edges.map(item => {
          return (
            <div key={item.node.id} className="card-maintainer bl-1 br-1 bt-1 bb-1 hover-shadow-9">
              <a href={item.node.html_url} target="_blank" rel="noopener noreferrer">
                <div className="card-body text-center">
                  <div className="card-image">
                    <img src={item.node.avatar_url} className="card-title rounded-circle w-200px" alt={item.node.login} />
                  </div>
                  <div className="card-text fs-15 lh-1">
                    <i className="fa fa-github"></i>
                    <span>{` ${item.node.login} `}</span>
                  </div>
                </div>
              </a>
            </div>
          )
        })}
      </div>
      <div className="row text-center justify-content-center py-4">
        <Link className="btn btn-md btn-primary" to="/contributors">
          <i class="fas fa-users"></i>  See full list of contributors
        </Link>
      </div>
    </div>
  )
}

export default Maintainers;
