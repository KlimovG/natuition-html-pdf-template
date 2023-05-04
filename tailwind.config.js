module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx,vue}"], // add your preferred file extensions here
  theme: {
    extend: {
      width: {
        A4: "210mm",
      },
      height: {
        A4: "297mm",
      },
      colors: {
        accent: "#3BAB36",
      },
    },
  },
  plugins: [],
};
