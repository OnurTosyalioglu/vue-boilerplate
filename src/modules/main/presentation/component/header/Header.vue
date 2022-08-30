<template>
  <div 
    class="col-span-12 mt-16 justify-self-center"
    :class="titleSize ? titleSize : 'text-[2rem]'"
  >
    {{ title }} 
  </div>
   <div 
    class="col-span-12 mb-16"
   >
    {{ subtitle }} 
  </div>
</template>

<script>
  export default {
    props: {
      title: String,
      subtitle: String,
      titleSize: String,
      subtitleSize: String,
    },
  }
</script>

<style>
</style>
