"use strict";

const slugify = require('slugify');

module.exports = (fileRef) => {
  const slug = fileRef.attr('slug');
  if (!slug) {
    fileRef.setAttr('slug', slugify(fileRef.attr('title')).toLowerCase());
  }
  let post = true;
  if (fileRef.hasAttr('post')) {
    post = fileRef.attr('post');
  }
  return {
    menu: 20,
    post,
    slug
  };
};
