<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { setRem } from '@/utils/rem.js'
export default {
  name: 'App',
  mounted () {
    window.onresize = function () {
      setRem()
    }
  },
  methods: {
  }
}
</script>

<style lang='less'>
</style>
