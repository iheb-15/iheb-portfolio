/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: "#05080D",
        surface: "#0A0F17",
        surface2: "#0E1520",
        border: "#1A2433",
        signal: "#00BFFF",
        "signal-dim": "#0A6E96",
        success: "#39FF88",
        warn: "#FFB020",
        text: "#E8EDF5",
        muted: "#8B95A7",
        faint: "#4A5568",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        body: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(0,191,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,191,255,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      animation: {
        scan: "scan 6s linear infinite",
        blink: "blink 1.1s steps(2, start) infinite",
        "pulse-slow": "pulse-slow 3s ease-in-out infinite",
        float: "float 7s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
      },
      keyframes: {
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: 0.5 },
          "50%": { opacity: 1 },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
