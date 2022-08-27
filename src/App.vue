<template>
  <Navbar />
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition || 'fade'">
      <Suspense>
        <div :key="route.name">
          <component :is="Component" />
        </div>
        <template #fallback> ...loading </template>
      </Suspense>
    </transition>
  </router-view>
  <Footer />
</template>

<script setup>
import Navbar from "./modules/main/presentation/component/navbar/Navbar.vue";
import Footer from "./modules/main/presentation/component/footer/Footer.vue";
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
