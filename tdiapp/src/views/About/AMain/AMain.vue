<template>
  <div class="main-box">
    <b-row>
      <b-col md="8" sm="12">
        <div class="left-box">
          <tabs-vue />
        </div>
      </b-col>
      <b-col md="4" sm="12">
        <div class="right-box">
          <div class="avatar-box">
            <img src="https://placekitten.com/300/300" alt="cat" />
            <div class="avatar-info">
              <h4>name</h4>
              <p>info</p>
            </div>
          </div>

          <div class="data-box">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            praesentium dolor saepe adipisci sit deserunt expedita deleniti quos
            repellat, obcaecati aspernatur temporibus excepturi unde laudantium
            ipsam sed dolorem laborum enim.
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import TabsVue from "../../../components/Tabs/Tabs.vue";

export default {
  name: "AMain",
  components: {
    TabsVue,
  },
};
</script>

<style lang="scss" scoped>
@import "AMain";
</style>
