import React from "react"

const Table = ({ messages, data, isOption }) => {

  return (
    <table className="table table-bordered table-striped">
      <thead>
        <tr className="d-flex">
          <th className="col-md-6 col-xl-6"><strong>{isOption ? messages.option : messages.argument}</strong></th>
          <th className="col-md-6 col-xl-6"><strong>{messages.details}</strong></th>
        </tr>
      </thead>
      <tbody>
        {data.map((command, i) => {
          return (
            <tr className="d-flex" key={i}>
              <td className="col-md-6 col-xl-6">
                <p>{isOption ? `--${command.name}`: command.name}</p>
              </td>
              <td className="col-md-6 col-xl-6">
                <p>{command.description}</p>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Table;
