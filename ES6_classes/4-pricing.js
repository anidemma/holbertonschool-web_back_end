import Currency from './3-currency.js';
  export default class Pricing {
    constructor(amount, currency) {
      if (typeof amount !== 'number') {
        throw new TypeError('Amount must be a number');
      }
      this._amount = amount;

      if (typeof currency !== 'string') {
        throw new TypeError('Currency must be a string');
      }
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

  set currency(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Amount must be a string');
    }
    this._currency = value;
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
  