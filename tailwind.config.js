module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // Adjust paths as needed theme: {
  extend: {
    boxShadow: {
      'md': '0 4px 6px rgba(0, 0, 0, 0.1)', // default shadow for the top bar
    },
    textShadow: {
      'md': '2px 2px 5px rgba(0, 128, 0, 0.7)', // green shadow for name
    },
  },
  plugins: [],
};
