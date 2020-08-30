<template>
  <div class="sticky-top bg-white">
    <nav-one-vue />
    <nav-two-vue />
  </div>
</template>

<script>
import NavOneVue from "../NavOne/NavOne.vue";
import NavTwoVue from "../NavTwo/NavTwo.vue";

export default {
  name: "Navbar",
  components: {
    NavOneVue,
    NavTwoVue,
  },
};
</script>

<style lang="scss" scoped></style>
