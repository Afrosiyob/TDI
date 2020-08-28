<template>
  <div>
    <button>
      <p>{{ btnText }}</p>
      <span><i class="fas fa-angle-right"></i> </span>
    </button>
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
