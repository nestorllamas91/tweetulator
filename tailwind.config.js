module.exports = {
  content: ["./src/**/*.tsx", "./dist/**/*.jsx"],
  theme: {
    fontFamily: {
      heading: ["Montserrat SemiBold", "sans-serif"],
      body: ["Lato Regular", "sans-serif"],
    },
    screens: {
      mq1: { raw: "(min-width: 640px) and (max-width: 1024px) and (orientation: landscape)" },
      mq2: { raw: "(min-width: 640px) and (max-width: 1024px) and (orientation: portrait)" },
      mq3: { raw: "(min-width: 1024px)" },
    },
  },
};
