<template>
  <div>
    <header-vue />
    <b-container class="my-5">
      <main-vue />
    </b-container>
  </div>
</template>

<script>
import MainVue from "../../views/AllCourses/Main/Main.vue";
import HeaderVue from "../../views/AllCourses/Header/Header";
export default {
  name: "AllCourses",
  components: {
    MainVue,
    HeaderVue,
  },
};
</script>

<style lang="scss" scoped></style>
