<template>
  <div class="card-box">
    <a href="#!">
      <b-card
        :img-src="cardImg"
        :img-alt="cardImgAlt"
        img-top
        tag="article"
        class="mb-2 card-body"
      >
        <div class="card-main">
          <code>Course</code>
          <b-card-text>
            {{ cardTitle }}
          </b-card-text>
          <ul>
            <li>one</li>
            <li>two</li>
            <li>three</li>
          </ul>

          <div class="under-box">
            <p>
              <b>{{ cardViews }}</b> <em>Views</em> <span>2 h 40 min</span>
            </p>
            <a href="#!">
              <i class="fas fa-play"></i>
            </a>
          </div>
        </div>
      </b-card>
    </a>
  </div>
</template>

<script>
export default {
  name: "CardBox",
  data() {
    return {
      cardTitle: "Create an easy-to-ready layout content they modify",
      cardImg: "https://picsum.photos/600/300/?image=25",
      cardImgAlt: "this is image",
      cardViews: 1621100,
      cardLink: "fwefwef",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "CardBox";
</style>
