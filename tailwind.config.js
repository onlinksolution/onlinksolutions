/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        darkBlue:"#093447",
        lightBlue:"#0FA3E6",
        header:"#31363F",
        primary:"#6889FC",
        darkPrimary:"#426BFE",
        secondary:"#CED9FF",
        headbtn:"#0E87BD",
        textGray:"#6B6868",
        boxColor:"#343333",
        footerBlack:"#1B1B1B"
      },
      fontFamily:{
        lexend:["Lexend", "sans-serif"],
        montserrat:["Montserrat", "sans-serif"],
        karla:["Karla", "sans-serif"],
        poppins:["Poppins", "sans-serif"]
      },
      fontWeight:{
        400:"400",
        600:"600",
        700:"700"
      },
      height:{
        header:"3.5rem"
      },
      gridTemplateColumns:{
        footer:"repeat(2, max-content)",
        footerSub:"repeat(3, max-content)"
      },
    },
  },
  plugins: [],
}