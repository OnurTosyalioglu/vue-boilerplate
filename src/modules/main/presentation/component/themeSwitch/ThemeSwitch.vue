<template>
  <div>
    <select
      v-model="key"
      class="select select-bordered select-sm"
      data-choose-theme
    >
      <option
        v-for="(theme, index) in themes"
        :key="index"
        class="mr-5"
      >
        {{ theme }}
      </option>
    </select>
  </div>
</template>

<script>
import { themeChange } from "theme-change";
export default {
  data: () => ({
    themes: ["light", "luxury", "dark"],
    key: "",
  }),
  async mounted() {
    themeChange(false);
    await this.getTheme();
  },

  methods: {
    getTheme() {
      this.key = localStorage.getItem("theme") || "dark";
      return this.key;
    },
  },
};
</script>
