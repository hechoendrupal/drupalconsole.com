import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../layout"
import Sidebar from "../../components/sidebar"
import LanguageSwitcher from "../../components/languageSwitcher"

import _find from "lodash/find"
import _isEqual from "lodash/isEqual"
import _isUndefined from "lodash/isUndefined"

const TemplateLayout = ({children, items, context, addRTL}) =>  {
  const { allLanguagesYaml } = useStaticQuery(
    graphql`
      query {
        allLanguagesYaml {
          edges {
            node {
              id
              direction
            }
          }
        }
      }
    `
  )

  const defaultLangauge = _find(allLanguagesYaml.edges, (item) => {return _isEqual(item.node.id, context.language)})
  const rtl = defaultLangauge && defaultLangauge.node.direction === "rtl";

  return (
    <Layout>
      <main className="main-content">
        <div className="container">
          <div className="row">
            <LanguageSwitcher
              language={context.language}
              activePage={context.slug}
              rtl={rtl}
            />
          </div>
          <div className="row">
          {rtl ?
            <React.Fragment>
                <div className={`col-md-7 col-xl-8 ml-md-auto py-8 ${(rtl && _isUndefined(addRTL)) && 'rtl'}`}>
                  {children}
                </div>
                <div className="col-md-4 col-xl-3">
                  <Sidebar
                    items={items}
                    language={context.language}
                    activePage={context.slug}
                    rtl={rtl}
                  />
                </div>
            </React.Fragment>
          :
            <React.Fragment>
                <div className="col-md-4 col-xl-3">
                  <Sidebar
                    items={items}
                    language={context.language}
                    activePage={context.slug}
                    rtl={rtl}
                  />
                </div>
                <div className="col-md-7 col-xl-8 ml-md-auto py-8">
                  {[children, ...rtl]}
                </div>
            </React.Fragment>
          }
          </div>
        </div>    
      </main>
    </Layout>
  )
}

export default TemplateLayout
