const React = require('react')
import Head from 'next/head'

const joshuaasmith = React.createClass({
    render() {
        let imgUrl = 'https://static.pexels.com/photos/117486/pexels-photo-117486.jpeg'
        let styles = {
            root: {
                backgroundImage: 'url(' + imgUrl + ')',
                backgroundSize: 'cover',
                overflow: 'hidden'
            }
        }
        return (
            <div className="pa2 bg-light-gray">
                <Head>
                    <title>Pet Tracker</title>
                    <link rel="stylesheet" href="https://unpkg.com/tachyons@4.5.5/css/tachyons.min.css"/>

                </Head>
                <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
                    <div className="tc">
                        <img src="http://placekitten.com.s3.amazonaws.com/homepage-samples/408/287.jpg" className="dib ba b--black-05 pa2" title="Joshua Smith Profile Photo"/>
                        <h1 className="f3 mb2">Joshua Smith</h1>
                        <h2 className="f5 fw4 gray mt0">Jack Russell Software Coding Schol</h2>
                        <h2 className="f5 fw4 gray mt0">Final Project</h2>
                    </div>
                </article>
                <hr className="w-90"/>
                <article data-name="article-full-bleed-background">
                    <div className="cf" style={styles}>
                        <div className="fl pa3 pa4-ns bg-white black-70 measure-narrow f3 times">
                            <header className="bb b--black-70 pv4">
                                <h3 className="f2 fw7 ttu tracked lh-title mt0 mb3 avenir">Pet Jet</h3>
                                <h4 className="f3 fw4 i lh-title mt0">Track your pet's health.</h4>
                            </header>
                            <section className="pt5 pb4">
                                <p className="times lh-copy measure f4 mt0">
                                    Pet tracker is designed to make communication between owner's and vets easier and more efficcient. Owners can login to Pet Jet and see the satus of their pet's vaccination records and information on their recent visits. Vets will have a centralized place to upload information about client's pets to make communication more seamless. Help take the stress out of caring for your pets by using Pet Jet!
                                </p>
                            </section>
                        </div>
                    </div>
                </article>
                <hr className="w-90"/>
                <section className="mw7 center avenir">
                    <article class="bt bb b--black-10">
                        <div className="flex flex-column flex-row-ns">
                            <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                                <img src="http://placekitten.com/g/250/250" className="db"/>
                            </div>
                            <div className="w-100 w-60-ns pl3-ns">
                                <h1 className="f3 fw1 avenir mt0 lh-title">Veterinarian Features</h1>
                                <p className="f6 f5-l lh-copy">
                                    With Pet Jet, Veterinarians will be able to
                                </p>
                            </div>
                        </div>
                    </article>
                    <article className="bb b--black-10">
                        <div className="flex flex-column flex-row-ns">
                            <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                                <img src="http://placekitten.com/g/250/250" className="db"/>
                            </div>
                            <div className="w-100 w-60-ns pl3-ns">
                                <h1 className="f3 fw1 avenir mt0 lh-title">Pet Owner Features</h1>
                                <p className="f6 f5-l lh-copy">
                                    Pet owners
                                </p>
                            </div>
                        </div>
                    </article>

                </section>
                <section className="ph3 ph5-ns pv5">
                    <article className="mw8 center br2 ba b--light-gray bg-dark-gray">
                        <div className="dt-ns dt--fixed-ns w-100">
                            <div className="pa3 pa4-ns dtc-ns v-mid">
                                <div>
                                    <h2 className="avenir fw4 blue mt0 mb3 tc">Try Pet Tracker Today!
                                    </h2>
                                    <p className=" avenir white-80 measure lh-copy mv0">
                                        See how Pet Tracker can help you keep up-to-date with your pet's health!
                                    </p>
                                </div>
                            </div>
                            <div className="pa3 pa4-ns dtc-ns v-mid">
                                <a href="#" className="no-underline f6 tc db w-100 pv3 bg-animate bg-light-silver hover-bg-dark-blue white br2 avenir">Try Pet Tracker</a>
                            </div>
                        </div>
                    </article>
                </section>
            </div>
        )
    }
})
module.exports = joshuaasmith
