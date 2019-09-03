import React from "react"
// import { useStaticQuery, graphql, Link } from "gatsby"
import Hero from '../components/hero';
import Layout from "../layout/layout"

const SupportPage = () => {

  return (
    <Layout>
      <Hero innerSize="py-7">
        <h1>Need help or support?</h1>
        <p className="lead">
          Community and dedicated expert help is available for Drupal Console.
        </p>
      </Hero>
      <main className="main-content">
        <div className="container">
          <div className="col-md-12 col-xl-12">

            <div className="container">
              <div className="row justify-content-center pt-6">

                <div className="card-support col-6 card px-2 py-2 shadow-11 hover-shadow-9 shadow-9 text-default border">
                  <div className="card-body text-center">
                    
                    <div className="card-title">
                      <h4>Community Support</h4>
                    </div>

                    <div className="card-text row">
                      <span>An enthusiast community of contributors is ready to help you.</span>
                    </div>
                    <div className="card-text row">
                      <a href="https://app.slack.com/client/T06GX3JTS/C20LD4Z8S" target="_blank" rel="noopener noreferrer" className="col">
                        <i class="fab fa-slack"></i>
                      </a>
                      <a href="https://github.com/hechoendrupal/drupal-console/issues" target="_blank" rel="noopener noreferrer" className="col">
                        <i class="fab fa-github"></i>
                      </a>
                      <a href="https://gitter.im/hechoendrupal/DrupalConsole" target="_blank" rel="noopener noreferrer" className="col">
                        <i class="fab fa-gitter"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="card-support col-6 card px-2 py-2 shadow-11 hover-shadow-9 shadow-9 text-default border">
                  <div className="card-body text-center">
                    
                    <div className="card-title">
                      <h4>Dedicated Support</h4>
                    </div>

                    <div className="card-text row">
                      <span>
                        Commercial Support is provided by weKnow Inc. a group of experts in Drupal and Symfony. Their services include Training, Front-End / Back-End Development and Design/UXD.
                      </span>
                    </div>
                    <div className="card-text row">
                      <a className="btn btn-md btn-primary mr-3" href="https://weknowinc.com/contact"  target="_blank" rel="noopener noreferrer">Get Support</a>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
        <br />
      </main>
    </Layout>
  )
}

export default SupportPage
