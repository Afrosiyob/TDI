<template>
  <div class="header-box">
    <div class="filter-box">
      <anim-dots-vue :countDots="56" :w="200" :h="100" :x="70" :y="50" />
      <anim-dots-vue :countDots="36" :w="300" :h="50" :x="0" :y="0" />

      <b-container>
        <div class="titul-box">
          <h1><span>Mening</span> profilim</h1>
          <div>
            <router-link :to="`/${$i18n.locale}/`">{{
              $t("navOne.home")
            }}</router-link>
            /
            <router-link :to="`/${$i18n.locale}/profil`">My profil</router-link>
          </div>
        </div>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "PHeader",
};
</script>

<style lang="scss" scoped>
@import "PHeader";
</style>
