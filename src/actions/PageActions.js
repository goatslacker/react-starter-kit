/*
 * React.js Starter Kit
 * Copyright (c) 2014 Konstantin Tarkus (@koistya), KriaSoft LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

'use strict';

var alt = require('../core/alt');
var assign = require('react/lib/Object.assign');
var PageStore = require('../stores/PageStore');

class PageActions {
  set(page) {
    this.dispatch(
      assign({}, PageStore.getDefaultPage(), page)
    );
  }
}

alt.createActions(PageActions, exports);
