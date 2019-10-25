import React from "react"
import Layout from "../layout/layout"
import Maintainers from "../components/maintainers"
import Contributors from "../components/contributors"
import Hero from '../components/hero';

const ContributorsPage = () => {

  return (
    <Layout title="Contributors">
      <Hero innerSize="py-7">
        <h1>Contributors</h1>
        <p className="lead">
          The Drupal Console is being maintained by 3 team leaders and a great community of volunteers that help with anything from bug reporting, translating, documentation and improving the codebase.
        </p>
      </Hero>
      <main className="main-content">
          <div className="container">
              <div className="col-md-12 col-xl-12">
                <Maintainers />
                <h2 className="text-center my-6" >The amazing community of contributors</h2>
                <Contributors />
              </div>
          </div>
        </main>
    </Layout>
  )
}

export default ContributorsPage
