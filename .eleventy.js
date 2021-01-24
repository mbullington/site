// .eleventy.js

const pluginJSX = require("eleventy-plugin-jsx");
const pluginTypeset = require("eleventy-plugin-typeset/typeset-plugin");
const pluginInjector = require("@infinity-interactive/eleventy-plugin-injector");

// CSS transformers.
const sass = require("sass");
const postcss = require('postcss')
const cssnano = require("cssnano")

const path = require("path");
const fs = require("fs-extra")

// Compile SCSS to CSS and optimize it.
function compileSCSS(eleventyConfig, glob, outputDir) {
  eleventyConfig.addPlugin(pluginInjector, {
    watch: glob,
    async inject(eleventyInstance, options, file) {
      // Compile Sass to CSS.
      let result

      result = sass.renderSync({ file })
      result = await postcss([cssnano]).process(result.css).then(a => a)

      // Ugly filename manipulation.
      const fileName = file.split('/')[file.split('/').length - 1]
      const outputFile = path.resolve(outputDir, fileName.split('scss').join('css'))

      fs.outputFileSync(outputFile, result.css)
      console.log("SCSS Pipeline: Wrote " + outputFile)
    }
  })
}

module.exports = function(config) {
  // Set experimental features, needed for JSX.
  process.env.ELEVENTY_EXPERIMENTAL = true

  config.addPassthroughCopy('./static/');

  // Add watch targets.
  config.addWatchTarget("./src/");
  config.addWatchTarget("./images/");

  compileSCSS(config, './src/styles/global.scss', './_site/styles')
  compileSCSS(config, './src/styles/home.scss', './_site/styles')

  config.addPlugin(pluginJSX);
  config.addTransform('typeset', pluginTypeset({
    disable: ['hyphenate']
  }));  

  return {
    dir: {
      input: "pages",
    },
  };
};
