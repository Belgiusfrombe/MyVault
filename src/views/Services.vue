<script setup>
import { useReferencesStore } from '@/stores/references'
const referencesStore = useReferencesStore()

</script>

<template>
  <div class="min-h-screen bg-mainpurple">

    <section>
      <ul>
        <li>
          <a href="#" filter-by="none">
            Tout
          </a>
        </li>
        <li>
          <a href="#" filter-by="web">
            Web
          </a>
        </li>
        
      </ul>
    </section>
    <!-- Section Références -->
    <section class="py-20 px-8 bg-darkgreen/10">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-4xl font-bold text-white mb-12 text-center">Nos Références</h2>

          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <a :href="`${reference.link}`" v-for="reference in referencesStore.references" :key="reference.id" 
               class="bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 relative py-8">
            <!-- Icône selon la catégorie -->
            <div class="inline-flex top-2 left-2 text-greenmain px-4">
              <div class="rounded-full flex flex-row gap-4">
                <img v-if="reference.favicon" :src="reference.favicon" alt="Favicon" class="w-8 h-8 ">
                <img v-else src="../assets/img/favicon.ico" alt="Favicon" class="w-8 h-8 ">
                <h3 class="text-lg font-bold text-darkgreen mb-1">{{ reference.title }}</h3>
              </div>
            </div>
            <div class="px-4">
              <p class="text-sm text-gray-600 mb-2 line-clamp-2">{{ reference.description }}</p>
              <span class="inline-block bg-greenmain text-white px-2 py-0.5 rounded-full text-xs">
                {{ reference.category }}
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.bg-mainpurple {
  background-color: #1a1a2e;
}
</style> 