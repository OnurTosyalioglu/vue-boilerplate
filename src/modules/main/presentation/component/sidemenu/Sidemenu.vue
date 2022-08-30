<template>
  <ul class="li">
    <li class="flex items-center mx-2 mt-4">
      <AsyncImage
        scale="2"
        height="2rem"
        width="2rem"
        src="https://picsum.photos/1200"
        alt="test"
        class="mr-2"
      />
      {{ $t("main.app") }}
    </li>
  </ul>
  <div class="col-span-12 my-2">
    <hr />
  </div>
  <ul v-for="item in index">
    <router-link :to="item.path">
      <li class="m-2">
        {{ $t("index." + item.name) }}
      </li>
    </router-link>
  </ul>
  <div class="col-span-12 my-2">
    <hr />
  </div>
  <div class="grid grid-cols-12">
    <div class="col-span-12 ml-2">
      {{ $t("main.languageOptions") }}
    </div>
    <div class="col-span-12 my-2">
      <hr />
    </div>
    <div class="col-span-12 my-1">
      <v-icon
        name="fi-tr"
        class="mx-2"
        @click="setLocale('tr')"
      />
      {{ $t("main.turkish") }}
    </div>
    <div class="col-span-12 my-1" @click="setLocale('en')">
      <v-icon name="fi-gb-eng" class="mx-2" />
      {{ $t("main.english") }}
    </div>
    <div class="col-span-12 my-2">
      <hr />
    </div>
    <div class="col-span-12">
      <div class="grid grid-cols-12 justify-items-center">
        <div class="col-span-3">
          <v-icon name="fa-facebook-square" />
        </div>
        <div class="col-span-3">
          <v-icon name="fa-instagram" />
        </div>
        <div class="col-span-3">
          <v-icon name="fa-twitter-square" />
        </div>
        <div class="col-span-3 content-center">
          <v-icon name="fa-linkedin" />
        </div>
      </div>
    </div>
    <div class="col-span-12 my-2">
      <hr />
    </div>
  </div>
</template>

<script>
import index from "../../../../../route/index.js";
import social from "../../../../../route/social.routes.js";
import AsyncImage from "../asyncImage/AsyncImage.vue";

export default {
  data: () => ({
    index,
    social, 
  }),
  components: {
    AsyncImage,
  },
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale;
    },
  },
};
</script>

<style></style>
