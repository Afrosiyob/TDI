<template>
  <div class="about-box">
    <a-header-vue />

    <b-container class="mb-5">
      <a-main-vue />
    </b-container>
  </div>
</template>

<script>
import AMainVue from "../../views/About/AMain/AMain.vue";
import AHeaderVue from "../../views/About/AHeader/AHeader.vue";

export default {
  name: "About",
  components: {
    AHeaderVue,
    AMainVue,
  },
};
</script>

<style lang="scss" scoped></style>
