import React from 'react'
import Link from 'next/link'

export default ({name, pic, url, project, github}) =>
  <Link href={url} target="_blank">
    <article
    className="fl w-100 w-50-m w-25-ns pa3 pa4-ns bg-white br3 ba b--black-30 mv3 dim"
    >
      <div className="tc">
        <img
          src={pic}
          className="br-100 h4 w4 grow dib ba b--black-05 pa2"
          title={name}
          alt={name} />
        <h1 className="f5 mb2 black-50">{name}</h1>
        <h2 className="f5 fw4 gray mt0">{project}</h2>
        <div>
          <a className="mh2 link gray" href={`https://github.com/${github}`}><i className="socicon-github" /></a>
        </div>
      </div>
    </article>
  </Link>
