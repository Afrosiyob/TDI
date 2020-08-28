<template>
  <div class="cat-box">
    <a href="#!">{{ catText }}</a>
  </div>
</template>

<script>
export default {
  name: "CatBox",
  props: ["catTitul"],
  data() {
    return {
      catText: this.catTitul,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "CatBox";
</style>
