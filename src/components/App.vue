<template lang="pug">
  body
    #navbarHeader.collapse.bg-inverse(v-bind:class="{ show: showNav }"  v-bind:aria-expanded='showNav')
      .container
        .row
          .col-sm-8.py-4
            h4.text-white About
            p.text-muted
              | Well its gonna save time
          .col-sm-4.py-4
            h4.text-white Contact
            ul.list-unstyled
              li
                a.text-white(href='#') Email me
    .navbar.navbar-inverse.bg-inverse
      .container.d-flex.justify-content-between
        a.navbar-brand(href='#') Home
        form.form-inline.my-lg-0
          input.form-control.mr-sm-2(type="url" placeholder="Search"  v-model.trim="message" )
          button.btn.btn-outline-success.my-2.my-sm-0(type="submit" v-on:click="search()") Search
        button.navbar-toggler(type='button', v-on:click="showNav = !showNav", data-toggle='collapse', data-target='#navbarHeader', aria-controls='navbarHeader', :aria-expanded='showNav', aria-label='Toggle navigation')
          span.navbar-toggler-icon
    section.jumbotron.text-center
      .container
        h1.jumbotron-heading {{msg}}
        p.lead.text-muted
          | HOT DARN
        p
          a.btn.btn-primary(href='#') Main call to action
          a.btn.btn-secondary(href='#') Secondary action
</template>


<script>
  import searchHelper from './searchHelper'

  export default {
    name: 'app',
    data () {
      return {
        message: '',
        showNav: false,
        msg: 'Quickndirty'
      }
    },
    methods: {
      search: function () {
        searchHelper(this.message)
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
