module.exports = () => {
  const prod = process.env.NODE_ENV === 'production';
  return {
    plugins: [require('tailwindcss'), require('autoprefixer')]
  };
};
