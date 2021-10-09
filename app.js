'use strict';

const Homey = require('homey');

class Bayesian extends Homey.App {

  /**
   * onInit is called when the app is initialized.
   */
  async onInit() {
    this.log(this.constructor.name);

    // Prime the API into memory, set its events.
    this.cache();

    // Initialise the devices objects.
    this.devices = {};
  }

  trace(message) {
    var trace = new Error().stack, caller = stack.split('\n')[2].trim();
    this.log('<' + caller + '>' + message);
  }

  /**
   * IF the API hasn't been set, get it otherwise just returned cached API for current homey.
   *
   * @returns {object}
   */
  getApi() {

    if (!this.api) {
      this.api = HomeyAPI.forCurrentHomey();
    }
    return this.api;
  }


}

module.exports = Bayesian;
