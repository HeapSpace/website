module.exports = {
  pagesInRubrika: (pages) => {
    return pages.filter(page => (page.src.startsWith('/blog/') || (page.src.startsWith('/vesti/'))));
  }
};
