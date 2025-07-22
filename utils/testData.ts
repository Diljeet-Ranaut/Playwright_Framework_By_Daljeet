// utils/testData.ts
import { ENV } from "./env";

//console.log("My Data",ENV.username);
export const testData = {
  validUser: {
    username: ENV.username,
    password: ENV.password,
  },
  checkout: {
    numberOfItems: 3,
    firstName: "Daljeet",
    lastName: "Ranot",
    zipCode: "12345",
    successUrlPattern: /checkout-complete\.html$/,
    successMessage: "Thank you for your order",
  },
};
