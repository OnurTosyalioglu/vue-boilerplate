<template>
  <div class="navbar grid grid-cols-12 bg-base-100">
      <Sidebar />
      <Logo />
      <Name />
      <Navmenu />
      <template v-if='auth'>
        <Notifications />
        <Profile />
      </template>
      <template v-else>
        <Auth />
      </template>
      <LocaleSwitch />
  </div>
</template>

<script>
  import Logo from '../logo/Logo.vue'
  import Sidebar from '../sidebar/Sidebar.vue'
  import Name from '../name/Name.vue'
  import Navmenu  from '../navmenu/Navmenu.vue'
  import Auth from '../auth/Auth.vue'
  import Notifications from '../notifications/Notifications.vue'
  import Profile from '../profile/Profile.vue'
  import LocaleSwitch from '../localeSwitch/LocaleSwitch.vue'

  export default {
    components: {
      Sidebar,
      Logo,
      Name,
      Navmenu,
      Profile,
      LocaleSwitch,
      Notifications,
      Auth,
    },
    data() {
      return {
        auth: true,
      }
    },
  }
</script>

<style>
</style>
