<template>
  <div class="all-main-box">
    <b-container>
      <b-row>
        <b-col sm="12" md="3" class="left-box">
          <div class="top-titul mb-3">
            <h3>Barcha kurslar</h3>
            <span>77</span>
          </div>
          <radio-box-vue />
          <radio-box-vue />
        </b-col>
        <b-col sm="12" md="9">
          <h-card-box-vue />
          <h-card-box-vue />
          <h-card-box-vue />
          <h-card-box-vue />
          <h-card-box-vue />
          <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="my-table"
          ></b-pagination>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import HCardBoxVue from "../../../components/HCardBox/HCardBox.vue";
import RadioBoxVue from "../../../components/RadioBox/RadioBox.vue";

export default {
  name: "Main",
  components: {
    HCardBoxVue,
    RadioBoxVue,
  },
  data() {
    return {
      perPage: 3,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "Main";
</style>
