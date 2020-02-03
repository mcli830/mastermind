import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import NumberBlock from '../components/NumberBlock'
import ActionButton from '../components/ActionButton'

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" />
    <div className='container flex-column flex-fluid fill-width'>
      <div className='index-display flex-fluid'>
        Display
      </div>
      <div className='index-controls'>
        <div className='user-actions columns is-mobile'>
          {['History', 'Send', '...'].map((action, i) => (
            <div className='column is-one-third' key={i}>
              <ActionButton variant="primary" text={action} />
            </div>
          ))}
        </div>
        <div className='number-pad'>
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
    </div>
  </Layout>
)

export default IndexPage
