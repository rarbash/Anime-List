<template>
  <div id="app">
    <br />
    <b-container>
      <b-nav tabs>
        <b-nav-item to="/" v-bind:active="'home' === navActive()" @click="clickNav('home')">Home</b-nav-item>
        <b-nav-item
          to="/onAir"
          v-bind:active="'onAir' === navActive()"
          @click="clickNav('onAir')"
        >On-Air</b-nav-item>
        <b-nav-item
          to="/ended"
          v-bind:active="'ended' === navActive()"
          @click="clickNav('ended')"
        >Ended</b-nav-item>
        <b-nav-item
          to="/movie"
          v-bind:active="'movie' === navActive()"
          @click="clickNav('movie')"
        >Movie</b-nav-item>
      </b-nav>
      <router-view />
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav: "home"
    };
  },
  methods: {
    clickNav(navTab) {
      return (this.nav = navTab);
    },
    navActive() {
      return this.nav;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
