<script setup>
import { useReferencesStore } from '@/stores/references'

const referencesStore = useReferencesStore()
</script>

<template>
  <div class="min-h-screen bg-mainpurple">
    <!-- Section Services -->
    <section class="py-20 px-8">
      <div class="max-w-7xl mx-auto">
        <h1 class="text-5xl font-bold text-white mb-12 text-center">Nos Services</h1>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Service 1 -->
          <div class="bg-white rounded-lg p-6 shadow-lg transform transition-transform duration-300 hover:scale-105">
            <h2 class="text-2xl font-bold text-darkgreen mb-4">Développement Web</h2>
            <p class="text-gray-600">Création de sites web modernes et responsifs adaptés à vos besoins.</p>
          </div>

          <!-- Service 2 -->
          <div class="bg-white rounded-lg p-6 shadow-lg transform transition-transform duration-300 hover:scale-105">
            <h2 class="text-2xl font-bold text-darkgreen mb-4">Design UI/UX</h2>
            <p class="text-gray-600">Interfaces utilisateur intuitives et expériences utilisateur optimisées.</p>
          </div>

          <!-- Service 3 -->
          <div class="bg-white rounded-lg p-6 shadow-lg transform transition-transform duration-300 hover:scale-105">
            <h2 class="text-2xl font-bold text-darkgreen mb-4">Applications Mobile</h2>
            <p class="text-gray-600">Applications mobiles natives et cross-platform performantes.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Références -->
    <section class="py-20 px-8 bg-darkgreen/10">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-4xl font-bold text-white mb-12 text-center">Nos Références</h2>
        
          <RouterLink to="/services/:id" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <div v-for="reference in referencesStore.references" :key="reference.id" 
               class="bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 relative">
            <!-- Icône selon la catégorie -->
            <div class="absolute top-2 left-2 text-greenmain">
              <svg v-if="reference.category === 'Web'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              <svg v-else-if="reference.category === 'Mobile'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <svg v-else-if="reference.category === 'Design'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <div class="p-4 pt-12">
              <h3 class="text-lg font-bold text-darkgreen mb-1">{{ reference.title }}</h3>
              <p class="text-sm text-gray-600 mb-2 line-clamp-2">{{ reference.description }}</p>
              <span class="inline-block bg-greenmain text-white px-2 py-0.5 rounded-full text-xs">
                {{ reference.category }}
              </span>
            </div>
          </div>
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.bg-mainpurple {
  background-color: #1a1a2e;
}
</style> 