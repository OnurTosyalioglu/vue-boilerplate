<template>
  <ul class="li">
    <li class='flex items-center mx-2 mt-4'>
    <AsyncImage 
      scale='2' 
      height='2rem' 
      width='2rem' 
      src='https://picsum.photos/1200'
      alt='test'
      class='mr-2'
     />
      {{ $t('main.app') }}
    </li>
  </ul>
  <div class='divider'/>
  <ul v-for='item in index'>
    <router-link :to='item.path'>
      <li class='m-2'>
        {{ $t('index.' + item.name) }}
      </li>
    </router-link>
  </ul>
  <div class='divider'/>
</template>

<script>
  import index from '../../../../../route/index.js'
  import AsyncImage from '../asyncImage/AsyncImage.vue'
  export default {
    data() {
      return {
        index,
      }
    },
    components: {
      AsyncImage,
    }
  }
</script>

<style>
</style>
