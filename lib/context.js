'use strict';

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _emitter = require('./emitter');

var _emitter2 = _interopRequireDefault(_emitter);

var _libInvariant = require('./lib/invariant');

var _libInvariant2 = _interopRequireDefault(_libInvariant);

var _event = require('./event');

var _event2 = _interopRequireDefault(_event);

var _libEmitterEventSubscription = require('./lib/emitter/EventSubscription');

var _libEmitterEventSubscription2 = _interopRequireDefault(_libEmitterEventSubscription);

var emptyFunction = function emptyFunction() {};

/**
 * Class that contains the info and methods for app navigation.
 */

var NavigationContext = (function () {
  function NavigationContext() {
    _classCallCheck(this, NavigationContext);

    this._eventEmitter = new _emitter2['default'](this);
    this._currentRoute = null;
    this.addListener('willfocus', this._onFocus, this);
    this.addListener('didfocus', this._onFocus, this);
  }

  // TODO:  does not like this getter. Will add @flow check back once
  // getter/setter is supported.

  _createClass(NavigationContext, [{
    key: 'addListener',
    value: function addListener(eventType, listener, context) {
      var emitter = this._eventEmitter;
      if (emitter) {
        return emitter.addListener(eventType, listener, context);
      }
      return { remove: emptyFunction };
    }
  }, {
    key: 'emit',
    value: function emit(eventType, data, didEmitCallback) {
      var emitter = this._eventEmitter;
      if (emitter) {
        emitter.emit(eventType, data, didEmitCallback);
      }
    }
  }, {
    key: 'dispose',
    value: function dispose() {
      var emitter = this._eventEmitter;
      if (emitter) {
        // clean up everything.
        emitter.removeAllListeners();
        this._eventEmitter = null;
        this._currentRoute = null;
      }
    }
  }, {
    key: '_onFocus',
    value: function _onFocus(event) {
      (0, _libInvariant2['default'])(event.data && event.data.hasOwnProperty('route'), 'didfocus event should provide route');
      this._currentRoute = event.data.route;
    }
  }, {
    key: 'currentRoute',
    get: function get() {
      return this._currentRoute;
    }
  }]);

  return NavigationContext;
})();

exports['default'] = NavigationContext;
module.exports = exports['default'];