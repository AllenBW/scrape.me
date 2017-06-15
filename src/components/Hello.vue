<template lang="pug">
  div.hello
    h1 {{ msg }}
</template>


<script>
  export default {
    name: 'hello',
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
