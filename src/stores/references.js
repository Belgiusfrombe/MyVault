import { defineStore } from 'pinia'

export const useReferencesStore = defineStore('references', {
  state: () => ({
    references: [
      {
        id: 1,
        title: "Pousse ta fonte",
        description: "Bibliothèque typographique en ligne",
        image: "https://picsum.photos/200/300",
        category: "Typographie",
        link: "https://www.poussetafonte.com/",
        favicon: "https://www.google.com/s2/favicons?domain_url=poussetafonte.com "
      },
      {
        id: 2,
        title: "Typogaphic Posters",
        description: "Website pour des références de posters en tout genre",
        image: "/src/assets/img/reference2.jpg",
        category: "Typographie",
        link: "https://www.typographicposters.com",
        favicon: "https://www.google.com/s2/favicons?domain_url=www.typographicposters.com"
      },
      {
        id: 3,
        title: "Velvetyn",
        description: "Bilbiothèque de typographie en ligne",
        image: "/src/assets/img/reference3.jpg",
        category: "Typographie",
        link: "https://velvetyne.fr/",
        favicon: "https://www.google.com/s2/favicons?domain_url=velvetyne.fr"
      },
      {
        id: 4,
        title: "Site Vitrine",
        description: "Site web pour une entreprise locale",
        image: "/src/assets/img/reference4.jpg",
        category: "Web"
      },
      {
        id: 5,
        title: "App Fitness",
        description: "Application de suivi d'entraînement",
        image: "/src/assets/img/reference5.jpg",
        category: "Mobile"
      },
      {
        id: 6,
        title: "Branding",
        description: "Identité visuelle pour une startup",
        image: "/src/assets/img/reference6.jpg",
        category: "Design"
      },
      {
        id: 7,
        title: "Portfolio Artistique",
        description: "Site de présentation pour un artiste",
        category: "Web"
      },
      {
        id: 8,
        title: "App Restaurant",
        description: "Application de commande en ligne",
        category: "Mobile"
      },
      {
        id: 9,
        title: "Packaging Design",
        description: "Design d'emballage pour produits",
        category: "Design"
      },
      {
        id: 10,
        title: "Blog Personnel",
        description: "Plateforme de blog personnalisée",
        category: "Web"
      },
      {
        id: 11,
        title: "App Météo",
        description: "Application de prévisions météo",
        category: "Mobile"
      },
      {
        id: 12,
        title: "Logo Design",
        description: "Création de logos pour entreprises",
        category: "Design"
      },
      {
        id: 13,
        title: "Site d'Actualités",
        description: "Plateforme de news responsive",
        category: "Web"
      },
      {
        id: 14,
        title: "App Sociale",
        description: "Application de réseau social",
        category: "Mobile"
      },
      {
        id: 15,
        title: "Design Print",
        description: "Design de supports imprimés",
        category: "Design"
      },
      {
        id: 16,
        title: "Site Institutionnel",
        description: "Site web pour une institution",
        category: "Web"
      },
      {
        id: 17,
        title: "App Transport",
        description: "Application de réservation de transport",
        category: "Mobile"
      },
      {
        id: 18,
        title: "Design Digital",
        description: "Design d'interfaces digitales",
        category: "Design"
      },
      {
        id: 19,
        title: "Site Éducatif",
        description: "Plateforme d'apprentissage en ligne",
        category: "Web"
      },
      {
        id: 20,
        title: "App Santé",
        description: "Application de suivi médical",
        category: "Mobile"
      },
      {
        id: 21,
        title: "Design Motion",
        description: "Design d'animations et motion",
        category: "Design"
      },
      {
        id: 22,
        title: "Site Immobilier",
        description: "Plateforme de recherche immobilière",
        category: "Web"
      },
      {
        id: 23,
        title: "App Finance",
        description: "Application de gestion financière",
        category: "Mobile"
      },
      {
        id: 24,
        title: "Design 3D",
        description: "Design de modèles 3D",
        category: "Design"
      },
      {
        id: 25,
        title: "Site Culturel",
        description: "Site web pour un musée",
        category: "Web"
      },
      {
        id: 26,
        title: "App Voyage",
        description: "Application de planification de voyage",
        category: "Mobile"
      },
      {
        id: 27,
        title: "Design UX",
        description: "Design d'expérience utilisateur",
        category: "Design"
      },
      {
        id: 28,
        title: "Site Sportif",
        description: "Plateforme de réservation sportive",
        category: "Web"
      },
      {
        id: 29,
        title: "App Éducation",
        description: "Application d'apprentissage",
        category: "Mobile"
      },
      {
        id: 30,
        title: "Design Branding",
        description: "Design d'identité visuelle",
        category: "Design"
      }
    ]
  }),

  getters: {
    getAllReferences: (state) => state.references,
    getReferencesByCategory: (state) => (category) => {
      return state.references.filter(ref => ref.category === category)
    },
    getReferencesCount: (state) => state.references.length,
    getReferencesWithFavicons: (state) => {
      return state.references.map(ref => ({
        ...ref,
        favicon: ref.link ? `https://icons.duckduckgo.com/ip2/${ref.link}.ico` : ""
      }))
    }
  },

  actions: {
    addReference(reference) {
      this.references.push({
        id: this.references.length + 1,
        ...reference
      })
    },

    removeReference(id) {
      this.references = this.references.filter(ref => ref.id !== id)
    },

    updateReference(id, updatedReference) {
      const index = this.references.findIndex(ref => ref.id === id)
      if (index !== -1) {
        this.references[index] = { ...this.references[index], ...updatedReference }
      }
    },
    filterReferences(category) {
      return this.references.filter(ref => ref.category === category)
    }
  }
}) 