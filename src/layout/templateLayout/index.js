import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../layout"
import Sidebar from "../../components/sidebar"
import LanguageSwitcher from "../../components/language-switcher"

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
            <div className={`col-5 col-md-6 ${(rtl && _isUndefined(addRTL)) ? 'order-2 ':'order-1'}`}>
              <div className="d-block d-lg-none">
              <Sidebar
                items={items}
                language={context.language}
                activePage={context.slug}
                rtl={rtl}
                toDropDown
              />
              </div>
            </div>
            <div className={`col-7 col-md-6 ${(rtl && _isUndefined(addRTL)) ? 'order-1 ':'order-2'}`}>
              <LanguageSwitcher
                language={context.language}
                activePage={context.slug}
                rtl={rtl}
              />
            </div>
          </div>
          <div className="row">
            <div className={`col-lg-4 col-xl-3 d-none d-lg-block ${(rtl && _isUndefined(addRTL)) ? 'order-2 bl-1 pl-md-5':'br-1 pr-md-5'}`}>
              <Sidebar
                items={items}
                language={context.language}
                activePage={context.slug}
                rtl={rtl}
              />
            </div>
            <div className={`col-lg-8 col-xl-8 col-sm-12 ml-md-auto py-8 ${(rtl && _isUndefined(addRTL)) && 'rtl order-1'}`}>
              {children}
            </div>
          </div>
        </div>    
      </main>
    </Layout>
  )
}

export default TemplateLayout
