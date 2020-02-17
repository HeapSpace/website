const { Spig, SpigSite } = require('spignite');

Spig.hello();

Spig
  .on('/**/*.{md,njk}')
  .watchSite()

  ._('PAGES')
  .pageMeta()
  .pageLinks()
  .tags()

  ._('RENDER')
  .summary()
  .render()
  .applyTemplate()
  .htmlMinify()
;


// IMAGES

Spig
  .on('/**/*.{png,jpg,gif}')

  ._('RENDER^BEFORE')
  .assetLinks()

  ._('ASSETS')
  .imageMinify()
;

Spig.run();
