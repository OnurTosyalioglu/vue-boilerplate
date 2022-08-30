<template>
  <div v-if="align == 'left'" class="grid grid-cols-12">
    <div class="col-span-6">
      <div
        class="title"
        :class="titleSize ? titleSize : 'text-[3rem]'"
      >
        {{ title }}
      </div>
      <div
        class="subtitle"
        :class="subtitleSize ? subtitleSize : 'text-[2rem]'"
      >
        {{ subtitle }}
      </div>
    </div>
    <div class="col-span-6">
      <AsyncImage
        :scale="scale ? scale : 3"
        :height="height ? height : '50%'"
        :width="width ? width : '50%'"
        :src="src"
        :alt="alt"
      />
    </div>
  </div>
  <div v-if="align == 'right'" class="grid grid-cols-12">
    <div class="col-span-6">
      <AsyncImage
        :scale="scale ? scale : 3"
        :height="height ? height : '50%'"
        :width="width ? width : '50%'"
        :src="src"
        :alt="alt"
      />
    </div>
    <div class="col-span-6">
      <div
        class="title"
        :class="titleSize ? titleSize : 'text-[3rem]'"
      >
        {{ title }}
      </div>
      <div
        class="subtitle"
        :class="subtitleSize ? subtitleSize : 'text-[2rem]'"
      >
        {{ subtitle }}
      </div>
    </div>
  </div>
</template>

<script>
import AsyncImage from "../asyncImage/AsyncImage.vue";
export default {
  components: {
    AsyncImage,
  },
  data: () => ({}),
  props: {
    align: String,
    title: String,
    titleSize: String,
    subtitle: String,
    subtitleSize: String,
    src: String,
    height: String,
    width: String,
    alt: String,
    scale: String,
  },
};
</script>

<style></style>
