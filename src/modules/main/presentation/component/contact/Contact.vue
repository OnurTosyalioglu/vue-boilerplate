<template>
  <div class="col-span-2 hidden md:flex justify-self-center text-lg">
    <a :href='mailto' target='_blank'>
      {{ $t('main.contactMail') }}
    </a>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        mailto: 'mailto:test@test.com',
      }
    }
  }
</script>

<style>
</style>
