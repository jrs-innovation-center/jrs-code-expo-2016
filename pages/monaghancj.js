const React = require('react')
import Head from 'next/head'

const Monaghancj = React.createClass({
  render() {
    return (
      <div>
        <Head>
          <title>Cameron's LunchIt!</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="stylesheet" href="https://unpkg.com/tachyons@4.5.5/css/tachyons.min.css"/>
        </Head>
        <body className="helvetica w-75-ns center bg-washed-green">
          <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
            <div className="tc">
              <img src="http://www.fillmurray.com/200/200" className="br-100 h4 w4 dib ba b--black-05 pa2" title="Kitty staring at you" />
              <h1 className="f3 fw2 mb2">Cameron Monaghan</h1>
              <h2 className="f5 fw4 gray mt0">Full Stack Developer</h2>
            </div>
          </article>
          <div className="dib fw3 lh-copy f4 gray">
            <h1 className=" f1-l lh-title">LunchIt!</h1>
            <div className="pr2 fl w-50">
              <h3 className="light-green fw4">Elevator Pitch</h3>
              <p> A progressive web application (PWA) that takes the hassle out of deciding where to eat for lunch.
                Simply shake your phone and LunchIt! will pick the best place to eat lunch based upon preferences and history.
                Easily access restaurant information and create reservations. </p>
            </div>
            <div className="pl2 fl w-50">
              <h3 className="light-green fw4">High Level Process</h3>
              <p><span className="dark-green">Create Circle</span> - Create and mange your circle of lunch friends.</p>
              <p><span className="dark-green">Discover</span> - Integration with OpenTable makes it easy to discover the best places to eat. Built in maps make it easy to find the coolest new places.</p>
              <p><span className="dark-green">Pick your favs</span> - Build and manage your list of favorite restaurants.</p>
              <p><span className="dark-green">Shake</span> - Shake the app to start a session. Let LunchIt! pick the best place to eat based upon your circle's preferences.</p>
              <p><span className="dark-green">Rate</span>- LaunchIt knows when its time to rate your dining experience. Your preferences are saved to your favs for future LunchIt! sessions.</p>
            </div>
          </div>
        </body>
      </div>

    )
  }
})

module.exports = Monaghancj
