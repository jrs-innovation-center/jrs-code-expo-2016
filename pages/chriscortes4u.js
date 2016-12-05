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
  <div class="tc mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
    <div class="tc">
      <img class="tc br-100 h4 w4 dib ba b--black-05 pa2" src="https://www.stevensegallery.com/146/146" />
        <h1 className="tc f3 mb2">Chris Cortes</h1>
        <h2 className="tc f5 fw4 gray mt0">JRS CODING SCHOOL</h2>
        <h3 className="tc f5 fw4 gray mt0">Final Project</h3>
    </div>
  </div>

    <h1 className="fw6 f3 f2-ns lh-title mt0 mb3">Chris Cleans 4u</h1>
    <p className="tc">Chris Cleans 4u is the perfect app for you and your customers.</p>
      <div className="fw1 f5 mt0 mb3">Click <Link href="/about"><a>here</a></Link> to read more</div>
    <img src="/static/circleClean.png" />
</div>
)
