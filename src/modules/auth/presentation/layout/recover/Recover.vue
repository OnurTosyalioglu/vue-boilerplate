<template>
  <metainfo>
    <template v-slot:title="{ content }">
      {{ $t(content) }}
    </template>
  </metainfo>

  <div class="grid grid-cols-12 max-w-sm mx-auto px-4">
    <Header 
      :title="$t('auth.recover')"
    />
  <Email 
    v-model:email="email"
    v-model:error="error"
  />
  <RecoverButton 
    v-model:email="email"
    v-model:error="error"
  /> 
  </div>
</template>

<script>
import { useMeta } from 'vue-meta'
import Header from '../../../../main/presentation/component/header/Header.vue'
import Email from '../../../../auth/presentation/component/email/Email.vue'
import RecoverButton from '../../component/recoverButton/RecoverButton.vue'

export default {
  setup () {
    useMeta({
      title: 'auth.login',
      htmlAttrs: {
        amp: true,
      }
    })
  },
  components: {
    Header,
    Email,
    RecoverButton,
  },
  data: () => ({
    email: '',
    error: '',
  }),
}
</script>

<style>
</style>
