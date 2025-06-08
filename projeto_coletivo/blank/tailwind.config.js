export default {
  content: [
    './resources/**/*.{js,jsx,ts,tsx,vue,blade.php}',
  ],
  theme: {
    extend: {},
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',  // Certifique que isso exista
      '2xl': '1536px',
    },
  },
  plugins: [],
}
