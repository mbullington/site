// Load all images ahead of time.
const Image = require("@11ty/eleventy-img");

const IMAGE_WIDTHS = [64, 96, 128, 192, 256, 512, 768, null];

async function loadImage(src, alt, sizesPercentage = 1.0) {
  const metadata = await Image(src, {
    widths: IMAGE_WIDTHS,
    outputDir: "./_site/img/",
    formats: ["webp", "avif", "jpeg"],
  });

  // https://www.11ty.dev/docs/plugins/image/#use-this-in-your-templates
  const lowsrc = metadata.jpeg[0];
  const highsrc = metadata.jpeg[metadata.jpeg.length - 1];

  return `<picture>
    ${Object.values(metadata)
      .map((imageFormat) => {
        const sizes = imageFormat.map((entry) => `(max-width: ${Math.ceil(entry.width / sizesPercentage)}px) ${entry.width}px`).join(", ") + `, ${highsrc.width}px`
        return `<source type="${
          imageFormat[0].sourceType
        }" srcset="${imageFormat.map((entry) => entry.srcset).join(", ")}" sizes="${sizes}">`;
      })
      .join("\n")}
      <img
        src="${lowsrc.url}"
        alt="${alt}"
        width="${lowsrc.width}"
        height="${lowsrc.height}"
        ${/* Add high-res version needed for medium-zoom */ ''}
        data-zoom-src="${highsrc.url}">
    </picture>`;
}

// Sidebar images should only take up 1/3 of screen
const SCREENSHOT_IMG = 0.33
// Logo images should only take up a super-small part of screen
const LOGO_IMG = 0.2

module.exports = async function () {
  return {
    // Screenshots.
    interval_screenshot: await loadImage(
      "./images/interval_screenshot.png",
      "Interval",
      SCREENSHOT_IMG
    ),
    airworks_screenshot: await loadImage(
      "./images/airworks_screenshot.png",
      "DJI Airworks",
      SCREENSHOT_IMG
    ),
    hackpsu_screenshot: await loadImage(
      "./images/hackpsu_screenshot.png",
      "HackPSU",
      SCREENSHOT_IMG
    ),
    // Logos.
    dji_logo: await loadImage(
      "./images/dji_logo.png",
      "DJI",
      LOGO_IMG
    ),
    wolfram_logo: await loadImage(
      "./images/wolfram_logo.png",
      "Wolfram",
      LOGO_IMG
    ),
    dglogik_logo: await loadImage(
      "./images/dglogik_logo.png",
      "DGLogik",
      LOGO_IMG
    ),
  };
};
