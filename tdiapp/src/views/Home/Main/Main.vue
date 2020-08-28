<template>
  <div>
    <b-container class="my-5">
      <div class="section-one mb-5">
        <b-row>
          <b-col md="6" sm="12" class="left-box">
            <b-embed
              type="iframe"
              aspect="16by9"
              src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
              allowfullscreen
            ></b-embed>
          </b-col>
          <b-col md="6" sm="12" class="right-box">
            <h4>
              Online talim bo'yicha ko'p yo'nalishli yagona
              <b>orgatuvchi <span>platforma.</span></b>
            </h4>
            <ul>
              <li>Consetetur sadipscing elitr.</li>
              <li>Invidunt ut labore et dolore magna aliquyam erat.</li>
              <li>Tempor invidunt ut labore.</li>
              <li>Consetetur sadipscing elitr, sed diam nonumy.</li>
            </ul>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat,
            </p>
            <btn-vue :titulText="btnTitul" />
          </b-col>
        </b-row>
      </div>

      <div class="my-3">
        <top-titul-vue />
      </div>

      <div class="mb-5">
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
          <b-col xs="12" sm="6" md="4" class="mb-3">
            <card-box-vue />
          </b-col>
        </b-row>
      </div>

      <div class="my-3 p-0 section-cat">
        <b-row class="box-cat">
          <b-col xs="6" sm="6" md="3" class="mb-3">
            <cat-box-vue :catTitul="catTitul" />
          </b-col>
          <b-col xs="6" sm="6" md="3" class="mb-3">
            <cat-box-vue :catTitul="catTitul" />
          </b-col>
          <b-col xs="6" sm="6" md="3" class="mb-3">
            <cat-box-vue :catTitul="catTitul" />
          </b-col>
          <b-col xs="6" sm="6" md="3" class="mb-3">
            <cat-box-vue :catTitul="catTitul" />
          </b-col>
        </b-row>
      </div>

      <div class="my-3">
        <top-titul-vue />
      </div>

      <div class="mb-5">
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
        </b-row>
      </div>

      <div class="my-3">
        <top-titul-vue />
      </div>

      <div class="mb-5">
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
        </b-row>
      </div>
    </b-container>

    <div class="my-5 section-picture">
      <div class="left-box">
        <img src="../../../assets/edu-sec/edu-sec.png" />
      </div>
      <div class="right-box">
        <h4>
          <b>Soha mutaxassislari bilan bog'lanish uchun treningdan o'ting.</b>
        </h4>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
        <btn-vue :titulText="btnTitul" />
      </div>
    </div>

    <b-container>
      <div class="my-3">
        <top-titul-vue />
      </div>

      <div class="mb-5">
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
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
import BtnVue from "../../../components/Btn/Btn.vue";
import TopTitulVue from "../../../components/TopTitul/TopTitul.vue";
import CardBoxVue from "../../../components/CardBox/CardBox.vue";
import CatBoxVue from "../../../components/CatBox/CatBox.vue";

export default {
  name: "Main",
  components: {
    BtnVue,
    TopTitulVue,
    CardBoxVue,
    CatBoxVue,
  },
  data() {
    return {
      btnTitul: "bepul qo'shiling",
      catTitul: "salom",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "Main";
</style>
