import React from 'react'
import Head from 'next/head'
import {style, css} from 'next/css'


export default () => (
  <div {...pageStyle}>
    <Head>
      <title>Alex Boquist</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
      <link rel="stylesheet" href="/static/Alex/styles.css"/>
    </Head>
    <body {...bodyStyle}>
      <h1 className={logo} >INTOUCH</h1>
      <h2 className={subHeader}>Keep your bands team on the same page.</h2>
      <div className={featuresContainer}>
        <div className={feature}>Daysheets</div>
        <div className={feature}>Events</div>
        <div className={feature}>Task Management</div>
        <div className={feature}>Fan Analytics</div>
        <div className={feature}>MailChimp Integration</div>
        <button className={button} >TRY IT OUT</button>
        <p className={madeWith}>built with react, node, express, couchdb, d3, scss, & bootstrap</p>
      </div>
      <div className={footerContainer}>
        <h2 className={footerHeader}>some other projects:</h2>
        <div className={projectsContainer}>
          <a className={link} target="_blank" href="http://aplchian-minesweeper.surge.sh/">
            <div className={projectContainer}>
              <h3 className={projectTitle}>Minesweeper</h3>
              <p className={projectDesc} >react, redux, pouchdb</p>
            </div>
          </a>
          <a className={link} target="_blank" href="http://alikayarnell.com/">
            <div className={projectContainer}>
              <h3 className={projectTitle}>Alika Yarnell Blog(wip)</h3>
              <p className={projectDesc} >scss, js, ghost</p>
            </div>
          </a>
          <a className={link} target="_blank" href="http://aplchian-ttt.surge.sh/">
            <div className={projectContainer}>
              <h3 className={projectTitle}>Tic Tac Toe</h3>
              <p className={projectDesc} >js, hyperscript</p>
            </div>
          </a>
        </div>
        <a href="mailto:alex@aplchianmedia.com" className={footerLink}>alex.boquis@gmail</a>
        <a href="http://www.github.com/aplchian" target="_blank" className={footerLink}>http://www.github.com</a>
      </div>
    </body>
  </div>
)

const link = css({
  textDecoration: 'none'
})

const projectsContainer = css({
  marginBottom: '43px'
})

const footerLink = css({
  textAlign: 'center',
  display: 'block',
  fontFamily: 'AvenirNext-Medium',
  fontSize: '12px',
  color: '#000000',
  letterSpacing: '0.93px',
  textDecoration: 'underline',
  marginBottom: 2
})

const projectDesc = css({
  fontFamily: 'AvenirNext-Regular',
  fontSize: '12px',
  color: '#959595',
  letterSpacing: '0.93px',
  textAlign: 'center',
  borderBottom: '1px solid #D8D8D8'

})

const projectTitle = css({
  fontFamily: 'AvenirNext-Regular',
  fontSize: '14px',
  color: '#000000',
  letterSpacing: '1.08px',
  textAlign: 'center',
  margin: '7px 0 2px 0'
})

const projectContainer = css({
  width: '216px',
  display: 'block',
  margin: '0 auto'
})

const footerHeader = css({
  fontFamily: 'AvenirNext-Bold',
  fontSize: '14px',
  color: '#000000',
  letterSpacing: '1.08px',
  textAlign: 'center',
  margin: '0 0 20px 0'
})

const footerContainer = css({
  backgroundColor: 'white',
  padding: '25px 0'
})

const madeWith = css({
  fontFamily: 'AvenirNext-Medium',
  fontSize: '10px',
  color: '#A9A9A9',
  letterSpacing: '0.77px',
  textAlign: 'center',
  marginTop: '84px',
  margin: '84px 0 18px 0'
})

const button = css({
  height: '39px',
  width: '125px',
  background: '#FFFFFF',
  fontFamily: 'AvenirNext-Bold',
  fontSize: '14px',
  color: '#000000',
  letterSpacing: '1.08px',
  display: 'block',
  margin: '27px auto 0 auto',
  border: '1px solid black',
  transition: '0.3s ease',
  ':hover': {
    color: 'white',
    backgroundColor: 'black',
    border: '1px solid white'
  }

})

const feature = css({
  textAlign: 'center',
  fontFamily: 'AvenirNext-Regular',
  fontSize: '14px',
  color: '#FFFFFF',
  letterSpacing: '1.08px',
  textAlign: 'center',
  marginTop: '14px',
  '@media(max-width: 500px)': {
    fontSize: '12px',
  }
})

const featuresContainer = css({
  width: '30%',
  display: 'block',
  margin: '0 auto',
  borderTop: '1px solid rgba(255,255,255,0.27)',
  '@media(max-width: 500px)': {
    width: '100%',
  }
})

const subHeader = css({
  fontFamily: 'AvenirNext-Regular',
  fontSize: '15px',
  color: '#FFFFFF',
  letterSpacing: 1.16,
  textAlign: 'center',
  '@media(max-width: 500px)': {
    fontSize: '12px',
  }
})

const pageStyle = style({
  width: '100%',
  height: '100%',
  backgroundColor: 'black',
  position: 'absolute',
  top: 0,
  left: 0
})

const bodyStyle = style({
  width: '800px',
  margin: '0 auto',
  display: 'block'
})

const logo = css({
  fontFamily: 'AvenirNext-Heavy',
  fontSize: '72px',
  color: '#FFFFFF',
  letterSpacing: '5.58px',
  textShadow: '0 0 22px rgba(255,255,255,0.50)',
  textAlign: 'center',
  margin: '79px 0 0 0',
  '@media(max-width: 500px)': {
    fontSize: '32px',
  }
})
