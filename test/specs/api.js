describe('API page', function () {
  it('should load', function () {
    browser.url('./api.html');
    let title = browser.getTitle();

    browser.debug();

    console.log(`Page title is ${title}`);
  })
})