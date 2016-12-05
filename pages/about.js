import React from 'react'
import Head from 'next/head'
export default () => (

<div className="pa3 pa5-ns">
  <Head>
    <meta name="viewport" content="inital-scale=1.0, width=device-width" />
    <link rel="stylesheet" href="https://unpkg.com/tachyons@4.5.5/css/tachyons.min.css"/>
  </Head>

<h1 className="tc mt2 mb0 baskerville i fw1 f1">Welcome to Chris Cleans 4u!</h1>
  <h2 className="tc mt2 mb0 f6 fw4 ttu tracked">Let Chris do the cleaning for you!</h2>
  <nav className="bt bb tc mw7 center mt4">
  <a className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l" href="/chriscortes4u">Home</a>
  <a className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l" href="/history">History</a>
  <a className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l" href="/packages">Packages</a>
  <a className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l" href="/referrals">Referrals</a>
  <a className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l" href="/contact">Contact</a>
</nav>
</div>
)
