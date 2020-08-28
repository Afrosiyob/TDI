<template>
  <div class="nav-two">
    <b-container>
      <b-navbar toggleable="lg" class="p-0">
        <b-navbar-brand>Online o'qitish kurslari:</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse2"></b-navbar-toggle>

        <b-collapse id="nav-collapse2" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">dastrulash</b-nav-item>
            <b-nav-item href="#">dizayn</b-nav-item>
            <b-nav-item href="#">biznes</b-nav-item>
            <b-nav-item href="#">Abutirentlar uchun</b-nav-item>
            <b-nav-item href="#">boshqa</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
        </b-collapse>
      </b-navbar>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "NavTwo",
};
</script>

<style lang="scss" scoped>
@import "NavTwo";
</style>
