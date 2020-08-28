<template>
  <div>
    <!-- {{ $t("message") }} -->
    <header-vue />
    <main-vue />
  </div>
</template>

<script>
import MainVue from "../../views/Home/Main/Main.vue";
import HeaderVue from "../../views/Home/Header/Header.vue";

export default {
  name: "Home",
  components: {
    HeaderVue,
    MainVue,
  },
};
</script>

<style lang="scss" scoped></style>
