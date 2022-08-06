const fs = require('fs');
const path = require('path')

const replace = (filepath) => {
  let file = fs.readFileSync(filepath, 'utf8');
  file = file.replace('#import "Adjust.h"', '#import <Adjust/Adjust.h>')
  fs.writeFileSync(filepath, file);
}

module.exports = function(ctx) {
  if (ctx.opts.plugin.id !== 'com.adjust.sdk') return;

  const base = path.join(ctx.opts.projectRoot, 'platforms/ios/sample-ionic/Plugins/com.adjust.sdk');

  replace(path.join(base, 'AdjustCordova.h'));
  replace(path.join(base, 'AdjustCordovaDelegate.h'));
};
