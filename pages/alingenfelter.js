import React from 'react'
import Head from 'next/head'

export default () => (
<div className="mw8 center ph3 ph5-ns tc br2 pv.5 bg-light-gray dark-blue mb1">
    <Head>
      <title>Andrea Lingenfelter (alingenfelter)</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://unpkg.com/tachyons@4.5.5/css/tachyons.min.css"/>
    </Head>
    <header className="page-header bg-dark-blue light-gray">
        <h1>Andrea Lingenfelter</h1>
    </header>

  <article className="mw5 center bg-light-gray br3 pa3 pa4-ns mv3 ba b--black-10">
      <div className="dib">
          <img src="/static/Andrea/andrea2.jpg" className="dib ba b--black-05 pa2" />
      </div>
      <div className='dib ba pa3'>
      <p class="lh-copy measure center f6 black-70">
      Working with developers as a Business Analyst and Project Manager, I was asking
      questions about how things worked and why they did things the way they did. After taking a few development
      classes and online tuturials, I signed up for the JRS IC Code Camp.
      </p>
      </div>
  </article>
  <hr />
    <div>
      <h4 className='db'>Vehicle Repair Records Project</h4>
      <p>
        Did I replace the starter to the solenoid?  What about the voltage regulator? Which car did I replace the battery on last year?
        When was the oil last changed?  Maintaining cars, whether performing the work yourself or visiting mechanics, keeping track of repairs
        and maintenace is challenging!  Instead of keeping a file of paperwork and digging through it to answer these questions, the vehicle repair app
        allows users to track this information and easily answer these questions.
        Using Javascript, React, and CouchDB, the Vehicle Repair Records app is a single page web app that allows
        users to easily track maintenance and repairs to their vehicles, whether they perform the work themselves or use a mechanic.
        Users set up their vehicles in the app, then record details about repairs and maintenance.
      </p>
    </div>
    <hr />
    {/* <div>
      <h5>Other Projects</h5>
      <p><ul>
        <li>Minesweeper</li>
        <li>Leveraging APIs</li>
      </ul></p>
    </div>

    <hr /> */}
    <footer className='page-footer bg-light-gray light-gray'>
      <p className='tc'>
        <a href='https://www.linkedin.com/in/andrealingenfelter'>LinkedIn</a>
        <br />
        <a href='https://github.com/alingenfelter'>GitHub</a>
      </p>
    </footer>
  </div>
)
