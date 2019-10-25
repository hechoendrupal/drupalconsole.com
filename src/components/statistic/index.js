import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FaCodeBranch, FaUserFriends, FaCloudDownloadAlt, FaBirthdayCake } from "react-icons/fa";
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
      <div className="row justify-content-center text-center">
        <div className="statistic col-12 col-md-3">
          <p>
            <FaCodeBranch className="highlight__icon"/>
          </p>
          <h2 className="fw-500 my-4">{statistic.forks}</h2>
          <h4 className="mb-0">Forks</h4>
        </div>

        <div className="statistic col-12 col-md-3">
          <p>
            <FaUserFriends className="highlight__icon" />
          </p>
          <h2 className="fw-500 my-4">{statistic.contributors}</h2>
          <h4 className="mb-0">Contributors</h4>
        </div>

        <div className="statistic col-12 col-md-3">
          <p>
            <FaCloudDownloadAlt className="highlight__icon"/>
          </p>
          <h2 className="fw-500 my-4">{statistic.downloads_total.toLocaleString()}</h2>
          <h4 className="mb-0">Downloads</h4>
        </div>

        <div className="statistic col-12 col-md-3">
          <p>
            <FaBirthdayCake className="highlight__icon"/>
          </p>
          <h2 className="fw-500 my-4">{statistic.latest_release}</h2>
          <h4 className="mb-0">Release</h4>
        </div>
      </div>
    </div>
  )
}

export default Statistics;
