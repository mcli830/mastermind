import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import NumberBlock from '../components/NumberBlock'

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" />
    <div className='container flex-column flex-fluid fill-width'>
      <div className='index-display flex-fluid'>
        Display
      </div>
      <div className='index-controls'>
        {[[1,2,3,4],[5,6,7,8]].map((row, rowIndex) => (
          <div className='columns is-mobile' key={rowIndex}>
            {row.map((val, i) => (
              <div className='column is-one-fourth' key={i}>
                <NumberBlock value={val + ''} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  </Layout>
)

export default IndexPage
