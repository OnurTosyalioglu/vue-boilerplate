<template>
  <div class="col-span-10 md:col-span-1 justify-self-center">
    <AsyncImage 
      scale='2' 
      height='2rem' 
      width='2rem' 
      src='https://picsum.photos/1200'
      alt='test'
     />
  </div>
</template>

<script>
import AsyncImage from "../asyncImage/AsyncImage.vue";

export default {
  components: {
    AsyncImage,
  },
  data() {
    return {

    }
  },
};
</script>

<style></style>
