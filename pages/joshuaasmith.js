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
                    <title>Pet Duet</title>
                    <link rel="stylesheet" href="https://unpkg.com/tachyons@4.5.5/css/tachyons.min.css"/>
                    <link rel="shortcut icon" href="/static/Josh/39cea2e0fac5be29828e22eae34000f8 copy.png"/>
                </Head>
                <article className="mw5 center bg-white-60 br3 pa2-ns mv3 b--black-10">
                    <div className="tc">
                        <img src="/static/Josh/josh1.jpg" className="dib" title="Joshua Smith Profile Photo"/>
                        <h1 className="f3 mb2">Joshua Smith</h1>
                        <h2 className="f5 fw4 gray mt0">Jack Russell Software Coding School</h2>
                        <h2 className="f5 fw4 gray mt0">Final Project</h2>
                    </div>
                </article>
                <hr className="w-90"/>
                <article data-name="article-full-bleed-background">
                    <div className="cf" style={{
                        background: 'url(https://i.imgsafe.org/eb938b2152.jpg) no-repeat',
                        backgroundSize: 'contain',
                        marginLeft: 200
                    }}>
                        <div className="fl pa3 pa4-ns bg-white black-70 measure-narrow f3 times fr" style={{
                            marginRight: 200
                        }}>
                            <header className="bb b--black-70">
                                <h3 className="f2 fw7 ttu tracked lh-title mt0 mb3 avenir pv4 tc">Pet Duet</h3>
                                <h4 className="f3 fw4 i lh-title mt0 tc">Join in harmony with your vet
                                    <br></br>over your pet's health today.</h4>
                            </header>
                            <section className="pt5 pb4">
                                <p className="times lh-copy measure f4 mt0">
                                    Pet Duet is designed to make communication between owner's and vets easier and more efficient. Owners can login to Pet Duet and see the status of their pet's vaccination records and information on their recent visits. Vets will have a centralized place to upload information about client's pets to make communication more seamless. Help take the stress out of caring for your pets by using Pet Duet!
                                </p>
                            </section>
                        </div>
                    </div>
                </article>
                <hr className="w-90"/>
                <section className="mw7 center avenir mt4">
                    <article class="bt bb b--black-10">
                        <div className="flex flex-column flex-row-ns">
                            <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                                <img src="/static/Josh/animal-dog-pet-cute.jpg" className="db"/>
                            </div>
                            <div className="w-100 w-60-ns pl3-ns">
                                <h1 className="f3 fw1 avenir mt0 lh-title">Why Choose Pet Duet</h1>
                                <p className="f6 f5-l lh-copy">
                                    With Pet Duet, Veterinarians will be able to keep better track of the health record of the pets they care for. Upload a pet's information, a picture, and their owner's information and add medicine and procedures right to that pet's page.
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
                                    <h2 className="avenir fw4 blue mt0 mb3 tc">Try Pet Duet Today!
                                    </h2>
                                    <p className=" avenir white-80 measure lh-copy mv0 tc">
                                        See how Pet Duet can help you keep up-to-date
                                        <br></br>
                                        with your pet's health!
                                    </p>
                                </div>
                            </div>
                            <div className="pa3 pa4-ns dtc-ns v-mid">
                                <a href="http://pet-jet.surge.sh" className="no-underline f6 tc db w-100 pv3 bg-animate bg-light-silver hover-bg-dark-blue white br2 avenir">Try Pet Duet</a>
                            </div>
                        </div>
                    </article>
                </section>
                <footer className="pv4 ph3 tc">
                    <a className="link near-black hover-silver dib mh3 tc" href="https://github.com/joshuaasmith" title="GitHub" target="_blank">
                        <svg className="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8"/></svg>
                        <span className="f6 db">GitHub</span>
                    </a>
                    <a className="link hover-silver near-black dib mh3 tc" href="https://linkedin.com/in/joshuaasmith17" title="linkedin" target="_blank">
                        <svg className="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M13.632 13.635h-2.37V9.922c0-.886-.018-2.025-1.234-2.025-1.235 0-1.424.964-1.424 1.96v3.778h-2.37V6H8.51V7.04h.03c.318-.6 1.092-1.233 2.247-1.233 2.4 0 2.845 1.58 2.845 3.637v4.188zM3.558 4.955c-.762 0-1.376-.617-1.376-1.377 0-.758.614-1.375 1.376-1.375.76 0 1.376.617 1.376 1.375 0 .76-.617 1.377-1.376 1.377zm1.188 8.68H2.37V6h2.376v7.635zM14.816 0H1.18C.528 0 0 .516 0 1.153v13.694C0 15.484.528 16 1.18 16h13.635c.652 0 1.185-.516 1.185-1.153V1.153C16 .516 15.467 0 14.815 0z" fill-rule="nonzero"/></svg>
                        <span className="f6 db avenir">LinkedIn</span>
                    </a>
                    <a className="link hover-silver near-black dib mh3 tc" href="https://twitter.com/joshuaasmith" title="Twitter" target="_blank">
                        <svg className="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.375-1.337.648-2.085.795-.598-.638-1.45-1.036-2.396-1.036-1.812 0-3.282 1.468-3.282 3.28 0 .258.03.51.085.75C5.152 5.39 2.733 4.084 1.114 2.1.83 2.583.67 3.147.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.416-.02-.617-.058.418 1.304 1.63 2.253 3.067 2.28-1.124.88-2.54 1.404-4.077 1.404-.265 0-.526-.015-.783-.045 1.453.93 3.178 1.474 5.032 1.474 6.038 0 9.34-5 9.34-9.338 0-.143-.004-.284-.01-.425.64-.463 1.198-1.04 1.638-1.7z" fill-rule="nonzero"/></svg>
                        <span className="f6 db">Twitter</span>
                    </a>
                    <div className="">
                        <a className="db mb7 black-70 f3 f2-ns fw1 tl link dim dib pv3 mt2 mb4 mb0-l avenir" href="mailto:joshua.aaron.smith17@gmail.com">
                            joshua.aaron.smith17@gmail.com
                        </a>
                    </div>
                </footer>
            </div>
        )
    }
})
module.exports = joshuaasmith
