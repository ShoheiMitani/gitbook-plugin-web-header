module.exports = {
    book: {
        assets: "./assets",
        js: [],
        css: []
    },
    hooks: {
        "page:before": function(page) {
            page.content = "# Title\n" +page.content;
            return page;
        }
    }
};
