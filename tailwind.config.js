module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'mindaro': '#CDE77F',
        'vermilion': '#F24333',
        'lightgreen': '#C4F7A1',
        'greenmain': '#5ECD81',
        'darkgreen': '#1F564A',
        'clay': '#E5D9C6',
      },
      fontFamily: {
        prompt: ['Prompt', 'sans-serif'],
        bebas: ['"Bebas Neue"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
