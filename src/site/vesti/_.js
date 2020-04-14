"use strict";

const slugify = require('slugify');

module.exports = (fileRef) => {
  const slug = fileRef.attr('slug');
  if (!slug) {
    fileRef.setAttr('slug', slugify(fileRef.attr('title')).toLowerCase());
  }
  let news = true;
  if (fileRef.hasAttr('news')) {
    news = fileRef.attr('news');
  }
  return {
    menu: 20,
    news,
    slug
  };
};
