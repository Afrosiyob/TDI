<template>
  <div class="header-box">
    <div class="filter-box">
      <anim-dots-vue
        :countDots="56"
        :w="200"
        :h="100"
        :x="70"
        :y="50"
        :color="'white'"
      />
      <anim-dots-vue :countDots="36" :w="300" :h="50" :x="0" :y="0" />

      <b-container>
        <div class="titul-box">
          <h1><span>Barcha</span> kurslar</h1>
          <div>
            <router-link :to="`/${$i18n.locale}/`">{{
              $t("navOne.home")
            }}</router-link>
            /
            <router-link :to="`/${$i18n.locale}/mycourses`"
              >My Courses</router-link
            >
          </div>
        </div>
      </b-container>
    </div>
  </div>
</template>

<script>
import AnimDotsVue from "../../../components/AnimDots/AnimDots.vue";

export default {
  name: "MHeader",
  components: {
    AnimDotsVue,
  },
};
</script>

<style lang="scss" scoped>
@import "MHeader";
</style>
