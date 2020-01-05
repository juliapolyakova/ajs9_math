/* eslint-disable no-underscore-dangle */
export default class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this._attack = 100;
    this._stoned = false;
    this._distance = 1;
  }

  set stoned(value) {
    this._stoned = value;
  }

  get stoned() {
    return this._stoned;
  }

  set attack(value) {
    this._attack = value;
  }

  get attack() {
    let percent;
    if (this._distance === 2) {
      percent = 0.9;
    } else if (this.distance === 3) {
      percent = 0.8;
    } else if (this.distance === 4) {
      percent = 0.7;
    } else if (this.distance === 5) {
      percent = 0.6;
    } else {
      percent = 1;
    }

    if (this._stoned) {
      return Math.round((this._attack * percent) - (Math.log2(this._distance) * 5));
    }

    return Math.round(this._attack * percent);
  }
}
