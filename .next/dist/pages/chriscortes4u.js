'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _head = require('/Users/twilson631/training/jrs-coding-school-2016-expo/node_modules/next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _link = require('/Users/twilson631/training/jrs-coding-school-2016-expo/node_modules/next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var React = require('/Users/twilson631/training/jrs-coding-school-2016-expo/node_modules/react/react.js');

exports.default = function () {
  return React.createElement(
    'div',
    { className: 'mw7 center ph3 ph5-ns tc br2 pv5 bg-washed-green dark-green mb5' },
    React.createElement(
      _head2.default,
      null,
      React.createElement(
        'title',
        null,
        'Chris Cleans 4u'
      ),
      React.createElement('meta', { name: 'viewport', content: 'inital-scale=1.0, width=device-width' }),
      React.createElement('link', { rel: 'stylesheet', href: 'https://unpkg.com/tachyons@4.5.5/css/tachyons.min.css' })
    ),
    React.createElement(
      'div',
      { 'class': 'tc mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10' },
      React.createElement(
        'div',
        { 'class': 'tc' },
        React.createElement('img', { 'class': 'tc br-100 h4 w4 dib ba b--black-05 pa2', src: 'https://www.stevensegallery.com/146/146' }),
        React.createElement(
          'h1',
          { className: 'tc f3 mb2' },
          'Chris Cortes'
        ),
        React.createElement(
          'h2',
          { className: 'tc f5 fw4 gray mt0' },
          'JRS CODING SCHOOL'
        ),
        React.createElement(
          'h3',
          { className: 'tc f5 fw4 gray mt0' },
          'Final Project'
        )
      )
    ),
    React.createElement(
      'h1',
      { className: 'fw6 f3 f2-ns lh-title mt0 mb3' },
      'Chris Cleans 4u'
    ),
    React.createElement(
      'p',
      { className: 'tc' },
      'Chris Cleans 4u is the perfect app for you and your customers.'
    ),
    React.createElement(
      'div',
      { className: 'fw1 f5 mt0 mb3' },
      'Click ',
      React.createElement(
        _link2.default,
        { href: '/about' },
        React.createElement(
          'a',
          null,
          'here'
        )
      ),
      ' to read more'
    ),
    React.createElement('img', { src: '/static/circleClean.png' })
  );
};