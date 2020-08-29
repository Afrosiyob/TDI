<template>
  <div class="hedaer-box">
    <div class="box-filter">
      <anim-dots-vue :countDots="56" :w="200" :h="100" :x="0" :y="50" />
      <anim-dots-vue :countDots="36" :w="300" :h="50" :x="70" :y="5" />
      <b-container class="inner-box">
        <div class="left-box">
          <h1><span>Online</span> bilimlar olishda davom eting</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero
          </p>
          <div class="mt-3">
            <btn-vue :titulText="btnTitul" />
          </div>
        </div>
        <div class="right-box">
          <ul>
            <li>
              <a href="#!"><i class="fab fa-facebook-f"></i></a>
            </li>
            <li>
              <a href="#!"><i class="fab fa-telegram-plane"></i></a>
            </li>
            <li>
              <a href="#!"><i class="fab fa-youtube"></i></a>
            </li>
          </ul>
        </div>
      </b-container>

      <div class="down-box">
        <span class="down-item"><i class="fas fa-angle-down"></i></span>
      </div>
    </div>
  </div>
</template>

<script>
import AnimDotsVue from "../../../components/AnimDots/AnimDots.vue";
import BtnVue from "../../../components/Btn/Btn.vue";

export default {
  name: "Header",
  components: {
    AnimDotsVue,
    BtnVue,
  },
  data() {
    return {
      btnTitul: "bepul qo'shiling",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "Header";
</style>
