<template>
  <div class="col-span-12 justify-self-center mt-24">
    <router-link :to='link'>
      {{ text }}
    </router-link>
  </div>
</template>

<script>
  export default {
    props: {
      link: String,
      text: String,
    },
    data() {
      return {
        link: this.link,
        text: this.text,
      }
    }
  }
</script>

<style>
</style>
