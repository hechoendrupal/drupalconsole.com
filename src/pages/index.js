import React from "react"
import { Link } from "gatsby"

import Layout from "../layout/layout"

import Statistics from "../components/statistic"
import Maintainers from "../components/maintainers"
import Hero from '../components/hero';

const IndexPage = () => (
  <Layout>
    <Hero />
    <Statistics />
    <main className="main-content">
        <div className="container">
          <div className="col-md-1 col-xl-12">
            <section className="row text-center justify-content-center py-4">
              <h2 className="col-md-12">Work Faster and Smarter.</h2>
              <div className="col-md-8"><p>Drupal Console takes advantage of the Symfony Console and other well-known third-party components like Twig, Guzzle, and Dependency Injection among others. ​​​​​​​​​​​​​​</p></div> 
            </section>
            <hr />

            <section className="row text-center justify-content-center py-4">
              <div className="col-md-8"><p>The Drupal Console is being maintained by 3 team leaders and a great community of volunteers that help with anything from bug reporting, translating, documentation and improving the codebase.</p></div> 
            </section>
            <section>
              <Maintainers />
            </section>
          </div>
        </div>
    </main>
  </Layout>
)

export default IndexPage
