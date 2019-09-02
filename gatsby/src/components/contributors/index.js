import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import './style.css';

const Contributors = () => {

  const { contributors } = useStaticQuery(
    graphql`
      query {
        contributors: allContributor(
          sort: {fields: contributions, order: DESC}, 
          filter: {login: {nin: ["jmolivas", "enzolutions", "omero"]}}
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
        {contributors.edges.map(item => {
          return (
            <div key={item.node.id} className="card-contributor bl-1 br-1 bt-1 bb-1 hover-shadow-9">
              <a href={item.node.html_url} target="_blank" rel="noopener noreferrer">
                <div className="card-body text-center">
                  <div className="card-image">
                    <img src={item.node.avatar_url} className="card-title rounded-circle w-100px" alt={item.node.login} />
                  </div>
                  <div className="card-text fs-15 lh-1">
                    <i class="fa fa-github"></i>
                    <span>{` ${item.node.login} `}</span>
                  </div>
                </div>
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Contributors;
