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
        favicon: "https://icons.duckduckgo.com/ip2/poussetafonte.com.ico"
      },
      {
        id: 2,
        title: "Typographic Posters",
        description: "Website pour des références de posters en tout genre",
        image: "/src/assets/img/reference2.jpg",
        category: "Typographie",
        link: "https://www.typographicposters.com",
        favicon: "https://icons.duckduckgo.com/ip2/typographicposters.com.ico"
      },
      {
        id: 3,
        title: "Velvetyn",
        description: "Bibliothèque de typographie en ligne",
        image: "/src/assets/img/reference3.jpg",
        category: "Typographie",
        link: "https://velvetyne.fr/",
        favicon: "https://icons.duckduckgo.com/ip2/velvetyne.fr.ico"
      },
      {
        id: 4,
        title: "Awwwards",
        description: "Récompenses pour les meilleurs sites web design",
        image: "https://picsum.photos/200/301",
        category: "Inspiration",
        link: "https://www.awwwards.com/",
        favicon: "https://icons.duckduckgo.com/ip2/awwwards.com.ico"
      },
      {
        id: 5,
        title: "Dribbble",
        description: "Inspiration UI/UX pour designers",
        image: "https://picsum.photos/200/302",
        category: "Inspiration",
        link: "https://dribbble.com/",
        favicon: "https://icons.duckduckgo.com/ip2/dribbble.com.ico"
      },
      {
        id: 6,
        title: "Behance",
        description: "Portfolios créatifs et projets graphiques",
        image: "https://picsum.photos/200/303",
        category: "Inspiration",
        link: "https://www.behance.net/",
        favicon: "https://icons.duckduckgo.com/ip2/behance.net.ico"
      },
      {
        id: 7,
        title: "Coolors",
        description: "Générateur de palettes de couleurs",
        image: "https://picsum.photos/200/304",
        category: "Couleurs",
        link: "https://coolors.co/",
        favicon: "https://icons.duckduckgo.com/ip2/coolors.co.ico"
      },
      {
        id: 8,
        title: "Adobe Color",
        description: "Outil de création de palettes de couleurs",
        image: "https://picsum.photos/200/305",
        category: "Couleurs",
        link: "https://color.adobe.com/",
        favicon: "https://icons.duckduckgo.com/ip2/color.adobe.com.ico"
      },
      {
        id: 9,
        title: "Font Squirrel",
        description: "Bibliothèque de polices gratuites",
        image: "https://picsum.photos/200/306",
        category: "Typographie",
        link: "https://www.fontsquirrel.com/",
        favicon: "https://icons.duckduckgo.com/ip2/fontsquirrel.com.ico"
      },
      {
        id: 10,
        title: "Google Fonts",
        description: "Collection de polices open-source",
        image: "https://picsum.photos/200/307",
        category: "Typographie",
        link: "https://fonts.google.com/",
        favicon: "https://icons.duckduckgo.com/ip2/google.com.ico"
      },
      {
        id: 15,
        title: "Unsplash",
        description: "Banque d'images libres de droits",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://unsplash.com/",
        favicon: "https://icons.duckduckgo.com/ip2/unsplash.com.ico"
      },
      {
        id: 16,
        title: "Pexels",
        description: "Photos et vidéos gratuites pour vos projets",
        image: "https://picsum.photos/200/309",
        category: "Photographie",
        link: "https://www.pexels.com/",
        favicon: "https://icons.duckduckgo.com/ip2/pexels.com.ico"
      },
      {
        id: 17,
        title: "Figma",
        description: "Outil de design collaboratif pour UI/UX",
        image: "https://picsum.photos/200/310",
        category: "Design UI/UX",
        link: "https://www.figma.com/",
        favicon: "https://icons.duckduckgo.com/ip2/figma.com.ico"
      },
      {
        id: 18,
        title: "LottieFiles",
        description: "Animations vectorielles pour vos projets web et apps",
        image: "https://picsum.photos/200/311",
        category: "Motion Design",
        link: "https://lottiefiles.com/",
        favicon: "https://icons.duckduckgo.com/ip2/lottiefiles.com.ico"
      },
      {
        id: 19,
        title: "Flaticon",
        description: "Base de données d'icônes vectorielles",
        image: "https://picsum.photos/200/312",
        category: "Icônes",
        link: "https://www.flaticon.com/",
        favicon: "https://icons.duckduckgo.com/ip2/flaticon.com.ico"
      },
      {
        id: 20,
        title: "Mobin",
        description: "Application Mobile inspiration pour les designers",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://mobbin.com/",
        favicon: "https://icons.duckduckgo.com/ip2/mobbin.com.ico"
      },
      {
        id: 21,
        title: "Landbook",
        description: "Livres inspiration pour les designers",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://land-book.com/",
        favicon: "https://icons.duckduckgo.com/ip2/land-book.com.ico"
      },
      {
        id: 22,
        title: "SaasFrame",
        description: "Design inspiration for SaaS builders",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://saasframe.io/",
        favicon: "https://icons.duckduckgo.com/ip2/www.saasframe.io.ico"
      },
      {
        id: 23,
        title: "Page Flow",
        description: "Design inspiration for SaaS builders",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://pageflows.com/",
        favicon: "https://icons.duckduckgo.com/ip2/pageflows.com.ico"
      },
      {
        id: 24,
        title: "UI Garage",
        description: "Daily handpicked UI inspiration & patterns",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://uigarage.net/",
        favicon: "https://icons.duckduckgo.com/ip2/uigarage.net.ico"
      },
      {
        id: 25,
        title: "Collect UI",
        description: "Daily handpicked UI inspiration & patterns",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://collectui.com/",
        favicon: "https://icons.duckduckgo.com/ip2/collectui.com.ico"
      },
      {
        id: 26,
        title: "Good UI",
        description: "Daily handpicked UI inspiration & patterns",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://goodui.org/",
        favicon: "https://icons.duckduckgo.com/ip2/goodui.org.ico"
      },
      {
        id: 27,
        title: "UX Archive",
        description: "Daily handpicked UI inspiration & patterns",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://uxarchive.com/",
        favicon: "https://icons.duckduckgo.com/ip2/uxarchive.com.ico"
      },
      {
        id: 28,
        title: "Ptrrns",
        description: "Daily handpicked UI inspiration & patterns",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://www.pttrns.com/",
        favicon: "https://icons.duckduckgo.com/ip2/www.pttrns.com.ico"
      },
      {
        id: 29,
        title: "Design Systems Repo",
        description: "Daily handpicked UI inspiration & patterns",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://designsystemsrepo.com/",
        favicon: "https://icons.duckduckgo.com/ip2/designsystemsrepo.com.ico"
      },
      {
        id: 30,
        title: "Design Better",
        description: "Daily handpicked UI inspiration & patterns",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://designbetterpodcast.com/",
        favicon: "https://icons.duckduckgo.com/ip2/designbetterpodcast.com.ico"
      },
      {
        id: 31,
        title: "Cody House",
        description: "Daily handpicked UI inspiration & patterns",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://codyhouse.co/",
        favicon: "https://icons.duckduckgo.com/ip2/codyhouse.ico"
      },
      {
        id: 32,
        title: "Laws of UX",
        description: "Daily handpicked UI inspiration & patterns",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://lawsofux.com/",
        favicon: "https://icons.duckduckgo.com/ip2/lawsofux.com.ico"
      },
      {
        id: 33,
        title: "Open UI",
        description: "Daily handpicked UI inspiration & patterns",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://open-ui.org/",
        favicon: "https://icons.duckduckgo.com/ip2/open-ui.org.ico"
      },
      {
        id: 34,
        title: "Design Principles",
        description: "Daily handpicked UI inspiration & patterns",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://principles.design/",
        favicon: "https://icons.duckduckgo.com/ip2/principles.design.ico"
      },
      {
        id: 35,
        title: "Sidebar",
        description: "Daily handpicked UI inspiration & patterns",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://sidebar.io/",
        favicon: "https://icons.duckduckgo.com/ip2/sidebar.io.ico"
      },
      {
        id: 36,
        title: "NNgroup",
        description: "Daily handpicked UI inspiration & patterns",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://www.nngroup.com/",
        favicon: "https://icons.duckduckgo.com/ip2/www.nngroup.com.ico"
      },
      {
        id: 37,
        title: "Contrast",
        description: "Daily handpicked UI inspiration & patterns",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://usecontrast.com/",
        favicon: "https://icons.duckduckgo.com/ip2/usecontrast.com.ico"
      },
      {
        id: 38,
        title: "Coolors",
        description: "Daily handpicked UI inspiration & patterns",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://coolors.co/",
        favicon: "https://icons.duckduckgo.com/ip2/coolors.co.ico"
      },
      {
        id: 39,
        title: "Khroma",
        description: "Daily handpicked UI inspiration & patterns",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://www.khroma.co/",
        favicon: "https://icons.duckduckgo.com/ip2/www.khroma.co.ico"
      },
      {
        id: 40,
        title: "Colors Inspo",
        description: "Daily handpicked UI inspiration & patterns",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://colorsinspo.com/",
        favicon: "https://icons.duckduckgo.com/ip2/colorsinspo.com.ico"
      },
      {
        id: 41,
        title: "Font Pair",
        description: "Daily handpicked UI inspiration & patterns",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://www.fontpair.co/",
        favicon: "https://icons.duckduckgo.com/ip2/www.fontpair.co.ico"
      },
      {
        id: 42,
        title: "Pinterest",
        description: "Daily handpicked UI inspiration & patterns",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://www.pinterest.com/",
        favicon: "https://icons.duckduckgo.com/ip2/www.pinterest.com.ico"
      },
      {
        id: 43,
        title: "Google Fonts",
        description: "Daily handpicked UI inspiration & patterns",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://fonts.google.com/",
        favicon: "https://icons.duckduckgo.com/ip2/google.com.ico"
      },
      {
        id: 44,
        title: "Type Wolf",
        description: "Daily handpicked UI inspiration & patterns",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://www.typewolf.com/",
        favicon: "https://icons.duckduckgo.com/ip2/www.typewolf.com.ico"
      },
      {
        id: 45,
        title: "Fonts in use",
        description: "Daily handpicked UI inspiration & patterns",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://fontsinuse.com/",
        favicon: "https://icons.duckduckgo.com/ip2/fontsinuse.com.ico"
      },
      {
        id: 46,
        title: "UI8",
        description: "Daily handpicked UI inspiration & patterns",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://ui8.net/",
        favicon: "https://icons.duckduckgo.com/ip2/ui8.net.ico"
      },
      {
        id: 47,
        title: "Design Bundles",
        description: "Daily handpicked UI inspiration & patterns",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://designbundles.net/",
        favicon: "https://icons.duckduckgo.com/ip2/designbundles.net.ico"
      },
      {
        id: 48,
        title: "Creative Market",
        description: "Daily handpicked UI inspiration & patterns",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://creativemarket.com/",
        favicon: "https://icons.duckduckgo.com/ip2/creativemarket.com.ico"
      },
      {
        id: 49,
        title: "Blush Design",
        description: "Daily handpicked UI inspiration & patterns",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://blush.design/",
        favicon: "https://icons.duckduckgo.com/ip2/blush.design.ico"
      },
      {
        id: 50,
        title: "Humaaans",
        description: "Mix-&-match illustrations of people with a design librarys",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://www.humaaans.com/",
        favicon: "https://icons.duckduckgo.com/ip2/www.humaaans.com.ico"
      },
      {
        id: 51,
        title: "Undraw",
        description: "Mix-&-match illustrations of people with a design librarys",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://undraw.co/",
        favicon: "https://icons.duckduckgo.com/ip2/undraw.co.ico"
      },
      {
        id: 52,
        title: "Icons8",
        description: "Daily handpicked UI inspiration & patterns",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://icons8.com/",
        favicon: "https://icons.duckduckgo.com/ip2/icons8.com.ico"
      },
      {
        id: 53,
        title: "Flaticon",
        description: "Mix-&-match illustrations of people with a design librarys",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://www.flaticon.com/",
        favicon: "https://icons.duckduckgo.com/ip2/www.flaticon.com.ico"
      },
      {
        id: 54,
        title: "The noun project",
        description: "Daily handpicked UI inspiration & patterns",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://thenounproject.com/",
        favicon: "https://icons.duckduckgo.com/ip2/thenounproject.com.ico"
      },
      {
        id: 55,
        title: "Illustrations",
        description: "Mix-&-match illustrations of people with a design librarys",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://illustrations.co/",
        favicon: "https://icons.duckduckgo.com/ip2/illustrations.co.ico"
      },
      {
        id: 56,
        title: "Freepik",
        description: "Mix-&-match illustrations of people with a design librarys",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://www.freepik.com/",
        favicon: "https://icons.duckduckgo.com/ip2/www.freepik.com.ico"
      },
      {
        id: 57,
        title: "Pngtree",
        description: "Mix-&-match illustrations of people with a design librarys",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://pngtree.com/",
        favicon: "https://icons.duckduckgo.com/ip2/pngtree.com.ico"
      },
      {
        id: 58,
        title: "Mockup World",
        description: "The original biggest Source of photo-realistic free PSD Mockups online",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://mockupworld.co/",
        favicon: "https://icons.duckduckgo.com/ip2/mockupworld.co.ico"
      },
      {
        id: 59,
        title: "CSS Gradient",
        description: "CSS Gradient is a designstripe project that lets you create free gradient backgrounds for your website.",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://cssgradient.io/",
        favicon: "https://icons.duckduckgo.com/ip2/cssgradient.io.ico"
      },
      {
        id: 60,
        title: "Haikei",
        description: "Mix-&-match illustrations of people with a design librarys",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://haikei.com/",
        favicon: "https://icons.duckduckgo.com/ip2/haikei.com.ico"
      },
      {
        id: 61,
        title: "Squoosh",
        description: "Mix-&-match illustrations of people with a design librarys",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://squoosh.app/",
        favicon: "https://icons.duckduckgo.com/ip2/squoosh.app.ico"
      },
      {
        id: 62,
        title: "SVG Backgrounds",
        description: "Mix-&-match illustrations of people with a design librarys",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://www.svgbackgrounds.com/",
        favicon: "https://icons.duckduckgo.com/ip2/www.svgbackgrounds.com.ico"
      },
      {
        id: 63,
        title: "Hero Patterns",
        description: "Mix-&-match illustrations of people with a design librarys",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://heropatterns.com/",
        favicon: "https://icons.duckduckgo.com/ip2/heropatterns.com.ico"
      },
      {
        id: 64,
        title: "Hero Icons",
        description: "Mix-&-match illustrations of people with a design librarys",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://heroicons.com/",
        favicon: "https://icons.duckduckgo.com/ip2/heroicons.com.ico"
      },
      {
        id: 65,
        title: "Lottie Files",
        description: "Mix-&-match illustrations of people with a design librarys",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://lottiefiles.com/",
        favicon: "https://icons.duckduckgo.com/ip2/lottiefiles.com.ico"
      },
      {
        id: 66,
        title: "MDN Web School",
        description: "Mix-&-match illustrations of people with a design librarys",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://developer.mozilla.org/en-US/docs/Learn",
        favicon: "https://icons.duckduckgo.com/ip2/developer.mozilla.org.ico"
      },
      {
        id: 67,
        title: "W3Schools",
        description: "Mix-&-match illustrations of people with a design librarys",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://www.w3schools.com/",
        favicon: "https://icons.duckduckgo.com/ip2/www.w3schools.com.ico"
      },
      {
        id: 68,
        title: "FreeCodeCamp",
        description: "Mix-&-match illustrations of people with a design librarys",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://www.freecodecamp.org/",
        favicon: "https://icons.duckduckgo.com/ip2/www.freecodecamp.org.ico"
      },
      {
        id: 69,
        title: "Css Tricks",
        description: "Mix-&-match illustrations of people with a design librarys",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://css-tricks.com/",
        favicon: "https://icons.duckduckgo.com/ip2/css-tricks.com.ico"
      }, 
      {
        id: 70,
        title: "Frontend Mentor",
        description: "Mix-&-match illustrations of people with a design librarys",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://www.frontendmentor.io/",
        favicon: "https://icons.duckduckgo.com/ip2/www.frontendmentor.io.ico"
      },
      {
        id: 71,
        title: "Codepen",
        description: "Mix-&-match illustrations of people with a design librarys",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://codepen.io/",
        favicon: "https://icons.duckduckgo.com/ip2/codepen.io.ico"
      },
      {
        id: 72,
        title: "JSFiddle",
        description: "Mix-&-match illustrations of people with a design librarys",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://jsfiddle.net/",
        favicon: "https://icons.duckduckgo.com/ip2/jsfiddle.net.ico"
      },
      {
        id: 73,
        title: "Code Wars",
        description: "Mix-&-match illustrations of people with a design librarys",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://www.codewars.com/",
        favicon: "https://icons.duckduckgo.com/ip2/www.codewars.com.ico"
      },
      {
        id: 74,
        title: "Can I Use",
        description: "Mix-&-match illustrations of people with a design librarys",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://caniuse.com/",
        favicon: "https://icons.duckduckgo.com/ip2/caniuse.com.ico"
      },
      {
        id: 75,
        title: "Devhints",
        description: "Mix-&-match illustrations of people with a design librarys",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://devhints.io/",
        favicon: "https://icons.duckduckgo.com/ip2/devhints.io.ico"
      },
      {
        id: 76,
        title: "TailWind Css",
        description: "Mix-&-match illustrations of people with a design librarys",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://tailwindcss.com/",
        favicon: "https://icons.duckduckgo.com/ip2/tailwindcss.com.ico"
      },
      {
        id: 77,
        title: "CSS Grid",
        description: "Mix-&-match illustrations of people with a design librarys",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://cssgrid.io/",
        favicon: "https://icons.duckduckgo.com/ip2/cssgrid.io.ico"
      },
      {
        id: 78,
        title: "Bootstrap",
        description: "Mix-&-match illustrations of people with a design librarys",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://getbootstrap.com/",
        favicon: "https://icons.duckduckgo.com/ip2/getbootstrap.com.ico"
      },
      {
        id: 79,
        title: "Saas",
        description: "Mix-&-match illustrations of people with a design librarys",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://sass-lang.com/",
        favicon: "https://icons.duckduckgo.com/ip2/sass-lang.com.ico"
      },
      {
        id: 80,
        title: "React ",
        description: "Mix-&-match illustrations of people with a design librarys",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://reactjs.org/",
        favicon: "https://icons.duckduckgo.com/ip2/reactjs.org.ico"
      },
      {
        id: 81,
        title: "Vue",
        description: "Mix-&-match illustrations of people with a design librarys",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://vuejs.org/",
        favicon: "https://icons.duckduckgo.com/ip2/vuejs.org.ico"
      },
      {
        id: 82,
        title: "Angular",
        description: "Mix-&-match illustrations of people with a design librarys",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://angular.io/",
        favicon: "https://icons.duckduckgo.com/ip2/angular.io.ico"
      },
      {
        id: 83,
        title: "Svelte",
        description: "Mix-&-match illustrations of people with a design librarys",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://svelte.dev/",
        favicon: "https://icons.duckduckgo.com/ip2/svelte.dev.ico"
      },
      {
        id: 84,
        title: "Vite",
        description: "Mix-&-match illustrations of people with a design librarys",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://vitejs.dev/",
        favicon: "https://icons.duckduckgo.com/ip2/vitejs.dev.ico"
      },
      {
        id: 85,
        title: "Nuxt",
        description: "Mix-&-match illustrations of people with a design librarys",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://nuxt.com/",
        favicon: "https://icons.duckduckgo.com/ip2/nuxt.com.ico"
      },
      {
        id: 86,
        title: "Next",
        description: "Mix-&-match illustrations of people with a design librarys",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://nextjs.org/",
        favicon: "https://icons.duckduckgo.com/ip2/nextjs.org.ico"
      },
      {
        id: 87,
        title: "SvelteKit",
        description: "Mix-&-match illustrations of people with a design librarys",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://svelte.dev/kit",
        favicon: "https://icons.duckduckgo.com/ip2/svelte.dev.ico"
      },
      {
        id: 88,
        title: "Astro",
        description: "Mix-&-match illustrations of people with a design librarys",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://astro.build/",
        favicon: "https://icons.duckduckgo.com/ip2/astro.build.ico"
      },
      {
        id: 89,
        title: "Express",
        description: "Mix-&-match illustrations of people with a design librarys",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://expressjs.com/",
        favicon: "https://icons.duckduckgo.com/ip2/expressjs.com.ico"
      },
      {
        id: 90,
        title: "Node",
        description: "Mix-&-match illustrations of people with a design librarys",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://nodejs.org/",
        favicon: "https://icons.duckduckgo.com/ip2/nodejs.org.ico"
      },
      {
        id: 91,
        title: "MongoDB",
        description: "Mix-&-match illustrations of people with a design librarys",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://www.mongodb.com/",
        favicon: "https://icons.duckduckgo.com/ip2/www.mongodb.com.ico"
      },
      {
        id: 92,
        title: "PostgreSQL",
        description: "Mix-&-match illustrations of people with a design librarys",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://www.postgresql.org/",
        favicon: "https://icons.duckduckgo.com/ip2/www.postgresql.org.ico"
      },
      {
        id: 93,
        title: "MySQL",
        description: "Mix-&-match illustrations of people with a design librarys",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://www.mysql.com/",
        favicon: "https://icons.duckduckgo.com/ip2/www.mysql.com.ico"
      },
      {
        id: 94,
        title: "SQLite",
        description: "Mix-&-match illustrations of people with a design librarys",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://www.sqlite.org/",
        favicon: "https://icons.duckduckgo.com/ip2/www.sqlite.org.ico"
      },
      {
        id: 95,
        title: "Redis",
        description: "Mix-&-match illustrations of people with a design librarys",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://redis.io/",
        favicon: "https://icons.duckduckgo.com/ip2/redis.io.ico"
      },
      {
        id: 96,
        title: "Mongoose",
        description: "Mix-&-match illustrations of people with a design librarys",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://mongoosejs.com/",
        favicon: "https://icons.duckduckgo.com/ip2/mongoosejs.com.ico"
      },
      {
        id: 97,
        title: "Sequelize",
        description: "Mix-&-match illustrations of people with a design librarys",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://sequelize.org/",
        favicon: "https://icons.duckduckgo.com/ip2/sequelize.org.ico"
      },
      {
        id: 98,
        title: "Prisma",
        description: "Mix-&-match illustrations of people with a design librarys",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://www.prisma.io/",
        favicon: "https://icons.duckduckgo.com/ip2/www.prisma.io.ico"
      },
      {
        id: 99,
        title: "Knex",
        description: "Mix-&-match illustrations of people with a design librarys",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://knexjs.org/",
        favicon: "https://icons.duckduckgo.com/ip2/knexjs.org.ico"
      },
      {
        id: 100,
        title: "Drizzle",
        description: "Mix-&-match illustrations of people with a design librarys",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://drizzle.dev/",
        favicon: "https://icons.duckduckgo.com/ip2/drizzle.dev.ico"
      },
      {
        id: 101,
        title: "Supabase",
        description: "Mix-&-match illustrations of people with a design librarys",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://supabase.com/",
        favicon: "https://icons.duckduckgo.com/ip2/supabase.com.ico"
      },
      {
        id: 102,
        title: "Firebase",
        description: "Mix-&-match illustrations of people with a design librarys",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://firebase.google.com/",
        favicon: "https://icons.duckduckgo.com/ip2/firebase.google.com.ico"
      },
      {
        id: 103,
        title: "Cloudflare",
        description: "Mix-&-match illustrations of people with a design librarys",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://www.cloudflare.com/",
        favicon: "https://icons.duckduckgo.com/ip2/www.cloudflare.com.ico"
      },
      {
        id: 104,
        title: "Vercel",
        description: "Mix-&-match illustrations of people with a design librarys",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://vercel.com/",
        favicon: "https://icons.duckduckgo.com/ip2/vercel.com.ico"
      },
      {
        id: 105,
        title: "AWS",
        description: "Mix-&-match illustrations of people with a design librarys",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://aws.amazon.com/",
        favicon: "https://icons.duckduckgo.com/ip2/aws.amazon.com.ico"
      },
      {
        id: 106,
        title: "Azure",
        description: "Mix-&-match illustrations of people with a design librarys",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://azure.microsoft.com/",
        favicon: "https://icons.duckduckgo.com/ip2/azure.microsoft.com.ico"
      },
      {
        id: 107,
        title: "Digital Ocean",
        description: "Mix-&-match illustrations of people with a design librarys",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://www.digitalocean.com/",
        favicon: "https://icons.duckduckgo.com/ip2/www.digitalocean.com.ico"
      },
      {
        id: 108,
        title: "Linode",
        description: "Mix-&-match illustrations of people with a design librarys",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://www.linode.com/",
        favicon: "https://icons.duckduckgo.com/ip2/www.linode.com.ico"
      },
      {
        id: 109,
        title: "GSAP",
        description: "Mix-&-match illustrations of people with a design librarys",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://greensock.com/gsap/",
        favicon: "https://icons.duckduckgo.com/ip2/greensock.com.ico"
      },
      {
        id: 110,
        title: "TweenMax",
        description: "Mix-&-match illustrations of people with a design librarys",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://tweenmax.com/",
        favicon: "https://icons.duckduckgo.com/ip2/tweenmax.com.ico"
      },
      {
        id: 111,
        title: "Animate.css",
        description: "Mix-&-match illustrations of people with a design librarys",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://animate.css/",
        favicon: "https://icons.duckduckgo.com/ip2/animate.css.ico"
      },
      {
        id: 112,
        title: "Lottie",
        description: "Mix-&-match illustrations of people with a design librarys",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://lottie.github.io/",
        favicon: "https://icons.duckduckgo.com/ip2/lottie.github.io.ico"
      },
      {
        id: 113,
        title: "Three.js",
        description: "3D library",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://threejs.org/",
        favicon: "https://icons.duckduckgo.com/ip2/threejs.org.ico"
      },
      {
        id: 114,
        title: "React Three Fiber",
        description: "3D library",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://docs.pmnd.rs/react-three/fiber/getting-started/introduction",
        favicon: "https://icons.duckduckgo.com/ip2/docs.pmnd.rs.ico"
      },
      {
        id: 115,
        title: "React Three Drei",
        description: "3D library",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://drei.pmnd.rs/",
        favicon: "https://icons.duckduckgo.com/ip2/drei.pmnd.rs.ico"
      },
      {
        id: 116,
        title: "Framer Motion",
        description: "3D library",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://www.framer.com/motion/",
        favicon: "https://icons.duckduckgo.com/ip2/www.framer.com.ico"
      },
      {
        id: 117,
        title: "React Spring",
        description: "3D library",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://www.react-spring.dev/",
        favicon: "https://icons.duckduckgo.com/ip2/www.react-spring.dev.ico"
      },
      {
        id: 118,
        title: "Axios",
        description: "3D library",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://axios-http.com/",
        favicon: "https://icons.duckduckgo.com/ip2/axios-http.com.ico"
      },
      {
        id: 119,
        title: "React Query",
        description: "3D library",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://tanstack.com/query/latest/docs/framework/react/react-native",
        favicon: "https://icons.duckduckgo.com/ip2/tanstack.com.ico"
      },
      {
        id: 120,
        title: "React Hook Form",
        description: "3D library",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://react-hook-form.com/",
        favicon: "https://icons.duckduckgo.com/ip2/react-hook-form.com.ico"
      },
      {
        id: 121,
        title: "Netlify",
        description: "3D library",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://www.netlify.com/",
        favicon: "https://icons.duckduckgo.com/ip2/www.netlify.com.ico"
      },
      {
        id: 122,
        title: "Strapi",
        description: "3D library",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://strapi.io/",
        favicon: "https://icons.duckduckgo.com/ip2/strapi.io.ico"
      },
      {
        id: 123,
        title: "Sanity",
        description: "3D library",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://www.sanity.io/",
        favicon: "https://icons.duckduckgo.com/ip2/www.sanity.io.ico"
      },
      {
        id: 124,
        title: "Contentful",
        description: "3D library",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://www.contentful.com/",
        favicon: "https://icons.duckduckgo.com/ip2/www.contentful.com.ico"
      },
      {
        id: 125,
        title: "Storyblok",
        description: "3D library",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://www.storyblok.com/",
        favicon: "https://icons.duckduckgo.com/ip2/www.storyblok.com.ico"
      },
      {
        id: 126,
        title: "GraphQL",
        description: "3D library",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://graphql.org/",
        favicon: "https://icons.duckduckgo.com/ip2/graphql.org.ico"
      },
      {
        id: 127,
        title: "Apollo",
        description: "3D library",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://www.apollographql.com/",
        favicon: "https://icons.duckduckgo.com/ip2/www.apollographql.com.ico"
      },
      {
        id: 128,
        title: "Relay",
        description: "3D library",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://relay.dev/",
        favicon: "https://icons.duckduckgo.com/ip2/relay.dev.ico"
      },
      {
        id: 129,
        title: "Apollo Client",
        description: "3D library",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://www.apollographql.com/docs/react/api/react-apollo/",
        favicon: "https://icons.duckduckgo.com/ip2/www.apollographql.com.ico"
      },
      {
        id: 130,
        title: "Apollo Server",
        description: "3D library",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://www.apollographql.com/docs/apollo-server/",
        favicon: "https://icons.duckduckgo.com/ip2/www.apollographql.com.ico"
      },
      {
        id: 131,
        title: "Apollo Link",
        description: "3D library",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://www.apollographql.com/docs/link/",
        favicon: "https://icons.duckduckgo.com/ip2/www.apollographql.com.ico"
      },
      {
        id: 132,
        title: "Apollo Cache",
        description: "3D library",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://www.apollographql.com/docs/cache/",
        favicon: "https://icons.duckduckgo.com/ip2/www.apollographql.com.ico"
      },
      {
        id: 133,
        title: "Swagger",
        description: "3D library",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://swagger.io/",
        favicon: "https://icons.duckduckgo.com/ip2/swagger.io.ico"
      },
      {
        id: 134,
        title: "OpenAPI",
        description: "3D library",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://www.openapis.org/",
        favicon: "https://icons.duckduckgo.com/ip2/www.openapis.org.ico"
      },
      {
        id: 135,
        title: "Ajax",
        description: "3D library",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://www.ajax.org/",
        favicon: "https://icons.duckduckgo.com/ip2/www.ajax.org.ico"
      },
      {
        id: 136,
        title: "jQuery",
        description: "3D library",
        image: "https://picsum.photos/200/308",
        category: "Photographie",
        link: "https://jquery.com/",
        favicon: "https://icons.duckduckgo.com/ip2/jquery.com.ico"
      },
      {
        id: 137,
        title: "Axios",
        description: "3D library",
        
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
        favicon: ref.link ? `https://icons.duckduckgo.com/ip2/${new URL(ref.link).hostname}.ico` : ""
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