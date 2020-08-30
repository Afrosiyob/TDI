<template>
  <div>
    <m-header-vue />
    <m-main-vue />
  </div>
</template>

<script>
import MHeaderVue from "../../views/MyCourses/MHeader/MHeader.vue";
import MMainVue from "../../views/MyCourses/MMain/MMain.vue";

export default {
  name: "MyCourses",
  components: {
    MHeaderVue,
    MMainVue,
  },
};
</script>

<style lang="scss" scoped></style>
