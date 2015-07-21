'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _economistComponentTile = require('@economist/component-tile');

var _economistComponentTile2 = _interopRequireDefault(_economistComponentTile);

var StoryTiles = (function (_React$Component) {
  _inherits(StoryTiles, _React$Component);

  function StoryTiles() {
    _classCallCheck(this, StoryTiles);

    _React$Component.apply(this, arguments);
  }

  StoryTiles.prototype.render = function render() {
    return _react2['default'].createElement(
      'div',
      { className: 'mnv-widget mnv-ec-storytilesreveal landing' },
      _react2['default'].createElement(
        'div',
        { className: 'main-container' },
        _react2['default'].createElement(
          'div',
          { className: 'article-reveal-container' },
          _react2['default'].createElement(
            'div',
            { className: 'article-list' },
            this.props.data.map(function (tile) {
              return _react2['default'].createElement(_economistComponentTile2['default'], { key: tile.id, data: tile });
            })
          )
        )
      )
    );
  };

  _createClass(StoryTiles, null, [{
    key: 'propTypes',
    get: function get() {
      return {
        data: _react2['default'].PropTypes.object,
        tile: _react2['default'].PropTypes.object,
        id: _react2['default'].PropTypes.string
      };
    }
  }]);

  return StoryTiles;
})(_react2['default'].Component);

exports['default'] = StoryTiles;
module.exports = exports['default'];

