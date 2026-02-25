// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        "mk-primary":   "#008cff",
        "mk-secondary": "#ff6b6b",
        "mk-light":     "#f0f9ff",
        "mk-success":   "#51b96a",
        "mk-warning":   "#ff9800",
        "mk-danger":    "#d32f2f",
      },
    },
  },
  plugins: [],
};
