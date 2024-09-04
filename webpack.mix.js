const mix = require("laravel-mix");

mix
  .postCss("src/css/app.pcss", "dist/css/app.css")
  .js("src/js/app.js", "dist/js");

mix.options({
  postCss: [require("tailwindcss"), require("autoprefixer")],
});
