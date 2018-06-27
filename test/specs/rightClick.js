describe('right click', function () {
  it('should work', function () {
    browser.url('./api.html');
    let title = browser.getTitle();

    console.log("rightClick.js :6", title);
  })
})