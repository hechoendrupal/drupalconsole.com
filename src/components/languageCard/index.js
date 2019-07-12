import React from "react"
import './style.css';
import {Link} from "gatsby";
import _capitalize from "lodash/capitalize"
import Image from "../../layout/image"

const LanguageCard = ({ data }) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        {data.map(item => {
          return (
            <div key={item.node.id} className="card bl-1 br-1 bt-1 bb-1 hover-shadow-9">
              {/* <Link to={`/docs/${item.node.id}/`}> */}
              <Link to={`${item.node.id}`}>
                <div className="card-body text-center">
                  <div className="card-image">
                    <Image path={`flags/${item.node.slug}.png`} className="card-title rounded-circle w-100px" alt={item.node.slug} />
                  </div>
                  <div className="card-text fs-15 lh-1">
                    <span>{_capitalize(item.node.name)} ({item.node.id})</span>
                  </div>
                  {item.node.authors && (
                    item.node.authors.map(author => {
                      return (
                        <React.Fragment key={author.id}>
                          {author.github_avatar && <img src={author.github_avatar} className="author-avatar rounded-circle" alt={author.name}/>}
                        </React.Fragment>
                      )
                    })
                  )}
                </div>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default LanguageCard;
