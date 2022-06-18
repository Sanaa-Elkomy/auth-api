'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

customElements.define('compodoc-menu', /*#__PURE__*/function (_HTMLElement) {
  _inherits(_class, _HTMLElement);

  var _super = _createSuper(_class);

  function _class() {
    var _this;

    _classCallCheck(this, _class);

    _this = _super.call(this);
    _this.isNormalMode = _this.getAttribute('mode') === 'normal';
    return _this;
  }

  _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(this.isNormalMode);
    }
  }, {
    key: "render",
    value: function render(isNormalMode) {
      var tp = lithtml.html("\n        <nav>\n            <ul class=\"list\">\n                <li class=\"title\">\n                    <a href=\"index.html\" data-type=\"index-link\">auth-api documentation</a>\n                </li>\n\n                <li class=\"divider\"></li>\n                ".concat(isNormalMode ? "<div id=\"book-search-input\" role=\"search\"><input type=\"text\" placeholder=\"Type to search\"></div>" : '', "\n                <li class=\"chapter\">\n                    <a data-type=\"chapter-link\" href=\"index.html\"><span class=\"icon ion-ios-home\"></span>Getting started</a>\n                    <ul class=\"links\">\n                        <li class=\"link\">\n                            <a href=\"overview.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-keypad\"></span>Overview\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"index.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>README\n                            </a>\n                        </li>\n                                <li class=\"link\">\n                                    <a href=\"dependencies.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-list\"></span>Dependencies\n                                    </a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"properties.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-apps\"></span>Properties\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class=\"chapter modules\">\n                        <a data-type=\"chapter-link\" href=\"modules.html\">\n                            <div class=\"menu-toggler linked\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"', ">\n                                <span class=\"icon ion-ios-archive\"></span>\n                                <span class=\"link-name\">Modules</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                        </a>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"', ">\n                            <li class=\"link\">\n                                <a href=\"modules/AppModule.html\" data-type=\"entity-link\" >AppModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#controllers-links-module-AppModule-eb131f7cd589f819e85b805316e461106e76dd8f15c9455a236731bfd3b26aa1d37d0e32e7ad3dd137cd8795236f1257b08927bbaf7112ea1807182a11d4eec1"' : 'data-target="#xs-controllers-links-module-AppModule-eb131f7cd589f819e85b805316e461106e76dd8f15c9455a236731bfd3b26aa1d37d0e32e7ad3dd137cd8795236f1257b08927bbaf7112ea1807182a11d4eec1"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-AppModule-eb131f7cd589f819e85b805316e461106e76dd8f15c9455a236731bfd3b26aa1d37d0e32e7ad3dd137cd8795236f1257b08927bbaf7112ea1807182a11d4eec1"' : 'id="xs-controllers-links-module-AppModule-eb131f7cd589f819e85b805316e461106e76dd8f15c9455a236731bfd3b26aa1d37d0e32e7ad3dd137cd8795236f1257b08927bbaf7112ea1807182a11d4eec1"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/AppController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AppController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-AppModule-eb131f7cd589f819e85b805316e461106e76dd8f15c9455a236731bfd3b26aa1d37d0e32e7ad3dd137cd8795236f1257b08927bbaf7112ea1807182a11d4eec1"' : 'data-target="#xs-injectables-links-module-AppModule-eb131f7cd589f819e85b805316e461106e76dd8f15c9455a236731bfd3b26aa1d37d0e32e7ad3dd137cd8795236f1257b08927bbaf7112ea1807182a11d4eec1"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-AppModule-eb131f7cd589f819e85b805316e461106e76dd8f15c9455a236731bfd3b26aa1d37d0e32e7ad3dd137cd8795236f1257b08927bbaf7112ea1807182a11d4eec1"' : 'id="xs-injectables-links-module-AppModule-eb131f7cd589f819e85b805316e461106e76dd8f15c9455a236731bfd3b26aa1d37d0e32e7ad3dd137cd8795236f1257b08927bbaf7112ea1807182a11d4eec1"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/AppService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AppService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AuthModule.html\" data-type=\"entity-link\" >AuthModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#controllers-links-module-AuthModule-cbeeeb484bc62dddffde06e96dd251511cc90ceb594684bfbd1c2758adb38f0674762dc9a6cfcbe192e0333ca1995551718bfea8f8693b39da74c4731d4825bc"' : 'data-target="#xs-controllers-links-module-AuthModule-cbeeeb484bc62dddffde06e96dd251511cc90ceb594684bfbd1c2758adb38f0674762dc9a6cfcbe192e0333ca1995551718bfea8f8693b39da74c4731d4825bc"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-AuthModule-cbeeeb484bc62dddffde06e96dd251511cc90ceb594684bfbd1c2758adb38f0674762dc9a6cfcbe192e0333ca1995551718bfea8f8693b39da74c4731d4825bc"' : 'id="xs-controllers-links-module-AuthModule-cbeeeb484bc62dddffde06e96dd251511cc90ceb594684bfbd1c2758adb38f0674762dc9a6cfcbe192e0333ca1995551718bfea8f8693b39da74c4731d4825bc"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/AuthController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AuthController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-AuthModule-cbeeeb484bc62dddffde06e96dd251511cc90ceb594684bfbd1c2758adb38f0674762dc9a6cfcbe192e0333ca1995551718bfea8f8693b39da74c4731d4825bc"' : 'data-target="#xs-injectables-links-module-AuthModule-cbeeeb484bc62dddffde06e96dd251511cc90ceb594684bfbd1c2758adb38f0674762dc9a6cfcbe192e0333ca1995551718bfea8f8693b39da74c4731d4825bc"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-AuthModule-cbeeeb484bc62dddffde06e96dd251511cc90ceb594684bfbd1c2758adb38f0674762dc9a6cfcbe192e0333ca1995551718bfea8f8693b39da74c4731d4825bc"' : 'id="xs-injectables-links-module-AuthModule-cbeeeb484bc62dddffde06e96dd251511cc90ceb594684bfbd1c2758adb38f0674762dc9a6cfcbe192e0333ca1995551718bfea8f8693b39da74c4731d4825bc"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/AuthService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AuthService</a>\n                                        </li>\n                                        <li class=\"link\">\n                                            <a href=\"injectables/JwtStrategy.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >JwtStrategy</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/CaslModule.html\" data-type=\"entity-link\" >CaslModule</a>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-CaslModule-56e8516879dc150f99c69d102db7feb64ecb0ecf625134b7f512b7e3861b358b7006bce90b3498f438336df83091680e78fd7cea4cc8eb8dd89cbd575c467aa8"' : 'data-target="#xs-injectables-links-module-CaslModule-56e8516879dc150f99c69d102db7feb64ecb0ecf625134b7f512b7e3861b358b7006bce90b3498f438336df83091680e78fd7cea4cc8eb8dd89cbd575c467aa8"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-CaslModule-56e8516879dc150f99c69d102db7feb64ecb0ecf625134b7f512b7e3861b358b7006bce90b3498f438336df83091680e78fd7cea4cc8eb8dd89cbd575c467aa8"' : 'id="xs-injectables-links-module-CaslModule-56e8516879dc150f99c69d102db7feb64ecb0ecf625134b7f512b7e3861b358b7006bce90b3498f438336df83091680e78fd7cea4cc8eb8dd89cbd575c467aa8"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/CaslAbilityFactory.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >CaslAbilityFactory</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/SessionModule.html\" data-type=\"entity-link\" >SessionModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#controllers-links-module-SessionModule-7987a945a805f4c6f13a1c547183d865e8ff7f6391a5e05a5f3cc033e1fb6c7f100536033e411e317f3b9ef48c4a6bbb899ecc537eb78dc8a0d7c3d6572a19d7"' : 'data-target="#xs-controllers-links-module-SessionModule-7987a945a805f4c6f13a1c547183d865e8ff7f6391a5e05a5f3cc033e1fb6c7f100536033e411e317f3b9ef48c4a6bbb899ecc537eb78dc8a0d7c3d6572a19d7"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-SessionModule-7987a945a805f4c6f13a1c547183d865e8ff7f6391a5e05a5f3cc033e1fb6c7f100536033e411e317f3b9ef48c4a6bbb899ecc537eb78dc8a0d7c3d6572a19d7"' : 'id="xs-controllers-links-module-SessionModule-7987a945a805f4c6f13a1c547183d865e8ff7f6391a5e05a5f3cc033e1fb6c7f100536033e411e317f3b9ef48c4a6bbb899ecc537eb78dc8a0d7c3d6572a19d7"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/SessionController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >SessionController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-SessionModule-7987a945a805f4c6f13a1c547183d865e8ff7f6391a5e05a5f3cc033e1fb6c7f100536033e411e317f3b9ef48c4a6bbb899ecc537eb78dc8a0d7c3d6572a19d7"' : 'data-target="#xs-injectables-links-module-SessionModule-7987a945a805f4c6f13a1c547183d865e8ff7f6391a5e05a5f3cc033e1fb6c7f100536033e411e317f3b9ef48c4a6bbb899ecc537eb78dc8a0d7c3d6572a19d7"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-SessionModule-7987a945a805f4c6f13a1c547183d865e8ff7f6391a5e05a5f3cc033e1fb6c7f100536033e411e317f3b9ef48c4a6bbb899ecc537eb78dc8a0d7c3d6572a19d7"' : 'id="xs-injectables-links-module-SessionModule-7987a945a805f4c6f13a1c547183d865e8ff7f6391a5e05a5f3cc033e1fb6c7f100536033e411e317f3b9ef48c4a6bbb899ecc537eb78dc8a0d7c3d6572a19d7"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/SessionService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >SessionService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/UsersModule.html\" data-type=\"entity-link\" >UsersModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#controllers-links-module-UsersModule-9c7597683c29a299f52d09b0fcfbcc1a55b31a837ed013733ed53d6df44772f8e9b66227ef70a684481796deb27777de89bb26e240aa1ca15e6e47339aed547e"' : 'data-target="#xs-controllers-links-module-UsersModule-9c7597683c29a299f52d09b0fcfbcc1a55b31a837ed013733ed53d6df44772f8e9b66227ef70a684481796deb27777de89bb26e240aa1ca15e6e47339aed547e"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-UsersModule-9c7597683c29a299f52d09b0fcfbcc1a55b31a837ed013733ed53d6df44772f8e9b66227ef70a684481796deb27777de89bb26e240aa1ca15e6e47339aed547e"' : 'id="xs-controllers-links-module-UsersModule-9c7597683c29a299f52d09b0fcfbcc1a55b31a837ed013733ed53d6df44772f8e9b66227ef70a684481796deb27777de89bb26e240aa1ca15e6e47339aed547e"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/UsersController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >UsersController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-UsersModule-9c7597683c29a299f52d09b0fcfbcc1a55b31a837ed013733ed53d6df44772f8e9b66227ef70a684481796deb27777de89bb26e240aa1ca15e6e47339aed547e"' : 'data-target="#xs-injectables-links-module-UsersModule-9c7597683c29a299f52d09b0fcfbcc1a55b31a837ed013733ed53d6df44772f8e9b66227ef70a684481796deb27777de89bb26e240aa1ca15e6e47339aed547e"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-UsersModule-9c7597683c29a299f52d09b0fcfbcc1a55b31a837ed013733ed53d6df44772f8e9b66227ef70a684481796deb27777de89bb26e240aa1ca15e6e47339aed547e"' : 'id="xs-injectables-links-module-UsersModule-9c7597683c29a299f52d09b0fcfbcc1a55b31a837ed013733ed53d6df44772f8e9b66227ef70a684481796deb27777de89bb26e240aa1ca15e6e47339aed547e"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/UsersService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >UsersService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                </ul>\n                </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"', ">\n                            <span class=\"icon ion-ios-paper\"></span>\n                            <span>Classes</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"', ">\n                            <li class=\"link\">\n                                <a href=\"classes/Authorization.html\" data-type=\"entity-link\" >Authorization</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/BaseError.html\" data-type=\"entity-link\" >BaseError</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/HttpExceptionFilter.html\" data-type=\"entity-link\" >HttpExceptionFilter</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/LoginDto.html\" data-type=\"entity-link\" >LoginDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/MethodNotImplementedError.html\" data-type=\"entity-link\" >MethodNotImplementedError</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/NotFoundError.html\" data-type=\"entity-link\" >NotFoundError</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/Session.html\" data-type=\"entity-link\" >Session</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/UnauthenticatedError.html\" data-type=\"entity-link\" >UnauthenticatedError</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/UnauthorizedError.html\" data-type=\"entity-link\" >UnauthorizedError</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/UnexpectedError.html\" data-type=\"entity-link\" >UnexpectedError</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/User.html\" data-type=\"entity-link\" >User</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/UsersDto.html\" data-type=\"entity-link\" >UsersDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/ValidationError.html\" data-type=\"entity-link\" >ValidationError</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"', ">\n                                <span class=\"icon ion-md-arrow-round-down\"></span>\n                                <span>Injectables</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"injectables/JwtAuthGuard.html\" data-type=\"entity-link\" >JwtAuthGuard</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"', ">\n                            <span class=\"icon ion-md-information-circle-outline\"></span>\n                            <span>Interfaces</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"', ">\n                            <li class=\"link\">\n                                <a href=\"interfaces/IConfig.html\" data-type=\"entity-link\" >IConfig</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/JWTPayload.html\" data-type=\"entity-link\" >JWTPayload</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/SessionPayload.html\" data-type=\"entity-link\" >SessionPayload</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"', ">\n                            <span class=\"icon ion-ios-cube\"></span>\n                            <span>Miscellaneous</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"', ">\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/enumerations.html\" data-type=\"entity-link\">Enums</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/functions.html\" data-type=\"entity-link\">Functions</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/typealiases.html\" data-type=\"entity-link\">Type aliases</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/variables.html\" data-type=\"entity-link\">Variables</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <a data-type=\"chapter-link\" href=\"coverage.html\"><span class=\"icon ion-ios-stats\"></span>Documentation coverage</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li class=\"copyright\">\n                        Documentation generated using <a href=\"https://compodoc.app/\" target=\"_blank\">\n                            <img data-src=\"images/compodoc-vectorise.png\" class=\"img-responsive\" data-type=\"compodoc-logo\">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        "));
      this.innerHTML = tp.strings;
    }
  }]);

  return _class;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));