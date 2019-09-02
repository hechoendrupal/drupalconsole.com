import React from "react"
import Layout from "../layout/layout"
import Maintainers from "../components/maintainers"
import Contributors from "../components/contributors"

const ContributorsPage = () => {

  return (
    <Layout>
      <main className="main-content">
          <div className="container">

              <header className="header"  style={ { backgroundColor: '#f1f6fa'} }>
                <div className="container">
                  <h1>Contributors</h1>
                  <p className="lead">
                    The Drupal Console is being maintained by 3 team leaders and a great community of volunteers that help with anything from bug reporting, translating, documentation and improving the codebase.
                  </p>
                </div>
              </header>

              <div className="col-md-12 col-xl-12">
                <h2 className="text-center">The core team</h2>
                <Maintainers />
                <hr />
                <h2 className="text-center" >The amazing community of contributors</h2>
                <Contributors />
              </div>

          </div>
        </main>
    </Layout>
  )
}

export default ContributorsPage
