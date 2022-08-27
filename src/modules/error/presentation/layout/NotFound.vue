<template>
  <metainfo>
    <template v-slot:title="{ content }">
      {{ $t(content) }}
    </template>
  </metainfo>

    <div class='lg:container mx-auto px-4'>
      error
    </div>
</template>

<script>
import { useMeta } from 'vue-meta'

export default {
  setup () {
    useMeta({
      title: 'error.notFound',
      htmlAttrs: {
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
