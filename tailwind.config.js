/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./common/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        'card-background': 'rgba(62, 207, 151, 0.1)',
        'get-started': 'rgba(72, 253, 183, 0.3)',
        'input-field': 'rgba(85, 190, 150, 0.1)',
        'card': 'rgba(62,207,151,0.1)',
      },
      colors: {
        'primary-color': '#017A4B',
        'chip': '#274539',
        'review': '#EEF3F1',
        'service': '#E7F2EE',
        'form': '#F4F8F7',
        'contact-input': '#DFF0EA'
      }
    },
  },
  plugins: [],
};
