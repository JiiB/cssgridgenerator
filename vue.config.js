module.exports = {
  publicPath: "./",
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/styles/main.scss";`,
      },
    },
  },
};
