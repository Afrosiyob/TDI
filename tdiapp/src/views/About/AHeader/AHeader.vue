<template>
  <div class="header-box mb-5">
    <b-container class="py-4">
      <h2>Create an easy-to-ready layout content they modify</h2>
      <p>online darsliklar</p>

      <b-row class="my-2 main-box">
        <b-col sm="12" md="8" class="left-box  mb-2">
          <b-embed
            type="iframe"
            aspect="16by9"
            src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
            allowfullscreen
          ></b-embed>
        </b-col>
        <b-col sm="12" md="4" class="right-box " role="tablist">
          <accordion-vue :index="1" />
          <accordion-vue :index="2" />
          <accordion-vue :index="3" />
          <accordion-vue :index="4" />
          <accordion-vue :index="5" />
          <accordion-vue :index="6" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import AccordionVue from "../../../components/Accordion/Accordion.vue";

export default {
  name: "NameAHeader",
  components: {
    AccordionVue,
  },
};
</script>

<style lang="scss" scoped>
@import "AHeader";
</style>
