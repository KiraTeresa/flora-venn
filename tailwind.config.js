/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./app/**/*.{html,ts,tsx,mdx}",
  "./components/**/*.{ts,tsx,mdx}",
],
  theme: {
    extend: {
      color: {
      'primary-bg-color': 'var(--primary-bg-color)',
      'secondary-bg-color': 'var(--secondary-bg-color)',
      'primary-color': 'var(--primary-color)',
      'secondary-color': 'var(--secondary-color)',
      'highlight-color': 'var(--highlight-color)',
      'input-color': 'var(--input-color)',
      },
    }  
  },
  plugins: [],
}

