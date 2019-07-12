import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from "gatsby"

const Image = (props) => (

  <StaticQuery
    query={graphql`
      query {
        allFile(filter: {sourceInstanceName: {in: ["images", "assets"]}}) {
          edges {
            node {
              publicURL
              relativePath
            }
          }
        }
      }
    `}

    render={data => {
      const image = data.allFile.edges.find(
        edge => edge.node.relativePath === props.path
      )
      if (!image) {
        return null
      }
      // return <img src={image.node.publicURL} className={props.className} alt={props.alt}/>
      return <img src={image.node.publicURL.replace('/docs', '')} className={props.className} alt={props.alt}/>
    }}
  />
)

Image.propTypes = {
  path: PropTypes.string,
}

export default Image