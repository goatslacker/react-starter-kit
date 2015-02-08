/*
 * React.js Starter Kit
 * Copyright (c) 2014 Konstantin Tarkus (@koistya), KriaSoft LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

'use strict';

var React = require('react');
var ExecutionEnvironment = require('react/lib/ExecutionEnvironment');
var {Router} = require('director');
var router;

var alt = require('./core/alt');

var PageActions = require('../actions/PageActions');
var RouteActions = require('../actions/RouteActions');


// Export React so the dev tools can find it
(window !== window.top ? window.top : window).React = React;

alt.createStore(class AppStore {
  constructor() {
    this.bindActions(PageActions);
    this.bindActions(RouteActions);
  }

  onSetCurrentRoute(route) {
    router.setRoute(route);
  }

  onSet() {
    if (ExecutionEnvironment.canUseDOM) {
      document.title = action.page.title;
    }
  }
});

/**
 * Check if Page component has a layout property; and if yes, wrap the page
 * into the specified layout, then mount to document.body.
 */
function render(page) {
  var layout = null, child = null, props = {};
  while ((layout = page.type.layout || (page.defaultProps && page.defaultProps.layout))) {
    child = React.createElement(page, props, child);
    page = layout;
  }
  React.render(React.createElement(page, props, child), document.body);
}

// Define URL routes
// See https://github.com/flatiron/director
var routes = {
  '/': () => render(require('./components/pages/Index')),
  '/privacy': () => render(require('./components/pages/Privacy'))
};

// Initialize a router
router = new Router(routes).configure({html5history: true}).init();
