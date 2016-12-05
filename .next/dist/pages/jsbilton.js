'use strict';

var _react = require('/Users/cantops/Desktop/JRS/code/jrs-code-expo-2016/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _head = require('/Users/cantops/Desktop/JRS/code/jrs-code-expo-2016/node_modules/next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var jsbilton = _react2.default.createClass({
  displayName: 'jsbilton',
  render: function render() {
    return _react2.default.createElement(
      'div',
      { className: 'pa4' },
      _react2.default.createElement(
        _head2.default,
        null,
        _react2.default.createElement(
          'title',
          null,
          'MishMash'
        ),
        _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width' }),
        _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://unpkg.com/tachyons@4.5.5/css/tachyons.min.css' })
      ),
      _react2.default.createElement(
        'body',
        { className: 'fw1 san francisco white-70 bg-black' },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'article',
            { 'class': 'mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10' },
            _react2.default.createElement(
              'div',
              { 'class': 'tc' },
              _react2.default.createElement('img', {
                className: 'br-100 fr-ns',
                src: '/static/JaredBilton.jpg' }),
              _react2.default.createElement(
                'h1',
                { 'class': 'fw1 san francisco mb2' },
                'Jared Bilton'
              ),
              _react2.default.createElement(
                'h2',
                { 'class': 'fw1 gray mt0' },
                'Full Stack JavaScript Developer'
              )
            )
          ),
          _react2.default.createElement('div', null),
          _react2.default.createElement(
            'h2',
            { className: 'fw1 san francisco' },
            'MishMash'
          ),
          _react2.default.createElement(
            'h3',
            { className: 'fw1 san francisco' },
            'Final Project for JRS Coding School'
          ),
          _react2.default.createElement(
            'p',
            null,
            'A restaurant locator application to be used from the convenience of your handheld mobile device.'
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h4',
            { className: 'fw1 san francisco' },
            'User Stories'
          ),
          _react2.default.createElement(
            'ul',
            { className: 'fw1 san francisco list' },
            _react2.default.createElement(
              'li',
              null,
              'Create a network of individuals to join you for lunch'
            ),
            _react2.default.createElement(
              'li',
              null,
              'Give each network a name'
            ),
            _react2.default.createElement(
              'li',
              null,
              'Manage your network or networks to include appropriate people'
            ),
            _react2.default.createElement(
              'li',
              null,
              'Choose a default network'
            ),
            _react2.default.createElement(
              'li',
              null,
              'We can leverage OpenTable for restaurant data'
            ),
            _react2.default.createElement(
              'li',
              null,
              'The user can select favorite restaurants by shaking device or simply pressing search'
            ),
            _react2.default.createElement(
              'li',
              null,
              'Check-in to restaurants'
            ),
            _react2.default.createElement(
              'li',
              null,
              'Rate the restaurant'
            ),
            _react2.default.createElement(
              'li',
              null,
              'While inside restaurant card, can add to list of favs'
            ),
            _react2.default.createElement(
              'li',
              null,
              'While inside restaurant card, can choose to block restaurant'
            ),
            _react2.default.createElement(
              'li',
              null,
              'Application can text friends in a session which restaurant has been chosen'
            ),
            _react2.default.createElement(
              'li',
              null,
              'Up-vote and down-vote restaurants randomly selected by MishMash'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'centered-container' },
          _react2.default.createElement(
            'h3',
            { className: 'fw1 san francisco' },
            'Technologies'
          ),
          _react2.default.createElement(
            'ul',
            { className: 'fw1 san francisco list' },
            _react2.default.createElement(
              'li',
              null,
              'JavaScript'
            ),
            _react2.default.createElement(
              'li',
              null,
              'React'
            ),
            _react2.default.createElement(
              'li',
              null,
              'CouchDB'
            ),
            _react2.default.createElement(
              'li',
              null,
              'NodeJS'
            ),
            _react2.default.createElement(
              'li',
              null,
              'ExpressJS'
            ),
            _react2.default.createElement(
              'li',
              null,
              'HTML'
            ),
            _react2.default.createElement(
              'li',
              null,
              'CSS'
            ),
            _react2.default.createElement(
              'li',
              null,
              'Tachyons'
            ),
            _react2.default.createElement(
              'li',
              null,
              'Bootstrap'
            )
          )
        ),
        _react2.default.createElement(
          'nav',
          { className: 'db dt-l w-100 border-box pa3 ph5-l' },
          _react2.default.createElement(
            'a',
            { className: 'db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l', href: '#', title: 'Home' },
            _react2.default.createElement('img', { src: 'https://www.cleardb.com/images/jackhq-logo.png', className: 'dib w2 h2 br-100', alt: 'Site Name' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'db dtc-l v-mid w-100 w-75-l tc tr-l' },
            _react2.default.createElement(
              'a',
              { className: 'link dim dark-gray f6 f5-l dib mr3 mr4-l', href: '#', title: 'Home' },
              'Home'
            ),
            _react2.default.createElement(
              'a',
              { className: 'link dim dark-gray f6 f5-l dib', href: '#', title: 'Contact' },
              'Contact'
            )
          )
        )
      )
    );
  }
});

module.exports = jsbilton;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2pzYmlsdG9uLmpzIl0sIm5hbWVzIjpbImpzYmlsdG9uIiwiY3JlYXRlQ2xhc3MiLCJyZW5kZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFdBQVcsZ0JBQU1DLFdBQU4sQ0FBa0I7QUFBQTtBQUNqQ0MsUUFEaUMsb0JBQ3hCO0FBQ1AsV0FDRTtBQUFBO0FBQUEsUUFBSyxXQUFVLEtBQWY7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFFRSxnREFBTSxNQUFLLFVBQVgsRUFBc0IsU0FBUSx1Q0FBOUIsR0FGRjtBQUdFLGdEQUFNLEtBQUksWUFBVixFQUF1QixNQUFLLHVEQUE1QjtBQUhGLE9BREY7QUFNRTtBQUFBO0FBQUEsVUFBTSxXQUFVLHFDQUFoQjtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxjQUFTLFNBQU0sdURBQWY7QUFDRTtBQUFBO0FBQUEsZ0JBQUssU0FBTSxJQUFYO0FBQ0U7QUFDQSwyQkFBVSxjQURWO0FBRUEscUJBQUkseUJBRkosR0FERjtBQUlFO0FBQUE7QUFBQSxrQkFBSSxTQUFNLHVCQUFWO0FBQUE7QUFBQSxlQUpGO0FBS0U7QUFBQTtBQUFBLGtCQUFJLFNBQU0sY0FBVjtBQUFBO0FBQUE7QUFMRjtBQURGLFdBREY7QUFVRSxvREFWRjtBQWFFO0FBQUE7QUFBQSxjQUFJLFdBQVUsbUJBQWQ7QUFBQTtBQUFBLFdBYkY7QUFjRTtBQUFBO0FBQUEsY0FBSSxXQUFVLG1CQUFkO0FBQUE7QUFBQSxXQWRGO0FBZUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWZGLFNBREY7QUFrQkU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGNBQUksV0FBVSxtQkFBZDtBQUFBO0FBQUEsV0FERjtBQUVFO0FBQUE7QUFBQSxjQUFJLFdBQVUsd0JBQWQ7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEY7QUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkY7QUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEY7QUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkY7QUFPRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEY7QUFRRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUkY7QUFTRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVEY7QUFVRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVkY7QUFXRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWEY7QUFZRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWkY7QUFGRixTQWxCRjtBQW1DRTtBQUFBO0FBQUEsWUFBSyxXQUFVLG9CQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUksV0FBVSxtQkFBZDtBQUFBO0FBQUEsV0FERjtBQUVJO0FBQUE7QUFBQSxjQUFJLFdBQVUsd0JBQWQ7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEY7QUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkY7QUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEY7QUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkY7QUFPRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEY7QUFRRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUkY7QUFTRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEY7QUFGSixTQW5DRjtBQWlERTtBQUFBO0FBQUEsWUFBSyxXQUFVLG9DQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUcsV0FBVSxpRUFBYixFQUErRSxNQUFLLEdBQXBGLEVBQXdGLE9BQU0sTUFBOUY7QUFDRSxtREFBSyxLQUFJLGdEQUFULEVBQTBELFdBQVUsa0JBQXBFLEVBQXVGLEtBQUksV0FBM0Y7QUFERixXQURGO0FBSUU7QUFBQTtBQUFBLGNBQUssV0FBVSxxQ0FBZjtBQUNFO0FBQUE7QUFBQSxnQkFBRyxXQUFVLDBDQUFiLEVBQXdELE1BQUssR0FBN0QsRUFBaUUsT0FBTSxNQUF2RTtBQUFBO0FBQUEsYUFERjtBQUVFO0FBQUE7QUFBQSxnQkFBRyxXQUFVLGdDQUFiLEVBQThDLE1BQUssR0FBbkQsRUFBdUQsT0FBTSxTQUE3RDtBQUFBO0FBQUE7QUFGRjtBQUpGO0FBakRGO0FBTkYsS0FERjtBQW9FRDtBQXRFZ0MsQ0FBbEIsQ0FBakI7O0FBeUVBQyxPQUFPQyxPQUFQLEdBQWlCSixRQUFqQiIsImZpbGUiOiJqc2JpbHRvbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvY2FudG9wcy9EZXNrdG9wL0pSUy9jb2RlL2pycy1jb2RlLWV4cG8tMjAxNiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuY29uc3QganNiaWx0b24gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYTRcIj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPk1pc2hNYXNoPC90aXRsZT5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3VucGtnLmNvbS90YWNoeW9uc0A0LjUuNS9jc3MvdGFjaHlvbnMubWluLmNzc1wiIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPGJvZHkgY2xhc3NOYW1lPVwiZncxIHNhbiBmcmFuY2lzY28gd2hpdGUtNzAgYmctYmxhY2tcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGFydGljbGUgY2xhc3M9XCJtdzUgY2VudGVyIGJnLXdoaXRlIGJyMyBwYTMgcGE0LW5zIG12MyBiYSBiLS1ibGFjay0xMFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGNcIj5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnItMTAwIGZyLW5zXCJcbiAgICAgICAgICAgICAgICBzcmM9XCIvc3RhdGljL0phcmVkQmlsdG9uLmpwZ1wiIC8+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwiZncxIHNhbiBmcmFuY2lzY28gbWIyXCI+SmFyZWQgQmlsdG9uPC9oMT5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJmdzEgZ3JheSBtdDBcIj5GdWxsIFN0YWNrIEphdmFTY3JpcHQgRGV2ZWxvcGVyPC9oMj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgICAgICA8ZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmdzEgc2FuIGZyYW5jaXNjb1wiPk1pc2hNYXNoPC9oMj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmdzEgc2FuIGZyYW5jaXNjb1wiPkZpbmFsIFByb2plY3QgZm9yIEpSUyBDb2RpbmcgU2Nob29sPC9oMz5cbiAgICAgICAgICAgIDxwPkEgcmVzdGF1cmFudCBsb2NhdG9yIGFwcGxpY2F0aW9uIHRvIGJlIHVzZWQgZnJvbSB0aGUgY29udmVuaWVuY2Ugb2YgeW91ciBoYW5kaGVsZCBtb2JpbGUgZGV2aWNlLjwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZ3MSBzYW4gZnJhbmNpc2NvXCI+VXNlciBTdG9yaWVzPC9oND5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmdzEgc2FuIGZyYW5jaXNjbyBsaXN0XCI+XG4gICAgICAgICAgICAgIDxsaT5DcmVhdGUgYSBuZXR3b3JrIG9mIGluZGl2aWR1YWxzIHRvIGpvaW4geW91IGZvciBsdW5jaDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5HaXZlIGVhY2ggbmV0d29yayBhIG5hbWU8L2xpPlxuICAgICAgICAgICAgICA8bGk+TWFuYWdlIHlvdXIgbmV0d29yayBvciBuZXR3b3JrcyB0byBpbmNsdWRlIGFwcHJvcHJpYXRlIHBlb3BsZTwvbGk+XG4gICAgICAgICAgICAgIDxsaT5DaG9vc2UgYSBkZWZhdWx0IG5ldHdvcms8L2xpPlxuICAgICAgICAgICAgICA8bGk+V2UgY2FuIGxldmVyYWdlIE9wZW5UYWJsZSBmb3IgcmVzdGF1cmFudCBkYXRhPC9saT5cbiAgICAgICAgICAgICAgPGxpPlRoZSB1c2VyIGNhbiBzZWxlY3QgZmF2b3JpdGUgcmVzdGF1cmFudHMgYnkgc2hha2luZyBkZXZpY2Ugb3Igc2ltcGx5IHByZXNzaW5nIHNlYXJjaDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5DaGVjay1pbiB0byByZXN0YXVyYW50czwvbGk+XG4gICAgICAgICAgICAgIDxsaT5SYXRlIHRoZSByZXN0YXVyYW50PC9saT5cbiAgICAgICAgICAgICAgPGxpPldoaWxlIGluc2lkZSByZXN0YXVyYW50IGNhcmQsIGNhbiBhZGQgdG8gbGlzdCBvZiBmYXZzPC9saT5cbiAgICAgICAgICAgICAgPGxpPldoaWxlIGluc2lkZSByZXN0YXVyYW50IGNhcmQsIGNhbiBjaG9vc2UgdG8gYmxvY2sgcmVzdGF1cmFudDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5BcHBsaWNhdGlvbiBjYW4gdGV4dCBmcmllbmRzIGluIGEgc2Vzc2lvbiB3aGljaCByZXN0YXVyYW50IGhhcyBiZWVuIGNob3NlbjwvbGk+XG4gICAgICAgICAgICAgIDxsaT5VcC12b3RlIGFuZCBkb3duLXZvdGUgcmVzdGF1cmFudHMgcmFuZG9tbHkgc2VsZWN0ZWQgYnkgTWlzaE1hc2g8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlcmVkLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZ3MSBzYW4gZnJhbmNpc2NvXCI+VGVjaG5vbG9naWVzPC9oMz5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZ3MSBzYW4gZnJhbmNpc2NvIGxpc3RcIj5cbiAgICAgICAgICAgICAgICA8bGk+SmF2YVNjcmlwdDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlJlYWN0PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+Q291Y2hEQjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPk5vZGVKUzwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPkV4cHJlc3NKUzwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPkhUTUw8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5DU1M8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5UYWNoeW9uczwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPkJvb3RzdHJhcDwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJkYiBkdC1sIHctMTAwIGJvcmRlci1ib3ggcGEzIHBoNS1sXCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkYiBkdGMtbCB2LW1pZCBtaWQtZ3JheSBsaW5rIGRpbSB3LTEwMCB3LTI1LWwgdGMgdGwtbCBtYjIgbWIwLWxcIiBocmVmPVwiI1wiIHRpdGxlPVwiSG9tZVwiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vd3d3LmNsZWFyZGIuY29tL2ltYWdlcy9qYWNraHEtbG9nby5wbmdcIiBjbGFzc05hbWU9XCJkaWIgdzIgaDIgYnItMTAwXCIgYWx0PVwiU2l0ZSBOYW1lXCIgLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGIgZHRjLWwgdi1taWQgdy0xMDAgdy03NS1sIHRjIHRyLWxcIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGluayBkaW0gZGFyay1ncmF5IGY2IGY1LWwgZGliIG1yMyBtcjQtbFwiIGhyZWY9XCIjXCIgdGl0bGU9XCJIb21lXCI+SG9tZTwvYT5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGluayBkaW0gZGFyay1ncmF5IGY2IGY1LWwgZGliXCIgaHJlZj1cIiNcIiB0aXRsZT1cIkNvbnRhY3RcIj5Db250YWN0PC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9uYXY+XG4gICAgICAgIDwvYm9keT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSlcblxubW9kdWxlLmV4cG9ydHMgPSBqc2JpbHRvblxuIl19