const React = require('react')
import Head from 'next/head'

const kendsdavs = React.createClass({
  render() {
    return (
      <div>
        <Head>
          <title>My page title</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="stylesheet" href="https://unpkg.com/tachyons@4.5.5/css/tachyons.min.css"/>
        </Head>
        <header className="tc pa3">
          <img src="https://s-media-cache-ak0.pinimg.com/736x/07/c3/45/07c345d0eca11d0bc97c894751ba1b46.jpg" className="br3 ba b--black-10 h5 w5" alt="avatar" />
          <h1 className="f5 f4-ns fw6 black-70">Kendra Davis</h1>
          <h2 className="f6 black-70 fw2 ttu tracked">JRS Code School Final Project</h2>
        </header>
        <article className="pa1 pa1-ns bg-light-gray">
          <h1 className="f4 f2-m f1-l tc">Pet Health Partners</h1>
            <h3 className="tc">Partner Together for Healthy Pets</h3>
            <hr />
            <article className="cf pa4">
              <div className="fl w-100 w-50-ns bg-near-white tc">
                <h1>Vetrinary Professionals</h1>
                <ul className="list pl0 ml0 center mw6 ba b--light-silver br2">
                  <li className="ph3 pv3 bb b--light-silver">View and update a complete list of of Pet's Health Record</li>
                  <li className="ph3 pv3 bb b--light-silver">Add vaccination to pet profile with a touch of a button</li>
                  <li className="ph3 pv3 bb b--light-silver">Remind owners of upcoming appointments via text message</li>
                </ul>
              </div>
              <div className="fl w-100 w-50-ns bg-light-gray tc">
                <h1>Pet Owners</h1>
                  <ul className="list pl0 ml0 center mw6 ba b--light-silver br2">
                    <li className="ph3 pv3 bb b--light-silver">Update information about your pet to share with your vet</li>
                    <li className="ph3 pv3 bb b--light-silver">A glossary of medical terms to consult</li>
                    <li className="ph3 pv3 bb b--light-silver">View a complete Pet Health History</li>

                  </ul>
              </div>
            </article>
      </article>
    </div>
    )
  }
})

module.exports = kendsdavs
