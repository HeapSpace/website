"use strict";

const slugify = require('slugify');

module.exports = (fileRef) => {
  const slug = fileRef.attr('slug');
  if (!slug) {
    fileRef.setAttr('slug', slugify(fileRef.attr('title')).toLowerCase());
  }
  return {
    menu: 20,
    post: true,
    slug
  };
};
