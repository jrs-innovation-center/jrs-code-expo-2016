import React from 'react'
import Head from 'next/head'

const jsbilton = React.createClass({
  render() {
    return (
      <div className="pa4">
        <Head>
          <title>MishMash</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="stylesheet" href="https://unpkg.com/tachyons@4.5.5/css/tachyons.min.css" />
        </Head>
        <body className="fw1 san francisco white-70 bg-black">
          <div>
            <div>
              <img
                className="br-100 fr-ns"
                src="/static/JaredBilton.jpg" />
                <span className="fw1 san francisco fr-ns">Jared Bilton</span>
            </div>
            <h1 className="fw1 san francisco">MishMash</h1>
            <h2 className="fw1 san francisco">Final Project for JRS Coding School</h2>
            <p>A restaurant locator application to be used from the convenience of your handheld mobile device.</p>
          </div>
          <div>
            <h4 className="fw1 san francisco">User Stories</h4>
            <ul className="fw1 san francisco list">
              <li>Create a network of individuals to join you for lunch</li>
              <li>Give each network a name</li>
              <li>Manage your network or networks to include appropriate people</li>
              <li>Choose a default network</li>
              <li>We can leverage OpenTable for restaurant data</li>
              <li>The user can select favorite restaurants by shaking device or simply pressing search</li>
              <li>Check-in to restaurants</li>
              <li>Rate the restaurant</li>
              <li>While inside restaurant card, can add to list of favs</li>
              <li>While inside restaurant card, can choose to block restaurant</li>
              <li>Application can text friends in a session which restaurant has been chosen</li>
              <li>Up-vote and down-vote restaurants randomly selected by MishMash</li>
            </ul>
          </div>
          <div className="centered-container">
            <h3 className="fw1 san francisco">Technologies</h3>
              <ul className="fw1 san francisco list">
                <li>JavaScript</li>
                <li>React</li>
                <li>CouchDB</li>
                <li>NodeJS</li>
                <li>ExpressJS</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Tachyons</li>
                <li>Bootstrap</li>
              </ul>
          </div>
          <nav className="db dt-l w-100 border-box pa3 ph5-l">
            <a className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l" href="#" title="Home">
              <img src="https://www.cleardb.com/images/jackhq-logo.png" className="dib w2 h2 br-100" alt="Site Name" />
            </a>
            <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
              <a className="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="#" title="Home">Home</a>
              <a className="link dim dark-gray f6 f5-l dib" href="#" title="Contact">Contact</a>
            </div>
          </nav>
        </body>
      </div>
    )
  }
})

module.exports = jsbilton
