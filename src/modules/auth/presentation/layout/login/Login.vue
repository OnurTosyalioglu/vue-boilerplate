<template>
  <metainfo>
    <template v-slot:title="{ content }">
      {{ $t(content) }}
    </template>
  </metainfo>

  <div 
    v-if="loading" 
    class="grid grid-cols-12 max-w-sm mx-auto px-4 h-screen pb-36 justify-items-center content-center">
    <div class="col-span-12">
    <v-icon name="pr-spinner" animation="spin" scale="2.5"/>
    </div>
  </div>

  <div v-if="!loading" class="grid grid-cols-12 max-w-sm mx-auto px-4">
    <ContinueWithFacebook />
    <ContinueWithGoogle />
    <Divider />
    <Email v-model:email="email" v-model:error="error" />
    <Password
      v-model:password="password"
      v-model:error="error"
    />
    <RememberMe />
    <ForgotPassword />
    <LoginButton
      v-model:email="email"
      v-model:password="password"
      v-model:error="error"
    />
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
import { mapState, mapActions, mapMutations } from 'vuex'


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
    return {
      email: "",
      password: "",
      error: "",
    }
  },
  computed: mapState({
    loading: state => state.auth.loading,
    user: state => state.auth.user,
    error: state => state.auth.error,
  }),
  methods: {

  },
};
</script>

<style></style>
