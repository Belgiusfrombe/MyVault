<script setup>
import { useReferencesStore } from '@/stores/references'
import { ref, computed } from "vue";

const referencesStore = useReferencesStore();
const searchQuery = ref("");
const selectedCategory = ref("All");

// Récupérer les catégories uniques du store
const categories = computed(() => {
  const uniqueCategories = new Set();
  referencesStore.references.forEach(ref => {
    if (Array.isArray(ref.category)) {
      ref.category.forEach(cat => uniqueCategories.add(cat));
    } else {
      uniqueCategories.add(ref.category);
    }
  });
  return ["All", ...uniqueCategories];
});

// Filtrer les références en fonction du titre et de la catégorie
const filteredReferences = computed(() => {
  return referencesStore.references.filter(reference => {
    const matchesTitle = reference.title.toLowerCase().includes(searchQuery.value.toLowerCase());
    const matchesCategory = selectedCategory.value === "All" || 
      (Array.isArray(reference.category) ? reference.category.includes(selectedCategory.value) : reference.category === selectedCategory.value);
    return matchesTitle && matchesCategory;
  });
});
</script>

<template>
  <div class="min-h-screen bg-mainpurple">
    <section class="py-20 px-8 bg-darkgreen/10">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-4xl font-bold text-white mb-12 text-center">Nos Références</h2>
        
        <div class="flex justify-center gap-4 mb-8 text-white">
          <input 
            type="text" 
            placeholder="Search..." 
            v-model="searchQuery" 
            class="w-1/2 p-2 rounded-full bg-darkgreen/50 text-white"
          >
        </div>

        <ul class="flex justify-center gap-4 mb-8 text-white">
          <li v-for="category in categories" :key="category">
            <a 
              href="#" 
              @click.prevent="selectedCategory = category" 
              :class="{'bg-greenmain': selectedCategory === category, 'bg-mindaro': selectedCategory !== category}"
              class="px-4 py-2 rounded-full hover:bg-greenmain/80 transition-colors duration-300 hover:scale-105 cursor-pointer"
            >
              {{ category }}
            </a>
          </li>
        </ul>
        
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          <a 
            v-for="reference in filteredReferences" 
            :key="reference.id" 
            :href="reference.link"
            class="bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 relative py-8 hover:border-2 hover:border-greenmain"
          >
            <div class="inline-flex top-2 left-2 text-greenmain px-4">
              <div class="rounded-full flex flex-row gap-4">
                <img v-if="reference.favicon" :src="reference.favicon" alt="Favicon" class="w-8 h-8">
                <img v-else src="../assets/img/favicon.ico" alt="Favicon" class="w-8 h-8">
                <h3 class="text-lg font-bold text-darkgreen mb-1">{{ reference.title }}</h3>
              </div>
            </div>
            <div class="px-4">
              <p class="text-sm text-gray-600 mb-2 line-clamp-2">{{ reference.description }}</p>
              <div class="flex flex-wrap gap-2">
                <span v-for="cat in reference.category" :key="cat" class="inline-block bg-greenmain text-white px-2 py-0.5 rounded-full text-xs">
                  {{ cat }}
                </span>
              </div>
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