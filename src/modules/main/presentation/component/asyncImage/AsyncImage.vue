<template>
  <div>
    <vue-load-image>
      <template v-slot:image>
        <img 
          :style="size" 
          :src="src" 
          :alt="alt" />
      </template>
      <template v-slot:preloader>
        <v-icon
          name="pr-spinner"
          animation="spin-pulse"
          speed="fast"
          :scale="scale"
        >
        </v-icon>
      </template>
      <template v-slot:error> </template>
    </vue-load-image>
  </div>
</template>

<script>
import VueLoadImage from "vue-load-image";

export default {
  components: {
    "vue-load-image": VueLoadImage,
  },
  props: {
    width: String,
    height: String,
    alt: String,
    src: String,
    scale: String,
  },
  data() {
    return {
      width: this.width,
      height: this.height,
      size: {
        width: this.width,
        height: this.width,
      }
    }
  }
};
</script>

<style></style>
