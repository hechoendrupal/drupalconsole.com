import React from "react"
import { Link } from "gatsby"

import Layout from "../layout/layout"

import Statistics from "../components/statistic"
import Maintainers from "../components/maintainers"
import Hero from '../components/hero';
import ChangelogPreview from '../components/changelog-preview';
import RadarList from '../components/radar-list';

const IndexPage = () => (
  <Layout>
    <Hero innerSize="py-6">
      <h1>Drupal Console</h1>
      <p className="lead">The Drupal CLI. A tool to generate boilerplate code, interact with and debug Drupal.</p>
      <br />
      <div>
        <Link to="/docs" className="btn btn-md btn-primary mr-3" href="#">Read the docs <i className="fas fa-book"></i></Link>
      </div>
    </Hero>
    <Statistics />
    <main className="main-content">
        <div className="container">
          <div className="col-md-12 col-xl-12">
            <section className="row text-center justify-content-center py-4">
              <h2 className="col-md-12">Work Faster and Smarter.</h2>
              <div className="col-md-8"><p>Drupal Console takes advantage of the Symfony Console and other well-known third-party components like Twig, Guzzle, and Dependency Injection among others. ​​​​​​​​​​​​​​</p></div> 
            </section>
            <hr />

            <section className="row text-center justify-content-center py-4">
              <div className="col-md-8"><p>The Drupal Console is being maintained by 3 team leaders and a great community of volunteers that help with anything from bug reporting, translating, documentation and improving the codebase.</p></div> 
            </section>
            <section>
              <Maintainers showLinkList />
            </section>
          </div>
          <hr/>
          <div className="my-4">
            <div className="row">
              <div className="last-entry col-md-8">
                <h2>Changelog</h2>
                <ChangelogPreview />
              </div>
              <aside className=" col-md-4" >
                <h3>Drupal Console Radar</h3>
                <RadarList />
              </aside>
            </div>
          </div>
        </div>
    </main>
  </Layout>
)

export default IndexPage
