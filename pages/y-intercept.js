const React = require('react')
import Head from 'next/head'

const About = React.createClass({
	render () {
		return (
			<div>
				<div className="pa3 h-100 min-vh-100">
					<Head>
			      <title>Pet Vet DB</title>
			      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
						<link rel="stylesheet" href="https://unpkg.com/tachyons@4.5.5/css/tachyons.min.css"/>
	    		</Head>
					<div className="bb b--light-silver mb2 pt2">
						<span className="avenir f2">Pet Vet DB</span>
						<img src="http://placekitten.com/75/75" className="fr"/>
					</div>
					<span className="avenir i f4">Your pets are too busy to manage their own health records</span>
					<article className="pa3 pa5-ns mt3">
						<span className="f3">Description</span>
						<p className="measure lh-copy">
							Pet Vet DB allows veternarians and owners track a pet\n's health records. 
						</p>
						<p className="measure lh-copy">
							As a veternarian, a user enjoys the easy access and editing of pet records; updating vaccination records,
							track procedures surgeries, and document routine visits. Additionally, assitance in appointment scheduling is available
							from a calculation component which is based vaccination schedule tables and routine visit schedules
						</p>
						<p className="measure lh-copy">
							As an owner, users will be able to view their pet's or pets' medical records (lab tests,
							vaccination historty, procedure and surgery history), see proposed scheduled visits,
							and edit their own or their animal's bio.
						</p>
					</article>
					<footer className="pv3 mid-gray absolute bottom-0 w-100">
	  				<small className="f6 db tc">© 2016 <b class="ttu">y-intercept development</b>., All Rights Reserved</small>
					</footer>
				</div>
			</div>
		)
	}
})

module.exports = About
