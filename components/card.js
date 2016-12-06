const React = require('react')

export default ({name, project, pic, url}) =>
  <article className="fl w-100 w-50-m  w-25-ns pa2-ns">
    <div class="aspect-ratio aspect-ratio--1x1">
      <img src={pic}
      class="db bg-center cover aspect-ratio--object" />
    </div>

    <a href={`${url}`} class="ph2 ph0-ns pb3 link db">
      <h3 class="mb0 black-90">{name}</h3>
    </a>
  </article>
