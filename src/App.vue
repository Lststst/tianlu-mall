<template>
  <div id="app">
    <header-bar />
    <div class="first-nav">
      <router-view v-if="isRouterAlive"/>
    </div>
  </div>
</template>

<script>
  import HeaderBar from './components/Header'
  
  export default {
    components: {
      HeaderBar,
    },
    provide() {
      return {
        reload: this.reload
      }
    },
    data() {
      return {
        isRouterAlive: true
      }
    },
    methods: {
      reload(){
        this.isRouterAlive = false;
        this.$nextTick(function(){
          this.isRouterAlive=true
        })
      }
    }
  }
</script>

<style lang="scss">
  @import "./assets/scss/reset.scss";
  .first-nav{
    background-color: #eee;
  }
</style>
