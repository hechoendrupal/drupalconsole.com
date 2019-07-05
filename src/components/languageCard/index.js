import React from "react"
import './style.css';
import {Link} from "gatsby";
import _capitalize from "lodash/capitalize"
import Image from "../../layout/image"

const LanguageCard = ({ data }) => {
  return (
    <div className="container">
      <div className="row">
        {data.map(item => {
          return (
            <div key={item.node.id} className="card">
              <Link to={`/docs/${item.node.id}/`}>
                <div className="card-body">
                  <div className="card-image">
                    <Image path={`flags/${item.node.slug}.png`} className="card-title rounded-circle w-100px" alt={item.node.slug} />
                  </div>
                  <div className="card-text">
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
