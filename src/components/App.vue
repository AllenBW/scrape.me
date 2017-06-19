<template lang="pug">
  body
    #navbarHeader.collapse.bg-inverse
      .container
        .row
          .col-sm-8.py-4
            h4.text-white About
            p.text-muted
              | Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.
          .col-sm-4.py-4
            h4.text-white Contact
            ul.list-unstyled
              li
                a.text-white(href='#') Follow on Twitter
              li
                a.text-white(href='#') Like on Facebook
              li
                a.text-white(href='#') Email me
    .navbar.navbar-inverse.bg-inverse
      .container.d-flex.justify-content-between
        a.navbar-brand(href='#') Album
        button.navbar-toggler(type='button', data-toggle='collapse', data-target='#navbarHeader', aria-controls='navbarHeader', aria-expanded='false', aria-label='Toggle navigation')
          span.navbar-toggler-icon
    section.jumbotron.text-center
      .container
        h1.jumbotron-heading {{msg}}
        p.lead.text-muted
          | Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.
        p
          a.btn.btn-primary(href='#') Main call to action
          a.btn.btn-secondary(href='#') Secondary action
</template>


<script>
  export default {
    name: 'app',
    data () {
      return {
        msg: 'Quickndirty'
      }
    }
  }
</script>

<style lang="sass" scoped>
  h1, h2
    font-weight: normal

  ul
    list-style-type: none
    padding: 0

  li
    display: inline-block
    margin: 0 10px

  a
    color: #42b983
</style>
