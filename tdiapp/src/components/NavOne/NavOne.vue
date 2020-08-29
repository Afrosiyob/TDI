<template>
  <div class="nav-one">
    <div class="top-box"></div>
    <div class="main-box">
      <b-container>
        <b-navbar toggleable="lg" class="navbar-box">
          <b-navbar-brand>
            <router-link :to="`/${$i18n.locale}/`"
              ><img src="@/assets/logo.png"
            /></router-link>
          </b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto  right-box">
              <div class="searching-box">
                <b-button
                  size="sm"
                  class="my-2 mx-2 my-sm-0 searchbtn"
                  type="submit"
                  ><i class="fas fa-search"></i
                ></b-button>
                <b-nav-form>
                  <input class="mr-sm-2" :placeholder="$t(`navOne.search`)" />
                </b-nav-form>
              </div>
              <b-navbar-nav right>
                <li>
                  <router-link :to="`/${$i18n.locale}/`">{{
                    $t("navOne.home")
                  }}</router-link>
                </li>
                <li>
                  <router-link :to="`/${$i18n.locale}/all`">{{
                    $t("navOne.connect")
                  }}</router-link>
                </li>
                <li>
                  <button
                    @click.prevent="gogo('uz')"
                    v-bind:class="{ btnLangUz: btnLangUz, btnLang: true }"
                  >
                    uz
                  </button>
                </li>
                <li>
                  <button
                    @click.prevent="gogo('en')"
                    v-bind:class="{ btnLangEn: btnLangEn, btnLang: true }"
                  >
                    en
                  </button>
                </li>
              </b-navbar-nav>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavOne",
  data() {
    return { langs: ["uz", "en"], btnLangUz: true, btnLangEn: false };
  },
  methods: {
    gogo(locale) {
      this.btnLangUz = !this.btnLangUz;
      this.btnLangEn = !this.btnLangEn;

      if (this.$i18n.locale !== locale) {
        this.$i18n.locale = locale;
        this.$router.push({
          params: { lang: locale },
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "NavOne";
</style>
