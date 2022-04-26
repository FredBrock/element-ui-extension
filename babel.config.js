module.exports = {
  plugins: ["transform-vue-jsx"],
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "entry",
        corejs: 3,
      },
    ],
    // ["@vue/babel-preset-jsx"],
  ],
};
