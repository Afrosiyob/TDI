<template>
  <div class="main-box my-5">
    <b-container>
      <div class="titul-box mb-3">
        <h5>
          Saqlangan kurslar <span><b>4</b></span> ta
        </h5>
      </div>

      <anim-dots-vue
        :countDots="36"
        :w="300"
        :h="50"
        :x="0"
        :y="50"
        :color="'#00FF84'"
      />

      <b-row>
        <b-col xs="12" sm="6" md="4" class="mb-3">
          <card-box-vue />
        </b-col>
        <b-col xs="12" sm="6" md="4" class="mb-3">
          <card-box-vue />
        </b-col>
        <b-col xs="12" sm="6" md="4" class="mb-3">
          <card-box-vue />
        </b-col>
        <b-col xs="12" sm="6" md="4" class="mb-3">
          <card-box-vue />
        </b-col>
        <b-col xs="12" sm="6" md="4" class="mb-3">
          <card-box-vue />
        </b-col>
        <b-col xs="12" sm="6" md="4" class="mb-3 plus-card">
          <a href="#!"> <i class="fa fa-plus"></i></a>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import CardBoxVue from "../../../components/CardBox/CardBox.vue";
import AnimDotsVue from "../../../components/AnimDots/AnimDots.vue";

export default {
  name: "MMain",
  components: {
    CardBoxVue,
    AnimDotsVue,
  },
};
</script>

<style lang="scss" scoped>
@import "MMain";
</style>
