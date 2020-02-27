const { Spig } = require('spignite');

Spig.hello();

Spig
  .on('/**/*.{md,njk}')
  .watchSite()

  ._('PAGES')
  .pageMeta()
  .pageLinks()
  .collect('prj')
  .collect('org')

  ._('RENDER')
  .summary()
  .render()
  .applyTemplate()
  .htmlMinify()
;


// IMAGES

Spig
  .on('/**/*.{png,jpg,gif}')

  ._('IMAGES')
  .assetLinks()
;

Spig.run();
