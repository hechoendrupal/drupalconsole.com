import React from "react"
import { Link } from "gatsby"

import Layout from "../layout/layout"

import Statistics from "../components/statistic"
import Maintainers from "../components/maintainers"

const IndexPage = () => (
  <Layout>
    <main className="main-content">
        <div className="container">
          <div className="col-md-1 col-xl-12">
            <h1>DrupalConsole.com</h1>
            <ul>
              <li>
                <Link to="/docs">Docs</Link>
              </li>
              <li>
                <Link to="/contributors">Contributors</Link>
              </li>
            </ul>
            <Statistics />
            <hr />
            <section>
              <h2>Work Faster and Smarter.</h2>
              Drupal Console takes advantage of the Symfony Console and other well-known third-party components like Twig, Guzzle, and Dependency Injection among others. ​​​​​​​​​​​​​​
            </section>
            <hr />
            <section>
              The Drupal Console is being maintained by 3 team leaders and a great community of volunteers that help with anything from bug reporting, translating, documentation and improving the codebase.
            </section>
            <section>
              <Maintainers />
              <Link to="/contributors">
                See full list of contributors
              </Link>
            </section>
          </div>
        </div>
    </main>
  </Layout>
)

export default IndexPage
