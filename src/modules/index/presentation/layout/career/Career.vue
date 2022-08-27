<template>
  <metainfo>
    <template v-slot:title="{ content }">
      {{ $t(content) }}
    </template>
  </metainfo>

    <div class='lg:container mx-auto px-4'>
      
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

    </div>
</template>

<script>
import { useMeta } from 'vue-meta'

export default {
  setup () {
    useMeta({
      title: 'index.career',
      htmlattrs: {
        amp: true,
      }
    })
  },

  data () {
    return {

    }
  },
}
</script>

<style>
</style>
