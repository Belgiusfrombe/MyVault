<script setup>
import { useReferencesStore } from '@/stores/references'

const referencesStore = useReferencesStore()
</script>

<template>
  <section class="relative h-screen w-full overflow-hidden">
    <!-- Image de fond -->
    <div class="absolute inset-0">
      <img 
        src="../assets/img/background2.jpg" 
        alt="Design background"
        class="w-full h-full object-cover animate-slow-rotate"
      >
      <!-- Overlay sombre -->
      <div class="absolute inset-0 bg-black/60"></div>
    </div>

    <!-- Contenu -->
    <div class="relative h-full flex flex-col text-white items-center justify-center">
      <div class="text-center flex flex-row items-center justify-center">
        <h1 class="text-5xl font-bold">{{ referencesStore.getReferencesCount }}</h1>
        <div class="flex flex-col items-start">
          <h2 class="text-5xl font-bold mb-4 gradient-text">OUTILS</h2>
          <h2 class="text-5xl font-bold mb-4 gradient-text">DIFFÉRENTS</h2>
        </div>
      </div>
      
      <!-- Lorem ipsum -->
      <div class="mt-8 max-w-2xl text-center text-lg">
        <p class="jolly-lodger-regular">Parfois quand on commence les références, on ne sait pas comment les utiliser, ni comment les trouver. C'est pourquoi nous avons créé ce site web pour vous aider à trouver les outils dont vous avez besoin.</p>
      </div>
    </div>
  </section>
</template> 

<style scoped>
h1{
  font-family: 'Bebas Neue', sans-serif;
  font-size: 300px;
}
h2{
  font-family: 'Bebas Neue', sans-serif;
  font-size: 100px;
}

.bebas-neue-regular{
  font-family: 'Bebas Neue', sans-serif;
  font-size: 20px;
}

@keyframes slow-rotate {
  from {
    transform: rotate(0deg) scale(4);
  }
  to {
    transform: rotate(360deg) scale(4);
  }
}

.gradient-text {
  background: linear-gradient(
    300deg,
    #0ecff6,
    #f2f2f2,
    #2df3ec,
    #22f898,
    #13cef8
  );
  background-size: 300% 300%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: gradient 8s ease infinite;
}

.animate-slow-rotate {
  animation: slow-rotate 60s linear infinite;
}
</style>