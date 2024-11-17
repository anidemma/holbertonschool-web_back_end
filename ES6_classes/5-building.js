export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('Sqft must be a number');
    }
    if (this.constructor !== Building && !this.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft =sqft;
  }

  get sqft () {
    return this._sqft;
  }
}
