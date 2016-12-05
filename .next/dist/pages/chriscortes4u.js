'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _head = require('/Users/chriscortes/CODE/jrs-code-expo-2016/node_modules/next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _link = require('/Users/chriscortes/CODE/jrs-code-expo-2016/node_modules/next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var React = require('/Users/chriscortes/CODE/jrs-code-expo-2016/node_modules/react/react.js');

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
      'h1',
      { className: 'fw6 f3 f2-ns lh-title mt0 mb3' },
      'Chris Cleans 4u'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NocmlzY29ydGVzNHUuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFGQSxJQUFNQSxRQUFRQyxPQUFSLDBFQUFOOztrQkFLZTtBQUFBLFNBRWI7QUFBQTtBQUFBLE1BQUssV0FBVSxpRUFBZjtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FERjtBQUVFLG9DQUFNLE1BQUssVUFBWCxFQUFzQixTQUFRLHNDQUE5QixHQUZGO0FBR0Usb0NBQU0sS0FBSSxZQUFWLEVBQXVCLE1BQUssdURBQTVCO0FBSEYsS0FERjtBQU9FO0FBQUE7QUFBQSxRQUFJLFdBQVUsK0JBQWQ7QUFBQTtBQUFBLEtBUEY7QUFRSTtBQUFBO0FBQUEsUUFBSyxXQUFVLGdCQUFmO0FBQUE7QUFBc0M7QUFBQTtBQUFBLFVBQU0sTUFBSyxRQUFYO0FBQW9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcEIsT0FBdEM7QUFBQTtBQUFBLEtBUko7QUFTRSxpQ0FBSyxLQUFJLHlCQUFUO0FBVEYsR0FGYTtBQUFBLEMiLCJmaWxlIjoiY2hyaXNjb3J0ZXM0dS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvY2hyaXNjb3J0ZXMvQ09ERS9qcnMtY29kZS1leHBvLTIwMTYiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0JylcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG5cbiAgPGRpdiBjbGFzc05hbWU9XCJtdzcgY2VudGVyIHBoMyBwaDUtbnMgdGMgYnIyIHB2NSBiZy13YXNoZWQtZ3JlZW4gZGFyay1ncmVlbiBtYjVcIj5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT5DaHJpcyBDbGVhbnMgNHU8L3RpdGxlPlxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vdW5wa2cuY29tL3RhY2h5b25zQDQuNS41L2Nzcy90YWNoeW9ucy5taW4uY3NzXCIvPlxuICAgIDwvSGVhZD5cblxuICAgIDxoMSBjbGFzc05hbWU9XCJmdzYgZjMgZjItbnMgbGgtdGl0bGUgbXQwIG1iM1wiPkNocmlzIENsZWFucyA0dTwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZ3MSBmNSBtdDAgbWIzXCI+Q2xpY2sgPExpbmsgaHJlZj1cIi9hYm91dFwiPjxhPmhlcmU8L2E+PC9MaW5rPiB0byByZWFkIG1vcmU8L2Rpdj5cbiAgICA8aW1nIHNyYz1cIi9zdGF0aWMvY2lyY2xlQ2xlYW4ucG5nXCIgLz5cbiAgPC9kaXY+XG4pXG4iXX0=