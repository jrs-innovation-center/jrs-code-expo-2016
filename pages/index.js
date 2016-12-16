const React = require('react')
import Head from 'next/head'
import Card from '../components/card'
import Profile from '../components/profile'

const students = [{
  id: 1,
  name: 'Alex Boquist',
  project: 'Band Manager App',
  pic: '/static/Alex/headshot.png',
  url: 'http://intouch.surge.sh/',
  github: 'aplchian'
}, {
  id: 2,
  name: 'Andrea Lingenfelter',
  project: 'Vehicle Repair Records',
  pic: '/static/Andrea/headshot.png',
  url: 'http://vehiclerepairrecord.surge.sh/',
  github: 'alingenfelter'
}, {
  id: 3,
  name: 'Cameron Monaghan',
  project: 'LunchIT',
  pic: '/static/Cameron/headshot.png',
  url: 'http://tightfisted-range.surge.sh/',
  github: 'monaghancj'
},{
  id: 4,
  name: 'Chris Cortes',
  project: 'Chris Cleans 4 U',
  pic: '/static/Chris/headshot.png',
  url: 'http://chriscleans4u.surge.sh/',
  github: 'chriscortes4u'
}, {
  id: 5,
  name: 'Derek McKee',
  project: 'MakaiSessions',
  pic: '/static/Derek/headshot.png',
  url: 'http://makaisessions.com/',
  github: 'garudacrafts'
}, {
  id: 6,
  name: 'Jared Bilton',
  project: 'LunchIT',
  pic: '/static/Jared/headshot.png',
  url: 'http://mishmash.surge.sh/',
  github: 'jsbilton'
}, {
  id: 7,
  name: 'Joesph Daniel',
  project: 'Pet Vet DB',
  pic: '/static/Joe/headshot.png',
  url: 'http://petvetdb.surge.sh/',
  github: 'y-intercept'
}, {
  id: 8,
  name: 'Joshua A Smith',
  project: 'Pet Duet',
  pic: '/static/Josh/headshot.png',
  url: 'http://pet-duet.surge.sh/',
  github: 'joshuaasmith'
}, {
  id: 9,
  name: 'Kendra Davis',
  project: 'Pet Health Partners',
  pic: '/static/Kendra/headshot.png',
  url: 'http://pet-partner.surge.sh/',
  github: 'kendsdavs'
}, {
  id: 10,
  name: 'Matt Theodore, RN BSN',
  project: 'Coterie 292',
  pic: '/static/Matt/headshot.png',
  url: 'http://coterie292.surge.sh/',
  github: 'mtheodo'
}]

const Index = React.createClass({
  render() {
    return (
      <div>
        <Head>
          <title>JRS Coding School 2016 Graduates</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link href="https://file.myfontastic.com/n6vo44Re5QaWo8oCKShBs7/icons.css" rel="stylesheet" />
          <link rel="stylesheet" href="/static/tachyons.css" />
          <link rel="apple-touch-icon" sizes="57x57" href="/static/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/static/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/static/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/static/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/static/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/static/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/static/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/static/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192"  href="/static/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/static/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
          <link rel="manifest" href="/static/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/static/ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <header className="pa2 bg-white green georgia tc">
          <img src="/static/jrs-logo.png" alt="jrs logo" />
        </header>
        <main className="container">
          <section className="cf w-100 pa2-ns bg-black-20">
          {students.map(student => <Profile {...student} key={student.id} />)}
          </section>

        </main>

      </div>
    )
  }
})

module.exports = Index
