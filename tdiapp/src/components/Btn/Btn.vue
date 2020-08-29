<template>
  <div>
    <router-link :to="`/${$i18n.locale}/all`">
      <button>
        <p>{{ btnText }}</p>
        <span><i class="fas fa-angle-right"></i> </span></button
    ></router-link>
  </div>
</template>

<script>
export default {
  name: "Btn",
  props: ["titulText"],
  data() {
    return {
      btnText: this.titulText,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "Btn";
</style>
