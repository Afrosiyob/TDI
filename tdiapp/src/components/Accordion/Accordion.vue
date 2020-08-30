<template>
  <div class="ac-box">
    <div
      :class="visible ? null : 'collapsed'"
      :aria-expanded="visible ? 'true' : 'false'"
      :aria-controls="`collapse-` + aIndex"
      @click="visible = !visible"
      class="btn-item"
    >
      <ul>
        <li>
          <i class="far fa-folder"></i>
        </li>
        <li>1.Fotaparat bilan tanishish</li>
      </ul>
    </div>
    <b-collapse :id="`collapse-` + aIndex" v-model="visible" class="mt-2">
      <b-card
        ><a href="#!">
          <ul>
            <li><i class="fas fa-play"></i> 1.Fotaparat bilan tanishish</li>
            <li>1.25</li>
          </ul>
          <ul>
            <li><i class="fas fa-lock"></i> 1.Fotaparat bilan tanishish</li>
            <li>1.25</li>
          </ul>
        </a></b-card
      >
    </b-collapse>
  </div>
</template>

<script>
// import $ from "jquery";
export default {
  name: "Accordion",
  props: ["index"],
  data() {
    return {
      visible: false,
      text: `
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
          brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
          tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
          assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
          wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
          vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
          synth nesciunt you probably haven't heard of them accusamus labore VHS.
        `,
      aIndex: this.index,
      cfolder: true,
      ofolder: false,
    };
  },

  //   mounted() {
  //     var btn = $(".btn-item");

  //     var icon = $(".btn-item ul li i");

  //     btn.click(function() {
  //       icon.removeClass("fa-folder");
  //       icon.addClass("fa-folder-open");
  //     });
  //   },
};
</script>

<style lang="scss" scoped>
@import "Accordion";
</style>
