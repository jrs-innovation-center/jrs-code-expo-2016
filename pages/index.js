const React = require('react')
import Head from 'next/head'
import Card from '../components/card'
import Profile from '../components/profile'

const students = [{
  id: 1,
  name: 'Alex Boquist',
  project: 'Band Manager App',
  pic: '/static/Alex/alex4.jpg',
  url: '/aplchian'
}, {
  id: 2,
  name: 'Andrea Lingenfelter',
  project: 'Vehicle Repair Records',
  pic: '/static/Andrea/andrea3.jpg',
  url: '/alingenfelter'
}, {
  id: 3,
  name: 'Cameron Monaghan',
  project: 'LunchIT',
  pic: '/static/Cameron/cameron2.jpg',
  url: '/monaghancj'
},{
  id: 4,
  name: 'Chris Cortes',
  project: 'Chris Cleans 4 U',
  pic: '/static/Chris/chris1.jpg',
  url: '/chriscortes4u'
}, {
  id: 5,
  name: 'Derek McKee',
  project: 'MakaiSessions',
  pic: '/static/Derek/derek1.jpg',
  url: '/garudacrafts'
}, {
  id: 6,
  name: 'Jared Bilton',
  project: 'LunchIT',
  pic: '/static/Jared/jared1.jpg',
  url: '/jsbilton'
}, {
  id: 7,
  name: 'Joesph Daniel',
  project: 'Pet Vet DB',
  pic: '/static/Joe/joe3.jpg',
  url: '/y-intercept'
}, {
  id: 8,
  name: 'Joshua A Smith',
  project: 'Pet Duet',
  pic: '/static/Josh/josh1.jpg',
  url: '/joshuaasmith'
}, {
  id: 9,
  name: 'Kendra Davis',
  project: 'Pet Health Partners',
  pic: '/static/Kendra/kendra3.jpg',
  url: '/kendsdavs'
}, {
  id: 10,
  name: 'Matt Theodore, RN BSN',
  project: 'Coterie 292',
  pic: '/static/Matt/matt2.jpg',
  url: '/mtheodo'
}]

const Index = React.createClass({
  render() {
    return (
      <div>
        <Head>
          <title>JRS Coding School 2016 Program</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="/static/tachyons.css" />
        </Head>
        <header className="pa2 bg-green white georgia">
          <h3 className="f2 ml3">JRS Coding School 2016</h3>
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
