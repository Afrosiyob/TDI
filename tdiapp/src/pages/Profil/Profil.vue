<template>
  <div>
    <p-header-vue />
    <p-main-vue />
  </div>
</template>

<script>
import PHeaderVue from "../../views/Profil/PHeader/PHeader.vue";
import PMainVue from "../../views/Profil/PMain/PMain.vue";

export default {
  name: "Profil",
  components: {
    PHeaderVue,
    PMainVue,
  },
};
</script>

<style lang="scss" scoped></style>
