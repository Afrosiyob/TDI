<template>
  <div id="app">
    {{ $t("message") }}
    <router-link :to="`/${$i18n.locale}/home`">home page</router-link>
    <router-link :to="`/${$i18n.locale}/person`">person</router-link>

    <button @click.prevent="gogo('en')">en</button>
    <button @click.prevent="gogo('ru')">ru</button>

    <transition name="slide">
      <router-view></router-view>
    </transition>

    <img alt="Vue logo" src="@/assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data() {
    return { langs: ["en", "ru"] };
  },
  methods: {
    gogo(locale) {
      this.$i18n.locale = locale;
      this.$router.push({
        params: { lang: locale },
      });
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
