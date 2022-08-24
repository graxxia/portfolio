module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        graciatheme: {
          // custom theme
          primary: "#e02b5b",
          "primary-focus": "#f07fe8",
          "primary-content": "#F2F2F2",
          secondary: "#F2F2F2",
          "secondary-focus": "#F2F2F2",
          "secondary-content": "#000000",
          accent: "#37cdbe",
          "accent-focus": "#2aa79b",
          "accent-content": "#ffffff",
          neutral: "#3d4451",
          "neutral-focus": "#2a2e37",
          "neutral-content": "#ffffff",
          "base-100": "#ffffff",
          "base-200": "#f9fafb",
          "base-300": "#d1d5db",
          "base-content": "#1f2937",
          info: "#2094f3",
          success: "#009485",
          warning: "#ff9900",
          error: "#ff5724",
        },
      },
      "dark", // and some pre-defined theme
      "lofi",
      "cupcake",
    ],
  },
};
