<template>
  <div class='pb-8'/>
  <div class='grid grid-cols-12 fixed bottom-0 left-0 w-full bg-white py-0.5'>
    <Copyright />
    <Social />
    <Contact />
  </div>
</template>

<script>
  import Social from '../social/Social.vue'
  import Copyright from '../copyright/Copyright.vue'
  import Contact from '../contact/Contact.vue'
  
export default {
  components: {
    Social,
    Copyright,
    Contact,
  }
}
</script>
 
<style>
</style>
