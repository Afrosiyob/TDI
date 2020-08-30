<template>
  <div class="my-5 main-box">
    <anim-dots-vue
      :countDots="40"
      :w="200"
      :h="50"
      :x="80"
      :y="20"
      :color="'green'"
    />
    <b-container>
      <b-row>
        <b-col sm="12" md="4">
          <div class="profil-box">
            <img src="https://placekitten.com/300/300" alt="user" />
            <h5>Baxrom Aliev</h5>
            <p>Designer</p>
            <btn-vue class="mt-2 btn-under" :titulText="btnTitul" />
          </div>
        </b-col>
        <b-col sm="12" md="8">
          <div class="form-box">
            <b-row>
              <b-col md="12" lg="4" class="mb-3">
                <label for="name" class="ml-3">Ismingiz</label>
                <b-form-input
                  type="text"
                  id="name"
                  v-model="text"
                  placeholder="Enter your name"
                ></b-form-input
              ></b-col>
              <b-col md="12" lg="4" class="mb-3">
                <label for="fam" class="ml-3">Familiyangiz</label>
                <b-form-input
                  type="text"
                  id="fam"
                  v-model="text"
                  placeholder="Enter your Sname"
                ></b-form-input
              ></b-col>
            </b-row>

            <b-row>
              <b-col md="12" lg="4" class="mb-3">
                <label for="tel" class="ml-3">Tel. nomeringiz</label>
                <b-form-input
                  type="tel"
                  id="tel"
                  v-model="text"
                  placeholder="+998(99) 602 51 12"
                ></b-form-input
              ></b-col>
              <b-col md="12" lg="4" class="mb-3">
                <label for="email" class="ml-3">E-main</label>
                <b-form-input
                  type="email"
                  id="email"
                  v-model="text"
                  placeholder="example@gmail.com"
                ></b-form-input
              ></b-col>
            </b-row>

            <b-row>
              <b-col md="12" lg="8" class="mb-3">
                <label for="tel2" class="ml-3">Telefon raqamingiz</label>
                <b-form-input
                  type="tel"
                  id="tel2"
                  v-model="text"
                  placeholder="+998 (99) 602 51 12"
                ></b-form-input>
              </b-col>
            </b-row>

            <b-row>
              <b-col md="12" lg="8" class="mb-3">
                <label for="textarea" class="ml-3"
                  >O'zim haqimda qisqacha ma'lumot</label
                >
                <b-form-textarea
                  id="textarea"
                  v-model="text"
                  placeholder="Enter something..."
                  rows="3"
                  max-rows="6"
                ></b-form-textarea>
              </b-col>
            </b-row>

            <b-row>
              <b-col md="12" lg="8" class="mb-3">
                <label for="pass" class="ml-3">Parol</label>
                <b-form-input
                  type="password"
                  id="pass"
                  v-model="text"
                  placeholder="*******"
                ></b-form-input>
              </b-col>
            </b-row>
            <btn-vue class="mt-2 btn-under" :titulText="btnForm" />
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import BtnVue from "../../../components/Btn/Btn.vue";
import AnimDotsVue from "../../../components/AnimDots/AnimDots.vue";

export default {
  name: "PMain",
  components: {
    BtnVue,
    AnimDotsVue,
  },
  data() {
    return {
      btnTitul: "Rasmni o'zgartirish",
      btnForm: "O'zgarishlarni saqlash",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "PMain";
</style>
