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
                        <p>The project will be titled: <strong>"MakaiSessions"</strong>.</p>
                        <dl>
                            <dt>Makai</dt>
                            <dd>A Hawaiian word meaning "toward or by the sea; seaward" (<a href="http://www.dictionary.com/browse/makai" target="_blank">dictionary.com</a>)</dd>
                            <dt>Sessions</dt>
                            <dd>Meaning "the period or term during which [an activity] is held" (<a href="http://www.dictionary.com/browse/session" target="_blank">dictionary.com</a>)</dd>
                        </dl>
                    </section>
                    <section>
                        <h2>Description</h2>
                        <p>MakaiSessions will be an app for <u>tracking ocean sports activities</u>. It's like <a href="https://runkeeper.com/" target="_blank">RunKeeper</a> for ocean sports enthusiasts.</p>
                        <p>Users will be able to record logs of their sessions after each activity and keep a list of their equipment, which are known as "quivers" in the ocean sports world.
                        Equipment can (optionally) be linked to sessions. Each user's profile page will includes a profile, their quiver, and a list of sessions.</p>

                        <h3>Sessions</h3>
                        <p>Users will be able to keep track of their ocean sports sessions:</p>
                        <ul>
                            <li>Date, Time</li>
                            <li>Location (i.e. lat, log OR city, state, country)</li>
                            <li>Activity Category (e.g. Surfing, Windsurfing, Kiting, SUPing)</li>
                            <li>Weather Conditions (i.e. wave height, wind speed, water temp, air temp)</li>
                            <li>Duration</li>
                            <li>Description</li>
                            <li>Images</li>
                            <li>Video</li>
                        </ul>
                        <p>Only a few fields will be required, many will be optional.</p>

                        <h3>Equipment ("Quiver")</h3>
                        <p>As a second feature, users will be able to keep track of their ocean sports equipment:</p>
                        <ul>
                            <li>Name</li>
                            <li>Description</li>
                            <li>Category</li>
                            <li>Images</li>
                        </ul>
                        <p>Users can link their Equipment to their Sessions.</p>

                        <h3>Profile</h3>
                        <p></p>
                        <ul>
                            <li>Name</li>
                            <li>Description</li>
                            <li>Image</li>
                            <li>Tags</li>
                        </ul>
                    </section>
                    <section>
                        <h2>Future Development</h2>
                        <p>Some ideas for additional features:</p>
                        <ul>
                            <li>Private user accounts</li>
                            <li>Internally track and display page views for each session and user profile</li>
                            <li>Create Groups that users can join (e.g. surf clubs)</li>
                            <li>Pages for latest sessions by location, most popular locations, windiest/biggest-wave locations, etc.</li>
                            <li>Page with worldwide map with count of total number of sesssions recorded per location</li>
                            <li>User reports like # Sessions/yr, # hours logged on equipment, etc.</li>
                            <li>SurfersList integration for equipment: "Post this for Sale on SurfersList.com &raquo;"</li>
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
