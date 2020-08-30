<template>
  <div
    class="anim-dots-box"
    v-bind:style="{
      width: dotWidth + 'px',
      height: dotHeight + 'px',
      left: dotX + '%',
      top: dotY + '%',
    }"
  >
    <div
      v-for="(dot, index) in dots"
      :key="index"
      class="round"
      :id="index"
      :style="{
        'background-color': color,
      }"
    ></div>
  </div>
</template>

<script>
export default {
  name: "AnimDots",
  props: ["countDots", "w", "h", "x", "y", "color"],
  data() {
    return {
      dots: this.countDots,
      dotWidth: this.w,
      dotHeight: this.h,
      dotX: this.x,
      dotY: this.y,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "AnimDots";
</style>
