"use strict";

const rs = require('./filters/rs');
const rubrika = require('./filters/rubrika');

module.exports = nunjucksEnv => {
  nunjucksEnv
    .addFilter('rsDateShort', rs.dateShort)
    .addFilter('rsDateLong', rs.dateLong)
    .addFilter('rsShortMonth', rs.shortMonth)
    .addFilter('pagesInRubrika', rubrika.pagesInRubrika)
  ;
};
