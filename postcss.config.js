module.exports = (ctx) => ({
  map: ctx.options.map,
  plugins:
    ctx.file.basename === "minolith.min.css"
      ? [
          require("autoprefixer"),
          require("cssnano")({
            preset: "default",
          }),
        ]
      : [require("autoprefixer")],
});
