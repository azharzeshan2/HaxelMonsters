module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        196: "40rem",
        1966: "45rem",
      },
      backgroundImage: {
        "navigation-pattern": "url('/images/v51.png')",
        "navigation-pattern-hero": "url('/images/mainbfheade.png')",
        "navigation-pattern-hero2": "url('/images/Rectangle154.png')",
        "navigation-pattern-sectiontwo": "url('/images/secondsecimage.png')",
        "navigation-pattern-sectiontwott": "url('/images/secbg.png')",
        "background-third": "url('/images/bgthird.png')",
        "background-fourthsection": "url('/images/bgfour.png')",
        "background-fifthsection": "url('/images/bgfifth.png')",
      },
      colors: {
        greenn: "#2fdb4e",
        secnd: "#f6f047",
        bluee: "#0c171c",
      },
      boxShadow: {
        new: " 0 0 10px 6px #94be2c;",
        new2: " 0 0 10px 6px #da3333;",
        new3: " 0 0 10px 6px #0fb27b;",
      },
      height: {
        hehe: "120vh",
        hehehe: "150vh",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
