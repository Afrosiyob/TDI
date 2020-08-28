<template>
  <div class="card-box">
    <a href="#!">
      <b-card
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        class="mb-2 card-body"
      >
        <div class="card-main">
          <code>Course</code>
          <b-card-text>
            Create an easy-to-ready layout content they modify
          </b-card-text>
          <ul>
            <li>one</li>
            <li>two</li>
            <li>three</li>
          </ul>

          <div class="under-box">
            <p><b>1,621,110</b> <em>Views</em> <span>2 h 40 min</span></p>
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
};
</script>

<style lang="scss" scoped>
@import "CardBox";
</style>
