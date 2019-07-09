import React from "react"
import { Link } from "gatsby"

import Layout from "../layout/layout"

const IndexPage = () => (
  <Layout>
    <main className="main-content">
        <div className="container">
          <div className="row">
            <div className="col-md-1 col-xl-12">
              <h1>DrupalConsole.com</h1>
              <ul>
                <li>
                  <Link to="/docs">Docs</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
  </Layout>
)

export default IndexPage
