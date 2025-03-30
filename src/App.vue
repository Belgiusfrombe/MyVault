<script setup>
import { RouterLink, RouterView } from "vue-router";
import AppFooter from "@/components/AppFooter.vue";
import AppHeader from "@/components/AppHeader.vue";
</script>

<template>
  <body class="min-h-screen flex bg-mainpurple text-gray-800 font-kanit">
    <AppHeader />
    <main class="flex-1 ml-[25%]">
      <RouterView />
    </main>
    <AppFooter />
  </body>
</template>

<style>
header{
  font-family: 'Bebas Neue', sans-serif;
}
</style>
