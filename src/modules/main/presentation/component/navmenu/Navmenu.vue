<template>
  <div class="col-span-6 hidden md:flex justify-self-end">
    <ul v-for='item in index' class="ml-3">
      <router-link :to='item.path'>
        <li>{{ $t('index.' + item.name) }}</li>
      </router-link>
    </ul>
  </div>
</template>

<script>
  import index from '../../../../../route/index.js'
  export default {
    data() {
      return {
        index,
      }
    }
  }
</script>
 
<style>
</style>
