const moment = require('moment');

module.exports = function (eleventyConfig) {

    eleventyConfig.addFilter('date', date => {
      return moment(date).utc().format('LL'); // E.g. May 31, 2019
    });
  
    return {
      templateFormats: [
        "html",
        "md",
        "png",
        "jpg",
        "jpeg",
        "pdf",
        "css" // css is not yet a recognized template extension in Eleventy
      ]
    };
  };