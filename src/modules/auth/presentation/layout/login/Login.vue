<template>
  <metainfo>
    <template v-slot:title="{ content }">
      {{ $t(content) }}
    </template>
  </metainfo>

    <div class='lg:container mx-auto px-4'>
    </div>
</template>

<script>
import { useMeta } from 'vue-meta'

export default {
  setup () {
    useMeta({
      title: 'auth.login',
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
