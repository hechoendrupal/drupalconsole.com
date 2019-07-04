import React from "react"
import './style.css';
import {Link} from "gatsby";
import _capitalize from "lodash/capitalize"

const LanguageCard = ({ data }) => {
  return (
    <div className="container">
      <div className="row">
        {data.map(item => {
          return (
            <div className="card">
              <Link key={item.node.id} to={`/docs/${item.node.id}/`}>
                <div className="card-body">
                  <img src={`/content/assets/flags/${item.node.slug}.png`} className="card-title rounded-circle" alt="Circle image"/>
                  <div className="card-text">
                    <p>{_capitalize(item.node.slug)}</p>
                    <p><strong>{item.node.name}</strong></p>
                  </div>
                  {item.node.authors && (
                    item.node.authors.map(author => {
                      return (
                        <React.Fragment key={author.id}>
                          {author.github_avatar && <img src={author.github_avatar} className="author-avatar rounded-circle" alt="Circle image"/>}
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
