export const testData = {
  validUser: {
    username: process.env.SAUCE_USERNAME || 'standard_user',
    password: process.env.SAUCE_PASSWORD || 'secret_sauce',
  },
  checkout: {
    firstName: 'Daljeet',
    lastName: 'Ranot',
    zipCode: '123456',
    numberOfItems: 3,
    successMessage: 'Thank you for your order!',
    successUrlPattern: /.*checkout-complete/,
  },
};
