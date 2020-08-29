<template>
  <div class="hcard-box">
    <!-- src="https://picsum.photos/400/400/?image=20"
            alt="Image" -->
    <b-row no-gutters>
      <b-col md="5" sm="12" class="left-box">
        <img src="https://picsum.photos/400/400/?image=20" alt="wefewf" />
      </b-col>
      <b-col md="7" sm="12" class="right-box">
        <h5><b>Create an easy-to-ready layout content they modify</b></h5>
        <div class="stars-cost">
          <div class="stars">
            <star-rating
              @rating-selected="rating = $event"
              :rating="rating"
              star-size="25"
              active-color="#002333"
            ></star-rating>
          </div>
          <div class="cost">
            <h3><b>%15.7</b></h3>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>

        <div class="see-info">
          <div class="info-data">
            <i class="fas fa-user-graduate"></i>
            <p>(55) student</p>
            <i class="fas fa-film"></i>
            <p>(55) videos</p>
          </div>
          <btn-vue :titulText="btnText" />
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import BtnVue from "../Btn/Btn.vue";

export default {
  name: "HCardBox",
  components: {
    BtnVue,
  },
  data() {
    return {
      btnText: "kurish",
      rating: 3,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "HCardBox";
</style>
