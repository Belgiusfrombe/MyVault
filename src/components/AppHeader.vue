<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import Logo from "./Logo.vue";
import LineHeader from "./LineHeader.vue";
const route = useRoute();
</script>

<template>
  <aside
    class="absolute left-0 h-full w-1/4 header-gradient animate-gradient backdrop-blur-sm z-50 flex flex-col items-center py-8"
  >
    <!-- Logo -->
     <router-link to="/" class="flex flex-col items-center justify-center gap-4">
      <h1 class="text-4xl font-bold">
        <span class="text-white">YOUR</span>
        <span class="text-white">VAULT</span>
      </h1>
    <div class="relative h-28 w-28 mb-16">
      <Logo class="transition-transform duration-300 hover:rotate-180 hover:scale-110 cursor-pointer"/>
    </div>
    </router-link>
    <!-- Navigation -->
    <nav class="flex flex-col items-start w-full px-8">
      <RouterLink
        to="/"
        class="text-white hover:text-darkgreen transition-colors duration-300 flex items-center w-full justify-between py-2 font-bebas group"
        :class="{
          'font-bold': route.path === '/',
          'font-light': route.path !== '/',
        }"
      >
        <span class="text-4xl">Accueil</span>
        <LineHeader />
      </RouterLink>
      <div class="w-full border-b border-dashed border-darkgreen/30 my-4"></div>

      <RouterLink
        to="/services"
        class="text-white hover:text-darkgreen transition-colors duration-300 flex items-center w-full justify-between py-2 font-bebas group"
        :class="{
          'font-bold text-darkgreen': route.path === '/services',
          'font-light': route.path !== '/services',
        }"
      >
        <span class="text-4xl">Notre réserve</span>
        <LineHeader />
      </RouterLink>
      <div class="w-full border-b border-dashed border-darkgreen/30 my-4"></div>

      <RouterLink
        to="/about"
        class="text-white hover:text-darkgreen transition-colors duration-300 flex items-center w-full justify-between py-2 font-bebas group"
        :class="{
          'font-bold': route.path === '/about',
          'font-light': route.path !== '/about',
        }"
      >
        <span class="text-4xl">À propos</span>
        <LineHeader />
      </RouterLink>
      <div class="w-full border-b border-dashed border-darkgreen/30 my-4"></div>

      <RouterLink
        to="/contact"
        class="text-white hover:text-darkgreen transition-colors duration-300 flex items-center w-full justify-between py-2 font-bebas group"
        :class="{
          'font-bold': route.path === '/contact',
          'font-light': route.path !== '/contact',
        }"
      >
        <span class="text-4xl">Contact</span>
        <LineHeader />
      </RouterLink>
    </nav>
  </aside>
</template>

<style scoped>
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.header-gradient {
  background: linear-gradient(
    300deg,
    #EB3349,
    #ff4a4a,
    #F45C43,
    #e6ff69,
    #13cef8
  );
  background-size: 300% 300%;
  animation: gradient 8s ease infinite;
}

.animate-gradient {
  background-size: 200% 300%;
  animation: gradient 15s ease infinite;
}
</style>
