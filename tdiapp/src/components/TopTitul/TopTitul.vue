<template>
  <div class="top-titul my-2">
    <div class="left-box">
      <h4>
        <b><span>Mashhur</span> kurslar</b>
      </h4>
    </div>
    <btn-vue :titulText="btnText" />
  </div>
</template>

<script>
import BtnVue from "../Btn/Btn.vue";

export default {
  name: "TopTitul",
  components: {
    BtnVue,
  },
  data() {
    return {
      btnText: "barcha kurslar",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "TopTitul";
</style>
