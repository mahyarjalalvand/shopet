/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html"
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#F7763D",
        "secondary":"#519BC2",
        "secondary2":"#5124C4",
        "primary2":"#FEEDE6",
        "priceColor":"#79AF79",
        "buttonBg":"#519BC2",
        "desColor":"#888888",
      },
      backgroundImage: {
        'bannerBg1': "url('/public/images/Vector (2).png')",
        'bannerBg2': "url('/public/images/Vector (1).png')",
        'bannerBg3': "url('/public/images/Vector.png')",
        'bg-purple': "url('/public/images/qwe.png')",
        'bg-orange': "url('/public/images/orange.png')",
        'bg-green': "url('/public/images/green.png')",
        'bg-pink': "url('/public/images/pink.png')",
        'bannerBg4':"url('/public/images/Untitled design-23 1.png')",
        'footerBg':"url('/public/images/Group 48095593 1.png')",
      },
    },
  },
  plugins: [],
}

