"use strict";

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e61) { throw _e61; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e62) { didErr = true; err = _e62; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var L4W_mapper = function (e) {
  var t = {};

  function n(i) {
    if (t[i]) return t[i].exports;
    var o = t[i] = {
      i: i,
      l: !1,
      exports: {}
    };
    return e[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
  }

  return n.m = e, n.c = t, n.d = function (e, t, i) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: i
    });
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var i = Object.create(null);
    if (n.r(i), Object.defineProperty(i, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var o in e) {
      n.d(i, o, function (t) {
        return e[t];
      }.bind(null, o));
    }
    return i;
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 49);
}([function (e, t, n) {
  "use strict";

  var i;
  n.d(t, "a", function () {
    return i;
  }), function (e) {
    function t(e) {
      return null == e || void 0 === e || ("string" == typeof e ? "" === e : "object" == _typeof(e) && "size" in e ? 0 === e.size : e.constructor === Array || e.constructor === String ? 0 === e.length : e.constructor === Object && 0 === Object.keys(e).length);
    }

    e.isEmpty = t, e.unitTestIsEmpty = function () {
      var e = new Map();
      console.assert(t(e), "empty ES6 map"), e.set("a", "a"), console.assert(!t(e), "not empty ES6 map"), e["delete"]("a"), console.assert(t(e), "empty ES6 map (deleted key)"), e = [], console.assert(t(e), "empty array"), e[0] = 1, console.assert(!t(e), "not empty array"), e = new Array(), console.assert(t(e), "empty Array"), e = e.push("1"), console.assert(!t(e), "not empty Array"), e = "", console.assert(t(e), "empty string"), e = "a", console.assert(!t(e), "not empty string"), e = new Object(), console.assert(t(e), "empty Object"), e.a = 1, console.assert(!t(e), "not empty Object"), delete e.a, console.assert(t(e), "empty Object (deleted property)"), e = {}, console.assert(t(e), "empty {}"), e.a = 1, console.assert(!t(e), "not empty {}"), delete e.a, console.assert(t(e), "empty {} (deleted property)"), console.assert(!t(!0), "not empty boolean (true)"), console.assert(!t(!1), "not empty boolean (false)"), console.assert(!t(0), "not empty number"), console.assert(!t(0), "not empty float");
    }, e.mergeMaps = function (e, t) {
      var n = new Map();

      function i(e, t, i) {
        n.set(t, e);
      }

      return t.forEach(i), e.forEach(i), n;
    }, e.isNumeric = function (e) {
      return !isNaN(parseFloat(e)) && isFinite(e);
    }, e.convertStringToEnum = function (e, t) {
      return e[Object.keys(e).filter(function (n) {
        return e[n] === t;
      })[0]];
    };
    var n = "abcdefghijklmnopqrstuvwxyz0123456789";
    e.getRandomString = function (e) {
      return void 0 === e && (e = 8), _toConsumableArray(Array(e)).map(function (e) {
        return n[~~(Math.random() * n.length)];
      }).join("");
    }, e.now = function () {
      return new Date().getTime();
    };
  }(i || (i = {}));
}, function (e, t, n) {
  "use strict";

  var i;
  n.d(t, "a", function () {
    return i;
  }), function (e) {
    e.DOUBLE_PI = 2 * Math.PI;

    var t = function t() {
      _classCallCheck(this, t);
    };

    t.YELLOW = "yellow", t.RED = "red", t.WHITE = "white", t.GREY = "grey", t.BLACK = "black", t.AQUA = "aqua", t.DARKBLUE = "darkblue", t.GREEN = "green", t.LIME = "lime", e.Color = t;

    var n = function n() {
      _classCallCheck(this, n);
    };

    n.GET = "GET", n.POST = "POST", e.RequestType = n;

    var i = function i() {
      _classCallCheck(this, i);
    };

    var o, r, a;
    i.JSON = "application/json", e.MimeType = i, e.MEDIUM_MSPEED = .128, e.VERY_LOW_MSPEED = e.MEDIUM_MSPEED * (1 - .9), e.LOW_MSPEED = .5 * e.MEDIUM_MSPEED, e.MEDIUM_LOW_MSPEED = .8 * e.MEDIUM_MSPEED, e.MEDIUM_HIGH_MSPEED = 1.2 * e.MEDIUM_MSPEED, e.HIGH_MSPEED = 1.5 * e.MEDIUM_MSPEED, e.VERY_HIGH_MSPEED = 1.9 * e.MEDIUM_MSPEED, e.MEDIUM_FREQUENCY = .006, e.VERY_LOW_FREQUENCY = e.MEDIUM_FREQUENCY * (1 - .9), e.LOW_FREQUENCY = .5 * e.MEDIUM_FREQUENCY, e.MEDIUM_LOW_FREQUENCY = .8 * e.MEDIUM_FREQUENCY, e.MEDIUM_HIGH_FREQUENCY = 1.2 * e.MEDIUM_FREQUENCY, e.HIGH_FREQUENCY = 1.5 * e.MEDIUM_FREQUENCY, e.VERY_HIGH_FREQUENCY = 1.9 * e.MEDIUM_FREQUENCY, function (e) {
      e[e.LOW = 0] = "LOW", e[e.MID = 1] = "MID", e[e.TOP = 2] = "TOP", e[e.EVENTS = 3] = "EVENTS";
    }(o = e.MapLayer || (e.MapLayer = {})), function (e) {
      e[e.APPLY = 0] = "APPLY", e[e.ERASE = 1] = "ERASE", e[e.EVENTS = 2] = "EVENTS";
    }(r = e.EditMode || (e.EditMode = {})), function (e) {
      e[e.BLOCKS = 0] = "BLOCKS", e[e.ONTOP = 1] = "ONTOP";
    }(a = e.TileEditMode || (e.TileEditMode = {}));
  }(i || (i = {}));
}, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return i;
  });
  var i,
      o = n(4),
      r = n(0);
  !function (e) {
    function t(e, t) {
      return e.i + e.j * t;
    }

    function n(e, t) {
      var n = {
        i: e.i,
        j: e.j
      };

      switch (t) {
        case 0:
          n.j -= 1;
          break;

        case 2:
          n.j += 1;
          break;

        case 3:
          n.i -= 1;
          break;

        case 1:
          n.i += 1;
          break;

        case 4:
          break;

        default:
          console.error("Unexpected case: " + t);
      }

      return n;
    }

    function i(e, t) {
      return (e & t) === t && t !== o.a.NONE;
    }

    function a(e, t) {
      var n = o.a.NONE;

      switch (t) {
        case 0:
          n = o.a.UP;
          break;

        case 2:
          n = o.a.DOWN;
          break;

        case 3:
          n = o.a.LEFT;
          break;

        case 1:
          n = o.a.RIGHT;
      }

      return i(e, n);
    }

    function s(e, t, n, i) {
      var r = o.a.NONE;
      return n && void 0 !== e.blocks && t < e.blocks.length && (r |= e.blocks[t]), i && void 0 !== e.dynamicBlocks && t < e.dynamicBlocks.length && (r |= e.dynamicBlocks[t]), r;
    }

    function l(e) {
      switch (e) {
        case 0:
          return 2;

        case 2:
          return 0;

        case 3:
          return 1;

        case 1:
          return 3;

        default:
          return 4;
      }
    }

    function c(e) {
      switch (e) {
        case 0:
          return "˄ up";

        case 2:
          return "˅ down";

        case 3:
          return "˂ left";

        case 1:
          return "˃ right";

        default:
          return "  none";
      }
    }

    e.mergeRectangles = function (e, t) {
      if (void 0 === e) return t;
      if (void 0 === t) return e;
      var n, i, o, r;
      return n = e.x < t.x ? e.x : t.x, i = e.y < t.y ? e.y : t.y, r = e.x + e.w > t.x + t.w ? e.x + e.w - n : t.x + t.w - n, o = e.y + e.h > t.y + t.h ? e.y + e.h - i : t.y + t.h - i, {
        x: n,
        y: i,
        w: r,
        h: o
      };
    }, e.resetSelect = function (e) {
      for (var _t2 = e.length - 1; _t2 >= 0; _t2--) {
        e.remove(_t2);
      }
    }, e.gidToCell = function (e, t) {
      return {
        i: e % t,
        j: Math.floor(e / t)
      };
    }, e.cellToGid = t, e.getDirectionTarget = n, e.isBlockDirectionBlocked = i, e.isDirectionEnumBlocked = a, e.isMovementBlocked = function (i, o, r, s) {
      var c = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !1;
      var d;
      d = t({
        i: o,
        j: r
      }, i.width);
      var u,
          f = e.getMapStaticBlock(i, d),
          p = t(n({
        i: o,
        j: r
      }, s), i.width);
      return u = c ? e.getMapStaticBlock(i, p) : e.getMapBlocks(i, p), a(f, s) || a(u, l(s));
    }, e.getBlock = function (e, t, n, i) {
      var r = 0;
      return r |= e ? o.a.UP : 0, r |= t ? o.a.DOWN : 0, r |= n ? o.a.LEFT : 0, r |= i ? o.a.RIGHT : 0, r;
    }, e.getMapBlocks = function (e, t) {
      return s(e, t, !0, !0);
    }, e.getMapStaticBlock = function (e, t) {
      return s(e, t, !0, !1);
    }, e.getMapDynamicBlock = function (e, t) {
      return s(e, t, !1, !0);
    }, e.isDirectionsOpposed = function (e, t) {
      return l(e) === t;
    }, e.getOpposedDirections = l, e.getDirection = function (e, t) {
      var n,
          i = e.i - t.i,
          o = e.j - t.j;
      return n = Math.abs(i) > Math.abs(o) ? i > 0 ? 1 : 3 : o > 0 ? 2 : o < 0 ? 0 : 4, n;
    }, e.moveToDirection = function (e, t) {
      var n = {
        i: e.i,
        j: e.j
      };

      switch (t) {
        case 0:
          n.j -= 1;
          break;

        case 2:
          n.j += 1;
          break;

        case 3:
          n.i -= 1;
          break;

        case 1:
          n.i += 1;
      }

      return n;
    }, e.getCellDistance = function (e, t) {
      return Math.abs(e.i - t.i) + Math.abs(e.j - t.j);
    }, e.getPointDistance = function (e, t) {
      return Math.abs(e.x - t.x) + Math.abs(e.y - t.y);
    }, e.getRandomBoolean = function () {
      return Math.random() >= .5;
    }, e.getRandomInteger = function (e, t) {
      return Math.floor(Math.random() * (t - e + 1)) + e;
    }, e.normalizeZIndex = function (e) {
      return !r.a.isEmpty(e) && !Number.isNaN(e) && e >= 0 && e <= 4 ? e : 0;
    }, e.getDirectionName = c, e.getBlockName = function (e) {
      var t = "free";
      return i(e, o.a.UP) && (t = c(0)), i(e, o.a.DOWN) && (t += c(2)), i(e, o.a.LEFT) && (t += c(3)), i(e, o.a.RIGHT) && (t += c(1)), t;
    }, e.getSelectionAreaName = function (e) {
      switch (e) {
        case 0:
          return "⬒ up";

        case 1:
          return "⬓ down";

        case 2:
          return "◧ left";

        case 3:
          return "◨ right";

        case 4:
          return "▣ center";

        default:
          return "  none";
      }
    };
  }(i || (i = {}));
}, function (e, t, n) {
  "use strict";

  var i, o, r;
  n.d(t, "a", function () {
    return r;
  }), function (e) {
    e[e.OK = 200] = "OK", e[e.NO_CONTENT = 204] = "NO_CONTENT", e[e.MOVED_PERMANENTLY = 301] = "MOVED_PERMANENTLY", e[e.NOT_MODIFIED = 304] = "NOT_MODIFIED", e[e.BAD_REQUEST = 400] = "BAD_REQUEST", e[e.FORBIDDEN = 403] = "FORBIDDEN", e[e.NOT_FOUND = 404] = "NOT_FOUND", e[e.REQUEST_TOO_LONG = 413] = "REQUEST_TOO_LONG", e[e.IM_A_TEAPOT = 418] = "IM_A_TEAPOT", e[e.INTERNAL_SERVER_ERROR = 500] = "INTERNAL_SERVER_ERROR", e[e.NOT_IMPLEMENTED = 501] = "NOT_IMPLEMENTED";
  }(i || (i = {})), function (e) {
    e.LOCATION = "Location";
  }(o || (o = {})), function (e) {
    e.CHAR = "charset", e.FACE = "faceset", e.FAVICON = "favicon", e.SKIN = "skin", e.TILE = "tile", e.TILESET = "tileset", e.PICTURE = "picture", e.POINTER = "pointer", e.MAP = "map", e.TREE = "tree", e.STRING = "string", e.DIALOG = "dialog", e.GENERIC_MESSAGE = "generic-message", e.CONFIGURATION = "configuration", e.SAVE = "save";
  }(r || (r = {}));
}, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return i;
  }), n.d(t, "b", function () {
    return o;
  });

  var i = function i() {
    _classCallCheck(this, i);
  };

  var o;
  i.NONE = 0, i.UP = Math.pow(2, 0), i.DOWN = Math.pow(2, 1), i.LEFT = Math.pow(2, 2), i.RIGHT = Math.pow(2, 3), i.ALL = i.UP + i.DOWN + i.LEFT + i.RIGHT, function (e) {
    e.IT = "it", e.EN = "en";
  }(o || (o = {}));
}, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return i;
  });
  var i,
      o = n(11),
      r = n(0);
  !function (e) {
    function t(e) {
      return {
        id: r.a.getRandomString(),
        name: void 0 !== e ? e : "Map",
        height: 20,
        width: 25,
        layers: [{
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          type: "tilelayer",
          x: 0,
          y: 0
        }, {
          type: "tilelayer",
          x: 0,
          y: 0
        }, {
          type: "tilelayer",
          x: 0,
          y: 0
        }, {
          type: "tilelayer",
          x: 0,
          y: 0
        }],
        nextobjectid: 2,
        tileset: {
          firstgid: 1,
          image: "002-Woods01.png",
          blocks: [],
          onTop: []
        },
        events: []
      };
    }

    function n() {
      return {
        firstgid: 1,
        image: "002-Woods01.png",
        blocks: [],
        onTop: []
      };
    }

    function i() {
      return {
        lang: o.a.ui.lang,
        skin: o.a.ui.skin,
        flagAntialiasing: !0,
        flagDouble: !1,
        flagNatural: !1
      };
    }

    function a() {
      return {
        id: -1,
        name: "NPC",
        i: 0,
        j: 0,
        states: [{
          charaset: "",
          condition: "always",
          trigger: 0,
          action: ""
        }],
        memory: {},
        script: "BaseScript",
        currentState: 0
      };
    }

    function s() {
      var e = {
        id: -1,
        name: "NPC",
        i: 0,
        j: 0,
        states: [{
          charaset: "",
          condition: "always",
          trigger: 0,
          action: ""
        }],
        memory: {},
        script: "BaseScript",
        currentState: 0
      };
      return e.name = o.a.hero.name, e.i = o.a.maps.start.i, e.j = o.a.maps.start.j, e.states = [], e.states[0] = {
        charaset: o.a.hero.charaset,
        condition: "always",
        trigger: 0,
        action: ""
      }, e;
    }

    e.DEFAULT_ID = -1, e.DEFAULT_ID_STR = e.DEFAULT_ID + "", e.FIRST_ELEM_ID = 0, e.DEFAULT_STR = "", e.getDialogNode = function (t) {
      return {
        id: void 0 !== t ? t : e.DEFAULT_ID
      };
    }, e.getDialogEdge = function (t) {
      return {
        id: void 0 !== t ? t : e.DEFAULT_ID
      };
    }, e.getEmptyMap = function (e) {
      var n = t(e);

      var _iterator = _createForOfIteratorHelper(n.layers),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _e2 = _step.value;
          _e2.data = void 0;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return n;
    }, e.getMap = t, e.getTileset = n, e.getSave = function () {
      return {
        id: e.FIRST_ELEM_ID,
        timestamp: r.a.now(),
        currentMap: o.a.maps.start.map,
        hero: s(),
        maps: [],
        config: i()
      };
    }, e.getConfig = i, e.getEvent = a, e.getHero = s, e.getEventState = function () {
      return {
        condition: "always",
        trigger: 0
      };
    }, e.getString = function () {
      return "";
    }, e.getTree = function () {
      return {};
    }, e.getCharacter = function () {
      return {
        charaset: ""
      };
    };
  }(i || (i = {}));
}, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return i;
  });
  var i,
      o = n(3),
      r = n(14),
      a = n(13),
      s = n(16),
      l = n(1),
      c = n(0);
  !function (e) {
    var t = base_path + "data/",
        n = base_path + "assets/",
        i = base_path + "assetlist/",
        d = base_path + "edit/";
    var u = new Map();
    var f,
        p = new Map(),
        h = new Map();

    function g(e, t, n) {
      v(l.a.RequestType.GET, void 0, e, t, n);
    }

    function m(e, t, n) {
      v(l.a.RequestType.POST, t, e, n);
    }

    function v(e, t, n, i, o) {
      var r = new XMLHttpRequest();
      r.onload = function (e) {
        i(this.responseText);
      }, r.onerror = function (e) {
        console.error("Error for request to: " + n), console.error(e), i();
      }, r.ontimeout = function () {
        console.error("Timeout for request to: " + n), i();
      }, r.open(e, n, !0);

      try {
        void 0 !== o && r.setRequestHeader("lang", o), c.a.isEmpty(t) || e !== l.a.RequestType.POST ? r.send() : r.send(t);
      } catch (e) {
        "NetworkError" === e.name ? console.error("If you are working locally on Chrome, please launch it with option --allow-file-access-from-files") : (console.error(e), console.trace()), i();
      }
    }

    function y(e, i, r, a) {
      c.a.isEmpty(e) && (console.error("Trying to load empty file!"), console.trace());

      var s = function (e, i) {
        var r;

        switch (i) {
          case o.a.CHAR:
          case o.a.FACE:
          case o.a.SKIN:
          case o.a.PICTURE:
          case o.a.TILE:
            r = n;
            break;

          case o.a.MAP:
          case o.a.SAVE:
          case o.a.STRING:
          case o.a.DIALOG:
          case o.a.GENERIC_MESSAGE:
          case o.a.TILESET:
            r = t;
            break;

          default:
            console.error("Unexpected resource type"), console.trace();
        }

        return r + i + "/" + e;
      }(e, i);

      if (void 0 === s) return console.error("Error while loading file: " + e + "/" + i), void r();

      switch (i) {
        case o.a.CHAR:
        case o.a.FACE:
        case o.a.SKIN:
        case o.a.TILE:
        case o.a.PICTURE:
          var _t3 = new Image();

          _t3.onload = function () {
            u.set(i + "@" + e, _t3), r(_t3);
          }, _t3.src = s;
          break;

        case o.a.MAP:
        case o.a.SAVE:
        case o.a.STRING:
        case o.a.DIALOG:
        case o.a.GENERIC_MESSAGE:
        case o.a.TILESET:
          g(s, r, a);
          break;

        default:
          console.error("Unexpected resource type"), console.trace(), r(void 0);
      }
    }

    function A(e, t) {
      var n = u.get(t + "@" + e);
      return c.a.isEmpty(n) && y(e, t, function (n) {
        void 0 === n || "string" == typeof n ? console.error("Error while reading image: " + e) : u.set(t + "@" + e, n);
      }), n;
    }

    e.loadProperties = function (e) {
      var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "l4w";
      if (p.has(n)) e(p.get(n));else {
        g(t + o.a.CONFIGURATION + "/" + n + ".properties", function (t) {
          var i;
          void 0 !== t ? (i = function (e) {
            var t = new Map(),
                n = e.split("\n");

            for (var i = 0; i < n.length; i++) {
              var _e3 = n[i].trim();

              if ("" !== _e3 && 0 !== _e3.indexOf("#")) {
                var _n2 = _e3.split("="),
                    _o2 = +_n2[1];

                isNaN(_o2) ? t.has(_n2[1]) ? t.set(_n2[0], t.get(_n2[1])) : console.error("Error parsing properties file at line " + i + ": " + _o2) : t.set(_n2[0], _o2);
              }
            }

            return t;
          }(t), p.set(n, i)) : i = new Map(), e(i);
        });
      }
    }, e.sendGETRequest = g, e.sendPOSTRequest = m, e.load = y, e.loadImageFromCache = A, e.loadDefaultImage = function (e) {
      return A("404.png", e);
    }, e.save = function (e, t, n, i) {
      var r = function (e, t) {
        return d + t + "/" + e;
      }(e, n);

      m(r, t, function (e) {
        void 0 !== e ? n === o.a.STRING || n === o.a.DIALOG || n === o.a.GENERIC_MESSAGE ? i(e, !0) : i(void 0, !0) : (console.error("Empty response for: " + r), i(void 0, !1));
      });
    }, e.listResources = function (e, t) {
      g(i + e, function (e) {
        if (void 0 !== e) {
          var _n3 = JSON.parse(e);

          if (void 0 !== _n3) return void t(_n3);
        }

        console.error("Empty response from " + i), t([]);
      });
    }, e.listScriptClasses = function () {
      if (void 0 !== f) return f;
      var e = Object.keys(s).filter(function (e) {
        try {
          return s[e].prototype instanceof a.a;
        } catch (e) {
          return !1;
        }
      }),
          t = new Map();

      var _iterator2 = _createForOfIteratorHelper(e),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _n4 = _step2.value;
          t.set(_n4, s[_n4].tooltip);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return f = t, t;
    }, e.listScriptActions = function (e) {
      if (h.has(e)) return h.get(e);
      var t = new s[e](void 0, void 0, void 0),
          n = Object.getOwnPropertyNames(Object.getPrototypeOf(t)).filter(function (e) {
        try {
          return "constructor" !== e && "function" == typeof t[e];
        } catch (e) {
          return !1;
        }
      });
      return h.set(e, n), n;
    }, e.listEventStateConditions = function () {
      return Object.keys(r.a);
    };
  }(i || (i = {}));
}, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return d;
  });
  var i,
      o = n(1),
      r = n(6),
      a = n(2),
      s = n(4),
      l = n(5),
      c = n(0);
  !function (e) {
    function t(e, t) {
      switch (parseInt(t + "")) {
        case 0:
          e.frequencyVal = o.a.VERY_LOW_FREQUENCY;
          break;

        case 1:
          e.frequencyVal = o.a.LOW_FREQUENCY;
          break;

        case 2:
          e.frequencyVal = o.a.MEDIUM_LOW_FREQUENCY;
          break;

        case 3:
          e.frequencyVal = o.a.MEDIUM_FREQUENCY;
          break;

        case 4:
          e.frequencyVal = o.a.MEDIUM_HIGH_FREQUENCY;
          break;

        case 5:
          e.frequencyVal = o.a.HIGH_FREQUENCY;
          break;

        case 6:
          e.frequencyVal = o.a.VERY_HIGH_FREQUENCY;
          break;

        default:
          e.frequencyVal = o.a.MEDIUM_FREQUENCY;
      }
    }

    function n(e, t) {
      switch (parseInt(t + "")) {
        case 0:
          e.mSpeed = o.a.VERY_LOW_MSPEED;
          break;

        case 1:
          e.mSpeed = o.a.LOW_MSPEED;
          break;

        case 2:
          e.mSpeed = o.a.MEDIUM_LOW_MSPEED;
          break;

        case 3:
          e.mSpeed = o.a.MEDIUM_MSPEED;
          break;

        case 4:
          e.mSpeed = o.a.MEDIUM_HIGH_MSPEED;
          break;

        case 5:
          e.mSpeed = o.a.HIGH_MSPEED;
          break;

        case 6:
          e.mSpeed = o.a.VERY_HIGH_MSPEED;
          break;

        default:
          e.mSpeed = o.a.MEDIUM_MSPEED;
      }
    }

    e.setFrequency = t, e.setSpeed = n, e.isVisible = function (e, t) {
      return void 0 !== e && t === (0 !== a.a.normalizeZIndex(e.onTop)) && !(!c.a.isEmpty(e.visible) && !e.visible) && !(!c.a.isEmpty(e.opacity) && 0 === e.opacity) && !c.a.isEmpty(e.charaset);
    }, e.initTransientData = function (e, i) {
      return void 0 === i && (i = l.a.getCharacter()), n(i, i.speed), t(i, i.frequency), i;
    };
  }(i || (i = {}));
  var d,
      u = n(10),
      f = n(14),
      p = n(3);
  !function (e) {
    function t(e, t) {
      var n = e.states[t].condition;
      return n in f.a ? f.a[n](e) : (console.error('Condition not found: "' + n + '", on event: ' + e.name), !1);
    }

    function n(e) {
      e.path = void 0, e.movementStartTime = void 0, e.movementDirection = void 0, e.target = void 0;
    }

    function l(e) {
      var t = d(e);

      if (void 0 !== t) {
        var _e4 = t.mSpeed;
        if (!c.a.isEmpty(_e4)) return _e4;
      }

      return o.a.MEDIUM_MSPEED;
    }

    function d(e) {
      if (void 0 !== e && void 0 !== e.currentState && void 0 !== e.states) return e.states[e.currentState];
    }

    e.update = function (e, n, i, o, r) {
      var a = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

      if (c.a.isEmpty(e.movementStartTime) || (e.movementStartTime += a), !c.a.isEmpty(e.states)) {
        var _n5 = -1;

        for (var _i2 = e.states.length - 1; _i2 >= 0; _i2--) {
          if (t(e, _i2)) {
            _n5 = _i2;
            break;
          }
        }

        if (e.currentState = _n5, e === i) return;
        if (function (e, t, n, i) {
          switch (e.states[t].trigger) {
            case 0:
              if (void 0 === i || i.i !== e.i || i.j !== e.j) return !1;

            case 1:
              var _o3 = Math.abs(e.i - n.i),
                  _r2 = Math.abs(e.j - n.j);

              return 0 === _o3 && _r2 <= 1 || _o3 <= 1 && 0 === _r2;

            case 2:
              return e.i === n.i && e.j === n.j;

            case 3:
              return !0;

            default:
              return console.error("Unexpected case: " + e.states[t].trigger), !1;
          }
        }(e, e.currentState, i, o)) return e.currentState;
      }
    }, e.startMovement = function (e, t, n, i) {
      return t.newTarget = e.mapCellToCanvas({
        i: n,
        j: i
      }), !0;
    }, e.stopMovement = n, e.manageMovements = function e(t, i, o, r, d, f) {
      var p = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
      var h = !1;

      if (!c.a.isEmpty(o.movementStartTime)) {
        if (0 === p && (p = c.a.now() - o.movementStartTime), void 0 === o.target) return console.error("No target set for movement"), !0;

        var _e5,
            g = {
          i: Math.floor(o.target.x / i.cellW),
          j: Math.floor(o.target.y / i.cellH)
        },
            m = a.a.cellToGid(g, t.width),
            v = a.a.getMapStaticBlock(t, m),
            y = a.a.getMapDynamicBlock(t, m);

        if (a.a.isBlockDirectionBlocked(v, s.a.ALL) && !a.a.isBlockDirectionBlocked(y, s.a.ALL) || m < 0 || m >= t.width * t.height) _e5 = 4;else if (_e5 = o.movementDirection, c.a.isEmpty(_e5) || 4 === _e5) {
          try {
            _e5 = u.a.pathFinder(t, o, g);
          } catch (o) {
            console.error(o);
          }

          var _n6 = a.a.getDirectionTarget(o, _e5),
              _i3 = a.a.cellToGid(_n6, t.width),
              _r3 = a.a.getMapDynamicBlock(t, _i3);

          a.a.isDirectionEnumBlocked(_r3, a.a.getOpposedDirections(_e5)) && (_e5 = 4, _i3 === m && f(g));
        }
        var A,
            b = 0,
            E = 0;

        switch (_e5) {
          case 3:
            b = Math.min(i.cellW, Math.floor(l(o) * p)), A = b, b *= -1;
            break;

          case 1:
            b = Math.min(i.cellW, Math.floor(l(o) * p)), A = b;
            break;

          case 0:
            E = Math.min(i.cellH, Math.floor(l(o) * p)), A = E, E *= -1;
            break;

          case 2:
            E = Math.min(i.cellH, Math.floor(l(o) * p)), A = E;
            break;

          case 4:
            n(o), f(g);
        }

        if (4 !== _e5 && (void 0 !== o.states[o.currentState] && (o.states[o.currentState].direction = _e5), o.movementDirection = _e5, o.position = {
          x: o.i * i.cellW + b,
          y: o.j * i.cellH + E
        }, r(b, E), A === i.cellW)) {
          h = !0, o.movementDirection = void 0, o.movementStartTime = c.a.now(), p -= Math.floor(A / l(o));

          var _e6 = i.mapCanvasToCell(o.position);

          o.i = _e6.i, o.j = _e6.j, d(b, E), (!c.a.isEmpty(o.newTarget) || o.position.x === o.target.x && o.position.y === o.target.y) && n(o);
        }
      }

      return !c.a.isEmpty(o.newTarget) && c.a.isEmpty(o.movementStartTime) && (o.target = o.newTarget, o.newTarget = void 0, o.movementStartTime = c.a.now(), h = h || e(t, i, o, r, d, f, p)), h;
    }, e.addDirectionToPath = function (e, t, n) {
      void 0 === e.path && (e.path = []), e.path[e.path.length - 1] !== t && e.path.push(t), !c.a.isEmpty(n) && e.path.length > n && e.path.shift();
    }, e.render = function (e, t, n, i, a) {
      var s,
          l = d(t);
      if (void 0 !== l) if (c.a.isEmpty(l.charaset) ? c.a.isEmpty(l.gid) : s = r.a.loadImageFromCache(l.charaset, p.a.CHAR), void 0 !== t.position) {
        if (i || (n.save(), n.strokeStyle = o.a.Color.GREEN, n.lineWidth = 2, n.strokeRect(t.position.x, t.position.y, e.cellW, e.cellH)), void 0 !== s) {
          var _r4 = Math.floor(s.width / 4),
              _d = Math.floor(s.height / 4),
              _u = _r4,
              _f = _d;

          i || (_d > _r4 ? (_u = Math.floor(_r4 * e.cellH / _d), _f = e.cellH) : (_f = Math.floor(_d * e.cellW / _r4), _u = e.cellW));

          var _p,
              h = 0;

          if (_p = c.a.isEmpty(l.frequencyVal) ? o.a.MEDIUM_FREQUENCY : l.frequencyVal, c.a.isEmpty(t.target)) {
            if (1 === l.rotation || 2 === l.rotation) {
              c.a.isEmpty(l.animationStartTime) && (l.animationStartTime = c.a.now());

              var _e7 = c.a.now() - l.animationStartTime;

              _p /= 4;

              var _t4 = Math.floor(_e7 * _p % 4);

              2 === l.rotation && (3 === _t4 ? _t4 = 1 : 1 === _t4 && (_t4 = 3)), l.direction = _t4;
            } else l.animationStartTime = void 0;
          } else {
            c.a.isEmpty(l.animationStartTime) && (l.animationStartTime = c.a.now());

            var _e8 = c.a.now() - l.animationStartTime;

            switch (Math.floor(_e8 * _p % 4)) {
              case 1:
                h = _r4;
                break;

              case 2:
                h = 2 * _r4;
                break;

              case 3:
                h = 3 * _r4;
            }
          }
          var g = 0;

          switch (l.direction) {
            case 3:
              g = _d;
              break;

            case 1:
              g = 2 * _d;
              break;

            case 0:
              g = 3 * _d;
          }

          var m = t.position.x + Math.floor((e.cellW - _u) / 2),
              v = t.position.y + Math.floor(-_f + e.cellH);

          if (n.save(), c.a.isEmpty(l.opacity) || 100 === l.opacity || (n.globalAlpha = l.opacity / 100), void 0 !== a) {
            a.i === t.i && a.j === t.j && (n.shadowColor = o.a.Color.YELLOW, n.shadowBlur = 8);
          }

          n.drawImage(s, h, g, _r4, _d, m, v, _u, _f), n.restore();
        }
      } else console.error("Event position undefined: " + t);
    }, e.isVisible = function (e, t, n, o, r, a, s, l) {
      return e.i === a && e.j === s && !!i.isVisible(d(e), l) && e.i >= o && e.i <= r && e.j >= t && e.j <= n;
    }, e.saveMem = function (e, t, n) {
      c.a.isEmpty(e.memory) && (e.memory = {}), e.memory[t] = n;
    }, e.loadMem = function (e, t) {
      if (!c.a.isEmpty(e.memory)) return e.memory[t];
    }, e.deleteMem = function (e, t) {
      c.a.isEmpty(e.memory) || delete e.memory[t];
    }, e.initTransientData = function (t, o, r) {
      if (i.initTransientData(o, e.getState(r)), void 0 !== r) return n(r), r.position = {
        x: r.i * o.cellW,
        y: r.j * o.cellH
      }, r;
    }, e.getState = d;
  }(d || (d = {}));
}, function (e, t, n) {
  "use strict";

  (function (e, n) {
    /*!
     * Vue.js v2.6.12
     * (c) 2014-2020 Evan You
     * Released under the MIT License.
     */
    var i = Object.freeze({});

    function o(e) {
      return null == e;
    }

    function r(e) {
      return null != e;
    }

    function a(e) {
      return !0 === e;
    }

    function s(e) {
      return "string" == typeof e || "number" == typeof e || "symbol" == _typeof(e) || "boolean" == typeof e;
    }

    function l(e) {
      return null !== e && "object" == _typeof(e);
    }

    var c = Object.prototype.toString;

    function d(e) {
      return "[object Object]" === c.call(e);
    }

    function u(e) {
      return "[object RegExp]" === c.call(e);
    }

    function f(e) {
      var t = parseFloat(String(e));
      return t >= 0 && Math.floor(t) === t && isFinite(e);
    }

    function p(e) {
      return r(e) && "function" == typeof e.then && "function" == typeof e["catch"];
    }

    function h(e) {
      return null == e ? "" : Array.isArray(e) || d(e) && e.toString === c ? JSON.stringify(e, null, 2) : String(e);
    }

    function g(e) {
      var t = parseFloat(e);
      return isNaN(t) ? e : t;
    }

    function m(e, t) {
      for (var n = Object.create(null), i = e.split(","), o = 0; o < i.length; o++) {
        n[i[o]] = !0;
      }

      return t ? function (e) {
        return n[e.toLowerCase()];
      } : function (e) {
        return n[e];
      };
    }

    var v = m("slot,component", !0),
        y = m("key,ref,slot,slot-scope,is");

    function A(e, t) {
      if (e.length) {
        var n = e.indexOf(t);
        if (n > -1) return e.splice(n, 1);
      }
    }

    var b = Object.prototype.hasOwnProperty;

    function E(e, t) {
      return b.call(e, t);
    }

    function _(e) {
      var t = Object.create(null);
      return function (n) {
        return t[n] || (t[n] = e(n));
      };
    }

    var C = /-(\w)/g,
        w = _(function (e) {
      return e.replace(C, function (e, t) {
        return t ? t.toUpperCase() : "";
      });
    }),
        S = _(function (e) {
      return e.charAt(0).toUpperCase() + e.slice(1);
    }),
        I = /\B([A-Z])/g,
        T = _(function (e) {
      return e.replace(I, "-$1").toLowerCase();
    });

    var k = Function.prototype.bind ? function (e, t) {
      return e.bind(t);
    } : function (e, t) {
      function n(n) {
        var i = arguments.length;
        return i ? i > 1 ? e.apply(t, arguments) : e.call(t, n) : e.call(t);
      }

      return n._length = e.length, n;
    };

    function x(e, t) {
      t = t || 0;

      for (var n = e.length - t, i = new Array(n); n--;) {
        i[n] = e[n + t];
      }

      return i;
    }

    function M(e, t) {
      for (var n in t) {
        e[n] = t[n];
      }

      return e;
    }

    function N(e) {
      for (var t = {}, n = 0; n < e.length; n++) {
        e[n] && M(t, e[n]);
      }

      return t;
    }

    function D(e, t, n) {}

    var O = function O(e, t, n) {
      return !1;
    },
        L = function L(e) {
      return e;
    };

    function $(e, t) {
      if (e === t) return !0;
      var n = l(e),
          i = l(t);
      if (!n || !i) return !n && !i && String(e) === String(t);

      try {
        var o = Array.isArray(e),
            r = Array.isArray(t);
        if (o && r) return e.length === t.length && e.every(function (e, n) {
          return $(e, t[n]);
        });
        if (e instanceof Date && t instanceof Date) return e.getTime() === t.getTime();
        if (o || r) return !1;
        var a = Object.keys(e),
            s = Object.keys(t);
        return a.length === s.length && a.every(function (n) {
          return $(e[n], t[n]);
        });
      } catch (e) {
        return !1;
      }
    }

    function R(e, t) {
      for (var n = 0; n < e.length; n++) {
        if ($(e[n], t)) return n;
      }

      return -1;
    }

    function P(e) {
      var t = !1;
      return function () {
        t || (t = !0, e.apply(this, arguments));
      };
    }

    var B = ["component", "directive", "filter"],
        j = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured", "serverPrefetch"],
        F = {
      optionMergeStrategies: Object.create(null),
      silent: !1,
      productionTip: !1,
      devtools: !1,
      performance: !1,
      errorHandler: null,
      warnHandler: null,
      ignoredElements: [],
      keyCodes: Object.create(null),
      isReservedTag: O,
      isReservedAttr: O,
      isUnknownElement: O,
      getTagNamespace: D,
      parsePlatformTagName: L,
      mustUseProp: O,
      async: !0,
      _lifecycleHooks: j
    },
        U = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

    function H(e) {
      var t = (e + "").charCodeAt(0);
      return 36 === t || 95 === t;
    }

    function W(e, t, n, i) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: !!i,
        writable: !0,
        configurable: !0
      });
    }

    var G = new RegExp("[^" + U.source + ".$_\\d]");
    var V,
        q = ("__proto__" in {}),
        z = "undefined" != typeof window,
        Y = "undefined" != typeof WXEnvironment && !!WXEnvironment.platform,
        K = Y && WXEnvironment.platform.toLowerCase(),
        J = z && window.navigator.userAgent.toLowerCase(),
        Q = J && /msie|trident/.test(J),
        X = J && J.indexOf("msie 9.0") > 0,
        Z = J && J.indexOf("edge/") > 0,
        ee = (J && J.indexOf("android"), J && /iphone|ipad|ipod|ios/.test(J) || "ios" === K),
        te = (J && /chrome\/\d+/.test(J), J && /phantomjs/.test(J), J && J.match(/firefox\/(\d+)/)),
        ne = {}.watch,
        ie = !1;
    if (z) try {
      var oe = {};
      Object.defineProperty(oe, "passive", {
        get: function get() {
          ie = !0;
        }
      }), window.addEventListener("test-passive", null, oe);
    } catch (e) {}

    var re = function re() {
      return void 0 === V && (V = !z && !Y && void 0 !== e && e.process && "server" === e.process.env.VUE_ENV), V;
    },
        ae = z && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

    function se(e) {
      return "function" == typeof e && /native code/.test(e.toString());
    }

    var le,
        ce = "undefined" != typeof Symbol && se(Symbol) && "undefined" != typeof Reflect && se(Reflect.ownKeys);
    le = "undefined" != typeof Set && se(Set) ? Set : function () {
      function e() {
        this.set = Object.create(null);
      }

      return e.prototype.has = function (e) {
        return !0 === this.set[e];
      }, e.prototype.add = function (e) {
        this.set[e] = !0;
      }, e.prototype.clear = function () {
        this.set = Object.create(null);
      }, e;
    }();

    var de = D,
        ue = 0,
        fe = function fe() {
      this.id = ue++, this.subs = [];
    };

    fe.prototype.addSub = function (e) {
      this.subs.push(e);
    }, fe.prototype.removeSub = function (e) {
      A(this.subs, e);
    }, fe.prototype.depend = function () {
      fe.target && fe.target.addDep(this);
    }, fe.prototype.notify = function () {
      var e = this.subs.slice();

      for (var t = 0, n = e.length; t < n; t++) {
        e[t].update();
      }
    }, fe.target = null;
    var pe = [];

    function he(e) {
      pe.push(e), fe.target = e;
    }

    function ge() {
      pe.pop(), fe.target = pe[pe.length - 1];
    }

    var me = function me(e, t, n, i, o, r, a, s) {
      this.tag = e, this.data = t, this.children = n, this.text = i, this.elm = o, this.ns = void 0, this.context = r, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0, this.key = t && t.key, this.componentOptions = a, this.componentInstance = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = s, this.asyncMeta = void 0, this.isAsyncPlaceholder = !1;
    },
        ve = {
      child: {
        configurable: !0
      }
    };

    ve.child.get = function () {
      return this.componentInstance;
    }, Object.defineProperties(me.prototype, ve);

    var ye = function ye(e) {
      void 0 === e && (e = "");
      var t = new me();
      return t.text = e, t.isComment = !0, t;
    };

    function Ae(e) {
      return new me(void 0, void 0, void 0, String(e));
    }

    function be(e) {
      var t = new me(e.tag, e.data, e.children && e.children.slice(), e.text, e.elm, e.context, e.componentOptions, e.asyncFactory);
      return t.ns = e.ns, t.isStatic = e.isStatic, t.key = e.key, t.isComment = e.isComment, t.fnContext = e.fnContext, t.fnOptions = e.fnOptions, t.fnScopeId = e.fnScopeId, t.asyncMeta = e.asyncMeta, t.isCloned = !0, t;
    }

    var Ee = Array.prototype,
        _e = Object.create(Ee);

    ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function (e) {
      var t = Ee[e];
      W(_e, e, function () {
        for (var n = [], i = arguments.length; i--;) {
          n[i] = arguments[i];
        }

        var o,
            r = t.apply(this, n),
            a = this.__ob__;

        switch (e) {
          case "push":
          case "unshift":
            o = n;
            break;

          case "splice":
            o = n.slice(2);
        }

        return o && a.observeArray(o), a.dep.notify(), r;
      });
    });
    var Ce = Object.getOwnPropertyNames(_e),
        we = !0;

    function Se(e) {
      we = e;
    }

    var Ie = function Ie(e) {
      this.value = e, this.dep = new fe(), this.vmCount = 0, W(e, "__ob__", this), Array.isArray(e) ? (q ? function (e, t) {
        e.__proto__ = t;
      }(e, _e) : function (e, t, n) {
        for (var i = 0, o = n.length; i < o; i++) {
          var r = n[i];
          W(e, r, t[r]);
        }
      }(e, _e, Ce), this.observeArray(e)) : this.walk(e);
    };

    function Te(e, t) {
      var n;
      if (l(e) && !(e instanceof me)) return E(e, "__ob__") && e.__ob__ instanceof Ie ? n = e.__ob__ : we && !re() && (Array.isArray(e) || d(e)) && Object.isExtensible(e) && !e._isVue && (n = new Ie(e)), t && n && n.vmCount++, n;
    }

    function ke(e, t, n, i, o) {
      var r = new fe(),
          a = Object.getOwnPropertyDescriptor(e, t);

      if (!a || !1 !== a.configurable) {
        var s = a && a.get,
            l = a && a.set;
        s && !l || 2 !== arguments.length || (n = e[t]);
        var c = !o && Te(n);
        Object.defineProperty(e, t, {
          enumerable: !0,
          configurable: !0,
          get: function get() {
            var t = s ? s.call(e) : n;
            return fe.target && (r.depend(), c && (c.dep.depend(), Array.isArray(t) && Ne(t))), t;
          },
          set: function set(t) {
            var i = s ? s.call(e) : n;
            t === i || t != t && i != i || s && !l || (l ? l.call(e, t) : n = t, c = !o && Te(t), r.notify());
          }
        });
      }
    }

    function xe(e, t, n) {
      if (Array.isArray(e) && f(t)) return e.length = Math.max(e.length, t), e.splice(t, 1, n), n;
      if (t in e && !(t in Object.prototype)) return e[t] = n, n;
      var i = e.__ob__;
      return e._isVue || i && i.vmCount ? n : i ? (ke(i.value, t, n), i.dep.notify(), n) : (e[t] = n, n);
    }

    function Me(e, t) {
      if (Array.isArray(e) && f(t)) e.splice(t, 1);else {
        var n = e.__ob__;
        e._isVue || n && n.vmCount || E(e, t) && (delete e[t], n && n.dep.notify());
      }
    }

    function Ne(e) {
      for (var t = void 0, n = 0, i = e.length; n < i; n++) {
        (t = e[n]) && t.__ob__ && t.__ob__.dep.depend(), Array.isArray(t) && Ne(t);
      }
    }

    Ie.prototype.walk = function (e) {
      for (var t = Object.keys(e), n = 0; n < t.length; n++) {
        ke(e, t[n]);
      }
    }, Ie.prototype.observeArray = function (e) {
      for (var t = 0, n = e.length; t < n; t++) {
        Te(e[t]);
      }
    };
    var De = F.optionMergeStrategies;

    function Oe(e, t) {
      if (!t) return e;

      for (var n, i, o, r = ce ? Reflect.ownKeys(t) : Object.keys(t), a = 0; a < r.length; a++) {
        "__ob__" !== (n = r[a]) && (i = e[n], o = t[n], E(e, n) ? i !== o && d(i) && d(o) && Oe(i, o) : xe(e, n, o));
      }

      return e;
    }

    function Le(e, t, n) {
      return n ? function () {
        var i = "function" == typeof t ? t.call(n, n) : t,
            o = "function" == typeof e ? e.call(n, n) : e;
        return i ? Oe(i, o) : o;
      } : t ? e ? function () {
        return Oe("function" == typeof t ? t.call(this, this) : t, "function" == typeof e ? e.call(this, this) : e);
      } : t : e;
    }

    function $e(e, t) {
      var n = t ? e ? e.concat(t) : Array.isArray(t) ? t : [t] : e;
      return n ? function (e) {
        for (var t = [], n = 0; n < e.length; n++) {
          -1 === t.indexOf(e[n]) && t.push(e[n]);
        }

        return t;
      }(n) : n;
    }

    function Re(e, t, n, i) {
      var o = Object.create(e || null);
      return t ? M(o, t) : o;
    }

    De.data = function (e, t, n) {
      return n ? Le(e, t, n) : t && "function" != typeof t ? e : Le(e, t);
    }, j.forEach(function (e) {
      De[e] = $e;
    }), B.forEach(function (e) {
      De[e + "s"] = Re;
    }), De.watch = function (e, t, n, i) {
      if (e === ne && (e = void 0), t === ne && (t = void 0), !t) return Object.create(e || null);
      if (!e) return t;
      var o = {};

      for (var r in M(o, e), t) {
        var a = o[r],
            s = t[r];
        a && !Array.isArray(a) && (a = [a]), o[r] = a ? a.concat(s) : Array.isArray(s) ? s : [s];
      }

      return o;
    }, De.props = De.methods = De.inject = De.computed = function (e, t, n, i) {
      if (!e) return t;
      var o = Object.create(null);
      return M(o, e), t && M(o, t), o;
    }, De.provide = Le;

    var Pe = function Pe(e, t) {
      return void 0 === t ? e : t;
    };

    function Be(e, t, n) {
      if ("function" == typeof t && (t = t.options), function (e, t) {
        var n = e.props;

        if (n) {
          var i,
              o,
              r = {};
          if (Array.isArray(n)) for (i = n.length; i--;) {
            "string" == typeof (o = n[i]) && (r[w(o)] = {
              type: null
            });
          } else if (d(n)) for (var a in n) {
            o = n[a], r[w(a)] = d(o) ? o : {
              type: o
            };
          } else 0;
          e.props = r;
        }
      }(t), function (e, t) {
        var n = e.inject;

        if (n) {
          var i = e.inject = {};
          if (Array.isArray(n)) for (var o = 0; o < n.length; o++) {
            i[n[o]] = {
              from: n[o]
            };
          } else if (d(n)) for (var r in n) {
            var a = n[r];
            i[r] = d(a) ? M({
              from: r
            }, a) : {
              from: a
            };
          } else 0;
        }
      }(t), function (e) {
        var t = e.directives;
        if (t) for (var n in t) {
          var i = t[n];
          "function" == typeof i && (t[n] = {
            bind: i,
            update: i
          });
        }
      }(t), !t._base && (t["extends"] && (e = Be(e, t["extends"], n)), t.mixins)) for (var i = 0, o = t.mixins.length; i < o; i++) {
        e = Be(e, t.mixins[i], n);
      }
      var r,
          a = {};

      for (r in e) {
        s(r);
      }

      for (r in t) {
        E(e, r) || s(r);
      }

      function s(i) {
        var o = De[i] || Pe;
        a[i] = o(e[i], t[i], n, i);
      }

      return a;
    }

    function je(e, t, n, i) {
      if ("string" == typeof n) {
        var o = e[t];
        if (E(o, n)) return o[n];
        var r = w(n);
        if (E(o, r)) return o[r];
        var a = S(r);
        return E(o, a) ? o[a] : o[n] || o[r] || o[a];
      }
    }

    function Fe(e, t, n, i) {
      var o = t[e],
          r = !E(n, e),
          a = n[e],
          s = We(Boolean, o.type);
      if (s > -1) if (r && !E(o, "default")) a = !1;else if ("" === a || a === T(e)) {
        var l = We(String, o.type);
        (l < 0 || s < l) && (a = !0);
      }

      if (void 0 === a) {
        a = function (e, t, n) {
          if (!E(t, "default")) return;
          var i = t["default"];
          0;
          if (e && e.$options.propsData && void 0 === e.$options.propsData[n] && void 0 !== e._props[n]) return e._props[n];
          return "function" == typeof i && "Function" !== Ue(t.type) ? i.call(e) : i;
        }(i, o, e);

        var c = we;
        Se(!0), Te(a), Se(c);
      }

      return a;
    }

    function Ue(e) {
      var t = e && e.toString().match(/^\s*function (\w+)/);
      return t ? t[1] : "";
    }

    function He(e, t) {
      return Ue(e) === Ue(t);
    }

    function We(e, t) {
      if (!Array.isArray(t)) return He(t, e) ? 0 : -1;

      for (var n = 0, i = t.length; n < i; n++) {
        if (He(t[n], e)) return n;
      }

      return -1;
    }

    function Ge(e, t, n) {
      he();

      try {
        if (t) for (var i = t; i = i.$parent;) {
          var o = i.$options.errorCaptured;
          if (o) for (var r = 0; r < o.length; r++) {
            try {
              if (!1 === o[r].call(i, e, t, n)) return;
            } catch (e) {
              qe(e, i, "errorCaptured hook");
            }
          }
        }
        qe(e, t, n);
      } finally {
        ge();
      }
    }

    function Ve(e, t, n, i, o) {
      var r;

      try {
        (r = n ? e.apply(t, n) : e.call(t)) && !r._isVue && p(r) && !r._handled && (r["catch"](function (e) {
          return Ge(e, i, o + " (Promise/async)");
        }), r._handled = !0);
      } catch (e) {
        Ge(e, i, o);
      }

      return r;
    }

    function qe(e, t, n) {
      if (F.errorHandler) try {
        return F.errorHandler.call(null, e, t, n);
      } catch (t) {
        t !== e && ze(t, null, "config.errorHandler");
      }
      ze(e, t, n);
    }

    function ze(e, t, n) {
      if (!z && !Y || "undefined" == typeof console) throw e;
      console.error(e);
    }

    var Ye,
        Ke = !1,
        Je = [],
        Qe = !1;

    function Xe() {
      Qe = !1;
      var e = Je.slice(0);
      Je.length = 0;

      for (var t = 0; t < e.length; t++) {
        e[t]();
      }
    }

    if ("undefined" != typeof Promise && se(Promise)) {
      var Ze = Promise.resolve();
      Ye = function Ye() {
        Ze.then(Xe), ee && setTimeout(D);
      }, Ke = !0;
    } else if (Q || "undefined" == typeof MutationObserver || !se(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString()) Ye = void 0 !== n && se(n) ? function () {
      n(Xe);
    } : function () {
      setTimeout(Xe, 0);
    };else {
      var et = 1,
          tt = new MutationObserver(Xe),
          nt = document.createTextNode(String(et));
      tt.observe(nt, {
        characterData: !0
      }), Ye = function Ye() {
        et = (et + 1) % 2, nt.data = String(et);
      }, Ke = !0;
    }

    function it(e, t) {
      var n;
      if (Je.push(function () {
        if (e) try {
          e.call(t);
        } catch (e) {
          Ge(e, t, "nextTick");
        } else n && n(t);
      }), Qe || (Qe = !0, Ye()), !e && "undefined" != typeof Promise) return new Promise(function (e) {
        n = e;
      });
    }

    var ot = new le();

    function rt(e) {
      !function e(t, n) {
        var i,
            o,
            r = Array.isArray(t);
        if (!r && !l(t) || Object.isFrozen(t) || t instanceof me) return;

        if (t.__ob__) {
          var a = t.__ob__.dep.id;
          if (n.has(a)) return;
          n.add(a);
        }

        if (r) for (i = t.length; i--;) {
          e(t[i], n);
        } else for (o = Object.keys(t), i = o.length; i--;) {
          e(t[o[i]], n);
        }
      }(e, ot), ot.clear();
    }

    var at = _(function (e) {
      var t = "&" === e.charAt(0),
          n = "~" === (e = t ? e.slice(1) : e).charAt(0),
          i = "!" === (e = n ? e.slice(1) : e).charAt(0);
      return {
        name: e = i ? e.slice(1) : e,
        once: n,
        capture: i,
        passive: t
      };
    });

    function st(e, t) {
      function n() {
        var e = arguments,
            i = n.fns;
        if (!Array.isArray(i)) return Ve(i, null, arguments, t, "v-on handler");

        for (var o = i.slice(), r = 0; r < o.length; r++) {
          Ve(o[r], null, e, t, "v-on handler");
        }
      }

      return n.fns = e, n;
    }

    function lt(e, t, n, i, r, s) {
      var l, c, d, u;

      for (l in e) {
        c = e[l], d = t[l], u = at(l), o(c) || (o(d) ? (o(c.fns) && (c = e[l] = st(c, s)), a(u.once) && (c = e[l] = r(u.name, c, u.capture)), n(u.name, c, u.capture, u.passive, u.params)) : c !== d && (d.fns = c, e[l] = d));
      }

      for (l in t) {
        o(e[l]) && i((u = at(l)).name, t[l], u.capture);
      }
    }

    function ct(e, t, n) {
      var i;
      e instanceof me && (e = e.data.hook || (e.data.hook = {}));
      var s = e[t];

      function l() {
        n.apply(this, arguments), A(i.fns, l);
      }

      o(s) ? i = st([l]) : r(s.fns) && a(s.merged) ? (i = s).fns.push(l) : i = st([s, l]), i.merged = !0, e[t] = i;
    }

    function dt(e, t, n, i, o) {
      if (r(t)) {
        if (E(t, n)) return e[n] = t[n], o || delete t[n], !0;
        if (E(t, i)) return e[n] = t[i], o || delete t[i], !0;
      }

      return !1;
    }

    function ut(e) {
      return s(e) ? [Ae(e)] : Array.isArray(e) ? function e(t, n) {
        var i,
            l,
            c,
            d,
            u = [];

        for (i = 0; i < t.length; i++) {
          o(l = t[i]) || "boolean" == typeof l || (c = u.length - 1, d = u[c], Array.isArray(l) ? l.length > 0 && (ft((l = e(l, (n || "") + "_" + i))[0]) && ft(d) && (u[c] = Ae(d.text + l[0].text), l.shift()), u.push.apply(u, l)) : s(l) ? ft(d) ? u[c] = Ae(d.text + l) : "" !== l && u.push(Ae(l)) : ft(l) && ft(d) ? u[c] = Ae(d.text + l.text) : (a(t._isVList) && r(l.tag) && o(l.key) && r(n) && (l.key = "__vlist" + n + "_" + i + "__"), u.push(l)));
        }

        return u;
      }(e) : void 0;
    }

    function ft(e) {
      return r(e) && r(e.text) && !1 === e.isComment;
    }

    function pt(e, t) {
      if (e) {
        for (var n = Object.create(null), i = ce ? Reflect.ownKeys(e) : Object.keys(e), o = 0; o < i.length; o++) {
          var r = i[o];

          if ("__ob__" !== r) {
            for (var a = e[r].from, s = t; s;) {
              if (s._provided && E(s._provided, a)) {
                n[r] = s._provided[a];
                break;
              }

              s = s.$parent;
            }

            if (!s) if ("default" in e[r]) {
              var l = e[r]["default"];
              n[r] = "function" == typeof l ? l.call(t) : l;
            } else 0;
          }
        }

        return n;
      }
    }

    function ht(e, t) {
      if (!e || !e.length) return {};

      for (var n = {}, i = 0, o = e.length; i < o; i++) {
        var r = e[i],
            a = r.data;
        if (a && a.attrs && a.attrs.slot && delete a.attrs.slot, r.context !== t && r.fnContext !== t || !a || null == a.slot) (n["default"] || (n["default"] = [])).push(r);else {
          var s = a.slot,
              l = n[s] || (n[s] = []);
          "template" === r.tag ? l.push.apply(l, r.children || []) : l.push(r);
        }
      }

      for (var c in n) {
        n[c].every(gt) && delete n[c];
      }

      return n;
    }

    function gt(e) {
      return e.isComment && !e.asyncFactory || " " === e.text;
    }

    function mt(e, t, n) {
      var o,
          r = Object.keys(t).length > 0,
          a = e ? !!e.$stable : !r,
          s = e && e.$key;

      if (e) {
        if (e._normalized) return e._normalized;
        if (a && n && n !== i && s === n.$key && !r && !n.$hasNormal) return n;

        for (var l in o = {}, e) {
          e[l] && "$" !== l[0] && (o[l] = vt(t, l, e[l]));
        }
      } else o = {};

      for (var c in t) {
        c in o || (o[c] = yt(t, c));
      }

      return e && Object.isExtensible(e) && (e._normalized = o), W(o, "$stable", a), W(o, "$key", s), W(o, "$hasNormal", r), o;
    }

    function vt(e, t, n) {
      var i = function i() {
        var e = arguments.length ? n.apply(null, arguments) : n({});
        return (e = e && "object" == _typeof(e) && !Array.isArray(e) ? [e] : ut(e)) && (0 === e.length || 1 === e.length && e[0].isComment) ? void 0 : e;
      };

      return n.proxy && Object.defineProperty(e, t, {
        get: i,
        enumerable: !0,
        configurable: !0
      }), i;
    }

    function yt(e, t) {
      return function () {
        return e[t];
      };
    }

    function At(e, t) {
      var n, i, o, a, s;
      if (Array.isArray(e) || "string" == typeof e) for (n = new Array(e.length), i = 0, o = e.length; i < o; i++) {
        n[i] = t(e[i], i);
      } else if ("number" == typeof e) for (n = new Array(e), i = 0; i < e; i++) {
        n[i] = t(i + 1, i);
      } else if (l(e)) if (ce && e[Symbol.iterator]) {
        n = [];

        for (var c = e[Symbol.iterator](), d = c.next(); !d.done;) {
          n.push(t(d.value, n.length)), d = c.next();
        }
      } else for (a = Object.keys(e), n = new Array(a.length), i = 0, o = a.length; i < o; i++) {
        s = a[i], n[i] = t(e[s], s, i);
      }
      return r(n) || (n = []), n._isVList = !0, n;
    }

    function bt(e, t, n, i) {
      var o,
          r = this.$scopedSlots[e];
      r ? (n = n || {}, i && (n = M(M({}, i), n)), o = r(n) || t) : o = this.$slots[e] || t;
      var a = n && n.slot;
      return a ? this.$createElement("template", {
        slot: a
      }, o) : o;
    }

    function Et(e) {
      return je(this.$options, "filters", e) || L;
    }

    function _t(e, t) {
      return Array.isArray(e) ? -1 === e.indexOf(t) : e !== t;
    }

    function Ct(e, t, n, i, o) {
      var r = F.keyCodes[t] || n;
      return o && i && !F.keyCodes[t] ? _t(o, i) : r ? _t(r, e) : i ? T(i) !== t : void 0;
    }

    function wt(e, t, n, i, o) {
      if (n) if (l(n)) {
        var r;
        Array.isArray(n) && (n = N(n));

        var a = function a(_a2) {
          if ("class" === _a2 || "style" === _a2 || y(_a2)) r = e;else {
            var s = e.attrs && e.attrs.type;
            r = i || F.mustUseProp(t, s, _a2) ? e.domProps || (e.domProps = {}) : e.attrs || (e.attrs = {});
          }
          var l = w(_a2),
              c = T(_a2);
          l in r || c in r || (r[_a2] = n[_a2], o && ((e.on || (e.on = {}))["update:" + _a2] = function (e) {
            n[_a2] = e;
          }));
        };

        for (var s in n) {
          a(s);
        }
      } else ;
      return e;
    }

    function St(e, t) {
      var n = this._staticTrees || (this._staticTrees = []),
          i = n[e];
      return i && !t || Tt(i = n[e] = this.$options.staticRenderFns[e].call(this._renderProxy, null, this), "__static__" + e, !1), i;
    }

    function It(e, t, n) {
      return Tt(e, "__once__" + t + (n ? "_" + n : ""), !0), e;
    }

    function Tt(e, t, n) {
      if (Array.isArray(e)) for (var i = 0; i < e.length; i++) {
        e[i] && "string" != typeof e[i] && kt(e[i], t + "_" + i, n);
      } else kt(e, t, n);
    }

    function kt(e, t, n) {
      e.isStatic = !0, e.key = t, e.isOnce = n;
    }

    function xt(e, t) {
      if (t) if (d(t)) {
        var n = e.on = e.on ? M({}, e.on) : {};

        for (var i in t) {
          var o = n[i],
              r = t[i];
          n[i] = o ? [].concat(o, r) : r;
        }
      } else ;
      return e;
    }

    function Mt(e, t, n, i) {
      t = t || {
        $stable: !n
      };

      for (var o = 0; o < e.length; o++) {
        var r = e[o];
        Array.isArray(r) ? Mt(r, t, n) : r && (r.proxy && (r.fn.proxy = !0), t[r.key] = r.fn);
      }

      return i && (t.$key = i), t;
    }

    function Nt(e, t) {
      for (var n = 0; n < t.length; n += 2) {
        var i = t[n];
        "string" == typeof i && i && (e[t[n]] = t[n + 1]);
      }

      return e;
    }

    function Dt(e, t) {
      return "string" == typeof e ? t + e : e;
    }

    function Ot(e) {
      e._o = It, e._n = g, e._s = h, e._l = At, e._t = bt, e._q = $, e._i = R, e._m = St, e._f = Et, e._k = Ct, e._b = wt, e._v = Ae, e._e = ye, e._u = Mt, e._g = xt, e._d = Nt, e._p = Dt;
    }

    function Lt(e, t, n, o, r) {
      var s,
          l = this,
          c = r.options;
      E(o, "_uid") ? (s = Object.create(o))._original = o : (s = o, o = o._original);
      var d = a(c._compiled),
          u = !d;
      this.data = e, this.props = t, this.children = n, this.parent = o, this.listeners = e.on || i, this.injections = pt(c.inject, o), this.slots = function () {
        return l.$slots || mt(e.scopedSlots, l.$slots = ht(n, o)), l.$slots;
      }, Object.defineProperty(this, "scopedSlots", {
        enumerable: !0,
        get: function get() {
          return mt(e.scopedSlots, this.slots());
        }
      }), d && (this.$options = c, this.$slots = this.slots(), this.$scopedSlots = mt(e.scopedSlots, this.$slots)), c._scopeId ? this._c = function (e, t, n, i) {
        var r = Ut(s, e, t, n, i, u);
        return r && !Array.isArray(r) && (r.fnScopeId = c._scopeId, r.fnContext = o), r;
      } : this._c = function (e, t, n, i) {
        return Ut(s, e, t, n, i, u);
      };
    }

    function $t(e, t, n, i, o) {
      var r = be(e);
      return r.fnContext = n, r.fnOptions = i, t.slot && ((r.data || (r.data = {})).slot = t.slot), r;
    }

    function Rt(e, t) {
      for (var n in t) {
        e[w(n)] = t[n];
      }
    }

    Ot(Lt.prototype);
    var Pt = {
      init: function init(e, t) {
        if (e.componentInstance && !e.componentInstance._isDestroyed && e.data.keepAlive) {
          var n = e;
          Pt.prepatch(n, n);
        } else {
          (e.componentInstance = function (e, t) {
            var n = {
              _isComponent: !0,
              _parentVnode: e,
              parent: t
            },
                i = e.data.inlineTemplate;
            r(i) && (n.render = i.render, n.staticRenderFns = i.staticRenderFns);
            return new e.componentOptions.Ctor(n);
          }(e, Qt)).$mount(t ? e.elm : void 0, t);
        }
      },
      prepatch: function prepatch(e, t) {
        var n = t.componentOptions;
        !function (e, t, n, o, r) {
          0;
          var a = o.data.scopedSlots,
              s = e.$scopedSlots,
              l = !!(a && !a.$stable || s !== i && !s.$stable || a && e.$scopedSlots.$key !== a.$key),
              c = !!(r || e.$options._renderChildren || l);
          e.$options._parentVnode = o, e.$vnode = o, e._vnode && (e._vnode.parent = o);

          if (e.$options._renderChildren = r, e.$attrs = o.data.attrs || i, e.$listeners = n || i, t && e.$options.props) {
            Se(!1);

            for (var d = e._props, u = e.$options._propKeys || [], f = 0; f < u.length; f++) {
              var p = u[f],
                  h = e.$options.props;
              d[p] = Fe(p, h, t, e);
            }

            Se(!0), e.$options.propsData = t;
          }

          n = n || i;
          var g = e.$options._parentListeners;
          e.$options._parentListeners = n, Jt(e, n, g), c && (e.$slots = ht(r, o.context), e.$forceUpdate());
          0;
        }(t.componentInstance = e.componentInstance, n.propsData, n.listeners, t, n.children);
      },
      insert: function insert(e) {
        var t,
            n = e.context,
            i = e.componentInstance;
        i._isMounted || (i._isMounted = !0, tn(i, "mounted")), e.data.keepAlive && (n._isMounted ? ((t = i)._inactive = !1, on.push(t)) : en(i, !0));
      },
      destroy: function destroy(e) {
        var t = e.componentInstance;
        t._isDestroyed || (e.data.keepAlive ? function e(t, n) {
          if (n && (t._directInactive = !0, Zt(t))) return;

          if (!t._inactive) {
            t._inactive = !0;

            for (var i = 0; i < t.$children.length; i++) {
              e(t.$children[i]);
            }

            tn(t, "deactivated");
          }
        }(t, !0) : t.$destroy());
      }
    },
        Bt = Object.keys(Pt);

    function jt(e, t, n, s, c) {
      if (!o(e)) {
        var d = n.$options._base;

        if (l(e) && (e = d.extend(e)), "function" == typeof e) {
          var u;
          if (o(e.cid) && void 0 === (e = function (e, t) {
            if (a(e.error) && r(e.errorComp)) return e.errorComp;
            if (r(e.resolved)) return e.resolved;
            var n = Wt;
            n && r(e.owners) && -1 === e.owners.indexOf(n) && e.owners.push(n);
            if (a(e.loading) && r(e.loadingComp)) return e.loadingComp;

            if (n && !r(e.owners)) {
              var i = e.owners = [n],
                  s = !0,
                  c = null,
                  d = null;
              n.$on("hook:destroyed", function () {
                return A(i, n);
              });

              var u = function u(e) {
                for (var t = 0, n = i.length; t < n; t++) {
                  i[t].$forceUpdate();
                }

                e && (i.length = 0, null !== c && (clearTimeout(c), c = null), null !== d && (clearTimeout(d), d = null));
              },
                  f = P(function (n) {
                e.resolved = Gt(n, t), s ? i.length = 0 : u(!0);
              }),
                  h = P(function (t) {
                r(e.errorComp) && (e.error = !0, u(!0));
              }),
                  g = e(f, h);

              return l(g) && (p(g) ? o(e.resolved) && g.then(f, h) : p(g.component) && (g.component.then(f, h), r(g.error) && (e.errorComp = Gt(g.error, t)), r(g.loading) && (e.loadingComp = Gt(g.loading, t), 0 === g.delay ? e.loading = !0 : c = setTimeout(function () {
                c = null, o(e.resolved) && o(e.error) && (e.loading = !0, u(!1));
              }, g.delay || 200)), r(g.timeout) && (d = setTimeout(function () {
                d = null, o(e.resolved) && h(null);
              }, g.timeout)))), s = !1, e.loading ? e.loadingComp : e.resolved;
            }
          }(u = e, d))) return function (e, t, n, i, o) {
            var r = ye();
            return r.asyncFactory = e, r.asyncMeta = {
              data: t,
              context: n,
              children: i,
              tag: o
            }, r;
          }(u, t, n, s, c);
          t = t || {}, wn(e), r(t.model) && function (e, t) {
            var n = e.model && e.model.prop || "value",
                i = e.model && e.model.event || "input";
            (t.attrs || (t.attrs = {}))[n] = t.model.value;
            var o = t.on || (t.on = {}),
                a = o[i],
                s = t.model.callback;
            r(a) ? (Array.isArray(a) ? -1 === a.indexOf(s) : a !== s) && (o[i] = [s].concat(a)) : o[i] = s;
          }(e.options, t);

          var f = function (e, t, n) {
            var i = t.options.props;

            if (!o(i)) {
              var a = {},
                  s = e.attrs,
                  l = e.props;
              if (r(s) || r(l)) for (var c in i) {
                var d = T(c);
                dt(a, l, c, d, !0) || dt(a, s, c, d, !1);
              }
              return a;
            }
          }(t, e);

          if (a(e.options.functional)) return function (e, t, n, o, a) {
            var s = e.options,
                l = {},
                c = s.props;
            if (r(c)) for (var d in c) {
              l[d] = Fe(d, c, t || i);
            } else r(n.attrs) && Rt(l, n.attrs), r(n.props) && Rt(l, n.props);
            var u = new Lt(n, l, a, o, e),
                f = s.render.call(null, u._c, u);
            if (f instanceof me) return $t(f, n, u.parent, s, u);

            if (Array.isArray(f)) {
              for (var p = ut(f) || [], h = new Array(p.length), g = 0; g < p.length; g++) {
                h[g] = $t(p[g], n, u.parent, s, u);
              }

              return h;
            }
          }(e, f, t, n, s);
          var h = t.on;

          if (t.on = t.nativeOn, a(e.options["abstract"])) {
            var g = t.slot;
            t = {}, g && (t.slot = g);
          }

          !function (e) {
            for (var t = e.hook || (e.hook = {}), n = 0; n < Bt.length; n++) {
              var i = Bt[n],
                  o = t[i],
                  r = Pt[i];
              o === r || o && o._merged || (t[i] = o ? Ft(r, o) : r);
            }
          }(t);
          var m = e.options.name || c;
          return new me("vue-component-" + e.cid + (m ? "-" + m : ""), t, void 0, void 0, void 0, n, {
            Ctor: e,
            propsData: f,
            listeners: h,
            tag: c,
            children: s
          }, u);
        }
      }
    }

    function Ft(e, t) {
      var n = function n(_n7, i) {
        e(_n7, i), t(_n7, i);
      };

      return n._merged = !0, n;
    }

    function Ut(e, t, n, i, c, d) {
      return (Array.isArray(n) || s(n)) && (c = i, i = n, n = void 0), a(d) && (c = 2), function (e, t, n, i, s) {
        if (r(n) && r(n.__ob__)) return ye();
        r(n) && r(n.is) && (t = n.is);
        if (!t) return ye();
        0;
        Array.isArray(i) && "function" == typeof i[0] && ((n = n || {}).scopedSlots = {
          "default": i[0]
        }, i.length = 0);
        2 === s ? i = ut(i) : 1 === s && (i = function (e) {
          for (var t = 0; t < e.length; t++) {
            if (Array.isArray(e[t])) return Array.prototype.concat.apply([], e);
          }

          return e;
        }(i));
        var c, d;

        if ("string" == typeof t) {
          var u;
          d = e.$vnode && e.$vnode.ns || F.getTagNamespace(t), c = F.isReservedTag(t) ? new me(F.parsePlatformTagName(t), n, i, void 0, void 0, e) : n && n.pre || !r(u = je(e.$options, "components", t)) ? new me(t, n, i, void 0, void 0, e) : jt(u, n, e, i, t);
        } else c = jt(t, n, e, i);

        return Array.isArray(c) ? c : r(c) ? (r(d) && function e(t, n, i) {
          t.ns = n, "foreignObject" === t.tag && (n = void 0, i = !0);
          if (r(t.children)) for (var s = 0, l = t.children.length; s < l; s++) {
            var c = t.children[s];
            r(c.tag) && (o(c.ns) || a(i) && "svg" !== c.tag) && e(c, n, i);
          }
        }(c, d), r(n) && function (e) {
          l(e.style) && rt(e.style);
          l(e["class"]) && rt(e["class"]);
        }(n), c) : ye();
      }(e, t, n, i, c);
    }

    var Ht,
        Wt = null;

    function Gt(e, t) {
      return (e.__esModule || ce && "Module" === e[Symbol.toStringTag]) && (e = e["default"]), l(e) ? t.extend(e) : e;
    }

    function Vt(e) {
      return e.isComment && e.asyncFactory;
    }

    function qt(e) {
      if (Array.isArray(e)) for (var t = 0; t < e.length; t++) {
        var n = e[t];
        if (r(n) && (r(n.componentOptions) || Vt(n))) return n;
      }
    }

    function zt(e, t) {
      Ht.$on(e, t);
    }

    function Yt(e, t) {
      Ht.$off(e, t);
    }

    function Kt(e, t) {
      var n = Ht;
      return function i() {
        var o = t.apply(null, arguments);
        null !== o && n.$off(e, i);
      };
    }

    function Jt(e, t, n) {
      Ht = e, lt(t, n || {}, zt, Yt, Kt, e), Ht = void 0;
    }

    var Qt = null;

    function Xt(e) {
      var t = Qt;
      return Qt = e, function () {
        Qt = t;
      };
    }

    function Zt(e) {
      for (; e && (e = e.$parent);) {
        if (e._inactive) return !0;
      }

      return !1;
    }

    function en(e, t) {
      if (t) {
        if (e._directInactive = !1, Zt(e)) return;
      } else if (e._directInactive) return;

      if (e._inactive || null === e._inactive) {
        e._inactive = !1;

        for (var n = 0; n < e.$children.length; n++) {
          en(e.$children[n]);
        }

        tn(e, "activated");
      }
    }

    function tn(e, t) {
      he();
      var n = e.$options[t],
          i = t + " hook";
      if (n) for (var o = 0, r = n.length; o < r; o++) {
        Ve(n[o], e, null, e, i);
      }
      e._hasHookEvent && e.$emit("hook:" + t), ge();
    }

    var nn = [],
        on = [],
        rn = {},
        an = !1,
        sn = !1,
        ln = 0;
    var cn = 0,
        dn = Date.now;

    if (z && !Q) {
      var un = window.performance;
      un && "function" == typeof un.now && dn() > document.createEvent("Event").timeStamp && (dn = function dn() {
        return un.now();
      });
    }

    function fn() {
      var e, t;

      for (cn = dn(), sn = !0, nn.sort(function (e, t) {
        return e.id - t.id;
      }), ln = 0; ln < nn.length; ln++) {
        (e = nn[ln]).before && e.before(), t = e.id, rn[t] = null, e.run();
      }

      var n = on.slice(),
          i = nn.slice();
      ln = nn.length = on.length = 0, rn = {}, an = sn = !1, function (e) {
        for (var t = 0; t < e.length; t++) {
          e[t]._inactive = !0, en(e[t], !0);
        }
      }(n), function (e) {
        var t = e.length;

        for (; t--;) {
          var n = e[t],
              i = n.vm;
          i._watcher === n && i._isMounted && !i._isDestroyed && tn(i, "updated");
        }
      }(i), ae && F.devtools && ae.emit("flush");
    }

    var pn = 0,
        hn = function hn(e, t, n, i, o) {
      this.vm = e, o && (e._watcher = this), e._watchers.push(this), i ? (this.deep = !!i.deep, this.user = !!i.user, this.lazy = !!i.lazy, this.sync = !!i.sync, this.before = i.before) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = n, this.id = ++pn, this.active = !0, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new le(), this.newDepIds = new le(), this.expression = "", "function" == typeof t ? this.getter = t : (this.getter = function (e) {
        if (!G.test(e)) {
          var t = e.split(".");
          return function (e) {
            for (var n = 0; n < t.length; n++) {
              if (!e) return;
              e = e[t[n]];
            }

            return e;
          };
        }
      }(t), this.getter || (this.getter = D)), this.value = this.lazy ? void 0 : this.get();
    };

    hn.prototype.get = function () {
      var e;
      he(this);
      var t = this.vm;

      try {
        e = this.getter.call(t, t);
      } catch (e) {
        if (!this.user) throw e;
        Ge(e, t, 'getter for watcher "' + this.expression + '"');
      } finally {
        this.deep && rt(e), ge(), this.cleanupDeps();
      }

      return e;
    }, hn.prototype.addDep = function (e) {
      var t = e.id;
      this.newDepIds.has(t) || (this.newDepIds.add(t), this.newDeps.push(e), this.depIds.has(t) || e.addSub(this));
    }, hn.prototype.cleanupDeps = function () {
      for (var e = this.deps.length; e--;) {
        var t = this.deps[e];
        this.newDepIds.has(t.id) || t.removeSub(this);
      }

      var n = this.depIds;
      this.depIds = this.newDepIds, this.newDepIds = n, this.newDepIds.clear(), n = this.deps, this.deps = this.newDeps, this.newDeps = n, this.newDeps.length = 0;
    }, hn.prototype.update = function () {
      this.lazy ? this.dirty = !0 : this.sync ? this.run() : function (e) {
        var t = e.id;

        if (null == rn[t]) {
          if (rn[t] = !0, sn) {
            for (var n = nn.length - 1; n > ln && nn[n].id > e.id;) {
              n--;
            }

            nn.splice(n + 1, 0, e);
          } else nn.push(e);

          an || (an = !0, it(fn));
        }
      }(this);
    }, hn.prototype.run = function () {
      if (this.active) {
        var e = this.get();

        if (e !== this.value || l(e) || this.deep) {
          var t = this.value;
          if (this.value = e, this.user) try {
            this.cb.call(this.vm, e, t);
          } catch (e) {
            Ge(e, this.vm, 'callback for watcher "' + this.expression + '"');
          } else this.cb.call(this.vm, e, t);
        }
      }
    }, hn.prototype.evaluate = function () {
      this.value = this.get(), this.dirty = !1;
    }, hn.prototype.depend = function () {
      for (var e = this.deps.length; e--;) {
        this.deps[e].depend();
      }
    }, hn.prototype.teardown = function () {
      if (this.active) {
        this.vm._isBeingDestroyed || A(this.vm._watchers, this);

        for (var e = this.deps.length; e--;) {
          this.deps[e].removeSub(this);
        }

        this.active = !1;
      }
    };
    var gn = {
      enumerable: !0,
      configurable: !0,
      get: D,
      set: D
    };

    function mn(e, t, n) {
      gn.get = function () {
        return this[t][n];
      }, gn.set = function (e) {
        this[t][n] = e;
      }, Object.defineProperty(e, n, gn);
    }

    function vn(e) {
      e._watchers = [];
      var t = e.$options;
      t.props && function (e, t) {
        var n = e.$options.propsData || {},
            i = e._props = {},
            o = e.$options._propKeys = [];
        e.$parent && Se(!1);

        var r = function r(_r5) {
          o.push(_r5);
          var a = Fe(_r5, t, n, e);
          ke(i, _r5, a), _r5 in e || mn(e, "_props", _r5);
        };

        for (var a in t) {
          r(a);
        }

        Se(!0);
      }(e, t.props), t.methods && function (e, t) {
        e.$options.props;

        for (var n in t) {
          e[n] = "function" != typeof t[n] ? D : k(t[n], e);
        }
      }(e, t.methods), t.data ? function (e) {
        var t = e.$options.data;
        d(t = e._data = "function" == typeof t ? function (e, t) {
          he();

          try {
            return e.call(t, t);
          } catch (e) {
            return Ge(e, t, "data()"), {};
          } finally {
            ge();
          }
        }(t, e) : t || {}) || (t = {});
        var n = Object.keys(t),
            i = e.$options.props,
            o = (e.$options.methods, n.length);

        for (; o--;) {
          var r = n[o];
          0, i && E(i, r) || H(r) || mn(e, "_data", r);
        }

        Te(t, !0);
      }(e) : Te(e._data = {}, !0), t.computed && function (e, t) {
        var n = e._computedWatchers = Object.create(null),
            i = re();

        for (var o in t) {
          var r = t[o],
              a = "function" == typeof r ? r : r.get;
          0, i || (n[o] = new hn(e, a || D, D, yn)), o in e || An(e, o, r);
        }
      }(e, t.computed), t.watch && t.watch !== ne && function (e, t) {
        for (var n in t) {
          var i = t[n];
          if (Array.isArray(i)) for (var o = 0; o < i.length; o++) {
            _n(e, n, i[o]);
          } else _n(e, n, i);
        }
      }(e, t.watch);
    }

    var yn = {
      lazy: !0
    };

    function An(e, t, n) {
      var i = !re();
      "function" == typeof n ? (gn.get = i ? bn(t) : En(n), gn.set = D) : (gn.get = n.get ? i && !1 !== n.cache ? bn(t) : En(n.get) : D, gn.set = n.set || D), Object.defineProperty(e, t, gn);
    }

    function bn(e) {
      return function () {
        var t = this._computedWatchers && this._computedWatchers[e];
        if (t) return t.dirty && t.evaluate(), fe.target && t.depend(), t.value;
      };
    }

    function En(e) {
      return function () {
        return e.call(this, this);
      };
    }

    function _n(e, t, n, i) {
      return d(n) && (i = n, n = n.handler), "string" == typeof n && (n = e[n]), e.$watch(t, n, i);
    }

    var Cn = 0;

    function wn(e) {
      var t = e.options;

      if (e["super"]) {
        var n = wn(e["super"]);

        if (n !== e.superOptions) {
          e.superOptions = n;

          var i = function (e) {
            var t,
                n = e.options,
                i = e.sealedOptions;

            for (var o in n) {
              n[o] !== i[o] && (t || (t = {}), t[o] = n[o]);
            }

            return t;
          }(e);

          i && M(e.extendOptions, i), (t = e.options = Be(n, e.extendOptions)).name && (t.components[t.name] = e);
        }
      }

      return t;
    }

    function Sn(e) {
      this._init(e);
    }

    function In(e) {
      e.cid = 0;
      var t = 1;

      e.extend = function (e) {
        e = e || {};
        var n = this,
            i = n.cid,
            o = e._Ctor || (e._Ctor = {});
        if (o[i]) return o[i];
        var r = e.name || n.options.name;

        var a = function a(e) {
          this._init(e);
        };

        return (a.prototype = Object.create(n.prototype)).constructor = a, a.cid = t++, a.options = Be(n.options, e), a["super"] = n, a.options.props && function (e) {
          var t = e.options.props;

          for (var n in t) {
            mn(e.prototype, "_props", n);
          }
        }(a), a.options.computed && function (e) {
          var t = e.options.computed;

          for (var n in t) {
            An(e.prototype, n, t[n]);
          }
        }(a), a.extend = n.extend, a.mixin = n.mixin, a.use = n.use, B.forEach(function (e) {
          a[e] = n[e];
        }), r && (a.options.components[r] = a), a.superOptions = n.options, a.extendOptions = e, a.sealedOptions = M({}, a.options), o[i] = a, a;
      };
    }

    function Tn(e) {
      return e && (e.Ctor.options.name || e.tag);
    }

    function kn(e, t) {
      return Array.isArray(e) ? e.indexOf(t) > -1 : "string" == typeof e ? e.split(",").indexOf(t) > -1 : !!u(e) && e.test(t);
    }

    function xn(e, t) {
      var n = e.cache,
          i = e.keys,
          o = e._vnode;

      for (var r in n) {
        var a = n[r];

        if (a) {
          var s = Tn(a.componentOptions);
          s && !t(s) && Mn(n, r, i, o);
        }
      }
    }

    function Mn(e, t, n, i) {
      var o = e[t];
      !o || i && o.tag === i.tag || o.componentInstance.$destroy(), e[t] = null, A(n, t);
    }

    !function (e) {
      e.prototype._init = function (e) {
        var t = this;
        t._uid = Cn++, t._isVue = !0, e && e._isComponent ? function (e, t) {
          var n = e.$options = Object.create(e.constructor.options),
              i = t._parentVnode;
          n.parent = t.parent, n._parentVnode = i;
          var o = i.componentOptions;
          n.propsData = o.propsData, n._parentListeners = o.listeners, n._renderChildren = o.children, n._componentTag = o.tag, t.render && (n.render = t.render, n.staticRenderFns = t.staticRenderFns);
        }(t, e) : t.$options = Be(wn(t.constructor), e || {}, t), t._renderProxy = t, t._self = t, function (e) {
          var t = e.$options,
              n = t.parent;

          if (n && !t["abstract"]) {
            for (; n.$options["abstract"] && n.$parent;) {
              n = n.$parent;
            }

            n.$children.push(e);
          }

          e.$parent = n, e.$root = n ? n.$root : e, e.$children = [], e.$refs = {}, e._watcher = null, e._inactive = null, e._directInactive = !1, e._isMounted = !1, e._isDestroyed = !1, e._isBeingDestroyed = !1;
        }(t), function (e) {
          e._events = Object.create(null), e._hasHookEvent = !1;
          var t = e.$options._parentListeners;
          t && Jt(e, t);
        }(t), function (e) {
          e._vnode = null, e._staticTrees = null;
          var t = e.$options,
              n = e.$vnode = t._parentVnode,
              o = n && n.context;
          e.$slots = ht(t._renderChildren, o), e.$scopedSlots = i, e._c = function (t, n, i, o) {
            return Ut(e, t, n, i, o, !1);
          }, e.$createElement = function (t, n, i, o) {
            return Ut(e, t, n, i, o, !0);
          };
          var r = n && n.data;
          ke(e, "$attrs", r && r.attrs || i, null, !0), ke(e, "$listeners", t._parentListeners || i, null, !0);
        }(t), tn(t, "beforeCreate"), function (e) {
          var t = pt(e.$options.inject, e);
          t && (Se(!1), Object.keys(t).forEach(function (n) {
            ke(e, n, t[n]);
          }), Se(!0));
        }(t), vn(t), function (e) {
          var t = e.$options.provide;
          t && (e._provided = "function" == typeof t ? t.call(e) : t);
        }(t), tn(t, "created"), t.$options.el && t.$mount(t.$options.el);
      };
    }(Sn), function (e) {
      var t = {
        get: function get() {
          return this._data;
        }
      },
          n = {
        get: function get() {
          return this._props;
        }
      };
      Object.defineProperty(e.prototype, "$data", t), Object.defineProperty(e.prototype, "$props", n), e.prototype.$set = xe, e.prototype.$delete = Me, e.prototype.$watch = function (e, t, n) {
        if (d(t)) return _n(this, e, t, n);
        (n = n || {}).user = !0;
        var i = new hn(this, e, t, n);
        if (n.immediate) try {
          t.call(this, i.value);
        } catch (e) {
          Ge(e, this, 'callback for immediate watcher "' + i.expression + '"');
        }
        return function () {
          i.teardown();
        };
      };
    }(Sn), function (e) {
      var t = /^hook:/;
      e.prototype.$on = function (e, n) {
        var i = this;
        if (Array.isArray(e)) for (var o = 0, r = e.length; o < r; o++) {
          i.$on(e[o], n);
        } else (i._events[e] || (i._events[e] = [])).push(n), t.test(e) && (i._hasHookEvent = !0);
        return i;
      }, e.prototype.$once = function (e, t) {
        var n = this;

        function i() {
          n.$off(e, i), t.apply(n, arguments);
        }

        return i.fn = t, n.$on(e, i), n;
      }, e.prototype.$off = function (e, t) {
        var n = this;
        if (!arguments.length) return n._events = Object.create(null), n;

        if (Array.isArray(e)) {
          for (var i = 0, o = e.length; i < o; i++) {
            n.$off(e[i], t);
          }

          return n;
        }

        var r,
            a = n._events[e];
        if (!a) return n;
        if (!t) return n._events[e] = null, n;

        for (var s = a.length; s--;) {
          if ((r = a[s]) === t || r.fn === t) {
            a.splice(s, 1);
            break;
          }
        }

        return n;
      }, e.prototype.$emit = function (e) {
        var t = this,
            n = t._events[e];

        if (n) {
          n = n.length > 1 ? x(n) : n;

          for (var i = x(arguments, 1), o = 'event handler for "' + e + '"', r = 0, a = n.length; r < a; r++) {
            Ve(n[r], t, i, t, o);
          }
        }

        return t;
      };
    }(Sn), function (e) {
      e.prototype._update = function (e, t) {
        var n = this,
            i = n.$el,
            o = n._vnode,
            r = Xt(n);
        n._vnode = e, n.$el = o ? n.__patch__(o, e) : n.__patch__(n.$el, e, t, !1), r(), i && (i.__vue__ = null), n.$el && (n.$el.__vue__ = n), n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el);
      }, e.prototype.$forceUpdate = function () {
        this._watcher && this._watcher.update();
      }, e.prototype.$destroy = function () {
        var e = this;

        if (!e._isBeingDestroyed) {
          tn(e, "beforeDestroy"), e._isBeingDestroyed = !0;
          var t = e.$parent;
          !t || t._isBeingDestroyed || e.$options["abstract"] || A(t.$children, e), e._watcher && e._watcher.teardown();

          for (var n = e._watchers.length; n--;) {
            e._watchers[n].teardown();
          }

          e._data.__ob__ && e._data.__ob__.vmCount--, e._isDestroyed = !0, e.__patch__(e._vnode, null), tn(e, "destroyed"), e.$off(), e.$el && (e.$el.__vue__ = null), e.$vnode && (e.$vnode.parent = null);
        }
      };
    }(Sn), function (e) {
      Ot(e.prototype), e.prototype.$nextTick = function (e) {
        return it(e, this);
      }, e.prototype._render = function () {
        var e,
            t = this,
            n = t.$options,
            i = n.render,
            o = n._parentVnode;
        o && (t.$scopedSlots = mt(o.data.scopedSlots, t.$slots, t.$scopedSlots)), t.$vnode = o;

        try {
          Wt = t, e = i.call(t._renderProxy, t.$createElement);
        } catch (n) {
          Ge(n, t, "render"), e = t._vnode;
        } finally {
          Wt = null;
        }

        return Array.isArray(e) && 1 === e.length && (e = e[0]), e instanceof me || (e = ye()), e.parent = o, e;
      };
    }(Sn);
    var Nn = [String, RegExp, Array],
        Dn = {
      KeepAlive: {
        name: "keep-alive",
        "abstract": !0,
        props: {
          include: Nn,
          exclude: Nn,
          max: [String, Number]
        },
        created: function created() {
          this.cache = Object.create(null), this.keys = [];
        },
        destroyed: function destroyed() {
          for (var e in this.cache) {
            Mn(this.cache, e, this.keys);
          }
        },
        mounted: function mounted() {
          var e = this;
          this.$watch("include", function (t) {
            xn(e, function (e) {
              return kn(t, e);
            });
          }), this.$watch("exclude", function (t) {
            xn(e, function (e) {
              return !kn(t, e);
            });
          });
        },
        render: function render() {
          var e = this.$slots["default"],
              t = qt(e),
              n = t && t.componentOptions;

          if (n) {
            var i = Tn(n),
                o = this.include,
                r = this.exclude;
            if (o && (!i || !kn(o, i)) || r && i && kn(r, i)) return t;
            var a = this.cache,
                s = this.keys,
                l = null == t.key ? n.Ctor.cid + (n.tag ? "::" + n.tag : "") : t.key;
            a[l] ? (t.componentInstance = a[l].componentInstance, A(s, l), s.push(l)) : (a[l] = t, s.push(l), this.max && s.length > parseInt(this.max) && Mn(a, s[0], s, this._vnode)), t.data.keepAlive = !0;
          }

          return t || e && e[0];
        }
      }
    };
    !function (e) {
      var t = {
        get: function get() {
          return F;
        }
      };
      Object.defineProperty(e, "config", t), e.util = {
        warn: de,
        extend: M,
        mergeOptions: Be,
        defineReactive: ke
      }, e.set = xe, e["delete"] = Me, e.nextTick = it, e.observable = function (e) {
        return Te(e), e;
      }, e.options = Object.create(null), B.forEach(function (t) {
        e.options[t + "s"] = Object.create(null);
      }), e.options._base = e, M(e.options.components, Dn), function (e) {
        e.use = function (e) {
          var t = this._installedPlugins || (this._installedPlugins = []);
          if (t.indexOf(e) > -1) return this;
          var n = x(arguments, 1);
          return n.unshift(this), "function" == typeof e.install ? e.install.apply(e, n) : "function" == typeof e && e.apply(null, n), t.push(e), this;
        };
      }(e), function (e) {
        e.mixin = function (e) {
          return this.options = Be(this.options, e), this;
        };
      }(e), In(e), function (e) {
        B.forEach(function (t) {
          e[t] = function (e, n) {
            return n ? ("component" === t && d(n) && (n.name = n.name || e, n = this.options._base.extend(n)), "directive" === t && "function" == typeof n && (n = {
              bind: n,
              update: n
            }), this.options[t + "s"][e] = n, n) : this.options[t + "s"][e];
          };
        });
      }(e);
    }(Sn), Object.defineProperty(Sn.prototype, "$isServer", {
      get: re
    }), Object.defineProperty(Sn.prototype, "$ssrContext", {
      get: function get() {
        return this.$vnode && this.$vnode.ssrContext;
      }
    }), Object.defineProperty(Sn, "FunctionalRenderContext", {
      value: Lt
    }), Sn.version = "2.6.12";

    var On = m("style,class"),
        Ln = m("input,textarea,option,select,progress"),
        $n = function $n(e, t, n) {
      return "value" === n && Ln(e) && "button" !== t || "selected" === n && "option" === e || "checked" === n && "input" === e || "muted" === n && "video" === e;
    },
        Rn = m("contenteditable,draggable,spellcheck"),
        Pn = m("events,caret,typing,plaintext-only"),
        Bn = m("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),
        jn = "http://www.w3.org/1999/xlink",
        Fn = function Fn(e) {
      return ":" === e.charAt(5) && "xlink" === e.slice(0, 5);
    },
        Un = function Un(e) {
      return Fn(e) ? e.slice(6, e.length) : "";
    },
        Hn = function Hn(e) {
      return null == e || !1 === e;
    };

    function Wn(e) {
      for (var t = e.data, n = e, i = e; r(i.componentInstance);) {
        (i = i.componentInstance._vnode) && i.data && (t = Gn(i.data, t));
      }

      for (; r(n = n.parent);) {
        n && n.data && (t = Gn(t, n.data));
      }

      return function (e, t) {
        if (r(e) || r(t)) return Vn(e, qn(t));
        return "";
      }(t.staticClass, t["class"]);
    }

    function Gn(e, t) {
      return {
        staticClass: Vn(e.staticClass, t.staticClass),
        "class": r(e["class"]) ? [e["class"], t["class"]] : t["class"]
      };
    }

    function Vn(e, t) {
      return e ? t ? e + " " + t : e : t || "";
    }

    function qn(e) {
      return Array.isArray(e) ? function (e) {
        for (var t, n = "", i = 0, o = e.length; i < o; i++) {
          r(t = qn(e[i])) && "" !== t && (n && (n += " "), n += t);
        }

        return n;
      }(e) : l(e) ? function (e) {
        var t = "";

        for (var n in e) {
          e[n] && (t && (t += " "), t += n);
        }

        return t;
      }(e) : "string" == typeof e ? e : "";
    }

    var zn = {
      svg: "http://www.w3.org/2000/svg",
      math: "http://www.w3.org/1998/Math/MathML"
    },
        Yn = m("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),
        Kn = m("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0),
        Jn = function Jn(e) {
      return Yn(e) || Kn(e);
    };

    function Qn(e) {
      return Kn(e) ? "svg" : "math" === e ? "math" : void 0;
    }

    var Xn = Object.create(null);
    var Zn = m("text,number,password,search,email,tel,url");

    function ei(e) {
      if ("string" == typeof e) {
        var t = document.querySelector(e);
        return t || document.createElement("div");
      }

      return e;
    }

    var ti = Object.freeze({
      createElement: function createElement(e, t) {
        var n = document.createElement(e);
        return "select" !== e || t.data && t.data.attrs && void 0 !== t.data.attrs.multiple && n.setAttribute("multiple", "multiple"), n;
      },
      createElementNS: function createElementNS(e, t) {
        return document.createElementNS(zn[e], t);
      },
      createTextNode: function createTextNode(e) {
        return document.createTextNode(e);
      },
      createComment: function createComment(e) {
        return document.createComment(e);
      },
      insertBefore: function insertBefore(e, t, n) {
        e.insertBefore(t, n);
      },
      removeChild: function removeChild(e, t) {
        e.removeChild(t);
      },
      appendChild: function appendChild(e, t) {
        e.appendChild(t);
      },
      parentNode: function parentNode(e) {
        return e.parentNode;
      },
      nextSibling: function nextSibling(e) {
        return e.nextSibling;
      },
      tagName: function tagName(e) {
        return e.tagName;
      },
      setTextContent: function setTextContent(e, t) {
        e.textContent = t;
      },
      setStyleScope: function setStyleScope(e, t) {
        e.setAttribute(t, "");
      }
    }),
        ni = {
      create: function create(e, t) {
        ii(t);
      },
      update: function update(e, t) {
        e.data.ref !== t.data.ref && (ii(e, !0), ii(t));
      },
      destroy: function destroy(e) {
        ii(e, !0);
      }
    };

    function ii(e, t) {
      var n = e.data.ref;

      if (r(n)) {
        var i = e.context,
            o = e.componentInstance || e.elm,
            a = i.$refs;
        t ? Array.isArray(a[n]) ? A(a[n], o) : a[n] === o && (a[n] = void 0) : e.data.refInFor ? Array.isArray(a[n]) ? a[n].indexOf(o) < 0 && a[n].push(o) : a[n] = [o] : a[n] = o;
      }
    }

    var oi = new me("", {}, []),
        ri = ["create", "activate", "update", "remove", "destroy"];

    function ai(e, t) {
      return e.key === t.key && (e.tag === t.tag && e.isComment === t.isComment && r(e.data) === r(t.data) && function (e, t) {
        if ("input" !== e.tag) return !0;
        var n,
            i = r(n = e.data) && r(n = n.attrs) && n.type,
            o = r(n = t.data) && r(n = n.attrs) && n.type;
        return i === o || Zn(i) && Zn(o);
      }(e, t) || a(e.isAsyncPlaceholder) && e.asyncFactory === t.asyncFactory && o(t.asyncFactory.error));
    }

    function si(e, t, n) {
      var i,
          o,
          a = {};

      for (i = t; i <= n; ++i) {
        r(o = e[i].key) && (a[o] = i);
      }

      return a;
    }

    var li = {
      create: ci,
      update: ci,
      destroy: function destroy(e) {
        ci(e, oi);
      }
    };

    function ci(e, t) {
      (e.data.directives || t.data.directives) && function (e, t) {
        var n,
            i,
            o,
            r = e === oi,
            a = t === oi,
            s = ui(e.data.directives, e.context),
            l = ui(t.data.directives, t.context),
            c = [],
            d = [];

        for (n in l) {
          i = s[n], o = l[n], i ? (o.oldValue = i.value, o.oldArg = i.arg, pi(o, "update", t, e), o.def && o.def.componentUpdated && d.push(o)) : (pi(o, "bind", t, e), o.def && o.def.inserted && c.push(o));
        }

        if (c.length) {
          var u = function u() {
            for (var n = 0; n < c.length; n++) {
              pi(c[n], "inserted", t, e);
            }
          };

          r ? ct(t, "insert", u) : u();
        }

        d.length && ct(t, "postpatch", function () {
          for (var n = 0; n < d.length; n++) {
            pi(d[n], "componentUpdated", t, e);
          }
        });
        if (!r) for (n in s) {
          l[n] || pi(s[n], "unbind", e, e, a);
        }
      }(e, t);
    }

    var di = Object.create(null);

    function ui(e, t) {
      var n,
          i,
          o = Object.create(null);
      if (!e) return o;

      for (n = 0; n < e.length; n++) {
        (i = e[n]).modifiers || (i.modifiers = di), o[fi(i)] = i, i.def = je(t.$options, "directives", i.name);
      }

      return o;
    }

    function fi(e) {
      return e.rawName || e.name + "." + Object.keys(e.modifiers || {}).join(".");
    }

    function pi(e, t, n, i, o) {
      var r = e.def && e.def[t];
      if (r) try {
        r(n.elm, e, n, i, o);
      } catch (i) {
        Ge(i, n.context, "directive " + e.name + " " + t + " hook");
      }
    }

    var hi = [ni, li];

    function gi(e, t) {
      var n = t.componentOptions;

      if (!(r(n) && !1 === n.Ctor.options.inheritAttrs || o(e.data.attrs) && o(t.data.attrs))) {
        var i,
            a,
            s = t.elm,
            l = e.data.attrs || {},
            c = t.data.attrs || {};

        for (i in r(c.__ob__) && (c = t.data.attrs = M({}, c)), c) {
          a = c[i], l[i] !== a && mi(s, i, a);
        }

        for (i in (Q || Z) && c.value !== l.value && mi(s, "value", c.value), l) {
          o(c[i]) && (Fn(i) ? s.removeAttributeNS(jn, Un(i)) : Rn(i) || s.removeAttribute(i));
        }
      }
    }

    function mi(e, t, n) {
      e.tagName.indexOf("-") > -1 ? vi(e, t, n) : Bn(t) ? Hn(n) ? e.removeAttribute(t) : (n = "allowfullscreen" === t && "EMBED" === e.tagName ? "true" : t, e.setAttribute(t, n)) : Rn(t) ? e.setAttribute(t, function (e, t) {
        return Hn(t) || "false" === t ? "false" : "contenteditable" === e && Pn(t) ? t : "true";
      }(t, n)) : Fn(t) ? Hn(n) ? e.removeAttributeNS(jn, Un(t)) : e.setAttributeNS(jn, t, n) : vi(e, t, n);
    }

    function vi(e, t, n) {
      if (Hn(n)) e.removeAttribute(t);else {
        if (Q && !X && "TEXTAREA" === e.tagName && "placeholder" === t && "" !== n && !e.__ieph) {
          var i = function i(t) {
            t.stopImmediatePropagation(), e.removeEventListener("input", i);
          };

          e.addEventListener("input", i), e.__ieph = !0;
        }

        e.setAttribute(t, n);
      }
    }

    var yi = {
      create: gi,
      update: gi
    };

    function Ai(e, t) {
      var n = t.elm,
          i = t.data,
          a = e.data;

      if (!(o(i.staticClass) && o(i["class"]) && (o(a) || o(a.staticClass) && o(a["class"])))) {
        var s = Wn(t),
            l = n._transitionClasses;
        r(l) && (s = Vn(s, qn(l))), s !== n._prevClass && (n.setAttribute("class", s), n._prevClass = s);
      }
    }

    var bi,
        Ei,
        _i,
        Ci,
        wi,
        Si,
        Ii = {
      create: Ai,
      update: Ai
    },
        Ti = /[\w).+\-_$\]]/;

    function ki(e) {
      var t,
          n,
          i,
          o,
          r,
          a = !1,
          s = !1,
          l = !1,
          c = !1,
          d = 0,
          u = 0,
          f = 0,
          p = 0;

      for (i = 0; i < e.length; i++) {
        if (n = t, t = e.charCodeAt(i), a) 39 === t && 92 !== n && (a = !1);else if (s) 34 === t && 92 !== n && (s = !1);else if (l) 96 === t && 92 !== n && (l = !1);else if (c) 47 === t && 92 !== n && (c = !1);else if (124 !== t || 124 === e.charCodeAt(i + 1) || 124 === e.charCodeAt(i - 1) || d || u || f) {
          switch (t) {
            case 34:
              s = !0;
              break;

            case 39:
              a = !0;
              break;

            case 96:
              l = !0;
              break;

            case 40:
              f++;
              break;

            case 41:
              f--;
              break;

            case 91:
              u++;
              break;

            case 93:
              u--;
              break;

            case 123:
              d++;
              break;

            case 125:
              d--;
          }

          if (47 === t) {
            for (var h = i - 1, g = void 0; h >= 0 && " " === (g = e.charAt(h)); h--) {
              ;
            }

            g && Ti.test(g) || (c = !0);
          }
        } else void 0 === o ? (p = i + 1, o = e.slice(0, i).trim()) : m();
      }

      function m() {
        (r || (r = [])).push(e.slice(p, i).trim()), p = i + 1;
      }

      if (void 0 === o ? o = e.slice(0, i).trim() : 0 !== p && m(), r) for (i = 0; i < r.length; i++) {
        o = xi(o, r[i]);
      }
      return o;
    }

    function xi(e, t) {
      var n = t.indexOf("(");
      if (n < 0) return '_f("' + t + '")(' + e + ")";
      var i = t.slice(0, n),
          o = t.slice(n + 1);
      return '_f("' + i + '")(' + e + (")" !== o ? "," + o : o);
    }

    function Mi(e, t) {
      console.error("[Vue compiler]: " + e);
    }

    function Ni(e, t) {
      return e ? e.map(function (e) {
        return e[t];
      }).filter(function (e) {
        return e;
      }) : [];
    }

    function Di(e, t, n, i, o) {
      (e.props || (e.props = [])).push(Ui({
        name: t,
        value: n,
        dynamic: o
      }, i)), e.plain = !1;
    }

    function Oi(e, t, n, i, o) {
      (o ? e.dynamicAttrs || (e.dynamicAttrs = []) : e.attrs || (e.attrs = [])).push(Ui({
        name: t,
        value: n,
        dynamic: o
      }, i)), e.plain = !1;
    }

    function Li(e, t, n, i) {
      e.attrsMap[t] = n, e.attrsList.push(Ui({
        name: t,
        value: n
      }, i));
    }

    function $i(e, t, n, i, o, r, a, s) {
      (e.directives || (e.directives = [])).push(Ui({
        name: t,
        rawName: n,
        value: i,
        arg: o,
        isDynamicArg: r,
        modifiers: a
      }, s)), e.plain = !1;
    }

    function Ri(e, t, n) {
      return n ? "_p(" + t + ',"' + e + '")' : e + t;
    }

    function Pi(e, t, n, o, r, a, s, l) {
      var c;
      (o = o || i).right ? l ? t = "(" + t + ")==='click'?'contextmenu':(" + t + ")" : "click" === t && (t = "contextmenu", delete o.right) : o.middle && (l ? t = "(" + t + ")==='click'?'mouseup':(" + t + ")" : "click" === t && (t = "mouseup")), o.capture && (delete o.capture, t = Ri("!", t, l)), o.once && (delete o.once, t = Ri("~", t, l)), o.passive && (delete o.passive, t = Ri("&", t, l)), o["native"] ? (delete o["native"], c = e.nativeEvents || (e.nativeEvents = {})) : c = e.events || (e.events = {});
      var d = Ui({
        value: n.trim(),
        dynamic: l
      }, s);
      o !== i && (d.modifiers = o);
      var u = c[t];
      Array.isArray(u) ? r ? u.unshift(d) : u.push(d) : c[t] = u ? r ? [d, u] : [u, d] : d, e.plain = !1;
    }

    function Bi(e, t, n) {
      var i = ji(e, ":" + t) || ji(e, "v-bind:" + t);
      if (null != i) return ki(i);

      if (!1 !== n) {
        var o = ji(e, t);
        if (null != o) return JSON.stringify(o);
      }
    }

    function ji(e, t, n) {
      var i;
      if (null != (i = e.attrsMap[t])) for (var o = e.attrsList, r = 0, a = o.length; r < a; r++) {
        if (o[r].name === t) {
          o.splice(r, 1);
          break;
        }
      }
      return n && delete e.attrsMap[t], i;
    }

    function Fi(e, t) {
      for (var n = e.attrsList, i = 0, o = n.length; i < o; i++) {
        var r = n[i];
        if (t.test(r.name)) return n.splice(i, 1), r;
      }
    }

    function Ui(e, t) {
      return t && (null != t.start && (e.start = t.start), null != t.end && (e.end = t.end)), e;
    }

    function Hi(e, t, n) {
      var i = n || {},
          o = i.number,
          r = "$$v";
      i.trim && (r = "(typeof $$v === 'string'? $$v.trim(): $$v)"), o && (r = "_n(" + r + ")");
      var a = Wi(t, r);
      e.model = {
        value: "(" + t + ")",
        expression: JSON.stringify(t),
        callback: "function ($$v) {" + a + "}"
      };
    }

    function Wi(e, t) {
      var n = function (e) {
        if (e = e.trim(), bi = e.length, e.indexOf("[") < 0 || e.lastIndexOf("]") < bi - 1) return (Ci = e.lastIndexOf(".")) > -1 ? {
          exp: e.slice(0, Ci),
          key: '"' + e.slice(Ci + 1) + '"'
        } : {
          exp: e,
          key: null
        };
        Ei = e, Ci = wi = Si = 0;

        for (; !Vi();) {
          qi(_i = Gi()) ? Yi(_i) : 91 === _i && zi(_i);
        }

        return {
          exp: e.slice(0, wi),
          key: e.slice(wi + 1, Si)
        };
      }(e);

      return null === n.key ? e + "=" + t : "$set(" + n.exp + ", " + n.key + ", " + t + ")";
    }

    function Gi() {
      return Ei.charCodeAt(++Ci);
    }

    function Vi() {
      return Ci >= bi;
    }

    function qi(e) {
      return 34 === e || 39 === e;
    }

    function zi(e) {
      var t = 1;

      for (wi = Ci; !Vi();) {
        if (qi(e = Gi())) Yi(e);else if (91 === e && t++, 93 === e && t--, 0 === t) {
          Si = Ci;
          break;
        }
      }
    }

    function Yi(e) {
      for (var t = e; !Vi() && (e = Gi()) !== t;) {
        ;
      }
    }

    var Ki;

    function Ji(e, t, n) {
      var i = Ki;
      return function o() {
        var r = t.apply(null, arguments);
        null !== r && Zi(e, o, n, i);
      };
    }

    var Qi = Ke && !(te && Number(te[1]) <= 53);

    function Xi(e, t, n, i) {
      if (Qi) {
        var o = cn,
            r = t;

        t = r._wrapper = function (e) {
          if (e.target === e.currentTarget || e.timeStamp >= o || e.timeStamp <= 0 || e.target.ownerDocument !== document) return r.apply(this, arguments);
        };
      }

      Ki.addEventListener(e, t, ie ? {
        capture: n,
        passive: i
      } : n);
    }

    function Zi(e, t, n, i) {
      (i || Ki).removeEventListener(e, t._wrapper || t, n);
    }

    function eo(e, t) {
      if (!o(e.data.on) || !o(t.data.on)) {
        var n = t.data.on || {},
            i = e.data.on || {};
        Ki = t.elm, function (e) {
          if (r(e.__r)) {
            var t = Q ? "change" : "input";
            e[t] = [].concat(e.__r, e[t] || []), delete e.__r;
          }

          r(e.__c) && (e.change = [].concat(e.__c, e.change || []), delete e.__c);
        }(n), lt(n, i, Xi, Zi, Ji, t.context), Ki = void 0;
      }
    }

    var to,
        no = {
      create: eo,
      update: eo
    };

    function io(e, t) {
      if (!o(e.data.domProps) || !o(t.data.domProps)) {
        var n,
            i,
            a = t.elm,
            s = e.data.domProps || {},
            l = t.data.domProps || {};

        for (n in r(l.__ob__) && (l = t.data.domProps = M({}, l)), s) {
          n in l || (a[n] = "");
        }

        for (n in l) {
          if (i = l[n], "textContent" === n || "innerHTML" === n) {
            if (t.children && (t.children.length = 0), i === s[n]) continue;
            1 === a.childNodes.length && a.removeChild(a.childNodes[0]);
          }

          if ("value" === n && "PROGRESS" !== a.tagName) {
            a._value = i;
            var c = o(i) ? "" : String(i);
            oo(a, c) && (a.value = c);
          } else if ("innerHTML" === n && Kn(a.tagName) && o(a.innerHTML)) {
            (to = to || document.createElement("div")).innerHTML = "<svg>" + i + "</svg>";

            for (var d = to.firstChild; a.firstChild;) {
              a.removeChild(a.firstChild);
            }

            for (; d.firstChild;) {
              a.appendChild(d.firstChild);
            }
          } else if (i !== s[n]) try {
            a[n] = i;
          } catch (e) {}
        }
      }
    }

    function oo(e, t) {
      return !e.composing && ("OPTION" === e.tagName || function (e, t) {
        var n = !0;

        try {
          n = document.activeElement !== e;
        } catch (e) {}

        return n && e.value !== t;
      }(e, t) || function (e, t) {
        var n = e.value,
            i = e._vModifiers;

        if (r(i)) {
          if (i.number) return g(n) !== g(t);
          if (i.trim) return n.trim() !== t.trim();
        }

        return n !== t;
      }(e, t));
    }

    var ro = {
      create: io,
      update: io
    },
        ao = _(function (e) {
      var t = {},
          n = /:(.+)/;
      return e.split(/;(?![^(]*\))/g).forEach(function (e) {
        if (e) {
          var i = e.split(n);
          i.length > 1 && (t[i[0].trim()] = i[1].trim());
        }
      }), t;
    });

    function so(e) {
      var t = lo(e.style);
      return e.staticStyle ? M(e.staticStyle, t) : t;
    }

    function lo(e) {
      return Array.isArray(e) ? N(e) : "string" == typeof e ? ao(e) : e;
    }

    var co,
        uo = /^--/,
        fo = /\s*!important$/,
        po = function po(e, t, n) {
      if (uo.test(t)) e.style.setProperty(t, n);else if (fo.test(n)) e.style.setProperty(T(t), n.replace(fo, ""), "important");else {
        var i = go(t);
        if (Array.isArray(n)) for (var o = 0, r = n.length; o < r; o++) {
          e.style[i] = n[o];
        } else e.style[i] = n;
      }
    },
        ho = ["Webkit", "Moz", "ms"],
        go = _(function (e) {
      if (co = co || document.createElement("div").style, "filter" !== (e = w(e)) && e in co) return e;

      for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < ho.length; n++) {
        var i = ho[n] + t;
        if (i in co) return i;
      }
    });

    function mo(e, t) {
      var n = t.data,
          i = e.data;

      if (!(o(n.staticStyle) && o(n.style) && o(i.staticStyle) && o(i.style))) {
        var a,
            s,
            l = t.elm,
            c = i.staticStyle,
            d = i.normalizedStyle || i.style || {},
            u = c || d,
            f = lo(t.data.style) || {};
        t.data.normalizedStyle = r(f.__ob__) ? M({}, f) : f;

        var p = function (e, t) {
          var n,
              i = {};
          if (t) for (var o = e; o.componentInstance;) {
            (o = o.componentInstance._vnode) && o.data && (n = so(o.data)) && M(i, n);
          }
          (n = so(e.data)) && M(i, n);

          for (var r = e; r = r.parent;) {
            r.data && (n = so(r.data)) && M(i, n);
          }

          return i;
        }(t, !0);

        for (s in u) {
          o(p[s]) && po(l, s, "");
        }

        for (s in p) {
          (a = p[s]) !== u[s] && po(l, s, null == a ? "" : a);
        }
      }
    }

    var vo = {
      create: mo,
      update: mo
    },
        yo = /\s+/;

    function Ao(e, t) {
      if (t && (t = t.trim())) if (e.classList) t.indexOf(" ") > -1 ? t.split(yo).forEach(function (t) {
        return e.classList.add(t);
      }) : e.classList.add(t);else {
        var n = " " + (e.getAttribute("class") || "") + " ";
        n.indexOf(" " + t + " ") < 0 && e.setAttribute("class", (n + t).trim());
      }
    }

    function bo(e, t) {
      if (t && (t = t.trim())) if (e.classList) t.indexOf(" ") > -1 ? t.split(yo).forEach(function (t) {
        return e.classList.remove(t);
      }) : e.classList.remove(t), e.classList.length || e.removeAttribute("class");else {
        for (var n = " " + (e.getAttribute("class") || "") + " ", i = " " + t + " "; n.indexOf(i) >= 0;) {
          n = n.replace(i, " ");
        }

        (n = n.trim()) ? e.setAttribute("class", n) : e.removeAttribute("class");
      }
    }

    function Eo(e) {
      if (e) {
        if ("object" == _typeof(e)) {
          var t = {};
          return !1 !== e.css && M(t, _o(e.name || "v")), M(t, e), t;
        }

        return "string" == typeof e ? _o(e) : void 0;
      }
    }

    var _o = _(function (e) {
      return {
        enterClass: e + "-enter",
        enterToClass: e + "-enter-to",
        enterActiveClass: e + "-enter-active",
        leaveClass: e + "-leave",
        leaveToClass: e + "-leave-to",
        leaveActiveClass: e + "-leave-active"
      };
    }),
        Co = z && !X,
        wo = "transition",
        So = "transitionend",
        Io = "animation",
        To = "animationend";

    Co && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (wo = "WebkitTransition", So = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (Io = "WebkitAnimation", To = "webkitAnimationEnd"));
    var ko = z ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : function (e) {
      return e();
    };

    function xo(e) {
      ko(function () {
        ko(e);
      });
    }

    function Mo(e, t) {
      var n = e._transitionClasses || (e._transitionClasses = []);
      n.indexOf(t) < 0 && (n.push(t), Ao(e, t));
    }

    function No(e, t) {
      e._transitionClasses && A(e._transitionClasses, t), bo(e, t);
    }

    function Do(e, t, n) {
      var i = Lo(e, t),
          o = i.type,
          r = i.timeout,
          a = i.propCount;
      if (!o) return n();

      var s = "transition" === o ? So : To,
          l = 0,
          c = function c() {
        e.removeEventListener(s, d), n();
      },
          d = function d(t) {
        t.target === e && ++l >= a && c();
      };

      setTimeout(function () {
        l < a && c();
      }, r + 1), e.addEventListener(s, d);
    }

    var Oo = /\b(transform|all)(,|$)/;

    function Lo(e, t) {
      var n,
          i = window.getComputedStyle(e),
          o = (i[wo + "Delay"] || "").split(", "),
          r = (i[wo + "Duration"] || "").split(", "),
          a = $o(o, r),
          s = (i[Io + "Delay"] || "").split(", "),
          l = (i[Io + "Duration"] || "").split(", "),
          c = $o(s, l),
          d = 0,
          u = 0;
      return "transition" === t ? a > 0 && (n = "transition", d = a, u = r.length) : "animation" === t ? c > 0 && (n = "animation", d = c, u = l.length) : u = (n = (d = Math.max(a, c)) > 0 ? a > c ? "transition" : "animation" : null) ? "transition" === n ? r.length : l.length : 0, {
        type: n,
        timeout: d,
        propCount: u,
        hasTransform: "transition" === n && Oo.test(i[wo + "Property"])
      };
    }

    function $o(e, t) {
      for (; e.length < t.length;) {
        e = e.concat(e);
      }

      return Math.max.apply(null, t.map(function (t, n) {
        return Ro(t) + Ro(e[n]);
      }));
    }

    function Ro(e) {
      return 1e3 * Number(e.slice(0, -1).replace(",", "."));
    }

    function Po(e, t) {
      var n = e.elm;
      r(n._leaveCb) && (n._leaveCb.cancelled = !0, n._leaveCb());
      var i = Eo(e.data.transition);

      if (!o(i) && !r(n._enterCb) && 1 === n.nodeType) {
        for (var a = i.css, s = i.type, c = i.enterClass, d = i.enterToClass, u = i.enterActiveClass, f = i.appearClass, p = i.appearToClass, h = i.appearActiveClass, m = i.beforeEnter, v = i.enter, y = i.afterEnter, A = i.enterCancelled, b = i.beforeAppear, E = i.appear, _ = i.afterAppear, C = i.appearCancelled, w = i.duration, S = Qt, I = Qt.$vnode; I && I.parent;) {
          S = I.context, I = I.parent;
        }

        var T = !S._isMounted || !e.isRootInsert;

        if (!T || E || "" === E) {
          var k = T && f ? f : c,
              x = T && h ? h : u,
              M = T && p ? p : d,
              N = T && b || m,
              D = T && "function" == typeof E ? E : v,
              O = T && _ || y,
              L = T && C || A,
              $ = g(l(w) ? w.enter : w);
          0;
          var R = !1 !== a && !X,
              B = Fo(D),
              j = n._enterCb = P(function () {
            R && (No(n, M), No(n, x)), j.cancelled ? (R && No(n, k), L && L(n)) : O && O(n), n._enterCb = null;
          });
          e.data.show || ct(e, "insert", function () {
            var t = n.parentNode,
                i = t && t._pending && t._pending[e.key];
            i && i.tag === e.tag && i.elm._leaveCb && i.elm._leaveCb(), D && D(n, j);
          }), N && N(n), R && (Mo(n, k), Mo(n, x), xo(function () {
            No(n, k), j.cancelled || (Mo(n, M), B || (jo($) ? setTimeout(j, $) : Do(n, s, j)));
          })), e.data.show && (t && t(), D && D(n, j)), R || B || j();
        }
      }
    }

    function Bo(e, t) {
      var n = e.elm;
      r(n._enterCb) && (n._enterCb.cancelled = !0, n._enterCb());
      var i = Eo(e.data.transition);
      if (o(i) || 1 !== n.nodeType) return t();

      if (!r(n._leaveCb)) {
        var a = i.css,
            s = i.type,
            c = i.leaveClass,
            d = i.leaveToClass,
            u = i.leaveActiveClass,
            f = i.beforeLeave,
            p = i.leave,
            h = i.afterLeave,
            m = i.leaveCancelled,
            v = i.delayLeave,
            y = i.duration,
            A = !1 !== a && !X,
            b = Fo(p),
            E = g(l(y) ? y.leave : y);
        0;

        var _ = n._leaveCb = P(function () {
          n.parentNode && n.parentNode._pending && (n.parentNode._pending[e.key] = null), A && (No(n, d), No(n, u)), _.cancelled ? (A && No(n, c), m && m(n)) : (t(), h && h(n)), n._leaveCb = null;
        });

        v ? v(C) : C();
      }

      function C() {
        _.cancelled || (!e.data.show && n.parentNode && ((n.parentNode._pending || (n.parentNode._pending = {}))[e.key] = e), f && f(n), A && (Mo(n, c), Mo(n, u), xo(function () {
          No(n, c), _.cancelled || (Mo(n, d), b || (jo(E) ? setTimeout(_, E) : Do(n, s, _)));
        })), p && p(n, _), A || b || _());
      }
    }

    function jo(e) {
      return "number" == typeof e && !isNaN(e);
    }

    function Fo(e) {
      if (o(e)) return !1;
      var t = e.fns;
      return r(t) ? Fo(Array.isArray(t) ? t[0] : t) : (e._length || e.length) > 1;
    }

    function Uo(e, t) {
      !0 !== t.data.show && Po(t);
    }

    var Ho = function (e) {
      var t,
          n,
          i = {},
          l = e.modules,
          c = e.nodeOps;

      for (t = 0; t < ri.length; ++t) {
        for (i[ri[t]] = [], n = 0; n < l.length; ++n) {
          r(l[n][ri[t]]) && i[ri[t]].push(l[n][ri[t]]);
        }
      }

      function d(e) {
        var t = c.parentNode(e);
        r(t) && c.removeChild(t, e);
      }

      function u(e, t, n, o, s, l, d) {
        if (r(e.elm) && r(l) && (e = l[d] = be(e)), e.isRootInsert = !s, !function (e, t, n, o) {
          var s = e.data;

          if (r(s)) {
            var l = r(e.componentInstance) && s.keepAlive;
            if (r(s = s.hook) && r(s = s.init) && s(e, !1), r(e.componentInstance)) return f(e, t), p(n, e.elm, o), a(l) && function (e, t, n, o) {
              var a,
                  s = e;

              for (; s.componentInstance;) {
                if (s = s.componentInstance._vnode, r(a = s.data) && r(a = a.transition)) {
                  for (a = 0; a < i.activate.length; ++a) {
                    i.activate[a](oi, s);
                  }

                  t.push(s);
                  break;
                }
              }

              p(n, e.elm, o);
            }(e, t, n, o), !0;
          }
        }(e, t, n, o)) {
          var u = e.data,
              g = e.children,
              m = e.tag;
          r(m) ? (e.elm = e.ns ? c.createElementNS(e.ns, m) : c.createElement(m, e), y(e), h(e, g, t), r(u) && v(e, t), p(n, e.elm, o)) : a(e.isComment) ? (e.elm = c.createComment(e.text), p(n, e.elm, o)) : (e.elm = c.createTextNode(e.text), p(n, e.elm, o));
        }
      }

      function f(e, t) {
        r(e.data.pendingInsert) && (t.push.apply(t, e.data.pendingInsert), e.data.pendingInsert = null), e.elm = e.componentInstance.$el, g(e) ? (v(e, t), y(e)) : (ii(e), t.push(e));
      }

      function p(e, t, n) {
        r(e) && (r(n) ? c.parentNode(n) === e && c.insertBefore(e, t, n) : c.appendChild(e, t));
      }

      function h(e, t, n) {
        if (Array.isArray(t)) {
          0;

          for (var i = 0; i < t.length; ++i) {
            u(t[i], n, e.elm, null, !0, t, i);
          }
        } else s(e.text) && c.appendChild(e.elm, c.createTextNode(String(e.text)));
      }

      function g(e) {
        for (; e.componentInstance;) {
          e = e.componentInstance._vnode;
        }

        return r(e.tag);
      }

      function v(e, n) {
        for (var o = 0; o < i.create.length; ++o) {
          i.create[o](oi, e);
        }

        r(t = e.data.hook) && (r(t.create) && t.create(oi, e), r(t.insert) && n.push(e));
      }

      function y(e) {
        var t;
        if (r(t = e.fnScopeId)) c.setStyleScope(e.elm, t);else for (var n = e; n;) {
          r(t = n.context) && r(t = t.$options._scopeId) && c.setStyleScope(e.elm, t), n = n.parent;
        }
        r(t = Qt) && t !== e.context && t !== e.fnContext && r(t = t.$options._scopeId) && c.setStyleScope(e.elm, t);
      }

      function A(e, t, n, i, o, r) {
        for (; i <= o; ++i) {
          u(n[i], r, e, t, !1, n, i);
        }
      }

      function b(e) {
        var t,
            n,
            o = e.data;
        if (r(o)) for (r(t = o.hook) && r(t = t.destroy) && t(e), t = 0; t < i.destroy.length; ++t) {
          i.destroy[t](e);
        }
        if (r(t = e.children)) for (n = 0; n < e.children.length; ++n) {
          b(e.children[n]);
        }
      }

      function E(e, t, n) {
        for (; t <= n; ++t) {
          var i = e[t];
          r(i) && (r(i.tag) ? (_(i), b(i)) : d(i.elm));
        }
      }

      function _(e, t) {
        if (r(t) || r(e.data)) {
          var n,
              o = i.remove.length + 1;

          for (r(t) ? t.listeners += o : t = function (e, t) {
            function n() {
              0 == --n.listeners && d(e);
            }

            return n.listeners = t, n;
          }(e.elm, o), r(n = e.componentInstance) && r(n = n._vnode) && r(n.data) && _(n, t), n = 0; n < i.remove.length; ++n) {
            i.remove[n](e, t);
          }

          r(n = e.data.hook) && r(n = n.remove) ? n(e, t) : t();
        } else d(e.elm);
      }

      function C(e, t, n, i) {
        for (var o = n; o < i; o++) {
          var a = t[o];
          if (r(a) && ai(e, a)) return o;
        }
      }

      function w(e, t, n, s, l, d) {
        if (e !== t) {
          r(t.elm) && r(s) && (t = s[l] = be(t));
          var f = t.elm = e.elm;
          if (a(e.isAsyncPlaceholder)) r(t.asyncFactory.resolved) ? T(e.elm, t, n) : t.isAsyncPlaceholder = !0;else if (a(t.isStatic) && a(e.isStatic) && t.key === e.key && (a(t.isCloned) || a(t.isOnce))) t.componentInstance = e.componentInstance;else {
            var p,
                h = t.data;
            r(h) && r(p = h.hook) && r(p = p.prepatch) && p(e, t);
            var m = e.children,
                v = t.children;

            if (r(h) && g(t)) {
              for (p = 0; p < i.update.length; ++p) {
                i.update[p](e, t);
              }

              r(p = h.hook) && r(p = p.update) && p(e, t);
            }

            o(t.text) ? r(m) && r(v) ? m !== v && function (e, t, n, i, a) {
              var s,
                  l,
                  d,
                  f = 0,
                  p = 0,
                  h = t.length - 1,
                  g = t[0],
                  m = t[h],
                  v = n.length - 1,
                  y = n[0],
                  b = n[v],
                  _ = !a;

              for (0; f <= h && p <= v;) {
                o(g) ? g = t[++f] : o(m) ? m = t[--h] : ai(g, y) ? (w(g, y, i, n, p), g = t[++f], y = n[++p]) : ai(m, b) ? (w(m, b, i, n, v), m = t[--h], b = n[--v]) : ai(g, b) ? (w(g, b, i, n, v), _ && c.insertBefore(e, g.elm, c.nextSibling(m.elm)), g = t[++f], b = n[--v]) : ai(m, y) ? (w(m, y, i, n, p), _ && c.insertBefore(e, m.elm, g.elm), m = t[--h], y = n[++p]) : (o(s) && (s = si(t, f, h)), o(l = r(y.key) ? s[y.key] : C(y, t, f, h)) ? u(y, i, e, g.elm, !1, n, p) : ai(d = t[l], y) ? (w(d, y, i, n, p), t[l] = void 0, _ && c.insertBefore(e, d.elm, g.elm)) : u(y, i, e, g.elm, !1, n, p), y = n[++p]);
              }

              f > h ? A(e, o(n[v + 1]) ? null : n[v + 1].elm, n, p, v, i) : p > v && E(t, f, h);
            }(f, m, v, n, d) : r(v) ? (r(e.text) && c.setTextContent(f, ""), A(f, null, v, 0, v.length - 1, n)) : r(m) ? E(m, 0, m.length - 1) : r(e.text) && c.setTextContent(f, "") : e.text !== t.text && c.setTextContent(f, t.text), r(h) && r(p = h.hook) && r(p = p.postpatch) && p(e, t);
          }
        }
      }

      function S(e, t, n) {
        if (a(n) && r(e.parent)) e.parent.data.pendingInsert = t;else for (var i = 0; i < t.length; ++i) {
          t[i].data.hook.insert(t[i]);
        }
      }

      var I = m("attrs,class,staticClass,staticStyle,key");

      function T(e, t, n, i) {
        var o,
            s = t.tag,
            l = t.data,
            c = t.children;
        if (i = i || l && l.pre, t.elm = e, a(t.isComment) && r(t.asyncFactory)) return t.isAsyncPlaceholder = !0, !0;
        if (r(l) && (r(o = l.hook) && r(o = o.init) && o(t, !0), r(o = t.componentInstance))) return f(t, n), !0;

        if (r(s)) {
          if (r(c)) if (e.hasChildNodes()) {
            if (r(o = l) && r(o = o.domProps) && r(o = o.innerHTML)) {
              if (o !== e.innerHTML) return !1;
            } else {
              for (var d = !0, u = e.firstChild, p = 0; p < c.length; p++) {
                if (!u || !T(u, c[p], n, i)) {
                  d = !1;
                  break;
                }

                u = u.nextSibling;
              }

              if (!d || u) return !1;
            }
          } else h(t, c, n);

          if (r(l)) {
            var g = !1;

            for (var m in l) {
              if (!I(m)) {
                g = !0, v(t, n);
                break;
              }
            }

            !g && l["class"] && rt(l["class"]);
          }
        } else e.data !== t.text && (e.data = t.text);

        return !0;
      }

      return function (e, t, n, s) {
        if (!o(t)) {
          var l,
              d = !1,
              f = [];
          if (o(e)) d = !0, u(t, f);else {
            var p = r(e.nodeType);
            if (!p && ai(e, t)) w(e, t, f, null, null, s);else {
              if (p) {
                if (1 === e.nodeType && e.hasAttribute("data-server-rendered") && (e.removeAttribute("data-server-rendered"), n = !0), a(n) && T(e, t, f)) return S(t, f, !0), e;
                l = e, e = new me(c.tagName(l).toLowerCase(), {}, [], void 0, l);
              }

              var h = e.elm,
                  m = c.parentNode(h);
              if (u(t, f, h._leaveCb ? null : m, c.nextSibling(h)), r(t.parent)) for (var v = t.parent, y = g(t); v;) {
                for (var A = 0; A < i.destroy.length; ++A) {
                  i.destroy[A](v);
                }

                if (v.elm = t.elm, y) {
                  for (var _ = 0; _ < i.create.length; ++_) {
                    i.create[_](oi, v);
                  }

                  var C = v.data.hook.insert;
                  if (C.merged) for (var I = 1; I < C.fns.length; I++) {
                    C.fns[I]();
                  }
                } else ii(v);

                v = v.parent;
              }
              r(m) ? E([e], 0, 0) : r(e.tag) && b(e);
            }
          }
          return S(t, f, d), t.elm;
        }

        r(e) && b(e);
      };
    }({
      nodeOps: ti,
      modules: [yi, Ii, no, ro, vo, z ? {
        create: Uo,
        activate: Uo,
        remove: function remove(e, t) {
          !0 !== e.data.show ? Bo(e, t) : t();
        }
      } : {}].concat(hi)
    });

    X && document.addEventListener("selectionchange", function () {
      var e = document.activeElement;
      e && e.vmodel && Jo(e, "input");
    });
    var Wo = {
      inserted: function inserted(e, t, n, i) {
        "select" === n.tag ? (i.elm && !i.elm._vOptions ? ct(n, "postpatch", function () {
          Wo.componentUpdated(e, t, n);
        }) : Go(e, t, n.context), e._vOptions = [].map.call(e.options, zo)) : ("textarea" === n.tag || Zn(e.type)) && (e._vModifiers = t.modifiers, t.modifiers.lazy || (e.addEventListener("compositionstart", Yo), e.addEventListener("compositionend", Ko), e.addEventListener("change", Ko), X && (e.vmodel = !0)));
      },
      componentUpdated: function componentUpdated(e, t, n) {
        if ("select" === n.tag) {
          Go(e, t, n.context);
          var i = e._vOptions,
              o = e._vOptions = [].map.call(e.options, zo);
          if (o.some(function (e, t) {
            return !$(e, i[t]);
          })) (e.multiple ? t.value.some(function (e) {
            return qo(e, o);
          }) : t.value !== t.oldValue && qo(t.value, o)) && Jo(e, "change");
        }
      }
    };

    function Go(e, t, n) {
      Vo(e, t, n), (Q || Z) && setTimeout(function () {
        Vo(e, t, n);
      }, 0);
    }

    function Vo(e, t, n) {
      var i = t.value,
          o = e.multiple;

      if (!o || Array.isArray(i)) {
        for (var r, a, s = 0, l = e.options.length; s < l; s++) {
          if (a = e.options[s], o) r = R(i, zo(a)) > -1, a.selected !== r && (a.selected = r);else if ($(zo(a), i)) return void (e.selectedIndex !== s && (e.selectedIndex = s));
        }

        o || (e.selectedIndex = -1);
      }
    }

    function qo(e, t) {
      return t.every(function (t) {
        return !$(t, e);
      });
    }

    function zo(e) {
      return "_value" in e ? e._value : e.value;
    }

    function Yo(e) {
      e.target.composing = !0;
    }

    function Ko(e) {
      e.target.composing && (e.target.composing = !1, Jo(e.target, "input"));
    }

    function Jo(e, t) {
      var n = document.createEvent("HTMLEvents");
      n.initEvent(t, !0, !0), e.dispatchEvent(n);
    }

    function Qo(e) {
      return !e.componentInstance || e.data && e.data.transition ? e : Qo(e.componentInstance._vnode);
    }

    var Xo = {
      model: Wo,
      show: {
        bind: function bind(e, t, n) {
          var i = t.value,
              o = (n = Qo(n)).data && n.data.transition,
              r = e.__vOriginalDisplay = "none" === e.style.display ? "" : e.style.display;
          i && o ? (n.data.show = !0, Po(n, function () {
            e.style.display = r;
          })) : e.style.display = i ? r : "none";
        },
        update: function update(e, t, n) {
          var i = t.value;
          !i != !t.oldValue && ((n = Qo(n)).data && n.data.transition ? (n.data.show = !0, i ? Po(n, function () {
            e.style.display = e.__vOriginalDisplay;
          }) : Bo(n, function () {
            e.style.display = "none";
          })) : e.style.display = i ? e.__vOriginalDisplay : "none");
        },
        unbind: function unbind(e, t, n, i, o) {
          o || (e.style.display = e.__vOriginalDisplay);
        }
      }
    },
        Zo = {
      name: String,
      appear: Boolean,
      css: Boolean,
      mode: String,
      type: String,
      enterClass: String,
      leaveClass: String,
      enterToClass: String,
      leaveToClass: String,
      enterActiveClass: String,
      leaveActiveClass: String,
      appearClass: String,
      appearActiveClass: String,
      appearToClass: String,
      duration: [Number, String, Object]
    };

    function er(e) {
      var t = e && e.componentOptions;
      return t && t.Ctor.options["abstract"] ? er(qt(t.children)) : e;
    }

    function tr(e) {
      var t = {},
          n = e.$options;

      for (var i in n.propsData) {
        t[i] = e[i];
      }

      var o = n._parentListeners;

      for (var r in o) {
        t[w(r)] = o[r];
      }

      return t;
    }

    function nr(e, t) {
      if (/\d-keep-alive$/.test(t.tag)) return e("keep-alive", {
        props: t.componentOptions.propsData
      });
    }

    var ir = function ir(e) {
      return e.tag || Vt(e);
    },
        or = function or(e) {
      return "show" === e.name;
    },
        rr = {
      name: "transition",
      props: Zo,
      "abstract": !0,
      render: function render(e) {
        var t = this,
            n = this.$slots["default"];

        if (n && (n = n.filter(ir)).length) {
          0;
          var i = this.mode;
          0;
          var o = n[0];
          if (function (e) {
            for (; e = e.parent;) {
              if (e.data.transition) return !0;
            }
          }(this.$vnode)) return o;
          var r = er(o);
          if (!r) return o;
          if (this._leaving) return nr(e, o);
          var a = "__transition-" + this._uid + "-";
          r.key = null == r.key ? r.isComment ? a + "comment" : a + r.tag : s(r.key) ? 0 === String(r.key).indexOf(a) ? r.key : a + r.key : r.key;
          var l = (r.data || (r.data = {})).transition = tr(this),
              c = this._vnode,
              d = er(c);

          if (r.data.directives && r.data.directives.some(or) && (r.data.show = !0), d && d.data && !function (e, t) {
            return t.key === e.key && t.tag === e.tag;
          }(r, d) && !Vt(d) && (!d.componentInstance || !d.componentInstance._vnode.isComment)) {
            var u = d.data.transition = M({}, l);
            if ("out-in" === i) return this._leaving = !0, ct(u, "afterLeave", function () {
              t._leaving = !1, t.$forceUpdate();
            }), nr(e, o);

            if ("in-out" === i) {
              if (Vt(r)) return c;

              var f,
                  p = function p() {
                f();
              };

              ct(l, "afterEnter", p), ct(l, "enterCancelled", p), ct(u, "delayLeave", function (e) {
                f = e;
              });
            }
          }

          return o;
        }
      }
    },
        ar = M({
      tag: String,
      moveClass: String
    }, Zo);

    function sr(e) {
      e.elm._moveCb && e.elm._moveCb(), e.elm._enterCb && e.elm._enterCb();
    }

    function lr(e) {
      e.data.newPos = e.elm.getBoundingClientRect();
    }

    function cr(e) {
      var t = e.data.pos,
          n = e.data.newPos,
          i = t.left - n.left,
          o = t.top - n.top;

      if (i || o) {
        e.data.moved = !0;
        var r = e.elm.style;
        r.transform = r.WebkitTransform = "translate(" + i + "px," + o + "px)", r.transitionDuration = "0s";
      }
    }

    delete ar.mode;
    var dr = {
      Transition: rr,
      TransitionGroup: {
        props: ar,
        beforeMount: function beforeMount() {
          var e = this,
              t = this._update;

          this._update = function (n, i) {
            var o = Xt(e);
            e.__patch__(e._vnode, e.kept, !1, !0), e._vnode = e.kept, o(), t.call(e, n, i);
          };
        },
        render: function render(e) {
          for (var t = this.tag || this.$vnode.data.tag || "span", n = Object.create(null), i = this.prevChildren = this.children, o = this.$slots["default"] || [], r = this.children = [], a = tr(this), s = 0; s < o.length; s++) {
            var l = o[s];
            if (l.tag) if (null != l.key && 0 !== String(l.key).indexOf("__vlist")) r.push(l), n[l.key] = l, (l.data || (l.data = {})).transition = a;else ;
          }

          if (i) {
            for (var c = [], d = [], u = 0; u < i.length; u++) {
              var f = i[u];
              f.data.transition = a, f.data.pos = f.elm.getBoundingClientRect(), n[f.key] ? c.push(f) : d.push(f);
            }

            this.kept = e(t, null, c), this.removed = d;
          }

          return e(t, null, r);
        },
        updated: function updated() {
          var e = this.prevChildren,
              t = this.moveClass || (this.name || "v") + "-move";
          e.length && this.hasMove(e[0].elm, t) && (e.forEach(sr), e.forEach(lr), e.forEach(cr), this._reflow = document.body.offsetHeight, e.forEach(function (e) {
            if (e.data.moved) {
              var n = e.elm,
                  i = n.style;
              Mo(n, t), i.transform = i.WebkitTransform = i.transitionDuration = "", n.addEventListener(So, n._moveCb = function e(i) {
                i && i.target !== n || i && !/transform$/.test(i.propertyName) || (n.removeEventListener(So, e), n._moveCb = null, No(n, t));
              });
            }
          }));
        },
        methods: {
          hasMove: function hasMove(e, t) {
            if (!Co) return !1;
            if (this._hasMove) return this._hasMove;
            var n = e.cloneNode();
            e._transitionClasses && e._transitionClasses.forEach(function (e) {
              bo(n, e);
            }), Ao(n, t), n.style.display = "none", this.$el.appendChild(n);
            var i = Lo(n);
            return this.$el.removeChild(n), this._hasMove = i.hasTransform;
          }
        }
      }
    };
    Sn.config.mustUseProp = $n, Sn.config.isReservedTag = Jn, Sn.config.isReservedAttr = On, Sn.config.getTagNamespace = Qn, Sn.config.isUnknownElement = function (e) {
      if (!z) return !0;
      if (Jn(e)) return !1;
      if (e = e.toLowerCase(), null != Xn[e]) return Xn[e];
      var t = document.createElement(e);
      return e.indexOf("-") > -1 ? Xn[e] = t.constructor === window.HTMLUnknownElement || t.constructor === window.HTMLElement : Xn[e] = /HTMLUnknownElement/.test(t.toString());
    }, M(Sn.options.directives, Xo), M(Sn.options.components, dr), Sn.prototype.__patch__ = z ? Ho : D, Sn.prototype.$mount = function (e, t) {
      return function (e, t, n) {
        var i;
        return e.$el = t, e.$options.render || (e.$options.render = ye), tn(e, "beforeMount"), i = function i() {
          e._update(e._render(), n);
        }, new hn(e, i, D, {
          before: function before() {
            e._isMounted && !e._isDestroyed && tn(e, "beforeUpdate");
          }
        }, !0), n = !1, null == e.$vnode && (e._isMounted = !0, tn(e, "mounted")), e;
      }(this, e = e && z ? ei(e) : void 0, t);
    }, z && setTimeout(function () {
      F.devtools && ae && ae.emit("init", Sn);
    }, 0);

    var ur = /\{\{((?:.|\r?\n)+?)\}\}/g,
        fr = /[-.*+?^${}()|[\]\/\\]/g,
        pr = _(function (e) {
      var t = e[0].replace(fr, "\\$&"),
          n = e[1].replace(fr, "\\$&");
      return new RegExp(t + "((?:.|\\n)+?)" + n, "g");
    });

    var hr = {
      staticKeys: ["staticClass"],
      transformNode: function transformNode(e, t) {
        t.warn;
        var n = ji(e, "class");
        n && (e.staticClass = JSON.stringify(n));
        var i = Bi(e, "class", !1);
        i && (e.classBinding = i);
      },
      genData: function genData(e) {
        var t = "";
        return e.staticClass && (t += "staticClass:" + e.staticClass + ","), e.classBinding && (t += "class:" + e.classBinding + ","), t;
      }
    };

    var gr,
        mr = {
      staticKeys: ["staticStyle"],
      transformNode: function transformNode(e, t) {
        t.warn;
        var n = ji(e, "style");
        n && (e.staticStyle = JSON.stringify(ao(n)));
        var i = Bi(e, "style", !1);
        i && (e.styleBinding = i);
      },
      genData: function genData(e) {
        var t = "";
        return e.staticStyle && (t += "staticStyle:" + e.staticStyle + ","), e.styleBinding && (t += "style:(" + e.styleBinding + "),"), t;
      }
    },
        vr = function vr(e) {
      return (gr = gr || document.createElement("div")).innerHTML = e, gr.textContent;
    },
        yr = m("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),
        Ar = m("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),
        br = m("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),
        Er = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,
        _r = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,
        Cr = "[a-zA-Z_][\\-\\.0-9_a-zA-Z" + U.source + "]*",
        wr = "((?:" + Cr + "\\:)?" + Cr + ")",
        Sr = new RegExp("^<" + wr),
        Ir = /^\s*(\/?)>/,
        Tr = new RegExp("^<\\/" + wr + "[^>]*>"),
        kr = /^<!DOCTYPE [^>]+>/i,
        xr = /^<!\--/,
        Mr = /^<!\[/,
        Nr = m("script,style,textarea", !0),
        Dr = {},
        Or = {
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&amp;": "&",
      "&#10;": "\n",
      "&#9;": "\t",
      "&#39;": "'"
    },
        Lr = /&(?:lt|gt|quot|amp|#39);/g,
        $r = /&(?:lt|gt|quot|amp|#39|#10|#9);/g,
        Rr = m("pre,textarea", !0),
        Pr = function Pr(e, t) {
      return e && Rr(e) && "\n" === t[0];
    };

    function Br(e, t) {
      var n = t ? $r : Lr;
      return e.replace(n, function (e) {
        return Or[e];
      });
    }

    var jr,
        Fr,
        Ur,
        Hr,
        Wr,
        Gr,
        Vr,
        qr,
        zr = /^@|^v-on:/,
        Yr = /^v-|^@|^:|^#/,
        Kr = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,
        Jr = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
        Qr = /^\(|\)$/g,
        Xr = /^\[.*\]$/,
        Zr = /:(.*)$/,
        ea = /^:|^\.|^v-bind:/,
        ta = /\.[^.\]]+(?=[^\]]*$)/g,
        na = /^v-slot(:|$)|^#/,
        ia = /[\r\n]/,
        oa = /\s+/g,
        ra = _(vr);

    function aa(e, t, n) {
      return {
        type: 1,
        tag: e,
        attrsList: t,
        attrsMap: pa(t),
        rawAttrsMap: {},
        parent: n,
        children: []
      };
    }

    function sa(e, t) {
      jr = t.warn || Mi, Gr = t.isPreTag || O, Vr = t.mustUseProp || O, qr = t.getTagNamespace || O;
      var n = t.isReservedTag || O;
      (function (e) {
        return !!e.component || !n(e.tag);
      }), Ur = Ni(t.modules, "transformNode"), Hr = Ni(t.modules, "preTransformNode"), Wr = Ni(t.modules, "postTransformNode"), Fr = t.delimiters;
      var i,
          o,
          r = [],
          a = !1 !== t.preserveWhitespace,
          s = t.whitespace,
          l = !1,
          c = !1;

      function d(e) {
        if (u(e), l || e.processed || (e = la(e, t)), r.length || e === i || i["if"] && (e.elseif || e["else"]) && da(i, {
          exp: e.elseif,
          block: e
        }), o && !e.forbidden) if (e.elseif || e["else"]) a = e, (s = function (e) {
          for (var t = e.length; t--;) {
            if (1 === e[t].type) return e[t];
            e.pop();
          }
        }(o.children)) && s["if"] && da(s, {
          exp: a.elseif,
          block: a
        });else {
          if (e.slotScope) {
            var n = e.slotTarget || '"default"';
            (o.scopedSlots || (o.scopedSlots = {}))[n] = e;
          }

          o.children.push(e), e.parent = o;
        }
        var a, s;
        e.children = e.children.filter(function (e) {
          return !e.slotScope;
        }), u(e), e.pre && (l = !1), Gr(e.tag) && (c = !1);

        for (var d = 0; d < Wr.length; d++) {
          Wr[d](e, t);
        }
      }

      function u(e) {
        if (!c) for (var t; (t = e.children[e.children.length - 1]) && 3 === t.type && " " === t.text;) {
          e.children.pop();
        }
      }

      return function (e, t) {
        for (var n, i, o = [], r = t.expectHTML, a = t.isUnaryTag || O, s = t.canBeLeftOpenTag || O, l = 0; e;) {
          if (n = e, i && Nr(i)) {
            var c = 0,
                d = i.toLowerCase(),
                u = Dr[d] || (Dr[d] = new RegExp("([\\s\\S]*?)(</" + d + "[^>]*>)", "i")),
                f = e.replace(u, function (e, n, i) {
              return c = i.length, Nr(d) || "noscript" === d || (n = n.replace(/<!\--([\s\S]*?)-->/g, "$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1")), Pr(d, n) && (n = n.slice(1)), t.chars && t.chars(n), "";
            });
            l += e.length - f.length, e = f, I(d, l - c, l);
          } else {
            var p = e.indexOf("<");

            if (0 === p) {
              if (xr.test(e)) {
                var h = e.indexOf("--\x3e");

                if (h >= 0) {
                  t.shouldKeepComment && t.comment(e.substring(4, h), l, l + h + 3), C(h + 3);
                  continue;
                }
              }

              if (Mr.test(e)) {
                var g = e.indexOf("]>");

                if (g >= 0) {
                  C(g + 2);
                  continue;
                }
              }

              var m = e.match(kr);

              if (m) {
                C(m[0].length);
                continue;
              }

              var v = e.match(Tr);

              if (v) {
                var y = l;
                C(v[0].length), I(v[1], y, l);
                continue;
              }

              var A = w();

              if (A) {
                S(A), Pr(A.tagName, e) && C(1);
                continue;
              }
            }

            var b = void 0,
                E = void 0,
                _ = void 0;

            if (p >= 0) {
              for (E = e.slice(p); !(Tr.test(E) || Sr.test(E) || xr.test(E) || Mr.test(E) || (_ = E.indexOf("<", 1)) < 0);) {
                p += _, E = e.slice(p);
              }

              b = e.substring(0, p);
            }

            p < 0 && (b = e), b && C(b.length), t.chars && b && t.chars(b, l - b.length, l);
          }

          if (e === n) {
            t.chars && t.chars(e);
            break;
          }
        }

        function C(t) {
          l += t, e = e.substring(t);
        }

        function w() {
          var t = e.match(Sr);

          if (t) {
            var n,
                i,
                o = {
              tagName: t[1],
              attrs: [],
              start: l
            };

            for (C(t[0].length); !(n = e.match(Ir)) && (i = e.match(_r) || e.match(Er));) {
              i.start = l, C(i[0].length), i.end = l, o.attrs.push(i);
            }

            if (n) return o.unarySlash = n[1], C(n[0].length), o.end = l, o;
          }
        }

        function S(e) {
          var n = e.tagName,
              l = e.unarySlash;
          r && ("p" === i && br(n) && I(i), s(n) && i === n && I(n));

          for (var c = a(n) || !!l, d = e.attrs.length, u = new Array(d), f = 0; f < d; f++) {
            var p = e.attrs[f],
                h = p[3] || p[4] || p[5] || "",
                g = "a" === n && "href" === p[1] ? t.shouldDecodeNewlinesForHref : t.shouldDecodeNewlines;
            u[f] = {
              name: p[1],
              value: Br(h, g)
            };
          }

          c || (o.push({
            tag: n,
            lowerCasedTag: n.toLowerCase(),
            attrs: u,
            start: e.start,
            end: e.end
          }), i = n), t.start && t.start(n, u, c, e.start, e.end);
        }

        function I(e, n, r) {
          var a, s;
          if (null == n && (n = l), null == r && (r = l), e) for (s = e.toLowerCase(), a = o.length - 1; a >= 0 && o[a].lowerCasedTag !== s; a--) {
            ;
          } else a = 0;

          if (a >= 0) {
            for (var c = o.length - 1; c >= a; c--) {
              t.end && t.end(o[c].tag, n, r);
            }

            o.length = a, i = a && o[a - 1].tag;
          } else "br" === s ? t.start && t.start(e, [], !0, n, r) : "p" === s && (t.start && t.start(e, [], !1, n, r), t.end && t.end(e, n, r));
        }

        I();
      }(e, {
        warn: jr,
        expectHTML: t.expectHTML,
        isUnaryTag: t.isUnaryTag,
        canBeLeftOpenTag: t.canBeLeftOpenTag,
        shouldDecodeNewlines: t.shouldDecodeNewlines,
        shouldDecodeNewlinesForHref: t.shouldDecodeNewlinesForHref,
        shouldKeepComment: t.comments,
        outputSourceRange: t.outputSourceRange,
        start: function start(e, n, a, s, u) {
          var f = o && o.ns || qr(e);
          Q && "svg" === f && (n = function (e) {
            for (var t = [], n = 0; n < e.length; n++) {
              var i = e[n];
              ha.test(i.name) || (i.name = i.name.replace(ga, ""), t.push(i));
            }

            return t;
          }(n));
          var p,
              h = aa(e, n, o);
          f && (h.ns = f), "style" !== (p = h).tag && ("script" !== p.tag || p.attrsMap.type && "text/javascript" !== p.attrsMap.type) || re() || (h.forbidden = !0);

          for (var g = 0; g < Hr.length; g++) {
            h = Hr[g](h, t) || h;
          }

          l || (!function (e) {
            null != ji(e, "v-pre") && (e.pre = !0);
          }(h), h.pre && (l = !0)), Gr(h.tag) && (c = !0), l ? function (e) {
            var t = e.attrsList,
                n = t.length;
            if (n) for (var i = e.attrs = new Array(n), o = 0; o < n; o++) {
              i[o] = {
                name: t[o].name,
                value: JSON.stringify(t[o].value)
              }, null != t[o].start && (i[o].start = t[o].start, i[o].end = t[o].end);
            } else e.pre || (e.plain = !0);
          }(h) : h.processed || (ca(h), function (e) {
            var t = ji(e, "v-if");
            if (t) e["if"] = t, da(e, {
              exp: t,
              block: e
            });else {
              null != ji(e, "v-else") && (e["else"] = !0);
              var n = ji(e, "v-else-if");
              n && (e.elseif = n);
            }
          }(h), function (e) {
            null != ji(e, "v-once") && (e.once = !0);
          }(h)), i || (i = h), a ? d(h) : (o = h, r.push(h));
        },
        end: function end(e, t, n) {
          var i = r[r.length - 1];
          r.length -= 1, o = r[r.length - 1], d(i);
        },
        chars: function chars(e, t, n) {
          if (o && (!Q || "textarea" !== o.tag || o.attrsMap.placeholder !== e)) {
            var i,
                r,
                d,
                u = o.children;
            if (e = c || e.trim() ? "script" === (i = o).tag || "style" === i.tag ? e : ra(e) : u.length ? s ? "condense" === s && ia.test(e) ? "" : " " : a ? " " : "" : "") c || "condense" !== s || (e = e.replace(oa, " ")), !l && " " !== e && (r = function (e, t) {
              var n = t ? pr(t) : ur;

              if (n.test(e)) {
                for (var i, o, r, a = [], s = [], l = n.lastIndex = 0; i = n.exec(e);) {
                  (o = i.index) > l && (s.push(r = e.slice(l, o)), a.push(JSON.stringify(r)));
                  var c = ki(i[1].trim());
                  a.push("_s(" + c + ")"), s.push({
                    "@binding": c
                  }), l = o + i[0].length;
                }

                return l < e.length && (s.push(r = e.slice(l)), a.push(JSON.stringify(r))), {
                  expression: a.join("+"),
                  tokens: s
                };
              }
            }(e, Fr)) ? d = {
              type: 2,
              expression: r.expression,
              tokens: r.tokens,
              text: e
            } : " " === e && u.length && " " === u[u.length - 1].text || (d = {
              type: 3,
              text: e
            }), d && u.push(d);
          }
        },
        comment: function comment(e, t, n) {
          if (o) {
            var i = {
              type: 3,
              text: e,
              isComment: !0
            };
            0, o.children.push(i);
          }
        }
      }), i;
    }

    function la(e, t) {
      var n;
      !function (e) {
        var t = Bi(e, "key");

        if (t) {
          e.key = t;
        }
      }(e), e.plain = !e.key && !e.scopedSlots && !e.attrsList.length, function (e) {
        var t = Bi(e, "ref");
        t && (e.ref = t, e.refInFor = function (e) {
          var t = e;

          for (; t;) {
            if (void 0 !== t["for"]) return !0;
            t = t.parent;
          }

          return !1;
        }(e));
      }(e), function (e) {
        var t;
        "template" === e.tag ? (t = ji(e, "scope"), e.slotScope = t || ji(e, "slot-scope")) : (t = ji(e, "slot-scope")) && (e.slotScope = t);
        var n = Bi(e, "slot");
        n && (e.slotTarget = '""' === n ? '"default"' : n, e.slotTargetDynamic = !(!e.attrsMap[":slot"] && !e.attrsMap["v-bind:slot"]), "template" === e.tag || e.slotScope || Oi(e, "slot", n, function (e, t) {
          return e.rawAttrsMap[":" + t] || e.rawAttrsMap["v-bind:" + t] || e.rawAttrsMap[t];
        }(e, "slot")));

        if ("template" === e.tag) {
          var i = Fi(e, na);

          if (i) {
            0;
            var o = ua(i),
                r = o.name,
                a = o.dynamic;
            e.slotTarget = r, e.slotTargetDynamic = a, e.slotScope = i.value || "_empty_";
          }
        } else {
          var s = Fi(e, na);

          if (s) {
            0;
            var l = e.scopedSlots || (e.scopedSlots = {}),
                c = ua(s),
                d = c.name,
                u = c.dynamic,
                f = l[d] = aa("template", [], e);
            f.slotTarget = d, f.slotTargetDynamic = u, f.children = e.children.filter(function (e) {
              if (!e.slotScope) return e.parent = f, !0;
            }), f.slotScope = s.value || "_empty_", e.children = [], e.plain = !1;
          }
        }
      }(e), "slot" === (n = e).tag && (n.slotName = Bi(n, "name")), function (e) {
        var t;
        (t = Bi(e, "is")) && (e.component = t);
        null != ji(e, "inline-template") && (e.inlineTemplate = !0);
      }(e);

      for (var i = 0; i < Ur.length; i++) {
        e = Ur[i](e, t) || e;
      }

      return function (e) {
        var t,
            n,
            i,
            o,
            r,
            a,
            s,
            l,
            c = e.attrsList;

        for (t = 0, n = c.length; t < n; t++) {
          if (i = o = c[t].name, r = c[t].value, Yr.test(i)) {
            if (e.hasBindings = !0, (a = fa(i.replace(Yr, ""))) && (i = i.replace(ta, "")), ea.test(i)) i = i.replace(ea, ""), r = ki(r), (l = Xr.test(i)) && (i = i.slice(1, -1)), a && (a.prop && !l && "innerHtml" === (i = w(i)) && (i = "innerHTML"), a.camel && !l && (i = w(i)), a.sync && (s = Wi(r, "$event"), l ? Pi(e, '"update:"+(' + i + ")", s, null, !1, 0, c[t], !0) : (Pi(e, "update:" + w(i), s, null, !1, 0, c[t]), T(i) !== w(i) && Pi(e, "update:" + T(i), s, null, !1, 0, c[t])))), a && a.prop || !e.component && Vr(e.tag, e.attrsMap.type, i) ? Di(e, i, r, c[t], l) : Oi(e, i, r, c[t], l);else if (zr.test(i)) i = i.replace(zr, ""), (l = Xr.test(i)) && (i = i.slice(1, -1)), Pi(e, i, r, a, !1, 0, c[t], l);else {
              var d = (i = i.replace(Yr, "")).match(Zr),
                  u = d && d[1];
              l = !1, u && (i = i.slice(0, -(u.length + 1)), Xr.test(u) && (u = u.slice(1, -1), l = !0)), $i(e, i, o, r, u, l, a, c[t]);
            }
          } else Oi(e, i, JSON.stringify(r), c[t]), !e.component && "muted" === i && Vr(e.tag, e.attrsMap.type, i) && Di(e, i, "true", c[t]);
        }
      }(e), e;
    }

    function ca(e) {
      var t;

      if (t = ji(e, "v-for")) {
        var n = function (e) {
          var t = e.match(Kr);
          if (!t) return;
          var n = {};
          n["for"] = t[2].trim();
          var i = t[1].trim().replace(Qr, ""),
              o = i.match(Jr);
          o ? (n.alias = i.replace(Jr, "").trim(), n.iterator1 = o[1].trim(), o[2] && (n.iterator2 = o[2].trim())) : n.alias = i;
          return n;
        }(t);

        n && M(e, n);
      }
    }

    function da(e, t) {
      e.ifConditions || (e.ifConditions = []), e.ifConditions.push(t);
    }

    function ua(e) {
      var t = e.name.replace(na, "");
      return t || "#" !== e.name[0] && (t = "default"), Xr.test(t) ? {
        name: t.slice(1, -1),
        dynamic: !0
      } : {
        name: '"' + t + '"',
        dynamic: !1
      };
    }

    function fa(e) {
      var t = e.match(ta);

      if (t) {
        var n = {};
        return t.forEach(function (e) {
          n[e.slice(1)] = !0;
        }), n;
      }
    }

    function pa(e) {
      for (var t = {}, n = 0, i = e.length; n < i; n++) {
        t[e[n].name] = e[n].value;
      }

      return t;
    }

    var ha = /^xmlns:NS\d+/,
        ga = /^NS\d+:/;

    function ma(e) {
      return aa(e.tag, e.attrsList.slice(), e.parent);
    }

    var va = [hr, mr, {
      preTransformNode: function preTransformNode(e, t) {
        if ("input" === e.tag) {
          var n,
              i = e.attrsMap;
          if (!i["v-model"]) return;

          if ((i[":type"] || i["v-bind:type"]) && (n = Bi(e, "type")), i.type || n || !i["v-bind"] || (n = "(" + i["v-bind"] + ").type"), n) {
            var o = ji(e, "v-if", !0),
                r = o ? "&&(" + o + ")" : "",
                a = null != ji(e, "v-else", !0),
                s = ji(e, "v-else-if", !0),
                l = ma(e);
            ca(l), Li(l, "type", "checkbox"), la(l, t), l.processed = !0, l["if"] = "(" + n + ")==='checkbox'" + r, da(l, {
              exp: l["if"],
              block: l
            });
            var c = ma(e);
            ji(c, "v-for", !0), Li(c, "type", "radio"), la(c, t), da(l, {
              exp: "(" + n + ")==='radio'" + r,
              block: c
            });
            var d = ma(e);
            return ji(d, "v-for", !0), Li(d, ":type", n), la(d, t), da(l, {
              exp: o,
              block: d
            }), a ? l["else"] = !0 : s && (l.elseif = s), l;
          }
        }
      }
    }];

    var ya,
        Aa,
        ba = {
      expectHTML: !0,
      modules: va,
      directives: {
        model: function model(e, t, n) {
          n;
          var i = t.value,
              o = t.modifiers,
              r = e.tag,
              a = e.attrsMap.type;
          if (e.component) return Hi(e, i, o), !1;
          if ("select" === r) !function (e, t, n) {
            var i = 'var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return ' + (n && n.number ? "_n(val)" : "val") + "});";
            i = i + " " + Wi(t, "$event.target.multiple ? $$selectedVal : $$selectedVal[0]"), Pi(e, "change", i, null, !0);
          }(e, i, o);else if ("input" === r && "checkbox" === a) !function (e, t, n) {
            var i = n && n.number,
                o = Bi(e, "value") || "null",
                r = Bi(e, "true-value") || "true",
                a = Bi(e, "false-value") || "false";
            Di(e, "checked", "Array.isArray(" + t + ")?_i(" + t + "," + o + ")>-1" + ("true" === r ? ":(" + t + ")" : ":_q(" + t + "," + r + ")")), Pi(e, "change", "var $$a=" + t + ",$$el=$event.target,$$c=$$el.checked?(" + r + "):(" + a + ");if(Array.isArray($$a)){var $$v=" + (i ? "_n(" + o + ")" : o) + ",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&(" + Wi(t, "$$a.concat([$$v])") + ")}else{$$i>-1&&(" + Wi(t, "$$a.slice(0,$$i).concat($$a.slice($$i+1))") + ")}}else{" + Wi(t, "$$c") + "}", null, !0);
          }(e, i, o);else if ("input" === r && "radio" === a) !function (e, t, n) {
            var i = n && n.number,
                o = Bi(e, "value") || "null";
            Di(e, "checked", "_q(" + t + "," + (o = i ? "_n(" + o + ")" : o) + ")"), Pi(e, "change", Wi(t, o), null, !0);
          }(e, i, o);else if ("input" === r || "textarea" === r) !function (e, t, n) {
            var i = e.attrsMap.type;
            0;
            var o = n || {},
                r = o.lazy,
                a = o.number,
                s = o.trim,
                l = !r && "range" !== i,
                c = r ? "change" : "range" === i ? "__r" : "input",
                d = "$event.target.value";
            s && (d = "$event.target.value.trim()");
            a && (d = "_n(" + d + ")");
            var u = Wi(t, d);
            l && (u = "if($event.target.composing)return;" + u);
            Di(e, "value", "(" + t + ")"), Pi(e, c, u, null, !0), (s || a) && Pi(e, "blur", "$forceUpdate()");
          }(e, i, o);else {
            if (!F.isReservedTag(r)) return Hi(e, i, o), !1;
          }
          return !0;
        },
        text: function text(e, t) {
          t.value && Di(e, "textContent", "_s(" + t.value + ")", t);
        },
        html: function html(e, t) {
          t.value && Di(e, "innerHTML", "_s(" + t.value + ")", t);
        }
      },
      isPreTag: function isPreTag(e) {
        return "pre" === e;
      },
      isUnaryTag: yr,
      mustUseProp: $n,
      canBeLeftOpenTag: Ar,
      isReservedTag: Jn,
      getTagNamespace: Qn,
      staticKeys: function (e) {
        return e.reduce(function (e, t) {
          return e.concat(t.staticKeys || []);
        }, []).join(",");
      }(va)
    },
        Ea = _(function (e) {
      return m("type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap" + (e ? "," + e : ""));
    });

    function _a(e, t) {
      e && (ya = Ea(t.staticKeys || ""), Aa = t.isReservedTag || O, function e(t) {
        if (t["static"] = function (e) {
          if (2 === e.type) return !1;
          if (3 === e.type) return !0;
          return !(!e.pre && (e.hasBindings || e["if"] || e["for"] || v(e.tag) || !Aa(e.tag) || function (e) {
            for (; e.parent;) {
              if ("template" !== (e = e.parent).tag) return !1;
              if (e["for"]) return !0;
            }

            return !1;
          }(e) || !Object.keys(e).every(ya)));
        }(t), 1 === t.type) {
          if (!Aa(t.tag) && "slot" !== t.tag && null == t.attrsMap["inline-template"]) return;

          for (var n = 0, i = t.children.length; n < i; n++) {
            var o = t.children[n];
            e(o), o["static"] || (t["static"] = !1);
          }

          if (t.ifConditions) for (var r = 1, a = t.ifConditions.length; r < a; r++) {
            var s = t.ifConditions[r].block;
            e(s), s["static"] || (t["static"] = !1);
          }
        }
      }(e), function e(t, n) {
        if (1 === t.type) {
          if ((t["static"] || t.once) && (t.staticInFor = n), t["static"] && t.children.length && (1 !== t.children.length || 3 !== t.children[0].type)) return void (t.staticRoot = !0);
          if (t.staticRoot = !1, t.children) for (var i = 0, o = t.children.length; i < o; i++) {
            e(t.children[i], n || !!t["for"]);
          }
          if (t.ifConditions) for (var r = 1, a = t.ifConditions.length; r < a; r++) {
            e(t.ifConditions[r].block, n);
          }
        }
      }(e, !1));
    }

    var Ca = /^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/,
        wa = /\([^)]*?\);*$/,
        Sa = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/,
        Ia = {
      esc: 27,
      tab: 9,
      enter: 13,
      space: 32,
      up: 38,
      left: 37,
      right: 39,
      down: 40,
      "delete": [8, 46]
    },
        Ta = {
      esc: ["Esc", "Escape"],
      tab: "Tab",
      enter: "Enter",
      space: [" ", "Spacebar"],
      up: ["Up", "ArrowUp"],
      left: ["Left", "ArrowLeft"],
      right: ["Right", "ArrowRight"],
      down: ["Down", "ArrowDown"],
      "delete": ["Backspace", "Delete", "Del"]
    },
        ka = function ka(e) {
      return "if(" + e + ")return null;";
    },
        xa = {
      stop: "$event.stopPropagation();",
      prevent: "$event.preventDefault();",
      self: ka("$event.target !== $event.currentTarget"),
      ctrl: ka("!$event.ctrlKey"),
      shift: ka("!$event.shiftKey"),
      alt: ka("!$event.altKey"),
      meta: ka("!$event.metaKey"),
      left: ka("'button' in $event && $event.button !== 0"),
      middle: ka("'button' in $event && $event.button !== 1"),
      right: ka("'button' in $event && $event.button !== 2")
    };

    function Ma(e, t) {
      var n = t ? "nativeOn:" : "on:",
          i = "",
          o = "";

      for (var r in e) {
        var a = Na(e[r]);
        e[r] && e[r].dynamic ? o += r + "," + a + "," : i += '"' + r + '":' + a + ",";
      }

      return i = "{" + i.slice(0, -1) + "}", o ? n + "_d(" + i + ",[" + o.slice(0, -1) + "])" : n + i;
    }

    function Na(e) {
      if (!e) return "function(){}";
      if (Array.isArray(e)) return "[" + e.map(function (e) {
        return Na(e);
      }).join(",") + "]";
      var t = Sa.test(e.value),
          n = Ca.test(e.value),
          i = Sa.test(e.value.replace(wa, ""));

      if (e.modifiers) {
        var o = "",
            r = "",
            a = [];

        for (var s in e.modifiers) {
          if (xa[s]) r += xa[s], Ia[s] && a.push(s);else if ("exact" === s) {
            var l = e.modifiers;
            r += ka(["ctrl", "shift", "alt", "meta"].filter(function (e) {
              return !l[e];
            }).map(function (e) {
              return "$event." + e + "Key";
            }).join("||"));
          } else a.push(s);
        }

        return a.length && (o += function (e) {
          return "if(!$event.type.indexOf('key')&&" + e.map(Da).join("&&") + ")return null;";
        }(a)), r && (o += r), "function($event){" + o + (t ? "return " + e.value + "($event)" : n ? "return (" + e.value + ")($event)" : i ? "return " + e.value : e.value) + "}";
      }

      return t || n ? e.value : "function($event){" + (i ? "return " + e.value : e.value) + "}";
    }

    function Da(e) {
      var t = parseInt(e, 10);
      if (t) return "$event.keyCode!==" + t;
      var n = Ia[e],
          i = Ta[e];
      return "_k($event.keyCode," + JSON.stringify(e) + "," + JSON.stringify(n) + ",$event.key," + JSON.stringify(i) + ")";
    }

    var Oa = {
      on: function on(e, t) {
        e.wrapListeners = function (e) {
          return "_g(" + e + "," + t.value + ")";
        };
      },
      bind: function bind(e, t) {
        e.wrapData = function (n) {
          return "_b(" + n + ",'" + e.tag + "'," + t.value + "," + (t.modifiers && t.modifiers.prop ? "true" : "false") + (t.modifiers && t.modifiers.sync ? ",true" : "") + ")";
        };
      },
      cloak: D
    },
        La = function La(e) {
      this.options = e, this.warn = e.warn || Mi, this.transforms = Ni(e.modules, "transformCode"), this.dataGenFns = Ni(e.modules, "genData"), this.directives = M(M({}, Oa), e.directives);
      var t = e.isReservedTag || O;
      this.maybeComponent = function (e) {
        return !!e.component || !t(e.tag);
      }, this.onceId = 0, this.staticRenderFns = [], this.pre = !1;
    };

    function $a(e, t) {
      var n = new La(t);
      return {
        render: "with(this){return " + (e ? Ra(e, n) : '_c("div")') + "}",
        staticRenderFns: n.staticRenderFns
      };
    }

    function Ra(e, t) {
      if (e.parent && (e.pre = e.pre || e.parent.pre), e.staticRoot && !e.staticProcessed) return Pa(e, t);
      if (e.once && !e.onceProcessed) return Ba(e, t);
      if (e["for"] && !e.forProcessed) return Fa(e, t);
      if (e["if"] && !e.ifProcessed) return ja(e, t);

      if ("template" !== e.tag || e.slotTarget || t.pre) {
        if ("slot" === e.tag) return function (e, t) {
          var n = e.slotName || '"default"',
              i = Ga(e, t),
              o = "_t(" + n + (i ? "," + i : ""),
              r = e.attrs || e.dynamicAttrs ? za((e.attrs || []).concat(e.dynamicAttrs || []).map(function (e) {
            return {
              name: w(e.name),
              value: e.value,
              dynamic: e.dynamic
            };
          })) : null,
              a = e.attrsMap["v-bind"];
          !r && !a || i || (o += ",null");
          r && (o += "," + r);
          a && (o += (r ? "" : ",null") + "," + a);
          return o + ")";
        }(e, t);
        var n;
        if (e.component) n = function (e, t, n) {
          var i = t.inlineTemplate ? null : Ga(t, n, !0);
          return "_c(" + e + "," + Ua(t, n) + (i ? "," + i : "") + ")";
        }(e.component, e, t);else {
          var i;
          (!e.plain || e.pre && t.maybeComponent(e)) && (i = Ua(e, t));
          var o = e.inlineTemplate ? null : Ga(e, t, !0);
          n = "_c('" + e.tag + "'" + (i ? "," + i : "") + (o ? "," + o : "") + ")";
        }

        for (var r = 0; r < t.transforms.length; r++) {
          n = t.transforms[r](e, n);
        }

        return n;
      }

      return Ga(e, t) || "void 0";
    }

    function Pa(e, t) {
      e.staticProcessed = !0;
      var n = t.pre;
      return e.pre && (t.pre = e.pre), t.staticRenderFns.push("with(this){return " + Ra(e, t) + "}"), t.pre = n, "_m(" + (t.staticRenderFns.length - 1) + (e.staticInFor ? ",true" : "") + ")";
    }

    function Ba(e, t) {
      if (e.onceProcessed = !0, e["if"] && !e.ifProcessed) return ja(e, t);

      if (e.staticInFor) {
        for (var n = "", i = e.parent; i;) {
          if (i["for"]) {
            n = i.key;
            break;
          }

          i = i.parent;
        }

        return n ? "_o(" + Ra(e, t) + "," + t.onceId++ + "," + n + ")" : Ra(e, t);
      }

      return Pa(e, t);
    }

    function ja(e, t, n, i) {
      return e.ifProcessed = !0, function e(t, n, i, o) {
        if (!t.length) return o || "_e()";
        var r = t.shift();
        return r.exp ? "(" + r.exp + ")?" + a(r.block) + ":" + e(t, n, i, o) : "" + a(r.block);

        function a(e) {
          return i ? i(e, n) : e.once ? Ba(e, n) : Ra(e, n);
        }
      }(e.ifConditions.slice(), t, n, i);
    }

    function Fa(e, t, n, i) {
      var o = e["for"],
          r = e.alias,
          a = e.iterator1 ? "," + e.iterator1 : "",
          s = e.iterator2 ? "," + e.iterator2 : "";
      return e.forProcessed = !0, (i || "_l") + "((" + o + "),function(" + r + a + s + "){return " + (n || Ra)(e, t) + "})";
    }

    function Ua(e, t) {
      var n = "{",
          i = function (e, t) {
        var n = e.directives;
        if (!n) return;
        var i,
            o,
            r,
            a,
            s = "directives:[",
            l = !1;

        for (i = 0, o = n.length; i < o; i++) {
          r = n[i], a = !0;
          var c = t.directives[r.name];
          c && (a = !!c(e, r, t.warn)), a && (l = !0, s += '{name:"' + r.name + '",rawName:"' + r.rawName + '"' + (r.value ? ",value:(" + r.value + "),expression:" + JSON.stringify(r.value) : "") + (r.arg ? ",arg:" + (r.isDynamicArg ? r.arg : '"' + r.arg + '"') : "") + (r.modifiers ? ",modifiers:" + JSON.stringify(r.modifiers) : "") + "},");
        }

        if (l) return s.slice(0, -1) + "]";
      }(e, t);

      i && (n += i + ","), e.key && (n += "key:" + e.key + ","), e.ref && (n += "ref:" + e.ref + ","), e.refInFor && (n += "refInFor:true,"), e.pre && (n += "pre:true,"), e.component && (n += 'tag:"' + e.tag + '",');

      for (var o = 0; o < t.dataGenFns.length; o++) {
        n += t.dataGenFns[o](e);
      }

      if (e.attrs && (n += "attrs:" + za(e.attrs) + ","), e.props && (n += "domProps:" + za(e.props) + ","), e.events && (n += Ma(e.events, !1) + ","), e.nativeEvents && (n += Ma(e.nativeEvents, !0) + ","), e.slotTarget && !e.slotScope && (n += "slot:" + e.slotTarget + ","), e.scopedSlots && (n += function (e, t, n) {
        var i = e["for"] || Object.keys(t).some(function (e) {
          var n = t[e];
          return n.slotTargetDynamic || n["if"] || n["for"] || Ha(n);
        }),
            o = !!e["if"];
        if (!i) for (var r = e.parent; r;) {
          if (r.slotScope && "_empty_" !== r.slotScope || r["for"]) {
            i = !0;
            break;
          }

          r["if"] && (o = !0), r = r.parent;
        }
        var a = Object.keys(t).map(function (e) {
          return Wa(t[e], n);
        }).join(",");
        return "scopedSlots:_u([" + a + "]" + (i ? ",null,true" : "") + (!i && o ? ",null,false," + function (e) {
          var t = 5381,
              n = e.length;

          for (; n;) {
            t = 33 * t ^ e.charCodeAt(--n);
          }

          return t >>> 0;
        }(a) : "") + ")";
      }(e, e.scopedSlots, t) + ","), e.model && (n += "model:{value:" + e.model.value + ",callback:" + e.model.callback + ",expression:" + e.model.expression + "},"), e.inlineTemplate) {
        var r = function (e, t) {
          var n = e.children[0];
          0;

          if (n && 1 === n.type) {
            var i = $a(n, t.options);
            return "inlineTemplate:{render:function(){" + i.render + "},staticRenderFns:[" + i.staticRenderFns.map(function (e) {
              return "function(){" + e + "}";
            }).join(",") + "]}";
          }
        }(e, t);

        r && (n += r + ",");
      }

      return n = n.replace(/,$/, "") + "}", e.dynamicAttrs && (n = "_b(" + n + ',"' + e.tag + '",' + za(e.dynamicAttrs) + ")"), e.wrapData && (n = e.wrapData(n)), e.wrapListeners && (n = e.wrapListeners(n)), n;
    }

    function Ha(e) {
      return 1 === e.type && ("slot" === e.tag || e.children.some(Ha));
    }

    function Wa(e, t) {
      var n = e.attrsMap["slot-scope"];
      if (e["if"] && !e.ifProcessed && !n) return ja(e, t, Wa, "null");
      if (e["for"] && !e.forProcessed) return Fa(e, t, Wa);
      var i = "_empty_" === e.slotScope ? "" : String(e.slotScope),
          o = "function(" + i + "){return " + ("template" === e.tag ? e["if"] && n ? "(" + e["if"] + ")?" + (Ga(e, t) || "undefined") + ":undefined" : Ga(e, t) || "undefined" : Ra(e, t)) + "}",
          r = i ? "" : ",proxy:true";
      return "{key:" + (e.slotTarget || '"default"') + ",fn:" + o + r + "}";
    }

    function Ga(e, t, n, i, o) {
      var r = e.children;

      if (r.length) {
        var a = r[0];

        if (1 === r.length && a["for"] && "template" !== a.tag && "slot" !== a.tag) {
          var s = n ? t.maybeComponent(a) ? ",1" : ",0" : "";
          return "" + (i || Ra)(a, t) + s;
        }

        var l = n ? function (e, t) {
          for (var n = 0, i = 0; i < e.length; i++) {
            var o = e[i];

            if (1 === o.type) {
              if (Va(o) || o.ifConditions && o.ifConditions.some(function (e) {
                return Va(e.block);
              })) {
                n = 2;
                break;
              }

              (t(o) || o.ifConditions && o.ifConditions.some(function (e) {
                return t(e.block);
              })) && (n = 1);
            }
          }

          return n;
        }(r, t.maybeComponent) : 0,
            c = o || qa;
        return "[" + r.map(function (e) {
          return c(e, t);
        }).join(",") + "]" + (l ? "," + l : "");
      }
    }

    function Va(e) {
      return void 0 !== e["for"] || "template" === e.tag || "slot" === e.tag;
    }

    function qa(e, t) {
      return 1 === e.type ? Ra(e, t) : 3 === e.type && e.isComment ? function (e) {
        return "_e(" + JSON.stringify(e.text) + ")";
      }(e) : function (e) {
        return "_v(" + (2 === e.type ? e.expression : Ya(JSON.stringify(e.text))) + ")";
      }(e);
    }

    function za(e) {
      for (var t = "", n = "", i = 0; i < e.length; i++) {
        var o = e[i],
            r = Ya(o.value);
        o.dynamic ? n += o.name + "," + r + "," : t += '"' + o.name + '":' + r + ",";
      }

      return t = "{" + t.slice(0, -1) + "}", n ? "_d(" + t + ",[" + n.slice(0, -1) + "])" : t;
    }

    function Ya(e) {
      return e.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }

    new RegExp("\\b" + "do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b") + "\\b"), new RegExp("\\b" + "delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b") + "\\s*\\([^\\)]*\\)");

    function Ka(e, t) {
      try {
        return new Function(e);
      } catch (n) {
        return t.push({
          err: n,
          code: e
        }), D;
      }
    }

    function Ja(e) {
      var t = Object.create(null);
      return function (n, i, o) {
        (i = M({}, i)).warn;
        delete i.warn;
        var r = i.delimiters ? String(i.delimiters) + n : n;
        if (t[r]) return t[r];
        var a = e(n, i);
        var s = {},
            l = [];
        return s.render = Ka(a.render, l), s.staticRenderFns = a.staticRenderFns.map(function (e) {
          return Ka(e, l);
        }), t[r] = s;
      };
    }

    var Qa,
        Xa,
        Za = (Qa = function Qa(e, t) {
      var n = sa(e.trim(), t);
      !1 !== t.optimize && _a(n, t);
      var i = $a(n, t);
      return {
        ast: n,
        render: i.render,
        staticRenderFns: i.staticRenderFns
      };
    }, function (e) {
      function t(t, n) {
        var i = Object.create(e),
            o = [],
            r = [];
        if (n) for (var a in n.modules && (i.modules = (e.modules || []).concat(n.modules)), n.directives && (i.directives = M(Object.create(e.directives || null), n.directives)), n) {
          "modules" !== a && "directives" !== a && (i[a] = n[a]);
        }

        i.warn = function (e, t, n) {
          (n ? r : o).push(e);
        };

        var s = Qa(t.trim(), i);
        return s.errors = o, s.tips = r, s;
      }

      return {
        compile: t,
        compileToFunctions: Ja(t)
      };
    })(ba),
        es = (Za.compile, Za.compileToFunctions);

    function ts(e) {
      return (Xa = Xa || document.createElement("div")).innerHTML = e ? '<a href="\n"/>' : '<div a="\n"/>', Xa.innerHTML.indexOf("&#10;") > 0;
    }

    var ns = !!z && ts(!1),
        is = !!z && ts(!0),
        os = _(function (e) {
      var t = ei(e);
      return t && t.innerHTML;
    }),
        rs = Sn.prototype.$mount;

    Sn.prototype.$mount = function (e, t) {
      if ((e = e && ei(e)) === document.body || e === document.documentElement) return this;
      var n = this.$options;

      if (!n.render) {
        var i = n.template;
        if (i) {
          if ("string" == typeof i) "#" === i.charAt(0) && (i = os(i));else {
            if (!i.nodeType) return this;
            i = i.innerHTML;
          }
        } else e && (i = function (e) {
          if (e.outerHTML) return e.outerHTML;
          var t = document.createElement("div");
          return t.appendChild(e.cloneNode(!0)), t.innerHTML;
        }(e));

        if (i) {
          0;
          var o = es(i, {
            outputSourceRange: !1,
            shouldDecodeNewlines: ns,
            shouldDecodeNewlinesForHref: is,
            delimiters: n.delimiters,
            comments: n.comments
          }, this),
              r = o.render,
              a = o.staticRenderFns;
          n.render = r, n.staticRenderFns = a;
        }
      }

      return rs.call(this, e, t);
    }, Sn.compile = es, t.a = Sn;
  }).call(this, n(24), n(31).setImmediate);
}, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return i;
  }), n.d(t, "b", function () {
    return o;
  });

  var i = function i() {
    _classCallCheck(this, i);

    this.showGrid = !1, this.showEditorGrid = !1, this.showFPS = !1, this.showCellNumbers = !1, this.showFocus = !1, this.enableSelection = !1, this.showBlocks = !1, this.showOnTops = !1, this.enableAntialiasing = !0, this.fps = 0;
  };

  function o() {}
}, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return i;
  });
  var i,
      o = n(1),
      r = n(2),
      a = n(17),
      s = n(6),
      l = n(4),
      c = n(27),
      d = n(7),
      u = n(20),
      f = n(3),
      p = n(0);
  !function (e) {
    var t;

    function n(e, t) {
      t.dynamicBlocks = [];

      for (var _e9 = 0; _e9 < t.height * t.width; _e9++) {
        t.dynamicBlocks[_e9] = 0;
      }

      var n = new Array();
      void 0 !== e && n.push(e), void 0 !== t.events && (n = n.concat(t.events));

      var _iterator3 = _createForOfIteratorHelper(n),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _e10 = _step3.value;

          var _n8 = d.a.getState(_e10);

          if (void 0 === _n8 || p.a.isEmpty(_n8.block) || _n8.block) {
            var _n9 = r.a.cellToGid(_e10, t.width);

            t.dynamicBlocks[_n9] = l.a.ALL;
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }

    function i(e, t, n, i, o) {
      var a = r.a.getDirectionTarget({
        i: t,
        j: n
      }, i),
          s = !1;
      return 4 === r.a.getDirection(a, o) && (s = !0), r.a.isMovementBlocked(e, t, n, i, s);
    }

    !function (e) {
      e[e.BASIC = 0] = "BASIC", e[e.D_STAR_LITE = 1] = "D_STAR_LITE";
    }(t = e.PathfinderEnum || (e.PathfinderEnum = {})), e.loadMap = function (e, t, n) {
      s.a.load(e + "", f.a.MAP, function (i) {
        if (p.a.isEmpty(i)) console.error("Error while loading map: " + e), n();else try {
          var _e11 = JSON.parse(i);

          if (!p.a.isEmpty(_e11.events)) {
            _e11.maxEventId = 0;

            var _iterator4 = _createForOfIteratorHelper(_e11.events),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var _t5 = _step4.value;
                _t5.id > _e11.maxEventId && (_e11.maxEventId = _t5.id);
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
          }

          n(_e11);
        } catch (o) {
          "SyntaxError" === o.name ? console.error("Error while parsing map: " + e) : "TypeError" === o.name ? console.error("Error while reading map: " + e) : console.error(o), console.error(i), a.a.showError(t.getContext("2d")), n();
        }
      });
    }, e.renderUI = function (e, t, n, i, a, s, c) {
      if ((c || i.showGrid || i.showEditorGrid || i.showFocus || i.showBlocks || i.showOnTops) && (!c || i.showFPS || i.showCellNumbers || i.showFocus) && !p.a.isEmpty(i)) {
        if (!c && i.showBlocks && !p.a.isEmpty(e) && (!p.a.isEmpty(e.blocks) || !p.a.isEmpty(e.dynamicBlocks))) {
          n.save(), n.globalAlpha = .5, n.fillStyle = o.a.Color.YELLOW, n.strokeStyle = o.a.Color.BLACK, n.lineWidth = 2;

          var _i4 = p.a.isEmpty(e.blocks) ? l.a.NONE : e.blocks[s * e.width + a],
              _c = p.a.isEmpty(e.dynamicBlocks) ? l.a.NONE : e.dynamicBlocks[s * e.width + a];

          (_i4 > l.a.NONE || _c > l.a.NONE) && (_c > l.a.NONE && (n.fillStyle = o.a.Color.GREEN), r.a.isBlockDirectionBlocked(_i4 | _c, l.a.UP) && (n.beginPath(), n.moveTo(a * t.cellW, s * t.cellH), n.lineTo((a + .5) * t.cellW, (s + .2) * t.cellH), n.lineTo((a + 1) * t.cellW, s * t.cellH), n.fill(), n.stroke()), r.a.isBlockDirectionBlocked(_i4 | _c, l.a.DOWN) && (n.beginPath(), n.moveTo(a * t.cellW, (s + 1) * t.cellH), n.lineTo((a + .5) * t.cellW, (s + .8) * t.cellH), n.lineTo((a + 1) * t.cellW, (s + 1) * t.cellH), n.fill(), n.stroke()), r.a.isBlockDirectionBlocked(_i4 | _c, l.a.LEFT) && (n.beginPath(), n.moveTo(a * t.cellW, s * t.cellH), n.lineTo((a + .2) * t.cellW, (s + .5) * t.cellH), n.lineTo(a * t.cellW, (s + 1) * t.cellH), n.fill(), n.stroke()), r.a.isBlockDirectionBlocked(_i4 | _c, l.a.RIGHT) && (n.beginPath(), n.moveTo((a + 1) * t.cellW, s * t.cellH), n.lineTo((a + .8) * t.cellW, (s + .5) * t.cellH), n.lineTo((a + 1) * t.cellW, (s + 1) * t.cellH), n.fill(), n.stroke())), n.restore();
        }

        if (!c && i.showOnTops && !p.a.isEmpty(e) && !p.a.isEmpty(e.tileset.onTop)) {
          var _i5 = r.a.cellToGid({
            i: a,
            j: s
          }, e.width);

          r.a.normalizeZIndex(e.tileset.onTop[_i5]) > 0 && (n.save(), n.globalAlpha = .6, n.beginPath(), n.fillStyle = o.a.Color.AQUA, n.arc(Math.floor((a + .5) * t.cellW), Math.floor((s + .5) * t.cellH), 10, 0, o.a.DOUBLE_PI), n.closePath(), n.fill(), n.fillStyle = o.a.Color.DARKBLUE, n.font = "bold 14px Arial", n.fillText("" + e.tileset.onTop[_i5], (a + .35) * t.cellW, (s + .65) * t.cellH), n.restore());
        }

        !c && i.showGrid && (n.strokeStyle = o.a.Color.RED, n.strokeRect(a * t.cellW, s * t.cellH, t.cellW, t.cellH)), !c && i.showEditorGrid && (n.save(), n.globalAlpha = .4, n.strokeStyle = o.a.Color.GREY, n.strokeRect(a * t.cellW, s * t.cellH, t.cellW, t.cellH), n.restore()), !c && i.showCellNumbers && (n.fillStyle = o.a.Color.RED, n.font = "bold 10px Arial", n.fillText(a + "," + s, a * t.cellW + 1, s * t.cellH + 10));
      }
    }, e.renderGlobalUI = function (e, t, n) {
      if (n.enableSelection && (void 0 !== n.selectCellStart || void 0 !== n.selectEventCell)) {
        var _i6, _r6;

        t.save();
        var _a3 = e.cellW,
            _s = e.cellH;

        if (void 0 !== n.selectCellStart) {
          if (_i6 = n.selectCellStart.i * e.cellW, _r6 = n.selectCellStart.j * e.cellH, void 0 !== n.selectCellEnd) {
            var _t6 = n.selectCellEnd.i * e.cellW,
                _o4 = n.selectCellEnd.j * e.cellH;

            _i6 > _t6 ? (_a3 = _i6 - _t6, _i6 = _t6) : _a3 = _t6 - _i6, _r6 > _o4 ? (_s = _r6 - _o4, _r6 = _o4) : _s = _o4 - _r6, _a3 += e.cellW, _s += e.cellH;
          }

          t.strokeStyle = o.a.Color.RED, t.lineWidth = 3;
        } else _i6 = n.selectEventCell.i * e.cellW, _r6 = n.selectEventCell.j * e.cellH, t.strokeStyle = o.a.Color.LIME, t.lineWidth = 2;

        t.strokeRect(_i6, _r6, _a3, _s), t.restore();
      }
    }, e.resizeMap = function (e, t, n) {
      var i = e.width,
          o = n,
          r = e.height,
          a = t;
      if (i === o && r === a || p.a.isEmpty(e)) return;
      var s,
          l,
          c = Math.min(i, o);
      if (o < i) s = i - o;else {
        l = [];

        for (var _e12 = 0; _e12 < o - i; _e12++) {
          l[_e12] = void 0;
        }
      }

      for (var _t7 = 0; _t7 < e.layers.length; _t7++) {
        var _n10 = e.layers[_t7];

        if (void 0 !== _n10.data) {
          if (i !== o) for (var _e13 = 0; _e13 < r; _e13++) {
            void 0 !== s ? _n10.data.splice(c + _e13 * o, s) : void 0 !== l ? Array.prototype.splice.apply(_n10.data, [c + _e13 * o, 0].concat(l)) : console.error("Unexpected case");
          }

          if (r > a && (_n10.data.length = o * a), r < a) {
            var _e14 = [];

            for (var _t8 = 0; _t8 < o - i; _t8++) {
              _e14[_t8] = void 0;
            }

            for (var _t9 = i; _t9 < o; _t9++) {
              _n10.data.concat(_e14);
            }
          }
        }
      }

      e.height = t, e.width = n;
    }, e.initTransientData = function (e) {
      var t = void 0,
          i = e.map,
          o = e.grid;
      if (e instanceof c.a && (t = e.hero), function (e) {
        if (e.blocks = [], !p.a.isEmpty(e.layers) && !p.a.isEmpty(e.tileset.blocks)) {
          for (var _t10 = 0; _t10 < e.height * e.width; _t10++) {
            e.blocks[_t10] = 0;
          }

          for (var _t11 = 0; _t11 < e.layers.length; _t11++) {
            var _n11 = e.layers[_t11];
            if (void 0 !== _n11.data) for (var _t12 = 0; _t12 < _n11.data.length; _t12++) {
              var _i7 = _n11.data[_t12];
              if (p.a.isEmpty(_i7) || _i7 < 0 || _i7 >= e.tileset.blocks.length) continue;
              if (void 0 !== e.tileset.onTop && r.a.normalizeZIndex(e.tileset.onTop[_i7]) > 0) continue;
              var _o5 = e.tileset.blocks[_i7];
              p.a.isEmpty(_o5) && (_o5 = l.a.NONE), e.blocks[_t12] = _o5;
            }
          }
        }
      }(i), n(t, i), p.a.isEmpty(i.events)) i.events = [];else {
        var _iterator5 = _createForOfIteratorHelper(i.events),
            _step5;

        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var _e15 = _step5.value;
            d.a.initTransientData(i, o, _e15);
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
      }
      i.width = parseInt(i.width + ""), i.height = parseInt(i.height + ""), u.a.initTransientData(i.tileset);
    }, e.updateDynamicData = function (e, t) {
      n(e, t);
    }, e.pathFinder = function (e, n, o) {
      var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : t.D_STAR_LITE;
      var s = p.a.now(),
          l = o.i - n.i,
          c = o.j - n.j;
      if (0 === l && 0 === c) return 4;
      {
        var L = 4;

        switch (a) {
          case t.BASIC:
            Math.abs(l) > Math.abs(c) ? (L = l > 0 ? 1 : 3, i(e, n.i, n.j, L, o) && (L = c > 0 ? 2 : 0)) : (L = c > 0 ? 2 : 0, i(e, n.i, n.j, L, o) && (L = l > 0 ? 1 : 3)), i(e, n.i, n.j, L, o) && (L = 4);
            break;

          case t.D_STAR_LITE:
            {
              var A = function A(e) {
                return [Math.min(C(e), w(e)) + k(m, e) + _i8, Math.min(C(e), w(e))];
              };

              var b = function b(e) {
                C(e) !== w(e) ? (e.key = A(e), N(e)) : function (e) {
                  var _iterator6 = _createForOfIteratorHelper(f),
                      _step6;

                  try {
                    for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                      var _t14 = _step6.value;
                      if (M(e, _t14)) return !0;
                    }
                  } catch (err) {
                    _iterator6.e(err);
                  } finally {
                    _iterator6.f();
                  }

                  return !1;
                }(e) && D(e);
              };

              var E = function E(e, n) {
                n > _t13 && (n = _t13);
                var i = r.a.cellToGid(e.cell, y);
                h[i] = n;
              };

              var _ = function _(e, n) {
                n > _t13 && (n = _t13);
                var i = r.a.cellToGid(e.cell, y);
                g[i] = n;
              };

              var C = function C(e) {
                var t = r.a.cellToGid(e.cell, y);
                return h[t];
              };

              var w = function w(e) {
                var t = r.a.cellToGid(e.cell, y);
                return g[t];
              };

              var S = function S(t) {
                var n = r.a.cellToGid(t.cell, e.width),
                    i = [];
                return 0 !== t.cell.i && i.push(u[n - 1]), t.cell.i < e.width - 1 && i.push(u[n + 1]), n - e.width >= 0 && i.push(u[n - e.width]), n + e.width < u.length && i.push(u[n + e.width]), i;
              };

              var I = function I(t) {
                var n = r.a.cellToGid(t.cell, e.width),
                    i = [];
                return 0 !== t.cell.i && i.push(u[n - 1]), t.cell.i < e.width - 1 && i.push(u[n + 1]), n - e.width >= 0 && i.push(u[n - e.width]), n + e.width < u.length && i.push(u[n + e.width]), i;
              };

              var T = function T(n, i) {
                var o = r.a.getDirection(i.cell, n.cell),
                    a = 4 === r.a.getDirection(i.cell, v.cell);
                return r.a.isMovementBlocked(e, n.cell.i, n.cell.j, o, a) ? _t13 : 1;
              };

              var k = function k(e, t) {
                return Math.abs(e.cell.i - t.cell.i) + Math.abs(e.cell.j - t.cell.j);
              };

              var x = function x(e, t) {
                return e[0] === t[0] && e[1] === t[1] ? 0 : e[0] > t[0] || e[0] === t[0] && e[1] > t[1] ? 1 : -1;
              };

              var M = function M(e, t) {
                return e.cell.i === t.cell.i && e.cell.j === t.cell.j;
              };

              var N = function N(e) {
                var _iterator7 = _createForOfIteratorHelper(f),
                    _step7;

                try {
                  for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                    var _t15 = _step7.value;
                    if (M(e, _t15)) return void (_t15.key = e.key);
                  }
                } catch (err) {
                  _iterator7.e(err);
                } finally {
                  _iterator7.f();
                }

                f.push(e);
              };

              var D = function D(e) {
                var t = [];

                var _iterator8 = _createForOfIteratorHelper(f),
                    _step8;

                try {
                  for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                    var _n12 = _step8.value;
                    M(e, _n12) || t.push(_n12);
                  }
                } catch (err) {
                  _iterator8.e(err);
                } finally {
                  _iterator8.f();
                }

                f = t;
              };

              var O = function O() {
                var e = void 0;

                var _iterator9 = _createForOfIteratorHelper(f),
                    _step9;

                try {
                  for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                    var _t16 = _step9.value;
                    (void 0 === e || x(_t16.key, e.key) < 0) && (e = _t16);
                  }
                } catch (err) {
                  _iterator9.e(err);
                } finally {
                  _iterator9.f();
                }

                return void 0 === e && (e = {
                  cell: {
                    i: -1,
                    j: -1
                  },
                  key: [_t13, _t13]
                }), e;
              };

              var u, f, h, g;
              var _t13 = Number.MAX_SAFE_INTEGER;
              var m, v;
              var _i8 = 0;
              var y = e.width;
              m = {
                cell: n
              }, v = {
                cell: o
              }, L = function () {
                (function () {
                  u = [];

                  for (var _t17 = 0; _t17 < e.height; _t17++) {
                    for (var _n13 = 0; _n13 < e.width; _n13++) {
                      var _e16 = {
                        cell: {
                          i: _n13,
                          j: _t17
                        }
                      };
                      u.push(_e16);
                    }
                  }

                  h = [], g = [], f = [], _i8 = 0;

                  var _iterator10 = _createForOfIteratorHelper(u),
                      _step10;

                  try {
                    for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                      var _e17 = _step10.value;
                      E(_e17, _t13), _(_e17, _t13);
                    }
                  } catch (err) {
                    _iterator10.e(err);
                  } finally {
                    _iterator10.f();
                  }

                  _(v, 0);

                  var n = v;
                  n.key = [k(m, v), 0], f.push(n);
                })(), function () {
                  for (; x(O().key, A(m)) < 0 || w(m) > C(m);) {
                    var _e18 = O(),
                        _n14 = _e18,
                        _i9 = _e18.key,
                        _o6 = A(_n14);

                    if (x(_i9, _o6) < 0) _n14.key = _o6, N(_n14);else if (C(_n14) > w(_n14)) {
                      E(_n14, w(_n14)), D(_n14);

                      var _iterator11 = _createForOfIteratorHelper(I(_n14)),
                          _step11;

                      try {
                        for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                          var _e19 = _step11.value;
                          M(_e19, v) || _(_e19, Math.min(w(_e19), T(_e19, _n14) + C(_n14))), b(_e19);
                        }
                      } catch (err) {
                        _iterator11.e(err);
                      } finally {
                        _iterator11.f();
                      }
                    } else {
                      var _e20 = C(_n14);

                      E(_n14, _t13);

                      var _i10 = I(_n14);

                      _i10.push(_n14);

                      var _iterator12 = _createForOfIteratorHelper(_i10),
                          _step12;

                      try {
                        for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                          var _o7 = _step12.value;

                          if ((w(_o7) === T(_o7, _n14) + _e20 || w(_o7) === _t13 && (T(_o7, _n14) === _t13 || _e20 === _t13)) && !M(_o7, v)) {
                            var _e21 = void 0;

                            var _iterator13 = _createForOfIteratorHelper(S(_o7)),
                                _step13;

                            try {
                              for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                                var _n15 = _step13.value;

                                var _i11 = T(_o7, _n15) + C(_n15);

                                _i11 > _t13 && (_i11 = _t13), (void 0 === _e21 || _e21 > _i11) && (_e21 = _i11);
                              }
                            } catch (err) {
                              _iterator13.e(err);
                            } finally {
                              _iterator13.f();
                            }

                            _(_o7, _e21);
                          }

                          b(_o7);
                        }
                      } catch (err) {
                        _iterator12.e(err);
                      } finally {
                        _iterator12.f();
                      }
                    }
                  }
                }();

                for (; !M(m, v);) {
                  var _e22 = void 0,
                      _t18 = void 0;

                  var _iterator14 = _createForOfIteratorHelper(S(m)),
                      _step14;

                  try {
                    for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                      var _n16 = _step14.value;

                      var _i12 = T(m, _n16) + C(_n16);

                      (void 0 === _t18 || _t18 > _i12) && (_t18 = _i12, _e22 = _n16);
                    }
                  } catch (err) {
                    _iterator14.e(err);
                  } finally {
                    _iterator14.f();
                  }

                  return m = _e22, r.a.getDirection(m.cell, n);
                }

                return 4;
              }();
            }
        }

        4 !== L && (d.a.addDirectionToPath(n, L, 3), void 0 === n.path && (n.path = []), 3 === n.path.length && n.path[0] === n.path[2] && r.a.isDirectionsOpposed(n.path[0], n.path[1]) && (L = 4));

        var _$ = p.a.now() - s;

        return _$ > 10 && console.debug("Path found in: " + _$), L;
      }
    };
  }(i || (i = {}));
}, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return i;
  });
  var i = {
    maps: {
      start: {
        map: "0",
        i: 0,
        j: 0
      }
    },
    hero: {
      name: "Fart",
      charaset: "fart.png"
    },
    ui: {
      lang: n(4).b.EN,
      skin: "ld3-webskin1.png",
      enableCLI: !0
    }
  };
}, function (e, t, n) {
  "use strict";

  var i;
  n.d(t, "a", function () {
    return i;
  }), function (e) {
    var t = [];

    var n = function n() {
      _classCallCheck(this, n);
    };

    n.UP = "38", n.DOWN = "40", n.LEFT = "37", n.RIGHT = "39", n.CTRL = "17", n.ALT = "18", n.ENTER = "13", n.SPACE = "32", n.CAPS = "20", n.SHIFT = "16", n.W = "87", n.A = "65", n.D = "68", n.S = "83", n.J = "74", n.K = "75", n.F1 = "112", n.F2 = "113", n.F3 = "114", n.F4 = "115", n.F5 = "116", n.F6 = "117", e.Keys = n;

    var i = function i() {
      _classCallCheck(this, i);
    };

    function o() {
      var _iterator15 = _createForOfIteratorHelper(t),
          _step15;

      try {
        for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
          var _e23 = _step15.value;

          try {
            _e23();
          } catch (e) {
            console.error("Error executing onAction callback:"), console.error(e);
          }
        }
      } catch (err) {
        _iterator15.e(err);
      } finally {
        _iterator15.f();
      }

      t = [];
    }

    i.LEFT = 1, i.RIGHT = 2, i.MIDDLE = 4, e.MouseButtons = i, e.init = function (e, t, i, r, a, s, l, c, d, u, f, p, h, g, m) {
      var v,
          y = !1;

      i[n.SPACE] = function (e) {
        y ? (f(), y = !1) : (u(), y = !0);
      };

      var A = !1;

      function b(e) {
        var n = {
          x: e.clientX,
          y: e.clientY
        };
        return t.mapPositionToGrid(n);
      }

      e.addEventListener("click", function (e) {
        var t = b(e);
        a(t.i, t.j, t.x, t.y), o();
      }), e.addEventListener("mousemove", function (e) {
        var t = b(e);
        A ? c(t.i, t.j, e.buttons) : d(t.i, t.j);
      }), e.addEventListener("mousedown", function (e) {
        A = !0;
        var t = b(e);
        s(t.i, t.j, t.x, t.y, e.buttons), o();
      }), e.addEventListener("mouseup", function (e) {
        A = !1;
        var t = b(e);
        l(t.i, t.j, e.buttons);
      }), e.addEventListener("mouseout", function (e) {
        A ? c(void 0, void 0, e.buttons) : d(void 0, void 0);
      }), e.addEventListener("contextmenu", function (e) {
        e.preventDefault();
        var t = b(e);
        h(t.i, t.j);
      }), e.addEventListener("dblclick", function (e) {
        var t = b(e);
        g(t.i, t.j);
      }), e.addEventListener("wheel", function (e) {
        var t = b(e);
        m(t.i, t.j);
      }, {
        passive: !0
      }), e.addEventListener("touchstart", function (e) {
        var t = b(e);
        s(t.i, t.j, t.x, t.y), o();
      }, {
        passive: !0
      }), e.addEventListener("touchend", function (e) {
        var t = b(e);
        c(void 0, void 0), l(t.i, t.j);
      }, {
        passive: !0
      }), e.addEventListener("touchcancel", function (e) {
        var t = b(e);
        c(void 0, void 0), l(t.i, t.j);
      }, {
        passive: !0
      }), e.addEventListener("touchmove", function (e) {
        var t = b(e);
        c(t.i, t.j);
      }, {
        passive: !0
      }), document.addEventListener("keydown", function (e) {
        var t = i[String(e.keyCode)];
        void 0 !== t && t(e), v = e.keyCode;
      }), document.addEventListener("keyup", function (e) {
        e.keyCode === v && r();
      }), document.addEventListener("visibilitychange", function () {
        document.hidden ? (u(), y = !0) : (f(), y = !1);
      }), window.addEventListener("resize", function (e) {
        p();
      }), document.addEventListener("orientationchange", function () {
        p();
      });
    }, e.escapeText = function (e) {
      return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
    }, e.addActionCallback = function (e) {
      t.push(e);
    };
  }(i || (i = {}));
}, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return l;
  });
  var i = n(15),
      o = n(7),
      r = n(18),
      a = n(2),
      s = n(5);

  var l = /*#__PURE__*/function () {
    function l(e, t, n) {
      _classCallCheck(this, l);

      this.event = e, this.hero = t, this.scene = n;
    }

    _createClass(l, [{
      key: "getConfig",
      value: function getConfig() {
        return void 0 !== this.scene.save && void 0 !== this.scene.save.config ? this.scene.save.config : s.a.getConfig();
      }
    }, {
      key: "showSimpleDialog",
      value: function showSimpleDialog(e, t) {
        var n = this.getConfig();
        return i.a.showSimpleDialog(this.scene, this.hero, this.event.name, e, n, t), !0;
      }
    }, {
      key: "showComplexDialog",
      value: function showComplexDialog(e, t) {
        var n = this.getConfig();
        return i.a.showComplexDialog(this.scene, this.hero, this.event.name, e, n, t), !0;
      }
    }, {
      key: "moveToTarget",
      value: function moveToTarget(e) {
        return o.a.startMovement(this.scene.grid, this.event, e.i, e.j), !0;
      }
    }, {
      key: "stepToTarget",
      value: function stepToTarget(e) {
        var t = a.a.getDirection(e, this.event);
        return this.stepToDirection(t);
      }
    }, {
      key: "stepToDirection",
      value: function stepToDirection(e) {
        var t = a.a.moveToDirection(this.event, e);
        return this.moveToTarget(t);
      }
    }, {
      key: "stepFromTarget",
      value: function stepFromTarget(e) {
        var t = a.a.getDirection(e, this.event);
        return t = a.a.getOpposedDirections(t), this.stepToDirection(t);
      }
    }, {
      key: "wait",
      value: function wait(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;

        var n = function n(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
          return new Promise(e <= 0 ? function (e, t) {
            e(!0);
          } : t ? function (t, i) {
            n(e - 100, !0).then(function () {
              setTimeout(function () {
                console.log("TIMER: " + e), t(!0);
              }, 97);
            });
          } : function (t, n) {
            setTimeout(function () {
              t(!0);
            }, e);
          });
        };

        return n(e, t);
      }
    }, {
      key: "saveMem",
      value: function saveMem(e, t) {
        o.a.saveMem(this.event, e, t);
      }
    }, {
      key: "loadMem",
      value: function loadMem(e) {
        return o.a.loadMem(this.event, e);
      }
    }, {
      key: "incrementStateVar",
      value: function incrementStateVar() {
        var e = this.loadMem(l.STATE_VAR),
            t = 0;
        return void 0 !== e && (t = Number.parseInt(e), Number.isNaN(t) && (t = 0)), t++, this.saveMem(l.STATE_VAR, t + ""), t;
      }
    }, {
      key: "setStateVar",
      value: function setStateVar(e) {
        this.saveMem(l.STATE_VAR, e + "");
      }
    }, {
      key: "goToMap",
      value: function goToMap(e, t) {
        var n = this.scene;
        r.a.loadMapSave(n, e, t, function () {
          n.moveFocusToTarget(t), o.a.stopMovement(n.hero);
        });
      }
    }, {
      key: "changeSkin",
      value: function changeSkin(e) {
        this.scene.save.config.skin = e;
      }
    }]);

    return l;
  }();

  l.tooltip = "(no description provided)", l.STATE_VAR = "state";
}, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return i;
  });
  var i,
      o = n(13);
  !function (e) {
    function t(e, t) {
      var n = e.memory[o.a.STATE_VAR],
          i = Number.parseInt(n);
      return !Number.isNaN(i) && i === t;
    }

    e.always = function (e) {
      return !0;
    }, e.isStateVar0 = function (e) {
      return t(e, 0);
    }, e.isStateVar1 = function (e) {
      return t(e, 1);
    }, e.isStateVar2 = function (e) {
      return t(e, 2);
    }, e.isStateVar3 = function (e) {
      return t(e, 3);
    }, e.isStateVar4 = function (e) {
      return t(e, 4);
    }, e.isStateVar5 = function (e) {
      return t(e, 5);
    }, e.isStateVar6 = function (e) {
      return t(e, 6);
    }, e.isStateVar7 = function (e) {
      return t(e, 7);
    }, e.isStateVar8 = function (e) {
      return t(e, 8);
    }, e.isStateVar9 = function (e) {
      return t(e, 9);
    };
  }(i || (i = {}));
}, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return i;
  });
  var i,
      o = n(3),
      r = n(14),
      a = n(12),
      s = n(6),
      l = n(2),
      c = n(5),
      d = n(0);
  !function (e) {
    var t, n;

    function i() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
      var t = document.getElementById("dialog1");
      null !== t ? (t.classList.remove("visibleFadeIn"), t.classList.add("hiddenFadeOut"), void 0 === n || e || n()) : console.error("Element not foud: dialog1");
    }

    function u(e) {
      void 0 !== e ? setTimeout(function () {
        i();
      }, e) : setTimeout(function () {
        a.a.addActionCallback(function () {
          i();
        });
      }, 500);
    }

    function f(e, t, n) {
      s.a.load(e, o.a.STRING, function (t) {
        d.a.isEmpty(t) || "string" != typeof t ? (console.error("Error while loading string: " + e), n()) : n(t);
      }, t);
    }

    function p(e, t, n) {
      e !== c.a.DEFAULT_ID ? s.a.load(e + "", o.a.DIALOG, function (t) {
        if (d.a.isEmpty(t) || "string" != typeof t) console.error("Error while loading dialog: " + e), n(c.a.getDialogNode(c.a.FIRST_ELEM_ID));else {
          var _e24 = JSON.parse(t),
              _i13 = function (e, t, n) {
            var i = new Map(),
                o = new Map();

            var _iterator16 = _createForOfIteratorHelper(t),
                _step16;

            try {
              for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                var _e25 = _step16.value;
                i.set(_e25.id, _e25);
              }
            } catch (err) {
              _iterator16.e(err);
            } finally {
              _iterator16.f();
            }

            var _iterator17 = _createForOfIteratorHelper(n),
                _step17;

            try {
              for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
                var _e26 = _step17.value;
                o.set(_e26.id, _e26);
              }
            } catch (err) {
              _iterator17.e(err);
            } finally {
              _iterator17.f();
            }

            if (i.has(e)) {
              var _t19 = i.get(e);

              return function e(t, n, i) {
                if (t.referenced = !0, !d.a.isEmpty(t.edgeIds)) {
                  var _iterator18 = _createForOfIteratorHelper(t.edgeIds),
                      _step18;

                  try {
                    for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
                      var _o8 = _step18.value;

                      if (i.has(_o8)) {
                        var _r7 = i.get(_o8);

                        if (void 0 === t.edges && (t.edges = []), t.edges.push(_r7), void 0 !== _r7.nodeId) if (n.has(_r7.nodeId)) {
                          var _t20 = n.get(_r7.nodeId);

                          _r7.node = _t20, _t20.referenced && (_r7.nodeReferenced = !0), e(_t20, n, i);
                        } else console.error("Cannot reconstruct dialog tree from edge: " + _r7.id + ", node not found: " + _r7.nodeId);
                      } else console.error("Cannot reconstruct dialog tree from node: " + t.id + ", edge not found: " + _o8);
                    }
                  } catch (err) {
                    _iterator18.e(err);
                  } finally {
                    _iterator18.f();
                  }
                }
              }(_t19, i, o), _t19;
            }

            return console.error("Cannot reconstruct dialog tree from node: " + e), c.a.getDialogNode();
          }(c.a.FIRST_ELEM_ID, _e24.nodes, _e24.edges);

          n(_i13);
        }
      }) : n(c.a.getDialogNode(c.a.FIRST_ELEM_ID));
    }

    function h(e, t, n, i) {
      if (t.has(e.id)) return;
      t.set(e.id, e);
      var o = e.edges;

      if (!d.a.isEmpty(o)) {
        i && delete e.edges;

        var _iterator19 = _createForOfIteratorHelper(o),
            _step19;

        try {
          for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
            var _e27 = _step19.value;
            if (n.has(_e27.id)) continue;
            n.set(_e27.id, _e27);
            var _o9 = _e27.node;
            void 0 !== _o9 && (i && delete _e27.node, h(_o9, t, n));
          }
        } catch (err) {
          _iterator19.e(err);
        } finally {
          _iterator19.f();
        }
      }
    }

    function g(e, i, o, r, s, c) {
      var f = document.getElementById("dialog1"),
          p = document.getElementById("dialogFace"),
          h = document.getElementById("dialogName"),
          y = document.getElementById("dialogArea");
      if (null === p) return void console.error("Element not foud: dialogFace");
      if (null === h) return void console.error("Element not foud: dialogName");
      if (null === y) return void console.error("Element not foud: dialogArea");
      if (null === f) return void console.error("Element not foud: dialog1");
      f.classList.replace("hiddenFadeOut", "visibleFadeIn"), d.a.isEmpty(s) ? console.error("skin is not defined!") : f.style.borderImageSource = "url('/assets/skin/" + s + "')", f.style.visibility = "visible";
      var A = r.face;
      void 0 !== A ? (p.style.display = "block", p.style.backgroundImage = "url('/assets/faceset/" + A + "')") : p.style.display = "none", h.innerText = o;

      var b = function (e) {
        var n;
        void 0 !== e.genericMessage && (n = function (e) {
          var n = t.get(e);

          if (void 0 !== n && !d.a.isEmpty(n.values)) {
            var _e28, _t21;

            if (_e28 = void 0 === n.condition ? n.values : n.values.filter(function (e) {
              return m(n.condition, e.conditionParams);
            }), 0 === _e28.length) return;
            return _t21 = 1 === _e28.length ? 0 : l.a.getRandomInteger(0, _e28.length - 1), _e28[_t21].message;
          }

          return;
        }(e.genericMessage));
        void 0 === n && (n = e.message);
        void 0 !== n && (n = n);
        return n;
      }(r);

      y.innerText = void 0 !== b ? b : "";
      var E = document.getElementById("dialogEdgeArea");
      if (null === E) return void console.error("Element not foud: dialogEdgeArea");

      for (; E.firstChild;) {
        E.removeChild(E.firstChild);
      }

      n = void 0;
      var _ = [];

      if (void 0 !== r.edges) {
        var _iterator20 = _createForOfIteratorHelper(r.edges),
            _step20;

        try {
          for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
            var _e29 = _step20.value;
            m(_e29.condition) && _.push(_e29);
          }
        } catch (err) {
          _iterator20.e(err);
        } finally {
          _iterator20.f();
        }
      }

      var C = function C(t) {
        if (void 0 !== t.action) {
          var _n17,
              _o10 = document.getElementById("userInput");

          if (null === _o10) return void console.warn("Input required");
          _n17 = _o10.value, _n17 = _n17.trim(), _n17 = a.a.escapeText(_n17), v(t, e, i, _n17);
        } else void 0 !== t.node ? g(e, i, o, t.node, s, c) : u(0);
      };

      if (0 === _.length) u(r.closingTimeout);else if (1 === _.length && void 0 === _[0].message) {
        if (void 0 === _[0].inputType) n = function n() {
          C(_[0]);
        };else {
          var _e30 = document.createElement("input");

          switch (_[0].inputType) {
            case 1:
              _e30.type = "number";
              break;

            case 0:
              _e30.type = "text";
              break;

            default:
              console.error("Unexpected DialogInputType for edge: " + _[0].id);
          }

          _e30.id = "userInput", E.appendChild(_e30);
        }
      } else {
        var _iterator21 = _createForOfIteratorHelper(_),
            _step21;

        try {
          var _loop = function _loop() {
            var e = _step21.value;
            var t = document.createElement("div");
            void 0 !== e.message && (t.innerText = e.message), t.onclick = function () {
              C(e);
            }, t.classList.add("l4wDialogEdge"), E.appendChild(t);
          };

          for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
            _loop();
          }
        } catch (err) {
          _iterator21.e(err);
        } finally {
          _iterator21.f();
        }
      }
    }

    function m(e, t) {
      return void 0 === e || (e in r.a ? r.a[e](t) : (console.error('Condition not found: "' + e + '", on event.'), !1));
    }

    function v(e, t, n, i) {
      var o = e.script;
      if (void 0 === o) return !1;
      var r = new o[o](event, n, t);
      if (d.a.isEmpty(r)) return console.error('Script "' + o + '" not found (dialog edge: ' + e.id + ")"), !1;
      var a = e.action;
      if (void 0 === a) return !1;
      if (!(a in r)) return console.error('Action "' + a + '" not found in script "' + o + '" (dialog edge: ' + e.id + ")"), !1;

      try {
        return r[a](i);
      } catch (e) {
        console.error(e);
      }

      return !1;
    }

    e.closeDialog = i, e.loadString = f, e.saveString = function (e, t, n) {
      var i = JSON.stringify(t);
      s.a.save(e + "", i, o.a.STRING, function (t, i) {
        if (void 0 !== t) {
          var _e31 = parseInt(t);

          if (isNaN(_e31)) return console.error("Error while saving string"), void n();
        }

        n(e);
      });
    }, e.loadDialog = p, e.saveDialog = function (e, t, n) {
      var i = new Map(),
          r = new Map();
      h(t, i, r, !0);
      var a = {
        nodes: Array.from(i.values()),
        edges: Array.from(r.values())
      };
      s.a.save(e + "", JSON.stringify(a), o.a.DIALOG, function (t, i) {
        i ? (d.a.isNumeric(t) && (e = parseInt(t)), n(e)) : n();
      });
    }, e.deconstructDialogTree = h, e.loadGenericMessages = function (e, n, i) {
      isNaN(e) ? i(!1) : s.a.load(e + "", o.a.GENERIC_MESSAGE, function (n) {
        d.a.isEmpty(n) || "string" != typeof n ? (console.error("Error while loading dialog: " + e), i(!1)) : (t = JSON.parse(n), i(!0));
      });
    }, e.showComplexDialog = function (e, t, n, i, o, r) {
      p(i, o.lang, function (a) {
        void 0 === a ? console.error("Error while loading dialog: " + i) : g(e, t, n, a, o.skin, r);
      });
    }, e.showSimpleDialog = function (e, t, n, i, o, r) {
      f(i, o.lang, function (i) {
        var a = c.a.getDialogNode();
        a.message = i, g(e, t, n, a, o.skin, r);
      });
    }, e.launchAction = v, e.search = function (e, t, n) {
      return function e(t, n, i, o, r) {
        if (!o.has(t.id)) {
          if (!i && t.id === n) return t;
          o.set(t.id, t);
          var _a4 = t.edges;

          if (!d.a.isEmpty(_a4)) {
            var _iterator22 = _createForOfIteratorHelper(_a4),
                _step22;

            try {
              for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
                var _t22 = _step22.value;

                if (!r.has(_t22.id)) {
                  if (i && _t22.id === n) return _t22;
                  r.set(_t22.id, _t22);
                  var _a5 = _t22.node;

                  if (void 0 !== _a5) {
                    var _t23 = e(_a5, n, i, o, r);

                    if (void 0 !== _t23) return _t23;
                  }
                }
              }
            } catch (err) {
              _iterator22.e(err);
            } finally {
              _iterator22.f();
            }
          }
        }

        return;
      }(e, t, void 0 !== n && n, new Map(), new Map());
    };
  }(i || (i = {}));
}, function (e, t, n) {
  "use strict";

  n.r(t), n.d(t, "DEFAULT_MESSAGE", function () {
    return a;
  }), n.d(t, "DEFAULT_DIALOG", function () {
    return s;
  }), n.d(t, "BaseScript", function () {
    return l;
  }), n.d(t, "Transport", function () {
    return c;
  }), n.d(t, "Script1", function () {
    return d;
  });
  var i = n(13),
      o = n(9),
      r = n(0);
  var a = "msg",
      s = "dlg";

  var l = /*#__PURE__*/function (_i$a) {
    _inherits(l, _i$a);

    var _super = _createSuper(l);

    function l(e, t, n) {
      _classCallCheck(this, l);

      return _super.call(this, e, t, n);
    }

    _createClass(l, [{
      key: "speak",
      value: function speak() {
        var e = this.loadMem(a + (this.event.currentState + 1));
        r.a.isEmpty(e) && (e = this.loadMem(a)), this.showSimpleDialog(e, o.b);
      }
    }, {
      key: "dialog",
      value: function dialog() {
        var e = this.event.states[this.event.currentState];
        void 0 !== e.dialog && this.showComplexDialog(e.dialog, o.b);
      }
    }]);

    return l;
  }(i.a);

  l.tooltip = "Basic script with simple actions, mainly for generic NPCs";

  var c = /*#__PURE__*/function (_i$a2) {
    _inherits(c, _i$a2);

    var _super2 = _createSuper(c);

    function c() {
      _classCallCheck(this, c);

      return _super2.apply(this, arguments);
    }

    _createClass(c, [{
      key: "forest",
      value: function forest() {
        this.goToMap("1", {
          i: 15,
          j: 1
        });
      }
    }, {
      key: "farm",
      value: function farm() {
        this.goToMap("0", {
          i: 15,
          j: 16
        });
      }
    }]);

    return c;
  }(i.a);

  c.tooltip = "Provide transportation from one map to another";

  var d = /*#__PURE__*/function (_i$a3) {
    _inherits(d, _i$a3);

    var _super3 = _createSuper(d);

    function d() {
      _classCallCheck(this, d);

      return _super3.apply(this, arguments);
    }

    _createClass(d, [{
      key: "testAction",
      value: function testAction() {
        return this.showSimpleDialog("2", o.b), !0;
      }
    }, {
      key: "giantTest",
      value: function giantTest() {
        this.showSimpleDialog("4", o.b);
        var e = this;
        return this.wait(1e3).then(function () {
          e.stepFromTarget(e.hero);
        }), this.incrementStateVar(), !0;
      }
    }, {
      key: "giantTest2",
      value: function giantTest2() {
        this.showSimpleDialog("5", o.b);
        var e = this;
        return this.wait(1e3).then(function () {
          e.stepFromTarget(e.hero);
        }), this.incrementStateVar(), !0;
      }
    }, {
      key: "giantTest3",
      value: function giantTest3() {
        return this.showSimpleDialog("6", o.b), this.moveToTarget({
          i: 0,
          j: 0
        }), this.setStateVar(0), !0;
      }
    }, {
      key: "move3ToRight",
      value: function move3ToRight() {
        return this.moveToTarget({
          i: this.event.i + 3,
          j: this.event.j
        }), !0;
      }
    }]);

    return d;
  }(i.a);

  d.tooltip = "Script for tests";
}, function (e, t, n) {
  "use strict";

  var i;
  n.d(t, "a", function () {
    return i;
  }), function (e) {
    e.showError = function (e, t) {
      null !== e ? (void 0 !== t && t.clear(e), e.fillStyle = "#000000", e.font = "bold 20px Oldenburg", e.fillText("An error occurred :(", 60, 60)) : console.error("Context is null");
    };
  }(i || (i = {}));
}, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return i;
  });
  var i,
      o = n(7),
      r = n(10),
      a = n(5),
      s = n(0);
  !function (e) {
    function t(e) {
      return {
        id: e.id,
        memory: e.memory
      };
    }

    e.getSave = function (e, n) {
      if (s.a.isEmpty(e) || s.a.isEmpty(n)) return a.a.getSave();
      var i = new Array();

      if (!s.a.isEmpty(e.events)) {
        var _iterator23 = _createForOfIteratorHelper(e.events),
            _step23;

        try {
          for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
            var _n18 = _step23.value;
            i.push(t(_n18));
          }
        } catch (err) {
          _iterator23.e(err);
        } finally {
          _iterator23.f();
        }
      }

      var o = a.a.getSave();
      return o.currentMap = e.id, o.hero = n, o.maps[e.id] = {
        events: i
      }, o;
    }, e.loadMapSave = function (e, t, n, i) {
      r.a.loadMap(t, e.context.canvas, function (t) {
        var r = t;
        !function (e, t) {
          if (s.a.isEmpty(e) || s.a.isEmpty(t.events) || s.a.isEmpty(e.maps[t.id])) return;
          var n = e.maps[t.id].events;
          if (s.a.isEmpty(n)) return;

          var _iterator24 = _createForOfIteratorHelper(n),
              _step24;

          try {
            for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
              var _e32 = _step24.value;

              var _iterator25 = _createForOfIteratorHelper(t.events),
                  _step25;

              try {
                for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
                  var _n19 = _step25.value;
                  _e32.id === _n19.id && (_n19.memory = _e32.memory);
                }
              } catch (err) {
                _iterator25.e(err);
              } finally {
                _iterator25.f();
              }
            }
          } catch (err) {
            _iterator24.e(err);
          } finally {
            _iterator24.f();
          }
        }(e.save, r), e.changeMap(r, function () {
          if (e.resetTranslation(), e.hero.i = n.i, e.hero.j = n.j, o.a.initTransientData(r, e.grid, e.hero), e.focus = e.grid.mapCellToCanvas(n), !s.a.isEmpty(e.map.events)) for (var _t24 = 0; _t24 < e.map.events.length; _t24++) {
            var _n20 = o.a.initTransientData(e.map, e.grid, e.map.events[_t24]);

            void 0 !== _n20 && (e.map.events[_t24] = _n20);
          }
          i(!0);
        });
      });
    };
  }(i || (i = {}));
}, function (e, t, n) {
  var i = n(35);
  "string" == typeof i && (i = [[e.i, i, ""]]), i.locals && (e.exports = i.locals);
  (0, n(28)["default"])("f2065b44", i, !1, {});
}, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return i;
  });
  var i,
      o = n(6),
      r = n(17),
      a = n(3),
      s = n(0);
  !function (e) {
    e.loadTileset = function (e, t, n) {
      o.a.load(e + "", a.a.TILESET, function (i) {
        if (s.a.isEmpty(i)) console.error("Error while loading tileset: " + e), n();else try {
          var _e33 = JSON.parse(i);

          n(_e33);
        } catch (i) {
          "SyntaxError" === i.name ? console.error("Error while parsing tileset: " + e) : "TypeError" === i.name ? console.error("Error while reading tileset: " + e) : console.error(i), r.a.showError(t), n();
        }
      });
    }, e.initTransientData = function (e) {
      void 0 !== e.imageData && (e.imageWidth = e.imageData.width, e.imageHeight = e.imageData.height);
    };
  }(i || (i = {}));
}, function (e, t, n) {
  "use strict";

  e.exports = function (e) {
    var t = [];
    return t.toString = function () {
      return this.map(function (t) {
        var n = function (e, t) {
          var n = e[1] || "",
              i = e[3];
          if (!i) return n;

          if (t && "function" == typeof btoa) {
            var o = (a = i, s = btoa(unescape(encodeURIComponent(JSON.stringify(a)))), l = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s), "/*# ".concat(l, " */")),
                r = i.sources.map(function (e) {
              return "/*# sourceURL=".concat(i.sourceRoot || "").concat(e, " */");
            });
            return [n].concat(r).concat([o]).join("\n");
          }

          var a, s, l;
          return [n].join("\n");
        }(t, e);

        return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n;
      }).join("");
    }, t.i = function (e, n, i) {
      "string" == typeof e && (e = [[null, e, ""]]);
      var o = {};
      if (i) for (var r = 0; r < this.length; r++) {
        var a = this[r][0];
        null != a && (o[a] = !0);
      }

      for (var s = 0; s < e.length; s++) {
        var l = [].concat(e[s]);
        i && o[l[0]] || (n && (l[2] ? l[2] = "".concat(n, " and ").concat(l[2]) : l[2] = n), t.push(l));
      }
    }, t;
  };
}, function (e, t, n) {
  "use strict";

  function i(e, t, n, i, o, r, a, s) {
    var l,
        c = "function" == typeof e ? e.options : e;
    if (t && (c.render = t, c.staticRenderFns = n, c._compiled = !0), i && (c.functional = !0), r && (c._scopeId = "data-v-" + r), a ? (l = function l(e) {
      (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), o && o.call(this, e), e && e._registeredComponents && e._registeredComponents.add(a);
    }, c._ssrRegister = l) : o && (l = s ? function () {
      o.call(this, (c.functional ? this.parent : this).$root.$options.shadowRoot);
    } : o), l) if (c.functional) {
      c._injectStyles = l;
      var d = c.render;

      c.render = function (e, t) {
        return l.call(t), d(e, t);
      };
    } else {
      var u = c.beforeCreate;
      c.beforeCreate = u ? [].concat(u, l) : [l];
    }
    return {
      exports: e,
      options: c
    };
  }

  n.d(t, "a", function () {
    return i;
  });
}, function (e, t, n) {
  "use strict";

  n.d(t, "b", function () {
    return i;
  }), n.d(t, "a", function () {
    return r;
  });
  var i,
      o = n(6);
  !function (e) {
    e[e.game = 0] = "game", e[e.mapper = 1] = "mapper", e[e.tilePicker = 2] = "tilePicker";
  }(i || (i = {}));

  var r = /*#__PURE__*/function () {
    function r(e, t, n) {
      _classCallCheck(this, r);

      var i;
      this.canvas = e, this.currentTranslation = {
        x: 0,
        y: 0
      }, this.gridType = n, i = this, o.a.loadProperties(function (e) {
        i.deferredInit(e), i.updateSizingDerivates(), i.refreshCanvasSize(), t(i);
      });
    }

    _createClass(r, [{
      key: "deferredInit",
      value: function deferredInit(e) {
        this.cellH = e.get("cellHeight"), this.cellW = e.get("cellWidth"), this.rows = e.get(i[this.gridType] + "Rows"), this.columns = e.get(i[this.gridType] + "Columns");
      }
    }, {
      key: "updateSizingDerivates",
      value: function updateSizingDerivates() {
        this.baseH = this.cellH * this.rows, this.baseW = this.cellW * this.columns, this.halfRows = Math.floor(this.rows / 2), this.halfColumns = Math.floor(this.columns / 2);
      }
    }, {
      key: "refreshCanvasSize",
      value: function refreshCanvasSize() {
        this.canvas.width = Math.floor(this.baseW * this.scaleX), this.canvas.height = Math.floor(this.baseH * this.scaleY);
      }
    }, {
      key: "clear",
      value: function clear(e, t) {
        void 0 === t ? e.clearRect(this.currentTranslation.x, this.currentTranslation.y, this.baseW, this.baseH) : e.clearRect(this.currentTranslation.x + t.x * this.cellW, this.currentTranslation.y + t.y * this.cellH, (t.w + 1) * this.cellW, (t.h + 1) * this.cellH);
      }
    }, {
      key: "mapPositionToGrid",
      value: function mapPositionToGrid(e) {
        var t = this.canvas.getBoundingClientRect(),
            n = Math.floor((e.x - t.left) / this.scaleX + this.currentTranslation.x),
            i = Math.floor((e.y - t.top) / this.scaleY + this.currentTranslation.y);
        return {
          i: Math.floor((e.x - t.left) / (this.cellW * this.scaleX) + this.currentTranslation.x / this.cellW),
          j: Math.floor((e.y - t.top) / (this.cellH * this.scaleY) + this.currentTranslation.y / this.cellH),
          x: n,
          y: i
        };
      }
    }, {
      key: "mapCellToCanvas",
      value: function mapCellToCanvas(e) {
        return {
          x: e.i * this.cellW,
          y: e.j * this.cellH
        };
      }
    }, {
      key: "mapCanvasToCell",
      value: function mapCanvasToCell(e) {
        return {
          i: Math.floor(e.x / this.cellW),
          j: Math.floor(e.y / this.cellH)
        };
      }
    }, {
      key: "changeTranslation",
      value: function changeTranslation(e, t, n, i) {
        var o = e - this.halfColumns * this.cellW;
        if (o < 0) o = 0;else {
          var _e34 = (n - this.columns) * this.cellW;

          o > _e34 && (o = _e34);
        }
        var r = t - this.halfRows * this.cellH;
        if (r < 0) r = 0;else {
          var _e35 = (i - this.rows) * this.cellH;

          r > _e35 && (r = _e35);
        }
        return this.applyTranslate(o, r);
      }
    }, {
      key: "reappyTranslation",
      value: function reappyTranslation() {
        var e = this.currentTranslation.x,
            t = this.currentTranslation.y;
        this.currentTranslation.x = 0, this.currentTranslation.y = 0, this.applyTranslate(e, t);
      }
    }, {
      key: "applyTranslate",
      value: function applyTranslate(e, t) {
        return this.getContext().translate(this.currentTranslation.x - e, this.currentTranslation.y - t), this.currentTranslation = {
          x: e,
          y: t
        }, this.currentTranslation;
      }
    }, {
      key: "getCurrentTranslation",
      value: function getCurrentTranslation() {
        return this.currentTranslation;
      }
    }, {
      key: "resetTranslation",
      value: function resetTranslation() {
        this.getContext().translate(this.currentTranslation.x, this.currentTranslation.y), this.currentTranslation = {
          x: 0,
          y: 0
        };
      }
    }, {
      key: "getBoundariesX",
      value: function getBoundariesX(e, t) {
        var n = Math.floor(e / this.cellW),
            i = n - this.halfColumns - 1,
            o = n + this.halfColumns + 1;
        return this.checkBoundariesLimit(i, o, t);
      }
    }, {
      key: "getBoundariesY",
      value: function getBoundariesY(e, t) {
        var n = Math.floor(e / this.cellH),
            i = n - this.halfRows - 1,
            o = n + this.halfRows + 1;
        return this.checkBoundariesLimit(i, o, t);
      }
    }, {
      key: "checkBoundariesLimit",
      value: function checkBoundariesLimit(e, t, n, i) {
        return e < 0 && (void 0 !== i && i || (t -= e), e = 0), t >= n && (void 0 !== i && i || (e -= t - n + 1), t = n - 1), {
          min: e,
          max: t
        };
      }
    }, {
      key: "getContext",
      value: function getContext() {
        return this.canvas.getContext("2d");
      }
    }]);

    return r;
  }();
}, function (e, t) {
  var n;

  n = function () {
    return this;
  }();

  try {
    n = n || new Function("return this")();
  } catch (e) {
    "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (n = window);
  }

  e.exports = n;
}, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return p;
  });

  var i = n(20),
      o = n(10),
      r = n(1),
      a = n(9),
      s = n(2),
      l = n(6),
      c = n(3),
      d = n(0),
      u = window.requestAnimationFrame || function (e) {
    return window.setTimeout(e, 40), Math.floor(100 * Math.random());
  },
      f = window.cancelAnimationFrame;

  var p = /*#__PURE__*/function () {
    function p(e) {
      _classCallCheck(this, p);

      this.renderingConfiguration = new a.a(), this.grid = e, this.context = e.getContext(), this.paused = !1, this.focus = this.grid.mapCellToCanvas({
        i: 0,
        j: 0
      }), this.pointer = {
        i: 0,
        j: 0
      };
    }

    _createClass(p, [{
      key: "start",
      value: function start(e) {
        this.changeScale();
        var t = this,
            n = u(function () {
          t.mainGameLoop(n);
        });
      }
    }, {
      key: "mainGameLoop",
      value: function mainGameLoop(e) {
        var t = this,
            n = u(function () {
          t.mainGameLoop(n);
        });
        !this.paused && this.mainGameLoop_pre() ? (this.render(this.map, this.context), this.mainGameLoop_post()) : f(e);
      }
    }, {
      key: "mainGameLoop_pre",
      value: function mainGameLoop_pre() {
        return !0;
      }
    }, {
      key: "mainGameLoop_post",
      value: function mainGameLoop_post() {}
    }, {
      key: "renderPointer",
      value: function renderPointer() {
        if (void 0 !== this.pointer) {
          var _e36 = this.grid.mapCellToCanvas(this.pointer);

          this.context.save(), this.context.beginPath(), this.context.fillStyle = r.a.Color.YELLOW, this.context.scale(2, 1), this.context.arc(Math.floor((_e36.x + this.grid.cellW / 2) / 2), _e36.y + this.grid.cellH - 4, 8, 0, r.a.DOUBLE_PI), this.context.closePath(), this.context.globalAlpha = .4, this.context.fill(), this.context.restore();
        }
      }
    }, {
      key: "renderFocus",
      value: function renderFocus() {
        null != this.focus.x && null != this.focus.y && this.renderingConfiguration.showFocus && (this.context.save(), this.context.beginPath(), this.context.fillStyle = r.a.Color.BLACK, this.context.arc(this.focus.x + Math.floor(this.grid.cellW / 2), this.focus.y + Math.floor(this.grid.cellH / 2), 15, 0, r.a.DOUBLE_PI), this.context.closePath(), this.context.fill(), this.context.restore());
      }
    }, {
      key: "toggleGrid",
      value: function toggleGrid(e) {
        this.renderingConfiguration.showGrid = null != e ? e : !this.renderingConfiguration.showGrid;
      }
    }, {
      key: "toggleGridMode",
      value: function toggleGridMode() {
        this.renderingConfiguration.showGrid ? this.renderingConfiguration.showBlocks ? (this.toggleGrid(), this.toggleBlocks()) : this.toggleBlocks() : this.toggleGrid();
      }
    }, {
      key: "toggleCellNumbering",
      value: function toggleCellNumbering(e) {
        this.renderingConfiguration.showCellNumbers = null != e ? e : !this.renderingConfiguration.showCellNumbers;
      }
    }, {
      key: "toggleFocus",
      value: function toggleFocus(e) {
        this.renderingConfiguration.showFocus = null != e ? e : !this.renderingConfiguration.showFocus;
      }
    }, {
      key: "toggleBlocks",
      value: function toggleBlocks(e) {
        this.renderingConfiguration.showBlocks = null != e ? e : !this.renderingConfiguration.showBlocks;
      }
    }, {
      key: "toggleOnTops",
      value: function toggleOnTops(e) {
        this.renderingConfiguration.showOnTops = null != e ? e : !this.renderingConfiguration.showOnTops;
      }
    }, {
      key: "toggleAntialiasing",
      value: function toggleAntialiasing(e) {
        this.renderingConfiguration.enableAntialiasing = null != e ? e : !this.renderingConfiguration.enableAntialiasing, "webkitImageSmoothingEnabled" in this.context && (this.context.webkitImageSmoothingEnabled = this.renderingConfiguration.enableAntialiasing), "msImageSmoothingEnabled" in this.context && (this.context.msImageSmoothingEnabled = this.renderingConfiguration.enableAntialiasing), void 0 !== this.context.imageSmoothingEnabled && (this.context.imageSmoothingEnabled = this.renderingConfiguration.enableAntialiasing);
      }
    }, {
      key: "updatePointer",
      value: function updatePointer(e, t) {
        this.pointer = void 0 === e || void 0 === t ? void 0 : {
          i: e,
          j: t
        };
      }
    }, {
      key: "moveFocusToDirection",
      value: function moveFocusToDirection(e) {
        if (void 0 !== e) switch (e) {
          case 0:
            this.focus.y -= +this.grid.cellH;
            break;

          case 2:
            this.focus.y += +this.grid.cellH;
            break;

          case 3:
            this.focus.x -= +this.grid.cellW;
            break;

          case 1:
            this.focus.x += +this.grid.cellW;
            break;

          case 4:
            break;

          default:
            console.error("Unexpected case: " + e);
        }
        this.grid.changeTranslation(this.focus.x, this.focus.y, this.map.width, this.map.height);
      }
    }, {
      key: "moveFocusToTarget",
      value: function moveFocusToTarget(e) {
        this.focus = this.grid.mapCellToCanvas(e), this.grid.changeTranslation(this.focus.x, this.focus.y, this.map.width, this.map.height);
      }
    }, {
      key: "resetTranslation",
      value: function resetTranslation() {
        this.grid.resetTranslation();
      }
    }, {
      key: "reapplyTranslation",
      value: function reapplyTranslation() {
        this.grid.reappyTranslation();
      }
    }, {
      key: "changeScale",
      value: function changeScale() {
        try {
          this.context.setTransform(1, 0, 0, 1, 0, 0), this.context.scale(this.grid.scaleX, this.grid.scaleY);
        } catch (e) {
          console.error(e);
        }
      }
    }, {
      key: "togglePause",
      value: function togglePause(e) {
        this.paused = null != e ? e : !this.paused, this.paused ? this.pauseStartTime = d.a.now() : (void 0 === this.pauseStartTime && (this.pauseStartTime = 0), this.pauseDuration = d.a.now() - this.pauseStartTime, this.pauseStartTime = void 0);
      }
    }, {
      key: "changeMap",
      value: function changeMap(e, t) {
        this.togglePause(!0);
        d.a.isEmpty(e) && (console.error("Uninitialized map"), console.trace()), this.map = e, this.changeTile(e.tileset.image, function (e) {
          setTimeout(function () {
            o.a.initTransientData(e), e.togglePause(!1);
          }), t(e);
        });
      }
    }, {
      key: "changeTile",
      value: function changeTile(e, t) {
        var n = this;
        i.a.loadTileset(e, this.context, function (i) {
          if (void 0 === i) return console.error("Cannot change tile, tileset not found: " + e), void t(n);
          n.map.tileset = i, l.a.load(i.image, c.a.TILE, function (e) {
            n.map.tileset.imageData = e, t(n);
          });
        });
      }
    }, {
      key: "getSceneHeight",
      value: function getSceneHeight() {
        return this.map.height;
      }
    }, {
      key: "getSceneWidth",
      value: function getSceneWidth() {
        return this.map.width;
      }
    }, {
      key: "render",
      value: function render(e, t) {
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
        var i = this.redrawArea.y,
            a = this.redrawArea.y + this.redrawArea.h,
            l = this.redrawArea.x,
            c = this.redrawArea.x + this.redrawArea.w;

        if (!d.a.isEmpty(e)) {
          for (var _u2 = i; _u2 <= a; _u2++) {
            for (var _i14 = l; _i14 <= c; _i14++) {
              var _a6 = s.a.cellToGid({
                i: _i14,
                j: _u2
              }, e.width);

              for (var _o11 = r.a.MapLayer.LOW; _o11 <= r.a.MapLayer.TOP; _o11++) {
                var _r8 = this.map.layers[_o11];
                if (void 0 === _r8 || void 0 === _r8.data || _r8.data.length < _a6) continue;
                var _l = _r8.data[_a6];
                if (d.a.isEmpty(_l)) continue;
                var _c2 = 0;
                void 0 !== e.tileset.onTop && (_c2 = s.a.normalizeZIndex(e.tileset.onTop[_l])), 0 !== _c2 && n || (this.applyLayerCustomizations(_o11), d.a.isEmpty(_r8.opacity) || (t.globalAlpha = _r8.opacity), this.renderCell(t, e.tileset, _l, _i14, _u2), t.globalAlpha = 1, this.removeLayerCustomizations(_o11));
              }

              o.a.renderUI(this.map, this.grid, this.context, this.renderingConfiguration, _i14, _u2, !1);
            }
          }

          this.renderPointer();

          for (var _o12 = i; _o12 <= a; _o12++) {
            for (var _a7 = l; _a7 <= c && n; _a7++) {
              for (var _n21 = i; _n21 <= _o12; _n21++) {
                var _i15 = s.a.cellToGid({
                  i: _a7,
                  j: _n21
                }, e.width);

                for (var _l2 = r.a.MapLayer.LOW; _l2 <= r.a.MapLayer.TOP; _l2++) {
                  var _r9 = this.map.layers[_l2];
                  if (void 0 === _r9 || void 0 === _r9.data || _r9.data.length < _i15) continue;
                  var _c3 = _r9.data[_i15];
                  if (d.a.isEmpty(_c3)) continue;
                  var _u3 = 0;
                  void 0 !== e.tileset.onTop && (_u3 = s.a.normalizeZIndex(e.tileset.onTop[_c3])), _u3 > 0 && _n21 + _u3 === _o12 && (this.applyLayerCustomizations(_l2), d.a.isEmpty(_r9.opacity) || (t.globalAlpha = _r9.opacity), this.renderCell(t, e.tileset, _c3, _a7, _n21), t.globalAlpha = 1, this.removeLayerCustomizations(_l2));
                }
              }
            }

            for (var _e37 = l; _e37 <= c; _e37++) {
              this.renderDynamicElements(i, a, l, c, _e37, _o12, !1);
            }
          }

          for (var _e38 = i; _e38 <= a; _e38++) {
            for (var _t25 = l; _t25 <= c; _t25++) {
              this.renderDynamicElements(i, a, l, c, _t25, _e38, !0), o.a.renderUI(this.map, this.grid, this.context, this.renderingConfiguration, _t25, _e38, !0);
            }
          }
        }

        o.a.renderGlobalUI(this.grid, this.context, this.renderingConfiguration), this.renderFocus();
      }
    }, {
      key: "renderCell",
      value: function renderCell(e, t, n, i, o) {
        var r = s.a.gidToCell(n, Math.floor(t.imageWidth / this.grid.cellW));
        e.drawImage(t.imageData, Math.floor(r.i * this.grid.cellW), Math.floor(r.j * this.grid.cellH), this.grid.cellW, this.grid.cellH, Math.floor(i * this.grid.cellW), Math.floor(o * this.grid.cellH), this.grid.cellW, this.grid.cellH);
      }
    }, {
      key: "applyLayerCustomizations",
      value: function applyLayerCustomizations(e) {}
    }, {
      key: "removeLayerCustomizations",
      value: function removeLayerCustomizations(e) {}
    }, {
      key: "onFocusCellChange",
      value: function onFocusCellChange() {}
    }, {
      key: "onFocusPixelChange",
      value: function onFocusPixelChange(e, t) {}
    }]);

    return p;
  }();
}, function (e, t, n) {
  "use strict";

  var i;
  n.d(t, "a", function () {
    return i;
  }), function (e) {
    e.check = function () {
      !function () {
        var e = document.createElement("canvas");
        if (!e.getContext || !e.getContext("2d")) return console.error("HTML5 canvas is not supported"), !1;
      }();
    }, e.serviceWorker = function () {
      return void 0 === navigator.serviceWorker ? (console.warn("Service Workers are not supported"), !1) : "localhost" !== location.hostname && "https" !== location.protocol || (console.warn("Service Workers won't work when using local self-signed certificates. This could be fixed by trusting them, or using browser flags."), !1);
    }, e.webWorker = function () {
      return void 0 !== window.Worker || (console.warn("Web Workers are not supported"), !1);
    }, e.webSpeech = function () {
      return void 0 !== window.SpeechSynthesisUtterance || (console.warn("Web Speech API are not supported"), !1);
    };
  }(i || (i = {}));
}, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return f;
  });
  var i = n(11),
      o = n(25),
      r = n(7),
      a = n(10),
      s = n(18),
      l = n(9),
      c = n(1),
      d = n(0),
      u = n(5);

  var f = /*#__PURE__*/function (_o$a) {
    _inherits(f, _o$a);

    var _super4 = _createSuper(f);

    function f(e, t) {
      var _this;

      _classCallCheck(this, f);

      _this = _super4.call(this, e), _this.FPS = 20, _this.refreshInterval = 1e3 / _this.FPS, _this.autoFPS = !0, _this.secondFPS = 0, _this.countFPS = 0, _this.lastFPS = 0, _this.fpsPerformance = [22, 21, 20], _this.launcher = t;
      return _this;
    }

    _createClass(f, [{
      key: "mainGameLoop_pre",
      value: function mainGameLoop_pre() {
        if (!_get(_getPrototypeOf(f.prototype), "mainGameLoop_pre", this).call(this)) return !1;
        var e = !1,
            t = this,
            n = d.a.now(),
            i = this;

        if (!d.a.isEmpty(this.hero)) {
          var _o13 = r.a.update(this.hero, this, this.hero, this.action, n, this.pauseDuration);

          void 0 !== _o13 && this.launcher(this.hero, this, this.hero, _o13), e = r.a.manageMovements(this.map, this.grid, this.hero, function (e, n) {
            t.grid.changeTranslation(t.focus.x + e, t.focus.y + n, t.map.width, t.map.height);
          }, function (e, n) {
            t.focus.x += e, t.focus.y += n;
          }, function (e) {
            i.registerAction(e.i, e.j);
          });
        }

        if (!d.a.isEmpty(this.map.events)) {
          var _iterator26 = _createForOfIteratorHelper(this.map.events),
              _step26;

          try {
            for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
              var _t26 = _step26.value;

              var _i16 = r.a.update(_t26, this, this.hero, this.action, n, this.pauseDuration);

              void 0 !== _i16 && this.launcher(_t26, this, this.hero, _i16), e = e || r.a.manageMovements(this.map, this.grid, _t26, l.b, l.b, l.b);
            }
          } catch (err) {
            _iterator26.e(err);
          } finally {
            _iterator26.f();
          }

          this.action = void 0;
        }

        return e && a.a.updateDynamicData(t.hero, this.map), this.paused || (this.pauseDuration = void 0), this.redrawArea = this.getRedrawArea(), !0;
      }
    }, {
      key: "mainGameLoop_post",
      value: function mainGameLoop_post() {
        _get(_getPrototypeOf(f.prototype), "mainGameLoop_post", this).call(this), this.context.fillStyle = "#000000", this.context.font = "bold 30px Oldenburg", this.context.fillText("(it's not ready yet)", this.grid.getCurrentTranslation().x + 20, this.grid.getCurrentTranslation().y + 40), this.renderFPS();
      }
    }, {
      key: "getRedrawArea",
      value: function getRedrawArea(e) {
        var t = this.grid.getBoundariesX(this.focus.x, this.getSceneWidth()),
            n = this.grid.getBoundariesY(this.focus.y, this.getSceneHeight());
        return {
          x: t.min,
          y: n.min,
          h: n.max - n.min,
          w: t.max - t.min
        };
      }
    }, {
      key: "toggleFPS",
      value: function toggleFPS(e) {
        this.renderingConfiguration.showFPS = null != e ? e : !this.renderingConfiguration.showFPS;
      }
    }, {
      key: "renderFPS",
      value: function renderFPS() {
        var e = Math.floor(d.a.now() / 1e3);
        if (e === this.secondFPS) this.countFPS++;else if (this.lastFPS = this.countFPS, this.countFPS = 1, this.secondFPS = e, !0 === this.autoFPS) {
          this.fpsPerformance.shift(), this.fpsPerformance[2] = this.lastFPS;

          var _e39 = (this.fpsPerformance[0] + this.fpsPerformance[1] + this.fpsPerformance[2]) / 3;

          this.FPS = Math.ceil(_e39) + 2;
        }
        this.renderingConfiguration.showFPS && (this.context.fillStyle = c.a.Color.RED, this.context.font = "bold 18px Oldenburg", this.context.fillText("" + this.lastFPS, this.grid.getCurrentTranslation().x + 10, this.grid.getCurrentTranslation().y + 20));
      }
    }, {
      key: "renderDynamicElements",
      value: function renderDynamicElements(e, t, n, i, o, a, s) {
        try {
          r.a.isVisible(this.hero, e, t, n, i, o, a, s) && r.a.render(this.grid, this.hero, this.context, !0);
        } catch (e) {
          console.error(e);
        }

        if (!d.a.isEmpty(this.map.events)) {
          var _iterator27 = _createForOfIteratorHelper(this.map.events),
              _step27;

          try {
            for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
              var _l3 = _step27.value;

              try {
                r.a.isVisible(_l3, e, t, n, i, o, a, s) && r.a.render(this.grid, _l3, this.context, !0, this.pointer);
              } catch (e) {
                console.error(e);
              }
            }
          } catch (err) {
            _iterator27.e(err);
          } finally {
            _iterator27.f();
          }
        }
      }
    }, {
      key: "loadSave",
      value: function loadSave(e, t) {
        var n, o;

        if (void 0 === e) {
          if (!d.a.isEmpty(this.map)) return void t(!1);
          n = i.a.maps.start.map, o = u.a.getHero();
        } else this.save = e, n = e.currentMap, o = e.hero;

        var a = r.a.initTransientData(this.map, this.grid, o);
        void 0 === a ? console.error("Cannot initialize hero event") : this.hero = a, s.a.loadMapSave(this, n, o, t);
      }
    }, {
      key: "startMovement",
      value: function startMovement(e, t) {
        return !(e < 0 || e >= this.map.width || t < 0 || t >= this.map.height) && r.a.startMovement(this.grid, this.hero, e, t);
      }
    }, {
      key: "registerAction",
      value: function registerAction(e, t) {
        this.action = {
          i: e,
          j: t
        };
      }
    }, {
      key: "isDialogOpen",
      value: function isDialogOpen() {
        return void 0 !== this.dialogName && void 0 !== this.dialogSkin;
      }
    }, {
      key: "setLanguage",
      value: function setLanguage(e) {
        void 0 === this.save && (this.save = u.a.getSave()), this.save.config.lang = e;
      }
    }, {
      key: "toggleNaturalScale",
      value: function toggleNaturalScale(e, t) {
        this.grid.toggleNaturalScale(e, t), this.grid.refreshCanvasSize(), this.changeScale(), this.reapplyTranslation();
      }
    }]);

    return f;
  }(o.a);
}, function (e, t, n) {
  "use strict";

  function i(e, t) {
    for (var n = [], i = {}, o = 0; o < t.length; o++) {
      var r = t[o],
          a = r[0],
          s = {
        id: e + ":" + o,
        css: r[1],
        media: r[2],
        sourceMap: r[3]
      };
      i[a] ? i[a].parts.push(s) : n.push(i[a] = {
        id: a,
        parts: [s]
      });
    }

    return n;
  }

  n.r(t), n.d(t, "default", function () {
    return p;
  });
  var o = "undefined" != typeof document;
  if ("undefined" != typeof DEBUG && DEBUG && !o) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");

  var r = {},
      a = o && (document.head || document.getElementsByTagName("head")[0]),
      s = null,
      l = 0,
      c = !1,
      d = function d() {},
      u = null,
      f = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());

  function p(e, t, n, o) {
    c = n, u = o || {};
    var a = i(e, t);
    return h(a), function (t) {
      for (var n = [], o = 0; o < a.length; o++) {
        var s = a[o];
        (l = r[s.id]).refs--, n.push(l);
      }

      t ? h(a = i(e, t)) : a = [];

      for (o = 0; o < n.length; o++) {
        var l;

        if (0 === (l = n[o]).refs) {
          for (var c = 0; c < l.parts.length; c++) {
            l.parts[c]();
          }

          delete r[l.id];
        }
      }
    };
  }

  function h(e) {
    for (var t = 0; t < e.length; t++) {
      var n = e[t],
          i = r[n.id];

      if (i) {
        i.refs++;

        for (var o = 0; o < i.parts.length; o++) {
          i.parts[o](n.parts[o]);
        }

        for (; o < n.parts.length; o++) {
          i.parts.push(m(n.parts[o]));
        }

        i.parts.length > n.parts.length && (i.parts.length = n.parts.length);
      } else {
        var a = [];

        for (o = 0; o < n.parts.length; o++) {
          a.push(m(n.parts[o]));
        }

        r[n.id] = {
          id: n.id,
          refs: 1,
          parts: a
        };
      }
    }
  }

  function g() {
    var e = document.createElement("style");
    return e.type = "text/css", a.appendChild(e), e;
  }

  function m(e) {
    var t,
        n,
        i = document.querySelector('style[data-vue-ssr-id~="' + e.id + '"]');

    if (i) {
      if (c) return d;
      i.parentNode.removeChild(i);
    }

    if (f) {
      var o = l++;
      i = s || (s = g()), t = A.bind(null, i, o, !1), n = A.bind(null, i, o, !0);
    } else i = g(), t = b.bind(null, i), n = function n() {
      i.parentNode.removeChild(i);
    };

    return t(e), function (i) {
      if (i) {
        if (i.css === e.css && i.media === e.media && i.sourceMap === e.sourceMap) return;
        t(e = i);
      } else n();
    };
  }

  var v,
      y = (v = [], function (e, t) {
    return v[e] = t, v.filter(Boolean).join("\n");
  });

  function A(e, t, n, i) {
    var o = n ? "" : i.css;
    if (e.styleSheet) e.styleSheet.cssText = y(t, o);else {
      var r = document.createTextNode(o),
          a = e.childNodes;
      a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(r, a[t]) : e.appendChild(r);
    }
  }

  function b(e, t) {
    var n = t.css,
        i = t.media,
        o = t.sourceMap;
    if (i && e.setAttribute("media", i), u.ssrId && e.setAttribute("data-vue-ssr-id", t.id), o && (n += "\n/*# sourceURL=" + o.sources[0] + " */", n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */"), e.styleSheet) e.styleSheet.cssText = n;else {
      for (; e.firstChild;) {
        e.removeChild(e.firstChild);
      }

      e.appendChild(document.createTextNode(n));
    }
  }
}, function (e, t, n) {
  "use strict";

  var i = function i() {
    var e = this,
        t = e.$createElement,
        n = e._self._c || t;
    return n("div", {
      staticClass: "root"
    }, [n("script", {
      attrs: {
        type: "application/javascript",
        async: "",
        defer: "",
        crossorigin: "anonymous",
        src: "https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v6.0&appId=1885551381575204"
      }
    }), e._v(" "), n("script", {
      attrs: {
        type: "application/javascript",
        async: "",
        defer: "",
        src: "https://apis.google.com/js/platform.js?onload=gAsyncInit"
      }
    }), e._v(" "), n("div", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: !e.loginStatus,
        expression: "!loginStatus"
      }]
    }, [n("div", {
      staticClass: "g-signin2",
      attrs: {
        "data-onsuccess": "gLoginCallback",
        "data-theme": "dark"
      }
    }), e._v(" "), n("div", {
      staticClass: "fb-login-button",
      attrs: {
        "data-size": "large",
        "data-button-type": "login_with",
        "data-layout": "default",
        "data-auto-logout-link": "false",
        "data-use-continue-as": "false",
        "data-width": "",
        "data-scope": "email"
      }
    }), e._v(" "), n("br"), e._v(" "), e._t("unlogged")], 2), e._v(" "), e.loginStatus ? n("div", [n("img", {
      staticClass: "statusIcon loggedIcon",
      attrs: {
        src: "/style/ui/logged.png",
        alt: "Logged icon",
        title: "You are currently logged in!"
      }
    }), e._v(" "), n("br"), e._v(" "), e.flagLoggingOut ? n("div", [n("img", {
      staticClass: "loading",
      attrs: {
        src: "/style/ui/spinner.gif",
        alt: "logging out..."
      }
    })]) : n("div", [n("button", {
      on: {
        click: e.logout
      }
    }, [e._v("Logout")]), e._v(" "), n("br"), n("br"), e._v(" "), e._t("logged")], 2)]) : e._e()]);
  };

  i._withStripped = !0;
  var o = n(8),
      r = n(6),
      a = o.a.extend({
    name: "login",
    props: {
      showIcons: {
        type: Boolean,
        required: !1,
        "default": !0
      }
    },
    data: function data() {
      return {
        loginStatus: !1,
        loginService: void 0,
        fbToken: void 0,
        flagLoggingOut: !1
      };
    },
    created: function created() {
      var e = document.createElement("meta");
      e.name = "google-signin-scope", e.content = "profile email", document.head.appendChild(e), e = document.createElement("meta"), e.name = "google-signin-client_id", e.content = "106250700124-f3tm8cc2l6raccir6e5fi9osccuvhaj0.apps.googleusercontent.com", document.head.appendChild(e);
      var t = this;
      window.fbAsyncInit = function () {
        FB.init({
          appId: "1885551381575204",
          autoLogAppEvents: !1,
          cookie: !0,
          xfbml: !1,
          version: "v6.0"
        }), FB.Event.subscribe("auth.statusChange", function (e) {
          t.fbLoginStatusChangeCallback(e);
        }), FB.getLoginStatus(function (e) {
          t.fbLoginStatusChangeCallback(e);
        });
      }, window.gAsyncInit = function () {
        gapi.load("auth2", function () {
          gapi.auth2.getAuthInstance().isSignedIn.get() && (o.a.set(t, "loginStatus", !0), o.a.set(t, "loginService", "google"));
        });
      }, window.gLoginCallback = this.gLoginCallback;
    },
    methods: {
      logoutCallback: function logoutCallback() {
        o.a.set(this, "loginStatus", !1), o.a.set(this, "loginService", void 0), o.a.set(this, "flagLoggingOut", !1);
      },
      logout: function logout() {
        if (this.loginStatus) {
          switch (this.loginService) {
            case "facebook":
              if (void 0 !== this.fbToken) {
                o.a.set(this, "flagLoggingOut", !0);

                var _e40 = this;

                FB.api("/me/permissions", "delete", {
                  access_token: _e40.fbToken
                }, function (t) {
                  !0 !== t.success && console.error("Facebook permission revoking failed: ", t), FB.logout(function (t) {
                    _e40.logoutCallback();
                  });
                }), this.fbToken = void 0;
              }

              break;

            case "google":
              gapi.auth2.getAuthInstance().signOut().then(this.logoutCallback());
              break;

            default:
              console.error("Unexpected loginService: " + this.loginService);
          }

          r.a.sendGETRequest("logout", function (e) {});
        } else console.error("Cannot logout, user is not currently logged in");
      },
      fbLoginStatusChangeCallback: function fbLoginStatusChangeCallback(e) {
        if ("connected" === e.status) {
          this.fbToken = e.authResponse.accessToken;
          var _t27 = {
            service: "facebook",
            token: e.authResponse.accessToken,
            userId: e.authResponse.userID
          };
          this.doLogin(_t27);
        }
      },
      gLoginCallback: function gLoginCallback(e) {
        var t = {
          service: "google",
          token: e.getAuthResponse().id_token
        };
        this.doLogin(t);
      },
      doLogin: function doLogin(e) {
        var t = this;
        r.a.sendPOSTRequest("/auth", JSON.stringify(e), function (n) {
          if (void 0 !== n) try {
            if (JSON.parse(n).result) return o.a.set(t, "loginStatus", !0), void o.a.set(t, "loginService", e.service);
          } catch (e) {
            console.error(n);
          }
          o.a.set(t, "loginStatus", !1), o.a.set(t, "loginService", void 0), console.error("Logged with " + e.service + " failed");
        });
      }
    }
  }),
      s = (n(34), n(22)),
      l = Object(s.a)(a, i, [], !1, null, "08ab550b", null);
  l.options.__file = "src/client/components/Login.vue";
  t.a = l.exports;
},, function (e, t, n) {
  (function (e) {
    var i = void 0 !== e && e || "undefined" != typeof self && self || window,
        o = Function.prototype.apply;

    function r(e, t) {
      this._id = e, this._clearFn = t;
    }

    t.setTimeout = function () {
      return new r(o.call(setTimeout, i, arguments), clearTimeout);
    }, t.setInterval = function () {
      return new r(o.call(setInterval, i, arguments), clearInterval);
    }, t.clearTimeout = t.clearInterval = function (e) {
      e && e.close();
    }, r.prototype.unref = r.prototype.ref = function () {}, r.prototype.close = function () {
      this._clearFn.call(i, this._id);
    }, t.enroll = function (e, t) {
      clearTimeout(e._idleTimeoutId), e._idleTimeout = t;
    }, t.unenroll = function (e) {
      clearTimeout(e._idleTimeoutId), e._idleTimeout = -1;
    }, t._unrefActive = t.active = function (e) {
      clearTimeout(e._idleTimeoutId);
      var t = e._idleTimeout;
      t >= 0 && (e._idleTimeoutId = setTimeout(function () {
        e._onTimeout && e._onTimeout();
      }, t));
    }, n(32), t.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== e && e.setImmediate || this && this.setImmediate, t.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== e && e.clearImmediate || this && this.clearImmediate;
  }).call(this, n(24));
}, function (e, t, n) {
  (function (e, t) {
    !function (e, n) {
      "use strict";

      if (!e.setImmediate) {
        var i,
            o,
            r,
            a,
            s,
            l = 1,
            c = {},
            d = !1,
            u = e.document,
            f = Object.getPrototypeOf && Object.getPrototypeOf(e);
        f = f && f.setTimeout ? f : e, "[object process]" === {}.toString.call(e.process) ? i = function i(e) {
          t.nextTick(function () {
            h(e);
          });
        } : !function () {
          if (e.postMessage && !e.importScripts) {
            var t = !0,
                n = e.onmessage;
            return e.onmessage = function () {
              t = !1;
            }, e.postMessage("", "*"), e.onmessage = n, t;
          }
        }() ? e.MessageChannel ? ((r = new MessageChannel()).port1.onmessage = function (e) {
          h(e.data);
        }, i = function i(e) {
          r.port2.postMessage(e);
        }) : u && "onreadystatechange" in u.createElement("script") ? (o = u.documentElement, i = function i(e) {
          var t = u.createElement("script");
          t.onreadystatechange = function () {
            h(e), t.onreadystatechange = null, o.removeChild(t), t = null;
          }, o.appendChild(t);
        }) : i = function i(e) {
          setTimeout(h, 0, e);
        } : (a = "setImmediate$" + Math.random() + "$", s = function s(t) {
          t.source === e && "string" == typeof t.data && 0 === t.data.indexOf(a) && h(+t.data.slice(a.length));
        }, e.addEventListener ? e.addEventListener("message", s, !1) : e.attachEvent("onmessage", s), i = function i(t) {
          e.postMessage(a + t, "*");
        }), f.setImmediate = function (e) {
          "function" != typeof e && (e = new Function("" + e));

          for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) {
            t[n] = arguments[n + 1];
          }

          var o = {
            callback: e,
            args: t
          };
          return c[l] = o, i(l), l++;
        }, f.clearImmediate = p;
      }

      function p(e) {
        delete c[e];
      }

      function h(e) {
        if (d) setTimeout(h, 0, e);else {
          var t = c[e];

          if (t) {
            d = !0;

            try {
              !function (e) {
                var t = e.callback,
                    n = e.args;

                switch (n.length) {
                  case 0:
                    t();
                    break;

                  case 1:
                    t(n[0]);
                    break;

                  case 2:
                    t(n[0], n[1]);
                    break;

                  case 3:
                    t(n[0], n[1], n[2]);
                    break;

                  default:
                    t.apply(void 0, n);
                }
              }(t);
            } finally {
              p(e), d = !1;
            }
          }
        }
      }
    }("undefined" == typeof self ? void 0 === e ? this : e : self);
  }).call(this, n(24), n(33));
}, function (e, t) {
  var n,
      i,
      o = e.exports = {};

  function r() {
    throw new Error("setTimeout has not been defined");
  }

  function a() {
    throw new Error("clearTimeout has not been defined");
  }

  function s(e) {
    if (n === setTimeout) return setTimeout(e, 0);
    if ((n === r || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);

    try {
      return n(e, 0);
    } catch (t) {
      try {
        return n.call(null, e, 0);
      } catch (t) {
        return n.call(this, e, 0);
      }
    }
  }

  !function () {
    try {
      n = "function" == typeof setTimeout ? setTimeout : r;
    } catch (e) {
      n = r;
    }

    try {
      i = "function" == typeof clearTimeout ? clearTimeout : a;
    } catch (e) {
      i = a;
    }
  }();
  var l,
      c = [],
      d = !1,
      u = -1;

  function f() {
    d && l && (d = !1, l.length ? c = l.concat(c) : u = -1, c.length && p());
  }

  function p() {
    if (!d) {
      var e = s(f);
      d = !0;

      for (var t = c.length; t;) {
        for (l = c, c = []; ++u < t;) {
          l && l[u].run();
        }

        u = -1, t = c.length;
      }

      l = null, d = !1, function (e) {
        if (i === clearTimeout) return clearTimeout(e);
        if ((i === a || !i) && clearTimeout) return i = clearTimeout, clearTimeout(e);

        try {
          i(e);
        } catch (t) {
          try {
            return i.call(null, e);
          } catch (t) {
            return i.call(this, e);
          }
        }
      }(e);
    }
  }

  function h(e, t) {
    this.fun = e, this.array = t;
  }

  function g() {}

  o.nextTick = function (e) {
    var t = new Array(arguments.length - 1);
    if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) {
      t[n - 1] = arguments[n];
    }
    c.push(new h(e, t)), 1 !== c.length || d || s(p);
  }, h.prototype.run = function () {
    this.fun.apply(null, this.array);
  }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = g, o.addListener = g, o.once = g, o.off = g, o.removeListener = g, o.removeAllListeners = g, o.emit = g, o.prependListener = g, o.prependOnceListener = g, o.listeners = function (e) {
    return [];
  }, o.binding = function (e) {
    throw new Error("process.binding is not supported");
  }, o.cwd = function () {
    return "/";
  }, o.chdir = function (e) {
    throw new Error("process.chdir is not supported");
  }, o.umask = function () {
    return 0;
  };
}, function (e, t, n) {
  "use strict";

  var i = n(19);
  n.n(i).a;
}, function (e, t, n) {
  "use strict";

  n.r(t);
  var i = n(21),
      o = n.n(i)()(!0);
  o.push([e.i, "\n.root[data-v-08ab550b] {\n    width: auto;\n    text-align: center;\n    margin-bottom: 1em;\n}\n.root div[data-v-08ab550b] {\n    margin:0.5em;\n    text-align: center;\n}\n.statusIcon[data-v-08ab550b] {\n    margin: 0.5em;\n    border-radius: 100%;\n    width: 40px;\n    height: 40px;\n}\n.loggedIcon[data-v-08ab550b] {\n    border-width: 2px;\n    border-style: solid;\n    border-color: green;\n    background-color: lightgreen;\n}\n.unloggedIcon[data-v-08ab550b] {\n    border-width: 2px;\n    border-style: dashed;\n    border-color: gray;\n    background-color: lightgray;\n}\n.loading[data-v-08ab550b] {\n    width: 2em;\n    height: 2em;\n}\n", "", {
    version: 3,
    sources: ["webpack://src/client/components/Login.vue"],
    names: [],
    mappings: ";AAwMA;IACA,WAAA;IACA,kBAAA;IACA,kBAAA;AACA;AACA;IACA,YAAA;IACA,kBAAA;AACA;AACA;IACA,aAAA;IACA,mBAAA;IACA,WAAA;IACA,YAAA;AACA;AACA;IACA,iBAAA;IACA,mBAAA;IACA,mBAAA;IACA,4BAAA;AACA;AACA;IACA,iBAAA;IACA,oBAAA;IACA,kBAAA;IACA,2BAAA;AACA;AACA;IACA,UAAA;IACA,WAAA;AACA",
    sourcesContent: ['<template>\n    <div class="root">\n        <script type="application/javascript" async defer crossorigin="anonymous" src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v6.0&appId=1885551381575204"><\/script>\n        <script type="application/javascript" async defer src="https://apis.google.com/js/platform.js?onload=gAsyncInit"><\/script>\n        <div v-show="!loginStatus">\n            \x3c!-- <img class="statusIcon unloggedIcon" src="/style/ui/unlogged.png" alt="Unlogged icon" title="You are not currently logged in"> --\x3e\n            \x3c!-- Google login --\x3e\n            <div class="g-signin2" data-onsuccess="gLoginCallback" data-theme="dark"></div>\n            \x3c!-- Facebook login --\x3e\n            <div class="fb-login-button" data-size="large" data-button-type="login_with" data-layout="default" data-auto-logout-link="false"\n                data-use-continue-as="false" data-width="" data-scope="email" ></div>\n            <br>\n            <slot name="unlogged"></slot>\n        </div>\n        <div v-if="loginStatus">\n            <img class="statusIcon loggedIcon" src="/style/ui/logged.png" alt="Logged icon" title="You are currently logged in!">\n            <br>\n            <div v-if="flagLoggingOut">\n                <img class="loading" src="/style/ui/spinner.gif" alt="logging out..." />\n            </div>\n            <div v-else>\n                <button v-on:click="logout">Logout</button>\n                <br><br>\n                <slot name="logged"></slot>\n            </div>\n        </div>\n    </div>\n</template>\n\n<script lang="ts">\nimport Vue from "vue"\nimport { Resource } from "../core/util/Resource"\nimport { AuthService, IAuthRequest, IAuthResponse } from "../../common/ServerAPI"\n\ndeclare let FB: any; // Loaded from Facebook script\ndeclare let gapi: any; // Loaded from Google script\n\ninterface FBLoginResponse {\n    status: "connected" | "not_authorized" | "unknown",\n    authResponse?: {\n        accessToken: string,\n        expiresIn: any,\n        signedRequest: any,\n        userID: string\n    }\n}\n\nexport default Vue.extend({\n    name: "login",\n    props: {\n        showIcons: {\n            type: Boolean,\n            required: false,\n            default: true\n        }\n    },\n    data: function (): {\n        loginStatus: boolean,\n        loginService?: AuthService,\n        fbToken?: string,\n        flagLoggingOut: boolean\n    } {\n        return {\n            loginStatus: false,\n            loginService: undefined,\n            fbToken: undefined,\n            flagLoggingOut: false\n       }\n    },\n    created: function() {\n        // Add Google login meta tags\n        let meta = document.createElement("meta");\n        meta.name = "google-signin-scope";\n        meta.content = "profile email";\n        document.head.appendChild(meta);\n\n        meta = document.createElement("meta");\n        meta.name = "google-signin-client_id";\n        meta.content = "106250700124-f3tm8cc2l6raccir6e5fi9osccuvhaj0.apps.googleusercontent.com";\n        document.head.appendChild(meta);\n\n        // Init Facebook login\n        let vueScope = this;\n        window["fbAsyncInit"] = function() {\n            FB.init({\n                appId: "1885551381575204",\n                autoLogAppEvents: false,\n                cookie: true,\n                xfbml: false,\n                version : "v6.0"\n            });\n            FB.Event.subscribe("auth.statusChange", function(response: FBLoginResponse) {\n                vueScope.fbLoginStatusChangeCallback(response);\n            });\n            FB.getLoginStatus(function(response: FBLoginResponse) {\n                vueScope.fbLoginStatusChangeCallback(response);\n            });\n        };\n\n        // Init Google login\n        window["gAsyncInit"] = function() {\n            gapi.load("auth2", function() {\n                const authInstance = gapi.auth2.getAuthInstance();\n                if(authInstance.isSignedIn.get()) {\n                    Vue.set(vueScope, "loginStatus", true);\n                    Vue.set(vueScope, "loginService", "google");\n                }\n            });\n        };\n        window["gLoginCallback"] = this.gLoginCallback;\n    },\n    methods: {\n        logoutCallback: function() {\n            Vue.set(this, "loginStatus", false);\n            Vue.set(this, "loginService", undefined);\n            Vue.set(this, "flagLoggingOut", false);\n        },\n        logout: function logout() {\n            // Check which service is used, only logout from that service\n            if(this.loginStatus) {\n                switch(this.loginService) {\n                case "facebook":\n                    // Facebook logout\n                    if(this.fbToken !== undefined) {\n                        // Since Facebook logout is slow, display an animation and hide the buttons\n                        Vue.set(this, "flagLoggingOut", true);\n                        let vueScope = this;\n                        // Remove permission, so that the user is asked to authenticate the app again\n                        // (seems like FB.logout() isn\'t enough, if you refresh the page you are still logged)\n                        FB.api("/me/permissions", "delete", {\n                            access_token: vueScope.fbToken\n                        }, function(response: any) {\n                            if(response.success !== true) {\n                                console.error("Facebook permission revoking failed: ", response);\n                            }\n                            FB.logout(function(response: FBLoginResponse)  {\n                                vueScope.logoutCallback();\n                            });\n                        });\n                        this.fbToken = undefined;\n                    }\n                    break;\n                case "google":\n                    // Google logout\n                    let auth2 = gapi.auth2.getAuthInstance();\n                    auth2.signOut().then(this.logoutCallback());\n                    break;\n                default:\n                    console.error("Unexpected loginService: " + this.loginService);\n                }\n                Resource.sendGETRequest("logout", function(response?: string) {\n                    // Nothing to do\n                });\n            } else {\n                console.error("Cannot logout, user is not currently logged in")\n            }\n        },\n        fbLoginStatusChangeCallback: function(response: FBLoginResponse) {\n            if(response.status === "connected") {\n                this.fbToken = response.authResponse!.accessToken;\n                let request: IAuthRequest = {\n                    service: "facebook",\n                    token: response.authResponse!.accessToken,\n                    userId: response.authResponse!.userID\n                };\n                this.doLogin(request);\n            }\n        },\n        gLoginCallback: function(googleUser: any) {\n            let request: IAuthRequest = {\n                service: "google",\n                token: googleUser.getAuthResponse().id_token\n            };\n            this.doLogin(request);\n        },\n        doLogin(request: IAuthRequest) {\n            let vueScope = this;\n            Resource.sendPOSTRequest("/auth", JSON.stringify(request), function(response?: string) {\n                if(response !== undefined) {\n                    try {\n                        let authResponse: IAuthResponse = JSON.parse(response);\n                        if(authResponse.result) {\n                            Vue.set(vueScope, "loginStatus", true);\n                            Vue.set(vueScope, "loginService", request.service);\n                            return;\n                        }\n                    } catch(e) {\n                        console.error(response);\n                    }\n                }\n                Vue.set(vueScope, "loginStatus", false);\n                Vue.set(vueScope, "loginService", undefined);\n                console.error("Logged with " + request.service + " failed");\n            });\n        }\n    }\n});\n<\/script>\n\n<style scoped>\n.root {\n    width: auto;\n    text-align: center;\n    margin-bottom: 1em;\n}\n.root div {\n    margin:0.5em;\n    text-align: center;\n}\n.statusIcon {\n    margin: 0.5em;\n    border-radius: 100%;\n    width: 40px;\n    height: 40px;\n}\n.loggedIcon {\n    border-width: 2px;\n    border-style: solid;\n    border-color: green;\n    background-color: lightgreen;\n}\n.unloggedIcon {\n    border-width: 2px;\n    border-style: dashed;\n    border-color: gray;\n    background-color: lightgray;\n}\n.loading {\n    width: 2em;\n    height: 2em;   \n}\n</style>'],
    sourceRoot: ""
  }]), t["default"] = o;
}, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return a;
  });
  var i = n(25),
      o = n(1),
      r = n(2);

  var a = /*#__PURE__*/function (_i$a4) {
    _inherits(a, _i$a4);

    var _super5 = _createSuper(a);

    function a(e) {
      var _this2;

      _classCallCheck(this, a);

      _this2 = _super5.call(this, e), _this2.renderingConfiguration.showEditorGrid = !0, _this2.renderingConfiguration.enableSelection = !0, _this2.renderingConfiguration.enableAntialiasing = !1, _this2.requestedNewFrame = !0;
      return _this2;
    }

    _createClass(a, [{
      key: "mainGameLoop_pre",
      value: function mainGameLoop_pre() {
        if (!_get(_getPrototypeOf(a.prototype), "mainGameLoop_pre", this).call(this)) return !1;
        if (void 0 === this.pointer && !this.requestedNewFrame) return !1;
        var e = void 0 === this.oldDrawArea || this.requestedNewFrame;
        return this.requestedNewFrame && (this.requestedNewFrame = !1), this.newDrawArea = this.getRedrawArea(e), this.redrawArea = r.a.mergeRectangles(this.oldDrawArea, this.newDrawArea), this.grid.clear(this.context, this.redrawArea), !0;
      }
    }, {
      key: "mainGameLoop_post",
      value: function mainGameLoop_post() {
        _get(_getPrototypeOf(a.prototype), "mainGameLoop_post", this).call(this), this.oldDrawArea = this.newDrawArea;
      }
    }, {
      key: "render",
      value: function render(e, t) {
        _get(_getPrototypeOf(a.prototype), "render", this).call(this, e, t, !1);
      }
    }, {
      key: "getRedrawArea",
      value: function getRedrawArea(e, t) {
        var n;
        n = e ? void 0 : this.pointer;
        var i = this.grid.getBoundariesX(this.focus.x, this.getSceneWidth(), n, t),
            o = this.grid.getBoundariesY(this.focus.y, this.getSceneHeight(), n, t);
        return {
          x: i.min,
          y: o.min,
          h: o.max - o.min,
          w: i.max - i.min
        };
      }
    }, {
      key: "toggleEditorGrid",
      value: function toggleEditorGrid(e) {
        this.renderingConfiguration.showEditorGrid = null != e ? e : !this.renderingConfiguration.showEditorGrid, this.requestedNewFrame = !0;
      }
    }, {
      key: "renderPointer",
      value: function renderPointer() {
        void 0 !== this.pointer && (this.context.save(), this.context.globalAlpha = .4, this.context.fillStyle = o.a.Color.YELLOW, this.context.fillRect(this.pointer.i * this.grid.cellW, this.pointer.j * this.grid.cellH, this.grid.cellW, this.grid.cellH), this.context.restore());
      }
    }, {
      key: "select",
      value: function select(e, t) {
        void 0 !== e && void 0 !== t && (this.renderingConfiguration.selectCellStart = {
          i: e,
          j: t
        }, this.renderingConfiguration.selectCellEnd = void 0);
      }
    }, {
      key: "selectEnd",
      value: function selectEnd(e, t) {
        void 0 !== e && void 0 !== t && (this.renderingConfiguration.selectCellEnd = {
          i: e,
          j: t
        });
      }
    }, {
      key: "cleanSelection",
      value: function cleanSelection() {
        this.renderingConfiguration.selectCellStart = void 0, this.renderingConfiguration.selectCellEnd = void 0, this.requestedNewFrame = !0;
      }
    }, {
      key: "getSelectionArea",
      value: function getSelectionArea() {
        if (void 0 === this.renderingConfiguration.selectCellStart) return;
        var e,
            t,
            n = this.renderingConfiguration.selectCellStart.i,
            i = this.renderingConfiguration.selectCellStart.j;

        if (void 0 !== this.renderingConfiguration.selectCellEnd) {
          if (e = this.renderingConfiguration.selectCellEnd.i, t = this.renderingConfiguration.selectCellEnd.j, n > e) {
            var _t28 = n;
            n = e, e = _t28;
          }

          if (i > t) {
            var _e41 = i;
            i = t, t = _e41;
          }
        } else e = this.renderingConfiguration.selectCellStart.i, t = this.renderingConfiguration.selectCellStart.j;

        return {
          x: n,
          y: i,
          w: e - n,
          h: t - i
        };
      }
    }, {
      key: "renderDynamicElements",
      value: function renderDynamicElements(e, t, n, i, o, r, a) {}
    }]);

    return a;
  }(i.a);
}, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return r;
  });
  var i = n(23),
      o = n(0);

  var r = /*#__PURE__*/function (_i$a5) {
    _inherits(r, _i$a5);

    var _super6 = _createSuper(r);

    function r(e, t, n, i) {
      var _this3;

      _classCallCheck(this, r);

      _this3 = _super6.call(this, e, t, n), _this3.overriddenProps = void 0 !== i ? i : new Map();
      return _this3;
    }

    _createClass(r, [{
      key: "deferredInit",
      value: function deferredInit(e) {
        switch (o.a.isEmpty(this.overriddenProps) || (e = o.a.mergeMaps(this.overriddenProps, e)), _get(_getPrototypeOf(r.prototype), "deferredInit", this).call(this, e), this.gridType) {
          case i.b.mapper:
            this.canvasScales = [], this.canvasScales.push(e.get("canvasScaleD")), this.canvasScales.push(e.get("canvasScaleC")), this.canvasScales.push(e.get("canvasScaleB")), this.canvasScales.push(e.get("canvasScaleA"));
            var _t29 = this.canvasScales.length;
            this.rowsList = new Array(_t29), this.columnsList = new Array(_t29);

            var _n22 = _t29 - 1;

            for (var _e42 = 0; _e42 < _t29; _e42++) {
              this.rowsList[_e42] = Math.floor(this.rows / this.canvasScales[_e42]), this.columnsList[_e42] = Math.floor(this.columns / this.canvasScales[_e42]);
            }

            this.selectScale(_n22);
            break;

          case i.b.tilePicker:
            this.scaleX = 1, this.scaleY = 1;
            break;

          default:
            console.error("Unexpected gridType case: " + this.gridType);
        }
      }
    }, {
      key: "selectScale",
      value: function selectScale(e) {
        this.scaleX = this.canvasScales[e], this.scaleY = this.canvasScales[e];
      }
    }, {
      key: "updateSize",
      value: function updateSize(e, t) {
        this.rows = e, this.columns = t, this.updateSizingDerivates();
      }
    }, {
      key: "getBoundariesX",
      value: function getBoundariesX(e, t, n, i) {
        return void 0 !== n ? void 0 !== i ? {
          min: n.i,
          max: n.i + i.w
        } : {
          min: n.i,
          max: n.i
        } : _get(_getPrototypeOf(r.prototype), "getBoundariesX", this).call(this, e, t);
      }
    }, {
      key: "getBoundariesY",
      value: function getBoundariesY(e, t, n, i) {
        return void 0 !== n ? void 0 !== i ? {
          min: n.j,
          max: n.j + i.h
        } : {
          min: n.j,
          max: n.j
        } : _get(_getPrototypeOf(r.prototype), "getBoundariesY", this).call(this, e, t);
      }
    }, {
      key: "getVisibleRectangle",
      value: function getVisibleRectangle(e, t, n) {
        var i = this.checkBoundariesLimit(e.x, e.x + e.w, t, !0),
            o = this.checkBoundariesLimit(e.y, e.y + e.h, n, !0);
        return {
          x: i.min,
          y: o.min,
          w: i.max - i.min,
          h: o.max - o.min
        };
      }
    }]);

    return r;
  }(i.a);
}, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return o;
  });
  var i = n(36);

  var o = /*#__PURE__*/function (_i$a6) {
    _inherits(o, _i$a6);

    var _super7 = _createSuper(o);

    function o() {
      _classCallCheck(this, o);

      return _super7.apply(this, arguments);
    }

    _createClass(o, [{
      key: "updateSize",
      value: function updateSize(e, t) {
        this.map.width = Math.floor(e / this.grid.cellW), this.map.height = Math.floor(t / this.grid.cellH), this.grid.updateSize(this.map.width, this.map.height), this.requestedNewFrame = !0;
      }
    }, {
      key: "getRedrawArea",
      value: function getRedrawArea(e) {
        var t = this.getSelectionArea();
        return _get(_getPrototypeOf(o.prototype), "getRedrawArea", this).call(this, e, t);
      }
    }, {
      key: "select",
      value: function select(e, t) {
        _get(_getPrototypeOf(o.prototype), "select", this).call(this, e, t), this.requestedNewFrame = !0;
      }
    }]);

    return o;
  }(i.a);
},, function (e, t, n) {
  var i = n(45);
  "string" == typeof i && (i = [[e.i, i, ""]]), i.locals && (e.exports = i.locals);
  (0, n(28)["default"])("5d7e4b2e", i, !1, {});
}, function (e, t, n) {
  var i = n(47);
  "string" == typeof i && (i = [[e.i, i, ""]]), i.locals && (e.exports = i.locals);
  (0, n(28)["default"])("1641e882", i, !1, {});
},,, function (e, t, n) {
  "use strict";

  var i = n(40);
  n.n(i).a;
}, function (e, t, n) {
  "use strict";

  n.r(t);
  var i = n(21),
      o = n.n(i)()(!0);
  o.push([e.i, '\nul[data-v-06f2eb40] {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n}\n.dialogSummaryRow[data-v-06f2eb40] {\n\t-webkit-user-select: none;  /* Chrome all / Safari all */\n\t-moz-user-select: none;     /* Firefox all */\n\t-ms-user-select: none;      /* IE 10+ */\n\tuser-select: none;          /* Likely future */  \n\tborder: 1px solid transparent;\n    cursor: pointer;\n    display: inline-block; /* Avoid newLine after list custom symbol */\n}\n.dialogSummaryRow[data-v-06f2eb40]:hover {\n\tborder: 1px dotted blue;\n}\n.edge[data-v-06f2eb40] {\n    font-style: italic;\n    display: inline-block;\n}\n.edge[data-v-06f2eb40]:before {\n    content: ">"; /* Insert content as new list symbol */\n    margin-right: 6px;\n    font-style: italic;\n}\n.elementId[data-v-06f2eb40] {\n    display: inline-block;\n\tfont-size: smaller;\n\tcolor: rgb(80, 80, 80);\n}\n.dialogSummarySubnode[data-v-06f2eb40] {\n    margin-left: 2em;\n}\n.endElement[data-v-06f2eb40] {\n    width: 100%;\n    height: 0.5em;\n    border-top:1px solid black;\n}\n.jumpElement[data-v-06f2eb40] {\n    width: 100%;\n    height: 0.5em;\n    border-top:1px dashed black;\n}\n.selectedNode[data-v-06f2eb40] {\n    background: lightyellow;\n}\n.unselectedNode[data-v-06f2eb40] {\n    background: white;\n}\n', "", {
    version: 3,
    sources: ["webpack://src/client/components/DialogSummary.vue"],
    names: [],
    mappings: ";AAgEA;IACA,gBAAA;IACA,UAAA;IACA,SAAA;AACA;AACA;CACA,yBAAA,GAAA,4BAAA;CACA,sBAAA,MAAA,gBAAA;CACA,qBAAA,OAAA,WAAA;CACA,iBAAA,WAAA,kBAAA;CACA,6BAAA;IACA,eAAA;IACA,qBAAA,EAAA,2CAAA;AACA;AACA;CACA,uBAAA;AACA;AACA;IACA,kBAAA;IACA,qBAAA;AACA;AACA;IACA,YAAA,EAAA,sCAAA;IACA,iBAAA;IACA,kBAAA;AACA;AACA;IACA,qBAAA;CACA,kBAAA;CACA,sBAAA;AACA;AACA;IACA,gBAAA;AACA;AACA;IACA,WAAA;IACA,aAAA;IACA,0BAAA;AACA;AACA;IACA,WAAA;IACA,aAAA;IACA,2BAAA;AACA;AACA;IACA,uBAAA;AACA;AACA;IACA,iBAAA;AACA",
    sourcesContent: ['<template>\n    <div :class="[ selectedNodeId.id === node.id ? \'selectedNode\' : \'unselectedNode\' ]">\n        <div class="dialogSummaryRow" v-bind:onclick="\'L4W_mapper.MapperPage.loadDialogEditor(\' + node.id + \')\'">\n            <a v-bind:name="node.id" />\n            {{ node.message | str_limit() }} <div class="elementId">N{{ node.id }}</div>\n        </div>\n        <ul>\n            <li v-for="edge in node.edges" v-bind:key="edge.id">\n                <div class="dialogSummaryRow" v-bind:onclick="\'L4W_mapper.MapperPage.loadDialogEditor(\' + node.id + \')\'">\n                    <div class="edge">{{ edge.message | str_limit() }}</div> <div class="elementId">E{{ edge.id }}</div>\n                </div>\n                <div v-if="edge.node !== undefined" class="dialogSummarySubnode">\n                    <div v-if="!edge.nodeReferenced">\n                        \x3c!-- Recursive template render --\x3e\n                        <dialog-summary :node="edge.node" :selected-node-id="selectedNodeId" />\n                    </div>\n                    <div v-else>\n                        \x3c!-- To avoid repetition, only include message --\x3e\n                        <div class="dialogSummaryRow unselectedNode" v-bind:onclick="\'L4W_mapper.MapperPage.loadDialogEditor(\' + edge.node.id + \')\'">\n                            {{ edge.node.message | str_limit() }} <div class="elementId"><a v-bind:href="\'#\' + edge.node.id">(N{{ edge.node.id }})</a></div>\n                        </div>\n                        <div class="jumpElement" />\n                    </div>\n                </div>\n            </li>\n        </ul>\n        <div class="endElement" />\n    </div>\n</template>\n\n<script lang="ts">\nimport Vue, { PropType } from "vue"\nimport { IDialogNode } from "../../common/model/Dialog";\n\nexport default Vue.extend({\n    name: "dialog-summary",\n    props: {\n        node: {\n            type: Object as PropType<IDialogNode>,\n            required: true\n        },\n        selectedNodeId: {\n            type: Object as PropType<{ id: number }>,\n            required: true\n        }\n    }\n})\n\nVue.filter("str_limit", function (value: string, size?: number) {\n    if (value === undefined) {\n        return "";\n    } \n    value = value.toString();\n    if(size === undefined) {\n        size = 45;\n    }\n    if (value.length <= size) {\n        return value;\n    }\n    return value.substr(0, size) + "...";\n});\n<\/script>\n\n<style scoped>\nul {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n}\n.dialogSummaryRow {\n\t-webkit-user-select: none;  /* Chrome all / Safari all */\n\t-moz-user-select: none;     /* Firefox all */\n\t-ms-user-select: none;      /* IE 10+ */\n\tuser-select: none;          /* Likely future */  \n\tborder: 1px solid transparent;\n    cursor: pointer;\n    display: inline-block; /* Avoid newLine after list custom symbol */\n}\n.dialogSummaryRow:hover {\n\tborder: 1px dotted blue;\n}\n.edge {\n    font-style: italic;\n    display: inline-block;\n}\n.edge:before {\n    content: ">"; /* Insert content as new list symbol */\n    margin-right: 6px;\n    font-style: italic;\n}\n.elementId {\n    display: inline-block;\n\tfont-size: smaller;\n\tcolor: rgb(80, 80, 80);\n}\n.dialogSummarySubnode {\n    margin-left: 2em;\n}\n.endElement {\n    width: 100%;\n    height: 0.5em;\n    border-top:1px solid black;\n}\n.jumpElement {\n    width: 100%;\n    height: 0.5em;\n    border-top:1px dashed black;\n}\n.selectedNode {\n    background: lightyellow;\n}\n.unselectedNode {\n    background: white;\n}\n</style>'],
    sourceRoot: ""
  }]), t["default"] = o;
}, function (e, t, n) {
  "use strict";

  var i = n(41);
  n.n(i).a;
}, function (e, t, n) {
  "use strict";

  n.r(t);
  var i = n(21),
      o = n.n(i)()(!0);
  o.push([e.i, "\n.dialogNodeDetails[data-v-73ccf623]{\n    text-align: left;\n    padding: 0.5em;\n}\n.dialogEdgeDetails[data-v-73ccf623]{\n    text-align: left;\n\tborder: 1px dotted black;\n    margin: 0.5em;\n    padding: 0.5em;\n}\n.elementId[data-v-73ccf623] {\n    float: right;\n    font-size: smaller;\n\tcolor: rgb(80, 80, 80);\n}\n.dialogSelectionDetails[data-v-73ccf623]{\n\tborder: 1px dotted black;\n\tmargin: 0.5em;\n}\n.dialogMessage[data-v-73ccf623]{\n\tfloat: left;\n\tborder: 10px solid black;\n\tmargin: 0.5em;\n}\n.message[data-v-73ccf623]{\n    width: 21em;\n    height: 3em;\n    font-family: Oldenburg, Verdana, Geneva, Arial, Helvetica, sans-serif;\n    font-display: swap;\n    font-size: medium;\n    resize: vertical;\n}\n.nodeClosingTimeout[data-v-73ccf623]{\n    width: 6em;\n}\n", "", {
    version: 3,
    sources: ["webpack://src/client/components/DialogEditor.vue"],
    names: [],
    mappings: ";AAuRA;IACA,gBAAA;IACA,cAAA;AACA;AACA;IACA,gBAAA;CACA,wBAAA;IACA,aAAA;IACA,cAAA;AACA;AACA;IACA,YAAA;IACA,kBAAA;CACA,sBAAA;AACA;AACA;CACA,wBAAA;CACA,aAAA;AACA;AACA;CACA,WAAA;CACA,wBAAA;CACA,aAAA;AACA;AACA;IACA,WAAA;IACA,WAAA;IACA,qEAAA;IACA,kBAAA;IACA,iBAAA;IACA,gBAAA;AACA;AACA;IACA,UAAA;AACA",
    sourcesContent: ['<template>\n    <div>\n        <div>\n            \x3c!-- Dialog node editor --\x3e\n            <div class="dialogNodeDetails">\n                <div class="elementId">N{{ node.id }}</div>\n                <textarea ref="dialogNodeMessage" class="message" type="text" placeholder="<message>" v-model="node.message"/><br>\n                \x3c!-- TODO Generic message: <select id="genericMessage"></select><br/> --\x3e\n                Autoclose in <input ref="nodeClosingTimeout" type="number" min="0" max="10000" step="1" v-model="node.closingTimeout"/> msec<br>\n                <br>\n                <div style="float:none"/>\n                \x3c!-- Disabled edges selection, until it is needed bad enough to justify fixing the render stack overflow problem --\x3e\n                \x3c!--\n                Connect to <select ref="edges" v-on:change="onEdgeChange($event)">\n                    <option selected disabled value="">&nbsp;</option>\n                    <option v-for="option in edgeIds" v-bind:key="option" v-bind:value="option">\n                        {{ option }}\n                    </option>\n                </select> or \n                --\x3e\n                <button v-on:click="addEdge()">Create new edge</button>\n                <br>\n            </div>\n            \n            \x3c!-- Dialog edge editor --\x3e\n            <div class="dialogEdgeDetails" v-for="edge in node.edges" v-bind:key="edge.id">\n                <div class="elementId">E{{ edge.id }}</div>\n                <textarea ref="dialogEdgeMessage" class="message" type="text" placeholder="<message>" v-model="edge.message"/><br>\n\n                Condition <select ref="edgeCondition" v-model="edge.condition">\n                    <option v-for="option in edgeConditions" v-bind:key="option" v-bind:value="option">\n                        {{ option }}\n                    </option>\n                </select><br>\n                <div v-if="edge.condition">Cond. param: <input class="edgeConditionParameters" type="text" v-model="edge.conditionParams"/><br></div>\n\n                Script <select ref="edgeScript" v-model="edge.script" v-on:change="onScriptChange($event, edge)">\n                    <option v-for="option in edgeScripts" v-bind:key="option[0]" v-bind:value="option[0]">\n                        {{  option[0] + " (" + option[1] + ")" }}\n                    </option>\n                </select><br>\n                <div v-if="edge.script !== undefined">\n                    Action <select ref="edgeAction" v-model="edge.action">\n                        <option v-for="option in edge.actions" v-bind:key="option" v-bind:value="option">\n                            {{  option }}\n                        </option>\n                    </select>\n                </div>\n                \n                <div style="float:none"/>\n                <button style="color:red;float:right" title="Remove this edge (if disconnected, will be deleted when saving)" v-on:click="deleteEdge(edge)">Remove</button>\n                <br>\n                <br>\n                Connect to <select ref="nodes" v-model="edge.nodeId" v-on:change="onNodeChange($event, edge)">\n                    <option selected disabled value="">&nbsp;</option>\n                    <option v-for="option in nodeIds" v-bind:key="option" v-bind:value="option">\n                        {{ option }}\n                    </option>\n                </select>\n                <span v-if="edge.nodeId === undefined"> or <button v-on:click="addNode(edge)">Create new node</button></span>\n                <span v-else> or <button style="color:red" title="Remove this node (if disconnected, will be deleted when saving)" v-on:click="deleteNode(edge)">Remove node</button></span>            \n            </div>\n        </div>\n\n        \x3c!-- TODO --\x3e\n        \x3c!--\n        <div id="genericMessageArea" style="display:block">\n            <div class="dialogMessage">\n                Message &amp; GenericMessage editor\n\n                // A message that can be resolved to different strings, based on some conditions\n                IGenericMessage\n                    id: number; // ID of the generic string\n                    description: string; // Description of the generic string\n                    condition?: string; // Name of function that returns true if this state can be active (see Conditions.ts)\n                    values: IGenericMessageValue[]; // Array of possible values for this generic message\n                    \n                // Single value that could be used for a generic message\n                IGenericMessageValue\n                    message: string; // String of the message\n                    conditionParams: string; // Parameters to be used for evaluating the condition\n            </div>\n        </div>\n        --\x3e\n\t</div>\n</template>\n\n<script lang="ts">\nimport Vue, { PropType } from "vue"\nimport { Resource } from "../core/util/Resource";\nimport { DataDefaults } from "../../common/DataDefaults";\nimport { Utils } from "../../common/Utils";\nimport { IDialogNode, IDialogEdge } from "../../common/model/Dialog";\nimport { DialogManager } from "../core/manager/DialogManager";\nimport { MapperPage } from "../tool/mapper/MapperPage";\n\nexport default Vue.extend({\n    name: "dialog-editor",\n    props: {\n        node: {\n            type: Object as PropType<IDialogNode>,\n            required: true\n        },\n        dialog: {\n            type: Object as PropType<IDialogNode>,\n            required: true\n        },\n        disconnectedNodes: {\n            type: Array as () => Array<IDialogNode>,\n            required: true\n        },\n        nodeIds: {\n            type: Array as () => Array<number>,\n            required: true\n        },\n        edgeIds: {\n            type: Array as () => Array<number>,\n            required: true\n        },\n        edgeConditions: {\n            type: Array as () => Array<string>,\n            default: function() {\n                return [];\n            }\n        },\n        edgeScripts: {\n            type: Map,\n            default: function() {\n                return new Map<string,string>();\n            }\n        },\n        edgeActions: {\n            type: Array as () => Array<string>,\n            default: function() {\n                return [];\n            }\n        }\n    },\n    mounted: function() {\n        // Populate static comboboxes\n        for(let condition of Resource.listEventStateConditions()) {\n            this.edgeConditions.push(condition);\n        }\n        for(let script of Resource.listScriptClasses()) {\n            this.edgeScripts.set(script[0], script[1]);\n        }\n        if(this.node.edges !== undefined) {\n            for(let edge of this.node.edges) {\n                // Reload edge actions\n                loadEdgeScriptActions(edge);\n            }\n        }\n    },\n\n    updated: function() {\n        let edges = <HTMLSelectElement[]> this.$refs.edges;\n        if(edges !== undefined && edges[0].options !== undefined) {\n            // Reset at the first option (the empty one)\n            edges[0].options[0].selected = true;\n        }\n        let nodes = <HTMLSelectElement[]> this.$refs.nodes;\n        if(nodes !== undefined && edges !== undefined) {\n            for(let edge of edges) {\n                // Reset at the first option (the empty one)\n                if(edge.options !== undefined) {\n                    edge.options[0].selected = true;\n                }\n            }\n        }\n        // Focus node message, or last edge message\n        if(this.node !== undefined) {\n            if(Utils.isEmpty(this.node.edges)) {\n                if(this.$refs.dialogNodeMessage != undefined) {\n                    (<HTMLElement> this.$refs.dialogNodeMessage).focus();\n                }\n            } else {\n                if(this.node.edges![this.node.edges!.length - 1].message === undefined) {\n                    let lastEdge = this.$refs.dialogEdgeMessage[this.node.edges!.length - 1];\n                    lastEdge.focus();\n                }\n            }\n        }\n    },\n    methods: {\n        addEdge() {\n            if(this.node.edgeIds === undefined) {\n                Vue.set(this.node, "edgeIds", []);\n            }\n            if(this.node.edges === undefined) {\n                Vue.set(this.node, "edges", []);\n            }\n            let edgeId = getNextId(this.edgeIds);\n            this.node.edgeIds!.push(edgeId);\n            this.node.edges!.push(DataDefaults.getDialogEdge(edgeId));\n            this.edgeIds.push(edgeId);\n        },\n        deleteEdge(edge: IDialogEdge) {\n            this.node.edgeIds!.splice(this.node.edgeIds!.indexOf(edge.id), 1);\n            this.node.edges!.splice(this.node.edges!.indexOf(edge), 1);\n        },\n        addNode(edge: IDialogEdge) {\n            let nodeId = getNextId(this.nodeIds);\n            Vue.set(edge, "nodeId", nodeId);\n            Vue.set(edge, "node", DataDefaults.getDialogNode(nodeId));\n            this.nodeIds.push(nodeId);\n            // When creating a new node, immediately select it\n            MapperPage.loadDialogEditor(nodeId);\n        },\n        deleteNode(edge: IDialogEdge) {\n            // Back it up, so that it can be selected\n            // even if it it disconnected from the tree\n            this.disconnectedNodes.push(edge.node!);\n            Vue.set(edge, "nodeId", undefined);\n            Vue.set(edge, "node", undefined);\n        },\n        onEdgeChange(event: Event) {\n            let edgeId = parseInt((<HTMLSelectElement> event.target).selectedOptions.item(0)!.value);\n            if(this.node.edgeIds === undefined) {\n                Vue.set(this.node, "edgeIds", []);\n            } else if(this.node.edgeIds.includes(edgeId)) {\n                // Edge already connected, cannot duplicate it\n                return;\n            }\n            if(this.node.edges === undefined) {\n                Vue.set(this.node, "edges", []);\n            }\n            let edge = DialogManager.search(this.dialog, edgeId, true);\n            if(edge !== undefined) {\n                this.node.edgeIds!.push(edgeId);\n                this.node.edges!.push(<IDialogEdge> edge);\n            }\n        },\n        onNodeChange(event: Event, edge: IDialogEdge) {\n            let isNodeReferenced = true;\n            let nodeId = parseInt((<HTMLSelectElement> event.target).selectedOptions.item(0)!.value);\n            // Search it in the dialog tree\n            let node = DialogManager.search(this.dialog, nodeId, false);\n            if(node === undefined) {\n                // Search it in the disconnected nodes\n                for(let disconnectedNode of this.disconnectedNodes) {\n                    if(disconnectedNode.id === nodeId) {\n                        node = disconnectedNode;\n                        isNodeReferenced = false;\n                    }\n                }\n            }\n            if(node !== undefined) {\n                Vue.set(edge, "nodeReferenced", isNodeReferenced);\n                Vue.set(edge, "nodeId", nodeId);\n                Vue.set(edge, "node", <IDialogNode> node);\n            }\n        },\n        onScriptChange(event: Event, edge: IDialogEdge) {\n            loadEdgeScriptActions(edge);\n        }\n    }\n})\n\nfunction getNextId(ids: number[]): number {\n    let maxId = DataDefaults.DEFAULT_ID;\n    for(let id of ids) {\n        if(id > maxId) {\n            maxId = id;\n        }\n    }\n    return maxId + 1;\n}\n\nfunction loadEdgeScriptActions(edge: IDialogEdge): void {\n    if(edge.script !== undefined) {\n        Vue.set(edge, "actions", []);\n        for(let action of Resource.listScriptActions(edge.script)) {\n            edge.actions!.push(action);\n        }\n    }\n}\n<\/script>\n\n<style scoped>\n.dialogNodeDetails{\n    text-align: left;\n    padding: 0.5em;\n}\n.dialogEdgeDetails{\n    text-align: left;\n\tborder: 1px dotted black;\n    margin: 0.5em;\n    padding: 0.5em;\n}\n.elementId {\n    float: right;\n    font-size: smaller;\n\tcolor: rgb(80, 80, 80);\n}\n.dialogSelectionDetails{\n\tborder: 1px dotted black;\n\tmargin: 0.5em;\n}\n.dialogMessage{\n\tfloat: left;\n\tborder: 10px solid black;\n\tmargin: 0.5em;\n}\n.message{\n    width: 21em;\n    height: 3em;\n    font-family: Oldenburg, Verdana, Geneva, Arial, Helvetica, sans-serif;\n    font-display: swap;\n    font-size: medium;\n    resize: vertical;\n}\n.nodeClosingTimeout{\n    width: 6em;\n}\n</style>'],
    sourceRoot: ""
  }]), t["default"] = o;
},, function (e, t, n) {
  "use strict";

  n.r(t), n.d(t, "Constant", function () {
    return _.a;
  }), n.d(t, "Mapper", function () {
    return D;
  }), n.d(t, "MapperPage", function () {
    return B;
  });

  var i = n(8),
      o = function o() {
    var e = this,
        t = e.$createElement,
        n = e._self._c || t;
    return n("div", {
      "class": [e.selectedNodeId.id === e.node.id ? "selectedNode" : "unselectedNode"]
    }, [n("div", {
      staticClass: "dialogSummaryRow",
      attrs: {
        onclick: "L4W_mapper.MapperPage.loadDialogEditor(" + e.node.id + ")"
      }
    }, [n("a", {
      attrs: {
        name: e.node.id
      }
    }), e._v("\n        " + e._s(e._f("str_limit")(e.node.message)) + " "), n("div", {
      staticClass: "elementId"
    }, [e._v("N" + e._s(e.node.id))])]), e._v(" "), n("ul", e._l(e.node.edges, function (t) {
      return n("li", {
        key: t.id
      }, [n("div", {
        staticClass: "dialogSummaryRow",
        attrs: {
          onclick: "L4W_mapper.MapperPage.loadDialogEditor(" + e.node.id + ")"
        }
      }, [n("div", {
        staticClass: "edge"
      }, [e._v(e._s(e._f("str_limit")(t.message)))]), e._v(" "), n("div", {
        staticClass: "elementId"
      }, [e._v("E" + e._s(t.id))])]), e._v(" "), void 0 !== t.node ? n("div", {
        staticClass: "dialogSummarySubnode"
      }, [t.nodeReferenced ? n("div", [n("div", {
        staticClass: "dialogSummaryRow unselectedNode",
        attrs: {
          onclick: "L4W_mapper.MapperPage.loadDialogEditor(" + t.node.id + ")"
        }
      }, [e._v("\n                        " + e._s(e._f("str_limit")(t.node.message)) + " "), n("div", {
        staticClass: "elementId"
      }, [n("a", {
        attrs: {
          href: "#" + t.node.id
        }
      }, [e._v("(N" + e._s(t.node.id) + ")")])])]), e._v(" "), n("div", {
        staticClass: "jumpElement"
      })]) : n("div", [n("dialog-summary", {
        attrs: {
          node: t.node,
          "selected-node-id": e.selectedNodeId
        }
      })], 1)]) : e._e()]);
    }), 0), e._v(" "), n("div", {
      staticClass: "endElement"
    })]);
  };

  o._withStripped = !0;
  var r = i.a.extend({
    name: "dialog-summary",
    props: {
      node: {
        type: Object,
        required: !0
      },
      selectedNodeId: {
        type: Object,
        required: !0
      }
    }
  });
  i.a.filter("str_limit", function (e, t) {
    return void 0 === e ? "" : (void 0 === t && (t = 45), (e = e.toString()).length <= t ? e : e.substr(0, t) + "...");
  });
  var a = r,
      s = (n(44), n(22)),
      l = Object(s.a)(a, o, [], !1, null, "06f2eb40", null);
  l.options.__file = "src/client/components/DialogSummary.vue";

  var c = l.exports,
      d = function d() {
    var e = this,
        t = e.$createElement,
        n = e._self._c || t;
    return n("div", [n("div", [n("div", {
      staticClass: "dialogNodeDetails"
    }, [n("div", {
      staticClass: "elementId"
    }, [e._v("N" + e._s(e.node.id))]), e._v(" "), n("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: e.node.message,
        expression: "node.message"
      }],
      ref: "dialogNodeMessage",
      staticClass: "message",
      attrs: {
        type: "text",
        placeholder: "<message>"
      },
      domProps: {
        value: e.node.message
      },
      on: {
        input: function input(t) {
          t.target.composing || e.$set(e.node, "message", t.target.value);
        }
      }
    }), n("br"), e._v(" "), e._v("\n                Autoclose in "), n("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: e.node.closingTimeout,
        expression: "node.closingTimeout"
      }],
      ref: "nodeClosingTimeout",
      attrs: {
        type: "number",
        min: "0",
        max: "10000",
        step: "1"
      },
      domProps: {
        value: e.node.closingTimeout
      },
      on: {
        input: function input(t) {
          t.target.composing || e.$set(e.node, "closingTimeout", t.target.value);
        }
      }
    }), e._v(" msec"), n("br"), e._v(" "), n("br"), e._v(" "), n("div", {
      staticStyle: {
        "float": "none"
      }
    }), e._v(" "), n("button", {
      on: {
        click: function click(t) {
          return e.addEdge();
        }
      }
    }, [e._v("Create new edge")]), e._v(" "), n("br")]), e._v(" "), e._l(e.node.edges, function (t) {
      return n("div", {
        key: t.id,
        staticClass: "dialogEdgeDetails"
      }, [n("div", {
        staticClass: "elementId"
      }, [e._v("E" + e._s(t.id))]), e._v(" "), n("textarea", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: t.message,
          expression: "edge.message"
        }],
        ref: "dialogEdgeMessage",
        refInFor: !0,
        staticClass: "message",
        attrs: {
          type: "text",
          placeholder: "<message>"
        },
        domProps: {
          value: t.message
        },
        on: {
          input: function input(n) {
            n.target.composing || e.$set(t, "message", n.target.value);
          }
        }
      }), n("br"), e._v("\n\n                Condition "), n("select", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: t.condition,
          expression: "edge.condition"
        }],
        ref: "edgeCondition",
        refInFor: !0,
        on: {
          change: function change(n) {
            var i = Array.prototype.filter.call(n.target.options, function (e) {
              return e.selected;
            }).map(function (e) {
              return "_value" in e ? e._value : e.value;
            });
            e.$set(t, "condition", n.target.multiple ? i : i[0]);
          }
        }
      }, e._l(e.edgeConditions, function (t) {
        return n("option", {
          key: t,
          domProps: {
            value: t
          }
        }, [e._v("\n                        " + e._s(t) + "\n                    ")]);
      }), 0), n("br"), e._v(" "), t.condition ? n("div", [e._v("Cond. param: "), n("input", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: t.conditionParams,
          expression: "edge.conditionParams"
        }],
        staticClass: "edgeConditionParameters",
        attrs: {
          type: "text"
        },
        domProps: {
          value: t.conditionParams
        },
        on: {
          input: function input(n) {
            n.target.composing || e.$set(t, "conditionParams", n.target.value);
          }
        }
      }), n("br")]) : e._e(), e._v("\n\n                Script "), n("select", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: t.script,
          expression: "edge.script"
        }],
        ref: "edgeScript",
        refInFor: !0,
        on: {
          change: [function (n) {
            var i = Array.prototype.filter.call(n.target.options, function (e) {
              return e.selected;
            }).map(function (e) {
              return "_value" in e ? e._value : e.value;
            });
            e.$set(t, "script", n.target.multiple ? i : i[0]);
          }, function (n) {
            return e.onScriptChange(n, t);
          }]
        }
      }, e._l(e.edgeScripts, function (t) {
        return n("option", {
          key: t[0],
          domProps: {
            value: t[0]
          }
        }, [e._v("\n                        " + e._s(t[0] + " (" + t[1] + ")") + "\n                    ")]);
      }), 0), n("br"), e._v(" "), void 0 !== t.script ? n("div", [e._v("\n                    Action "), n("select", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: t.action,
          expression: "edge.action"
        }],
        ref: "edgeAction",
        refInFor: !0,
        on: {
          change: function change(n) {
            var i = Array.prototype.filter.call(n.target.options, function (e) {
              return e.selected;
            }).map(function (e) {
              return "_value" in e ? e._value : e.value;
            });
            e.$set(t, "action", n.target.multiple ? i : i[0]);
          }
        }
      }, e._l(t.actions, function (t) {
        return n("option", {
          key: t,
          domProps: {
            value: t
          }
        }, [e._v("\n                            " + e._s(t) + "\n                        ")]);
      }), 0)]) : e._e(), e._v(" "), n("div", {
        staticStyle: {
          "float": "none"
        }
      }), e._v(" "), n("button", {
        staticStyle: {
          color: "red",
          "float": "right"
        },
        attrs: {
          title: "Remove this edge (if disconnected, will be deleted when saving)"
        },
        on: {
          click: function click(n) {
            return e.deleteEdge(t);
          }
        }
      }, [e._v("Remove")]), e._v(" "), n("br"), e._v(" "), n("br"), e._v("\n                Connect to "), n("select", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: t.nodeId,
          expression: "edge.nodeId"
        }],
        ref: "nodes",
        refInFor: !0,
        on: {
          change: [function (n) {
            var i = Array.prototype.filter.call(n.target.options, function (e) {
              return e.selected;
            }).map(function (e) {
              return "_value" in e ? e._value : e.value;
            });
            e.$set(t, "nodeId", n.target.multiple ? i : i[0]);
          }, function (n) {
            return e.onNodeChange(n, t);
          }]
        }
      }, [n("option", {
        attrs: {
          selected: "",
          disabled: "",
          value: ""
        }
      }, [e._v(" ")]), e._v(" "), e._l(e.nodeIds, function (t) {
        return n("option", {
          key: t,
          domProps: {
            value: t
          }
        }, [e._v("\n                        " + e._s(t) + "\n                    ")]);
      })], 2), e._v(" "), void 0 === t.nodeId ? n("span", [e._v(" or "), n("button", {
        on: {
          click: function click(n) {
            return e.addNode(t);
          }
        }
      }, [e._v("Create new node")])]) : n("span", [e._v(" or "), n("button", {
        staticStyle: {
          color: "red"
        },
        attrs: {
          title: "Remove this node (if disconnected, will be deleted when saving)"
        },
        on: {
          click: function click(n) {
            return e.deleteNode(t);
          }
        }
      }, [e._v("Remove node")])])]);
    })], 2)]);
  };

  d._withStripped = !0;
  var u = n(6),
      f = n(5),
      p = n(0),
      h = n(15);

  function g(e) {
    var t = f.a.DEFAULT_ID;

    var _iterator28 = _createForOfIteratorHelper(e),
        _step28;

    try {
      for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
        var _n23 = _step28.value;
        _n23 > t && (t = _n23);
      }
    } catch (err) {
      _iterator28.e(err);
    } finally {
      _iterator28.f();
    }

    return t + 1;
  }

  function m(e) {
    if (void 0 !== e.script) {
      i.a.set(e, "actions", []);

      var _iterator29 = _createForOfIteratorHelper(u.a.listScriptActions(e.script)),
          _step29;

      try {
        for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
          var _t30 = _step29.value;
          e.actions.push(_t30);
        }
      } catch (err) {
        _iterator29.e(err);
      } finally {
        _iterator29.f();
      }
    }
  }

  var v = i.a.extend({
    name: "dialog-editor",
    props: {
      node: {
        type: Object,
        required: !0
      },
      dialog: {
        type: Object,
        required: !0
      },
      disconnectedNodes: {
        type: Array,
        required: !0
      },
      nodeIds: {
        type: Array,
        required: !0
      },
      edgeIds: {
        type: Array,
        required: !0
      },
      edgeConditions: {
        type: Array,
        "default": function _default() {
          return [];
        }
      },
      edgeScripts: {
        type: Map,
        "default": function _default() {
          return new Map();
        }
      },
      edgeActions: {
        type: Array,
        "default": function _default() {
          return [];
        }
      }
    },
    mounted: function mounted() {
      var _iterator30 = _createForOfIteratorHelper(u.a.listEventStateConditions()),
          _step30;

      try {
        for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
          var _e44 = _step30.value;
          this.edgeConditions.push(_e44);
        }
      } catch (err) {
        _iterator30.e(err);
      } finally {
        _iterator30.f();
      }

      var _iterator31 = _createForOfIteratorHelper(u.a.listScriptClasses()),
          _step31;

      try {
        for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
          var _e45 = _step31.value;
          this.edgeScripts.set(_e45[0], _e45[1]);
        }
      } catch (err) {
        _iterator31.e(err);
      } finally {
        _iterator31.f();
      }

      if (void 0 !== this.node.edges) {
        var _iterator32 = _createForOfIteratorHelper(this.node.edges),
            _step32;

        try {
          for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
            var _e43 = _step32.value;
            m(_e43);
          }
        } catch (err) {
          _iterator32.e(err);
        } finally {
          _iterator32.f();
        }
      }
    },
    updated: function updated() {
      var e = this.$refs.edges;

      if (void 0 !== e && void 0 !== e[0].options && (e[0].options[0].selected = !0), void 0 !== this.$refs.nodes && void 0 !== e) {
        var _iterator33 = _createForOfIteratorHelper(e),
            _step33;

        try {
          for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {
            var _t31 = _step33.value;
            void 0 !== _t31.options && (_t31.options[0].selected = !0);
          }
        } catch (err) {
          _iterator33.e(err);
        } finally {
          _iterator33.f();
        }
      }

      if (void 0 !== this.node) if (p.a.isEmpty(this.node.edges)) null != this.$refs.dialogNodeMessage && this.$refs.dialogNodeMessage.focus();else if (void 0 === this.node.edges[this.node.edges.length - 1].message) {
        this.$refs.dialogEdgeMessage[this.node.edges.length - 1].focus();
      }
    },
    methods: {
      addEdge: function addEdge() {
        void 0 === this.node.edgeIds && i.a.set(this.node, "edgeIds", []), void 0 === this.node.edges && i.a.set(this.node, "edges", []);
        var e = g(this.edgeIds);
        this.node.edgeIds.push(e), this.node.edges.push(f.a.getDialogEdge(e)), this.edgeIds.push(e);
      },
      deleteEdge: function deleteEdge(e) {
        this.node.edgeIds.splice(this.node.edgeIds.indexOf(e.id), 1), this.node.edges.splice(this.node.edges.indexOf(e), 1);
      },
      addNode: function addNode(e) {
        var t = g(this.nodeIds);
        i.a.set(e, "nodeId", t), i.a.set(e, "node", f.a.getDialogNode(t)), this.nodeIds.push(t), B.loadDialogEditor(t);
      },
      deleteNode: function deleteNode(e) {
        this.disconnectedNodes.push(e.node), i.a.set(e, "nodeId", void 0), i.a.set(e, "node", void 0);
      },
      onEdgeChange: function onEdgeChange(e) {
        var t = parseInt(e.target.selectedOptions.item(0).value);
        if (void 0 === this.node.edgeIds) i.a.set(this.node, "edgeIds", []);else if (this.node.edgeIds.includes(t)) return;
        void 0 === this.node.edges && i.a.set(this.node, "edges", []);
        var n = h.a.search(this.dialog, t, !0);
        void 0 !== n && (this.node.edgeIds.push(t), this.node.edges.push(n));
      },
      onNodeChange: function onNodeChange(e, t) {
        var n = !0,
            o = parseInt(e.target.selectedOptions.item(0).value),
            r = h.a.search(this.dialog, o, !1);

        if (void 0 === r) {
          var _iterator34 = _createForOfIteratorHelper(this.disconnectedNodes),
              _step34;

          try {
            for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
              var _e46 = _step34.value;
              _e46.id === o && (r = _e46, n = !1);
            }
          } catch (err) {
            _iterator34.e(err);
          } finally {
            _iterator34.f();
          }
        }

        void 0 !== r && (i.a.set(t, "nodeReferenced", n), i.a.set(t, "nodeId", o), i.a.set(t, "node", r));
      },
      onScriptChange: function onScriptChange(e, t) {
        m(t);
      }
    }
  }),
      y = (n(46), Object(s.a)(v, d, [], !1, null, "73ccf623", null));
  y.options.__file = "src/client/components/DialogEditor.vue";

  var A = y.exports,
      b = n(29),
      E = n(26),
      _ = n(1),
      C = n(2),
      w = n(12),
      S = n(9),
      I = n(38);

  var T = /*#__PURE__*/function (_I$a) {
    _inherits(T, _I$a);

    var _super8 = _createSuper(T);

    function T(e, t) {
      var _this4;

      _classCallCheck(this, T);

      _this4 = _super8.call(this, e), _this4.map = f.a.getEmptyMap("tilePicker"), t(_assertThisInitialized(_this4));
      return _this4;
    }

    _createClass(T, [{
      key: "setMapper",
      value: function setMapper(e) {
        this.mapper = e;
      }
    }, {
      key: "select",
      value: function select(e, t) {
        p.a.isEmpty(this.mapper) || this.mapper.cleanSelection(), _get(_getPrototypeOf(T.prototype), "select", this).call(this, e, t);
      }
    }]);

    return T;
  }(I.a);

  var k,
      x = n(37),
      M = n(23),
      N = n(3);
  !function (e) {
    var t;
    e.start = function (e, n) {
      void 0 !== t ? n(t) : new x.a(e, function (i) {
        new T(i, function (o) {
          t = o, function (e, n) {
            var i = new Map();
            w.a.init(e, n, i, S.b, S.b, function (e, n, i, o, r) {
              (p.a.isEmpty(r) || r === w.a.MouseButtons.LEFT) && t.select(e, n);
            }, function (e, n, i) {
              (p.a.isEmpty(i) || i === w.a.MouseButtons.LEFT) && t.selectEnd(e, n);
            }, function (e, n, i) {
              t.requestedNewFrame = !0, (p.a.isEmpty(i) || i === w.a.MouseButtons.LEFT) && t.selectEnd(e, n), t.updatePointer(e, n);
            }, function (e, n) {
              t.updatePointer(e, n);
            }, S.b, S.b, S.b, function (e, n) {
              t.cleanSelection();
            }, S.b, S.b);
          }(e, i), t.start(e), n(t);
        });
      }, M.b.tilePicker);
    }, e.loadTile = function (t, n) {
      var i = document.getElementById("canvasTile"),
          o = i.getContext("2d"),
          r = document.getElementById("canvasSelector");
      o.clearRect(0, 0, i.width, i.height), u.a.load(t, N.a.TILE, function (t) {
        var a = new Image();
        a.src = t.src, document.getElementById("tilePanel").style.height = a.naturalHeight + "", i.height = a.naturalHeight, i.width = a.naturalWidth, r.height = a.naturalHeight, r.width = a.naturalWidth, o.drawImage(t, 0, 0), e.start(r, n);
      });
    }, e.saveData = function (e) {
      var t = $("#mapPanel").jstree(!0).get_json("#", {
        flat: !1,
        no_state: !0,
        no_id: !1,
        no_children: !1,
        no_data: !1
      });
      u.a.sendPOSTRequest("/edit/" + N.a.TREE + "/maps", JSON.stringify(t), function (t) {
        e(void 0 !== t, t);
      });
    }, e.setMapper = function (e) {
      t.setMapper(e);
    };
  }(k || (k = {}));
  var D,
      O = n(7),
      L = n(10),
      R = n(36);

  var P = /*#__PURE__*/function (_R$a) {
    _inherits(P, _R$a);

    var _super9 = _createSuper(P);

    function P(e, t) {
      var _this5;

      _classCallCheck(this, P);

      _this5 = _super9.call(this, e), _this5.activeLayer = _.a.MapLayer.MID, document.getElementById(B.BUTTON_ID_LAYER + _this5.activeLayer).disabled = !0, t(_assertThisInitialized(_this5));
      return _this5;
    }

    _createClass(P, [{
      key: "renderPointer",
      value: function renderPointer() {
        if (void 0 !== this.pointer) {
          var _e47 = this.getSelectionArea();

          void 0 === _e47 ? _get(_getPrototypeOf(P.prototype), "renderPointer", this).call(this) : (this.context.save(), this.context.globalAlpha = .4, this.context.fillStyle = _.a.Color.GREY, this.context.fillRect(this.pointer.i * this.grid.cellW, this.pointer.j * this.grid.cellH, (_e47.w + 1) * this.grid.cellW, (_e47.h + 1) * this.grid.cellH), this.context.restore());
        }
      }
    }, {
      key: "mainGameLoop_pre",
      value: function mainGameLoop_pre() {
        return !!_get(_getPrototypeOf(P.prototype), "mainGameLoop_pre", this).call(this);
      }
    }, {
      key: "getRedrawArea",
      value: function getRedrawArea(e) {
        var t;
        return void 0 !== this.tilePicker && (t = this.tilePicker.getSelectionArea()), _get(_getPrototypeOf(P.prototype), "getRedrawArea", this).call(this, e, t);
      }
    }, {
      key: "getSceneHeight",
      value: function getSceneHeight() {
        return this.map.height;
      }
    }, {
      key: "getSceneWidth",
      value: function getSceneWidth() {
        return this.map.width;
      }
    }, {
      key: "select",
      value: function select(e, t) {
        _get(_getPrototypeOf(P.prototype), "select", this).call(this, e, t);
      }
    }, {
      key: "apply",
      value: function apply(e, t) {
        var n = !1,
            i = this.tilePicker.getSelectionArea(),
            o = e + t * this.map.width;

        switch (p.a.isEmpty(this.map.layers[this.activeLayer].data) && (this.map.layers[this.activeLayer].data = []), this.editMode) {
          case _.a.EditMode.APPLY:
            if (void 0 === i) return !1;

            var _r10 = Math.floor(this.map.tileset.imageWidth / this.grid.cellW),
                _a8 = i.x + i.y * _r10;

            for (var _t32 = 0; _t32 <= i.h; _t32++) {
              for (var _s2 = 0; _s2 <= i.w; _s2++) {
                if (e + _s2 < this.map.width) {
                  var _e48 = _s2 + _t32 * _r10,
                      _i17 = _s2 + _t32 * this.map.width;

                  this.map.layers[this.activeLayer].data[o + _i17] !== _a8 + _e48 && (n = !0, this.map.layers[this.activeLayer].data[o + _i17] = _a8 + _e48);
                }
              }
            }

            break;

          case _.a.EditMode.ERASE:
            void 0 === i && (i = {
              x: 0,
              y: 0,
              w: 0,
              h: 0
            });

            for (var _t33 = 0; _t33 <= i.h; _t33++) {
              for (var _r11 = 0; _r11 <= i.w; _r11++) {
                if (e + _r11 < this.map.width) {
                  var _e49 = _r11 + _t33 * this.map.width;

                  void 0 !== this.map.layers[this.activeLayer].data[o + _e49] && (n = !0, this.map.layers[this.activeLayer].data[o + _e49] = void 0);
                }
              }
            }

            break;

          case _.a.EditMode.EVENTS:
            this.selectEvent(e, t) && (this.renderingConfiguration.selectEventCell = {
              i: e,
              j: t
            });
            break;

          default:
            console.error("Unexpected case");
        }

        return n;
      }
    }, {
      key: "selectEvent",
      value: function selectEvent(e, t) {
        var n;
        if (!B.confirmCloseEventDetails()) return !1;

        if (!p.a.isEmpty(this.map.events)) {
          var _iterator35 = _createForOfIteratorHelper(this.map.events),
              _step35;

          try {
            for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
              var _i18 = _step35.value;

              if (_i18.i === e && _i18.j === t) {
                n = _i18;
                break;
              }
            }
          } catch (err) {
            _iterator35.e(err);
          } finally {
            _iterator35.f();
          }
        }

        return void 0 === n && (n = f.a.getEvent(), n.i = e, n.j = t), B.loadEvent(n, !1), !0;
      }
    }, {
      key: "getSelectionArea",
      value: function getSelectionArea() {
        return p.a.isEmpty(this.tilePicker) ? void 0 : this.tilePicker.getSelectionArea();
      }
    }, {
      key: "renderDynamicElements",
      value: function renderDynamicElements(e, t, n, i, o, r, a) {
        if (!p.a.isEmpty(this.map.events)) {
          var _iterator36 = _createForOfIteratorHelper(this.map.events),
              _step36;

          try {
            for (_iterator36.s(); !(_step36 = _iterator36.n()).done;) {
              var _e50 = _step36.value;

              try {
                O.a.render(this.grid, _e50, this.context, !1);
              } catch (e) {
                console.error(e);
              }
            }
          } catch (err) {
            _iterator36.e(err);
          } finally {
            _iterator36.f();
          }
        }
      }
    }, {
      key: "applyLayerCustomizations",
      value: function applyLayerCustomizations(e) {
        e > this.activeLayer ? this.context.globalAlpha = P.UPPER_LEVEL_OPACITY : e < this.activeLayer && (this.context.globalAlpha = P.LOWER_LEVEL_OPACITY);
      }
    }, {
      key: "removeLayerCustomizations",
      value: function removeLayerCustomizations(e) {
        this.context.globalAlpha = 1;
      }
    }, {
      key: "resizeMap",
      value: function resizeMap(e, t) {
        L.a.resizeMap(this.map, e, t), this.grid.updateSize(e, t);
      }
    }, {
      key: "changeMap",
      value: function changeMap(e, t) {
        if (this.editMode === _.a.EditMode.EVENTS && !B.confirmCloseEventDetails()) return !1;
        var n = this;
        return _get(_getPrototypeOf(P.prototype), "changeMap", this).call(this, e, function (i) {
          t(i), n.resizeMap(e.height, e.width), P.onMapSizeChange(n);
        }), !0;
      }
    }, {
      key: "setTilePicker",
      value: function setTilePicker(e) {
        this.tilePicker = e;
      }
    }, {
      key: "setActiveLayer",
      value: function setActiveLayer(e) {
        this.activeLayer = e, this.requestedNewFrame = !0;
      }
    }, {
      key: "setSelectedEventCell",
      value: function setSelectedEventCell(e) {
        this.renderingConfiguration.selectEventCell = e;
      }
    }, {
      key: "setEditMode",
      value: function setEditMode(e) {
        this.editMode = e, this.requestedNewFrame = !0;
      }
    }, {
      key: "getMap",
      value: function getMap() {
        return this.map;
      }
    }], [{
      key: "onMapSizeChange",
      value: function onMapSizeChange(e) {
        var t = document.getElementById("zoom");
        e.grid.selectScale(+t.value), e.grid.refreshCanvasSize(), e.changeScale(), e.requestedNewFrame = !0;
      }
    }]);

    return P;
  }(R.a);

  P.LOWER_LEVEL_OPACITY = .8, P.UPPER_LEVEL_OPACITY = .4, function (e) {
    function t(e, t, i, o) {
      L.a.loadMap(i, t, function (t) {
        if (void 0 === t) return console.error("Cannot init mapper, cannot load map: " + i), void o(e);
        e.changeMap(t, function () {
          n(_.a.EditMode.APPLY), o(e);
        });
      });
    }

    function n(t) {
      e.mapper.setEditMode(t);
      var n = t === _.a.EditMode.EVENTS;
      n ? e.mapper.apply(0, 0) : (B.finishEventEditing(), e.mapper.setSelectedEventCell(void 0)), document.getElementById(B.BUTTON_ID_MODE + "0").disabled = !1, document.getElementById(B.BUTTON_ID_MODE + "1").disabled = !1, document.getElementById(B.BUTTON_ID_MODE + "2").disabled = !1, document.getElementById(B.BUTTON_ID_MODE + t).disabled = !0, document.getElementById("layersPanel").hidden = n, document.getElementById("tilePanel").hidden = n, document.getElementById("eventPanel").hidden = !n;
    }

    e.start = function (n, i, o) {
      p.a.isEmpty(e.mapper) ? new x.a(n, function (r) {
        new P(r, function (a) {
          e.mapper = a, function (e, t, n) {
            var i = new Map();
            i[w.a.Keys.F2] = function (e) {
              t.toggleEditorGrid(), e.preventDefault();
            }, i[w.a.Keys.F3] = function (e) {
              t.toggleCellNumbering(), e.preventDefault();
            }, i[w.a.Keys.F4] = function (e) {
              t.toggleFocus(), e.preventDefault();
            }, w.a.init(e, n, i, S.b, S.b, function (e, n, i, o, r) {
              r === w.a.MouseButtons.LEFT ? t.apply(e, n) && B.changeEditState(!0) : t.select(e, n);
            }, function (e, n, i) {
              i === w.a.MouseButtons.LEFT && t.selectEnd(e, n);
            }, function (e, n, i) {
              i === w.a.MouseButtons.LEFT ? t.apply(e, n) && B.changeEditState(!0) : (t.selectEnd(e, n), t.requestedNewFrame = !0), t.updatePointer(e, n);
            }, function (e, n) {
              t.updatePointer(e, n);
            }, S.b, S.b, S.b, function (e, n) {
              t.cleanSelection();
            }, S.b, S.b);
          }(n, a, r), function (e, t, n) {
            document.getElementById("zoom").onchange = function (e) {
              P.onMapSizeChange(t);
            };
          }(0, a), t(a, n, i, function (e, t) {
            o(a), a.start(n);
          });
        });
      }, M.b.mapper) : t(e.mapper, n, i, o);
    }, e.changeTile = function (t, n) {
      e.mapper.togglePause(!0), e.mapper.changeTile(t, function (t) {
        e.mapper.togglePause(!1), e.mapper.requestedNewFrame = !0;
      }), e.mapper.setTilePicker(n);
    }, e.changeSize = function (t, n) {
      e.mapper.resizeMap(t, n), e.mapper.requestedNewFrame = !0;
    }, e.reloadMap = function (t) {
      var n = B.getActiveMap(),
          i = document.getElementById("canvas1");
      L.a.loadMap(n, i, function (n) {
        if (void 0 === n) return void t(!1);
        var i = e.mapper.changeMap(n, function () {
          t(i), B.changeEditState(!1);
        });
      });
    }, e.saveMap = function (t) {
      var n = B.getActiveMap(),
          i = JSON.stringify(e.mapper.getMap());
      u.a.save(n + "", i, N.a.MAP, function (e, n) {
        void 0 !== n ? t(n) : (console.error("Undefined save result"), t(!1));
      });
    }, e.setMode = n, e.changeEventPosition = function (t, n, i) {
      t.i = n, t.j = i, O.a.initTransientData(e.mapper.map, e.mapper.grid, t), e.mapper.renderingConfiguration.selectEventCell = {
        i: n,
        j: i
      };
    }, e.setActiveLayer = function (t) {
      document.getElementById(B.BUTTON_ID_LAYER + "0").disabled = !1, document.getElementById(B.BUTTON_ID_LAYER + "1").disabled = !1, document.getElementById(B.BUTTON_ID_LAYER + "2").disabled = !1, document.getElementById(B.BUTTON_ID_LAYER + t).disabled = !0, e.mapper.setActiveLayer(t);
    }, e.deleteEvent = function (t) {
      if (!p.a.isEmpty(t.id)) for (var _n24 = 0; _n24 < e.mapper.map.events.length; _n24++) {
        var _i19 = e.mapper.map.events[_n24];
        if (t.id === _i19.id) return void e.mapper.map.events.splice(_n24, 1);
      }
    }, e.addEvent = function (t) {
      if (p.a.isEmpty(t.id) || t.id === f.a.DEFAULT_ID) {
        var _n25 = 0;
        void 0 !== e.mapper.map.maxEventId && (_n25 = e.mapper.map.maxEventId + 1), t.id = _n25, e.mapper.map.maxEventId = _n25, e.mapper.map.events.push(t), O.a.initTransientData(e.mapper.map, e.mapper.grid, t);
      }

      B.changeEditState(!0);
    }, e.isCellAvailable = function (t, n, i) {
      var _iterator37 = _createForOfIteratorHelper(e.mapper.map.events),
          _step37;

      try {
        for (_iterator37.s(); !(_step37 = _iterator37.n()).done;) {
          var _o14 = _step37.value;
          if (_o14.i === n && _o14.j === i && _o14 !== t) return !1;
        }
      } catch (err) {
        _iterator37.e(err);
      } finally {
        _iterator37.f();
      }

      return !0;
    };
  }(D || (D = {}));
  var B,
      j = n(11);
  !function (e) {
    e.PAGE_TITLE = document.title, e.BUTTON_ID_MODE = "mode", e.BUTTON_ID_LAYER = "layer";
    var t,
        n,
        o,
        r,
        a,
        s = !1;
    var l = ["Very low", "Low", "Medium-low", "Medium", "Medium-high", "High", "Very high"];

    function d() {}

    function g() {
      return $("#mapPanel").jstree(!0).get_selected(!0)[0];
    }

    function m(t) {
      document.title = t ? e.PAGE_TITLE + "*" : e.PAGE_TITLE, $("#saveButton")[0].disabled = !t, $("#reloadButton")[0].disabled = !t;
      var n = $("#mapPanel").jstree(!0),
          i = n.get_json("#", {
        flat: !0,
        no_state: !0,
        no_id: !1,
        no_children: !1,
        no_data: !0
      });
      $.each(i, function (e, i) {
        t ? n.disable_node(i.id) : n.enable_node(i.id);
      });
    }

    function v() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
      if (void 0 === n) return void console.error("Current event undefined, cannot load its state");
      e && w();
      var i = document.getElementById("state").valueAsNumber;
      p.a.isEmpty(n.states) && (n.states = []), i > n.states.length && (n.states[i - 1] = f.a.getEventState());
      var o = n.states[i - 1];
      t = o, function (e) {
        var t = u.a.listEventStateConditions(),
            n = document.getElementById("condition");
        C.a.resetSelect(n);
        var i = n.options,
            o = 0;

        var _iterator38 = _createForOfIteratorHelper(t),
            _step38;

        try {
          for (_iterator38.s(); !(_step38 = _iterator38.n()).done;) {
            var _r12 = _step38.value;
            i[o] = new Option(_r12), _r12 === e.condition && (n.selectedIndex = o), o++;
          }
        } catch (err) {
          _iterator38.e(err);
        } finally {
          _iterator38.f();
        }
      }(o);
      var r = document.getElementById("trigger"),
          a = r.options;
      0 === a.length && (a[0] = new Option("Click"), a[1] = new Option("Touch"), a[2] = new Option("Over"), a[3] = new Option("(auto)")), void 0 !== o.trigger && p.a.isNumeric(o.trigger) ? r.selectedIndex = o.trigger : r.selectedIndex = 0, y(), document.getElementById("tot").innerText = n.states.length + "", function () {
        var e = document.getElementById("charasets");
        u.a.listResources(N.a.CHAR, function (n) {
          C.a.resetSelect(e);
          var i = e.options;
          if (i[0] = new Option(""), void 0 !== n) for (var _o15 = 0; _o15 < n.length; _o15++) {
            i[_o15 + 1] = new Option(n[_o15]), n[_o15] === t.charaset && (e.selectedIndex = _o15 + 1);
          }
        });
        var n = t.visible;
        void 0 === n && (n = !0);
        document.getElementById("visible").checked = n;
        var i = Number.parseInt(t.opacity + "");
        (p.a.isEmpty(i) || Number.isNaN(i) || i < 0 || i > 100) && (i = 100);
        document.getElementById("opacity").valueAsNumber = i;
        var o = document.getElementById("direction");

        if (0 === o.length) {
          var _e51 = o.options;
          _e51[0] = new Option("Up"), _e51[1] = new Option("Right"), _e51[2] = new Option("Down"), _e51[3] = new Option("Left");
        }

        var r = Number.parseInt(t.direction + "");
        (p.a.isEmpty(r) || Number.isNaN(r) || r < 0 || r > 4) && (r = 2);
        document.getElementById("direction").selectedIndex = r;
        var a = 0,
            s = document.getElementById("speed").options,
            c = document.getElementById("frequency").options;

        if (0 === s.length || 0 === c.length) {
          var _iterator39 = _createForOfIteratorHelper(l),
              _step39;

          try {
            for (_iterator39.s(); !(_step39 = _iterator39.n()).done;) {
              var _e52 = _step39.value;
              s[a] = new Option(_e52), c[a] = new Option(_e52), a++;
            }
          } catch (err) {
            _iterator39.e(err);
          } finally {
            _iterator39.f();
          }
        }

        var d = Number.parseInt(t.speed + "");
        (p.a.isEmpty(d) || Number.isNaN(d) || d < 0 || d > 6) && (d = 3);
        document.getElementById("speed").selectedIndex = d;
        var f = Number.parseInt(t.frequency + "");
        (p.a.isEmpty(f) || Number.isNaN(f) || f < 0 || f > 6) && (f = 3);
        document.getElementById("frequency").selectedIndex = f;
        var h = document.getElementById("rotation").options;
        0 === h.length && (h[0] = new Option("Off"), h[1] = new Option("Clockwise"), h[2] = new Option("Counterclockwise"));
        var g = Number.parseInt(t.rotation + "");
        (p.a.isEmpty(g) || Number.isNaN(g) || g < 0 || g > 2) && (g = 0);
        document.getElementById("rotation").selectedIndex = g;
        var m = document.getElementById("ontop").options;
        0 === m.length && (m[0] = new Option("Off"), m[1] = new Option("Liv. 1"), m[2] = new Option("Liv. 2"), m[3] = new Option("Liv. 3"), m[4] = new Option("Liv. 4"));
        var v = Number.parseInt(t.onTop + "");
        (p.a.isEmpty(v) || Number.isNaN(v) || v < 0 || v > 4) && (v = 0);
        document.getElementById("ontop").selectedIndex = v;
        var y = t.block;
        void 0 === y && (y = !0);
        document.getElementById("block").checked = y;
      }();
    }

    function y() {
      var e = document.getElementById("script").value,
          n = u.a.listScriptActions(e);
      n.push("");
      var i = document.getElementById("action"),
          o = i.options,
          r = 0;
      C.a.resetSelect(i), i.selectedIndex = -1;

      var _iterator40 = _createForOfIteratorHelper(n),
          _step40;

      try {
        for (_iterator40.s(); !(_step40 = _iterator40.n()).done;) {
          var _e53 = _step40.value;
          o[r] = new Option(_e53), _e53 === t.action && (i.selectedIndex = r), r++;
        }
      } catch (err) {
        _iterator40.e(err);
      } finally {
        _iterator40.f();
      }
    }

    function w() {
      t.condition = document.getElementById("condition").value, t.trigger = document.getElementById("trigger").selectedIndex, t.action = document.getElementById("action").value, t.charaset = document.getElementById("charasets").value;
      var e = document.getElementById("visible").checked;
      e && (e = void 0), t.visible = e;
      var n = document.getElementById("opacity").valueAsNumber;
      (p.a.isEmpty(n) || Number.isNaN(n) || n < 0 || n >= 100) && (n = void 0), t.opacity = n;
      var i = document.getElementById("direction").selectedIndex;
      (p.a.isEmpty(i) || i < 0 || i > 3) && (i = void 0), t.direction = i;
      var o = document.getElementById("speed").selectedIndex,
          r = document.getElementById("frequency").selectedIndex;
      (p.a.isEmpty(o) || o < 0 || o > 6 || 3 === o) && (o = void 0), (p.a.isEmpty(r) || r < 0 || r > 6 || 3 === r) && (r = void 0), t.speed = o, t.frequency = r;
      var a = document.getElementById("rotation").selectedIndex;
      (p.a.isEmpty(a) || a <= 0 || a > 2) && (a = void 0), t.rotation = a;
      var s = document.getElementById("ontop").selectedIndex;
      (p.a.isEmpty(s) || s <= 0 || s > 4) && (s = void 0), t.onTop = s;
      var l = document.getElementById("block").checked;
      l && (l = void 0), t.block = l;
    }

    function S(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;

      if (void 0 !== e) {
        if (t) {
          if (!I()) return !1;
        }

        e.currentState = 0;
      } else e = f.a.getEvent();

      n = e, document.getElementById("eventi").style.removeProperty("color"), document.getElementById("eventj").style.removeProperty("color"), T(!1), document.getElementById("name").value = e.name, document.getElementById("eventi").valueAsNumber = e.i, document.getElementById("eventj").valueAsNumber = e.j;
      var i = document.getElementById("script");
      C.a.resetSelect(i);
      var o = u.a.listScriptClasses(),
          r = i.options,
          a = 0;

      var _iterator41 = _createForOfIteratorHelper(o),
          _step41;

      try {
        for (_iterator41.s(); !(_step41 = _iterator41.n()).done;) {
          var _e55 = _step41.value;
          r[a] = new Option(_e55[0]), r[a].title = _e55[1], _e55[0] === n.script && (i.selectedIndex = a), a++;
        }
      } catch (err) {
        _iterator41.e(err);
      } finally {
        _iterator41.f();
      }

      if (document.getElementById("state").valueAsNumber = 1, v(!1), function () {
        document.getElementById("key").value = "", document.getElementById("val").value = "";
        var e = document.getElementById("memory");

        for (; e.hasChildNodes();) {
          e.removeChild(e.lastChild);
        }
      }(), !p.a.isEmpty(n.memory)) for (var _e54 in n.memory) {
        x(_e54, n.memory[_e54]);
      }
      return !0;
    }

    function I() {
      return !s || void 0 === n || confirm("Event details not saved. If you continue, details of the currently selected event will be lost. Are you sure you want to continue?");
    }

    function T() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
      s = e, document.getElementById("saveEvent").disabled = !e, D.mapper.requestedNewFrame = !0;
    }

    function x(e, t) {
      var i = document.getElementById("memory"),
          o = i.rows;

      for (var _n26 = 0; _n26 < o.length; _n26++) {
        if (o[_n26].id === e) {
          return void (i.rows[_n26].cells[1].childNodes[0].value = t);
        }
      }

      var r,
          a,
          s,
          l = document.getElementById("memory").rows.length,
          c = document.getElementById("memory").insertRow(l);
      c.id = e, r = c.insertCell(), a = document.createElement("input"), a.type = "text", a.style.width = "5em", a.disabled = !0, a.value = e, r.appendChild(a), r = c.insertCell(), a = document.createElement("input"), a.type = "text", a.style.width = "8em", a.disabled = !0, a.value = t, r.appendChild(a), r = c.insertCell(), s = document.createElement("button"), s.onclick = function () {
        var t = document.getElementById("memory"),
            i = t.rows;

        for (var _n27 = 0; _n27 < i.length; _n27++) {
          if (i[_n27].id === e) {
            t.deleteRow(_n27);
            break;
          }
        }

        void 0 !== n ? O.a.deleteMem(n, e) : console.error("Current event undefined, cannot delete memory");
      }, s.innerText = "-", r.appendChild(s);
    }

    e.start = function () {
      E.a.check(), function () {
        if (void 0 === r) {
          var _e56 = {
            id: f.a.FIRST_ELEM_ID
          };
          r = new i.a({
            el: "#dialogSummaryVue",
            components: {
              "dialog-summary": c
            },
            data: {
              root: f.a.getDialogNode(),
              selectedNodeId: _e56
            }
          });
        }

        void 0 === a && (a = new i.a({
          el: "#dialogEditorVue",
          components: {
            "dialog-editor": i.a.extend(A)
          },
          data: {
            root: f.a.getDialogNode(),
            dialog: f.a.getDialogNode(),
            disconnectedNodes: [f.a.getDialogNode()],
            nodeIds: new Array(f.a.FIRST_ELEM_ID),
            edgeIds: new Array(f.a.FIRST_ELEM_ID),
            edgeConditions: [],
            edgeScripts: new Map(),
            edgeActions: []
          }
        }));
      }(), new i.a({
        el: "#loginVue",
        components: {
          login: b.a
        }
      });
      var e = {
        core: {
          animation: !1,
          data: {
            url: base_path + "data/" + N.a.TREE + "/maps",
            dataType: "json"
          },
          check_callback: !0,
          error: function error() {
            console.warn("jsTree error on dialogTree");
          },
          multiple: !1
        },
        plugins: ["contextmenu", "dnd", "unique"]
      };
      $("#mapPanel").jstree(e);
      var t = document.getElementById("canvas1");
      $("#mapPanel").on("create_node.jstree ready.jstree rename_node.jstree delete_node.jstree changed.jstree", function (e, n) {
        switch (e.type) {
          case "ready":
            if (void 0 === g()) {
              var _e57 = $("#mapPanel").jstree(!0).get_json("#", {
                flat: !0,
                no_state: !0,
                no_id: !1,
                no_children: !1,
                no_data: !0
              });

              _e57.length > 0 && $("#mapPanel").jstree(!0).select_node(_e57[0]);
            }

            $("#mapPanel").jstree("open_all");
            break;

          case "create_node":
            var _i20 = n.node.id.split("_").pop();

            isNaN(parseInt(_i20)) && (console.info("Cannot generate a sequential numeric id for node: " + n.node.id), _i20 = p.a.getRandomString()), $("#mapPanel").jstree(!0).set_id(n.node, _i20);

          case "rename_node":
          case "delete_node":
            m(!0);
            break;

          case "changed":
            switch (n.action) {
              case "ready":
                break;

              case "delete_node":
                var _e58 = $("#mapPanel").jstree(!0).get_prev_dom(n.node);

                $("#mapPanel").jstree(!0).select_node(_e58);
                break;

              case "model":
              case "select_node":
                $("#mapDetailPanel").show();

                var _i21 = g();

                D.start(t, _i21.id, function (e) {
                  void 0 !== e.map ? ($("#mapSizeW").val(e.map.width + ""), $("#mapSizeH").val(e.map.height + ""), void 0 !== e.map.tileset && document.getElementById("tiles").value !== e.map.tileset.image && ($("#tiles").val(e.map.tileset.image), k.loadTile(e.map.tileset.image, function (t) {
                    e.setTilePicker(t), k.setMapper(e);
                  }))) : console.error("Map is undefined, for id: " + _i21.id);
                });
                break;

              case "deselect_all":
                break;

              default:
                console.error('Unexpected event "changed" action: ' + n.action);
            }

            break;

          default:
            console.error("Unexpected event type: " + e.type);
        }
      }), u.a.loadProperties(function (e) {
        var t = +e.get("cellWidth") * +e.get("tileColumns") + 2;
        $("#toolsPanel").width(t);
      }), $.getJSON(base_path + "assetlist/tile", function (e) {
        var t = document.getElementById("tiles");

        for (var _n28 = 0; _n28 < e.length; _n28++) {
          t.options.add(new Option(e[_n28], e[_n28]));
        }
      });
    }, e.changeSize = function () {
      var e = parseInt($("#mapSizeW").val()),
          t = parseInt($("#mapSizeH").val());
      D.changeSize(t, e), m(!0);
    }, e.loadNews = d, e.changeTile = function () {
      var e = document.getElementById("tiles").value;
      k.loadTile(e, function (t) {
        D.changeTile(e, t);
      }), m(!0);
    }, e.save = function () {
      if (!p.a.isEmpty(n)) {
        if (!I()) return;
      }

      k.saveData(function (t, n) {
        t ? D.saveMap(function (t) {
          t ? e.changeEditState(!1) : console.error("Map save failed");
        }) : console.error("Tilepicker save failed");
      });
    }, e.reload = function () {
      D.reloadMap(function (e) {
        e && $("#mapPanel").jstree(!0).refresh(!0, !1);
      });
    }, e.getActiveMap = function () {
      return g().id;
    }, e.changeEditState = m, e.changeEventPosition = function () {
      if (void 0 === n) return void console.error("Current event undefined, cannot change its position");
      var e = document.getElementById("eventi").valueAsNumber,
          t = document.getElementById("eventj").valueAsNumber;
      D.isCellAvailable(n, e, t) ? (T(), D.changeEventPosition(n, e, t), document.getElementById("eventi").style.removeProperty("color"), document.getElementById("eventj").style.removeProperty("color")) : (T(!1), document.getElementById("eventi").style.color = _.a.Color.RED, document.getElementById("eventj").style.color = _.a.Color.RED);
    }, e.changeEventScript = function () {
      T(), y();
    }, e.deleteEvent = function () {
      void 0 !== n ? (D.deleteEvent(n), T(), S(void 0, !1)) : console.error("Current event undefined, cannot delete it");
    }, e.deleteEventState = function () {
      if (void 0 === n) return void console.error("Current event undefined, cannot delete its state");
      var e = document.getElementById("state").valueAsNumber;
      (e > 1 || 1 === e && n.states.length > 1) && e <= n.states.length && (n.states.splice(e - 1, 1), e > 1 && (document.getElementById("state").valueAsNumber -= 1), T(), v(!1));
    }, e.loadEventState = v, e.loadEvent = S, e.saveEvent = function () {
      if (void 0 !== n) {
        if (n.name = document.getElementById("name").value, n.i = document.getElementById("eventi").valueAsNumber, n.j = document.getElementById("eventj").valueAsNumber, n.script = document.getElementById("script").value, w(), void 0 !== t.dialog) {
          var _e59 = t;
          h.a.saveDialog(t.dialog, r.$data.root, function (n) {
            void 0 !== n ? _e59.dialog = n : console.error("Could not save dialog, returned dialog id is undefined: " + t.dialog);
          });
        }

        D.addEvent(n), e.eventModified(!1);
      }
    }, e.finishEventEditing = function () {
      return !!I() && (n = void 0, T(!1), !0);
    }, e.confirmCloseEventDetails = I, e.eventModified = T, e.addMemory = function () {
      if (void 0 === n) return void console.error("Current event undefined, cannot add to its memory");
      var e = document.getElementById("key").value,
          t = document.getElementById("val").value;
      p.a.isEmpty(e) || p.a.isEmpty(t) || (T(), O.a.saveMem(n, e, t), x(e, t), document.getElementById("key").value = "", document.getElementById("val").value = "");
    }, e.createNode = function () {
      return f.a.getDialogNode();
    }, e.createEdge = function () {
      return f.a.getDialogEdge();
    }, e.toggleDialogEditor = function () {
      var e = document.getElementById("dialogPanel").style;

      if (document.getElementById("toggleDialogEditor").checked) {
        e.display = "block";
        var _n29 = t.dialog;
        if (void 0 === _n29) _n29 = f.a.DEFAULT_ID;else if (_n29 === o) return;
        h.a.loadDialog(_n29, j.a.ui.lang, function (e) {
          void 0 !== e && (r.$data.root = e, t.dialog = _n29, o = _n29);
        });
      } else e.display = "none";
    }, e.loadDialogEditor = function (e) {
      var t = r.$data.root;

      if (a.$data.root = h.a.search(t, e), void 0 === a.$data.dialog || a.$data.dialog.id !== t.id) {
        var _e60 = new Map(),
            _n30 = new Map();

        h.a.deconstructDialogTree(t, _e60, _n30), a.$data.nodeIds = Array.from(_e60.keys()), a.$data.edgeIds = Array.from(_n30.keys());
      }

      a.$data.dialog = t, r.$data.selectedNodeId.id = e;
      var n = document.getElementById("dialogEditPanel");
      null !== n && (n.style.display = "block");
    }, e.listEventStateConditions = function () {
      return u.a.listEventStateConditions();
    };
  }(B || (B = {}));
}]);
