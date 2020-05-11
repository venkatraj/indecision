"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var IndecisionApp = /*#__PURE__*/function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  var _super = _createSuper(IndecisionApp);

  function IndecisionApp(props) {
    var _this;

    _classCallCheck(this, IndecisionApp);

    _this = _super.call(this, props);
    _this.handleAddOption = _this.handleAddOption.bind(_assertThisInitialized(_this));
    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_assertThisInitialized(_this));
    _this.handleDecisionMaking = _this.handleDecisionMaking.bind(_assertThisInitialized(_this));
    _this.state = {
      options: props.options
    };
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: "handleDeleteOptions",
    value: function handleDeleteOptions() {
      this.setState({
        options: []
      });
    }
  }, {
    key: "handleAddOption",
    value: function handleAddOption(optionText) {
      if (!optionText) {
        return 'Enter a valid option';
      } else if (this.state.options.includes(optionText)) {
        return 'Option already exists';
      } else {
        this.setState(function (prevState) {
          return {
            options: prevState.options.concat(optionText)
          };
        });
        return null;
      }
    }
  }, {
    key: "handleDecisionMaking",
    value: function handleDecisionMaking() {
      var randomOption = Math.floor(Math.random() * this.state.options.length);
      alert(this.state.options[randomOption]);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, {
        subtitle: "Put your life in the handles of a computer!"
      }), /*#__PURE__*/React.createElement(Action, {
        hasOptions: this.state.options.length > 0,
        handleDecisionMaking: this.handleDecisionMaking
      }), /*#__PURE__*/React.createElement(Options, {
        options: this.state.options,
        handleDeleteOptions: this.handleDeleteOptions
      }), /*#__PURE__*/React.createElement(AddOption, {
        handleAddOption: this.handleAddOption
      }));
    }
  }]);

  return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
  options: []
};

var Header = function Header(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, props.title), props.subtitle && /*#__PURE__*/React.createElement("h2", null, props.subtitle));
};

Header.defaultProps = {
  title: 'Indecision App'
};

var Action = function Action(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    disabled: !props.hasOptions,
    onClick: props.handleDecisionMaking
  }, "What Should I Do?"));
};

var Options = function Options(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: props.handleDeleteOptions
  }, "Remove All"), /*#__PURE__*/React.createElement("ol", null, props.options.map(function (option, index) {
    return /*#__PURE__*/React.createElement(Option, {
      key: index,
      optionText: option
    });
  })));
};

var Option = function Option(props) {
  return /*#__PURE__*/React.createElement("li", null, props.optionText);
};

var AddOption = /*#__PURE__*/function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  var _super2 = _createSuper(AddOption);

  function AddOption(props) {
    var _this2;

    _classCallCheck(this, AddOption);

    _this2 = _super2.call(this, props);
    _this2.handleFormSubmit = _this2.handleFormSubmit.bind(_assertThisInitialized(_this2));
    _this2.state = {
      error: null
    };
    return _this2;
  }

  _createClass(AddOption, [{
    key: "handleFormSubmit",
    value: function handleFormSubmit(e) {
      e.preventDefault();
      var optionText = e.target.elements.option.value.trim();
      var error = this.props.handleAddOption(optionText);

      if (!error) {
        e.target.elements.option.value = '';
      }

      this.setState({
        error: error
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, this.state.error && /*#__PURE__*/React.createElement("p", null, this.state.error), /*#__PURE__*/React.createElement("form", {
        onSubmit: this.handleFormSubmit
      }, /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "option"
      }), /*#__PURE__*/React.createElement("input", {
        type: "submit",
        value: "Add Option"
      })));
    }
  }]);

  return AddOption;
}(React.Component);

ReactDOM.render( /*#__PURE__*/React.createElement(IndecisionApp, null), document.getElementById('app'));
