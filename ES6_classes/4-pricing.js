/* eslint-disable no-unused-vars */
/* eslint-disable-next-line import/extensions */
import Currency from './3-currency.js';
  export default class Pricing {
    constructor(amount, currency) {
      this._amount = amount;
      this._currency = currency;
    }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  displayFullCurrency() {
    return `${this.currency.name} (${this.currency.code})`;
  }

  displayFullPrice() {
    return `${this.amount} (${this.displayFullCurrency})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
