module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "~@/scss/abstracts/__abstracts-dir.scss";`
            }
        }
    }
};
