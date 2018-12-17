<template>
  <div class="example1">
    example1
  </div>
</template>

<script>
import axios from 'axios'
import {login} from '@/api/login'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'example1',
  data () {
    return {

    }

  },
  created () {

  },
  methods: {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .example1{
    font-size: 18px;
    color: aqua;
  }
</style>
