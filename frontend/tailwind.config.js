module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        graciatheme: {
          // custom theme
          primary: "#facc15",
          "primary-focus": "#fca5a5",
          "primary-content": "#99f6e4",
          secondary: "#F2F2F2",
          "secondary-focus": "#fcd34d",
          "secondary-content": "#000000",
          accent: "#37cdbe",
          "accent-focus": "#2aa79b",
          "accent-content": "#ffffff",
          neutral: "#111827",
          "neutral-focus": "#2a2e37",
          "neutral-content": "#ffffff",
          "base-100": "#F3F3F3",
          "base-200": "#f9fafb",
          "base-300": "#d1d5db",
          "base-content": "#1f2937",
          info: "#2094f3",
          success: "#f87171",
          warning: "#ff9900",
          error: "#ff5724",
        },
        fontFamily: {
          sans: ["Roboto", "sans-serif"],
        },
      },
      "dark", // and some pre-defined theme
      "lofi",
      "cupcake",
    ],
  },
};
