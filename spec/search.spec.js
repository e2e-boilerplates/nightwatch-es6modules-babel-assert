module.exports = {
  before: (browser) => {
    browser.url("https://e2e-boilerplate.github.io/sandbox/");
  },

  after: (browser) => {
    browser.end();
  },

<<<<<<< HEAD
  "should be on Sandbox": browser => {
    browser.assert.title("Sandbox");
    browser.getText("css selector", "h1", text => {
=======
  "should be on Sandbox": (browser) => {
    browser.assert.title("Sandbox");
    browser.getText("css selector", "h1", (text) => {
>>>>>>> 9d36f393bd5275837eda6cd5fb31d872dd8767d0
      browser.assert.strictEqual(text.value, "Sandbox");
    });
  },
};
