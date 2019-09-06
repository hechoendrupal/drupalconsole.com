import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Releases = ({version}) => {
  const { allRelease } = useStaticQuery(graphql`
    query {
      allRelease {
        edges {
          node {
            id
            repo
            tag_name
            body
            html_url
          }
        }
      }
    }
  `)

  return (

    allRelease.edges && (
      allRelease.edges.map(({node}) => {

        if (node.tag_name !== version) {
          return (<React.Fragment key={node.id}></React.Fragment>)
        }

        return (
          <React.Fragment key={node.id}>
            <h4><a href={node.html_url} target="_blank" rel="noopener noreferrer">{node.repo}</a></h4>
            <pre>
              {node.body}
            </pre>
          </React.Fragment>
        )
      })
    )
  )
}

export default Releases
