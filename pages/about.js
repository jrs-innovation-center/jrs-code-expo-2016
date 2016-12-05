import React from 'react'
import Head from 'next/head'
export default () => (

<div className="pa3 pa5-ns">
  <Head>
    <meta name="viewport" content="inital-scale=1.0, width=device-width" />
    <link rel="stylesheet" href="https://unpkg.com/tachyons@4.5.5/css/tachyons.min.css"/>
  </Head>

<h1 className="mt2 mb0 baskerville i fw1 f1">Welcome to Chris Cleans 4u!</h1>
  <h2 className="mt2 mb0 f6 fw4 ttu tracked">Let Chris do the cleaning for you!</h2>
    <p className="measure lh-copy">Chris Cleans 4u is the perfect cleaning app for you and your customers.
    </p>
    <img src="/static/cleaning-emoji.jpg" />
</div>
)
