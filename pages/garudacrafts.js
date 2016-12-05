import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import css from 'next/css'

const GarudaCrafts = React.createClass({
    render() {
        return (
            <div className="garudacrafts">
                <Head>
                    <title>GarudaCrafts Project | JRSCode School 2016</title>
                    <meta name="description" content="Final project by Garuda Crafts for JRS Coding School class of 2016." />
                    <meta name="author" content="garudacrafts" />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                    <link href="//cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css" rel="stylesheet" type="text/css"/>
                    <link href="//cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css" rel="stylesheet" type="text/css"/>
                    <link href="//fonts.googleapis.com/css?family=Raleway:400,300,600" rel="stylesheet" type="text/css"/>
                    <link href="/static/css/garudacrafts.css" rel="stylesheet" />
                </Head>
                <header className="page-header">
                    <h1>GarudaCrafts Project</h1>
                </header>
                <main className="container wrapper">
                    <section>
                        <h1>MakaiSessions</h1>
                        <p>The project will be titled: <strong>MakaiSessions</strong>.</p>
                        <dl>
                            <dt>Makai</dt>
                            <dd>A Hawaiian word meaning "toward or by the sea; seaward" (<a href="http://www.dictionary.com/browse/makai" target="_blank">dictionary.com</a>)</dd>
                            <dt>Sessions</dt>
                            <dd>"the period or term during which [an activity] is held" (<a href="http://www.dictionary.com/browse/session" target="_blank">dictionary.com</a>)</dd>
                        </dl>
                    </section>
                    <section>
                        <h2>Description</h2>
                        <p>MakaiSessions will be app for tracking ocean sports activity sessions.</p>
                        <p>It's like <a href="https://runkeeper.com/" target="_blank">RunKeeper</a> for ocean sports enthusiasts, like surfers, windsurfers, kitesurfers, and stand-up paddle (SUP) boarders.</p>

                        <h3>Sessions</h3>
                        <p>Users will be able to track data on their ocean sports sessions:</p>
                        <ul>
                            <li>Date, Time</li>
                            <li>Location (i.e. lat, log OR city, state, country)</li>
                            <li>Activity Category (e.g. Surfing, Windsurfing, Kiting, SUPing)</li>
                            <li>Weather Conditions (i.e. wave height, wind speed, water temp, air temp)</li>
                            <li>Duration</li>
                            <li>Images</li>
                            <li>Video</li>
                        </ul>
                        <p>Only a few fields will be required, many will be optional.</p>

                        <h3>Equipment</h3>
                        <p>As an added feature, users will be able to keep track of their ocean sports equipment:</p>
                        <ul>
                            <li>Name</li>
                            <li>Description</li>
                            <li>Category</li>
                            <li>Images</li>
                        </ul>
                        <p>Tracking equipment will be optional. Users can link their Equipment to their Sessions.</p>

                        <h2>Future Development</h2>
                        <p>Ideas:</p>
                        <ul>
                            <li>Reports: # Sessions/yr, # hours logged on equipment, most popular locations, etc.</li>
                            <li>SurfersList integration ("Quick post" Equipment)</li>
                            <li></li>
                        </ul>
                    </section>
                </main>
                <footer className="page-footer">
                    <p className="text-center">
                        <em>Garuda Crafts Web Development &copy; 2016</em><br />
                        <a href="https://www.garudacrafts.com/" target="_blank">learn more &raquo;</a>
                    </p>
                </footer>
            </div>
        )
    }
})

module.exports = GarudaCrafts
