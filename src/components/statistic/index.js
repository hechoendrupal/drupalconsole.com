import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import './style.css';

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
    <div className="container py-9">
      <div className="row text-center">
        <div className="col-md-3">
          <p>
            <i className="fas fa-code-branch highlight__icon"></i>
          </p>
          <h2 className="fw-500 my-4">{statistic.forks}</h2>
          <h4 className="mb-0">Forks</h4>
        </div>

        <div className="col-md-3">
          <p>
            <i className="fas fa-user-friends highlight__icon"></i>
          </p>
          <h2 className="fw-500 my-4">{statistic.contributors}</h2>
          <h4 className="mb-0">Contributors</h4>
        </div>

        <div className="col-md-3">
          <p>
            <i className="fas fa-cloud-download-alt highlight__icon"></i>
          </p>
          <h2 className="fw-500 my-4">{statistic.downloads_total}</h2>
          <h4 className="mb-0">Downloads</h4>
        </div>

        <div className="col-md-3">
          <p>
            <i className="fas fa-birthday-cake highlight__icon"></i>
          </p>
          <h2 className="fw-500 my-4">1.9.2</h2>
          <h4 className="mb-0">{statistic.latest_release}</h4>
        </div>
      </div>
    </div>
  )
}

export default Statistics;
