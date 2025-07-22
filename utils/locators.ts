export const locators = {
  login: {
    username: '[data-test="username"]',
    password: '[data-test="password"]',
    loginBtn: '[data-test="login-button"]',
  },
  inventory: {
    itemAddToCart: '[data-test^="add-to-cart"]', // Selects any "add-to-cart" button
    cartIcon: ".shopping_cart_link",
  },
  checkout: {
    checkoutBtn: '[data-test="checkout"]',
    firstName: '[data-test="firstName"]',
    lastName: '[data-test="lastName"]',
    zipCode: '[data-test="postalCode"]',
    continueBtn: '[data-test="continue"]',
    finishBtn: '[data-test="finish"]',
    completeHeader: ".complete-header",
  },
};
