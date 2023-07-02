module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        fontFamily: {
            'colleges': ['College Semi-condensed', 'sans-serif'],
            'DMsans': ['DM Sans', 'sans-serif'],
          },
        colors: {
            'pinkicf': '#BB037E',
            'blueicf': '#76AADB',
            'lucent': '#76AADB',
          },
          backgroundImage: {
            'hero-pattern': "url('../media/Dribble1.png')",
          },
      },
    },
    plugins: [],
  }