'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('/Users/twilson631/training/jrs-coding-school-2016-expo/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _head = require('/Users/twilson631/training/jrs-coding-school-2016-expo/node_modules/next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    { className: 'pa3 pa5-ns' },
    _react2.default.createElement(
      _head2.default,
      null,
      _react2.default.createElement('meta', { name: 'viewport', content: 'inital-scale=1.0, width=device-width' }),
      _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://unpkg.com/tachyons@4.5.5/css/tachyons.min.css' })
    ),
    _react2.default.createElement(
      'h1',
      { className: 'tc mt2 mb0 baskerville i fw1 f1' },
      'Welcome to Chris Cleans 4u!'
    ),
    _react2.default.createElement(
      'h2',
      { className: 'tc mt2 mb0 f6 fw4 ttu tracked' },
      'Let Chris do the cleaning for you!'
    ),
    _react2.default.createElement(
      'nav',
      { className: 'bt bb tc mw7 center mt4' },
      _react2.default.createElement(
        'a',
        { className: 'f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l', href: '/chriscortes4u' },
        'Home'
      ),
      _react2.default.createElement(
        'a',
        { className: 'f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l', href: '/history' },
        'History'
      ),
      _react2.default.createElement(
        'a',
        { className: 'f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l', href: '/packages' },
        'Packages'
      ),
      _react2.default.createElement(
        'a',
        { className: 'f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l', href: '/referrals' },
        'Referrals'
      ),
      _react2.default.createElement(
        'a',
        { className: 'f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l', href: '/contact' },
        'Contact'
      )
    )
  );
};