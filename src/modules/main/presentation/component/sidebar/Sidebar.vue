<template>
  <div class="col-span-1 md:hidden">
    <v-icon name='fa-align-left' scale='1.25' @click='toggle'/>
    <div
      v-if="side"
      class="fixed top-0 left-0 right-0 flex opacity-50 bg-gray-200 w-full h-full md:hidden"
      @click="toggle"
    ></div>
    <div v-if="side" id='slide' class="w-48 bg-white fixed top-0 left-0 right-0 h-full" @click='toggle'>
      <Sidemenu />
    </div>
  </div>
</template>

<script>
  import Sidemenu from '../sidemenu/Sidemenu.vue'
export default {
  components: {
    Sidemenu,
  },
  data() {
    return {
      side: false,
    };
  },
  methods: {
    toggle() {
      this.side = !this.side;
    },
  },
};
</script>

<style>
#slide {
    left: -128px;
    -webkit-animation: slide 0.25s forwards;
    -webkit-animation-delay: 0.25s;
    animation: slide 0.25s forwards;
    animation-delay: 0.25s;
}

@-webkit-keyframes slide {
    100% { left: 0; }
}

@keyframes slide {
    100% { left: 0; }
}
</style>
