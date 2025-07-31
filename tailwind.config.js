/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
  extend: {
    colors: {
      neonBlue: '#00ffff',
      neonPink: '#ff00ff',
      neonGreen: '#39ff14',
      neonYellow: '#ffff00',
    },
    dropShadow: {
      neon: '0 0 6px #39ff14, 0 0 12px #39ff14',
    },
    boxShadow: {
      neon: '0 0 10px #8b5cf6, 0 0 20px #8b5cf6',
    },
  },
}
}
