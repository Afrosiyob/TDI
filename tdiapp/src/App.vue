<template>
  <div id="app">
    <navbar-vue />

    <transition name="component-fade" mode="out-in">
      <router-view></router-view>
    </transition>

    <footer-vue />
  </div>
</template>

<script>
import NavbarVue from "./components/Navbar/Navbar.vue";
import FooterVue from "./components/Footer/Footer.vue";

export default {
  name: "App",
  components: {
    NavbarVue,
    FooterVue,
  },
};
</script>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0;
  box-sizing: border-box;
  color: #2c3e50;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      // color: #42b983;
    }
  }
  .component-fade-enter-active,
  .component-fade-leave-active {
    transition: opacity 0.3s ease;
  }
  .component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
}
</style>
