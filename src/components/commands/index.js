import React, { useState } from "react"
import './style.css';
import {Link} from "gatsby";
import Autosuggest from "../autosuggest";
import _isEmpty from "lodash/isEmpty";

const Commands = ({ data, namespaces, language }) => {
  const [search, setSearch] = useState("")

  return (
    <div>
      <div className="form-group">
          <Autosuggest commands={namespaces.concat(data)} setSearch={setSearch} />
      </div>

      <div className="form-group">
        <table className="table table-commands table-bordered table-striped">
          <thead>
            <tr className="d-flex">
              <th className="col-md-6 col-xl-6">Command</th>
              <th className="col-md-6 col-xl-6">{_isEmpty(data) ? 'Usage' : data[0].messages.usage}</th>
            </tr>
          </thead>
          <tbody>
            {data.filter(command => {
                return command.name.indexOf(search) === 0
              })
              .map((command, i) => {
                return (
                  <tr className="d-flex" key={i}>
                    <td className="col-md-6 col-xl-6">
                      <strong className="command-name">
                        {/* <Link to={`/docs/${language}/commands/${command.dashed}`}>{command.name}</Link> */}
                        <Link to={`${language}/commands/${command.dashed}`}>{command.name}</Link>
                      </strong>
                      <br />
                      <small>{command.description}</small>
                    </td>
                    <td className="col-md-6 col-xl-6">
                      <li className="command-usage">
                        <span>
                          {!_isEmpty(command.examples) && (
                            <button 
                              className="btn btn-link font-weight-bold" 
                              type="button"
                              data-toggle="collapse"
                              data-target={`#${command.dashed}`}
                              aria-expanded="false"
                              aria-controls={command.dashed}
                            >
                              <span className="badge badge-secondary">
                                <i className="fa fa-expand" aria-hidden="true"></i>
                                <small>{` ${command.messages.examples}`}</small>
                                </span>
                            </button>
                          )}
                          {command.examples && (
                            command.examples.map((example, i) => {
                              return (
                                <div key={i} className="collapse" id={command.dashed}>
                                  <small>{example.execution}</small>
                                </div>
                              )
                            })
                          )}
                        </span>
                      </li>
                    </td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Commands;
