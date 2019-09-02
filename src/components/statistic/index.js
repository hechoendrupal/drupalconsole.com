import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Statistics = () => {

  const { statistic } = useStaticQuery(
    graphql`
      query {
        statistic {
          id
          contributors
          dependents
          downloads_packagist
          favers
          forks
          downloads_phar
          downloads_total
          latest_release
          open_issues
          stars
          watchers
        }
      }
    `
  )

  return (
    <div className="container">
      <p>Forks: {statistic.forks} </p>
      <p>Contributors: {statistic.contributors}</p> 
      <p>Downloads: {statistic.downloads_total}</p>
      <p>Release: {statistic.latest_release}</p>
    </div>
  )
}

export default Statistics;
