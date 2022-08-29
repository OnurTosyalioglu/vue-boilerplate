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
    <RememberMe />
    <ForgotPassword />
    <LoginButton />
    <Options
      :text="$t('auth.dontHaveAnAccount')"
      link="/signup"
    />
  </div>
</template>

<script>
import { useMeta } from "vue-meta";
import ContinueWithFacebook from "../../component/continueWithFacebook/ContinueWithFacebook.vue";
import ContinueWithGoogle from "../../component/continueWithGoogle/ContinueWithGoogle.vue";
import Divider from "../../component/divider/Divider.vue";
import Email from "../../component/email/Email.vue";
import Password from "../../component/password/Password.vue";
import LoginButton from "../../component/loginButton/LoginButton.vue";
import Options from "../../component/options/Options.vue";
import ForgotPassword from "../../component/forgotPassword/ForgotPassword.vue";
import RememberMe from "../../component/rememberMe/RememberMe.vue";

export default {
  setup() {
    useMeta({
      title: "auth.login",
      htmlAttrs: {
        amp: true,
      },
    });
  },
  components: {
    ContinueWithGoogle,
    ContinueWithFacebook,
    Divider,
    Email,
    Password,
    RememberMe,
    ForgotPassword,
    LoginButton,
    Options,
  },
    data () {
      email: '',
      password: '',
      error: '',
    },
};
</script>

<style></style>
