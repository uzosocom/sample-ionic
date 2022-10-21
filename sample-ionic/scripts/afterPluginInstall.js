const fs = require("fs");
const path = require("path");

const replace = (projectRoot, filepath) => {
  const base = path.join(projectRoot, "custom/AppReviewPlugin.java");
  let file = fs.readFileSync(base, "utf8");
  fs.writeFileSync(filepath, file);
};

module.exports = function (ctx) {
  if (ctx.opts.plugin.id !== "cordova-plugin-app-review") return;

  const projectRoot = ctx.opts.projectRoot;
  const filepath = path.join(
    projectRoot,
    "platforms/android/app/src/main/java/by/chemerisuk/cordova/AppReviewPlugin.java"
  );
  replace(projectRoot, filepath);
};
