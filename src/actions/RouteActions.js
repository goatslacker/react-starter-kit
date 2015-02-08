/*
 * React.js Starter Kit
 * Copyright (c) 2014 Konstantin Tarkus (@koistya), KriaSoft LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

'use strict';

var alt = require('../core/alt');

class RouteActions {
  constructor() {
    this.generateActions('setRoute');
  }
}

alt.createActions(RouteActions, exports);
