module.exports = {
  plugins: {
    tailwindcss: {},
    "vue-cli-plugin-tailwind/purgecss": {
      content: [
        "./public/**/*.html",
        "./src/**/*.vue",
        "./node_modules/vue-tailwind/src/themes/default.js"
      ]
    }
  }
};
