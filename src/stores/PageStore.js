/*
 * React.js Starter Kit
 * Copyright (c) 2014 Konstantin Tarkus (@koistya), KriaSoft LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

'use strict';

var alt = require('../core/alt');

var PageActions = require('../actions/PageActions');

class PageStore {
  constructor() {
    this.bindActions(PageActions);

    this.page = PageStore.getDefaultPage();
  }

  onSet(page) {
    this.page = page;
  }

  static getDefaultPage() {
    return {
      title: 'React.js Starter Kit',
      description: 'A skeleton for an isomorphic web application (SPA) built with React.js and Flux',
      keywords: null
    };
  }

  static get() {
    return this.getState().page;
  }
}

module.exports = alt.createStore(PageStore, 'PageStore');
