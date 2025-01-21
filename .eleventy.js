const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
    
    eleventyConfig.addPassthroughCopy('./src/assets/css');
    eleventyConfig.addPassthroughCopy('./src/assets/fonts');
    eleventyConfig.addPassthroughCopy('./src/assets/img');
    eleventyConfig.addPassthroughCopy('./src/assets/js');

    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED)
    });

    // eleventyConfig.addCollection('tagsList', (collectionApi) => {
    //     const tagsSet = new Set()
    //     collectionApi.getAll().forEach((item) => {
    //       if (!item.data.tags) return
    //       item.data.tags
    //         .filter((tag) => !['post'].includes(tag))
    //         .forEach((tag) => tagsSet.add(tag))
    //     })
    // });

    eleventyConfig.addNunjucksFilter("limit", (arr, limit) => arr.slice(0, limit));

    eleventyConfig.setUseGitIgnore(false);

    return {
        dir: {
            input: "src",
            output: "public"
        },
        templateFormats: [ "md", "njk", "html", ],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
    }
}