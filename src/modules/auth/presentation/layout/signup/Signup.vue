<template>
  <metainfo>
    <template v-slot:title="{ content }">
      {{ $t(content) }}
    </template>
  </metainfo>

  <div class="grid grid-cols-4 max-w-sm mx-auto px-4">
    <ContinueWithFacebook />
    <ContinueWithGoogle />
    <Divider />
    <Email />
    <Password />
    <div class="col-span-6"></div>
    <ForgotPassword />
    <SignupButton />
    <Options
      :text="$t('auth.alreadyHaveAnAccount')"
      link="/login"
    />
  </div>
</template>

<script>
import { useMeta } from 'vue-meta'
import ContinueWithFacebook from '../../component/continueWithFacebook/ContinueWithFacebook.vue'
import ContinueWithGoogle from '../../component/continueWithGoogle/ContinueWithGoogle.vue'
import Divider from '../../component/divider/Divider.vue'
import Email from '../../component/email/Email.vue'
import Password from '../../component/password/Password.vue'
import SignupButton from '../../component/signupButton/SignupButton.vue'
import Options from '../../component/options/Options.vue'
import ForgotPassword from '../../component/forgotPassword/ForgotPassword.vue'
import RememberMe from '../../component/rememberMe/RememberMe.vue'

export default {
  setup () {
    useMeta({
      title: 'auth.signup',
      htmlAttrs: {
        amp: true,
      }
    })
  },
  components: {
    ContinueWithGoogle,
    ContinueWithFacebook,
    Divider,
    Email,
    Password,
    RememberMe,
    ForgotPassword,
    SignupButton,
    Options,
  },
  data () {
    return {
      email: '',
      password: '',
      error: '',
    }
  }
}
</script>

<style></style>
