const React = require('react')
import Head from 'next/head'
import Link from 'next/link'


export default () => (

  <div className="mw7 center ph3 ph5-ns tc br2 pv5 bg-washed-green dark-green mb5">
    <Head>
      <title>Chris Cleans 4u</title>
      <meta name="viewport" content="inital-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://unpkg.com/tachyons@4.5.5/css/tachyons.min.css"/>
    </Head>

    <h1 className="fw6 f3 f2-ns lh-title mt0 mb3">Chris Cleans 4u</h1>
      <div className="fw1 f5 mt0 mb3">Click <Link href="/about"><a>here</a></Link> to read more</div>
    <img src="/static/circleClean.png" />
  </div>
)
