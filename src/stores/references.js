import { defineStore } from 'pinia'

export const useReferencesStore = defineStore('references', {
  state: () => ({
    references: [
      {
        id: 1,
        title: "Pousse ta fonte",
        description: "Bibliothèque typographique en ligne",
        image: "https://picsum.photos/200/300",
        category: ["Design"],
        subCategory: ["Typographie"],
        link: "https://www.poussetafonte.com/",
        favicon: "https://icons.duckduckgo.com/ip2/poussetafonte.com.ico"
      },
      {
        id: 2,
        title: "Typographic Posters",
        description: "Website pour des références de posters en tout genre",
        image: "/src/assets/img/reference2.jpg",
        category: ["Typographie"],
        link: "https://www.typographicposters.com",
        favicon: "https://icons.duckduckgo.com/ip2/typographicposters.com.ico"
      },
      {
        id: 3,
        title: "Velvetyn",
        description: "Bibliothèque de typographie en ligne",
        image: "/src/assets/img/reference3.jpg",
        category: ["Typographie"],
        link: "https://velvetyne.fr/",
        favicon: "https://icons.duckduckgo.com/ip2/velvetyne.fr.ico"
      },
      {
          id: 4,
          title: "Awwwards",
          description: "Récompenses pour les meilleurs sites web design",
          image: "https://picsum.photos/200/301",
          category: ["Inspiration", "Design"], // Tableau au lieu d'une seule string
          link: "https://www.awwwards.com/",
          favicon: "https://icons.duckduckgo.com/ip2/awwwards.com.ico"
      },
      {
        id: 5,
        title: "Dribbble",
        description: "Inspiration UI/UX pour designers",
        image: "https://picsum.photos/200/302",
        category: ["Inspiration", "Design"],
        link: "https://dribbble.com/",
        favicon: "https://icons.duckduckgo.com/ip2/dribbble.com.ico"
      },
      {
        id: 6,
        title: "Behance",
        description: "Portfolios créatifs et projets graphiques",
        image: "https://picsum.photos/200/303",
        category: ["Inspiration", "Design"],
        link: "https://www.behance.net/",
        favicon: "https://icons.duckduckgo.com/ip2/behance.net.ico"
      },
      {
        id: 7,
        title: "Coolors",
        description: "Générateur de palettes de couleurs",
        image: "https://picsum.photos/200/304",
        category: ["Couleurs", "Design"],
        link: "https://coolors.co/",
        favicon: "https://icons.duckduckgo.com/ip2/coolors.co.ico"
      },
      {
        id: 8,
        title: "Adobe Color",
        description: "Outil de création de palettes de couleurs",
        image: "https://picsum.photos/200/305",
        category: ["Couleurs", "Design"],
        link: "https://color.adobe.com/",
        favicon: "https://icons.duckduckgo.com/ip2/color.adobe.com.ico"
      },
      {
        id: 9,
        title: "Font Squirrel",
        description: "Bibliothèque de polices gratuites",
        image: "https://picsum.photos/200/306",
        category: ["Typographie"],
        link: "https://www.fontsquirrel.com/",
        favicon: "https://icons.duckduckgo.com/ip2/fontsquirrel.com.ico"
      },
      {
        id: 10,
        title: "Google Fonts",
        description: "Collection de polices open-source",
        image: "https://picsum.photos/200/307",
        category: ["Typographie"],
        link: "https://fonts.google.com/",
        favicon: "https://icons.duckduckgo.com/ip2/google.com.ico"
      },
      {
        id: 15,
        title: "Unsplash",
        description: "Banque d'images libres de droits",
        image: "https://picsum.photos/200/308",
        category: ["Photographie"],
        link: "https://unsplash.com/",
        favicon: "https://icons.duckduckgo.com/ip2/unsplash.com.ico"
      },
      {
        id: 16,
        title: "Pexels",
        description: "Photos et vidéos gratuites pour vos projets",
        image: "https://picsum.photos/200/309",
        category: ["Photographie"],
        link: "https://www.pexels.com/",
        favicon: "https://icons.duckduckgo.com/ip2/pexels.com.ico"
      },
      {
        id: 17,
        title: "Figma",
        description: "Outil de design collaboratif pour UI/UX",
        image: "https://picsum.photos/200/310",
        category: ["Design", "UI/UX"],
        link: "https://www.figma.com/",
        favicon: "https://icons.duckduckgo.com/ip2/figma.com.ico"
      },
      {
        id: 18,
        title: "LottieFiles",
        description: "Animations vectorielles pour vos projets web et apps",
        image: "https://picsum.photos/200/311",
        category: ["Design", "Web"],
        link: "https://lottiefiles.com/",
        favicon: "https://icons.duckduckgo.com/ip2/lottiefiles.com.ico"
      },
      {
        id: 19,
        title: "Flaticon",
        description: "Base de données d'icônes vectorielles",
        image: "https://picsum.photos/200/312",
        category: ["Design", "Web"],
        link: "https://www.flaticon.com/",
        favicon: "https://icons.duckduckgo.com/ip2/flaticon.com.ico"
      },
      {
        id: 20,
        title: "Mobin",
        description: "Application Mobile inspiration pour les designers",
        image: "https://picsum.photos/200/308",
        category: ["Design", "UI/UX"],
        link: "https://mobbin.com/",
        favicon: "https://icons.duckduckgo.com/ip2/mobbin.com.ico"
      },
      {
        id: 21,
        title: "Landbook",
        description: "Livres inspiration pour les designers",
        image: "https://picsum.photos/200/308",
        category: ["Design", "Typographie"],
        link: "https://land-book.com/",
        favicon: "https://icons.duckduckgo.com/ip2/land-book.com.ico"
      },
      {
        id: 22,
        title: "SaasFrame",
        description: "Design inspiration for SaaS builders",
        image: "https://picsum.photos/200/308",
        category: ["Design", "UI/UX", "Web"],
        link: "https://saasframe.io/",
        favicon: "https://icons.duckduckgo.com/ip2/www.saasframe.io.ico"
      },
      {
        id: 23,
        title: "Page Flow",
        description: "Design inspiration for SaaS builders",
        image: "https://picsum.photos/200/308",
        category: ["UI/UX"],
        link: "https://pageflows.com/",
        favicon: "https://icons.duckduckgo.com/ip2/pageflows.com.ico"
      },
      {
        id: 24,
        title: "UI Garage",
        description: "Daily handpicked UI inspiration & patterns",
        image: "https://picsum.photos/200/308",
        category: ["UI/UX"],
        link: "https://uigarage.net/",
        favicon: "https://icons.duckduckgo.com/ip2/uigarage.net.ico"
      },
      {
        id: 25,
        title: "Collect UI",
        description: "Daily handpicked UI inspiration & patterns",
        image: "https://picsum.photos/200/308",
        category: ["UI/UX"],
        link: "https://collectui.com/",
        favicon: "https://icons.duckduckgo.com/ip2/collectui.com.ico"
      },
      {
        id: 26,
        title: "Good UI",
        description: "Daily handpicked UI inspiration & patterns",
        image: "https://picsum.photos/200/308",
        category: ["UI/UX"],
        link: "https://goodui.org/",
        favicon: "https://icons.duckduckgo.com/ip2/goodui.org.ico"
      },
      {
        id: 27,
        title: "UX Archive",
        description: "Daily handpicked UI inspiration & patterns",
        image: "https://picsum.photos/200/308",
        category: ["UI/UX"],
        link: "https://uxarchive.com/",
        favicon: "https://icons.duckduckgo.com/ip2/uxarchive.com.ico"
      },
      {
        id: 28,
        title: "Ptrrns",
        description: "Become a better interface designer.",
        image: "https://picsum.photos/200/308",
        category: ["UI/UX"],
        link: "https://www.pttrns.com/",
        favicon: "https://icons.duckduckgo.com/ip2/www.pttrns.com.ico"
      },
      {
        id: 29,
        title: "Design Systems Repo",
        description: "A frequently updated collection of Design System examples, articles, tools and talks.",
        image: "https://picsum.photos/200/308",
        category: ["UI/UX"],
        link: "https://designsystemsrepo.com/",
        favicon: "https://icons.duckduckgo.com/ip2/designsystemsrepo.com.ico"
      },
      {
        id: 30,
        title: "Design Better",
        description: "Daily handpicked UI inspiration & patterns",
        image: "https://picsum.photos/200/308",
        category: ["UI/UX"],
        link: "https://designbetterpodcast.com/",
        favicon: "https://icons.duckduckgo.com/ip2/designbetterpodcast.com.ico"
      },
      {
        id: 31,
        title: "Cody House",
        description: "Web design made simple",
        image: "https://picsum.photos/200/308",
        category: ["Design", "Web"],
        link: "https://codyhouse.co/",
        favicon: "https://icons.duckduckgo.com/ip2/codyhouse.ico"
      },
      {
        id: 32,
        title: "Laws of UX",
        description: "Laws of UX is a collection of best practices that designers",
        image: "https://picsum.photos/200/308",
        category: ["UI/UX"],
        link: "https://lawsofux.com/",
        favicon: "https://icons.duckduckgo.com/ip2/lawsofux.com.ico"
      },
      {
        id: 33,
        title: "Open UI",
        description: "Style and extend built-in web UI components",
        image: "https://picsum.photos/200/308",
        category: ["UI/UX", "Web"],
        link: "https://open-ui.org/",
        favicon: "https://icons.duckduckgo.com/ip2/open-ui.org.ico"
      },
      {
        id: 34,
        title: "Design Principles",
        description: "An open source collection of Design Principles and methods.",
        image: "https://picsum.photos/200/308",
        category: ["UI/UX", "Design"],
        link: "https://principles.design/",
        favicon: "https://icons.duckduckgo.com/ip2/principles.design.ico"
      },
      {
        id: 35,
        title: "Sidebar",
        description: "Daily handpicked UI inspiration & patterns",
        image: "https://picsum.photos/200/308",
        category: ["UI/UX"],
        link: "https://sidebar.io/",
        favicon: "https://icons.duckduckgo.com/ip2/sidebar.io.ico"
      },
      {
        id: 36,
        title: "NNgroup",
        description: "Research-based, practitioner-focused. Your source for UX guidance and training.",
        image: "https://picsum.photos/200/308",
        category: ["UI/UX"],
        link: "https://www.nngroup.com/",
        favicon: "https://icons.duckduckgo.com/ip2/www.nngroup.com.ico"
      },
      {
        id: 37,
        title: "Contrast",
        description: "Daily handpicked UI inspiration & patterns",
        image: "https://picsum.photos/200/308",
        category: ["Design"],
        link: "https://usecontrast.com/",
        favicon: "https://icons.duckduckgo.com/ip2/usecontrast.com.ico"
      },
      {
        id: 38,
        title: "Coolors",
        description: "Super Fast Color Palette Generator",
        image: "https://picsum.photos/200/308",
        category: ["Design"],
        link: "https://coolors.co/",
        favicon: "https://icons.duckduckgo.com/ip2/coolors.co.ico"
      },
      {
        id: 39,
        title: "Khroma",
        description: "AI to learn which colors you like and creates limitless palettes for you to discover, search, and save.",
        image: "https://picsum.photos/200/308",
        category: ["Design"],
        link: "https://www.khroma.co/",
        favicon: "https://icons.duckduckgo.com/ip2/www.khroma.co.ico"
      },
      {
        id: 40,
        title: "Colors Inspo",
        description: "Thousands of beautiful color palettes you can use it directly by one click. ",
        image: "https://picsum.photos/200/308",
        category: ["Design"],
        link: "https://colorsinspo.com/",
        favicon: "https://icons.duckduckgo.com/ip2/colorsinspo.com.ico"
      },
      {
        id: 41,
        title: "Font Pair",
        description: "Free fonts and font pairings to use for your next design project",
        image: "https://picsum.photos/200/308",
        category: ["Typographie"],
        link: "https://www.fontpair.co/",
        favicon: "https://icons.duckduckgo.com/ip2/www.fontpair.co.ico"
      },
      {
        id: 42,
        title: "Pinterest",
        description: "Image search engine for design inspiration",
        image: "https://picsum.photos/200/308",
        category: ["Photographie", "Design"],
        link: "https://www.pinterest.com/",
        favicon: "https://icons.duckduckgo.com/ip2/www.pinterest.com.ico"
      },
      {
        id: 43,
        title: "Google Fonts",
        description: "Fonts used by designers around the world on the web",
        image: "https://picsum.photos/200/308",
        category: ["Typographie"],
        link: "https://fonts.google.com/",
        favicon: "https://icons.duckduckgo.com/ip2/google.com.ico"
      },
      {
        id: 44,
        title: "Type Wolf",
        description: "Trendy fonts and typefaces",
        image: "https://picsum.photos/200/308",
        category: ["Typographie"],
        link: "https://www.typewolf.com/",
        favicon: "https://icons.duckduckgo.com/ip2/www.typewolf.com.ico"
      },
      {
        id: 45,
        title: "Fonts in use",
        description: "Font in use in various projects",
        image: "https://picsum.photos/200/308",
        category: ["Typographie"],
        link: "https://fontsinuse.com/",
        favicon: "https://icons.duckduckgo.com/ip2/fontsinuse.com.ico"
      },
      {
        id: 46,
        title: "UI8",
        description: "Curated design resources to speed up your creative workflow.",
        image: "https://picsum.photos/200/308",
        category: ["Design", "UI/UX"],
        link: "https://ui8.net/",
        favicon: "https://icons.duckduckgo.com/ip2/ui8.net.ico"
      },
      {
        id: 47,
        title: "Design Bundles",
        description: "Creating beautifully designed crafts doesn't have to be as hard as you think.",
        image: "https://picsum.photos/200/308",
        category: ["Design"],
        link: "https://designbundles.net/",
        favicon: "https://icons.duckduckgo.com/ip2/designbundles.net.ico"
      },
      {
        id: 48,
        title: "Creative Market",
        description: "Daily handpicked UI inspiration & patterns",
        image: "https://picsum.photos/200/308",
        category: ["Design", "Typographie", "Photographie"],
        link: "https://creativemarket.com/",
        favicon: "https://icons.duckduckgo.com/ip2/creativemarket.com.ico"
      },
      {
        id: 49,
        title: "Blush Design",
        description: "Créez et personnalisez facilement de superbes illustrations grâce à des collections réalisées par des artistes du monde entier.",
        image: "https://picsum.photos/200/308",
        category: ["Design"],
        link: "https://blush.design/",
        favicon: "https://icons.duckduckgo.com/ip2/blush.design.ico"
      },
      {
        id: 50,
        title: "Humaaans",
        description: "Mix-&-match illustrations of people with a design library",
        image: "https://picsum.photos/200/308",
        category: ["Design"],
        link: "https://www.humaaans.com/",
        favicon: "https://icons.duckduckgo.com/ip2/www.humaaans.com.ico"
      },
      {
        id: 51,
        title: "Undraw",
        description: "Open-source illustrations for any idea you can imagine",
        image: "https://picsum.photos/200/308",
        category: ["Design"],
        link: "https://undraw.co/",
        favicon: "https://icons.duckduckgo.com/ip2/undraw.co.ico"
      },
      {
        id: 52,
        title: "Icons8",
        description: "The ultimate design kit for creatives and developers",
        image: "https://picsum.photos/200/308",
        category: ["Design", "Web", "UI/UX"],
        link: "https://icons8.com/",
        favicon: "https://icons.duckduckgo.com/ip2/icons8.com.ico"
      },
      {
        id: 53,
        title: "Flaticon",
        description: "Download Free Icons and Stickers for your projects. Resources made by and for designers. ",
        image: "https://picsum.photos/200/308",
        category: ["Design", "Web"],
        link: "https://www.flaticon.com/",
        favicon: "https://icons.duckduckgo.com/ip2/www.flaticon.com.ico"
      },
      {
        id: 54,
        title: "The noun project",
        description: "Icons and Photos For Everything",
        image: "https://picsum.photos/200/308",
        category: ["Photographie", "Design", "Web"],
        link: "https://thenounproject.com/",
        favicon: "https://icons.duckduckgo.com/ip2/thenounproject.com.ico"
      },
      {
        id: 55,
        title: "Illustrations",
        description: "Download Free Illustrations for your projects. Resources made by and for designers. ",
        image: "https://picsum.photos/200/308",
        category: ["Design", "Photographie"],
        link: "https://illustrations.co/",
        favicon: "https://icons.duckduckgo.com/ip2/illustrations.co.ico"
      },
      {
        id: 56,
        title: "Freepik",
        description: "All-in-one AI creative suite with the highest-quality assets",
        image: "https://picsum.photos/200/308",
        category: ["Design", "Photographie", "Web"],
        link: "https://www.freepik.com/",
        favicon: "https://icons.duckduckgo.com/ip2/www.freepik.com.ico"
      },
      {
        id: 57,
        title: "Pngtree",
        description: "Royalty Free PNG Images, Vectors, Backgrounds, Templates +",
        image: "https://picsum.photos/200/308",
        category: ["Photographie", "Design", "Web"],
        link: "https://pngtree.com/",
        favicon: "https://icons.duckduckgo.com/ip2/pngtree.com.ico"
      },
      {
        id: 58,
        title: "Mockup World",
        description: "The best free Mockups from the Web",
        image: "https://picsum.photos/200/308",
        category: ["Design"],
        link: "https://mockupworld.co/",
        favicon: "https://icons.duckduckgo.com/ip2/mockupworld.co.ico"
      },
      {
        id: 59,
        title: "CSS Gradient",
        description: "CSS Gradient is a designstripe project that lets you create free gradient backgrounds for your website.",
        image: "https://picsum.photos/200/308",
        category: ["Design", "Web"],
        link: "https://cssgradient.io/",
        favicon: "https://icons.duckduckgo.com/ip2/cssgradient.io.ico"
      },
      {
        id: 60,
        title: "Haikei",
        description: "Generate unique SVG design assets",
        image: "https://picsum.photos/200/308",
        category: ["Design", "Web"],
        link: "https://haikei.app/",
        favicon: "https://icons.duckduckgo.com/ip2/https://haikei.app/.ico"
      },
      {
        id: 61,
        title: "Squoosh",
        description: "Smaller images mean faster load times. Squoosh can reduce file size and maintain high quality.",
        image: "https://picsum.photos/200/308",
        category: ["Web", "Photographie"],
        link: "https://squoosh.app/",
        favicon: "https://icons.duckduckgo.com/ip2/squoosh.app.ico"
      },
      {
        id: 62,
        title: "SVG Backgrounds",
        description: "Copy-and-paste website graphics directly into projects.",
        image: "https://picsum.photos/200/308",
        category: ["Web", "Design"],
        link: "https://www.svgbackgrounds.com/",
        favicon: "https://icons.duckduckgo.com/ip2/www.svgbackgrounds.com.ico"
      },
      {
        id: 63,
        title: "Hero Patterns",
        description: "A collection of repeatable SVG background patterns for you to use on your web projects.",
        image: "https://picsum.photos/200/308",
        category: ["Web", "Design"],
        link: "https://heropatterns.com/",
        favicon: "https://icons.duckduckgo.com/ip2/heropatterns.com.ico"
      },
      {
        id: 64,
        title: "Hero Icons",
        description: "Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.",
        image: "https://picsum.photos/200/308",
        category: ["Web", "Design"],
        link: "https://heroicons.com/",
        favicon: "https://icons.duckduckgo.com/ip2/heroicons.com.ico"
      },
      {
        id: 65,
        title: "Lottie Files",
        description: "Create, edit, collaborate on and implement lightweight Lottie animations across websites, apps, socials and more.",
        image: "https://picsum.photos/200/308",
        category: ["Design"],
        link: "https://lottiefiles.com/",
        favicon: "https://icons.duckduckgo.com/ip2/lottiefiles.com.ico"
      },
      {
        id: 66,
        title: "MDN Web School",
        description: "Learn web development",
        image: "https://picsum.photos/200/308",
        category: ["Web"],
        link: "https://developer.mozilla.org/en-US/docs/Learn",
        favicon: "https://icons.duckduckgo.com/ip2/developer.mozilla.org.ico"
      },
      {
        id: 67,
        title: "W3Schools",
        description: "Learn web development",
        image: "https://picsum.photos/200/308",
        category: ["Web"],
        link: "https://www.w3schools.com/",
        favicon: "https://icons.duckduckgo.com/ip2/www.w3schools.com.ico"
      },
      {
        id: 68,
        title: "FreeCodeCamp",
        description: "Learn to code for free - Build projects and get hired by companies",
        image: "https://picsum.photos/200/308",
        category: ["Web"],
        link: "https://www.freecodecamp.org/",
        favicon: "https://icons.duckduckgo.com/ip2/www.freecodecamp.org.ico"
      },
      {
        id: 69,
        title: "Css Tricks",
        description: "Articles, tutorials, and news about CSS, HTML, and web design",
        image: "https://picsum.photos/200/308",
        category: ["Web", "Design"],
        link: "https://css-tricks.com/",
        favicon: "https://icons.duckduckgo.com/ip2/css-tricks.com.ico"
      }, 
      {
        id: 70,
        title: "Frontend Mentor",
        description: "Learn to code by building real projects. No coding experience required.",
        image: "https://picsum.photos/200/308",
        category: ["Web"],
        link: "https://www.frontendmentor.io/",
        favicon: "https://icons.duckduckgo.com/ip2/www.frontendmentor.io.ico"
      },
      {
        id: 71,
        title: "Codepen",
        description: "CodePen is a social development environment where you can write code in the browser, and share the URL with others.",
        image: "https://picsum.photos/200/308",
        category: ["Web"],
        link: "https://codepen.io/",
        favicon: "https://icons.duckduckgo.com/ip2/codepen.io.ico"
      },
      {
        id: 72,
        title: "JSFiddle",
        description: "Browser-based code editor",
        image: "https://picsum.photos/200/308",
        category: ["Web"],
        link: "https://jsfiddle.net/",
        favicon: "https://icons.duckduckgo.com/ip2/jsfiddle.net.ico"
      },
      {
        id: 73,
        title: "Code Wars",
        description: "Code Wars is a platform for coding challenges and competitions.",
        image: "https://picsum.photos/200/308",
        category: ["Web"],
        link: "https://www.codewars.com/",
        favicon: "https://icons.duckduckgo.com/ip2/www.codewars.com.ico"
      },
      {
        id: 74,
        title: "Can I Use",
        description: "Check cross-browser compatibility of web technologies",
        image: "https://picsum.photos/200/308",
        category: ["Web"],
        link: "https://caniuse.com/",
        favicon: "https://icons.duckduckgo.com/ip2/caniuse.com.ico"
      },
      {
        id: 75,
        title: "Devhints",
        description: "Quick reference for web developers",
        image: "https://picsum.photos/200/308",
        category: ["Web"],
        link: "https://devhints.io/",
        favicon: "https://icons.duckduckgo.com/ip2/devhints.io.ico"
      },
      {
        id: 76,
        title: "TailWind Css",
        description: "A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.",
        image: "https://picsum.photos/200/308",
        category: ["Web", "Design"],
        link: "https://tailwindcss.com/",
        favicon: "https://icons.duckduckgo.com/ip2/tailwindcss.com.ico"
      },
      {
        id: 77,
        title: "CSS Grid",
        description: "A simple tool for creating a grid layout.",
        image: "https://picsum.photos/200/308",
        category: ["Web", "Design"],
        link: "https://cssgrid.io/",
        favicon: "https://icons.duckduckgo.com/ip2/cssgrid.io.ico"
      },
      {
        id: 78,
        title: "Bootstrap",
        description: "Tool to build responsive, mobile-first projects on the web with the world's most popular front-end component library.",
        image: "https://picsum.photos/200/308",
        category: ["Web"],
        link: "https://getbootstrap.com/",
        favicon: "https://icons.duckduckgo.com/ip2/getbootstrap.com.ico"
      },
      {
        id: 79,
        title: "Saas",
        description: "Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.",
        image: "https://picsum.photos/200/308",
        category: ["Web"],
        link: "https://sass-lang.com/",
        favicon: "https://icons.duckduckgo.com/ip2/sass-lang.com.ico"
      },
      {
        id: 80,
        title: "React ",
        description: "A JavaScript library for building user interfaces",
        image: "https://picsum.photos/200/308",
        category: ["Web"],
        link: "https://reactjs.org/",
        favicon: "https://icons.duckduckgo.com/ip2/reactjs.org.ico"
      },
      {
        id: 81,
        title: "Vue",
        description: "A JavaScript library for building user interfaces",
        image: "https://picsum.photos/200/308",
        category: ["Web"],
        link: "https://vuejs.org/",
        favicon: "https://icons.duckduckgo.com/ip2/vuejs.org.ico"
      },
      {
        id: 82,
        title: "Angular",
        description: "Delivering web apps with speed and confidence",
        image: "https://picsum.photos/200/308",
        category: ["Web"],
        link: "https://angular.io/",
        favicon: "https://icons.duckduckgo.com/ip2/angular.io.ico"
      },
      {
        id: 83,
        title: "Svelte",
        description: "Svelte is a UI framework that uses a compiler to let you write breathtakingly concise components that do minimal work in the browser",
        image: "https://picsum.photos/200/308",
        category: ["Web"],
        link: "https://svelte.dev/",
        favicon: "https://icons.duckduckgo.com/ip2/svelte.dev.ico"
      },
      {
        id: 84,
        title: "Vite",
        description: "Build faster, scale better",
        image: "https://picsum.photos/200/308",
        category: ["Web"],
        link: "https://vitejs.dev/",
        favicon: "https://icons.duckduckgo.com/ip2/vitejs.dev.ico"
      },
      {
        id: 85,
        title: "Nuxt",
        description: "Create high-quality web applications with Nuxt, the open source framework that makes full-stack development with Vue.js intuitive.",
        image: "https://picsum.photos/200/308",
        category: ["Web"],
        link: "https://nuxt.com/",
        favicon: "https://icons.duckduckgo.com/ip2/nuxt.com.ico"
      },
      {
        id: 86,
        title: "Next",
        description: "Used by some of the world's largest companies, Next.js enables you to create high-quality web applications with the power of React components.",
        image: "https://picsum.photos/200/308",
        category: ["Web"],
        link: "https://nextjs.org/",
        favicon: "https://icons.duckduckgo.com/ip2/nextjs.org.ico"
      },
      {
        id: 87,
        title: "Astro",
        description: "Astro powers the world's fastest marketing sites, blogs, e-commerce websites, and more. ",
        image: "https://picsum.photos/200/308",
        category: ["Web"],
        link: "https://astro.build/",
        favicon: "https://icons.duckduckgo.com/ip2/astro.build.ico"
      },
      {
        id: 89,
        title: "Express",
        description: "Fast, unopinionated, minimalist web framework for Node.js",
        image: "https://picsum.photos/200/308",
        category: ["Web"],
        link: "https://expressjs.com/",
        favicon: "https://icons.duckduckgo.com/ip2/expressjs.com.ico"
      },
      {
        id: 90,
        title: "Node",
        description: "ode.js® is a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts.",
        image: "https://picsum.photos/200/308",
        category: ["Web"],
        link: "https://nodejs.org/",
        favicon: "https://icons.duckduckgo.com/ip2/nodejs.org.ico"
      },
      {
        id: 91,
        title: "MongoDB",
        description: "Database for modern applications, designed to store JSON data.",
        image: "https://picsum.photos/200/308",
        category: ["Web"],
        link: "https://www.mongodb.com/",
        favicon: "https://icons.duckduckgo.com/ip2/www.mongodb.com.ico"
      },
      {
        id: 92,
        title: "PostgreSQL",
        description: "PostgreSQL is a powerful, open source object-relational database system with over 30 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance.",
        image: "https://picsum.photos/200/308",
        category: ["Web"],
        link: "https://www.postgresql.org/",
        favicon: "https://icons.duckduckgo.com/ip2/www.postgresql.org.ico"
      },
      {
        id: 93,
        title: "MySQL",
        description: "MySQL is a relational database management system (RDBMS) that runs as a server providing multi-user access to a storage disk.",
        image: "https://picsum.photos/200/308",
        category: ["Web"],
        link: "https://www.mysql.com/",
        favicon: "https://icons.duckduckgo.com/ip2/www.mysql.com.ico"
      },
      {
        id: 94,
        title: "SQLite",
        description: "SQLite is a C library that provides a SQL database engine. It is a disk-based database that doesn't require a separate server process or system initialization.",
        image: "https://picsum.photos/200/308",
        category: ["Web"],
        link: "https://www.sqlite.org/",
        favicon: "https://icons.duckduckgo.com/ip2/www.sqlite.org.ico"
      },
      {
        id: 95,
        title: "Redis",
        description: "Redis is an open source, in-memory data structure store, used as a database, cache and message broker.",
        image: "https://picsum.photos/200/308",
        category: ["Web"],
        link: "https://redis.io/",
        favicon: "https://icons.duckduckgo.com/ip2/redis.io.ico"
      },
      {
        id: 96,
        title: "Mongoose",
        description: "Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.",
        image: "https://picsum.photos/200/308",
        category: ["Web"],
        link: "https://mongoosejs.com/",
        favicon: "https://icons.duckduckgo.com/ip2/mongoosejs.com.ico"
      },
      {
        id: 97,
        title: "Sequelize",
        description: "Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server. It features solid transaction support, relations, read replication and more.",
        image: "https://picsum.photos/200/308",
        category: ["Web"],
        link: "https://sequelize.org/",
        favicon: "https://icons.duckduckgo.com/ip2/sequelize.org.ico"
      },
      {
        id: 98,
        title: "Prisma",
        description: "Prisma is a database toolkit that integrates seamlessly with your codebase.",
        image: "https://picsum.photos/200/308",
        category: ["Web"],
        link: "https://www.prisma.io/",
        favicon: "https://icons.duckduckgo.com/ip2/www.prisma.io.ico"
      },
      {
        id: 99,
        title: "Knex",
        description: "Knex.js is a 'batteries included' SQL query builder for Postgres, MSSQL, MySQL, MariaDB, SQLite3, and Oracle designed to be flexible, portable, and fun to use.",
        image: "https://picsum.photos/200/308",
        category: ["Web"],
        link: "https://knexjs.org/",
        favicon: "https://icons.duckduckgo.com/ip2/knexjs.org.ico"
      },
      {
        id: 100,
        title: "Drizzle",
        description: "Drizzle is a TypeScript ORM for PostgreSQL, MySQL, MariaDB, and SQLite.",
        image: "https://picsum.photos/200/308",
        category: ["Web"],
        link: "https://drizzle.dev/",
        favicon: "https://icons.duckduckgo.com/ip2/drizzle.dev.ico"
      },
      {
        id: 101,
        title: "Supabase",
        description: "Supabase is an open source Firebase alternative.",
        image: "https://picsum.photos/200/308",
        category: ["Web"],
        link: "https://supabase.com/",
        favicon: "https://icons.duckduckgo.com/ip2/supabase.com.ico"
      },
      {
        id: 102,
        title: "Firebase",
        description: "Build & run modern, AI-powered experiences users love with Firebase",
        image: "https://picsum.photos/200/308",
        category: ["Web"],
        link: "https://firebase.google.com/",
        favicon: "https://icons.duckduckgo.com/ip2/firebase.google.com.ico"
      },
      {
        id: 103,
        title: "Cloudflare",
        description: "We make websites, apps, and networks faster and more secure. Our developer platform is the best place to build modern apps and deliver AI initiatives.",
        image: "https://picsum.photos/200/308",
        category: ["Web"],
        link: "https://www.cloudflare.com/",
        favicon: "https://icons.duckduckgo.com/ip2/www.cloudflare.com.ico"
      },
      {
        id: 104,
        title: "Vercel",
        description: "Vercel provides the developer tools and cloud infrastructure to build, scale, and secure a faster, more personalized web.",
        image: "https://picsum.photos/200/308",
        category: ["Web"],
        link: "https://vercel.com/",
        favicon: "https://icons.duckduckgo.com/ip2/vercel.com.ico"
      },
      {
        id: 105,
        title: "AWS",
        description: "Que vous recherchiez des options de puissance de calcul, de stockage de bases de données, de diffusion de contenu ou d’autres fonctionnalitéss",
        image: "https://picsum.photos/200/308",
        category: ["Web"],
        link: "https://aws.amazon.com/",
        favicon: "https://icons.duckduckgo.com/ip2/aws.amazon.com.ico"
      },
      {
        id: 106,
        title: "Azure",
        description: "Rêvez grand et réalisez des percées grâce aux dernières solutions d’IA. ",
        image: "https://picsum.photos/200/308",
        category: ["Web"],
        link: "https://azure.microsoft.com/",
        favicon: "https://icons.duckduckgo.com/ip2/azure.microsoft.com.ico"
      },
      {
        id: 107,
        title: "Digital Ocean",
        description: "The simplest cloud that scales with you.",
        image: "https://picsum.photos/200/308",
        category: ["Web"],
        link: "https://www.digitalocean.com/",
        favicon: "https://icons.duckduckgo.com/ip2/www.digitalocean.com.ico"
      },
      {
        id: 108,
        title: "Linode",
        description: "Mix-&-match illustrations of people with a design librarys",
        image: "https://picsum.photos/200/308",
        category: ["Web"],
        link: "Build and deliver low-latency, edge native applications on Akamai Cloud",
        favicon: "https://icons.duckduckgo.com/ip2/www.linode.com.ico"
      },
      {
        id: 109,
        title: "GSAP",
        description: "Animate anything in the browser",
        image: "https://picsum.photos/200/308",
        category: ["Web", "Design"],
        link: "https://greensock.com/gsap/",
        favicon: "https://icons.duckduckgo.com/ip2/greensock.com.ico"
      },
      {
        id: 110,
        title: "Animate.css",
        description: "Animate.css is a library of ready-to-use, cross-browser animations for you to use in your projects. Great for emphasis, home pages, sliders, and attention-guiding hints.",
        image: "https://picsum.photos/200/308",
        category: ["Web", "Design"],
        link: "https://animate.style/",
        favicon: "https://icons.duckduckgo.com/ip2/animate.style.ico"
      },
      {
        id: 111,
        title: "Lottie",
        description: "Lottie is an open format for animated vector graphics",
        image: "https://picsum.photos/200/308",
        category: ["Web", "Design"],
        link: "https://lottie.github.io/",
        favicon: "https://icons.duckduckgo.com/ip2/lottie.github.io.ico"
      },
      {
        id: 112,
        title: "Three.js",
        description: "JavaScript 3D Library",
        image: "https://picsum.photos/200/308",
        category: ["Web", "Design"],
        link: "https://threejs.org/",
        favicon: "https://icons.duckduckgo.com/ip2/threejs.org.ico"
      },
      {
        id: 113,
        title: "React Three Fiber",
        description: "Build your scene declaratively with re-usable, self-contained components that react to state, are readily interactive and can participate in React's ecosystem",
        image: "https://picsum.photos/200/308",
        category: ["Web", "Design"],
        link: "https://r3f.docs.pmnd.rs/getting-started/introduction",
        favicon: "https://icons.duckduckgo.com/ip2/r3f.docs.pmnd.rs/getting-started/introduction.ico"
      },
      {
        id: 114,
        title: "React Three Drei",
        description: "A React renderer for Three.js",
        image: "https://picsum.photos/200/308",
        category: ["Web", "Design"],
        link: "https://drei.pmnd.rs/",
        favicon: "https://icons.duckduckgo.com/ip2/drei.pmnd.rs.ico"
      },
      {
        id: 115,
        title: "Framer Motion",
        description: "Animate React components with ease",
        image: "https://picsum.photos/200/308",
        category: ["Web", "Design"],
        link: "https://www.framer.com/motion/",
        favicon: "https://icons.duckduckgo.com/ip2/www.framer.com.ico"
      },
      {
        id: 116,
        title: "React Spring",
        description: "Animate React components with ease",
        image: "https://picsum.photos/200/308",
        category: ["Web"],
        link: "https://www.react-spring.dev/",
        favicon: "https://icons.duckduckgo.com/ip2/www.react-spring.dev.ico"
      },
      {
        id: 117,
        title: "Axios",
        description: "Promise based HTTP client for the browser and node.js",
        image: "https://picsum.photos/200/308",
        category: ["Web"],
        link: "https://axios-http.com/",
        favicon: "https://icons.duckduckgo.com/ip2/axios-http.com.ico"
      },
      {
        id: 118,
        title: "React Query",
        description: "React Query is designed to work out of the box with React Native, with the exception of the devtools, which are only supported with React DOM at this time.",
        image: "https://picsum.photos/200/308",
        category: ["Web"],
        link: "https://tanstack.com/query/latest/docs/framework/react/react-native",
        favicon: "https://icons.duckduckgo.com/ip2/tanstack.com.ico"
      },
      {
        id: 119,
        title: "React Hook Form",
        description: "React Hook Form is a library for managing forms in React. It is a lightweight and flexible library that allows you to manage forms in a declarative way.",
        image: "https://picsum.photos/200/308",
        category: ["Web"],
        link: "https://react-hook-form.com/",
        favicon: "https://icons.duckduckgo.com/ip2/react-hook-form.com.ico"
      },
      {
        id: 120,
        title: "Netlify",
        description: "Deploy any modern frontend stack, from marketing sites to AI apps. Join millions of developers and teams shipping faster on Netlify. ",
        image: "https://picsum.photos/200/308",
        category: ["Web"],
        link: "https://www.netlify.com/",
        favicon: "https://icons.duckduckgo.com/ip2/www.netlify.com.ico"
      },
      {
        id: 121,
        title: "Strapi",
        description: "Build modern websites and apps with Strapi, the leading open-source headless CMS. Strapi is a flexible, community-driven, and developer-friendly CMS that allows you to build your own content types and APIs.",
        image: "https://picsum.photos/200/308",
        category: ["Web"],
        link: "https://strapi.io/",
        favicon: "https://icons.duckduckgo.com/ip2/strapi.io.ico"
      },
      {
        id: 122,
        title: "Sanity",
        description: "A fully customizable all-code backend for content-driven websites and apps—their builders and creators.",
        image: "https://picsum.photos/200/308",
        category: ["Web"],
        link: "https://www.sanity.io/",
        favicon: "https://icons.duckduckgo.com/ip2/www.sanity.io.ico"
      },
      {
        id: 123,
        title: "Contentful",
        description: "Contentful is a headless CMS that allows you to build and deploy your own API.",
        image: "https://picsum.photos/200/308",
        category: ["Web"],
        link: "https://www.contentful.com/",
        favicon: "https://icons.duckduckgo.com/ip2/www.contentful.com.ico"
      },
      {
        id: 124,
        title: "Storyblok",
        description: "Storyblok is a headless CMS that allows you to build and deploy your own API.",
        image: "https://picsum.photos/200/308",
        category: ["Web"],
        link: "https://www.storyblok.com/",
        favicon: "https://icons.duckduckgo.com/ip2/www.storyblok.com.ico"
      },
      {
        id: 125,
        title: "GraphQL",
        description: "GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data.",
        image: "https://picsum.photos/200/308",
        category: ["Web"],
        link: "https://graphql.org/",
        favicon: "https://icons.duckduckgo.com/ip2/graphql.org.ico"
      },
      {
        id: 126,
        title: "Apollo",
        description: "Apollo is a platform for building and deploying your own API.",
        image: "https://picsum.photos/200/308",
        category: ["Web"],
        link: "https://www.apollographql.com/",
        favicon: "https://icons.duckduckgo.com/ip2/www.apollographql.com.ico"
      },
      {
        id: 127,
        title: "Relay",
        description: "Relay is a JavaScript framework for building data-driven React applications.",
        image: "https://picsum.photos/200/308",
        category: ["Web"],
        link: "https://relay.dev/",
        favicon: "https://icons.duckduckgo.com/ip2/relay.dev.ico"
      },
      {
        id: 128,
        title: "Apollo Client",
        description: "Learn to design, build, and orchestrate APIs with GraphQL at any scale ",
        image: "https://picsum.photos/200/308",
        category: ["Web"],
        link: "https://www.apollographql.com/docs/react/api/react-apollo/",
        favicon: "https://icons.duckduckgo.com/ip2/www.apollographql.com.ico"
      },
      {
        id: 129,
        title: "Apollo Server",
        description: "Learn to design, build, and orchestrate APIs with GraphQL at any scale ",
        image: "https://picsum.photos/200/308",
        category: ["Web"],
        link: "https://www.apollographql.com/docs/apollo-server/",
        favicon: "https://icons.duckduckgo.com/ip2/www.apollographql.com.ico"
      },
      {
        id: 130,
        title: "Apollo Link",
        description: "The Apollo Link library helps you customize the flow of data between Apollo Client and your GraphQL server. ",
        image: "https://picsum.photos/200/308",
        category: ["Web"],
        link: "https://www.apollographql.com/docs/link/",
        favicon: "https://icons.duckduckgo.com/ip2/www.apollographql.com.ico"
      },
      {
        id: 131,
        title: "Swagger",
        description: "Simplify your API development with our open‑source and professional tools",
        image: "https://picsum.photos/200/308",
        category: ["Web"],
        link: "https://swagger.io/",
        favicon: "https://icons.duckduckgo.com/ip2/swagger.io.ico"
      },
      {
        id: 132,
        title: "OpenAPI",
        description: "OpenAPI is a specification for describing REST APIs. It is a standard for documenting APIs.",
        image: "https://picsum.photos/200/308",
        category: ["Web"],
        link: "https://www.openapis.org/",
        favicon: "https://icons.duckduckgo.com/ip2/www.openapis.org.ico"
      },
      {
        id: 133,
        title: "Ajax",
        description: "Ajax is a technique for creating interactive web applications.",
        image: "https://picsum.photos/200/308",
        category: ["Web"],
        link: "https://www.ajax.org/",
        favicon: "https://icons.duckduckgo.com/ip2/www.ajax.org.ico"
      },
      {
        id: 134,
        title: "jQuery",
        description: "jQuery is a fast, small, and feature-rich JavaScript library.",
        image: "https://picsum.photos/200/308",
        category: ["Web"],
        link: "https://jquery.com/",
        favicon: "https://icons.duckduckgo.com/ip2/jquery.com.ico"
      },
      {
        id: 135,
        title: "Axios",
        description: "Axios is a promise-based HTTP client for the browser and node.js.",
        image: "https://picsum.photos/200/308",
        category: ["Web"],
        link: "https://axios-http.com/",
        favicon: "https://icons.duckduckgo.com/ip2/axios-http.com.ico"
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