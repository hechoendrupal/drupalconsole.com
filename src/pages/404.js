import React from "react"

import { Link } from "gatsby"

import Layout from "../layout/layout"
import SEO from "../components/seo"


const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <main className="main-content">
      <div className="container">
        <div className="col-md-12 col-xl-12">
          <h1 className="text-center py-5">PAGE NOT FOUND</h1>
          <section className="text-center">
            <p>You just hit a route that doesn&#39;t exist but ... you can try generating the missing page</p>
          </section>
          <section className="text-center">
          <code>
            drupal generate:controller
          </code>
          </section>
          <section className="text-center">
          <p>
            <br/>
            Well not really since this is a GatsbyJS and not a Drupal site.
          </p>
          <p>
            But you can <Link to="/support">contact support</Link> and ask for help.
          </p>
          </section>
        </div>
      </div>
    </main>
  </Layout>
)

export default NotFoundPage
