const moment = require('moment');

module.exports = function (eleventyConfig) {

  eleventyConfig.setQuietMode(true);
  eleventyConfig.setDataDeepMerge(true);

  // Copy directories to _sites
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("files");

  // **************************************************************************
  // Custom Filters
  // **************************************************************************
  eleventyConfig.addFilter('date', date => {
    return moment(date).utc().format('LL'); // E.g. May 31, 2019
  });

  return {
    templateFormats: [
      "html",
      "md"
    ]
  };
};