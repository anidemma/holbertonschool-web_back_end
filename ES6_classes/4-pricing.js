import Currency from './3-currency.js';
  export default class Pricing {
    constructor(amount, currency) {
      if (typeof amount !== 'number') {
        throw new TypeError('Amount must be a number');
      }
      this._amount = amount;
      this._currency = currency;
    }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = value;
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
