module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" }, loose: true }],
    "@babel/preset-typescript",
  ],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@config": "./src/config",
          "@errors": "./src/errors",
          "@interfaces": "./src/interfaces",
          "@models": "./src/models",
          "@modules": "./src/modules",
          "@repositories": "./src/repositories",
          "@shared": "./src/shared",
          "@utils": "./src/utils",
          "@validations": "./src/validations"
        },
      },
    ],
    "babel-plugin-transform-typescript-metadata",
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    ["@babel/plugin-proposal-class-properties", { loose: true }],
  ]
}