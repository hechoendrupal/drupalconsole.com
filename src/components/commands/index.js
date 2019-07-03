import React, { useState } from "react"
import './style.css';

const Commands = ({ data }) => {

  const [search, setSearch] = useState("")

  return (
    <div className="container col-md-12">
      <div className="form-group">
        <div className="input-group">
          {/* <div className="input-group-addon">
            <i className="fa fa-search" />
          </div> */}
          <input
            type="text"
            id="command-search"
            className="form-control"
            placeholder="Search DrupalConsole Commands"
            onChange={e => setSearch(e.target.value)}
            value={search}
          />
          {/* <div
            style={{ background: "#fff; cursor:pointer" }}
            className="input-group-addon"
            id="clear-filter"
            onClick={e => setSearch("")}
          >
            <span className="fa fa-times" />
          </div> */}
        </div>
      </div>

      <table className="table table-commands table-responsive table-bordered table-striped">
        <thead>
          <tr className="d-flex">
            <th className="col-md-6 col-xl-6">Command</th>
            <th className="col-md-6 col-xl-6">Usage</th>
          </tr>
        </thead>
        <tbody>
          {data.filter(command => {
              return command.name.indexOf(search) >= 0
            })
            .map((command, i) => {
              return (
                <tr className="d-flex" key={i}>
                  <td className="col-md-6 col-xl-6">
                    <strong className="command-name">{command.name}</strong>
                    <br />
                    <small>{command.description}</small>
                  </td>
                  <td className="col-md-6 col-xl-6">
                    <li className="command-usage">

                      <span style={{ whiteSpace: "pre-line" }}>
                        <small />
                        <br />
                        {command.examples && (
                          command.examples.map((example, i) => {
                            return (
                              <div key={i}>
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
  )
}

export default Commands;
