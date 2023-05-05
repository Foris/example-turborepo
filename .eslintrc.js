module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-foris`
  extends: ["foris"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
