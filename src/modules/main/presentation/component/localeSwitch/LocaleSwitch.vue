<template>
  <div class="col-span-1 justify-self-center xl:justify-self-start hidden md:flex">
    <div class="dropdown dropdown-end">
      <label tabindex="0" class="">
        <v-icon name="md-language-sharp" scale="1.25" />
      </label>
      <ul
        tabindex="0"
        class="dropdown-content menu p-2 shadow bg-base-100 rounded-box"
      >
        <div
          class="flex m-2 link no-underline items-center"
          @click="setLocale('en')"
        >
          <v-icon name="fi-gb-eng" scale="1" class="mr-2" />
          {{ $t("main.english") }}
        </div>
        <div
          class="flex m-2 link no-underline items-center"
          @click="setLocale('tr')"
        >
          <v-icon name="fi-tr" scale="1" class="mr-2" />
          {{ $t("main.turkish") }}
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale;
    },
  },
};
</script>

<style></style>
