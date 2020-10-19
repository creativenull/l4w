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

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e46) { throw _e46; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e47) { didErr = true; err = _e47; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var L4W_game = function (e) {
  var t = {};

  function n(r) {
    if (t[r]) return t[r].exports;
    var i = t[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
  }

  return n.m = e, n.c = t, n.d = function (e, t, r) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: r
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
    var r = Object.create(null);
    if (n.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var i in e) {
      n.d(r, i, function (t) {
        return e[t];
      }.bind(null, i));
    }
    return r;
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 50);
}([function (e, t, n) {
  "use strict";

  var r;
  n.d(t, "a", function () {
    return r;
  }), function (e) {
    function t(e) {
      return null == e || void 0 === e || ("string" == typeof e ? "" === e : "object" == _typeof(e) && "size" in e ? 0 === e.size : e.constructor === Array || e.constructor === String ? 0 === e.length : e.constructor === Object && 0 === Object.keys(e).length);
    }

    e.isEmpty = t, e.unitTestIsEmpty = function () {
      var e = new Map();
      console.assert(t(e), "empty ES6 map"), e.set("a", "a"), console.assert(!t(e), "not empty ES6 map"), e["delete"]("a"), console.assert(t(e), "empty ES6 map (deleted key)"), e = [], console.assert(t(e), "empty array"), e[0] = 1, console.assert(!t(e), "not empty array"), e = new Array(), console.assert(t(e), "empty Array"), e = e.push("1"), console.assert(!t(e), "not empty Array"), e = "", console.assert(t(e), "empty string"), e = "a", console.assert(!t(e), "not empty string"), e = new Object(), console.assert(t(e), "empty Object"), e.a = 1, console.assert(!t(e), "not empty Object"), delete e.a, console.assert(t(e), "empty Object (deleted property)"), e = {}, console.assert(t(e), "empty {}"), e.a = 1, console.assert(!t(e), "not empty {}"), delete e.a, console.assert(t(e), "empty {} (deleted property)"), console.assert(!t(!0), "not empty boolean (true)"), console.assert(!t(!1), "not empty boolean (false)"), console.assert(!t(0), "not empty number"), console.assert(!t(0), "not empty float");
    }, e.mergeMaps = function (e, t) {
      var n = new Map();

      function r(e, t, r) {
        n.set(t, e);
      }

      return t.forEach(r), e.forEach(r), n;
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
  }(r || (r = {}));
}, function (e, t, n) {
  "use strict";

  var r;
  n.d(t, "a", function () {
    return r;
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

    var r = function r() {
      _classCallCheck(this, r);
    };

    var i, o, a;
    r.JSON = "application/json", e.MimeType = r, e.MEDIUM_MSPEED = .128, e.VERY_LOW_MSPEED = e.MEDIUM_MSPEED * (1 - .9), e.LOW_MSPEED = .5 * e.MEDIUM_MSPEED, e.MEDIUM_LOW_MSPEED = .8 * e.MEDIUM_MSPEED, e.MEDIUM_HIGH_MSPEED = 1.2 * e.MEDIUM_MSPEED, e.HIGH_MSPEED = 1.5 * e.MEDIUM_MSPEED, e.VERY_HIGH_MSPEED = 1.9 * e.MEDIUM_MSPEED, e.MEDIUM_FREQUENCY = .006, e.VERY_LOW_FREQUENCY = e.MEDIUM_FREQUENCY * (1 - .9), e.LOW_FREQUENCY = .5 * e.MEDIUM_FREQUENCY, e.MEDIUM_LOW_FREQUENCY = .8 * e.MEDIUM_FREQUENCY, e.MEDIUM_HIGH_FREQUENCY = 1.2 * e.MEDIUM_FREQUENCY, e.HIGH_FREQUENCY = 1.5 * e.MEDIUM_FREQUENCY, e.VERY_HIGH_FREQUENCY = 1.9 * e.MEDIUM_FREQUENCY, function (e) {
      e[e.LOW = 0] = "LOW", e[e.MID = 1] = "MID", e[e.TOP = 2] = "TOP", e[e.EVENTS = 3] = "EVENTS";
    }(i = e.MapLayer || (e.MapLayer = {})), function (e) {
      e[e.APPLY = 0] = "APPLY", e[e.ERASE = 1] = "ERASE", e[e.EVENTS = 2] = "EVENTS";
    }(o = e.EditMode || (e.EditMode = {})), function (e) {
      e[e.BLOCKS = 0] = "BLOCKS", e[e.ONTOP = 1] = "ONTOP";
    }(a = e.TileEditMode || (e.TileEditMode = {}));
  }(r || (r = {}));
}, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return r;
  });
  var r,
      i = n(4),
      o = n(0);
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

    function r(e, t) {
      return (e & t) === t && t !== i.a.NONE;
    }

    function a(e, t) {
      var n = i.a.NONE;

      switch (t) {
        case 0:
          n = i.a.UP;
          break;

        case 2:
          n = i.a.DOWN;
          break;

        case 3:
          n = i.a.LEFT;
          break;

        case 1:
          n = i.a.RIGHT;
      }

      return r(e, n);
    }

    function s(e, t, n, r) {
      var o = i.a.NONE;
      return n && void 0 !== e.blocks && t < e.blocks.length && (o |= e.blocks[t]), r && void 0 !== e.dynamicBlocks && t < e.dynamicBlocks.length && (o |= e.dynamicBlocks[t]), o;
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
      var n, r, i, o;
      return n = e.x < t.x ? e.x : t.x, r = e.y < t.y ? e.y : t.y, o = e.x + e.w > t.x + t.w ? e.x + e.w - n : t.x + t.w - n, i = e.y + e.h > t.y + t.h ? e.y + e.h - r : t.y + t.h - r, {
        x: n,
        y: r,
        w: o,
        h: i
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
    }, e.cellToGid = t, e.getDirectionTarget = n, e.isBlockDirectionBlocked = r, e.isDirectionEnumBlocked = a, e.isMovementBlocked = function (r, i, o, s) {
      var c = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !1;
      var u;
      u = t({
        i: i,
        j: o
      }, r.width);
      var f,
          d = e.getMapStaticBlock(r, u),
          p = t(n({
        i: i,
        j: o
      }, s), r.width);
      return f = c ? e.getMapStaticBlock(r, p) : e.getMapBlocks(r, p), a(d, s) || a(f, l(s));
    }, e.getBlock = function (e, t, n, r) {
      var o = 0;
      return o |= e ? i.a.UP : 0, o |= t ? i.a.DOWN : 0, o |= n ? i.a.LEFT : 0, o |= r ? i.a.RIGHT : 0, o;
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
          r = e.i - t.i,
          i = e.j - t.j;
      return n = Math.abs(r) > Math.abs(i) ? r > 0 ? 1 : 3 : i > 0 ? 2 : i < 0 ? 0 : 4, n;
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
      return !o.a.isEmpty(e) && !Number.isNaN(e) && e >= 0 && e <= 4 ? e : 0;
    }, e.getDirectionName = c, e.getBlockName = function (e) {
      var t = "free";
      return r(e, i.a.UP) && (t = c(0)), r(e, i.a.DOWN) && (t += c(2)), r(e, i.a.LEFT) && (t += c(3)), r(e, i.a.RIGHT) && (t += c(1)), t;
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
  }(r || (r = {}));
}, function (e, t, n) {
  "use strict";

  var r, i, o;
  n.d(t, "a", function () {
    return o;
  }), function (e) {
    e[e.OK = 200] = "OK", e[e.NO_CONTENT = 204] = "NO_CONTENT", e[e.MOVED_PERMANENTLY = 301] = "MOVED_PERMANENTLY", e[e.NOT_MODIFIED = 304] = "NOT_MODIFIED", e[e.BAD_REQUEST = 400] = "BAD_REQUEST", e[e.FORBIDDEN = 403] = "FORBIDDEN", e[e.NOT_FOUND = 404] = "NOT_FOUND", e[e.REQUEST_TOO_LONG = 413] = "REQUEST_TOO_LONG", e[e.IM_A_TEAPOT = 418] = "IM_A_TEAPOT", e[e.INTERNAL_SERVER_ERROR = 500] = "INTERNAL_SERVER_ERROR", e[e.NOT_IMPLEMENTED = 501] = "NOT_IMPLEMENTED";
  }(r || (r = {})), function (e) {
    e.LOCATION = "Location";
  }(i || (i = {})), function (e) {
    e.CHAR = "charset", e.FACE = "faceset", e.FAVICON = "favicon", e.SKIN = "skin", e.TILE = "tile", e.TILESET = "tileset", e.PICTURE = "picture", e.POINTER = "pointer", e.MAP = "map", e.TREE = "tree", e.STRING = "string", e.DIALOG = "dialog", e.GENERIC_MESSAGE = "generic-message", e.CONFIGURATION = "configuration", e.SAVE = "save";
  }(o || (o = {}));
}, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return r;
  }), n.d(t, "b", function () {
    return i;
  });

  var r = function r() {
    _classCallCheck(this, r);
  };

  var i;
  r.NONE = 0, r.UP = Math.pow(2, 0), r.DOWN = Math.pow(2, 1), r.LEFT = Math.pow(2, 2), r.RIGHT = Math.pow(2, 3), r.ALL = r.UP + r.DOWN + r.LEFT + r.RIGHT, function (e) {
    e.IT = "it", e.EN = "en";
  }(i || (i = {}));
}, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return r;
  });
  var r,
      i = n(11),
      o = n(0);
  !function (e) {
    function t(e) {
      return {
        id: o.a.getRandomString(),
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

    function r() {
      return {
        lang: i.a.ui.lang,
        skin: i.a.ui.skin,
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
      return e.name = i.a.hero.name, e.i = i.a.maps.start.i, e.j = i.a.maps.start.j, e.states = [], e.states[0] = {
        charaset: i.a.hero.charaset,
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
        timestamp: o.a.now(),
        currentMap: i.a.maps.start.map,
        hero: s(),
        maps: [],
        config: r()
      };
    }, e.getConfig = r, e.getEvent = a, e.getHero = s, e.getEventState = function () {
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
  }(r || (r = {}));
}, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return r;
  });
  var r,
      i = n(3),
      o = n(14),
      a = n(13),
      s = n(16),
      l = n(1),
      c = n(0);
  !function (e) {
    var t = base_path + "data/",
        n = base_path + "assets/",
        r = base_path + "assetlist/",
        u = base_path + "edit/";
    var f = new Map();
    var d,
        p = new Map(),
        h = new Map();

    function v(e, t, n) {
      m(l.a.RequestType.GET, void 0, e, t, n);
    }

    function g(e, t, n) {
      m(l.a.RequestType.POST, t, e, n);
    }

    function m(e, t, n, r, i) {
      var o = new XMLHttpRequest();
      o.onload = function (e) {
        r(this.responseText);
      }, o.onerror = function (e) {
        console.error("Error for request to: " + n), console.error(e), r();
      }, o.ontimeout = function () {
        console.error("Timeout for request to: " + n), r();
      }, o.open(e, n, !0);

      try {
        void 0 !== i && o.setRequestHeader("lang", i), c.a.isEmpty(t) || e !== l.a.RequestType.POST ? o.send() : o.send(t);
      } catch (e) {
        "NetworkError" === e.name ? console.error("If you are working locally on Chrome, please launch it with option --allow-file-access-from-files") : (console.error(e), console.trace()), r();
      }
    }

    function y(e, r, o, a) {
      c.a.isEmpty(e) && (console.error("Trying to load empty file!"), console.trace());

      var s = function (e, r) {
        var o;

        switch (r) {
          case i.a.CHAR:
          case i.a.FACE:
          case i.a.SKIN:
          case i.a.PICTURE:
          case i.a.TILE:
            o = n;
            break;

          case i.a.MAP:
          case i.a.SAVE:
          case i.a.STRING:
          case i.a.DIALOG:
          case i.a.GENERIC_MESSAGE:
          case i.a.TILESET:
            o = t;
            break;

          default:
            console.error("Unexpected resource type"), console.trace();
        }

        return o + r + "/" + e;
      }(e, r);

      if (void 0 === s) return console.error("Error while loading file: " + e + "/" + r), void o();

      switch (r) {
        case i.a.CHAR:
        case i.a.FACE:
        case i.a.SKIN:
        case i.a.TILE:
        case i.a.PICTURE:
          var _t3 = new Image();

          _t3.onload = function () {
            f.set(r + "@" + e, _t3), o(_t3);
          }, _t3.src = s;
          break;

        case i.a.MAP:
        case i.a.SAVE:
        case i.a.STRING:
        case i.a.DIALOG:
        case i.a.GENERIC_MESSAGE:
        case i.a.TILESET:
          v(s, o, a);
          break;

        default:
          console.error("Unexpected resource type"), console.trace(), o(void 0);
      }
    }

    function b(e, t) {
      var n = f.get(t + "@" + e);
      return c.a.isEmpty(n) && y(e, t, function (n) {
        void 0 === n || "string" == typeof n ? console.error("Error while reading image: " + e) : f.set(t + "@" + e, n);
      }), n;
    }

    e.loadProperties = function (e) {
      var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "l4w";
      if (p.has(n)) e(p.get(n));else {
        v(t + i.a.CONFIGURATION + "/" + n + ".properties", function (t) {
          var r;
          void 0 !== t ? (r = function (e) {
            var t = new Map(),
                n = e.split("\n");

            for (var r = 0; r < n.length; r++) {
              var _e3 = n[r].trim();

              if ("" !== _e3 && 0 !== _e3.indexOf("#")) {
                var _n2 = _e3.split("="),
                    _i2 = +_n2[1];

                isNaN(_i2) ? t.has(_n2[1]) ? t.set(_n2[0], t.get(_n2[1])) : console.error("Error parsing properties file at line " + r + ": " + _i2) : t.set(_n2[0], _i2);
              }
            }

            return t;
          }(t), p.set(n, r)) : r = new Map(), e(r);
        });
      }
    }, e.sendGETRequest = v, e.sendPOSTRequest = g, e.load = y, e.loadImageFromCache = b, e.loadDefaultImage = function (e) {
      return b("404.png", e);
    }, e.save = function (e, t, n, r) {
      var o = function (e, t) {
        return u + t + "/" + e;
      }(e, n);

      g(o, t, function (e) {
        void 0 !== e ? n === i.a.STRING || n === i.a.DIALOG || n === i.a.GENERIC_MESSAGE ? r(e, !0) : r(void 0, !0) : (console.error("Empty response for: " + o), r(void 0, !1));
      });
    }, e.listResources = function (e, t) {
      v(r + e, function (e) {
        if (void 0 !== e) {
          var _n3 = JSON.parse(e);

          if (void 0 !== _n3) return void t(_n3);
        }

        console.error("Empty response from " + r), t([]);
      });
    }, e.listScriptClasses = function () {
      if (void 0 !== d) return d;
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

      return d = t, t;
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
      return Object.keys(o.a);
    };
  }(r || (r = {}));
}, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return u;
  });
  var r,
      i = n(1),
      o = n(6),
      a = n(2),
      s = n(4),
      l = n(5),
      c = n(0);
  !function (e) {
    function t(e, t) {
      switch (parseInt(t + "")) {
        case 0:
          e.frequencyVal = i.a.VERY_LOW_FREQUENCY;
          break;

        case 1:
          e.frequencyVal = i.a.LOW_FREQUENCY;
          break;

        case 2:
          e.frequencyVal = i.a.MEDIUM_LOW_FREQUENCY;
          break;

        case 3:
          e.frequencyVal = i.a.MEDIUM_FREQUENCY;
          break;

        case 4:
          e.frequencyVal = i.a.MEDIUM_HIGH_FREQUENCY;
          break;

        case 5:
          e.frequencyVal = i.a.HIGH_FREQUENCY;
          break;

        case 6:
          e.frequencyVal = i.a.VERY_HIGH_FREQUENCY;
          break;

        default:
          e.frequencyVal = i.a.MEDIUM_FREQUENCY;
      }
    }

    function n(e, t) {
      switch (parseInt(t + "")) {
        case 0:
          e.mSpeed = i.a.VERY_LOW_MSPEED;
          break;

        case 1:
          e.mSpeed = i.a.LOW_MSPEED;
          break;

        case 2:
          e.mSpeed = i.a.MEDIUM_LOW_MSPEED;
          break;

        case 3:
          e.mSpeed = i.a.MEDIUM_MSPEED;
          break;

        case 4:
          e.mSpeed = i.a.MEDIUM_HIGH_MSPEED;
          break;

        case 5:
          e.mSpeed = i.a.HIGH_MSPEED;
          break;

        case 6:
          e.mSpeed = i.a.VERY_HIGH_MSPEED;
          break;

        default:
          e.mSpeed = i.a.MEDIUM_MSPEED;
      }
    }

    e.setFrequency = t, e.setSpeed = n, e.isVisible = function (e, t) {
      return void 0 !== e && t === (0 !== a.a.normalizeZIndex(e.onTop)) && !(!c.a.isEmpty(e.visible) && !e.visible) && !(!c.a.isEmpty(e.opacity) && 0 === e.opacity) && !c.a.isEmpty(e.charaset);
    }, e.initTransientData = function (e, r) {
      return void 0 === r && (r = l.a.getCharacter()), n(r, r.speed), t(r, r.frequency), r;
    };
  }(r || (r = {}));
  var u,
      f = n(10),
      d = n(14),
      p = n(3);
  !function (e) {
    function t(e, t) {
      var n = e.states[t].condition;
      return n in d.a ? d.a[n](e) : (console.error('Condition not found: "' + n + '", on event: ' + e.name), !1);
    }

    function n(e) {
      e.path = void 0, e.movementStartTime = void 0, e.movementDirection = void 0, e.target = void 0;
    }

    function l(e) {
      var t = u(e);

      if (void 0 !== t) {
        var _e4 = t.mSpeed;
        if (!c.a.isEmpty(_e4)) return _e4;
      }

      return i.a.MEDIUM_MSPEED;
    }

    function u(e) {
      if (void 0 !== e && void 0 !== e.currentState && void 0 !== e.states) return e.states[e.currentState];
    }

    e.update = function (e, n, r, i, o) {
      var a = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

      if (c.a.isEmpty(e.movementStartTime) || (e.movementStartTime += a), !c.a.isEmpty(e.states)) {
        var _n5 = -1;

        for (var _r2 = e.states.length - 1; _r2 >= 0; _r2--) {
          if (t(e, _r2)) {
            _n5 = _r2;
            break;
          }
        }

        if (e.currentState = _n5, e === r) return;
        if (function (e, t, n, r) {
          switch (e.states[t].trigger) {
            case 0:
              if (void 0 === r || r.i !== e.i || r.j !== e.j) return !1;

            case 1:
              var _i3 = Math.abs(e.i - n.i),
                  _o2 = Math.abs(e.j - n.j);

              return 0 === _i3 && _o2 <= 1 || _i3 <= 1 && 0 === _o2;

            case 2:
              return e.i === n.i && e.j === n.j;

            case 3:
              return !0;

            default:
              return console.error("Unexpected case: " + e.states[t].trigger), !1;
          }
        }(e, e.currentState, r, i)) return e.currentState;
      }
    }, e.startMovement = function (e, t, n, r) {
      return t.newTarget = e.mapCellToCanvas({
        i: n,
        j: r
      }), !0;
    }, e.stopMovement = n, e.manageMovements = function e(t, r, i, o, u, d) {
      var p = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
      var h = !1;

      if (!c.a.isEmpty(i.movementStartTime)) {
        if (0 === p && (p = c.a.now() - i.movementStartTime), void 0 === i.target) return console.error("No target set for movement"), !0;

        var _e5,
            v = {
          i: Math.floor(i.target.x / r.cellW),
          j: Math.floor(i.target.y / r.cellH)
        },
            g = a.a.cellToGid(v, t.width),
            m = a.a.getMapStaticBlock(t, g),
            y = a.a.getMapDynamicBlock(t, g);

        if (a.a.isBlockDirectionBlocked(m, s.a.ALL) && !a.a.isBlockDirectionBlocked(y, s.a.ALL) || g < 0 || g >= t.width * t.height) _e5 = 4;else if (_e5 = i.movementDirection, c.a.isEmpty(_e5) || 4 === _e5) {
          try {
            _e5 = f.a.pathFinder(t, i, v);
          } catch (i) {
            console.error(i);
          }

          var _n6 = a.a.getDirectionTarget(i, _e5),
              _r3 = a.a.cellToGid(_n6, t.width),
              _o3 = a.a.getMapDynamicBlock(t, _r3);

          a.a.isDirectionEnumBlocked(_o3, a.a.getOpposedDirections(_e5)) && (_e5 = 4, _r3 === g && d(v));
        }
        var b,
            _ = 0,
            E = 0;

        switch (_e5) {
          case 3:
            _ = Math.min(r.cellW, Math.floor(l(i) * p)), b = _, _ *= -1;
            break;

          case 1:
            _ = Math.min(r.cellW, Math.floor(l(i) * p)), b = _;
            break;

          case 0:
            E = Math.min(r.cellH, Math.floor(l(i) * p)), b = E, E *= -1;
            break;

          case 2:
            E = Math.min(r.cellH, Math.floor(l(i) * p)), b = E;
            break;

          case 4:
            n(i), d(v);
        }

        if (4 !== _e5 && (void 0 !== i.states[i.currentState] && (i.states[i.currentState].direction = _e5), i.movementDirection = _e5, i.position = {
          x: i.i * r.cellW + _,
          y: i.j * r.cellH + E
        }, o(_, E), b === r.cellW)) {
          h = !0, i.movementDirection = void 0, i.movementStartTime = c.a.now(), p -= Math.floor(b / l(i));

          var _e6 = r.mapCanvasToCell(i.position);

          i.i = _e6.i, i.j = _e6.j, u(_, E), (!c.a.isEmpty(i.newTarget) || i.position.x === i.target.x && i.position.y === i.target.y) && n(i);
        }
      }

      return !c.a.isEmpty(i.newTarget) && c.a.isEmpty(i.movementStartTime) && (i.target = i.newTarget, i.newTarget = void 0, i.movementStartTime = c.a.now(), h = h || e(t, r, i, o, u, d, p)), h;
    }, e.addDirectionToPath = function (e, t, n) {
      void 0 === e.path && (e.path = []), e.path[e.path.length - 1] !== t && e.path.push(t), !c.a.isEmpty(n) && e.path.length > n && e.path.shift();
    }, e.render = function (e, t, n, r, a) {
      var s,
          l = u(t);
      if (void 0 !== l) if (c.a.isEmpty(l.charaset) ? c.a.isEmpty(l.gid) : s = o.a.loadImageFromCache(l.charaset, p.a.CHAR), void 0 !== t.position) {
        if (r || (n.save(), n.strokeStyle = i.a.Color.GREEN, n.lineWidth = 2, n.strokeRect(t.position.x, t.position.y, e.cellW, e.cellH)), void 0 !== s) {
          var _o4 = Math.floor(s.width / 4),
              _u = Math.floor(s.height / 4),
              _f = _o4,
              _d = _u;

          r || (_u > _o4 ? (_f = Math.floor(_o4 * e.cellH / _u), _d = e.cellH) : (_d = Math.floor(_u * e.cellW / _o4), _f = e.cellW));

          var _p,
              h = 0;

          if (_p = c.a.isEmpty(l.frequencyVal) ? i.a.MEDIUM_FREQUENCY : l.frequencyVal, c.a.isEmpty(t.target)) {
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
                h = _o4;
                break;

              case 2:
                h = 2 * _o4;
                break;

              case 3:
                h = 3 * _o4;
            }
          }
          var v = 0;

          switch (l.direction) {
            case 3:
              v = _u;
              break;

            case 1:
              v = 2 * _u;
              break;

            case 0:
              v = 3 * _u;
          }

          var g = t.position.x + Math.floor((e.cellW - _f) / 2),
              m = t.position.y + Math.floor(-_d + e.cellH);

          if (n.save(), c.a.isEmpty(l.opacity) || 100 === l.opacity || (n.globalAlpha = l.opacity / 100), void 0 !== a) {
            a.i === t.i && a.j === t.j && (n.shadowColor = i.a.Color.YELLOW, n.shadowBlur = 8);
          }

          n.drawImage(s, h, v, _o4, _u, g, m, _f, _d), n.restore();
        }
      } else console.error("Event position undefined: " + t);
    }, e.isVisible = function (e, t, n, i, o, a, s, l) {
      return e.i === a && e.j === s && !!r.isVisible(u(e), l) && e.i >= i && e.i <= o && e.j >= t && e.j <= n;
    }, e.saveMem = function (e, t, n) {
      c.a.isEmpty(e.memory) && (e.memory = {}), e.memory[t] = n;
    }, e.loadMem = function (e, t) {
      if (!c.a.isEmpty(e.memory)) return e.memory[t];
    }, e.deleteMem = function (e, t) {
      c.a.isEmpty(e.memory) || delete e.memory[t];
    }, e.initTransientData = function (t, i, o) {
      if (r.initTransientData(i, e.getState(o)), void 0 !== o) return n(o), o.position = {
        x: o.i * i.cellW,
        y: o.j * i.cellH
      }, o;
    }, e.getState = u;
  }(u || (u = {}));
}, function (e, t, n) {
  "use strict";

  (function (e, n) {
    /*!
     * Vue.js v2.6.12
     * (c) 2014-2020 Evan You
     * Released under the MIT License.
     */
    var r = Object.freeze({});

    function i(e) {
      return null == e;
    }

    function o(e) {
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

    function u(e) {
      return "[object Object]" === c.call(e);
    }

    function f(e) {
      return "[object RegExp]" === c.call(e);
    }

    function d(e) {
      var t = parseFloat(String(e));
      return t >= 0 && Math.floor(t) === t && isFinite(e);
    }

    function p(e) {
      return o(e) && "function" == typeof e.then && "function" == typeof e["catch"];
    }

    function h(e) {
      return null == e ? "" : Array.isArray(e) || u(e) && e.toString === c ? JSON.stringify(e, null, 2) : String(e);
    }

    function v(e) {
      var t = parseFloat(e);
      return isNaN(t) ? e : t;
    }

    function g(e, t) {
      for (var n = Object.create(null), r = e.split(","), i = 0; i < r.length; i++) {
        n[r[i]] = !0;
      }

      return t ? function (e) {
        return n[e.toLowerCase()];
      } : function (e) {
        return n[e];
      };
    }

    var m = g("slot,component", !0),
        y = g("key,ref,slot,slot-scope,is");

    function b(e, t) {
      if (e.length) {
        var n = e.indexOf(t);
        if (n > -1) return e.splice(n, 1);
      }
    }

    var _ = Object.prototype.hasOwnProperty;

    function E(e, t) {
      return _.call(e, t);
    }

    function w(e) {
      var t = Object.create(null);
      return function (n) {
        return t[n] || (t[n] = e(n));
      };
    }

    var S = /-(\w)/g,
        A = w(function (e) {
      return e.replace(S, function (e, t) {
        return t ? t.toUpperCase() : "";
      });
    }),
        T = w(function (e) {
      return e.charAt(0).toUpperCase() + e.slice(1);
    }),
        k = /\B([A-Z])/g,
        C = w(function (e) {
      return e.replace(k, "-$1").toLowerCase();
    });
    var x = Function.prototype.bind ? function (e, t) {
      return e.bind(t);
    } : function (e, t) {
      function n(n) {
        var r = arguments.length;
        return r ? r > 1 ? e.apply(t, arguments) : e.call(t, n) : e.call(t);
      }

      return n._length = e.length, n;
    };

    function I(e, t) {
      t = t || 0;

      for (var n = e.length - t, r = new Array(n); n--;) {
        r[n] = e[n + t];
      }

      return r;
    }

    function M(e, t) {
      for (var n in t) {
        e[n] = t[n];
      }

      return e;
    }

    function O(e) {
      for (var t = {}, n = 0; n < e.length; n++) {
        e[n] && M(t, e[n]);
      }

      return t;
    }

    function D(e, t, n) {}

    var L = function L(e, t, n) {
      return !1;
    },
        R = function R(e) {
      return e;
    };

    function N(e, t) {
      if (e === t) return !0;
      var n = l(e),
          r = l(t);
      if (!n || !r) return !n && !r && String(e) === String(t);

      try {
        var i = Array.isArray(e),
            o = Array.isArray(t);
        if (i && o) return e.length === t.length && e.every(function (e, n) {
          return N(e, t[n]);
        });
        if (e instanceof Date && t instanceof Date) return e.getTime() === t.getTime();
        if (i || o) return !1;
        var a = Object.keys(e),
            s = Object.keys(t);
        return a.length === s.length && a.every(function (n) {
          return N(e[n], t[n]);
        });
      } catch (e) {
        return !1;
      }
    }

    function $(e, t) {
      for (var n = 0; n < e.length; n++) {
        if (N(e[n], t)) return n;
      }

      return -1;
    }

    function F(e) {
      var t = !1;
      return function () {
        t || (t = !0, e.apply(this, arguments));
      };
    }

    var j = ["component", "directive", "filter"],
        P = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured", "serverPrefetch"],
        B = {
      optionMergeStrategies: Object.create(null),
      silent: !1,
      productionTip: !1,
      devtools: !1,
      performance: !1,
      errorHandler: null,
      warnHandler: null,
      ignoredElements: [],
      keyCodes: Object.create(null),
      isReservedTag: L,
      isReservedAttr: L,
      isUnknownElement: L,
      getTagNamespace: D,
      parsePlatformTagName: R,
      mustUseProp: L,
      async: !0,
      _lifecycleHooks: P
    },
        U = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

    function W(e) {
      var t = (e + "").charCodeAt(0);
      return 36 === t || 95 === t;
    }

    function H(e, t, n, r) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: !!r,
        writable: !0,
        configurable: !0
      });
    }

    var G = new RegExp("[^" + U.source + ".$_\\d]");
    var V,
        q = ("__proto__" in {}),
        Y = "undefined" != typeof window,
        z = "undefined" != typeof WXEnvironment && !!WXEnvironment.platform,
        K = z && WXEnvironment.platform.toLowerCase(),
        J = Y && window.navigator.userAgent.toLowerCase(),
        Q = J && /msie|trident/.test(J),
        X = J && J.indexOf("msie 9.0") > 0,
        Z = J && J.indexOf("edge/") > 0,
        ee = (J && J.indexOf("android"), J && /iphone|ipad|ipod|ios/.test(J) || "ios" === K),
        te = (J && /chrome\/\d+/.test(J), J && /phantomjs/.test(J), J && J.match(/firefox\/(\d+)/)),
        ne = {}.watch,
        re = !1;
    if (Y) try {
      var ie = {};
      Object.defineProperty(ie, "passive", {
        get: function get() {
          re = !0;
        }
      }), window.addEventListener("test-passive", null, ie);
    } catch (e) {}

    var oe = function oe() {
      return void 0 === V && (V = !Y && !z && void 0 !== e && e.process && "server" === e.process.env.VUE_ENV), V;
    },
        ae = Y && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

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

    var ue = D,
        fe = 0,
        de = function de() {
      this.id = fe++, this.subs = [];
    };

    de.prototype.addSub = function (e) {
      this.subs.push(e);
    }, de.prototype.removeSub = function (e) {
      b(this.subs, e);
    }, de.prototype.depend = function () {
      de.target && de.target.addDep(this);
    }, de.prototype.notify = function () {
      var e = this.subs.slice();

      for (var t = 0, n = e.length; t < n; t++) {
        e[t].update();
      }
    }, de.target = null;
    var pe = [];

    function he(e) {
      pe.push(e), de.target = e;
    }

    function ve() {
      pe.pop(), de.target = pe[pe.length - 1];
    }

    var ge = function ge(e, t, n, r, i, o, a, s) {
      this.tag = e, this.data = t, this.children = n, this.text = r, this.elm = i, this.ns = void 0, this.context = o, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0, this.key = t && t.key, this.componentOptions = a, this.componentInstance = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = s, this.asyncMeta = void 0, this.isAsyncPlaceholder = !1;
    },
        me = {
      child: {
        configurable: !0
      }
    };

    me.child.get = function () {
      return this.componentInstance;
    }, Object.defineProperties(ge.prototype, me);

    var ye = function ye(e) {
      void 0 === e && (e = "");
      var t = new ge();
      return t.text = e, t.isComment = !0, t;
    };

    function be(e) {
      return new ge(void 0, void 0, void 0, String(e));
    }

    function _e(e) {
      var t = new ge(e.tag, e.data, e.children && e.children.slice(), e.text, e.elm, e.context, e.componentOptions, e.asyncFactory);
      return t.ns = e.ns, t.isStatic = e.isStatic, t.key = e.key, t.isComment = e.isComment, t.fnContext = e.fnContext, t.fnOptions = e.fnOptions, t.fnScopeId = e.fnScopeId, t.asyncMeta = e.asyncMeta, t.isCloned = !0, t;
    }

    var Ee = Array.prototype,
        we = Object.create(Ee);
    ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function (e) {
      var t = Ee[e];
      H(we, e, function () {
        for (var n = [], r = arguments.length; r--;) {
          n[r] = arguments[r];
        }

        var i,
            o = t.apply(this, n),
            a = this.__ob__;

        switch (e) {
          case "push":
          case "unshift":
            i = n;
            break;

          case "splice":
            i = n.slice(2);
        }

        return i && a.observeArray(i), a.dep.notify(), o;
      });
    });
    var Se = Object.getOwnPropertyNames(we),
        Ae = !0;

    function Te(e) {
      Ae = e;
    }

    var ke = function ke(e) {
      this.value = e, this.dep = new de(), this.vmCount = 0, H(e, "__ob__", this), Array.isArray(e) ? (q ? function (e, t) {
        e.__proto__ = t;
      }(e, we) : function (e, t, n) {
        for (var r = 0, i = n.length; r < i; r++) {
          var o = n[r];
          H(e, o, t[o]);
        }
      }(e, we, Se), this.observeArray(e)) : this.walk(e);
    };

    function Ce(e, t) {
      var n;
      if (l(e) && !(e instanceof ge)) return E(e, "__ob__") && e.__ob__ instanceof ke ? n = e.__ob__ : Ae && !oe() && (Array.isArray(e) || u(e)) && Object.isExtensible(e) && !e._isVue && (n = new ke(e)), t && n && n.vmCount++, n;
    }

    function xe(e, t, n, r, i) {
      var o = new de(),
          a = Object.getOwnPropertyDescriptor(e, t);

      if (!a || !1 !== a.configurable) {
        var s = a && a.get,
            l = a && a.set;
        s && !l || 2 !== arguments.length || (n = e[t]);
        var c = !i && Ce(n);
        Object.defineProperty(e, t, {
          enumerable: !0,
          configurable: !0,
          get: function get() {
            var t = s ? s.call(e) : n;
            return de.target && (o.depend(), c && (c.dep.depend(), Array.isArray(t) && Oe(t))), t;
          },
          set: function set(t) {
            var r = s ? s.call(e) : n;
            t === r || t != t && r != r || s && !l || (l ? l.call(e, t) : n = t, c = !i && Ce(t), o.notify());
          }
        });
      }
    }

    function Ie(e, t, n) {
      if (Array.isArray(e) && d(t)) return e.length = Math.max(e.length, t), e.splice(t, 1, n), n;
      if (t in e && !(t in Object.prototype)) return e[t] = n, n;
      var r = e.__ob__;
      return e._isVue || r && r.vmCount ? n : r ? (xe(r.value, t, n), r.dep.notify(), n) : (e[t] = n, n);
    }

    function Me(e, t) {
      if (Array.isArray(e) && d(t)) e.splice(t, 1);else {
        var n = e.__ob__;
        e._isVue || n && n.vmCount || E(e, t) && (delete e[t], n && n.dep.notify());
      }
    }

    function Oe(e) {
      for (var t = void 0, n = 0, r = e.length; n < r; n++) {
        (t = e[n]) && t.__ob__ && t.__ob__.dep.depend(), Array.isArray(t) && Oe(t);
      }
    }

    ke.prototype.walk = function (e) {
      for (var t = Object.keys(e), n = 0; n < t.length; n++) {
        xe(e, t[n]);
      }
    }, ke.prototype.observeArray = function (e) {
      for (var t = 0, n = e.length; t < n; t++) {
        Ce(e[t]);
      }
    };
    var De = B.optionMergeStrategies;

    function Le(e, t) {
      if (!t) return e;

      for (var n, r, i, o = ce ? Reflect.ownKeys(t) : Object.keys(t), a = 0; a < o.length; a++) {
        "__ob__" !== (n = o[a]) && (r = e[n], i = t[n], E(e, n) ? r !== i && u(r) && u(i) && Le(r, i) : Ie(e, n, i));
      }

      return e;
    }

    function Re(e, t, n) {
      return n ? function () {
        var r = "function" == typeof t ? t.call(n, n) : t,
            i = "function" == typeof e ? e.call(n, n) : e;
        return r ? Le(r, i) : i;
      } : t ? e ? function () {
        return Le("function" == typeof t ? t.call(this, this) : t, "function" == typeof e ? e.call(this, this) : e);
      } : t : e;
    }

    function Ne(e, t) {
      var n = t ? e ? e.concat(t) : Array.isArray(t) ? t : [t] : e;
      return n ? function (e) {
        for (var t = [], n = 0; n < e.length; n++) {
          -1 === t.indexOf(e[n]) && t.push(e[n]);
        }

        return t;
      }(n) : n;
    }

    function $e(e, t, n, r) {
      var i = Object.create(e || null);
      return t ? M(i, t) : i;
    }

    De.data = function (e, t, n) {
      return n ? Re(e, t, n) : t && "function" != typeof t ? e : Re(e, t);
    }, P.forEach(function (e) {
      De[e] = Ne;
    }), j.forEach(function (e) {
      De[e + "s"] = $e;
    }), De.watch = function (e, t, n, r) {
      if (e === ne && (e = void 0), t === ne && (t = void 0), !t) return Object.create(e || null);
      if (!e) return t;
      var i = {};

      for (var o in M(i, e), t) {
        var a = i[o],
            s = t[o];
        a && !Array.isArray(a) && (a = [a]), i[o] = a ? a.concat(s) : Array.isArray(s) ? s : [s];
      }

      return i;
    }, De.props = De.methods = De.inject = De.computed = function (e, t, n, r) {
      if (!e) return t;
      var i = Object.create(null);
      return M(i, e), t && M(i, t), i;
    }, De.provide = Re;

    var Fe = function Fe(e, t) {
      return void 0 === t ? e : t;
    };

    function je(e, t, n) {
      if ("function" == typeof t && (t = t.options), function (e, t) {
        var n = e.props;

        if (n) {
          var r,
              i,
              o = {};
          if (Array.isArray(n)) for (r = n.length; r--;) {
            "string" == typeof (i = n[r]) && (o[A(i)] = {
              type: null
            });
          } else if (u(n)) for (var a in n) {
            i = n[a], o[A(a)] = u(i) ? i : {
              type: i
            };
          } else 0;
          e.props = o;
        }
      }(t), function (e, t) {
        var n = e.inject;

        if (n) {
          var r = e.inject = {};
          if (Array.isArray(n)) for (var i = 0; i < n.length; i++) {
            r[n[i]] = {
              from: n[i]
            };
          } else if (u(n)) for (var o in n) {
            var a = n[o];
            r[o] = u(a) ? M({
              from: o
            }, a) : {
              from: a
            };
          } else 0;
        }
      }(t), function (e) {
        var t = e.directives;
        if (t) for (var n in t) {
          var r = t[n];
          "function" == typeof r && (t[n] = {
            bind: r,
            update: r
          });
        }
      }(t), !t._base && (t["extends"] && (e = je(e, t["extends"], n)), t.mixins)) for (var r = 0, i = t.mixins.length; r < i; r++) {
        e = je(e, t.mixins[r], n);
      }
      var o,
          a = {};

      for (o in e) {
        s(o);
      }

      for (o in t) {
        E(e, o) || s(o);
      }

      function s(r) {
        var i = De[r] || Fe;
        a[r] = i(e[r], t[r], n, r);
      }

      return a;
    }

    function Pe(e, t, n, r) {
      if ("string" == typeof n) {
        var i = e[t];
        if (E(i, n)) return i[n];
        var o = A(n);
        if (E(i, o)) return i[o];
        var a = T(o);
        return E(i, a) ? i[a] : i[n] || i[o] || i[a];
      }
    }

    function Be(e, t, n, r) {
      var i = t[e],
          o = !E(n, e),
          a = n[e],
          s = He(Boolean, i.type);
      if (s > -1) if (o && !E(i, "default")) a = !1;else if ("" === a || a === C(e)) {
        var l = He(String, i.type);
        (l < 0 || s < l) && (a = !0);
      }

      if (void 0 === a) {
        a = function (e, t, n) {
          if (!E(t, "default")) return;
          var r = t["default"];
          0;
          if (e && e.$options.propsData && void 0 === e.$options.propsData[n] && void 0 !== e._props[n]) return e._props[n];
          return "function" == typeof r && "Function" !== Ue(t.type) ? r.call(e) : r;
        }(r, i, e);

        var c = Ae;
        Te(!0), Ce(a), Te(c);
      }

      return a;
    }

    function Ue(e) {
      var t = e && e.toString().match(/^\s*function (\w+)/);
      return t ? t[1] : "";
    }

    function We(e, t) {
      return Ue(e) === Ue(t);
    }

    function He(e, t) {
      if (!Array.isArray(t)) return We(t, e) ? 0 : -1;

      for (var n = 0, r = t.length; n < r; n++) {
        if (We(t[n], e)) return n;
      }

      return -1;
    }

    function Ge(e, t, n) {
      he();

      try {
        if (t) for (var r = t; r = r.$parent;) {
          var i = r.$options.errorCaptured;
          if (i) for (var o = 0; o < i.length; o++) {
            try {
              if (!1 === i[o].call(r, e, t, n)) return;
            } catch (e) {
              qe(e, r, "errorCaptured hook");
            }
          }
        }
        qe(e, t, n);
      } finally {
        ve();
      }
    }

    function Ve(e, t, n, r, i) {
      var o;

      try {
        (o = n ? e.apply(t, n) : e.call(t)) && !o._isVue && p(o) && !o._handled && (o["catch"](function (e) {
          return Ge(e, r, i + " (Promise/async)");
        }), o._handled = !0);
      } catch (e) {
        Ge(e, r, i);
      }

      return o;
    }

    function qe(e, t, n) {
      if (B.errorHandler) try {
        return B.errorHandler.call(null, e, t, n);
      } catch (t) {
        t !== e && Ye(t, null, "config.errorHandler");
      }
      Ye(e, t, n);
    }

    function Ye(e, t, n) {
      if (!Y && !z || "undefined" == typeof console) throw e;
      console.error(e);
    }

    var ze,
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
      ze = function ze() {
        Ze.then(Xe), ee && setTimeout(D);
      }, Ke = !0;
    } else if (Q || "undefined" == typeof MutationObserver || !se(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString()) ze = void 0 !== n && se(n) ? function () {
      n(Xe);
    } : function () {
      setTimeout(Xe, 0);
    };else {
      var et = 1,
          tt = new MutationObserver(Xe),
          nt = document.createTextNode(String(et));
      tt.observe(nt, {
        characterData: !0
      }), ze = function ze() {
        et = (et + 1) % 2, nt.data = String(et);
      }, Ke = !0;
    }

    function rt(e, t) {
      var n;
      if (Je.push(function () {
        if (e) try {
          e.call(t);
        } catch (e) {
          Ge(e, t, "nextTick");
        } else n && n(t);
      }), Qe || (Qe = !0, ze()), !e && "undefined" != typeof Promise) return new Promise(function (e) {
        n = e;
      });
    }

    var it = new le();

    function ot(e) {
      !function e(t, n) {
        var r,
            i,
            o = Array.isArray(t);
        if (!o && !l(t) || Object.isFrozen(t) || t instanceof ge) return;

        if (t.__ob__) {
          var a = t.__ob__.dep.id;
          if (n.has(a)) return;
          n.add(a);
        }

        if (o) for (r = t.length; r--;) {
          e(t[r], n);
        } else for (i = Object.keys(t), r = i.length; r--;) {
          e(t[i[r]], n);
        }
      }(e, it), it.clear();
    }

    var at = w(function (e) {
      var t = "&" === e.charAt(0),
          n = "~" === (e = t ? e.slice(1) : e).charAt(0),
          r = "!" === (e = n ? e.slice(1) : e).charAt(0);
      return {
        name: e = r ? e.slice(1) : e,
        once: n,
        capture: r,
        passive: t
      };
    });

    function st(e, t) {
      function n() {
        var e = arguments,
            r = n.fns;
        if (!Array.isArray(r)) return Ve(r, null, arguments, t, "v-on handler");

        for (var i = r.slice(), o = 0; o < i.length; o++) {
          Ve(i[o], null, e, t, "v-on handler");
        }
      }

      return n.fns = e, n;
    }

    function lt(e, t, n, r, o, s) {
      var l, c, u, f;

      for (l in e) {
        c = e[l], u = t[l], f = at(l), i(c) || (i(u) ? (i(c.fns) && (c = e[l] = st(c, s)), a(f.once) && (c = e[l] = o(f.name, c, f.capture)), n(f.name, c, f.capture, f.passive, f.params)) : c !== u && (u.fns = c, e[l] = u));
      }

      for (l in t) {
        i(e[l]) && r((f = at(l)).name, t[l], f.capture);
      }
    }

    function ct(e, t, n) {
      var r;
      e instanceof ge && (e = e.data.hook || (e.data.hook = {}));
      var s = e[t];

      function l() {
        n.apply(this, arguments), b(r.fns, l);
      }

      i(s) ? r = st([l]) : o(s.fns) && a(s.merged) ? (r = s).fns.push(l) : r = st([s, l]), r.merged = !0, e[t] = r;
    }

    function ut(e, t, n, r, i) {
      if (o(t)) {
        if (E(t, n)) return e[n] = t[n], i || delete t[n], !0;
        if (E(t, r)) return e[n] = t[r], i || delete t[r], !0;
      }

      return !1;
    }

    function ft(e) {
      return s(e) ? [be(e)] : Array.isArray(e) ? function e(t, n) {
        var r,
            l,
            c,
            u,
            f = [];

        for (r = 0; r < t.length; r++) {
          i(l = t[r]) || "boolean" == typeof l || (c = f.length - 1, u = f[c], Array.isArray(l) ? l.length > 0 && (dt((l = e(l, (n || "") + "_" + r))[0]) && dt(u) && (f[c] = be(u.text + l[0].text), l.shift()), f.push.apply(f, l)) : s(l) ? dt(u) ? f[c] = be(u.text + l) : "" !== l && f.push(be(l)) : dt(l) && dt(u) ? f[c] = be(u.text + l.text) : (a(t._isVList) && o(l.tag) && i(l.key) && o(n) && (l.key = "__vlist" + n + "_" + r + "__"), f.push(l)));
        }

        return f;
      }(e) : void 0;
    }

    function dt(e) {
      return o(e) && o(e.text) && !1 === e.isComment;
    }

    function pt(e, t) {
      if (e) {
        for (var n = Object.create(null), r = ce ? Reflect.ownKeys(e) : Object.keys(e), i = 0; i < r.length; i++) {
          var o = r[i];

          if ("__ob__" !== o) {
            for (var a = e[o].from, s = t; s;) {
              if (s._provided && E(s._provided, a)) {
                n[o] = s._provided[a];
                break;
              }

              s = s.$parent;
            }

            if (!s) if ("default" in e[o]) {
              var l = e[o]["default"];
              n[o] = "function" == typeof l ? l.call(t) : l;
            } else 0;
          }
        }

        return n;
      }
    }

    function ht(e, t) {
      if (!e || !e.length) return {};

      for (var n = {}, r = 0, i = e.length; r < i; r++) {
        var o = e[r],
            a = o.data;
        if (a && a.attrs && a.attrs.slot && delete a.attrs.slot, o.context !== t && o.fnContext !== t || !a || null == a.slot) (n["default"] || (n["default"] = [])).push(o);else {
          var s = a.slot,
              l = n[s] || (n[s] = []);
          "template" === o.tag ? l.push.apply(l, o.children || []) : l.push(o);
        }
      }

      for (var c in n) {
        n[c].every(vt) && delete n[c];
      }

      return n;
    }

    function vt(e) {
      return e.isComment && !e.asyncFactory || " " === e.text;
    }

    function gt(e, t, n) {
      var i,
          o = Object.keys(t).length > 0,
          a = e ? !!e.$stable : !o,
          s = e && e.$key;

      if (e) {
        if (e._normalized) return e._normalized;
        if (a && n && n !== r && s === n.$key && !o && !n.$hasNormal) return n;

        for (var l in i = {}, e) {
          e[l] && "$" !== l[0] && (i[l] = mt(t, l, e[l]));
        }
      } else i = {};

      for (var c in t) {
        c in i || (i[c] = yt(t, c));
      }

      return e && Object.isExtensible(e) && (e._normalized = i), H(i, "$stable", a), H(i, "$key", s), H(i, "$hasNormal", o), i;
    }

    function mt(e, t, n) {
      var r = function r() {
        var e = arguments.length ? n.apply(null, arguments) : n({});
        return (e = e && "object" == _typeof(e) && !Array.isArray(e) ? [e] : ft(e)) && (0 === e.length || 1 === e.length && e[0].isComment) ? void 0 : e;
      };

      return n.proxy && Object.defineProperty(e, t, {
        get: r,
        enumerable: !0,
        configurable: !0
      }), r;
    }

    function yt(e, t) {
      return function () {
        return e[t];
      };
    }

    function bt(e, t) {
      var n, r, i, a, s;
      if (Array.isArray(e) || "string" == typeof e) for (n = new Array(e.length), r = 0, i = e.length; r < i; r++) {
        n[r] = t(e[r], r);
      } else if ("number" == typeof e) for (n = new Array(e), r = 0; r < e; r++) {
        n[r] = t(r + 1, r);
      } else if (l(e)) if (ce && e[Symbol.iterator]) {
        n = [];

        for (var c = e[Symbol.iterator](), u = c.next(); !u.done;) {
          n.push(t(u.value, n.length)), u = c.next();
        }
      } else for (a = Object.keys(e), n = new Array(a.length), r = 0, i = a.length; r < i; r++) {
        s = a[r], n[r] = t(e[s], s, r);
      }
      return o(n) || (n = []), n._isVList = !0, n;
    }

    function _t(e, t, n, r) {
      var i,
          o = this.$scopedSlots[e];
      o ? (n = n || {}, r && (n = M(M({}, r), n)), i = o(n) || t) : i = this.$slots[e] || t;
      var a = n && n.slot;
      return a ? this.$createElement("template", {
        slot: a
      }, i) : i;
    }

    function Et(e) {
      return Pe(this.$options, "filters", e) || R;
    }

    function wt(e, t) {
      return Array.isArray(e) ? -1 === e.indexOf(t) : e !== t;
    }

    function St(e, t, n, r, i) {
      var o = B.keyCodes[t] || n;
      return i && r && !B.keyCodes[t] ? wt(i, r) : o ? wt(o, e) : r ? C(r) !== t : void 0;
    }

    function At(e, t, n, r, i) {
      if (n) if (l(n)) {
        var o;
        Array.isArray(n) && (n = O(n));

        var a = function a(_a2) {
          if ("class" === _a2 || "style" === _a2 || y(_a2)) o = e;else {
            var s = e.attrs && e.attrs.type;
            o = r || B.mustUseProp(t, s, _a2) ? e.domProps || (e.domProps = {}) : e.attrs || (e.attrs = {});
          }
          var l = A(_a2),
              c = C(_a2);
          l in o || c in o || (o[_a2] = n[_a2], i && ((e.on || (e.on = {}))["update:" + _a2] = function (e) {
            n[_a2] = e;
          }));
        };

        for (var s in n) {
          a(s);
        }
      } else ;
      return e;
    }

    function Tt(e, t) {
      var n = this._staticTrees || (this._staticTrees = []),
          r = n[e];
      return r && !t || Ct(r = n[e] = this.$options.staticRenderFns[e].call(this._renderProxy, null, this), "__static__" + e, !1), r;
    }

    function kt(e, t, n) {
      return Ct(e, "__once__" + t + (n ? "_" + n : ""), !0), e;
    }

    function Ct(e, t, n) {
      if (Array.isArray(e)) for (var r = 0; r < e.length; r++) {
        e[r] && "string" != typeof e[r] && xt(e[r], t + "_" + r, n);
      } else xt(e, t, n);
    }

    function xt(e, t, n) {
      e.isStatic = !0, e.key = t, e.isOnce = n;
    }

    function It(e, t) {
      if (t) if (u(t)) {
        var n = e.on = e.on ? M({}, e.on) : {};

        for (var r in t) {
          var i = n[r],
              o = t[r];
          n[r] = i ? [].concat(i, o) : o;
        }
      } else ;
      return e;
    }

    function Mt(e, t, n, r) {
      t = t || {
        $stable: !n
      };

      for (var i = 0; i < e.length; i++) {
        var o = e[i];
        Array.isArray(o) ? Mt(o, t, n) : o && (o.proxy && (o.fn.proxy = !0), t[o.key] = o.fn);
      }

      return r && (t.$key = r), t;
    }

    function Ot(e, t) {
      for (var n = 0; n < t.length; n += 2) {
        var r = t[n];
        "string" == typeof r && r && (e[t[n]] = t[n + 1]);
      }

      return e;
    }

    function Dt(e, t) {
      return "string" == typeof e ? t + e : e;
    }

    function Lt(e) {
      e._o = kt, e._n = v, e._s = h, e._l = bt, e._t = _t, e._q = N, e._i = $, e._m = Tt, e._f = Et, e._k = St, e._b = At, e._v = be, e._e = ye, e._u = Mt, e._g = It, e._d = Ot, e._p = Dt;
    }

    function Rt(e, t, n, i, o) {
      var s,
          l = this,
          c = o.options;
      E(i, "_uid") ? (s = Object.create(i))._original = i : (s = i, i = i._original);
      var u = a(c._compiled),
          f = !u;
      this.data = e, this.props = t, this.children = n, this.parent = i, this.listeners = e.on || r, this.injections = pt(c.inject, i), this.slots = function () {
        return l.$slots || gt(e.scopedSlots, l.$slots = ht(n, i)), l.$slots;
      }, Object.defineProperty(this, "scopedSlots", {
        enumerable: !0,
        get: function get() {
          return gt(e.scopedSlots, this.slots());
        }
      }), u && (this.$options = c, this.$slots = this.slots(), this.$scopedSlots = gt(e.scopedSlots, this.$slots)), c._scopeId ? this._c = function (e, t, n, r) {
        var o = Ut(s, e, t, n, r, f);
        return o && !Array.isArray(o) && (o.fnScopeId = c._scopeId, o.fnContext = i), o;
      } : this._c = function (e, t, n, r) {
        return Ut(s, e, t, n, r, f);
      };
    }

    function Nt(e, t, n, r, i) {
      var o = _e(e);

      return o.fnContext = n, o.fnOptions = r, t.slot && ((o.data || (o.data = {})).slot = t.slot), o;
    }

    function $t(e, t) {
      for (var n in t) {
        e[A(n)] = t[n];
      }
    }

    Lt(Rt.prototype);
    var Ft = {
      init: function init(e, t) {
        if (e.componentInstance && !e.componentInstance._isDestroyed && e.data.keepAlive) {
          var n = e;
          Ft.prepatch(n, n);
        } else {
          (e.componentInstance = function (e, t) {
            var n = {
              _isComponent: !0,
              _parentVnode: e,
              parent: t
            },
                r = e.data.inlineTemplate;
            o(r) && (n.render = r.render, n.staticRenderFns = r.staticRenderFns);
            return new e.componentOptions.Ctor(n);
          }(e, Qt)).$mount(t ? e.elm : void 0, t);
        }
      },
      prepatch: function prepatch(e, t) {
        var n = t.componentOptions;
        !function (e, t, n, i, o) {
          0;
          var a = i.data.scopedSlots,
              s = e.$scopedSlots,
              l = !!(a && !a.$stable || s !== r && !s.$stable || a && e.$scopedSlots.$key !== a.$key),
              c = !!(o || e.$options._renderChildren || l);
          e.$options._parentVnode = i, e.$vnode = i, e._vnode && (e._vnode.parent = i);

          if (e.$options._renderChildren = o, e.$attrs = i.data.attrs || r, e.$listeners = n || r, t && e.$options.props) {
            Te(!1);

            for (var u = e._props, f = e.$options._propKeys || [], d = 0; d < f.length; d++) {
              var p = f[d],
                  h = e.$options.props;
              u[p] = Be(p, h, t, e);
            }

            Te(!0), e.$options.propsData = t;
          }

          n = n || r;
          var v = e.$options._parentListeners;
          e.$options._parentListeners = n, Jt(e, n, v), c && (e.$slots = ht(o, i.context), e.$forceUpdate());
          0;
        }(t.componentInstance = e.componentInstance, n.propsData, n.listeners, t, n.children);
      },
      insert: function insert(e) {
        var t,
            n = e.context,
            r = e.componentInstance;
        r._isMounted || (r._isMounted = !0, tn(r, "mounted")), e.data.keepAlive && (n._isMounted ? ((t = r)._inactive = !1, rn.push(t)) : en(r, !0));
      },
      destroy: function destroy(e) {
        var t = e.componentInstance;
        t._isDestroyed || (e.data.keepAlive ? function e(t, n) {
          if (n && (t._directInactive = !0, Zt(t))) return;

          if (!t._inactive) {
            t._inactive = !0;

            for (var r = 0; r < t.$children.length; r++) {
              e(t.$children[r]);
            }

            tn(t, "deactivated");
          }
        }(t, !0) : t.$destroy());
      }
    },
        jt = Object.keys(Ft);

    function Pt(e, t, n, s, c) {
      if (!i(e)) {
        var u = n.$options._base;

        if (l(e) && (e = u.extend(e)), "function" == typeof e) {
          var f;
          if (i(e.cid) && void 0 === (e = function (e, t) {
            if (a(e.error) && o(e.errorComp)) return e.errorComp;
            if (o(e.resolved)) return e.resolved;
            var n = Ht;
            n && o(e.owners) && -1 === e.owners.indexOf(n) && e.owners.push(n);
            if (a(e.loading) && o(e.loadingComp)) return e.loadingComp;

            if (n && !o(e.owners)) {
              var r = e.owners = [n],
                  s = !0,
                  c = null,
                  u = null;
              n.$on("hook:destroyed", function () {
                return b(r, n);
              });

              var f = function f(e) {
                for (var t = 0, n = r.length; t < n; t++) {
                  r[t].$forceUpdate();
                }

                e && (r.length = 0, null !== c && (clearTimeout(c), c = null), null !== u && (clearTimeout(u), u = null));
              },
                  d = F(function (n) {
                e.resolved = Gt(n, t), s ? r.length = 0 : f(!0);
              }),
                  h = F(function (t) {
                o(e.errorComp) && (e.error = !0, f(!0));
              }),
                  v = e(d, h);

              return l(v) && (p(v) ? i(e.resolved) && v.then(d, h) : p(v.component) && (v.component.then(d, h), o(v.error) && (e.errorComp = Gt(v.error, t)), o(v.loading) && (e.loadingComp = Gt(v.loading, t), 0 === v.delay ? e.loading = !0 : c = setTimeout(function () {
                c = null, i(e.resolved) && i(e.error) && (e.loading = !0, f(!1));
              }, v.delay || 200)), o(v.timeout) && (u = setTimeout(function () {
                u = null, i(e.resolved) && h(null);
              }, v.timeout)))), s = !1, e.loading ? e.loadingComp : e.resolved;
            }
          }(f = e, u))) return function (e, t, n, r, i) {
            var o = ye();
            return o.asyncFactory = e, o.asyncMeta = {
              data: t,
              context: n,
              children: r,
              tag: i
            }, o;
          }(f, t, n, s, c);
          t = t || {}, An(e), o(t.model) && function (e, t) {
            var n = e.model && e.model.prop || "value",
                r = e.model && e.model.event || "input";
            (t.attrs || (t.attrs = {}))[n] = t.model.value;
            var i = t.on || (t.on = {}),
                a = i[r],
                s = t.model.callback;
            o(a) ? (Array.isArray(a) ? -1 === a.indexOf(s) : a !== s) && (i[r] = [s].concat(a)) : i[r] = s;
          }(e.options, t);

          var d = function (e, t, n) {
            var r = t.options.props;

            if (!i(r)) {
              var a = {},
                  s = e.attrs,
                  l = e.props;
              if (o(s) || o(l)) for (var c in r) {
                var u = C(c);
                ut(a, l, c, u, !0) || ut(a, s, c, u, !1);
              }
              return a;
            }
          }(t, e);

          if (a(e.options.functional)) return function (e, t, n, i, a) {
            var s = e.options,
                l = {},
                c = s.props;
            if (o(c)) for (var u in c) {
              l[u] = Be(u, c, t || r);
            } else o(n.attrs) && $t(l, n.attrs), o(n.props) && $t(l, n.props);
            var f = new Rt(n, l, a, i, e),
                d = s.render.call(null, f._c, f);
            if (d instanceof ge) return Nt(d, n, f.parent, s, f);

            if (Array.isArray(d)) {
              for (var p = ft(d) || [], h = new Array(p.length), v = 0; v < p.length; v++) {
                h[v] = Nt(p[v], n, f.parent, s, f);
              }

              return h;
            }
          }(e, d, t, n, s);
          var h = t.on;

          if (t.on = t.nativeOn, a(e.options["abstract"])) {
            var v = t.slot;
            t = {}, v && (t.slot = v);
          }

          !function (e) {
            for (var t = e.hook || (e.hook = {}), n = 0; n < jt.length; n++) {
              var r = jt[n],
                  i = t[r],
                  o = Ft[r];
              i === o || i && i._merged || (t[r] = i ? Bt(o, i) : o);
            }
          }(t);
          var g = e.options.name || c;
          return new ge("vue-component-" + e.cid + (g ? "-" + g : ""), t, void 0, void 0, void 0, n, {
            Ctor: e,
            propsData: d,
            listeners: h,
            tag: c,
            children: s
          }, f);
        }
      }
    }

    function Bt(e, t) {
      var n = function n(_n7, r) {
        e(_n7, r), t(_n7, r);
      };

      return n._merged = !0, n;
    }

    function Ut(e, t, n, r, c, u) {
      return (Array.isArray(n) || s(n)) && (c = r, r = n, n = void 0), a(u) && (c = 2), function (e, t, n, r, s) {
        if (o(n) && o(n.__ob__)) return ye();
        o(n) && o(n.is) && (t = n.is);
        if (!t) return ye();
        0;
        Array.isArray(r) && "function" == typeof r[0] && ((n = n || {}).scopedSlots = {
          "default": r[0]
        }, r.length = 0);
        2 === s ? r = ft(r) : 1 === s && (r = function (e) {
          for (var t = 0; t < e.length; t++) {
            if (Array.isArray(e[t])) return Array.prototype.concat.apply([], e);
          }

          return e;
        }(r));
        var c, u;

        if ("string" == typeof t) {
          var f;
          u = e.$vnode && e.$vnode.ns || B.getTagNamespace(t), c = B.isReservedTag(t) ? new ge(B.parsePlatformTagName(t), n, r, void 0, void 0, e) : n && n.pre || !o(f = Pe(e.$options, "components", t)) ? new ge(t, n, r, void 0, void 0, e) : Pt(f, n, e, r, t);
        } else c = Pt(t, n, e, r);

        return Array.isArray(c) ? c : o(c) ? (o(u) && function e(t, n, r) {
          t.ns = n, "foreignObject" === t.tag && (n = void 0, r = !0);
          if (o(t.children)) for (var s = 0, l = t.children.length; s < l; s++) {
            var c = t.children[s];
            o(c.tag) && (i(c.ns) || a(r) && "svg" !== c.tag) && e(c, n, r);
          }
        }(c, u), o(n) && function (e) {
          l(e.style) && ot(e.style);
          l(e["class"]) && ot(e["class"]);
        }(n), c) : ye();
      }(e, t, n, r, c);
    }

    var Wt,
        Ht = null;

    function Gt(e, t) {
      return (e.__esModule || ce && "Module" === e[Symbol.toStringTag]) && (e = e["default"]), l(e) ? t.extend(e) : e;
    }

    function Vt(e) {
      return e.isComment && e.asyncFactory;
    }

    function qt(e) {
      if (Array.isArray(e)) for (var t = 0; t < e.length; t++) {
        var n = e[t];
        if (o(n) && (o(n.componentOptions) || Vt(n))) return n;
      }
    }

    function Yt(e, t) {
      Wt.$on(e, t);
    }

    function zt(e, t) {
      Wt.$off(e, t);
    }

    function Kt(e, t) {
      var n = Wt;
      return function r() {
        var i = t.apply(null, arguments);
        null !== i && n.$off(e, r);
      };
    }

    function Jt(e, t, n) {
      Wt = e, lt(t, n || {}, Yt, zt, Kt, e), Wt = void 0;
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
          r = t + " hook";
      if (n) for (var i = 0, o = n.length; i < o; i++) {
        Ve(n[i], e, null, e, r);
      }
      e._hasHookEvent && e.$emit("hook:" + t), ve();
    }

    var nn = [],
        rn = [],
        on = {},
        an = !1,
        sn = !1,
        ln = 0;
    var cn = 0,
        un = Date.now;

    if (Y && !Q) {
      var fn = window.performance;
      fn && "function" == typeof fn.now && un() > document.createEvent("Event").timeStamp && (un = function un() {
        return fn.now();
      });
    }

    function dn() {
      var e, t;

      for (cn = un(), sn = !0, nn.sort(function (e, t) {
        return e.id - t.id;
      }), ln = 0; ln < nn.length; ln++) {
        (e = nn[ln]).before && e.before(), t = e.id, on[t] = null, e.run();
      }

      var n = rn.slice(),
          r = nn.slice();
      ln = nn.length = rn.length = 0, on = {}, an = sn = !1, function (e) {
        for (var t = 0; t < e.length; t++) {
          e[t]._inactive = !0, en(e[t], !0);
        }
      }(n), function (e) {
        var t = e.length;

        for (; t--;) {
          var n = e[t],
              r = n.vm;
          r._watcher === n && r._isMounted && !r._isDestroyed && tn(r, "updated");
        }
      }(r), ae && B.devtools && ae.emit("flush");
    }

    var pn = 0,
        hn = function hn(e, t, n, r, i) {
      this.vm = e, i && (e._watcher = this), e._watchers.push(this), r ? (this.deep = !!r.deep, this.user = !!r.user, this.lazy = !!r.lazy, this.sync = !!r.sync, this.before = r.before) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = n, this.id = ++pn, this.active = !0, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new le(), this.newDepIds = new le(), this.expression = "", "function" == typeof t ? this.getter = t : (this.getter = function (e) {
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
        this.deep && ot(e), ve(), this.cleanupDeps();
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

        if (null == on[t]) {
          if (on[t] = !0, sn) {
            for (var n = nn.length - 1; n > ln && nn[n].id > e.id;) {
              n--;
            }

            nn.splice(n + 1, 0, e);
          } else nn.push(e);

          an || (an = !0, rt(dn));
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
        this.vm._isBeingDestroyed || b(this.vm._watchers, this);

        for (var e = this.deps.length; e--;) {
          this.deps[e].removeSub(this);
        }

        this.active = !1;
      }
    };
    var vn = {
      enumerable: !0,
      configurable: !0,
      get: D,
      set: D
    };

    function gn(e, t, n) {
      vn.get = function () {
        return this[t][n];
      }, vn.set = function (e) {
        this[t][n] = e;
      }, Object.defineProperty(e, n, vn);
    }

    function mn(e) {
      e._watchers = [];
      var t = e.$options;
      t.props && function (e, t) {
        var n = e.$options.propsData || {},
            r = e._props = {},
            i = e.$options._propKeys = [];
        e.$parent && Te(!1);

        var o = function o(_o5) {
          i.push(_o5);
          var a = Be(_o5, t, n, e);
          xe(r, _o5, a), _o5 in e || gn(e, "_props", _o5);
        };

        for (var a in t) {
          o(a);
        }

        Te(!0);
      }(e, t.props), t.methods && function (e, t) {
        e.$options.props;

        for (var n in t) {
          e[n] = "function" != typeof t[n] ? D : x(t[n], e);
        }
      }(e, t.methods), t.data ? function (e) {
        var t = e.$options.data;
        u(t = e._data = "function" == typeof t ? function (e, t) {
          he();

          try {
            return e.call(t, t);
          } catch (e) {
            return Ge(e, t, "data()"), {};
          } finally {
            ve();
          }
        }(t, e) : t || {}) || (t = {});
        var n = Object.keys(t),
            r = e.$options.props,
            i = (e.$options.methods, n.length);

        for (; i--;) {
          var o = n[i];
          0, r && E(r, o) || W(o) || gn(e, "_data", o);
        }

        Ce(t, !0);
      }(e) : Ce(e._data = {}, !0), t.computed && function (e, t) {
        var n = e._computedWatchers = Object.create(null),
            r = oe();

        for (var i in t) {
          var o = t[i],
              a = "function" == typeof o ? o : o.get;
          0, r || (n[i] = new hn(e, a || D, D, yn)), i in e || bn(e, i, o);
        }
      }(e, t.computed), t.watch && t.watch !== ne && function (e, t) {
        for (var n in t) {
          var r = t[n];
          if (Array.isArray(r)) for (var i = 0; i < r.length; i++) {
            wn(e, n, r[i]);
          } else wn(e, n, r);
        }
      }(e, t.watch);
    }

    var yn = {
      lazy: !0
    };

    function bn(e, t, n) {
      var r = !oe();
      "function" == typeof n ? (vn.get = r ? _n(t) : En(n), vn.set = D) : (vn.get = n.get ? r && !1 !== n.cache ? _n(t) : En(n.get) : D, vn.set = n.set || D), Object.defineProperty(e, t, vn);
    }

    function _n(e) {
      return function () {
        var t = this._computedWatchers && this._computedWatchers[e];
        if (t) return t.dirty && t.evaluate(), de.target && t.depend(), t.value;
      };
    }

    function En(e) {
      return function () {
        return e.call(this, this);
      };
    }

    function wn(e, t, n, r) {
      return u(n) && (r = n, n = n.handler), "string" == typeof n && (n = e[n]), e.$watch(t, n, r);
    }

    var Sn = 0;

    function An(e) {
      var t = e.options;

      if (e["super"]) {
        var n = An(e["super"]);

        if (n !== e.superOptions) {
          e.superOptions = n;

          var r = function (e) {
            var t,
                n = e.options,
                r = e.sealedOptions;

            for (var i in n) {
              n[i] !== r[i] && (t || (t = {}), t[i] = n[i]);
            }

            return t;
          }(e);

          r && M(e.extendOptions, r), (t = e.options = je(n, e.extendOptions)).name && (t.components[t.name] = e);
        }
      }

      return t;
    }

    function Tn(e) {
      this._init(e);
    }

    function kn(e) {
      e.cid = 0;
      var t = 1;

      e.extend = function (e) {
        e = e || {};
        var n = this,
            r = n.cid,
            i = e._Ctor || (e._Ctor = {});
        if (i[r]) return i[r];
        var o = e.name || n.options.name;

        var a = function a(e) {
          this._init(e);
        };

        return (a.prototype = Object.create(n.prototype)).constructor = a, a.cid = t++, a.options = je(n.options, e), a["super"] = n, a.options.props && function (e) {
          var t = e.options.props;

          for (var n in t) {
            gn(e.prototype, "_props", n);
          }
        }(a), a.options.computed && function (e) {
          var t = e.options.computed;

          for (var n in t) {
            bn(e.prototype, n, t[n]);
          }
        }(a), a.extend = n.extend, a.mixin = n.mixin, a.use = n.use, j.forEach(function (e) {
          a[e] = n[e];
        }), o && (a.options.components[o] = a), a.superOptions = n.options, a.extendOptions = e, a.sealedOptions = M({}, a.options), i[r] = a, a;
      };
    }

    function Cn(e) {
      return e && (e.Ctor.options.name || e.tag);
    }

    function xn(e, t) {
      return Array.isArray(e) ? e.indexOf(t) > -1 : "string" == typeof e ? e.split(",").indexOf(t) > -1 : !!f(e) && e.test(t);
    }

    function In(e, t) {
      var n = e.cache,
          r = e.keys,
          i = e._vnode;

      for (var o in n) {
        var a = n[o];

        if (a) {
          var s = Cn(a.componentOptions);
          s && !t(s) && Mn(n, o, r, i);
        }
      }
    }

    function Mn(e, t, n, r) {
      var i = e[t];
      !i || r && i.tag === r.tag || i.componentInstance.$destroy(), e[t] = null, b(n, t);
    }

    !function (e) {
      e.prototype._init = function (e) {
        var t = this;
        t._uid = Sn++, t._isVue = !0, e && e._isComponent ? function (e, t) {
          var n = e.$options = Object.create(e.constructor.options),
              r = t._parentVnode;
          n.parent = t.parent, n._parentVnode = r;
          var i = r.componentOptions;
          n.propsData = i.propsData, n._parentListeners = i.listeners, n._renderChildren = i.children, n._componentTag = i.tag, t.render && (n.render = t.render, n.staticRenderFns = t.staticRenderFns);
        }(t, e) : t.$options = je(An(t.constructor), e || {}, t), t._renderProxy = t, t._self = t, function (e) {
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
              i = n && n.context;
          e.$slots = ht(t._renderChildren, i), e.$scopedSlots = r, e._c = function (t, n, r, i) {
            return Ut(e, t, n, r, i, !1);
          }, e.$createElement = function (t, n, r, i) {
            return Ut(e, t, n, r, i, !0);
          };
          var o = n && n.data;
          xe(e, "$attrs", o && o.attrs || r, null, !0), xe(e, "$listeners", t._parentListeners || r, null, !0);
        }(t), tn(t, "beforeCreate"), function (e) {
          var t = pt(e.$options.inject, e);
          t && (Te(!1), Object.keys(t).forEach(function (n) {
            xe(e, n, t[n]);
          }), Te(!0));
        }(t), mn(t), function (e) {
          var t = e.$options.provide;
          t && (e._provided = "function" == typeof t ? t.call(e) : t);
        }(t), tn(t, "created"), t.$options.el && t.$mount(t.$options.el);
      };
    }(Tn), function (e) {
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
      Object.defineProperty(e.prototype, "$data", t), Object.defineProperty(e.prototype, "$props", n), e.prototype.$set = Ie, e.prototype.$delete = Me, e.prototype.$watch = function (e, t, n) {
        if (u(t)) return wn(this, e, t, n);
        (n = n || {}).user = !0;
        var r = new hn(this, e, t, n);
        if (n.immediate) try {
          t.call(this, r.value);
        } catch (e) {
          Ge(e, this, 'callback for immediate watcher "' + r.expression + '"');
        }
        return function () {
          r.teardown();
        };
      };
    }(Tn), function (e) {
      var t = /^hook:/;
      e.prototype.$on = function (e, n) {
        var r = this;
        if (Array.isArray(e)) for (var i = 0, o = e.length; i < o; i++) {
          r.$on(e[i], n);
        } else (r._events[e] || (r._events[e] = [])).push(n), t.test(e) && (r._hasHookEvent = !0);
        return r;
      }, e.prototype.$once = function (e, t) {
        var n = this;

        function r() {
          n.$off(e, r), t.apply(n, arguments);
        }

        return r.fn = t, n.$on(e, r), n;
      }, e.prototype.$off = function (e, t) {
        var n = this;
        if (!arguments.length) return n._events = Object.create(null), n;

        if (Array.isArray(e)) {
          for (var r = 0, i = e.length; r < i; r++) {
            n.$off(e[r], t);
          }

          return n;
        }

        var o,
            a = n._events[e];
        if (!a) return n;
        if (!t) return n._events[e] = null, n;

        for (var s = a.length; s--;) {
          if ((o = a[s]) === t || o.fn === t) {
            a.splice(s, 1);
            break;
          }
        }

        return n;
      }, e.prototype.$emit = function (e) {
        var t = this,
            n = t._events[e];

        if (n) {
          n = n.length > 1 ? I(n) : n;

          for (var r = I(arguments, 1), i = 'event handler for "' + e + '"', o = 0, a = n.length; o < a; o++) {
            Ve(n[o], t, r, t, i);
          }
        }

        return t;
      };
    }(Tn), function (e) {
      e.prototype._update = function (e, t) {
        var n = this,
            r = n.$el,
            i = n._vnode,
            o = Xt(n);
        n._vnode = e, n.$el = i ? n.__patch__(i, e) : n.__patch__(n.$el, e, t, !1), o(), r && (r.__vue__ = null), n.$el && (n.$el.__vue__ = n), n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el);
      }, e.prototype.$forceUpdate = function () {
        this._watcher && this._watcher.update();
      }, e.prototype.$destroy = function () {
        var e = this;

        if (!e._isBeingDestroyed) {
          tn(e, "beforeDestroy"), e._isBeingDestroyed = !0;
          var t = e.$parent;
          !t || t._isBeingDestroyed || e.$options["abstract"] || b(t.$children, e), e._watcher && e._watcher.teardown();

          for (var n = e._watchers.length; n--;) {
            e._watchers[n].teardown();
          }

          e._data.__ob__ && e._data.__ob__.vmCount--, e._isDestroyed = !0, e.__patch__(e._vnode, null), tn(e, "destroyed"), e.$off(), e.$el && (e.$el.__vue__ = null), e.$vnode && (e.$vnode.parent = null);
        }
      };
    }(Tn), function (e) {
      Lt(e.prototype), e.prototype.$nextTick = function (e) {
        return rt(e, this);
      }, e.prototype._render = function () {
        var e,
            t = this,
            n = t.$options,
            r = n.render,
            i = n._parentVnode;
        i && (t.$scopedSlots = gt(i.data.scopedSlots, t.$slots, t.$scopedSlots)), t.$vnode = i;

        try {
          Ht = t, e = r.call(t._renderProxy, t.$createElement);
        } catch (n) {
          Ge(n, t, "render"), e = t._vnode;
        } finally {
          Ht = null;
        }

        return Array.isArray(e) && 1 === e.length && (e = e[0]), e instanceof ge || (e = ye()), e.parent = i, e;
      };
    }(Tn);
    var On = [String, RegExp, Array],
        Dn = {
      KeepAlive: {
        name: "keep-alive",
        "abstract": !0,
        props: {
          include: On,
          exclude: On,
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
            In(e, function (e) {
              return xn(t, e);
            });
          }), this.$watch("exclude", function (t) {
            In(e, function (e) {
              return !xn(t, e);
            });
          });
        },
        render: function render() {
          var e = this.$slots["default"],
              t = qt(e),
              n = t && t.componentOptions;

          if (n) {
            var r = Cn(n),
                i = this.include,
                o = this.exclude;
            if (i && (!r || !xn(i, r)) || o && r && xn(o, r)) return t;
            var a = this.cache,
                s = this.keys,
                l = null == t.key ? n.Ctor.cid + (n.tag ? "::" + n.tag : "") : t.key;
            a[l] ? (t.componentInstance = a[l].componentInstance, b(s, l), s.push(l)) : (a[l] = t, s.push(l), this.max && s.length > parseInt(this.max) && Mn(a, s[0], s, this._vnode)), t.data.keepAlive = !0;
          }

          return t || e && e[0];
        }
      }
    };
    !function (e) {
      var t = {
        get: function get() {
          return B;
        }
      };
      Object.defineProperty(e, "config", t), e.util = {
        warn: ue,
        extend: M,
        mergeOptions: je,
        defineReactive: xe
      }, e.set = Ie, e["delete"] = Me, e.nextTick = rt, e.observable = function (e) {
        return Ce(e), e;
      }, e.options = Object.create(null), j.forEach(function (t) {
        e.options[t + "s"] = Object.create(null);
      }), e.options._base = e, M(e.options.components, Dn), function (e) {
        e.use = function (e) {
          var t = this._installedPlugins || (this._installedPlugins = []);
          if (t.indexOf(e) > -1) return this;
          var n = I(arguments, 1);
          return n.unshift(this), "function" == typeof e.install ? e.install.apply(e, n) : "function" == typeof e && e.apply(null, n), t.push(e), this;
        };
      }(e), function (e) {
        e.mixin = function (e) {
          return this.options = je(this.options, e), this;
        };
      }(e), kn(e), function (e) {
        j.forEach(function (t) {
          e[t] = function (e, n) {
            return n ? ("component" === t && u(n) && (n.name = n.name || e, n = this.options._base.extend(n)), "directive" === t && "function" == typeof n && (n = {
              bind: n,
              update: n
            }), this.options[t + "s"][e] = n, n) : this.options[t + "s"][e];
          };
        });
      }(e);
    }(Tn), Object.defineProperty(Tn.prototype, "$isServer", {
      get: oe
    }), Object.defineProperty(Tn.prototype, "$ssrContext", {
      get: function get() {
        return this.$vnode && this.$vnode.ssrContext;
      }
    }), Object.defineProperty(Tn, "FunctionalRenderContext", {
      value: Rt
    }), Tn.version = "2.6.12";

    var Ln = g("style,class"),
        Rn = g("input,textarea,option,select,progress"),
        Nn = function Nn(e, t, n) {
      return "value" === n && Rn(e) && "button" !== t || "selected" === n && "option" === e || "checked" === n && "input" === e || "muted" === n && "video" === e;
    },
        $n = g("contenteditable,draggable,spellcheck"),
        Fn = g("events,caret,typing,plaintext-only"),
        jn = g("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),
        Pn = "http://www.w3.org/1999/xlink",
        Bn = function Bn(e) {
      return ":" === e.charAt(5) && "xlink" === e.slice(0, 5);
    },
        Un = function Un(e) {
      return Bn(e) ? e.slice(6, e.length) : "";
    },
        Wn = function Wn(e) {
      return null == e || !1 === e;
    };

    function Hn(e) {
      for (var t = e.data, n = e, r = e; o(r.componentInstance);) {
        (r = r.componentInstance._vnode) && r.data && (t = Gn(r.data, t));
      }

      for (; o(n = n.parent);) {
        n && n.data && (t = Gn(t, n.data));
      }

      return function (e, t) {
        if (o(e) || o(t)) return Vn(e, qn(t));
        return "";
      }(t.staticClass, t["class"]);
    }

    function Gn(e, t) {
      return {
        staticClass: Vn(e.staticClass, t.staticClass),
        "class": o(e["class"]) ? [e["class"], t["class"]] : t["class"]
      };
    }

    function Vn(e, t) {
      return e ? t ? e + " " + t : e : t || "";
    }

    function qn(e) {
      return Array.isArray(e) ? function (e) {
        for (var t, n = "", r = 0, i = e.length; r < i; r++) {
          o(t = qn(e[r])) && "" !== t && (n && (n += " "), n += t);
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

    var Yn = {
      svg: "http://www.w3.org/2000/svg",
      math: "http://www.w3.org/1998/Math/MathML"
    },
        zn = g("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),
        Kn = g("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0),
        Jn = function Jn(e) {
      return zn(e) || Kn(e);
    };

    function Qn(e) {
      return Kn(e) ? "svg" : "math" === e ? "math" : void 0;
    }

    var Xn = Object.create(null);
    var Zn = g("text,number,password,search,email,tel,url");

    function er(e) {
      if ("string" == typeof e) {
        var t = document.querySelector(e);
        return t || document.createElement("div");
      }

      return e;
    }

    var tr = Object.freeze({
      createElement: function createElement(e, t) {
        var n = document.createElement(e);
        return "select" !== e || t.data && t.data.attrs && void 0 !== t.data.attrs.multiple && n.setAttribute("multiple", "multiple"), n;
      },
      createElementNS: function createElementNS(e, t) {
        return document.createElementNS(Yn[e], t);
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
        nr = {
      create: function create(e, t) {
        rr(t);
      },
      update: function update(e, t) {
        e.data.ref !== t.data.ref && (rr(e, !0), rr(t));
      },
      destroy: function destroy(e) {
        rr(e, !0);
      }
    };

    function rr(e, t) {
      var n = e.data.ref;

      if (o(n)) {
        var r = e.context,
            i = e.componentInstance || e.elm,
            a = r.$refs;
        t ? Array.isArray(a[n]) ? b(a[n], i) : a[n] === i && (a[n] = void 0) : e.data.refInFor ? Array.isArray(a[n]) ? a[n].indexOf(i) < 0 && a[n].push(i) : a[n] = [i] : a[n] = i;
      }
    }

    var ir = new ge("", {}, []),
        or = ["create", "activate", "update", "remove", "destroy"];

    function ar(e, t) {
      return e.key === t.key && (e.tag === t.tag && e.isComment === t.isComment && o(e.data) === o(t.data) && function (e, t) {
        if ("input" !== e.tag) return !0;
        var n,
            r = o(n = e.data) && o(n = n.attrs) && n.type,
            i = o(n = t.data) && o(n = n.attrs) && n.type;
        return r === i || Zn(r) && Zn(i);
      }(e, t) || a(e.isAsyncPlaceholder) && e.asyncFactory === t.asyncFactory && i(t.asyncFactory.error));
    }

    function sr(e, t, n) {
      var r,
          i,
          a = {};

      for (r = t; r <= n; ++r) {
        o(i = e[r].key) && (a[i] = r);
      }

      return a;
    }

    var lr = {
      create: cr,
      update: cr,
      destroy: function destroy(e) {
        cr(e, ir);
      }
    };

    function cr(e, t) {
      (e.data.directives || t.data.directives) && function (e, t) {
        var n,
            r,
            i,
            o = e === ir,
            a = t === ir,
            s = fr(e.data.directives, e.context),
            l = fr(t.data.directives, t.context),
            c = [],
            u = [];

        for (n in l) {
          r = s[n], i = l[n], r ? (i.oldValue = r.value, i.oldArg = r.arg, pr(i, "update", t, e), i.def && i.def.componentUpdated && u.push(i)) : (pr(i, "bind", t, e), i.def && i.def.inserted && c.push(i));
        }

        if (c.length) {
          var f = function f() {
            for (var n = 0; n < c.length; n++) {
              pr(c[n], "inserted", t, e);
            }
          };

          o ? ct(t, "insert", f) : f();
        }

        u.length && ct(t, "postpatch", function () {
          for (var n = 0; n < u.length; n++) {
            pr(u[n], "componentUpdated", t, e);
          }
        });
        if (!o) for (n in s) {
          l[n] || pr(s[n], "unbind", e, e, a);
        }
      }(e, t);
    }

    var ur = Object.create(null);

    function fr(e, t) {
      var n,
          r,
          i = Object.create(null);
      if (!e) return i;

      for (n = 0; n < e.length; n++) {
        (r = e[n]).modifiers || (r.modifiers = ur), i[dr(r)] = r, r.def = Pe(t.$options, "directives", r.name);
      }

      return i;
    }

    function dr(e) {
      return e.rawName || e.name + "." + Object.keys(e.modifiers || {}).join(".");
    }

    function pr(e, t, n, r, i) {
      var o = e.def && e.def[t];
      if (o) try {
        o(n.elm, e, n, r, i);
      } catch (r) {
        Ge(r, n.context, "directive " + e.name + " " + t + " hook");
      }
    }

    var hr = [nr, lr];

    function vr(e, t) {
      var n = t.componentOptions;

      if (!(o(n) && !1 === n.Ctor.options.inheritAttrs || i(e.data.attrs) && i(t.data.attrs))) {
        var r,
            a,
            s = t.elm,
            l = e.data.attrs || {},
            c = t.data.attrs || {};

        for (r in o(c.__ob__) && (c = t.data.attrs = M({}, c)), c) {
          a = c[r], l[r] !== a && gr(s, r, a);
        }

        for (r in (Q || Z) && c.value !== l.value && gr(s, "value", c.value), l) {
          i(c[r]) && (Bn(r) ? s.removeAttributeNS(Pn, Un(r)) : $n(r) || s.removeAttribute(r));
        }
      }
    }

    function gr(e, t, n) {
      e.tagName.indexOf("-") > -1 ? mr(e, t, n) : jn(t) ? Wn(n) ? e.removeAttribute(t) : (n = "allowfullscreen" === t && "EMBED" === e.tagName ? "true" : t, e.setAttribute(t, n)) : $n(t) ? e.setAttribute(t, function (e, t) {
        return Wn(t) || "false" === t ? "false" : "contenteditable" === e && Fn(t) ? t : "true";
      }(t, n)) : Bn(t) ? Wn(n) ? e.removeAttributeNS(Pn, Un(t)) : e.setAttributeNS(Pn, t, n) : mr(e, t, n);
    }

    function mr(e, t, n) {
      if (Wn(n)) e.removeAttribute(t);else {
        if (Q && !X && "TEXTAREA" === e.tagName && "placeholder" === t && "" !== n && !e.__ieph) {
          var r = function r(t) {
            t.stopImmediatePropagation(), e.removeEventListener("input", r);
          };

          e.addEventListener("input", r), e.__ieph = !0;
        }

        e.setAttribute(t, n);
      }
    }

    var yr = {
      create: vr,
      update: vr
    };

    function br(e, t) {
      var n = t.elm,
          r = t.data,
          a = e.data;

      if (!(i(r.staticClass) && i(r["class"]) && (i(a) || i(a.staticClass) && i(a["class"])))) {
        var s = Hn(t),
            l = n._transitionClasses;
        o(l) && (s = Vn(s, qn(l))), s !== n._prevClass && (n.setAttribute("class", s), n._prevClass = s);
      }
    }

    var _r,
        Er,
        wr,
        Sr,
        Ar,
        Tr,
        kr = {
      create: br,
      update: br
    },
        Cr = /[\w).+\-_$\]]/;

    function xr(e) {
      var t,
          n,
          r,
          i,
          o,
          a = !1,
          s = !1,
          l = !1,
          c = !1,
          u = 0,
          f = 0,
          d = 0,
          p = 0;

      for (r = 0; r < e.length; r++) {
        if (n = t, t = e.charCodeAt(r), a) 39 === t && 92 !== n && (a = !1);else if (s) 34 === t && 92 !== n && (s = !1);else if (l) 96 === t && 92 !== n && (l = !1);else if (c) 47 === t && 92 !== n && (c = !1);else if (124 !== t || 124 === e.charCodeAt(r + 1) || 124 === e.charCodeAt(r - 1) || u || f || d) {
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
              d++;
              break;

            case 41:
              d--;
              break;

            case 91:
              f++;
              break;

            case 93:
              f--;
              break;

            case 123:
              u++;
              break;

            case 125:
              u--;
          }

          if (47 === t) {
            for (var h = r - 1, v = void 0; h >= 0 && " " === (v = e.charAt(h)); h--) {
              ;
            }

            v && Cr.test(v) || (c = !0);
          }
        } else void 0 === i ? (p = r + 1, i = e.slice(0, r).trim()) : g();
      }

      function g() {
        (o || (o = [])).push(e.slice(p, r).trim()), p = r + 1;
      }

      if (void 0 === i ? i = e.slice(0, r).trim() : 0 !== p && g(), o) for (r = 0; r < o.length; r++) {
        i = Ir(i, o[r]);
      }
      return i;
    }

    function Ir(e, t) {
      var n = t.indexOf("(");
      if (n < 0) return '_f("' + t + '")(' + e + ")";
      var r = t.slice(0, n),
          i = t.slice(n + 1);
      return '_f("' + r + '")(' + e + (")" !== i ? "," + i : i);
    }

    function Mr(e, t) {
      console.error("[Vue compiler]: " + e);
    }

    function Or(e, t) {
      return e ? e.map(function (e) {
        return e[t];
      }).filter(function (e) {
        return e;
      }) : [];
    }

    function Dr(e, t, n, r, i) {
      (e.props || (e.props = [])).push(Ur({
        name: t,
        value: n,
        dynamic: i
      }, r)), e.plain = !1;
    }

    function Lr(e, t, n, r, i) {
      (i ? e.dynamicAttrs || (e.dynamicAttrs = []) : e.attrs || (e.attrs = [])).push(Ur({
        name: t,
        value: n,
        dynamic: i
      }, r)), e.plain = !1;
    }

    function Rr(e, t, n, r) {
      e.attrsMap[t] = n, e.attrsList.push(Ur({
        name: t,
        value: n
      }, r));
    }

    function Nr(e, t, n, r, i, o, a, s) {
      (e.directives || (e.directives = [])).push(Ur({
        name: t,
        rawName: n,
        value: r,
        arg: i,
        isDynamicArg: o,
        modifiers: a
      }, s)), e.plain = !1;
    }

    function $r(e, t, n) {
      return n ? "_p(" + t + ',"' + e + '")' : e + t;
    }

    function Fr(e, t, n, i, o, a, s, l) {
      var c;
      (i = i || r).right ? l ? t = "(" + t + ")==='click'?'contextmenu':(" + t + ")" : "click" === t && (t = "contextmenu", delete i.right) : i.middle && (l ? t = "(" + t + ")==='click'?'mouseup':(" + t + ")" : "click" === t && (t = "mouseup")), i.capture && (delete i.capture, t = $r("!", t, l)), i.once && (delete i.once, t = $r("~", t, l)), i.passive && (delete i.passive, t = $r("&", t, l)), i["native"] ? (delete i["native"], c = e.nativeEvents || (e.nativeEvents = {})) : c = e.events || (e.events = {});
      var u = Ur({
        value: n.trim(),
        dynamic: l
      }, s);
      i !== r && (u.modifiers = i);
      var f = c[t];
      Array.isArray(f) ? o ? f.unshift(u) : f.push(u) : c[t] = f ? o ? [u, f] : [f, u] : u, e.plain = !1;
    }

    function jr(e, t, n) {
      var r = Pr(e, ":" + t) || Pr(e, "v-bind:" + t);
      if (null != r) return xr(r);

      if (!1 !== n) {
        var i = Pr(e, t);
        if (null != i) return JSON.stringify(i);
      }
    }

    function Pr(e, t, n) {
      var r;
      if (null != (r = e.attrsMap[t])) for (var i = e.attrsList, o = 0, a = i.length; o < a; o++) {
        if (i[o].name === t) {
          i.splice(o, 1);
          break;
        }
      }
      return n && delete e.attrsMap[t], r;
    }

    function Br(e, t) {
      for (var n = e.attrsList, r = 0, i = n.length; r < i; r++) {
        var o = n[r];
        if (t.test(o.name)) return n.splice(r, 1), o;
      }
    }

    function Ur(e, t) {
      return t && (null != t.start && (e.start = t.start), null != t.end && (e.end = t.end)), e;
    }

    function Wr(e, t, n) {
      var r = n || {},
          i = r.number,
          o = "$$v";
      r.trim && (o = "(typeof $$v === 'string'? $$v.trim(): $$v)"), i && (o = "_n(" + o + ")");
      var a = Hr(t, o);
      e.model = {
        value: "(" + t + ")",
        expression: JSON.stringify(t),
        callback: "function ($$v) {" + a + "}"
      };
    }

    function Hr(e, t) {
      var n = function (e) {
        if (e = e.trim(), _r = e.length, e.indexOf("[") < 0 || e.lastIndexOf("]") < _r - 1) return (Sr = e.lastIndexOf(".")) > -1 ? {
          exp: e.slice(0, Sr),
          key: '"' + e.slice(Sr + 1) + '"'
        } : {
          exp: e,
          key: null
        };
        Er = e, Sr = Ar = Tr = 0;

        for (; !Vr();) {
          qr(wr = Gr()) ? zr(wr) : 91 === wr && Yr(wr);
        }

        return {
          exp: e.slice(0, Ar),
          key: e.slice(Ar + 1, Tr)
        };
      }(e);

      return null === n.key ? e + "=" + t : "$set(" + n.exp + ", " + n.key + ", " + t + ")";
    }

    function Gr() {
      return Er.charCodeAt(++Sr);
    }

    function Vr() {
      return Sr >= _r;
    }

    function qr(e) {
      return 34 === e || 39 === e;
    }

    function Yr(e) {
      var t = 1;

      for (Ar = Sr; !Vr();) {
        if (qr(e = Gr())) zr(e);else if (91 === e && t++, 93 === e && t--, 0 === t) {
          Tr = Sr;
          break;
        }
      }
    }

    function zr(e) {
      for (var t = e; !Vr() && (e = Gr()) !== t;) {
        ;
      }
    }

    var Kr;

    function Jr(e, t, n) {
      var r = Kr;
      return function i() {
        var o = t.apply(null, arguments);
        null !== o && Zr(e, i, n, r);
      };
    }

    var Qr = Ke && !(te && Number(te[1]) <= 53);

    function Xr(e, t, n, r) {
      if (Qr) {
        var i = cn,
            o = t;

        t = o._wrapper = function (e) {
          if (e.target === e.currentTarget || e.timeStamp >= i || e.timeStamp <= 0 || e.target.ownerDocument !== document) return o.apply(this, arguments);
        };
      }

      Kr.addEventListener(e, t, re ? {
        capture: n,
        passive: r
      } : n);
    }

    function Zr(e, t, n, r) {
      (r || Kr).removeEventListener(e, t._wrapper || t, n);
    }

    function ei(e, t) {
      if (!i(e.data.on) || !i(t.data.on)) {
        var n = t.data.on || {},
            r = e.data.on || {};
        Kr = t.elm, function (e) {
          if (o(e.__r)) {
            var t = Q ? "change" : "input";
            e[t] = [].concat(e.__r, e[t] || []), delete e.__r;
          }

          o(e.__c) && (e.change = [].concat(e.__c, e.change || []), delete e.__c);
        }(n), lt(n, r, Xr, Zr, Jr, t.context), Kr = void 0;
      }
    }

    var ti,
        ni = {
      create: ei,
      update: ei
    };

    function ri(e, t) {
      if (!i(e.data.domProps) || !i(t.data.domProps)) {
        var n,
            r,
            a = t.elm,
            s = e.data.domProps || {},
            l = t.data.domProps || {};

        for (n in o(l.__ob__) && (l = t.data.domProps = M({}, l)), s) {
          n in l || (a[n] = "");
        }

        for (n in l) {
          if (r = l[n], "textContent" === n || "innerHTML" === n) {
            if (t.children && (t.children.length = 0), r === s[n]) continue;
            1 === a.childNodes.length && a.removeChild(a.childNodes[0]);
          }

          if ("value" === n && "PROGRESS" !== a.tagName) {
            a._value = r;
            var c = i(r) ? "" : String(r);
            ii(a, c) && (a.value = c);
          } else if ("innerHTML" === n && Kn(a.tagName) && i(a.innerHTML)) {
            (ti = ti || document.createElement("div")).innerHTML = "<svg>" + r + "</svg>";

            for (var u = ti.firstChild; a.firstChild;) {
              a.removeChild(a.firstChild);
            }

            for (; u.firstChild;) {
              a.appendChild(u.firstChild);
            }
          } else if (r !== s[n]) try {
            a[n] = r;
          } catch (e) {}
        }
      }
    }

    function ii(e, t) {
      return !e.composing && ("OPTION" === e.tagName || function (e, t) {
        var n = !0;

        try {
          n = document.activeElement !== e;
        } catch (e) {}

        return n && e.value !== t;
      }(e, t) || function (e, t) {
        var n = e.value,
            r = e._vModifiers;

        if (o(r)) {
          if (r.number) return v(n) !== v(t);
          if (r.trim) return n.trim() !== t.trim();
        }

        return n !== t;
      }(e, t));
    }

    var oi = {
      create: ri,
      update: ri
    },
        ai = w(function (e) {
      var t = {},
          n = /:(.+)/;
      return e.split(/;(?![^(]*\))/g).forEach(function (e) {
        if (e) {
          var r = e.split(n);
          r.length > 1 && (t[r[0].trim()] = r[1].trim());
        }
      }), t;
    });

    function si(e) {
      var t = li(e.style);
      return e.staticStyle ? M(e.staticStyle, t) : t;
    }

    function li(e) {
      return Array.isArray(e) ? O(e) : "string" == typeof e ? ai(e) : e;
    }

    var ci,
        ui = /^--/,
        fi = /\s*!important$/,
        di = function di(e, t, n) {
      if (ui.test(t)) e.style.setProperty(t, n);else if (fi.test(n)) e.style.setProperty(C(t), n.replace(fi, ""), "important");else {
        var r = hi(t);
        if (Array.isArray(n)) for (var i = 0, o = n.length; i < o; i++) {
          e.style[r] = n[i];
        } else e.style[r] = n;
      }
    },
        pi = ["Webkit", "Moz", "ms"],
        hi = w(function (e) {
      if (ci = ci || document.createElement("div").style, "filter" !== (e = A(e)) && e in ci) return e;

      for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < pi.length; n++) {
        var r = pi[n] + t;
        if (r in ci) return r;
      }
    });

    function vi(e, t) {
      var n = t.data,
          r = e.data;

      if (!(i(n.staticStyle) && i(n.style) && i(r.staticStyle) && i(r.style))) {
        var a,
            s,
            l = t.elm,
            c = r.staticStyle,
            u = r.normalizedStyle || r.style || {},
            f = c || u,
            d = li(t.data.style) || {};
        t.data.normalizedStyle = o(d.__ob__) ? M({}, d) : d;

        var p = function (e, t) {
          var n,
              r = {};
          if (t) for (var i = e; i.componentInstance;) {
            (i = i.componentInstance._vnode) && i.data && (n = si(i.data)) && M(r, n);
          }
          (n = si(e.data)) && M(r, n);

          for (var o = e; o = o.parent;) {
            o.data && (n = si(o.data)) && M(r, n);
          }

          return r;
        }(t, !0);

        for (s in f) {
          i(p[s]) && di(l, s, "");
        }

        for (s in p) {
          (a = p[s]) !== f[s] && di(l, s, null == a ? "" : a);
        }
      }
    }

    var gi = {
      create: vi,
      update: vi
    },
        mi = /\s+/;

    function yi(e, t) {
      if (t && (t = t.trim())) if (e.classList) t.indexOf(" ") > -1 ? t.split(mi).forEach(function (t) {
        return e.classList.add(t);
      }) : e.classList.add(t);else {
        var n = " " + (e.getAttribute("class") || "") + " ";
        n.indexOf(" " + t + " ") < 0 && e.setAttribute("class", (n + t).trim());
      }
    }

    function bi(e, t) {
      if (t && (t = t.trim())) if (e.classList) t.indexOf(" ") > -1 ? t.split(mi).forEach(function (t) {
        return e.classList.remove(t);
      }) : e.classList.remove(t), e.classList.length || e.removeAttribute("class");else {
        for (var n = " " + (e.getAttribute("class") || "") + " ", r = " " + t + " "; n.indexOf(r) >= 0;) {
          n = n.replace(r, " ");
        }

        (n = n.trim()) ? e.setAttribute("class", n) : e.removeAttribute("class");
      }
    }

    function _i(e) {
      if (e) {
        if ("object" == _typeof(e)) {
          var t = {};
          return !1 !== e.css && M(t, Ei(e.name || "v")), M(t, e), t;
        }

        return "string" == typeof e ? Ei(e) : void 0;
      }
    }

    var Ei = w(function (e) {
      return {
        enterClass: e + "-enter",
        enterToClass: e + "-enter-to",
        enterActiveClass: e + "-enter-active",
        leaveClass: e + "-leave",
        leaveToClass: e + "-leave-to",
        leaveActiveClass: e + "-leave-active"
      };
    }),
        wi = Y && !X,
        Si = "transition",
        Ai = "transitionend",
        Ti = "animation",
        ki = "animationend";
    wi && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (Si = "WebkitTransition", Ai = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (Ti = "WebkitAnimation", ki = "webkitAnimationEnd"));
    var Ci = Y ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : function (e) {
      return e();
    };

    function xi(e) {
      Ci(function () {
        Ci(e);
      });
    }

    function Ii(e, t) {
      var n = e._transitionClasses || (e._transitionClasses = []);
      n.indexOf(t) < 0 && (n.push(t), yi(e, t));
    }

    function Mi(e, t) {
      e._transitionClasses && b(e._transitionClasses, t), bi(e, t);
    }

    function Oi(e, t, n) {
      var r = Li(e, t),
          i = r.type,
          o = r.timeout,
          a = r.propCount;
      if (!i) return n();

      var s = "transition" === i ? Ai : ki,
          l = 0,
          c = function c() {
        e.removeEventListener(s, u), n();
      },
          u = function u(t) {
        t.target === e && ++l >= a && c();
      };

      setTimeout(function () {
        l < a && c();
      }, o + 1), e.addEventListener(s, u);
    }

    var Di = /\b(transform|all)(,|$)/;

    function Li(e, t) {
      var n,
          r = window.getComputedStyle(e),
          i = (r[Si + "Delay"] || "").split(", "),
          o = (r[Si + "Duration"] || "").split(", "),
          a = Ri(i, o),
          s = (r[Ti + "Delay"] || "").split(", "),
          l = (r[Ti + "Duration"] || "").split(", "),
          c = Ri(s, l),
          u = 0,
          f = 0;
      return "transition" === t ? a > 0 && (n = "transition", u = a, f = o.length) : "animation" === t ? c > 0 && (n = "animation", u = c, f = l.length) : f = (n = (u = Math.max(a, c)) > 0 ? a > c ? "transition" : "animation" : null) ? "transition" === n ? o.length : l.length : 0, {
        type: n,
        timeout: u,
        propCount: f,
        hasTransform: "transition" === n && Di.test(r[Si + "Property"])
      };
    }

    function Ri(e, t) {
      for (; e.length < t.length;) {
        e = e.concat(e);
      }

      return Math.max.apply(null, t.map(function (t, n) {
        return Ni(t) + Ni(e[n]);
      }));
    }

    function Ni(e) {
      return 1e3 * Number(e.slice(0, -1).replace(",", "."));
    }

    function $i(e, t) {
      var n = e.elm;
      o(n._leaveCb) && (n._leaveCb.cancelled = !0, n._leaveCb());

      var r = _i(e.data.transition);

      if (!i(r) && !o(n._enterCb) && 1 === n.nodeType) {
        for (var a = r.css, s = r.type, c = r.enterClass, u = r.enterToClass, f = r.enterActiveClass, d = r.appearClass, p = r.appearToClass, h = r.appearActiveClass, g = r.beforeEnter, m = r.enter, y = r.afterEnter, b = r.enterCancelled, _ = r.beforeAppear, E = r.appear, w = r.afterAppear, S = r.appearCancelled, A = r.duration, T = Qt, k = Qt.$vnode; k && k.parent;) {
          T = k.context, k = k.parent;
        }

        var C = !T._isMounted || !e.isRootInsert;

        if (!C || E || "" === E) {
          var x = C && d ? d : c,
              I = C && h ? h : f,
              M = C && p ? p : u,
              O = C && _ || g,
              D = C && "function" == typeof E ? E : m,
              L = C && w || y,
              R = C && S || b,
              N = v(l(A) ? A.enter : A);
          0;
          var $ = !1 !== a && !X,
              j = Pi(D),
              P = n._enterCb = F(function () {
            $ && (Mi(n, M), Mi(n, I)), P.cancelled ? ($ && Mi(n, x), R && R(n)) : L && L(n), n._enterCb = null;
          });
          e.data.show || ct(e, "insert", function () {
            var t = n.parentNode,
                r = t && t._pending && t._pending[e.key];
            r && r.tag === e.tag && r.elm._leaveCb && r.elm._leaveCb(), D && D(n, P);
          }), O && O(n), $ && (Ii(n, x), Ii(n, I), xi(function () {
            Mi(n, x), P.cancelled || (Ii(n, M), j || (ji(N) ? setTimeout(P, N) : Oi(n, s, P)));
          })), e.data.show && (t && t(), D && D(n, P)), $ || j || P();
        }
      }
    }

    function Fi(e, t) {
      var n = e.elm;
      o(n._enterCb) && (n._enterCb.cancelled = !0, n._enterCb());

      var r = _i(e.data.transition);

      if (i(r) || 1 !== n.nodeType) return t();

      if (!o(n._leaveCb)) {
        var a = r.css,
            s = r.type,
            c = r.leaveClass,
            u = r.leaveToClass,
            f = r.leaveActiveClass,
            d = r.beforeLeave,
            p = r.leave,
            h = r.afterLeave,
            g = r.leaveCancelled,
            m = r.delayLeave,
            y = r.duration,
            b = !1 !== a && !X,
            _ = Pi(p),
            E = v(l(y) ? y.leave : y);

        0;
        var w = n._leaveCb = F(function () {
          n.parentNode && n.parentNode._pending && (n.parentNode._pending[e.key] = null), b && (Mi(n, u), Mi(n, f)), w.cancelled ? (b && Mi(n, c), g && g(n)) : (t(), h && h(n)), n._leaveCb = null;
        });
        m ? m(S) : S();
      }

      function S() {
        w.cancelled || (!e.data.show && n.parentNode && ((n.parentNode._pending || (n.parentNode._pending = {}))[e.key] = e), d && d(n), b && (Ii(n, c), Ii(n, f), xi(function () {
          Mi(n, c), w.cancelled || (Ii(n, u), _ || (ji(E) ? setTimeout(w, E) : Oi(n, s, w)));
        })), p && p(n, w), b || _ || w());
      }
    }

    function ji(e) {
      return "number" == typeof e && !isNaN(e);
    }

    function Pi(e) {
      if (i(e)) return !1;
      var t = e.fns;
      return o(t) ? Pi(Array.isArray(t) ? t[0] : t) : (e._length || e.length) > 1;
    }

    function Bi(e, t) {
      !0 !== t.data.show && $i(t);
    }

    var Ui = function (e) {
      var t,
          n,
          r = {},
          l = e.modules,
          c = e.nodeOps;

      for (t = 0; t < or.length; ++t) {
        for (r[or[t]] = [], n = 0; n < l.length; ++n) {
          o(l[n][or[t]]) && r[or[t]].push(l[n][or[t]]);
        }
      }

      function u(e) {
        var t = c.parentNode(e);
        o(t) && c.removeChild(t, e);
      }

      function f(e, t, n, i, s, l, u) {
        if (o(e.elm) && o(l) && (e = l[u] = _e(e)), e.isRootInsert = !s, !function (e, t, n, i) {
          var s = e.data;

          if (o(s)) {
            var l = o(e.componentInstance) && s.keepAlive;
            if (o(s = s.hook) && o(s = s.init) && s(e, !1), o(e.componentInstance)) return d(e, t), p(n, e.elm, i), a(l) && function (e, t, n, i) {
              var a,
                  s = e;

              for (; s.componentInstance;) {
                if (s = s.componentInstance._vnode, o(a = s.data) && o(a = a.transition)) {
                  for (a = 0; a < r.activate.length; ++a) {
                    r.activate[a](ir, s);
                  }

                  t.push(s);
                  break;
                }
              }

              p(n, e.elm, i);
            }(e, t, n, i), !0;
          }
        }(e, t, n, i)) {
          var f = e.data,
              v = e.children,
              g = e.tag;
          o(g) ? (e.elm = e.ns ? c.createElementNS(e.ns, g) : c.createElement(g, e), y(e), h(e, v, t), o(f) && m(e, t), p(n, e.elm, i)) : a(e.isComment) ? (e.elm = c.createComment(e.text), p(n, e.elm, i)) : (e.elm = c.createTextNode(e.text), p(n, e.elm, i));
        }
      }

      function d(e, t) {
        o(e.data.pendingInsert) && (t.push.apply(t, e.data.pendingInsert), e.data.pendingInsert = null), e.elm = e.componentInstance.$el, v(e) ? (m(e, t), y(e)) : (rr(e), t.push(e));
      }

      function p(e, t, n) {
        o(e) && (o(n) ? c.parentNode(n) === e && c.insertBefore(e, t, n) : c.appendChild(e, t));
      }

      function h(e, t, n) {
        if (Array.isArray(t)) {
          0;

          for (var r = 0; r < t.length; ++r) {
            f(t[r], n, e.elm, null, !0, t, r);
          }
        } else s(e.text) && c.appendChild(e.elm, c.createTextNode(String(e.text)));
      }

      function v(e) {
        for (; e.componentInstance;) {
          e = e.componentInstance._vnode;
        }

        return o(e.tag);
      }

      function m(e, n) {
        for (var i = 0; i < r.create.length; ++i) {
          r.create[i](ir, e);
        }

        o(t = e.data.hook) && (o(t.create) && t.create(ir, e), o(t.insert) && n.push(e));
      }

      function y(e) {
        var t;
        if (o(t = e.fnScopeId)) c.setStyleScope(e.elm, t);else for (var n = e; n;) {
          o(t = n.context) && o(t = t.$options._scopeId) && c.setStyleScope(e.elm, t), n = n.parent;
        }
        o(t = Qt) && t !== e.context && t !== e.fnContext && o(t = t.$options._scopeId) && c.setStyleScope(e.elm, t);
      }

      function b(e, t, n, r, i, o) {
        for (; r <= i; ++r) {
          f(n[r], o, e, t, !1, n, r);
        }
      }

      function _(e) {
        var t,
            n,
            i = e.data;
        if (o(i)) for (o(t = i.hook) && o(t = t.destroy) && t(e), t = 0; t < r.destroy.length; ++t) {
          r.destroy[t](e);
        }
        if (o(t = e.children)) for (n = 0; n < e.children.length; ++n) {
          _(e.children[n]);
        }
      }

      function E(e, t, n) {
        for (; t <= n; ++t) {
          var r = e[t];
          o(r) && (o(r.tag) ? (w(r), _(r)) : u(r.elm));
        }
      }

      function w(e, t) {
        if (o(t) || o(e.data)) {
          var n,
              i = r.remove.length + 1;

          for (o(t) ? t.listeners += i : t = function (e, t) {
            function n() {
              0 == --n.listeners && u(e);
            }

            return n.listeners = t, n;
          }(e.elm, i), o(n = e.componentInstance) && o(n = n._vnode) && o(n.data) && w(n, t), n = 0; n < r.remove.length; ++n) {
            r.remove[n](e, t);
          }

          o(n = e.data.hook) && o(n = n.remove) ? n(e, t) : t();
        } else u(e.elm);
      }

      function S(e, t, n, r) {
        for (var i = n; i < r; i++) {
          var a = t[i];
          if (o(a) && ar(e, a)) return i;
        }
      }

      function A(e, t, n, s, l, u) {
        if (e !== t) {
          o(t.elm) && o(s) && (t = s[l] = _e(t));
          var d = t.elm = e.elm;
          if (a(e.isAsyncPlaceholder)) o(t.asyncFactory.resolved) ? C(e.elm, t, n) : t.isAsyncPlaceholder = !0;else if (a(t.isStatic) && a(e.isStatic) && t.key === e.key && (a(t.isCloned) || a(t.isOnce))) t.componentInstance = e.componentInstance;else {
            var p,
                h = t.data;
            o(h) && o(p = h.hook) && o(p = p.prepatch) && p(e, t);
            var g = e.children,
                m = t.children;

            if (o(h) && v(t)) {
              for (p = 0; p < r.update.length; ++p) {
                r.update[p](e, t);
              }

              o(p = h.hook) && o(p = p.update) && p(e, t);
            }

            i(t.text) ? o(g) && o(m) ? g !== m && function (e, t, n, r, a) {
              var s,
                  l,
                  u,
                  d = 0,
                  p = 0,
                  h = t.length - 1,
                  v = t[0],
                  g = t[h],
                  m = n.length - 1,
                  y = n[0],
                  _ = n[m],
                  w = !a;

              for (0; d <= h && p <= m;) {
                i(v) ? v = t[++d] : i(g) ? g = t[--h] : ar(v, y) ? (A(v, y, r, n, p), v = t[++d], y = n[++p]) : ar(g, _) ? (A(g, _, r, n, m), g = t[--h], _ = n[--m]) : ar(v, _) ? (A(v, _, r, n, m), w && c.insertBefore(e, v.elm, c.nextSibling(g.elm)), v = t[++d], _ = n[--m]) : ar(g, y) ? (A(g, y, r, n, p), w && c.insertBefore(e, g.elm, v.elm), g = t[--h], y = n[++p]) : (i(s) && (s = sr(t, d, h)), i(l = o(y.key) ? s[y.key] : S(y, t, d, h)) ? f(y, r, e, v.elm, !1, n, p) : ar(u = t[l], y) ? (A(u, y, r, n, p), t[l] = void 0, w && c.insertBefore(e, u.elm, v.elm)) : f(y, r, e, v.elm, !1, n, p), y = n[++p]);
              }

              d > h ? b(e, i(n[m + 1]) ? null : n[m + 1].elm, n, p, m, r) : p > m && E(t, d, h);
            }(d, g, m, n, u) : o(m) ? (o(e.text) && c.setTextContent(d, ""), b(d, null, m, 0, m.length - 1, n)) : o(g) ? E(g, 0, g.length - 1) : o(e.text) && c.setTextContent(d, "") : e.text !== t.text && c.setTextContent(d, t.text), o(h) && o(p = h.hook) && o(p = p.postpatch) && p(e, t);
          }
        }
      }

      function T(e, t, n) {
        if (a(n) && o(e.parent)) e.parent.data.pendingInsert = t;else for (var r = 0; r < t.length; ++r) {
          t[r].data.hook.insert(t[r]);
        }
      }

      var k = g("attrs,class,staticClass,staticStyle,key");

      function C(e, t, n, r) {
        var i,
            s = t.tag,
            l = t.data,
            c = t.children;
        if (r = r || l && l.pre, t.elm = e, a(t.isComment) && o(t.asyncFactory)) return t.isAsyncPlaceholder = !0, !0;
        if (o(l) && (o(i = l.hook) && o(i = i.init) && i(t, !0), o(i = t.componentInstance))) return d(t, n), !0;

        if (o(s)) {
          if (o(c)) if (e.hasChildNodes()) {
            if (o(i = l) && o(i = i.domProps) && o(i = i.innerHTML)) {
              if (i !== e.innerHTML) return !1;
            } else {
              for (var u = !0, f = e.firstChild, p = 0; p < c.length; p++) {
                if (!f || !C(f, c[p], n, r)) {
                  u = !1;
                  break;
                }

                f = f.nextSibling;
              }

              if (!u || f) return !1;
            }
          } else h(t, c, n);

          if (o(l)) {
            var v = !1;

            for (var g in l) {
              if (!k(g)) {
                v = !0, m(t, n);
                break;
              }
            }

            !v && l["class"] && ot(l["class"]);
          }
        } else e.data !== t.text && (e.data = t.text);

        return !0;
      }

      return function (e, t, n, s) {
        if (!i(t)) {
          var l,
              u = !1,
              d = [];
          if (i(e)) u = !0, f(t, d);else {
            var p = o(e.nodeType);
            if (!p && ar(e, t)) A(e, t, d, null, null, s);else {
              if (p) {
                if (1 === e.nodeType && e.hasAttribute("data-server-rendered") && (e.removeAttribute("data-server-rendered"), n = !0), a(n) && C(e, t, d)) return T(t, d, !0), e;
                l = e, e = new ge(c.tagName(l).toLowerCase(), {}, [], void 0, l);
              }

              var h = e.elm,
                  g = c.parentNode(h);
              if (f(t, d, h._leaveCb ? null : g, c.nextSibling(h)), o(t.parent)) for (var m = t.parent, y = v(t); m;) {
                for (var b = 0; b < r.destroy.length; ++b) {
                  r.destroy[b](m);
                }

                if (m.elm = t.elm, y) {
                  for (var w = 0; w < r.create.length; ++w) {
                    r.create[w](ir, m);
                  }

                  var S = m.data.hook.insert;
                  if (S.merged) for (var k = 1; k < S.fns.length; k++) {
                    S.fns[k]();
                  }
                } else rr(m);

                m = m.parent;
              }
              o(g) ? E([e], 0, 0) : o(e.tag) && _(e);
            }
          }
          return T(t, d, u), t.elm;
        }

        o(e) && _(e);
      };
    }({
      nodeOps: tr,
      modules: [yr, kr, ni, oi, gi, Y ? {
        create: Bi,
        activate: Bi,
        remove: function remove(e, t) {
          !0 !== e.data.show ? Fi(e, t) : t();
        }
      } : {}].concat(hr)
    });

    X && document.addEventListener("selectionchange", function () {
      var e = document.activeElement;
      e && e.vmodel && Ki(e, "input");
    });
    var Wi = {
      inserted: function inserted(e, t, n, r) {
        "select" === n.tag ? (r.elm && !r.elm._vOptions ? ct(n, "postpatch", function () {
          Wi.componentUpdated(e, t, n);
        }) : Hi(e, t, n.context), e._vOptions = [].map.call(e.options, qi)) : ("textarea" === n.tag || Zn(e.type)) && (e._vModifiers = t.modifiers, t.modifiers.lazy || (e.addEventListener("compositionstart", Yi), e.addEventListener("compositionend", zi), e.addEventListener("change", zi), X && (e.vmodel = !0)));
      },
      componentUpdated: function componentUpdated(e, t, n) {
        if ("select" === n.tag) {
          Hi(e, t, n.context);
          var r = e._vOptions,
              i = e._vOptions = [].map.call(e.options, qi);
          if (i.some(function (e, t) {
            return !N(e, r[t]);
          })) (e.multiple ? t.value.some(function (e) {
            return Vi(e, i);
          }) : t.value !== t.oldValue && Vi(t.value, i)) && Ki(e, "change");
        }
      }
    };

    function Hi(e, t, n) {
      Gi(e, t, n), (Q || Z) && setTimeout(function () {
        Gi(e, t, n);
      }, 0);
    }

    function Gi(e, t, n) {
      var r = t.value,
          i = e.multiple;

      if (!i || Array.isArray(r)) {
        for (var o, a, s = 0, l = e.options.length; s < l; s++) {
          if (a = e.options[s], i) o = $(r, qi(a)) > -1, a.selected !== o && (a.selected = o);else if (N(qi(a), r)) return void (e.selectedIndex !== s && (e.selectedIndex = s));
        }

        i || (e.selectedIndex = -1);
      }
    }

    function Vi(e, t) {
      return t.every(function (t) {
        return !N(t, e);
      });
    }

    function qi(e) {
      return "_value" in e ? e._value : e.value;
    }

    function Yi(e) {
      e.target.composing = !0;
    }

    function zi(e) {
      e.target.composing && (e.target.composing = !1, Ki(e.target, "input"));
    }

    function Ki(e, t) {
      var n = document.createEvent("HTMLEvents");
      n.initEvent(t, !0, !0), e.dispatchEvent(n);
    }

    function Ji(e) {
      return !e.componentInstance || e.data && e.data.transition ? e : Ji(e.componentInstance._vnode);
    }

    var Qi = {
      model: Wi,
      show: {
        bind: function bind(e, t, n) {
          var r = t.value,
              i = (n = Ji(n)).data && n.data.transition,
              o = e.__vOriginalDisplay = "none" === e.style.display ? "" : e.style.display;
          r && i ? (n.data.show = !0, $i(n, function () {
            e.style.display = o;
          })) : e.style.display = r ? o : "none";
        },
        update: function update(e, t, n) {
          var r = t.value;
          !r != !t.oldValue && ((n = Ji(n)).data && n.data.transition ? (n.data.show = !0, r ? $i(n, function () {
            e.style.display = e.__vOriginalDisplay;
          }) : Fi(n, function () {
            e.style.display = "none";
          })) : e.style.display = r ? e.__vOriginalDisplay : "none");
        },
        unbind: function unbind(e, t, n, r, i) {
          i || (e.style.display = e.__vOriginalDisplay);
        }
      }
    },
        Xi = {
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

    function Zi(e) {
      var t = e && e.componentOptions;
      return t && t.Ctor.options["abstract"] ? Zi(qt(t.children)) : e;
    }

    function eo(e) {
      var t = {},
          n = e.$options;

      for (var r in n.propsData) {
        t[r] = e[r];
      }

      var i = n._parentListeners;

      for (var o in i) {
        t[A(o)] = i[o];
      }

      return t;
    }

    function to(e, t) {
      if (/\d-keep-alive$/.test(t.tag)) return e("keep-alive", {
        props: t.componentOptions.propsData
      });
    }

    var no = function no(e) {
      return e.tag || Vt(e);
    },
        ro = function ro(e) {
      return "show" === e.name;
    },
        io = {
      name: "transition",
      props: Xi,
      "abstract": !0,
      render: function render(e) {
        var t = this,
            n = this.$slots["default"];

        if (n && (n = n.filter(no)).length) {
          0;
          var r = this.mode;
          0;
          var i = n[0];
          if (function (e) {
            for (; e = e.parent;) {
              if (e.data.transition) return !0;
            }
          }(this.$vnode)) return i;
          var o = Zi(i);
          if (!o) return i;
          if (this._leaving) return to(e, i);
          var a = "__transition-" + this._uid + "-";
          o.key = null == o.key ? o.isComment ? a + "comment" : a + o.tag : s(o.key) ? 0 === String(o.key).indexOf(a) ? o.key : a + o.key : o.key;
          var l = (o.data || (o.data = {})).transition = eo(this),
              c = this._vnode,
              u = Zi(c);

          if (o.data.directives && o.data.directives.some(ro) && (o.data.show = !0), u && u.data && !function (e, t) {
            return t.key === e.key && t.tag === e.tag;
          }(o, u) && !Vt(u) && (!u.componentInstance || !u.componentInstance._vnode.isComment)) {
            var f = u.data.transition = M({}, l);
            if ("out-in" === r) return this._leaving = !0, ct(f, "afterLeave", function () {
              t._leaving = !1, t.$forceUpdate();
            }), to(e, i);

            if ("in-out" === r) {
              if (Vt(o)) return c;

              var d,
                  p = function p() {
                d();
              };

              ct(l, "afterEnter", p), ct(l, "enterCancelled", p), ct(f, "delayLeave", function (e) {
                d = e;
              });
            }
          }

          return i;
        }
      }
    },
        oo = M({
      tag: String,
      moveClass: String
    }, Xi);

    function ao(e) {
      e.elm._moveCb && e.elm._moveCb(), e.elm._enterCb && e.elm._enterCb();
    }

    function so(e) {
      e.data.newPos = e.elm.getBoundingClientRect();
    }

    function lo(e) {
      var t = e.data.pos,
          n = e.data.newPos,
          r = t.left - n.left,
          i = t.top - n.top;

      if (r || i) {
        e.data.moved = !0;
        var o = e.elm.style;
        o.transform = o.WebkitTransform = "translate(" + r + "px," + i + "px)", o.transitionDuration = "0s";
      }
    }

    delete oo.mode;
    var co = {
      Transition: io,
      TransitionGroup: {
        props: oo,
        beforeMount: function beforeMount() {
          var e = this,
              t = this._update;

          this._update = function (n, r) {
            var i = Xt(e);
            e.__patch__(e._vnode, e.kept, !1, !0), e._vnode = e.kept, i(), t.call(e, n, r);
          };
        },
        render: function render(e) {
          for (var t = this.tag || this.$vnode.data.tag || "span", n = Object.create(null), r = this.prevChildren = this.children, i = this.$slots["default"] || [], o = this.children = [], a = eo(this), s = 0; s < i.length; s++) {
            var l = i[s];
            if (l.tag) if (null != l.key && 0 !== String(l.key).indexOf("__vlist")) o.push(l), n[l.key] = l, (l.data || (l.data = {})).transition = a;else ;
          }

          if (r) {
            for (var c = [], u = [], f = 0; f < r.length; f++) {
              var d = r[f];
              d.data.transition = a, d.data.pos = d.elm.getBoundingClientRect(), n[d.key] ? c.push(d) : u.push(d);
            }

            this.kept = e(t, null, c), this.removed = u;
          }

          return e(t, null, o);
        },
        updated: function updated() {
          var e = this.prevChildren,
              t = this.moveClass || (this.name || "v") + "-move";
          e.length && this.hasMove(e[0].elm, t) && (e.forEach(ao), e.forEach(so), e.forEach(lo), this._reflow = document.body.offsetHeight, e.forEach(function (e) {
            if (e.data.moved) {
              var n = e.elm,
                  r = n.style;
              Ii(n, t), r.transform = r.WebkitTransform = r.transitionDuration = "", n.addEventListener(Ai, n._moveCb = function e(r) {
                r && r.target !== n || r && !/transform$/.test(r.propertyName) || (n.removeEventListener(Ai, e), n._moveCb = null, Mi(n, t));
              });
            }
          }));
        },
        methods: {
          hasMove: function hasMove(e, t) {
            if (!wi) return !1;
            if (this._hasMove) return this._hasMove;
            var n = e.cloneNode();
            e._transitionClasses && e._transitionClasses.forEach(function (e) {
              bi(n, e);
            }), yi(n, t), n.style.display = "none", this.$el.appendChild(n);
            var r = Li(n);
            return this.$el.removeChild(n), this._hasMove = r.hasTransform;
          }
        }
      }
    };
    Tn.config.mustUseProp = Nn, Tn.config.isReservedTag = Jn, Tn.config.isReservedAttr = Ln, Tn.config.getTagNamespace = Qn, Tn.config.isUnknownElement = function (e) {
      if (!Y) return !0;
      if (Jn(e)) return !1;
      if (e = e.toLowerCase(), null != Xn[e]) return Xn[e];
      var t = document.createElement(e);
      return e.indexOf("-") > -1 ? Xn[e] = t.constructor === window.HTMLUnknownElement || t.constructor === window.HTMLElement : Xn[e] = /HTMLUnknownElement/.test(t.toString());
    }, M(Tn.options.directives, Qi), M(Tn.options.components, co), Tn.prototype.__patch__ = Y ? Ui : D, Tn.prototype.$mount = function (e, t) {
      return function (e, t, n) {
        var r;
        return e.$el = t, e.$options.render || (e.$options.render = ye), tn(e, "beforeMount"), r = function r() {
          e._update(e._render(), n);
        }, new hn(e, r, D, {
          before: function before() {
            e._isMounted && !e._isDestroyed && tn(e, "beforeUpdate");
          }
        }, !0), n = !1, null == e.$vnode && (e._isMounted = !0, tn(e, "mounted")), e;
      }(this, e = e && Y ? er(e) : void 0, t);
    }, Y && setTimeout(function () {
      B.devtools && ae && ae.emit("init", Tn);
    }, 0);
    var uo = /\{\{((?:.|\r?\n)+?)\}\}/g,
        fo = /[-.*+?^${}()|[\]\/\\]/g,
        po = w(function (e) {
      var t = e[0].replace(fo, "\\$&"),
          n = e[1].replace(fo, "\\$&");
      return new RegExp(t + "((?:.|\\n)+?)" + n, "g");
    });
    var ho = {
      staticKeys: ["staticClass"],
      transformNode: function transformNode(e, t) {
        t.warn;
        var n = Pr(e, "class");
        n && (e.staticClass = JSON.stringify(n));
        var r = jr(e, "class", !1);
        r && (e.classBinding = r);
      },
      genData: function genData(e) {
        var t = "";
        return e.staticClass && (t += "staticClass:" + e.staticClass + ","), e.classBinding && (t += "class:" + e.classBinding + ","), t;
      }
    };

    var vo,
        go = {
      staticKeys: ["staticStyle"],
      transformNode: function transformNode(e, t) {
        t.warn;
        var n = Pr(e, "style");
        n && (e.staticStyle = JSON.stringify(ai(n)));
        var r = jr(e, "style", !1);
        r && (e.styleBinding = r);
      },
      genData: function genData(e) {
        var t = "";
        return e.staticStyle && (t += "staticStyle:" + e.staticStyle + ","), e.styleBinding && (t += "style:(" + e.styleBinding + "),"), t;
      }
    },
        mo = function mo(e) {
      return (vo = vo || document.createElement("div")).innerHTML = e, vo.textContent;
    },
        yo = g("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),
        bo = g("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),
        _o = g("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),
        Eo = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,
        wo = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,
        So = "[a-zA-Z_][\\-\\.0-9_a-zA-Z" + U.source + "]*",
        Ao = "((?:" + So + "\\:)?" + So + ")",
        To = new RegExp("^<" + Ao),
        ko = /^\s*(\/?)>/,
        Co = new RegExp("^<\\/" + Ao + "[^>]*>"),
        xo = /^<!DOCTYPE [^>]+>/i,
        Io = /^<!\--/,
        Mo = /^<!\[/,
        Oo = g("script,style,textarea", !0),
        Do = {},
        Lo = {
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&amp;": "&",
      "&#10;": "\n",
      "&#9;": "\t",
      "&#39;": "'"
    },
        Ro = /&(?:lt|gt|quot|amp|#39);/g,
        No = /&(?:lt|gt|quot|amp|#39|#10|#9);/g,
        $o = g("pre,textarea", !0),
        Fo = function Fo(e, t) {
      return e && $o(e) && "\n" === t[0];
    };

    function jo(e, t) {
      var n = t ? No : Ro;
      return e.replace(n, function (e) {
        return Lo[e];
      });
    }

    var Po,
        Bo,
        Uo,
        Wo,
        Ho,
        Go,
        Vo,
        qo,
        Yo = /^@|^v-on:/,
        zo = /^v-|^@|^:|^#/,
        Ko = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,
        Jo = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
        Qo = /^\(|\)$/g,
        Xo = /^\[.*\]$/,
        Zo = /:(.*)$/,
        ea = /^:|^\.|^v-bind:/,
        ta = /\.[^.\]]+(?=[^\]]*$)/g,
        na = /^v-slot(:|$)|^#/,
        ra = /[\r\n]/,
        ia = /\s+/g,
        oa = w(mo);

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
      Po = t.warn || Mr, Go = t.isPreTag || L, Vo = t.mustUseProp || L, qo = t.getTagNamespace || L;
      var n = t.isReservedTag || L;
      (function (e) {
        return !!e.component || !n(e.tag);
      }), Uo = Or(t.modules, "transformNode"), Wo = Or(t.modules, "preTransformNode"), Ho = Or(t.modules, "postTransformNode"), Bo = t.delimiters;
      var r,
          i,
          o = [],
          a = !1 !== t.preserveWhitespace,
          s = t.whitespace,
          l = !1,
          c = !1;

      function u(e) {
        if (f(e), l || e.processed || (e = la(e, t)), o.length || e === r || r["if"] && (e.elseif || e["else"]) && ua(r, {
          exp: e.elseif,
          block: e
        }), i && !e.forbidden) if (e.elseif || e["else"]) a = e, (s = function (e) {
          for (var t = e.length; t--;) {
            if (1 === e[t].type) return e[t];
            e.pop();
          }
        }(i.children)) && s["if"] && ua(s, {
          exp: a.elseif,
          block: a
        });else {
          if (e.slotScope) {
            var n = e.slotTarget || '"default"';
            (i.scopedSlots || (i.scopedSlots = {}))[n] = e;
          }

          i.children.push(e), e.parent = i;
        }
        var a, s;
        e.children = e.children.filter(function (e) {
          return !e.slotScope;
        }), f(e), e.pre && (l = !1), Go(e.tag) && (c = !1);

        for (var u = 0; u < Ho.length; u++) {
          Ho[u](e, t);
        }
      }

      function f(e) {
        if (!c) for (var t; (t = e.children[e.children.length - 1]) && 3 === t.type && " " === t.text;) {
          e.children.pop();
        }
      }

      return function (e, t) {
        for (var n, r, i = [], o = t.expectHTML, a = t.isUnaryTag || L, s = t.canBeLeftOpenTag || L, l = 0; e;) {
          if (n = e, r && Oo(r)) {
            var c = 0,
                u = r.toLowerCase(),
                f = Do[u] || (Do[u] = new RegExp("([\\s\\S]*?)(</" + u + "[^>]*>)", "i")),
                d = e.replace(f, function (e, n, r) {
              return c = r.length, Oo(u) || "noscript" === u || (n = n.replace(/<!\--([\s\S]*?)-->/g, "$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1")), Fo(u, n) && (n = n.slice(1)), t.chars && t.chars(n), "";
            });
            l += e.length - d.length, e = d, k(u, l - c, l);
          } else {
            var p = e.indexOf("<");

            if (0 === p) {
              if (Io.test(e)) {
                var h = e.indexOf("--\x3e");

                if (h >= 0) {
                  t.shouldKeepComment && t.comment(e.substring(4, h), l, l + h + 3), S(h + 3);
                  continue;
                }
              }

              if (Mo.test(e)) {
                var v = e.indexOf("]>");

                if (v >= 0) {
                  S(v + 2);
                  continue;
                }
              }

              var g = e.match(xo);

              if (g) {
                S(g[0].length);
                continue;
              }

              var m = e.match(Co);

              if (m) {
                var y = l;
                S(m[0].length), k(m[1], y, l);
                continue;
              }

              var b = A();

              if (b) {
                T(b), Fo(b.tagName, e) && S(1);
                continue;
              }
            }

            var _ = void 0,
                E = void 0,
                w = void 0;

            if (p >= 0) {
              for (E = e.slice(p); !(Co.test(E) || To.test(E) || Io.test(E) || Mo.test(E) || (w = E.indexOf("<", 1)) < 0);) {
                p += w, E = e.slice(p);
              }

              _ = e.substring(0, p);
            }

            p < 0 && (_ = e), _ && S(_.length), t.chars && _ && t.chars(_, l - _.length, l);
          }

          if (e === n) {
            t.chars && t.chars(e);
            break;
          }
        }

        function S(t) {
          l += t, e = e.substring(t);
        }

        function A() {
          var t = e.match(To);

          if (t) {
            var n,
                r,
                i = {
              tagName: t[1],
              attrs: [],
              start: l
            };

            for (S(t[0].length); !(n = e.match(ko)) && (r = e.match(wo) || e.match(Eo));) {
              r.start = l, S(r[0].length), r.end = l, i.attrs.push(r);
            }

            if (n) return i.unarySlash = n[1], S(n[0].length), i.end = l, i;
          }
        }

        function T(e) {
          var n = e.tagName,
              l = e.unarySlash;
          o && ("p" === r && _o(n) && k(r), s(n) && r === n && k(n));

          for (var c = a(n) || !!l, u = e.attrs.length, f = new Array(u), d = 0; d < u; d++) {
            var p = e.attrs[d],
                h = p[3] || p[4] || p[5] || "",
                v = "a" === n && "href" === p[1] ? t.shouldDecodeNewlinesForHref : t.shouldDecodeNewlines;
            f[d] = {
              name: p[1],
              value: jo(h, v)
            };
          }

          c || (i.push({
            tag: n,
            lowerCasedTag: n.toLowerCase(),
            attrs: f,
            start: e.start,
            end: e.end
          }), r = n), t.start && t.start(n, f, c, e.start, e.end);
        }

        function k(e, n, o) {
          var a, s;
          if (null == n && (n = l), null == o && (o = l), e) for (s = e.toLowerCase(), a = i.length - 1; a >= 0 && i[a].lowerCasedTag !== s; a--) {
            ;
          } else a = 0;

          if (a >= 0) {
            for (var c = i.length - 1; c >= a; c--) {
              t.end && t.end(i[c].tag, n, o);
            }

            i.length = a, r = a && i[a - 1].tag;
          } else "br" === s ? t.start && t.start(e, [], !0, n, o) : "p" === s && (t.start && t.start(e, [], !1, n, o), t.end && t.end(e, n, o));
        }

        k();
      }(e, {
        warn: Po,
        expectHTML: t.expectHTML,
        isUnaryTag: t.isUnaryTag,
        canBeLeftOpenTag: t.canBeLeftOpenTag,
        shouldDecodeNewlines: t.shouldDecodeNewlines,
        shouldDecodeNewlinesForHref: t.shouldDecodeNewlinesForHref,
        shouldKeepComment: t.comments,
        outputSourceRange: t.outputSourceRange,
        start: function start(e, n, a, s, f) {
          var d = i && i.ns || qo(e);
          Q && "svg" === d && (n = function (e) {
            for (var t = [], n = 0; n < e.length; n++) {
              var r = e[n];
              ha.test(r.name) || (r.name = r.name.replace(va, ""), t.push(r));
            }

            return t;
          }(n));
          var p,
              h = aa(e, n, i);
          d && (h.ns = d), "style" !== (p = h).tag && ("script" !== p.tag || p.attrsMap.type && "text/javascript" !== p.attrsMap.type) || oe() || (h.forbidden = !0);

          for (var v = 0; v < Wo.length; v++) {
            h = Wo[v](h, t) || h;
          }

          l || (!function (e) {
            null != Pr(e, "v-pre") && (e.pre = !0);
          }(h), h.pre && (l = !0)), Go(h.tag) && (c = !0), l ? function (e) {
            var t = e.attrsList,
                n = t.length;
            if (n) for (var r = e.attrs = new Array(n), i = 0; i < n; i++) {
              r[i] = {
                name: t[i].name,
                value: JSON.stringify(t[i].value)
              }, null != t[i].start && (r[i].start = t[i].start, r[i].end = t[i].end);
            } else e.pre || (e.plain = !0);
          }(h) : h.processed || (ca(h), function (e) {
            var t = Pr(e, "v-if");
            if (t) e["if"] = t, ua(e, {
              exp: t,
              block: e
            });else {
              null != Pr(e, "v-else") && (e["else"] = !0);
              var n = Pr(e, "v-else-if");
              n && (e.elseif = n);
            }
          }(h), function (e) {
            null != Pr(e, "v-once") && (e.once = !0);
          }(h)), r || (r = h), a ? u(h) : (i = h, o.push(h));
        },
        end: function end(e, t, n) {
          var r = o[o.length - 1];
          o.length -= 1, i = o[o.length - 1], u(r);
        },
        chars: function chars(e, t, n) {
          if (i && (!Q || "textarea" !== i.tag || i.attrsMap.placeholder !== e)) {
            var r,
                o,
                u,
                f = i.children;
            if (e = c || e.trim() ? "script" === (r = i).tag || "style" === r.tag ? e : oa(e) : f.length ? s ? "condense" === s && ra.test(e) ? "" : " " : a ? " " : "" : "") c || "condense" !== s || (e = e.replace(ia, " ")), !l && " " !== e && (o = function (e, t) {
              var n = t ? po(t) : uo;

              if (n.test(e)) {
                for (var r, i, o, a = [], s = [], l = n.lastIndex = 0; r = n.exec(e);) {
                  (i = r.index) > l && (s.push(o = e.slice(l, i)), a.push(JSON.stringify(o)));
                  var c = xr(r[1].trim());
                  a.push("_s(" + c + ")"), s.push({
                    "@binding": c
                  }), l = i + r[0].length;
                }

                return l < e.length && (s.push(o = e.slice(l)), a.push(JSON.stringify(o))), {
                  expression: a.join("+"),
                  tokens: s
                };
              }
            }(e, Bo)) ? u = {
              type: 2,
              expression: o.expression,
              tokens: o.tokens,
              text: e
            } : " " === e && f.length && " " === f[f.length - 1].text || (u = {
              type: 3,
              text: e
            }), u && f.push(u);
          }
        },
        comment: function comment(e, t, n) {
          if (i) {
            var r = {
              type: 3,
              text: e,
              isComment: !0
            };
            0, i.children.push(r);
          }
        }
      }), r;
    }

    function la(e, t) {
      var n;
      !function (e) {
        var t = jr(e, "key");

        if (t) {
          e.key = t;
        }
      }(e), e.plain = !e.key && !e.scopedSlots && !e.attrsList.length, function (e) {
        var t = jr(e, "ref");
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
        "template" === e.tag ? (t = Pr(e, "scope"), e.slotScope = t || Pr(e, "slot-scope")) : (t = Pr(e, "slot-scope")) && (e.slotScope = t);
        var n = jr(e, "slot");
        n && (e.slotTarget = '""' === n ? '"default"' : n, e.slotTargetDynamic = !(!e.attrsMap[":slot"] && !e.attrsMap["v-bind:slot"]), "template" === e.tag || e.slotScope || Lr(e, "slot", n, function (e, t) {
          return e.rawAttrsMap[":" + t] || e.rawAttrsMap["v-bind:" + t] || e.rawAttrsMap[t];
        }(e, "slot")));

        if ("template" === e.tag) {
          var r = Br(e, na);

          if (r) {
            0;
            var i = fa(r),
                o = i.name,
                a = i.dynamic;
            e.slotTarget = o, e.slotTargetDynamic = a, e.slotScope = r.value || "_empty_";
          }
        } else {
          var s = Br(e, na);

          if (s) {
            0;
            var l = e.scopedSlots || (e.scopedSlots = {}),
                c = fa(s),
                u = c.name,
                f = c.dynamic,
                d = l[u] = aa("template", [], e);
            d.slotTarget = u, d.slotTargetDynamic = f, d.children = e.children.filter(function (e) {
              if (!e.slotScope) return e.parent = d, !0;
            }), d.slotScope = s.value || "_empty_", e.children = [], e.plain = !1;
          }
        }
      }(e), "slot" === (n = e).tag && (n.slotName = jr(n, "name")), function (e) {
        var t;
        (t = jr(e, "is")) && (e.component = t);
        null != Pr(e, "inline-template") && (e.inlineTemplate = !0);
      }(e);

      for (var r = 0; r < Uo.length; r++) {
        e = Uo[r](e, t) || e;
      }

      return function (e) {
        var t,
            n,
            r,
            i,
            o,
            a,
            s,
            l,
            c = e.attrsList;

        for (t = 0, n = c.length; t < n; t++) {
          if (r = i = c[t].name, o = c[t].value, zo.test(r)) {
            if (e.hasBindings = !0, (a = da(r.replace(zo, ""))) && (r = r.replace(ta, "")), ea.test(r)) r = r.replace(ea, ""), o = xr(o), (l = Xo.test(r)) && (r = r.slice(1, -1)), a && (a.prop && !l && "innerHtml" === (r = A(r)) && (r = "innerHTML"), a.camel && !l && (r = A(r)), a.sync && (s = Hr(o, "$event"), l ? Fr(e, '"update:"+(' + r + ")", s, null, !1, 0, c[t], !0) : (Fr(e, "update:" + A(r), s, null, !1, 0, c[t]), C(r) !== A(r) && Fr(e, "update:" + C(r), s, null, !1, 0, c[t])))), a && a.prop || !e.component && Vo(e.tag, e.attrsMap.type, r) ? Dr(e, r, o, c[t], l) : Lr(e, r, o, c[t], l);else if (Yo.test(r)) r = r.replace(Yo, ""), (l = Xo.test(r)) && (r = r.slice(1, -1)), Fr(e, r, o, a, !1, 0, c[t], l);else {
              var u = (r = r.replace(zo, "")).match(Zo),
                  f = u && u[1];
              l = !1, f && (r = r.slice(0, -(f.length + 1)), Xo.test(f) && (f = f.slice(1, -1), l = !0)), Nr(e, r, i, o, f, l, a, c[t]);
            }
          } else Lr(e, r, JSON.stringify(o), c[t]), !e.component && "muted" === r && Vo(e.tag, e.attrsMap.type, r) && Dr(e, r, "true", c[t]);
        }
      }(e), e;
    }

    function ca(e) {
      var t;

      if (t = Pr(e, "v-for")) {
        var n = function (e) {
          var t = e.match(Ko);
          if (!t) return;
          var n = {};
          n["for"] = t[2].trim();
          var r = t[1].trim().replace(Qo, ""),
              i = r.match(Jo);
          i ? (n.alias = r.replace(Jo, "").trim(), n.iterator1 = i[1].trim(), i[2] && (n.iterator2 = i[2].trim())) : n.alias = r;
          return n;
        }(t);

        n && M(e, n);
      }
    }

    function ua(e, t) {
      e.ifConditions || (e.ifConditions = []), e.ifConditions.push(t);
    }

    function fa(e) {
      var t = e.name.replace(na, "");
      return t || "#" !== e.name[0] && (t = "default"), Xo.test(t) ? {
        name: t.slice(1, -1),
        dynamic: !0
      } : {
        name: '"' + t + '"',
        dynamic: !1
      };
    }

    function da(e) {
      var t = e.match(ta);

      if (t) {
        var n = {};
        return t.forEach(function (e) {
          n[e.slice(1)] = !0;
        }), n;
      }
    }

    function pa(e) {
      for (var t = {}, n = 0, r = e.length; n < r; n++) {
        t[e[n].name] = e[n].value;
      }

      return t;
    }

    var ha = /^xmlns:NS\d+/,
        va = /^NS\d+:/;

    function ga(e) {
      return aa(e.tag, e.attrsList.slice(), e.parent);
    }

    var ma = [ho, go, {
      preTransformNode: function preTransformNode(e, t) {
        if ("input" === e.tag) {
          var n,
              r = e.attrsMap;
          if (!r["v-model"]) return;

          if ((r[":type"] || r["v-bind:type"]) && (n = jr(e, "type")), r.type || n || !r["v-bind"] || (n = "(" + r["v-bind"] + ").type"), n) {
            var i = Pr(e, "v-if", !0),
                o = i ? "&&(" + i + ")" : "",
                a = null != Pr(e, "v-else", !0),
                s = Pr(e, "v-else-if", !0),
                l = ga(e);
            ca(l), Rr(l, "type", "checkbox"), la(l, t), l.processed = !0, l["if"] = "(" + n + ")==='checkbox'" + o, ua(l, {
              exp: l["if"],
              block: l
            });
            var c = ga(e);
            Pr(c, "v-for", !0), Rr(c, "type", "radio"), la(c, t), ua(l, {
              exp: "(" + n + ")==='radio'" + o,
              block: c
            });
            var u = ga(e);
            return Pr(u, "v-for", !0), Rr(u, ":type", n), la(u, t), ua(l, {
              exp: i,
              block: u
            }), a ? l["else"] = !0 : s && (l.elseif = s), l;
          }
        }
      }
    }];
    var ya,
        ba,
        _a = {
      expectHTML: !0,
      modules: ma,
      directives: {
        model: function model(e, t, n) {
          n;
          var r = t.value,
              i = t.modifiers,
              o = e.tag,
              a = e.attrsMap.type;
          if (e.component) return Wr(e, r, i), !1;
          if ("select" === o) !function (e, t, n) {
            var r = 'var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return ' + (n && n.number ? "_n(val)" : "val") + "});";
            r = r + " " + Hr(t, "$event.target.multiple ? $$selectedVal : $$selectedVal[0]"), Fr(e, "change", r, null, !0);
          }(e, r, i);else if ("input" === o && "checkbox" === a) !function (e, t, n) {
            var r = n && n.number,
                i = jr(e, "value") || "null",
                o = jr(e, "true-value") || "true",
                a = jr(e, "false-value") || "false";
            Dr(e, "checked", "Array.isArray(" + t + ")?_i(" + t + "," + i + ")>-1" + ("true" === o ? ":(" + t + ")" : ":_q(" + t + "," + o + ")")), Fr(e, "change", "var $$a=" + t + ",$$el=$event.target,$$c=$$el.checked?(" + o + "):(" + a + ");if(Array.isArray($$a)){var $$v=" + (r ? "_n(" + i + ")" : i) + ",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&(" + Hr(t, "$$a.concat([$$v])") + ")}else{$$i>-1&&(" + Hr(t, "$$a.slice(0,$$i).concat($$a.slice($$i+1))") + ")}}else{" + Hr(t, "$$c") + "}", null, !0);
          }(e, r, i);else if ("input" === o && "radio" === a) !function (e, t, n) {
            var r = n && n.number,
                i = jr(e, "value") || "null";
            Dr(e, "checked", "_q(" + t + "," + (i = r ? "_n(" + i + ")" : i) + ")"), Fr(e, "change", Hr(t, i), null, !0);
          }(e, r, i);else if ("input" === o || "textarea" === o) !function (e, t, n) {
            var r = e.attrsMap.type;
            0;
            var i = n || {},
                o = i.lazy,
                a = i.number,
                s = i.trim,
                l = !o && "range" !== r,
                c = o ? "change" : "range" === r ? "__r" : "input",
                u = "$event.target.value";
            s && (u = "$event.target.value.trim()");
            a && (u = "_n(" + u + ")");
            var f = Hr(t, u);
            l && (f = "if($event.target.composing)return;" + f);
            Dr(e, "value", "(" + t + ")"), Fr(e, c, f, null, !0), (s || a) && Fr(e, "blur", "$forceUpdate()");
          }(e, r, i);else {
            if (!B.isReservedTag(o)) return Wr(e, r, i), !1;
          }
          return !0;
        },
        text: function text(e, t) {
          t.value && Dr(e, "textContent", "_s(" + t.value + ")", t);
        },
        html: function html(e, t) {
          t.value && Dr(e, "innerHTML", "_s(" + t.value + ")", t);
        }
      },
      isPreTag: function isPreTag(e) {
        return "pre" === e;
      },
      isUnaryTag: yo,
      mustUseProp: Nn,
      canBeLeftOpenTag: bo,
      isReservedTag: Jn,
      getTagNamespace: Qn,
      staticKeys: function (e) {
        return e.reduce(function (e, t) {
          return e.concat(t.staticKeys || []);
        }, []).join(",");
      }(ma)
    },
        Ea = w(function (e) {
      return g("type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap" + (e ? "," + e : ""));
    });

    function wa(e, t) {
      e && (ya = Ea(t.staticKeys || ""), ba = t.isReservedTag || L, function e(t) {
        if (t["static"] = function (e) {
          if (2 === e.type) return !1;
          if (3 === e.type) return !0;
          return !(!e.pre && (e.hasBindings || e["if"] || e["for"] || m(e.tag) || !ba(e.tag) || function (e) {
            for (; e.parent;) {
              if ("template" !== (e = e.parent).tag) return !1;
              if (e["for"]) return !0;
            }

            return !1;
          }(e) || !Object.keys(e).every(ya)));
        }(t), 1 === t.type) {
          if (!ba(t.tag) && "slot" !== t.tag && null == t.attrsMap["inline-template"]) return;

          for (var n = 0, r = t.children.length; n < r; n++) {
            var i = t.children[n];
            e(i), i["static"] || (t["static"] = !1);
          }

          if (t.ifConditions) for (var o = 1, a = t.ifConditions.length; o < a; o++) {
            var s = t.ifConditions[o].block;
            e(s), s["static"] || (t["static"] = !1);
          }
        }
      }(e), function e(t, n) {
        if (1 === t.type) {
          if ((t["static"] || t.once) && (t.staticInFor = n), t["static"] && t.children.length && (1 !== t.children.length || 3 !== t.children[0].type)) return void (t.staticRoot = !0);
          if (t.staticRoot = !1, t.children) for (var r = 0, i = t.children.length; r < i; r++) {
            e(t.children[r], n || !!t["for"]);
          }
          if (t.ifConditions) for (var o = 1, a = t.ifConditions.length; o < a; o++) {
            e(t.ifConditions[o].block, n);
          }
        }
      }(e, !1));
    }

    var Sa = /^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/,
        Aa = /\([^)]*?\);*$/,
        Ta = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/,
        ka = {
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
        Ca = {
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
        xa = function xa(e) {
      return "if(" + e + ")return null;";
    },
        Ia = {
      stop: "$event.stopPropagation();",
      prevent: "$event.preventDefault();",
      self: xa("$event.target !== $event.currentTarget"),
      ctrl: xa("!$event.ctrlKey"),
      shift: xa("!$event.shiftKey"),
      alt: xa("!$event.altKey"),
      meta: xa("!$event.metaKey"),
      left: xa("'button' in $event && $event.button !== 0"),
      middle: xa("'button' in $event && $event.button !== 1"),
      right: xa("'button' in $event && $event.button !== 2")
    };

    function Ma(e, t) {
      var n = t ? "nativeOn:" : "on:",
          r = "",
          i = "";

      for (var o in e) {
        var a = Oa(e[o]);
        e[o] && e[o].dynamic ? i += o + "," + a + "," : r += '"' + o + '":' + a + ",";
      }

      return r = "{" + r.slice(0, -1) + "}", i ? n + "_d(" + r + ",[" + i.slice(0, -1) + "])" : n + r;
    }

    function Oa(e) {
      if (!e) return "function(){}";
      if (Array.isArray(e)) return "[" + e.map(function (e) {
        return Oa(e);
      }).join(",") + "]";
      var t = Ta.test(e.value),
          n = Sa.test(e.value),
          r = Ta.test(e.value.replace(Aa, ""));

      if (e.modifiers) {
        var i = "",
            o = "",
            a = [];

        for (var s in e.modifiers) {
          if (Ia[s]) o += Ia[s], ka[s] && a.push(s);else if ("exact" === s) {
            var l = e.modifiers;
            o += xa(["ctrl", "shift", "alt", "meta"].filter(function (e) {
              return !l[e];
            }).map(function (e) {
              return "$event." + e + "Key";
            }).join("||"));
          } else a.push(s);
        }

        return a.length && (i += function (e) {
          return "if(!$event.type.indexOf('key')&&" + e.map(Da).join("&&") + ")return null;";
        }(a)), o && (i += o), "function($event){" + i + (t ? "return " + e.value + "($event)" : n ? "return (" + e.value + ")($event)" : r ? "return " + e.value : e.value) + "}";
      }

      return t || n ? e.value : "function($event){" + (r ? "return " + e.value : e.value) + "}";
    }

    function Da(e) {
      var t = parseInt(e, 10);
      if (t) return "$event.keyCode!==" + t;
      var n = ka[e],
          r = Ca[e];
      return "_k($event.keyCode," + JSON.stringify(e) + "," + JSON.stringify(n) + ",$event.key," + JSON.stringify(r) + ")";
    }

    var La = {
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
        Ra = function Ra(e) {
      this.options = e, this.warn = e.warn || Mr, this.transforms = Or(e.modules, "transformCode"), this.dataGenFns = Or(e.modules, "genData"), this.directives = M(M({}, La), e.directives);
      var t = e.isReservedTag || L;
      this.maybeComponent = function (e) {
        return !!e.component || !t(e.tag);
      }, this.onceId = 0, this.staticRenderFns = [], this.pre = !1;
    };

    function Na(e, t) {
      var n = new Ra(t);
      return {
        render: "with(this){return " + (e ? $a(e, n) : '_c("div")') + "}",
        staticRenderFns: n.staticRenderFns
      };
    }

    function $a(e, t) {
      if (e.parent && (e.pre = e.pre || e.parent.pre), e.staticRoot && !e.staticProcessed) return Fa(e, t);
      if (e.once && !e.onceProcessed) return ja(e, t);
      if (e["for"] && !e.forProcessed) return Ba(e, t);
      if (e["if"] && !e.ifProcessed) return Pa(e, t);

      if ("template" !== e.tag || e.slotTarget || t.pre) {
        if ("slot" === e.tag) return function (e, t) {
          var n = e.slotName || '"default"',
              r = Ga(e, t),
              i = "_t(" + n + (r ? "," + r : ""),
              o = e.attrs || e.dynamicAttrs ? Ya((e.attrs || []).concat(e.dynamicAttrs || []).map(function (e) {
            return {
              name: A(e.name),
              value: e.value,
              dynamic: e.dynamic
            };
          })) : null,
              a = e.attrsMap["v-bind"];
          !o && !a || r || (i += ",null");
          o && (i += "," + o);
          a && (i += (o ? "" : ",null") + "," + a);
          return i + ")";
        }(e, t);
        var n;
        if (e.component) n = function (e, t, n) {
          var r = t.inlineTemplate ? null : Ga(t, n, !0);
          return "_c(" + e + "," + Ua(t, n) + (r ? "," + r : "") + ")";
        }(e.component, e, t);else {
          var r;
          (!e.plain || e.pre && t.maybeComponent(e)) && (r = Ua(e, t));
          var i = e.inlineTemplate ? null : Ga(e, t, !0);
          n = "_c('" + e.tag + "'" + (r ? "," + r : "") + (i ? "," + i : "") + ")";
        }

        for (var o = 0; o < t.transforms.length; o++) {
          n = t.transforms[o](e, n);
        }

        return n;
      }

      return Ga(e, t) || "void 0";
    }

    function Fa(e, t) {
      e.staticProcessed = !0;
      var n = t.pre;
      return e.pre && (t.pre = e.pre), t.staticRenderFns.push("with(this){return " + $a(e, t) + "}"), t.pre = n, "_m(" + (t.staticRenderFns.length - 1) + (e.staticInFor ? ",true" : "") + ")";
    }

    function ja(e, t) {
      if (e.onceProcessed = !0, e["if"] && !e.ifProcessed) return Pa(e, t);

      if (e.staticInFor) {
        for (var n = "", r = e.parent; r;) {
          if (r["for"]) {
            n = r.key;
            break;
          }

          r = r.parent;
        }

        return n ? "_o(" + $a(e, t) + "," + t.onceId++ + "," + n + ")" : $a(e, t);
      }

      return Fa(e, t);
    }

    function Pa(e, t, n, r) {
      return e.ifProcessed = !0, function e(t, n, r, i) {
        if (!t.length) return i || "_e()";
        var o = t.shift();
        return o.exp ? "(" + o.exp + ")?" + a(o.block) + ":" + e(t, n, r, i) : "" + a(o.block);

        function a(e) {
          return r ? r(e, n) : e.once ? ja(e, n) : $a(e, n);
        }
      }(e.ifConditions.slice(), t, n, r);
    }

    function Ba(e, t, n, r) {
      var i = e["for"],
          o = e.alias,
          a = e.iterator1 ? "," + e.iterator1 : "",
          s = e.iterator2 ? "," + e.iterator2 : "";
      return e.forProcessed = !0, (r || "_l") + "((" + i + "),function(" + o + a + s + "){return " + (n || $a)(e, t) + "})";
    }

    function Ua(e, t) {
      var n = "{",
          r = function (e, t) {
        var n = e.directives;
        if (!n) return;
        var r,
            i,
            o,
            a,
            s = "directives:[",
            l = !1;

        for (r = 0, i = n.length; r < i; r++) {
          o = n[r], a = !0;
          var c = t.directives[o.name];
          c && (a = !!c(e, o, t.warn)), a && (l = !0, s += '{name:"' + o.name + '",rawName:"' + o.rawName + '"' + (o.value ? ",value:(" + o.value + "),expression:" + JSON.stringify(o.value) : "") + (o.arg ? ",arg:" + (o.isDynamicArg ? o.arg : '"' + o.arg + '"') : "") + (o.modifiers ? ",modifiers:" + JSON.stringify(o.modifiers) : "") + "},");
        }

        if (l) return s.slice(0, -1) + "]";
      }(e, t);

      r && (n += r + ","), e.key && (n += "key:" + e.key + ","), e.ref && (n += "ref:" + e.ref + ","), e.refInFor && (n += "refInFor:true,"), e.pre && (n += "pre:true,"), e.component && (n += 'tag:"' + e.tag + '",');

      for (var i = 0; i < t.dataGenFns.length; i++) {
        n += t.dataGenFns[i](e);
      }

      if (e.attrs && (n += "attrs:" + Ya(e.attrs) + ","), e.props && (n += "domProps:" + Ya(e.props) + ","), e.events && (n += Ma(e.events, !1) + ","), e.nativeEvents && (n += Ma(e.nativeEvents, !0) + ","), e.slotTarget && !e.slotScope && (n += "slot:" + e.slotTarget + ","), e.scopedSlots && (n += function (e, t, n) {
        var r = e["for"] || Object.keys(t).some(function (e) {
          var n = t[e];
          return n.slotTargetDynamic || n["if"] || n["for"] || Wa(n);
        }),
            i = !!e["if"];
        if (!r) for (var o = e.parent; o;) {
          if (o.slotScope && "_empty_" !== o.slotScope || o["for"]) {
            r = !0;
            break;
          }

          o["if"] && (i = !0), o = o.parent;
        }
        var a = Object.keys(t).map(function (e) {
          return Ha(t[e], n);
        }).join(",");
        return "scopedSlots:_u([" + a + "]" + (r ? ",null,true" : "") + (!r && i ? ",null,false," + function (e) {
          var t = 5381,
              n = e.length;

          for (; n;) {
            t = 33 * t ^ e.charCodeAt(--n);
          }

          return t >>> 0;
        }(a) : "") + ")";
      }(e, e.scopedSlots, t) + ","), e.model && (n += "model:{value:" + e.model.value + ",callback:" + e.model.callback + ",expression:" + e.model.expression + "},"), e.inlineTemplate) {
        var o = function (e, t) {
          var n = e.children[0];
          0;

          if (n && 1 === n.type) {
            var r = Na(n, t.options);
            return "inlineTemplate:{render:function(){" + r.render + "},staticRenderFns:[" + r.staticRenderFns.map(function (e) {
              return "function(){" + e + "}";
            }).join(",") + "]}";
          }
        }(e, t);

        o && (n += o + ",");
      }

      return n = n.replace(/,$/, "") + "}", e.dynamicAttrs && (n = "_b(" + n + ',"' + e.tag + '",' + Ya(e.dynamicAttrs) + ")"), e.wrapData && (n = e.wrapData(n)), e.wrapListeners && (n = e.wrapListeners(n)), n;
    }

    function Wa(e) {
      return 1 === e.type && ("slot" === e.tag || e.children.some(Wa));
    }

    function Ha(e, t) {
      var n = e.attrsMap["slot-scope"];
      if (e["if"] && !e.ifProcessed && !n) return Pa(e, t, Ha, "null");
      if (e["for"] && !e.forProcessed) return Ba(e, t, Ha);
      var r = "_empty_" === e.slotScope ? "" : String(e.slotScope),
          i = "function(" + r + "){return " + ("template" === e.tag ? e["if"] && n ? "(" + e["if"] + ")?" + (Ga(e, t) || "undefined") + ":undefined" : Ga(e, t) || "undefined" : $a(e, t)) + "}",
          o = r ? "" : ",proxy:true";
      return "{key:" + (e.slotTarget || '"default"') + ",fn:" + i + o + "}";
    }

    function Ga(e, t, n, r, i) {
      var o = e.children;

      if (o.length) {
        var a = o[0];

        if (1 === o.length && a["for"] && "template" !== a.tag && "slot" !== a.tag) {
          var s = n ? t.maybeComponent(a) ? ",1" : ",0" : "";
          return "" + (r || $a)(a, t) + s;
        }

        var l = n ? function (e, t) {
          for (var n = 0, r = 0; r < e.length; r++) {
            var i = e[r];

            if (1 === i.type) {
              if (Va(i) || i.ifConditions && i.ifConditions.some(function (e) {
                return Va(e.block);
              })) {
                n = 2;
                break;
              }

              (t(i) || i.ifConditions && i.ifConditions.some(function (e) {
                return t(e.block);
              })) && (n = 1);
            }
          }

          return n;
        }(o, t.maybeComponent) : 0,
            c = i || qa;
        return "[" + o.map(function (e) {
          return c(e, t);
        }).join(",") + "]" + (l ? "," + l : "");
      }
    }

    function Va(e) {
      return void 0 !== e["for"] || "template" === e.tag || "slot" === e.tag;
    }

    function qa(e, t) {
      return 1 === e.type ? $a(e, t) : 3 === e.type && e.isComment ? function (e) {
        return "_e(" + JSON.stringify(e.text) + ")";
      }(e) : function (e) {
        return "_v(" + (2 === e.type ? e.expression : za(JSON.stringify(e.text))) + ")";
      }(e);
    }

    function Ya(e) {
      for (var t = "", n = "", r = 0; r < e.length; r++) {
        var i = e[r],
            o = za(i.value);
        i.dynamic ? n += i.name + "," + o + "," : t += '"' + i.name + '":' + o + ",";
      }

      return t = "{" + t.slice(0, -1) + "}", n ? "_d(" + t + ",[" + n.slice(0, -1) + "])" : t;
    }

    function za(e) {
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
      return function (n, r, i) {
        (r = M({}, r)).warn;
        delete r.warn;
        var o = r.delimiters ? String(r.delimiters) + n : n;
        if (t[o]) return t[o];
        var a = e(n, r);
        var s = {},
            l = [];
        return s.render = Ka(a.render, l), s.staticRenderFns = a.staticRenderFns.map(function (e) {
          return Ka(e, l);
        }), t[o] = s;
      };
    }

    var Qa,
        Xa,
        Za = (Qa = function Qa(e, t) {
      var n = sa(e.trim(), t);
      !1 !== t.optimize && wa(n, t);
      var r = Na(n, t);
      return {
        ast: n,
        render: r.render,
        staticRenderFns: r.staticRenderFns
      };
    }, function (e) {
      function t(t, n) {
        var r = Object.create(e),
            i = [],
            o = [];
        if (n) for (var a in n.modules && (r.modules = (e.modules || []).concat(n.modules)), n.directives && (r.directives = M(Object.create(e.directives || null), n.directives)), n) {
          "modules" !== a && "directives" !== a && (r[a] = n[a]);
        }

        r.warn = function (e, t, n) {
          (n ? o : i).push(e);
        };

        var s = Qa(t.trim(), r);
        return s.errors = i, s.tips = o, s;
      }

      return {
        compile: t,
        compileToFunctions: Ja(t)
      };
    })(_a),
        es = (Za.compile, Za.compileToFunctions);

    function ts(e) {
      return (Xa = Xa || document.createElement("div")).innerHTML = e ? '<a href="\n"/>' : '<div a="\n"/>', Xa.innerHTML.indexOf("&#10;") > 0;
    }

    var ns = !!Y && ts(!1),
        rs = !!Y && ts(!0),
        is = w(function (e) {
      var t = er(e);
      return t && t.innerHTML;
    }),
        os = Tn.prototype.$mount;
    Tn.prototype.$mount = function (e, t) {
      if ((e = e && er(e)) === document.body || e === document.documentElement) return this;
      var n = this.$options;

      if (!n.render) {
        var r = n.template;
        if (r) {
          if ("string" == typeof r) "#" === r.charAt(0) && (r = is(r));else {
            if (!r.nodeType) return this;
            r = r.innerHTML;
          }
        } else e && (r = function (e) {
          if (e.outerHTML) return e.outerHTML;
          var t = document.createElement("div");
          return t.appendChild(e.cloneNode(!0)), t.innerHTML;
        }(e));

        if (r) {
          0;
          var i = es(r, {
            outputSourceRange: !1,
            shouldDecodeNewlines: ns,
            shouldDecodeNewlinesForHref: rs,
            delimiters: n.delimiters,
            comments: n.comments
          }, this),
              o = i.render,
              a = i.staticRenderFns;
          n.render = o, n.staticRenderFns = a;
        }
      }

      return os.call(this, e, t);
    }, Tn.compile = es, t.a = Tn;
  }).call(this, n(24), n(31).setImmediate);
}, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return r;
  }), n.d(t, "b", function () {
    return i;
  });

  var r = function r() {
    _classCallCheck(this, r);

    this.showGrid = !1, this.showEditorGrid = !1, this.showFPS = !1, this.showCellNumbers = !1, this.showFocus = !1, this.enableSelection = !1, this.showBlocks = !1, this.showOnTops = !1, this.enableAntialiasing = !0, this.fps = 0;
  };

  function i() {}
}, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return r;
  });
  var r,
      i = n(1),
      o = n(2),
      a = n(17),
      s = n(6),
      l = n(4),
      c = n(27),
      u = n(7),
      f = n(20),
      d = n(3),
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

          var _n8 = u.a.getState(_e10);

          if (void 0 === _n8 || p.a.isEmpty(_n8.block) || _n8.block) {
            var _n9 = o.a.cellToGid(_e10, t.width);

            t.dynamicBlocks[_n9] = l.a.ALL;
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }

    function r(e, t, n, r, i) {
      var a = o.a.getDirectionTarget({
        i: t,
        j: n
      }, r),
          s = !1;
      return 4 === o.a.getDirection(a, i) && (s = !0), o.a.isMovementBlocked(e, t, n, r, s);
    }

    !function (e) {
      e[e.BASIC = 0] = "BASIC", e[e.D_STAR_LITE = 1] = "D_STAR_LITE";
    }(t = e.PathfinderEnum || (e.PathfinderEnum = {})), e.loadMap = function (e, t, n) {
      s.a.load(e + "", d.a.MAP, function (r) {
        if (p.a.isEmpty(r)) console.error("Error while loading map: " + e), n();else try {
          var _e11 = JSON.parse(r);

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
        } catch (i) {
          "SyntaxError" === i.name ? console.error("Error while parsing map: " + e) : "TypeError" === i.name ? console.error("Error while reading map: " + e) : console.error(i), console.error(r), a.a.showError(t.getContext("2d")), n();
        }
      });
    }, e.renderUI = function (e, t, n, r, a, s, c) {
      if ((c || r.showGrid || r.showEditorGrid || r.showFocus || r.showBlocks || r.showOnTops) && (!c || r.showFPS || r.showCellNumbers || r.showFocus) && !p.a.isEmpty(r)) {
        if (!c && r.showBlocks && !p.a.isEmpty(e) && (!p.a.isEmpty(e.blocks) || !p.a.isEmpty(e.dynamicBlocks))) {
          n.save(), n.globalAlpha = .5, n.fillStyle = i.a.Color.YELLOW, n.strokeStyle = i.a.Color.BLACK, n.lineWidth = 2;

          var _r4 = p.a.isEmpty(e.blocks) ? l.a.NONE : e.blocks[s * e.width + a],
              _c = p.a.isEmpty(e.dynamicBlocks) ? l.a.NONE : e.dynamicBlocks[s * e.width + a];

          (_r4 > l.a.NONE || _c > l.a.NONE) && (_c > l.a.NONE && (n.fillStyle = i.a.Color.GREEN), o.a.isBlockDirectionBlocked(_r4 | _c, l.a.UP) && (n.beginPath(), n.moveTo(a * t.cellW, s * t.cellH), n.lineTo((a + .5) * t.cellW, (s + .2) * t.cellH), n.lineTo((a + 1) * t.cellW, s * t.cellH), n.fill(), n.stroke()), o.a.isBlockDirectionBlocked(_r4 | _c, l.a.DOWN) && (n.beginPath(), n.moveTo(a * t.cellW, (s + 1) * t.cellH), n.lineTo((a + .5) * t.cellW, (s + .8) * t.cellH), n.lineTo((a + 1) * t.cellW, (s + 1) * t.cellH), n.fill(), n.stroke()), o.a.isBlockDirectionBlocked(_r4 | _c, l.a.LEFT) && (n.beginPath(), n.moveTo(a * t.cellW, s * t.cellH), n.lineTo((a + .2) * t.cellW, (s + .5) * t.cellH), n.lineTo(a * t.cellW, (s + 1) * t.cellH), n.fill(), n.stroke()), o.a.isBlockDirectionBlocked(_r4 | _c, l.a.RIGHT) && (n.beginPath(), n.moveTo((a + 1) * t.cellW, s * t.cellH), n.lineTo((a + .8) * t.cellW, (s + .5) * t.cellH), n.lineTo((a + 1) * t.cellW, (s + 1) * t.cellH), n.fill(), n.stroke())), n.restore();
        }

        if (!c && r.showOnTops && !p.a.isEmpty(e) && !p.a.isEmpty(e.tileset.onTop)) {
          var _r5 = o.a.cellToGid({
            i: a,
            j: s
          }, e.width);

          o.a.normalizeZIndex(e.tileset.onTop[_r5]) > 0 && (n.save(), n.globalAlpha = .6, n.beginPath(), n.fillStyle = i.a.Color.AQUA, n.arc(Math.floor((a + .5) * t.cellW), Math.floor((s + .5) * t.cellH), 10, 0, i.a.DOUBLE_PI), n.closePath(), n.fill(), n.fillStyle = i.a.Color.DARKBLUE, n.font = "bold 14px Arial", n.fillText("" + e.tileset.onTop[_r5], (a + .35) * t.cellW, (s + .65) * t.cellH), n.restore());
        }

        !c && r.showGrid && (n.strokeStyle = i.a.Color.RED, n.strokeRect(a * t.cellW, s * t.cellH, t.cellW, t.cellH)), !c && r.showEditorGrid && (n.save(), n.globalAlpha = .4, n.strokeStyle = i.a.Color.GREY, n.strokeRect(a * t.cellW, s * t.cellH, t.cellW, t.cellH), n.restore()), !c && r.showCellNumbers && (n.fillStyle = i.a.Color.RED, n.font = "bold 10px Arial", n.fillText(a + "," + s, a * t.cellW + 1, s * t.cellH + 10));
      }
    }, e.renderGlobalUI = function (e, t, n) {
      if (n.enableSelection && (void 0 !== n.selectCellStart || void 0 !== n.selectEventCell)) {
        var _r6, _o6;

        t.save();
        var _a3 = e.cellW,
            _s = e.cellH;

        if (void 0 !== n.selectCellStart) {
          if (_r6 = n.selectCellStart.i * e.cellW, _o6 = n.selectCellStart.j * e.cellH, void 0 !== n.selectCellEnd) {
            var _t6 = n.selectCellEnd.i * e.cellW,
                _i4 = n.selectCellEnd.j * e.cellH;

            _r6 > _t6 ? (_a3 = _r6 - _t6, _r6 = _t6) : _a3 = _t6 - _r6, _o6 > _i4 ? (_s = _o6 - _i4, _o6 = _i4) : _s = _i4 - _o6, _a3 += e.cellW, _s += e.cellH;
          }

          t.strokeStyle = i.a.Color.RED, t.lineWidth = 3;
        } else _r6 = n.selectEventCell.i * e.cellW, _o6 = n.selectEventCell.j * e.cellH, t.strokeStyle = i.a.Color.LIME, t.lineWidth = 2;

        t.strokeRect(_r6, _o6, _a3, _s), t.restore();
      }
    }, e.resizeMap = function (e, t, n) {
      var r = e.width,
          i = n,
          o = e.height,
          a = t;
      if (r === i && o === a || p.a.isEmpty(e)) return;
      var s,
          l,
          c = Math.min(r, i);
      if (i < r) s = r - i;else {
        l = [];

        for (var _e12 = 0; _e12 < i - r; _e12++) {
          l[_e12] = void 0;
        }
      }

      for (var _t7 = 0; _t7 < e.layers.length; _t7++) {
        var _n10 = e.layers[_t7];

        if (void 0 !== _n10.data) {
          if (r !== i) for (var _e13 = 0; _e13 < o; _e13++) {
            void 0 !== s ? _n10.data.splice(c + _e13 * i, s) : void 0 !== l ? Array.prototype.splice.apply(_n10.data, [c + _e13 * i, 0].concat(l)) : console.error("Unexpected case");
          }

          if (o > a && (_n10.data.length = i * a), o < a) {
            var _e14 = [];

            for (var _t8 = 0; _t8 < i - r; _t8++) {
              _e14[_t8] = void 0;
            }

            for (var _t9 = r; _t9 < i; _t9++) {
              _n10.data.concat(_e14);
            }
          }
        }
      }

      e.height = t, e.width = n;
    }, e.initTransientData = function (e) {
      var t = void 0,
          r = e.map,
          i = e.grid;
      if (e instanceof c.a && (t = e.hero), function (e) {
        if (e.blocks = [], !p.a.isEmpty(e.layers) && !p.a.isEmpty(e.tileset.blocks)) {
          for (var _t10 = 0; _t10 < e.height * e.width; _t10++) {
            e.blocks[_t10] = 0;
          }

          for (var _t11 = 0; _t11 < e.layers.length; _t11++) {
            var _n11 = e.layers[_t11];
            if (void 0 !== _n11.data) for (var _t12 = 0; _t12 < _n11.data.length; _t12++) {
              var _r7 = _n11.data[_t12];
              if (p.a.isEmpty(_r7) || _r7 < 0 || _r7 >= e.tileset.blocks.length) continue;
              if (void 0 !== e.tileset.onTop && o.a.normalizeZIndex(e.tileset.onTop[_r7]) > 0) continue;
              var _i5 = e.tileset.blocks[_r7];
              p.a.isEmpty(_i5) && (_i5 = l.a.NONE), e.blocks[_t12] = _i5;
            }
          }
        }
      }(r), n(t, r), p.a.isEmpty(r.events)) r.events = [];else {
        var _iterator5 = _createForOfIteratorHelper(r.events),
            _step5;

        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var _e15 = _step5.value;
            u.a.initTransientData(r, i, _e15);
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
      }
      r.width = parseInt(r.width + ""), r.height = parseInt(r.height + ""), f.a.initTransientData(r.tileset);
    }, e.updateDynamicData = function (e, t) {
      n(e, t);
    }, e.pathFinder = function (e, n, i) {
      var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : t.D_STAR_LITE;
      var s = p.a.now(),
          l = i.i - n.i,
          c = i.j - n.j;
      if (0 === l && 0 === c) return 4;
      {
        var R = 4;

        switch (a) {
          case t.BASIC:
            Math.abs(l) > Math.abs(c) ? (R = l > 0 ? 1 : 3, r(e, n.i, n.j, R, i) && (R = c > 0 ? 2 : 0)) : (R = c > 0 ? 2 : 0, r(e, n.i, n.j, R, i) && (R = l > 0 ? 1 : 3)), r(e, n.i, n.j, R, i) && (R = 4);
            break;

          case t.D_STAR_LITE:
            {
              var b = function b(e) {
                return [Math.min(S(e), A(e)) + x(g, e) + _r8, Math.min(S(e), A(e))];
              };

              var _ = function _(e) {
                S(e) !== A(e) ? (e.key = b(e), O(e)) : function (e) {
                  var _iterator6 = _createForOfIteratorHelper(d),
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
                var r = o.a.cellToGid(e.cell, y);
                h[r] = n;
              };

              var w = function w(e, n) {
                n > _t13 && (n = _t13);
                var r = o.a.cellToGid(e.cell, y);
                v[r] = n;
              };

              var S = function S(e) {
                var t = o.a.cellToGid(e.cell, y);
                return h[t];
              };

              var A = function A(e) {
                var t = o.a.cellToGid(e.cell, y);
                return v[t];
              };

              var T = function T(t) {
                var n = o.a.cellToGid(t.cell, e.width),
                    r = [];
                return 0 !== t.cell.i && r.push(f[n - 1]), t.cell.i < e.width - 1 && r.push(f[n + 1]), n - e.width >= 0 && r.push(f[n - e.width]), n + e.width < f.length && r.push(f[n + e.width]), r;
              };

              var k = function k(t) {
                var n = o.a.cellToGid(t.cell, e.width),
                    r = [];
                return 0 !== t.cell.i && r.push(f[n - 1]), t.cell.i < e.width - 1 && r.push(f[n + 1]), n - e.width >= 0 && r.push(f[n - e.width]), n + e.width < f.length && r.push(f[n + e.width]), r;
              };

              var C = function C(n, r) {
                var i = o.a.getDirection(r.cell, n.cell),
                    a = 4 === o.a.getDirection(r.cell, m.cell);
                return o.a.isMovementBlocked(e, n.cell.i, n.cell.j, i, a) ? _t13 : 1;
              };

              var x = function x(e, t) {
                return Math.abs(e.cell.i - t.cell.i) + Math.abs(e.cell.j - t.cell.j);
              };

              var I = function I(e, t) {
                return e[0] === t[0] && e[1] === t[1] ? 0 : e[0] > t[0] || e[0] === t[0] && e[1] > t[1] ? 1 : -1;
              };

              var M = function M(e, t) {
                return e.cell.i === t.cell.i && e.cell.j === t.cell.j;
              };

              var O = function O(e) {
                var _iterator7 = _createForOfIteratorHelper(d),
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

                d.push(e);
              };

              var D = function D(e) {
                var t = [];

                var _iterator8 = _createForOfIteratorHelper(d),
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

                d = t;
              };

              var L = function L() {
                var e = void 0;

                var _iterator9 = _createForOfIteratorHelper(d),
                    _step9;

                try {
                  for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                    var _t16 = _step9.value;
                    (void 0 === e || I(_t16.key, e.key) < 0) && (e = _t16);
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

              var f, d, h, v;
              var _t13 = Number.MAX_SAFE_INTEGER;
              var g, m;
              var _r8 = 0;
              var y = e.width;
              g = {
                cell: n
              }, m = {
                cell: i
              }, R = function () {
                (function () {
                  f = [];

                  for (var _t17 = 0; _t17 < e.height; _t17++) {
                    for (var _n13 = 0; _n13 < e.width; _n13++) {
                      var _e16 = {
                        cell: {
                          i: _n13,
                          j: _t17
                        }
                      };
                      f.push(_e16);
                    }
                  }

                  h = [], v = [], d = [], _r8 = 0;

                  var _iterator10 = _createForOfIteratorHelper(f),
                      _step10;

                  try {
                    for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                      var _e17 = _step10.value;
                      E(_e17, _t13), w(_e17, _t13);
                    }
                  } catch (err) {
                    _iterator10.e(err);
                  } finally {
                    _iterator10.f();
                  }

                  w(m, 0);
                  var n = m;
                  n.key = [x(g, m), 0], d.push(n);
                })(), function () {
                  for (; I(L().key, b(g)) < 0 || A(g) > S(g);) {
                    var _e18 = L(),
                        _n14 = _e18,
                        _r9 = _e18.key,
                        _i6 = b(_n14);

                    if (I(_r9, _i6) < 0) _n14.key = _i6, O(_n14);else if (S(_n14) > A(_n14)) {
                      E(_n14, A(_n14)), D(_n14);

                      var _iterator11 = _createForOfIteratorHelper(k(_n14)),
                          _step11;

                      try {
                        for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                          var _e19 = _step11.value;
                          M(_e19, m) || w(_e19, Math.min(A(_e19), C(_e19, _n14) + S(_n14))), _(_e19);
                        }
                      } catch (err) {
                        _iterator11.e(err);
                      } finally {
                        _iterator11.f();
                      }
                    } else {
                      var _e20 = S(_n14);

                      E(_n14, _t13);

                      var _r10 = k(_n14);

                      _r10.push(_n14);

                      var _iterator12 = _createForOfIteratorHelper(_r10),
                          _step12;

                      try {
                        for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                          var _i7 = _step12.value;

                          if ((A(_i7) === C(_i7, _n14) + _e20 || A(_i7) === _t13 && (C(_i7, _n14) === _t13 || _e20 === _t13)) && !M(_i7, m)) {
                            var _e21 = void 0;

                            var _iterator13 = _createForOfIteratorHelper(T(_i7)),
                                _step13;

                            try {
                              for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                                var _n15 = _step13.value;

                                var _r11 = C(_i7, _n15) + S(_n15);

                                _r11 > _t13 && (_r11 = _t13), (void 0 === _e21 || _e21 > _r11) && (_e21 = _r11);
                              }
                            } catch (err) {
                              _iterator13.e(err);
                            } finally {
                              _iterator13.f();
                            }

                            w(_i7, _e21);
                          }

                          _(_i7);
                        }
                      } catch (err) {
                        _iterator12.e(err);
                      } finally {
                        _iterator12.f();
                      }
                    }
                  }
                }();

                for (; !M(g, m);) {
                  var _e22 = void 0,
                      _t18 = void 0;

                  var _iterator14 = _createForOfIteratorHelper(T(g)),
                      _step14;

                  try {
                    for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                      var _n16 = _step14.value;

                      var _r12 = C(g, _n16) + S(_n16);

                      (void 0 === _t18 || _t18 > _r12) && (_t18 = _r12, _e22 = _n16);
                    }
                  } catch (err) {
                    _iterator14.e(err);
                  } finally {
                    _iterator14.f();
                  }

                  return g = _e22, o.a.getDirection(g.cell, n);
                }

                return 4;
              }();
            }
        }

        4 !== R && (u.a.addDirectionToPath(n, R, 3), void 0 === n.path && (n.path = []), 3 === n.path.length && n.path[0] === n.path[2] && o.a.isDirectionsOpposed(n.path[0], n.path[1]) && (R = 4));
        var N = p.a.now() - s;
        return N > 10 && console.debug("Path found in: " + N), R;
      }
    };
  }(r || (r = {}));
}, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return r;
  });
  var r = {
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

  var r;
  n.d(t, "a", function () {
    return r;
  }), function (e) {
    var t = [];

    var n = function n() {
      _classCallCheck(this, n);
    };

    n.UP = "38", n.DOWN = "40", n.LEFT = "37", n.RIGHT = "39", n.CTRL = "17", n.ALT = "18", n.ENTER = "13", n.SPACE = "32", n.CAPS = "20", n.SHIFT = "16", n.W = "87", n.A = "65", n.D = "68", n.S = "83", n.J = "74", n.K = "75", n.F1 = "112", n.F2 = "113", n.F3 = "114", n.F4 = "115", n.F5 = "116", n.F6 = "117", e.Keys = n;

    var r = function r() {
      _classCallCheck(this, r);
    };

    function i() {
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

    r.LEFT = 1, r.RIGHT = 2, r.MIDDLE = 4, e.MouseButtons = r, e.init = function (e, t, r, o, a, s, l, c, u, f, d, p, h, v, g) {
      var m,
          y = !1;

      r[n.SPACE] = function (e) {
        y ? (d(), y = !1) : (f(), y = !0);
      };

      var b = !1;

      function _(e) {
        var n = {
          x: e.clientX,
          y: e.clientY
        };
        return t.mapPositionToGrid(n);
      }

      e.addEventListener("click", function (e) {
        var t = _(e);

        a(t.i, t.j, t.x, t.y), i();
      }), e.addEventListener("mousemove", function (e) {
        var t = _(e);

        b ? c(t.i, t.j, e.buttons) : u(t.i, t.j);
      }), e.addEventListener("mousedown", function (e) {
        b = !0;

        var t = _(e);

        s(t.i, t.j, t.x, t.y, e.buttons), i();
      }), e.addEventListener("mouseup", function (e) {
        b = !1;

        var t = _(e);

        l(t.i, t.j, e.buttons);
      }), e.addEventListener("mouseout", function (e) {
        b ? c(void 0, void 0, e.buttons) : u(void 0, void 0);
      }), e.addEventListener("contextmenu", function (e) {
        e.preventDefault();

        var t = _(e);

        h(t.i, t.j);
      }), e.addEventListener("dblclick", function (e) {
        var t = _(e);

        v(t.i, t.j);
      }), e.addEventListener("wheel", function (e) {
        var t = _(e);

        g(t.i, t.j);
      }, {
        passive: !0
      }), e.addEventListener("touchstart", function (e) {
        var t = _(e);

        s(t.i, t.j, t.x, t.y), i();
      }, {
        passive: !0
      }), e.addEventListener("touchend", function (e) {
        var t = _(e);

        c(void 0, void 0), l(t.i, t.j);
      }, {
        passive: !0
      }), e.addEventListener("touchcancel", function (e) {
        var t = _(e);

        c(void 0, void 0), l(t.i, t.j);
      }, {
        passive: !0
      }), e.addEventListener("touchmove", function (e) {
        var t = _(e);

        c(t.i, t.j);
      }, {
        passive: !0
      }), document.addEventListener("keydown", function (e) {
        var t = r[String(e.keyCode)];
        void 0 !== t && t(e), m = e.keyCode;
      }), document.addEventListener("keyup", function (e) {
        e.keyCode === m && o();
      }), document.addEventListener("visibilitychange", function () {
        document.hidden ? (f(), y = !0) : (d(), y = !1);
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
  }(r || (r = {}));
}, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return l;
  });
  var r = n(15),
      i = n(7),
      o = n(18),
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
        return r.a.showSimpleDialog(this.scene, this.hero, this.event.name, e, n, t), !0;
      }
    }, {
      key: "showComplexDialog",
      value: function showComplexDialog(e, t) {
        var n = this.getConfig();
        return r.a.showComplexDialog(this.scene, this.hero, this.event.name, e, n, t), !0;
      }
    }, {
      key: "moveToTarget",
      value: function moveToTarget(e) {
        return i.a.startMovement(this.scene.grid, this.event, e.i, e.j), !0;
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
          } : t ? function (t, r) {
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
        i.a.saveMem(this.event, e, t);
      }
    }, {
      key: "loadMem",
      value: function loadMem(e) {
        return i.a.loadMem(this.event, e);
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
        o.a.loadMapSave(n, e, t, function () {
          n.moveFocusToTarget(t), i.a.stopMovement(n.hero);
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
    return r;
  });
  var r,
      i = n(13);
  !function (e) {
    function t(e, t) {
      var n = e.memory[i.a.STATE_VAR],
          r = Number.parseInt(n);
      return !Number.isNaN(r) && r === t;
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
  }(r || (r = {}));
}, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return r;
  });
  var r,
      i = n(3),
      o = n(14),
      a = n(12),
      s = n(6),
      l = n(2),
      c = n(5),
      u = n(0);
  !function (e) {
    var t, n;

    function r() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
      var t = document.getElementById("dialog1");
      null !== t ? (t.classList.remove("visibleFadeIn"), t.classList.add("hiddenFadeOut"), void 0 === n || e || n()) : console.error("Element not foud: dialog1");
    }

    function f(e) {
      void 0 !== e ? setTimeout(function () {
        r();
      }, e) : setTimeout(function () {
        a.a.addActionCallback(function () {
          r();
        });
      }, 500);
    }

    function d(e, t, n) {
      s.a.load(e, i.a.STRING, function (t) {
        u.a.isEmpty(t) || "string" != typeof t ? (console.error("Error while loading string: " + e), n()) : n(t);
      }, t);
    }

    function p(e, t, n) {
      e !== c.a.DEFAULT_ID ? s.a.load(e + "", i.a.DIALOG, function (t) {
        if (u.a.isEmpty(t) || "string" != typeof t) console.error("Error while loading dialog: " + e), n(c.a.getDialogNode(c.a.FIRST_ELEM_ID));else {
          var _e24 = JSON.parse(t),
              _r13 = function (e, t, n) {
            var r = new Map(),
                i = new Map();

            var _iterator16 = _createForOfIteratorHelper(t),
                _step16;

            try {
              for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                var _e25 = _step16.value;
                r.set(_e25.id, _e25);
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
                i.set(_e26.id, _e26);
              }
            } catch (err) {
              _iterator17.e(err);
            } finally {
              _iterator17.f();
            }

            if (r.has(e)) {
              var _t19 = r.get(e);

              return function e(t, n, r) {
                if (t.referenced = !0, !u.a.isEmpty(t.edgeIds)) {
                  var _iterator18 = _createForOfIteratorHelper(t.edgeIds),
                      _step18;

                  try {
                    for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
                      var _i8 = _step18.value;

                      if (r.has(_i8)) {
                        var _o7 = r.get(_i8);

                        if (void 0 === t.edges && (t.edges = []), t.edges.push(_o7), void 0 !== _o7.nodeId) if (n.has(_o7.nodeId)) {
                          var _t20 = n.get(_o7.nodeId);

                          _o7.node = _t20, _t20.referenced && (_o7.nodeReferenced = !0), e(_t20, n, r);
                        } else console.error("Cannot reconstruct dialog tree from edge: " + _o7.id + ", node not found: " + _o7.nodeId);
                      } else console.error("Cannot reconstruct dialog tree from node: " + t.id + ", edge not found: " + _i8);
                    }
                  } catch (err) {
                    _iterator18.e(err);
                  } finally {
                    _iterator18.f();
                  }
                }
              }(_t19, r, i), _t19;
            }

            return console.error("Cannot reconstruct dialog tree from node: " + e), c.a.getDialogNode();
          }(c.a.FIRST_ELEM_ID, _e24.nodes, _e24.edges);

          n(_r13);
        }
      }) : n(c.a.getDialogNode(c.a.FIRST_ELEM_ID));
    }

    function h(e, t, n, r) {
      if (t.has(e.id)) return;
      t.set(e.id, e);
      var i = e.edges;

      if (!u.a.isEmpty(i)) {
        r && delete e.edges;

        var _iterator19 = _createForOfIteratorHelper(i),
            _step19;

        try {
          for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
            var _e27 = _step19.value;
            if (n.has(_e27.id)) continue;
            n.set(_e27.id, _e27);
            var _i9 = _e27.node;
            void 0 !== _i9 && (r && delete _e27.node, h(_i9, t, n));
          }
        } catch (err) {
          _iterator19.e(err);
        } finally {
          _iterator19.f();
        }
      }
    }

    function v(e, r, i, o, s, c) {
      var d = document.getElementById("dialog1"),
          p = document.getElementById("dialogFace"),
          h = document.getElementById("dialogName"),
          y = document.getElementById("dialogArea");
      if (null === p) return void console.error("Element not foud: dialogFace");
      if (null === h) return void console.error("Element not foud: dialogName");
      if (null === y) return void console.error("Element not foud: dialogArea");
      if (null === d) return void console.error("Element not foud: dialog1");
      d.classList.replace("hiddenFadeOut", "visibleFadeIn"), u.a.isEmpty(s) ? console.error("skin is not defined!") : d.style.borderImageSource = "url('/assets/skin/" + s + "')", d.style.visibility = "visible";
      var b = o.face;
      void 0 !== b ? (p.style.display = "block", p.style.backgroundImage = "url('/assets/faceset/" + b + "')") : p.style.display = "none", h.innerText = i;

      var _ = function (e) {
        var n;
        void 0 !== e.genericMessage && (n = function (e) {
          var n = t.get(e);

          if (void 0 !== n && !u.a.isEmpty(n.values)) {
            var _e28, _t21;

            if (_e28 = void 0 === n.condition ? n.values : n.values.filter(function (e) {
              return g(n.condition, e.conditionParams);
            }), 0 === _e28.length) return;
            return _t21 = 1 === _e28.length ? 0 : l.a.getRandomInteger(0, _e28.length - 1), _e28[_t21].message;
          }

          return;
        }(e.genericMessage));
        void 0 === n && (n = e.message);
        void 0 !== n && (n = n);
        return n;
      }(o);

      y.innerText = void 0 !== _ ? _ : "";
      var E = document.getElementById("dialogEdgeArea");
      if (null === E) return void console.error("Element not foud: dialogEdgeArea");

      for (; E.firstChild;) {
        E.removeChild(E.firstChild);
      }

      n = void 0;
      var w = [];

      if (void 0 !== o.edges) {
        var _iterator20 = _createForOfIteratorHelper(o.edges),
            _step20;

        try {
          for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
            var _e29 = _step20.value;
            g(_e29.condition) && w.push(_e29);
          }
        } catch (err) {
          _iterator20.e(err);
        } finally {
          _iterator20.f();
        }
      }

      var S = function S(t) {
        if (void 0 !== t.action) {
          var _n17,
              _i10 = document.getElementById("userInput");

          if (null === _i10) return void console.warn("Input required");
          _n17 = _i10.value, _n17 = _n17.trim(), _n17 = a.a.escapeText(_n17), m(t, e, r, _n17);
        } else void 0 !== t.node ? v(e, r, i, t.node, s, c) : f(0);
      };

      if (0 === w.length) f(o.closingTimeout);else if (1 === w.length && void 0 === w[0].message) {
        if (void 0 === w[0].inputType) n = function n() {
          S(w[0]);
        };else {
          var _e30 = document.createElement("input");

          switch (w[0].inputType) {
            case 1:
              _e30.type = "number";
              break;

            case 0:
              _e30.type = "text";
              break;

            default:
              console.error("Unexpected DialogInputType for edge: " + w[0].id);
          }

          _e30.id = "userInput", E.appendChild(_e30);
        }
      } else {
        var _iterator21 = _createForOfIteratorHelper(w),
            _step21;

        try {
          var _loop = function _loop() {
            var e = _step21.value;
            var t = document.createElement("div");
            void 0 !== e.message && (t.innerText = e.message), t.onclick = function () {
              S(e);
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

    function g(e, t) {
      return void 0 === e || (e in o.a ? o.a[e](t) : (console.error('Condition not found: "' + e + '", on event.'), !1));
    }

    function m(e, t, n, r) {
      var i = e.script;
      if (void 0 === i) return !1;
      var o = new i[i](event, n, t);
      if (u.a.isEmpty(o)) return console.error('Script "' + i + '" not found (dialog edge: ' + e.id + ")"), !1;
      var a = e.action;
      if (void 0 === a) return !1;
      if (!(a in o)) return console.error('Action "' + a + '" not found in script "' + i + '" (dialog edge: ' + e.id + ")"), !1;

      try {
        return o[a](r);
      } catch (e) {
        console.error(e);
      }

      return !1;
    }

    e.closeDialog = r, e.loadString = d, e.saveString = function (e, t, n) {
      var r = JSON.stringify(t);
      s.a.save(e + "", r, i.a.STRING, function (t, r) {
        if (void 0 !== t) {
          var _e31 = parseInt(t);

          if (isNaN(_e31)) return console.error("Error while saving string"), void n();
        }

        n(e);
      });
    }, e.loadDialog = p, e.saveDialog = function (e, t, n) {
      var r = new Map(),
          o = new Map();
      h(t, r, o, !0);
      var a = {
        nodes: Array.from(r.values()),
        edges: Array.from(o.values())
      };
      s.a.save(e + "", JSON.stringify(a), i.a.DIALOG, function (t, r) {
        r ? (u.a.isNumeric(t) && (e = parseInt(t)), n(e)) : n();
      });
    }, e.deconstructDialogTree = h, e.loadGenericMessages = function (e, n, r) {
      isNaN(e) ? r(!1) : s.a.load(e + "", i.a.GENERIC_MESSAGE, function (n) {
        u.a.isEmpty(n) || "string" != typeof n ? (console.error("Error while loading dialog: " + e), r(!1)) : (t = JSON.parse(n), r(!0));
      });
    }, e.showComplexDialog = function (e, t, n, r, i, o) {
      p(r, i.lang, function (a) {
        void 0 === a ? console.error("Error while loading dialog: " + r) : v(e, t, n, a, i.skin, o);
      });
    }, e.showSimpleDialog = function (e, t, n, r, i, o) {
      d(r, i.lang, function (r) {
        var a = c.a.getDialogNode();
        a.message = r, v(e, t, n, a, i.skin, o);
      });
    }, e.launchAction = m, e.search = function (e, t, n) {
      return function e(t, n, r, i, o) {
        if (!i.has(t.id)) {
          if (!r && t.id === n) return t;
          i.set(t.id, t);
          var _a4 = t.edges;

          if (!u.a.isEmpty(_a4)) {
            var _iterator22 = _createForOfIteratorHelper(_a4),
                _step22;

            try {
              for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
                var _t22 = _step22.value;

                if (!o.has(_t22.id)) {
                  if (r && _t22.id === n) return _t22;
                  o.set(_t22.id, _t22);
                  var _a5 = _t22.node;

                  if (void 0 !== _a5) {
                    var _t23 = e(_a5, n, r, i, o);

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
  }(r || (r = {}));
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
    return u;
  });
  var r = n(13),
      i = n(9),
      o = n(0);
  var a = "msg",
      s = "dlg";

  var l = /*#__PURE__*/function (_r$a) {
    _inherits(l, _r$a);

    var _super = _createSuper(l);

    function l(e, t, n) {
      _classCallCheck(this, l);

      return _super.call(this, e, t, n);
    }

    _createClass(l, [{
      key: "speak",
      value: function speak() {
        var e = this.loadMem(a + (this.event.currentState + 1));
        o.a.isEmpty(e) && (e = this.loadMem(a)), this.showSimpleDialog(e, i.b);
      }
    }, {
      key: "dialog",
      value: function dialog() {
        var e = this.event.states[this.event.currentState];
        void 0 !== e.dialog && this.showComplexDialog(e.dialog, i.b);
      }
    }]);

    return l;
  }(r.a);

  l.tooltip = "Basic script with simple actions, mainly for generic NPCs";

  var c = /*#__PURE__*/function (_r$a2) {
    _inherits(c, _r$a2);

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
  }(r.a);

  c.tooltip = "Provide transportation from one map to another";

  var u = /*#__PURE__*/function (_r$a3) {
    _inherits(u, _r$a3);

    var _super3 = _createSuper(u);

    function u() {
      _classCallCheck(this, u);

      return _super3.apply(this, arguments);
    }

    _createClass(u, [{
      key: "testAction",
      value: function testAction() {
        return this.showSimpleDialog("2", i.b), !0;
      }
    }, {
      key: "giantTest",
      value: function giantTest() {
        this.showSimpleDialog("4", i.b);
        var e = this;
        return this.wait(1e3).then(function () {
          e.stepFromTarget(e.hero);
        }), this.incrementStateVar(), !0;
      }
    }, {
      key: "giantTest2",
      value: function giantTest2() {
        this.showSimpleDialog("5", i.b);
        var e = this;
        return this.wait(1e3).then(function () {
          e.stepFromTarget(e.hero);
        }), this.incrementStateVar(), !0;
      }
    }, {
      key: "giantTest3",
      value: function giantTest3() {
        return this.showSimpleDialog("6", i.b), this.moveToTarget({
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

    return u;
  }(r.a);

  u.tooltip = "Script for tests";
}, function (e, t, n) {
  "use strict";

  var r;
  n.d(t, "a", function () {
    return r;
  }), function (e) {
    e.showError = function (e, t) {
      null !== e ? (void 0 !== t && t.clear(e), e.fillStyle = "#000000", e.font = "bold 20px Oldenburg", e.fillText("An error occurred :(", 60, 60)) : console.error("Context is null");
    };
  }(r || (r = {}));
}, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return r;
  });
  var r,
      i = n(7),
      o = n(10),
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
      var r = new Array();

      if (!s.a.isEmpty(e.events)) {
        var _iterator23 = _createForOfIteratorHelper(e.events),
            _step23;

        try {
          for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
            var _n18 = _step23.value;
            r.push(t(_n18));
          }
        } catch (err) {
          _iterator23.e(err);
        } finally {
          _iterator23.f();
        }
      }

      var i = a.a.getSave();
      return i.currentMap = e.id, i.hero = n, i.maps[e.id] = {
        events: r
      }, i;
    }, e.loadMapSave = function (e, t, n, r) {
      o.a.loadMap(t, e.context.canvas, function (t) {
        var o = t;
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
        }(e.save, o), e.changeMap(o, function () {
          if (e.resetTranslation(), e.hero.i = n.i, e.hero.j = n.j, i.a.initTransientData(o, e.grid, e.hero), e.focus = e.grid.mapCellToCanvas(n), !s.a.isEmpty(e.map.events)) for (var _t24 = 0; _t24 < e.map.events.length; _t24++) {
            var _n20 = i.a.initTransientData(e.map, e.grid, e.map.events[_t24]);

            void 0 !== _n20 && (e.map.events[_t24] = _n20);
          }
          r(!0);
        });
      });
    };
  }(r || (r = {}));
}, function (e, t, n) {
  var r = n(35);
  "string" == typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals);
  (0, n(28)["default"])("f2065b44", r, !1, {});
}, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return r;
  });
  var r,
      i = n(6),
      o = n(17),
      a = n(3),
      s = n(0);
  !function (e) {
    e.loadTileset = function (e, t, n) {
      i.a.load(e + "", a.a.TILESET, function (r) {
        if (s.a.isEmpty(r)) console.error("Error while loading tileset: " + e), n();else try {
          var _e33 = JSON.parse(r);

          n(_e33);
        } catch (r) {
          "SyntaxError" === r.name ? console.error("Error while parsing tileset: " + e) : "TypeError" === r.name ? console.error("Error while reading tileset: " + e) : console.error(r), o.a.showError(t), n();
        }
      });
    }, e.initTransientData = function (e) {
      void 0 !== e.imageData && (e.imageWidth = e.imageData.width, e.imageHeight = e.imageData.height);
    };
  }(r || (r = {}));
}, function (e, t, n) {
  "use strict";

  e.exports = function (e) {
    var t = [];
    return t.toString = function () {
      return this.map(function (t) {
        var n = function (e, t) {
          var n = e[1] || "",
              r = e[3];
          if (!r) return n;

          if (t && "function" == typeof btoa) {
            var i = (a = r, s = btoa(unescape(encodeURIComponent(JSON.stringify(a)))), l = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s), "/*# ".concat(l, " */")),
                o = r.sources.map(function (e) {
              return "/*# sourceURL=".concat(r.sourceRoot || "").concat(e, " */");
            });
            return [n].concat(o).concat([i]).join("\n");
          }

          var a, s, l;
          return [n].join("\n");
        }(t, e);

        return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n;
      }).join("");
    }, t.i = function (e, n, r) {
      "string" == typeof e && (e = [[null, e, ""]]);
      var i = {};
      if (r) for (var o = 0; o < this.length; o++) {
        var a = this[o][0];
        null != a && (i[a] = !0);
      }

      for (var s = 0; s < e.length; s++) {
        var l = [].concat(e[s]);
        r && i[l[0]] || (n && (l[2] ? l[2] = "".concat(n, " and ").concat(l[2]) : l[2] = n), t.push(l));
      }
    }, t;
  };
}, function (e, t, n) {
  "use strict";

  function r(e, t, n, r, i, o, a, s) {
    var l,
        c = "function" == typeof e ? e.options : e;
    if (t && (c.render = t, c.staticRenderFns = n, c._compiled = !0), r && (c.functional = !0), o && (c._scopeId = "data-v-" + o), a ? (l = function l(e) {
      (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), i && i.call(this, e), e && e._registeredComponents && e._registeredComponents.add(a);
    }, c._ssrRegister = l) : i && (l = s ? function () {
      i.call(this, (c.functional ? this.parent : this).$root.$options.shadowRoot);
    } : i), l) if (c.functional) {
      c._injectStyles = l;
      var u = c.render;

      c.render = function (e, t) {
        return l.call(t), u(e, t);
      };
    } else {
      var f = c.beforeCreate;
      c.beforeCreate = f ? [].concat(f, l) : [l];
    }
    return {
      exports: e,
      options: c
    };
  }

  n.d(t, "a", function () {
    return r;
  });
}, function (e, t, n) {
  "use strict";

  n.d(t, "b", function () {
    return r;
  }), n.d(t, "a", function () {
    return o;
  });
  var r,
      i = n(6);
  !function (e) {
    e[e.game = 0] = "game", e[e.mapper = 1] = "mapper", e[e.tilePicker = 2] = "tilePicker";
  }(r || (r = {}));

  var o = /*#__PURE__*/function () {
    function o(e, t, n) {
      _classCallCheck(this, o);

      var r;
      this.canvas = e, this.currentTranslation = {
        x: 0,
        y: 0
      }, this.gridType = n, r = this, i.a.loadProperties(function (e) {
        r.deferredInit(e), r.updateSizingDerivates(), r.refreshCanvasSize(), t(r);
      });
    }

    _createClass(o, [{
      key: "deferredInit",
      value: function deferredInit(e) {
        this.cellH = e.get("cellHeight"), this.cellW = e.get("cellWidth"), this.rows = e.get(r[this.gridType] + "Rows"), this.columns = e.get(r[this.gridType] + "Columns");
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
            r = Math.floor((e.y - t.top) / this.scaleY + this.currentTranslation.y);
        return {
          i: Math.floor((e.x - t.left) / (this.cellW * this.scaleX) + this.currentTranslation.x / this.cellW),
          j: Math.floor((e.y - t.top) / (this.cellH * this.scaleY) + this.currentTranslation.y / this.cellH),
          x: n,
          y: r
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
      value: function changeTranslation(e, t, n, r) {
        var i = e - this.halfColumns * this.cellW;
        if (i < 0) i = 0;else {
          var _e34 = (n - this.columns) * this.cellW;

          i > _e34 && (i = _e34);
        }
        var o = t - this.halfRows * this.cellH;
        if (o < 0) o = 0;else {
          var _e35 = (r - this.rows) * this.cellH;

          o > _e35 && (o = _e35);
        }
        return this.applyTranslate(i, o);
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
            r = n - this.halfColumns - 1,
            i = n + this.halfColumns + 1;
        return this.checkBoundariesLimit(r, i, t);
      }
    }, {
      key: "getBoundariesY",
      value: function getBoundariesY(e, t) {
        var n = Math.floor(e / this.cellH),
            r = n - this.halfRows - 1,
            i = n + this.halfRows + 1;
        return this.checkBoundariesLimit(r, i, t);
      }
    }, {
      key: "checkBoundariesLimit",
      value: function checkBoundariesLimit(e, t, n, r) {
        return e < 0 && (void 0 !== r && r || (t -= e), e = 0), t >= n && (void 0 !== r && r || (e -= t - n + 1), t = n - 1), {
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

    return o;
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

  var r = n(20),
      i = n(10),
      o = n(1),
      a = n(9),
      s = n(2),
      l = n(6),
      c = n(3),
      u = n(0),
      f = window.requestAnimationFrame || function (e) {
    return window.setTimeout(e, 40), Math.floor(100 * Math.random());
  },
      d = window.cancelAnimationFrame;

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
            n = f(function () {
          t.mainGameLoop(n);
        });
      }
    }, {
      key: "mainGameLoop",
      value: function mainGameLoop(e) {
        var t = this,
            n = f(function () {
          t.mainGameLoop(n);
        });
        !this.paused && this.mainGameLoop_pre() ? (this.render(this.map, this.context), this.mainGameLoop_post()) : d(e);
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

          this.context.save(), this.context.beginPath(), this.context.fillStyle = o.a.Color.YELLOW, this.context.scale(2, 1), this.context.arc(Math.floor((_e36.x + this.grid.cellW / 2) / 2), _e36.y + this.grid.cellH - 4, 8, 0, o.a.DOUBLE_PI), this.context.closePath(), this.context.globalAlpha = .4, this.context.fill(), this.context.restore();
        }
      }
    }, {
      key: "renderFocus",
      value: function renderFocus() {
        null != this.focus.x && null != this.focus.y && this.renderingConfiguration.showFocus && (this.context.save(), this.context.beginPath(), this.context.fillStyle = o.a.Color.BLACK, this.context.arc(this.focus.x + Math.floor(this.grid.cellW / 2), this.focus.y + Math.floor(this.grid.cellH / 2), 15, 0, o.a.DOUBLE_PI), this.context.closePath(), this.context.fill(), this.context.restore());
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
        this.paused = null != e ? e : !this.paused, this.paused ? this.pauseStartTime = u.a.now() : (void 0 === this.pauseStartTime && (this.pauseStartTime = 0), this.pauseDuration = u.a.now() - this.pauseStartTime, this.pauseStartTime = void 0);
      }
    }, {
      key: "changeMap",
      value: function changeMap(e, t) {
        this.togglePause(!0);
        u.a.isEmpty(e) && (console.error("Uninitialized map"), console.trace()), this.map = e, this.changeTile(e.tileset.image, function (e) {
          setTimeout(function () {
            i.a.initTransientData(e), e.togglePause(!1);
          }), t(e);
        });
      }
    }, {
      key: "changeTile",
      value: function changeTile(e, t) {
        var n = this;
        r.a.loadTileset(e, this.context, function (r) {
          if (void 0 === r) return console.error("Cannot change tile, tileset not found: " + e), void t(n);
          n.map.tileset = r, l.a.load(r.image, c.a.TILE, function (e) {
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
        var r = this.redrawArea.y,
            a = this.redrawArea.y + this.redrawArea.h,
            l = this.redrawArea.x,
            c = this.redrawArea.x + this.redrawArea.w;

        if (!u.a.isEmpty(e)) {
          for (var _f2 = r; _f2 <= a; _f2++) {
            for (var _r14 = l; _r14 <= c; _r14++) {
              var _a6 = s.a.cellToGid({
                i: _r14,
                j: _f2
              }, e.width);

              for (var _i11 = o.a.MapLayer.LOW; _i11 <= o.a.MapLayer.TOP; _i11++) {
                var _o8 = this.map.layers[_i11];
                if (void 0 === _o8 || void 0 === _o8.data || _o8.data.length < _a6) continue;
                var _l = _o8.data[_a6];
                if (u.a.isEmpty(_l)) continue;
                var _c2 = 0;
                void 0 !== e.tileset.onTop && (_c2 = s.a.normalizeZIndex(e.tileset.onTop[_l])), 0 !== _c2 && n || (this.applyLayerCustomizations(_i11), u.a.isEmpty(_o8.opacity) || (t.globalAlpha = _o8.opacity), this.renderCell(t, e.tileset, _l, _r14, _f2), t.globalAlpha = 1, this.removeLayerCustomizations(_i11));
              }

              i.a.renderUI(this.map, this.grid, this.context, this.renderingConfiguration, _r14, _f2, !1);
            }
          }

          this.renderPointer();

          for (var _i12 = r; _i12 <= a; _i12++) {
            for (var _a7 = l; _a7 <= c && n; _a7++) {
              for (var _n21 = r; _n21 <= _i12; _n21++) {
                var _r15 = s.a.cellToGid({
                  i: _a7,
                  j: _n21
                }, e.width);

                for (var _l2 = o.a.MapLayer.LOW; _l2 <= o.a.MapLayer.TOP; _l2++) {
                  var _o9 = this.map.layers[_l2];
                  if (void 0 === _o9 || void 0 === _o9.data || _o9.data.length < _r15) continue;
                  var _c3 = _o9.data[_r15];
                  if (u.a.isEmpty(_c3)) continue;
                  var _f3 = 0;
                  void 0 !== e.tileset.onTop && (_f3 = s.a.normalizeZIndex(e.tileset.onTop[_c3])), _f3 > 0 && _n21 + _f3 === _i12 && (this.applyLayerCustomizations(_l2), u.a.isEmpty(_o9.opacity) || (t.globalAlpha = _o9.opacity), this.renderCell(t, e.tileset, _c3, _a7, _n21), t.globalAlpha = 1, this.removeLayerCustomizations(_l2));
                }
              }
            }

            for (var _e37 = l; _e37 <= c; _e37++) {
              this.renderDynamicElements(r, a, l, c, _e37, _i12, !1);
            }
          }

          for (var _e38 = r; _e38 <= a; _e38++) {
            for (var _t25 = l; _t25 <= c; _t25++) {
              this.renderDynamicElements(r, a, l, c, _t25, _e38, !0), i.a.renderUI(this.map, this.grid, this.context, this.renderingConfiguration, _t25, _e38, !0);
            }
          }
        }

        i.a.renderGlobalUI(this.grid, this.context, this.renderingConfiguration), this.renderFocus();
      }
    }, {
      key: "renderCell",
      value: function renderCell(e, t, n, r, i) {
        var o = s.a.gidToCell(n, Math.floor(t.imageWidth / this.grid.cellW));
        e.drawImage(t.imageData, Math.floor(o.i * this.grid.cellW), Math.floor(o.j * this.grid.cellH), this.grid.cellW, this.grid.cellH, Math.floor(r * this.grid.cellW), Math.floor(i * this.grid.cellH), this.grid.cellW, this.grid.cellH);
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

  var r;
  n.d(t, "a", function () {
    return r;
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
  }(r || (r = {}));
}, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return d;
  });
  var r = n(11),
      i = n(25),
      o = n(7),
      a = n(10),
      s = n(18),
      l = n(9),
      c = n(1),
      u = n(0),
      f = n(5);

  var d = /*#__PURE__*/function (_i$a) {
    _inherits(d, _i$a);

    var _super4 = _createSuper(d);

    function d(e, t) {
      var _this;

      _classCallCheck(this, d);

      _this = _super4.call(this, e), _this.FPS = 20, _this.refreshInterval = 1e3 / _this.FPS, _this.autoFPS = !0, _this.secondFPS = 0, _this.countFPS = 0, _this.lastFPS = 0, _this.fpsPerformance = [22, 21, 20], _this.launcher = t;
      return _this;
    }

    _createClass(d, [{
      key: "mainGameLoop_pre",
      value: function mainGameLoop_pre() {
        if (!_get(_getPrototypeOf(d.prototype), "mainGameLoop_pre", this).call(this)) return !1;
        var e = !1,
            t = this,
            n = u.a.now(),
            r = this;

        if (!u.a.isEmpty(this.hero)) {
          var _i13 = o.a.update(this.hero, this, this.hero, this.action, n, this.pauseDuration);

          void 0 !== _i13 && this.launcher(this.hero, this, this.hero, _i13), e = o.a.manageMovements(this.map, this.grid, this.hero, function (e, n) {
            t.grid.changeTranslation(t.focus.x + e, t.focus.y + n, t.map.width, t.map.height);
          }, function (e, n) {
            t.focus.x += e, t.focus.y += n;
          }, function (e) {
            r.registerAction(e.i, e.j);
          });
        }

        if (!u.a.isEmpty(this.map.events)) {
          var _iterator26 = _createForOfIteratorHelper(this.map.events),
              _step26;

          try {
            for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
              var _t26 = _step26.value;

              var _r16 = o.a.update(_t26, this, this.hero, this.action, n, this.pauseDuration);

              void 0 !== _r16 && this.launcher(_t26, this, this.hero, _r16), e = e || o.a.manageMovements(this.map, this.grid, _t26, l.b, l.b, l.b);
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
        _get(_getPrototypeOf(d.prototype), "mainGameLoop_post", this).call(this), this.context.fillStyle = "#000000", this.context.font = "bold 30px Oldenburg", this.context.fillText("(it's not ready yet)", this.grid.getCurrentTranslation().x + 20, this.grid.getCurrentTranslation().y + 40), this.renderFPS();
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
        var e = Math.floor(u.a.now() / 1e3);
        if (e === this.secondFPS) this.countFPS++;else if (this.lastFPS = this.countFPS, this.countFPS = 1, this.secondFPS = e, !0 === this.autoFPS) {
          this.fpsPerformance.shift(), this.fpsPerformance[2] = this.lastFPS;

          var _e39 = (this.fpsPerformance[0] + this.fpsPerformance[1] + this.fpsPerformance[2]) / 3;

          this.FPS = Math.ceil(_e39) + 2;
        }
        this.renderingConfiguration.showFPS && (this.context.fillStyle = c.a.Color.RED, this.context.font = "bold 18px Oldenburg", this.context.fillText("" + this.lastFPS, this.grid.getCurrentTranslation().x + 10, this.grid.getCurrentTranslation().y + 20));
      }
    }, {
      key: "renderDynamicElements",
      value: function renderDynamicElements(e, t, n, r, i, a, s) {
        try {
          o.a.isVisible(this.hero, e, t, n, r, i, a, s) && o.a.render(this.grid, this.hero, this.context, !0);
        } catch (e) {
          console.error(e);
        }

        if (!u.a.isEmpty(this.map.events)) {
          var _iterator27 = _createForOfIteratorHelper(this.map.events),
              _step27;

          try {
            for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
              var _l3 = _step27.value;

              try {
                o.a.isVisible(_l3, e, t, n, r, i, a, s) && o.a.render(this.grid, _l3, this.context, !0, this.pointer);
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
        var n, i;

        if (void 0 === e) {
          if (!u.a.isEmpty(this.map)) return void t(!1);
          n = r.a.maps.start.map, i = f.a.getHero();
        } else this.save = e, n = e.currentMap, i = e.hero;

        var a = o.a.initTransientData(this.map, this.grid, i);
        void 0 === a ? console.error("Cannot initialize hero event") : this.hero = a, s.a.loadMapSave(this, n, i, t);
      }
    }, {
      key: "startMovement",
      value: function startMovement(e, t) {
        return !(e < 0 || e >= this.map.width || t < 0 || t >= this.map.height) && o.a.startMovement(this.grid, this.hero, e, t);
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
        void 0 === this.save && (this.save = f.a.getSave()), this.save.config.lang = e;
      }
    }, {
      key: "toggleNaturalScale",
      value: function toggleNaturalScale(e, t) {
        this.grid.toggleNaturalScale(e, t), this.grid.refreshCanvasSize(), this.changeScale(), this.reapplyTranslation();
      }
    }]);

    return d;
  }(i.a);
}, function (e, t, n) {
  "use strict";

  function r(e, t) {
    for (var n = [], r = {}, i = 0; i < t.length; i++) {
      var o = t[i],
          a = o[0],
          s = {
        id: e + ":" + i,
        css: o[1],
        media: o[2],
        sourceMap: o[3]
      };
      r[a] ? r[a].parts.push(s) : n.push(r[a] = {
        id: a,
        parts: [s]
      });
    }

    return n;
  }

  n.r(t), n.d(t, "default", function () {
    return p;
  });
  var i = "undefined" != typeof document;
  if ("undefined" != typeof DEBUG && DEBUG && !i) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");

  var o = {},
      a = i && (document.head || document.getElementsByTagName("head")[0]),
      s = null,
      l = 0,
      c = !1,
      u = function u() {},
      f = null,
      d = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());

  function p(e, t, n, i) {
    c = n, f = i || {};
    var a = r(e, t);
    return h(a), function (t) {
      for (var n = [], i = 0; i < a.length; i++) {
        var s = a[i];
        (l = o[s.id]).refs--, n.push(l);
      }

      t ? h(a = r(e, t)) : a = [];

      for (i = 0; i < n.length; i++) {
        var l;

        if (0 === (l = n[i]).refs) {
          for (var c = 0; c < l.parts.length; c++) {
            l.parts[c]();
          }

          delete o[l.id];
        }
      }
    };
  }

  function h(e) {
    for (var t = 0; t < e.length; t++) {
      var n = e[t],
          r = o[n.id];

      if (r) {
        r.refs++;

        for (var i = 0; i < r.parts.length; i++) {
          r.parts[i](n.parts[i]);
        }

        for (; i < n.parts.length; i++) {
          r.parts.push(g(n.parts[i]));
        }

        r.parts.length > n.parts.length && (r.parts.length = n.parts.length);
      } else {
        var a = [];

        for (i = 0; i < n.parts.length; i++) {
          a.push(g(n.parts[i]));
        }

        o[n.id] = {
          id: n.id,
          refs: 1,
          parts: a
        };
      }
    }
  }

  function v() {
    var e = document.createElement("style");
    return e.type = "text/css", a.appendChild(e), e;
  }

  function g(e) {
    var t,
        n,
        r = document.querySelector('style[data-vue-ssr-id~="' + e.id + '"]');

    if (r) {
      if (c) return u;
      r.parentNode.removeChild(r);
    }

    if (d) {
      var i = l++;
      r = s || (s = v()), t = b.bind(null, r, i, !1), n = b.bind(null, r, i, !0);
    } else r = v(), t = _.bind(null, r), n = function n() {
      r.parentNode.removeChild(r);
    };

    return t(e), function (r) {
      if (r) {
        if (r.css === e.css && r.media === e.media && r.sourceMap === e.sourceMap) return;
        t(e = r);
      } else n();
    };
  }

  var m,
      y = (m = [], function (e, t) {
    return m[e] = t, m.filter(Boolean).join("\n");
  });

  function b(e, t, n, r) {
    var i = n ? "" : r.css;
    if (e.styleSheet) e.styleSheet.cssText = y(t, i);else {
      var o = document.createTextNode(i),
          a = e.childNodes;
      a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(o, a[t]) : e.appendChild(o);
    }
  }

  function _(e, t) {
    var n = t.css,
        r = t.media,
        i = t.sourceMap;
    if (r && e.setAttribute("media", r), f.ssrId && e.setAttribute("data-vue-ssr-id", t.id), i && (n += "\n/*# sourceURL=" + i.sources[0] + " */", n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */"), e.styleSheet) e.styleSheet.cssText = n;else {
      for (; e.firstChild;) {
        e.removeChild(e.firstChild);
      }

      e.appendChild(document.createTextNode(n));
    }
  }
}, function (e, t, n) {
  "use strict";

  var r = function r() {
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

  r._withStripped = !0;
  var i = n(8),
      o = n(6),
      a = i.a.extend({
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
          gapi.auth2.getAuthInstance().isSignedIn.get() && (i.a.set(t, "loginStatus", !0), i.a.set(t, "loginService", "google"));
        });
      }, window.gLoginCallback = this.gLoginCallback;
    },
    methods: {
      logoutCallback: function logoutCallback() {
        i.a.set(this, "loginStatus", !1), i.a.set(this, "loginService", void 0), i.a.set(this, "flagLoggingOut", !1);
      },
      logout: function logout() {
        if (this.loginStatus) {
          switch (this.loginService) {
            case "facebook":
              if (void 0 !== this.fbToken) {
                i.a.set(this, "flagLoggingOut", !0);

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

          o.a.sendGETRequest("logout", function (e) {});
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
        o.a.sendPOSTRequest("/auth", JSON.stringify(e), function (n) {
          if (void 0 !== n) try {
            if (JSON.parse(n).result) return i.a.set(t, "loginStatus", !0), void i.a.set(t, "loginService", e.service);
          } catch (e) {
            console.error(n);
          }
          i.a.set(t, "loginStatus", !1), i.a.set(t, "loginService", void 0), console.error("Logged with " + e.service + " failed");
        });
      }
    }
  }),
      s = (n(34), n(22)),
      l = Object(s.a)(a, r, [], !1, null, "08ab550b", null);
  l.options.__file = "src/client/components/Login.vue";
  t.a = l.exports;
}, function (e, t, n) {
  var r = n(43);
  "string" == typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals);
  (0, n(28)["default"])("6a300988", r, !1, {});
}, function (e, t, n) {
  (function (e) {
    var r = void 0 !== e && e || "undefined" != typeof self && self || window,
        i = Function.prototype.apply;

    function o(e, t) {
      this._id = e, this._clearFn = t;
    }

    t.setTimeout = function () {
      return new o(i.call(setTimeout, r, arguments), clearTimeout);
    }, t.setInterval = function () {
      return new o(i.call(setInterval, r, arguments), clearInterval);
    }, t.clearTimeout = t.clearInterval = function (e) {
      e && e.close();
    }, o.prototype.unref = o.prototype.ref = function () {}, o.prototype.close = function () {
      this._clearFn.call(r, this._id);
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
        var r,
            i,
            o,
            a,
            s,
            l = 1,
            c = {},
            u = !1,
            f = e.document,
            d = Object.getPrototypeOf && Object.getPrototypeOf(e);
        d = d && d.setTimeout ? d : e, "[object process]" === {}.toString.call(e.process) ? r = function r(e) {
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
        }() ? e.MessageChannel ? ((o = new MessageChannel()).port1.onmessage = function (e) {
          h(e.data);
        }, r = function r(e) {
          o.port2.postMessage(e);
        }) : f && "onreadystatechange" in f.createElement("script") ? (i = f.documentElement, r = function r(e) {
          var t = f.createElement("script");
          t.onreadystatechange = function () {
            h(e), t.onreadystatechange = null, i.removeChild(t), t = null;
          }, i.appendChild(t);
        }) : r = function r(e) {
          setTimeout(h, 0, e);
        } : (a = "setImmediate$" + Math.random() + "$", s = function s(t) {
          t.source === e && "string" == typeof t.data && 0 === t.data.indexOf(a) && h(+t.data.slice(a.length));
        }, e.addEventListener ? e.addEventListener("message", s, !1) : e.attachEvent("onmessage", s), r = function r(t) {
          e.postMessage(a + t, "*");
        }), d.setImmediate = function (e) {
          "function" != typeof e && (e = new Function("" + e));

          for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) {
            t[n] = arguments[n + 1];
          }

          var i = {
            callback: e,
            args: t
          };
          return c[l] = i, r(l), l++;
        }, d.clearImmediate = p;
      }

      function p(e) {
        delete c[e];
      }

      function h(e) {
        if (u) setTimeout(h, 0, e);else {
          var t = c[e];

          if (t) {
            u = !0;

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
              p(e), u = !1;
            }
          }
        }
      }
    }("undefined" == typeof self ? void 0 === e ? this : e : self);
  }).call(this, n(24), n(33));
}, function (e, t) {
  var n,
      r,
      i = e.exports = {};

  function o() {
    throw new Error("setTimeout has not been defined");
  }

  function a() {
    throw new Error("clearTimeout has not been defined");
  }

  function s(e) {
    if (n === setTimeout) return setTimeout(e, 0);
    if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);

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
      n = "function" == typeof setTimeout ? setTimeout : o;
    } catch (e) {
      n = o;
    }

    try {
      r = "function" == typeof clearTimeout ? clearTimeout : a;
    } catch (e) {
      r = a;
    }
  }();
  var l,
      c = [],
      u = !1,
      f = -1;

  function d() {
    u && l && (u = !1, l.length ? c = l.concat(c) : f = -1, c.length && p());
  }

  function p() {
    if (!u) {
      var e = s(d);
      u = !0;

      for (var t = c.length; t;) {
        for (l = c, c = []; ++f < t;) {
          l && l[f].run();
        }

        f = -1, t = c.length;
      }

      l = null, u = !1, function (e) {
        if (r === clearTimeout) return clearTimeout(e);
        if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);

        try {
          r(e);
        } catch (t) {
          try {
            return r.call(null, e);
          } catch (t) {
            return r.call(this, e);
          }
        }
      }(e);
    }
  }

  function h(e, t) {
    this.fun = e, this.array = t;
  }

  function v() {}

  i.nextTick = function (e) {
    var t = new Array(arguments.length - 1);
    if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) {
      t[n - 1] = arguments[n];
    }
    c.push(new h(e, t)), 1 !== c.length || u || s(p);
  }, h.prototype.run = function () {
    this.fun.apply(null, this.array);
  }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = v, i.addListener = v, i.once = v, i.off = v, i.removeListener = v, i.removeAllListeners = v, i.emit = v, i.prependListener = v, i.prependOnceListener = v, i.listeners = function (e) {
    return [];
  }, i.binding = function (e) {
    throw new Error("process.binding is not supported");
  }, i.cwd = function () {
    return "/";
  }, i.chdir = function (e) {
    throw new Error("process.chdir is not supported");
  }, i.umask = function () {
    return 0;
  };
}, function (e, t, n) {
  "use strict";

  var r = n(19);
  n.n(r).a;
}, function (e, t, n) {
  "use strict";

  n.r(t);
  var r = n(21),
      i = n.n(r)()(!0);
  i.push([e.i, "\n.root[data-v-08ab550b] {\n    width: auto;\n    text-align: center;\n    margin-bottom: 1em;\n}\n.root div[data-v-08ab550b] {\n    margin:0.5em;\n    text-align: center;\n}\n.statusIcon[data-v-08ab550b] {\n    margin: 0.5em;\n    border-radius: 100%;\n    width: 40px;\n    height: 40px;\n}\n.loggedIcon[data-v-08ab550b] {\n    border-width: 2px;\n    border-style: solid;\n    border-color: green;\n    background-color: lightgreen;\n}\n.unloggedIcon[data-v-08ab550b] {\n    border-width: 2px;\n    border-style: dashed;\n    border-color: gray;\n    background-color: lightgray;\n}\n.loading[data-v-08ab550b] {\n    width: 2em;\n    height: 2em;\n}\n", "", {
    version: 3,
    sources: ["webpack://src/client/components/Login.vue"],
    names: [],
    mappings: ";AAwMA;IACA,WAAA;IACA,kBAAA;IACA,kBAAA;AACA;AACA;IACA,YAAA;IACA,kBAAA;AACA;AACA;IACA,aAAA;IACA,mBAAA;IACA,WAAA;IACA,YAAA;AACA;AACA;IACA,iBAAA;IACA,mBAAA;IACA,mBAAA;IACA,4BAAA;AACA;AACA;IACA,iBAAA;IACA,oBAAA;IACA,kBAAA;IACA,2BAAA;AACA;AACA;IACA,UAAA;IACA,WAAA;AACA",
    sourcesContent: ['<template>\n    <div class="root">\n        <script type="application/javascript" async defer crossorigin="anonymous" src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v6.0&appId=1885551381575204"><\/script>\n        <script type="application/javascript" async defer src="https://apis.google.com/js/platform.js?onload=gAsyncInit"><\/script>\n        <div v-show="!loginStatus">\n            \x3c!-- <img class="statusIcon unloggedIcon" src="/style/ui/unlogged.png" alt="Unlogged icon" title="You are not currently logged in"> --\x3e\n            \x3c!-- Google login --\x3e\n            <div class="g-signin2" data-onsuccess="gLoginCallback" data-theme="dark"></div>\n            \x3c!-- Facebook login --\x3e\n            <div class="fb-login-button" data-size="large" data-button-type="login_with" data-layout="default" data-auto-logout-link="false"\n                data-use-continue-as="false" data-width="" data-scope="email" ></div>\n            <br>\n            <slot name="unlogged"></slot>\n        </div>\n        <div v-if="loginStatus">\n            <img class="statusIcon loggedIcon" src="/style/ui/logged.png" alt="Logged icon" title="You are currently logged in!">\n            <br>\n            <div v-if="flagLoggingOut">\n                <img class="loading" src="/style/ui/spinner.gif" alt="logging out..." />\n            </div>\n            <div v-else>\n                <button v-on:click="logout">Logout</button>\n                <br><br>\n                <slot name="logged"></slot>\n            </div>\n        </div>\n    </div>\n</template>\n\n<script lang="ts">\nimport Vue from "vue"\nimport { Resource } from "../core/util/Resource"\nimport { AuthService, IAuthRequest, IAuthResponse } from "../../common/ServerAPI"\n\ndeclare let FB: any; // Loaded from Facebook script\ndeclare let gapi: any; // Loaded from Google script\n\ninterface FBLoginResponse {\n    status: "connected" | "not_authorized" | "unknown",\n    authResponse?: {\n        accessToken: string,\n        expiresIn: any,\n        signedRequest: any,\n        userID: string\n    }\n}\n\nexport default Vue.extend({\n    name: "login",\n    props: {\n        showIcons: {\n            type: Boolean,\n            required: false,\n            default: true\n        }\n    },\n    data: function (): {\n        loginStatus: boolean,\n        loginService?: AuthService,\n        fbToken?: string,\n        flagLoggingOut: boolean\n    } {\n        return {\n            loginStatus: false,\n            loginService: undefined,\n            fbToken: undefined,\n            flagLoggingOut: false\n       }\n    },\n    created: function() {\n        // Add Google login meta tags\n        let meta = document.createElement("meta");\n        meta.name = "google-signin-scope";\n        meta.content = "profile email";\n        document.head.appendChild(meta);\n\n        meta = document.createElement("meta");\n        meta.name = "google-signin-client_id";\n        meta.content = "106250700124-f3tm8cc2l6raccir6e5fi9osccuvhaj0.apps.googleusercontent.com";\n        document.head.appendChild(meta);\n\n        // Init Facebook login\n        let vueScope = this;\n        window["fbAsyncInit"] = function() {\n            FB.init({\n                appId: "1885551381575204",\n                autoLogAppEvents: false,\n                cookie: true,\n                xfbml: false,\n                version : "v6.0"\n            });\n            FB.Event.subscribe("auth.statusChange", function(response: FBLoginResponse) {\n                vueScope.fbLoginStatusChangeCallback(response);\n            });\n            FB.getLoginStatus(function(response: FBLoginResponse) {\n                vueScope.fbLoginStatusChangeCallback(response);\n            });\n        };\n\n        // Init Google login\n        window["gAsyncInit"] = function() {\n            gapi.load("auth2", function() {\n                const authInstance = gapi.auth2.getAuthInstance();\n                if(authInstance.isSignedIn.get()) {\n                    Vue.set(vueScope, "loginStatus", true);\n                    Vue.set(vueScope, "loginService", "google");\n                }\n            });\n        };\n        window["gLoginCallback"] = this.gLoginCallback;\n    },\n    methods: {\n        logoutCallback: function() {\n            Vue.set(this, "loginStatus", false);\n            Vue.set(this, "loginService", undefined);\n            Vue.set(this, "flagLoggingOut", false);\n        },\n        logout: function logout() {\n            // Check which service is used, only logout from that service\n            if(this.loginStatus) {\n                switch(this.loginService) {\n                case "facebook":\n                    // Facebook logout\n                    if(this.fbToken !== undefined) {\n                        // Since Facebook logout is slow, display an animation and hide the buttons\n                        Vue.set(this, "flagLoggingOut", true);\n                        let vueScope = this;\n                        // Remove permission, so that the user is asked to authenticate the app again\n                        // (seems like FB.logout() isn\'t enough, if you refresh the page you are still logged)\n                        FB.api("/me/permissions", "delete", {\n                            access_token: vueScope.fbToken\n                        }, function(response: any) {\n                            if(response.success !== true) {\n                                console.error("Facebook permission revoking failed: ", response);\n                            }\n                            FB.logout(function(response: FBLoginResponse)  {\n                                vueScope.logoutCallback();\n                            });\n                        });\n                        this.fbToken = undefined;\n                    }\n                    break;\n                case "google":\n                    // Google logout\n                    let auth2 = gapi.auth2.getAuthInstance();\n                    auth2.signOut().then(this.logoutCallback());\n                    break;\n                default:\n                    console.error("Unexpected loginService: " + this.loginService);\n                }\n                Resource.sendGETRequest("logout", function(response?: string) {\n                    // Nothing to do\n                });\n            } else {\n                console.error("Cannot logout, user is not currently logged in")\n            }\n        },\n        fbLoginStatusChangeCallback: function(response: FBLoginResponse) {\n            if(response.status === "connected") {\n                this.fbToken = response.authResponse!.accessToken;\n                let request: IAuthRequest = {\n                    service: "facebook",\n                    token: response.authResponse!.accessToken,\n                    userId: response.authResponse!.userID\n                };\n                this.doLogin(request);\n            }\n        },\n        gLoginCallback: function(googleUser: any) {\n            let request: IAuthRequest = {\n                service: "google",\n                token: googleUser.getAuthResponse().id_token\n            };\n            this.doLogin(request);\n        },\n        doLogin(request: IAuthRequest) {\n            let vueScope = this;\n            Resource.sendPOSTRequest("/auth", JSON.stringify(request), function(response?: string) {\n                if(response !== undefined) {\n                    try {\n                        let authResponse: IAuthResponse = JSON.parse(response);\n                        if(authResponse.result) {\n                            Vue.set(vueScope, "loginStatus", true);\n                            Vue.set(vueScope, "loginService", request.service);\n                            return;\n                        }\n                    } catch(e) {\n                        console.error(response);\n                    }\n                }\n                Vue.set(vueScope, "loginStatus", false);\n                Vue.set(vueScope, "loginService", undefined);\n                console.error("Logged with " + request.service + " failed");\n            });\n        }\n    }\n});\n<\/script>\n\n<style scoped>\n.root {\n    width: auto;\n    text-align: center;\n    margin-bottom: 1em;\n}\n.root div {\n    margin:0.5em;\n    text-align: center;\n}\n.statusIcon {\n    margin: 0.5em;\n    border-radius: 100%;\n    width: 40px;\n    height: 40px;\n}\n.loggedIcon {\n    border-width: 2px;\n    border-style: solid;\n    border-color: green;\n    background-color: lightgreen;\n}\n.unloggedIcon {\n    border-width: 2px;\n    border-style: dashed;\n    border-color: gray;\n    background-color: lightgray;\n}\n.loading {\n    width: 2em;\n    height: 2em;   \n}\n</style>'],
    sourceRoot: ""
  }]), t["default"] = i;
},,,, function (e, t, n) {
  "use strict";

  var r = function r() {
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
        src: "https://www.google.com/recaptcha/api.js?render=6LfudvIUAAAAADY9aLIgdcbuY8kekIKAv6WYEYFb"
      }
    }), e._v(" "), e.flagSent ? n("div", [e.flagReceived ? void 0 !== e.url ? n("div", [n("p", [e._v("\n                Thank you for your feedback!"), n("br"), e._v("\n                You can find it on the project issue tracker: "), n("a", {
      attrs: {
        href: e.url
      }
    }, [e._v(e._s(e.url))]), n("br")]), e._v(" "), n("button", {
      on: {
        click: function click(t) {
          return e.reset();
        }
      }
    }, [e._v("Dismiss")])]) : n("div", [e._m(1), e._v(" "), n("button", {
      on: {
        click: function click(t) {
          return e.reset(!0);
        }
      }
    }, [e._v("Dismiss")])]) : n("div", [n("img", {
      staticClass: "loading",
      attrs: {
        src: "/style/ui/ajax-loader.webp",
        alt: "loading..."
      }
    })])]) : n("div", [n("p", [n("label", {
      attrs: {
        "for": "issueLabel"
      }
    }, [e._v("Do you want to report something?")]), n("br"), e._v(" "), n("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: e.label,
        expression: "label"
      }],
      attrs: {
        id: "issueLabel"
      },
      on: {
        change: function change(t) {
          var n = Array.prototype.filter.call(t.target.options, function (e) {
            return e.selected;
          }).map(function (e) {
            return "_value" in e ? e._value : e.value;
          });
          e.label = t.target.multiple ? n : n[0];
        }
      }
    }, [n("option", {
      attrs: {
        selected: "",
        disabled: ""
      }
    }), e._v(" "), n("option", {
      attrs: {
        value: "bug"
      }
    }, [e._v("Problem")]), e._v(" "), n("option", {
      attrs: {
        value: "question"
      }
    }, [e._v("Question")]), e._v(" "), n("option", {
      attrs: {
        value: "enhancement"
      }
    }, [e._v("Enhancement suggestion")]), e._v(" "), n("option", {
      attrs: {
        value: "other"
      }
    }, [e._v("Other")])])]), e._v(" "), n("p", [n("label", {
      attrs: {
        "for": "issueDescription"
      }
    }, [e._v("What's on your mind?")]), n("br"), e._v(" "), n("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: e.description,
        expression: "description"
      }],
      staticClass: "description",
      attrs: {
        id: "issueDescription",
        type: "text"
      },
      domProps: {
        value: e.description
      },
      on: {
        input: function input(t) {
          t.target.composing || (e.description = t.target.value);
        }
      }
    })]), e._v(" "), e._m(0), e._v(" "), n("button", {
      attrs: {
        disabled: 0 === e.description.trim().length
      },
      on: {
        click: function click(t) {
          return e.send();
        }
      }
    }, [e._v("Send")])])]);
  };

  r._withStripped = !0;
  var i = n(8),
      o = n(6),
      a = n(0),
      s = i.a.extend({
    name: "bug-reporting",
    data: function data() {
      return {
        label: void 0,
        description: "",
        flagSent: !1,
        flagReceived: !1,
        url: void 0
      };
    },
    methods: {
      send: function send() {
        if (this.description.trim().length > 0) {
          var _e41 = this;

          grecaptcha.ready(function () {
            grecaptcha.execute("6LfudvIUAAAAADY9aLIgdcbuY8kekIKAv6WYEYFb", {
              action: "bugReport"
            }).then(function (t) {
              var n = {
                label: _e41.label,
                description: _e41.description,
                captchaToken: t
              };
              i.a.set(_e41, "flagSent", !0), o.a.sendPOSTRequest("issue", JSON.stringify(n), function (t) {
                if (i.a.set(_e41, "flagReceived", !0), !a.a.isEmpty(t)) try {
                  var _n22 = JSON.parse(t);

                  return void i.a.set(_e41, "url", _n22.url);
                } catch (e) {
                  console.error(t);
                }
                console.error("Issue creation failed");
              });
            });
          });
        }
      },
      reset: function reset(e) {
        i.a.set(this, "flagSent", !1), i.a.set(this, "flagReceived", !1), i.a.set(this, "url", void 0), e || (i.a.set(this, "description", ""), i.a.set(this, "label", void 0));
      }
    }
  }),
      l = (n(42), n(22)),
      c = Object(l.a)(s, r, [function () {
    var e = this.$createElement,
        t = this._self._c || e;
    return t("p", [this._v("\n            When you send the report "), t("strong", [this._v("what you wrote will be publicly visible on the "), t("a", {
      attrs: {
        href: "https://github.com/giovannipessiva/l4w/issues"
      }
    }, [this._v("project issue tracker")])]), this._v("."), t("br"), this._v("\n            If you want some privacy, "), t("a", {
      attrs: {
        href: "mailto:rpt@altervista.org?subject=Feedback%20on%20L4W"
      }
    }, [this._v("drop me a mail")])]);
  }, function () {
    var e = this.$createElement,
        t = this._self._c || e;
    return t("p", [this._v("\n                An error occured :("), t("br")]);
  }], !1, null, "463340e8", null);
  c.options.__file = "src/client/components/BugReporting.vue";
  t.a = c.exports;
},,, function (e, t, n) {
  "use strict";

  var r = n(30);
  n.n(r).a;
}, function (e, t, n) {
  "use strict";

  n.r(t);
  var r = n(21),
      i = n.n(r)()(!0);
  i.push([e.i, "\n.root[data-v-463340e8] {\n    margin: 1em;\n}\n.description[data-v-463340e8]{\n    width: 21em;\n    height: 4em;\n    font-family: Oldenburg, Verdana, Geneva, Arial, Helvetica, sans-serif;\n    font-display: swap;\n    font-size: medium;\n    resize: vertical;\n}\n.loading[data-v-463340e8] {\n    width: 2em;\n    height: 2em;\n}\n", "", {
    version: 3,
    sources: ["webpack://src/client/components/BugReporting.vue"],
    names: [],
    mappings: ";AAmHA;IACA,WAAA;AACA;AACA;IACA,WAAA;IACA,WAAA;IACA,qEAAA;IACA,kBAAA;IACA,iBAAA;IACA,gBAAA;AACA;AACA;IACA,UAAA;IACA,WAAA;AACA",
    sourcesContent: ['<template>\n    <div class="root">\n        \x3c!-- TODO load only when user start writing, so that the overlay wont normally appear --\x3e\n        <script type="application/javascript" async defer src="https://www.google.com/recaptcha/api.js?render=6LfudvIUAAAAADY9aLIgdcbuY8kekIKAv6WYEYFb"><\/script>\n        <div v-if="!flagSent">\n            <p>\n                <label for="issueLabel">Do you want to report something?</label><br>\n                <select v-model="label" id="issueLabel">\n                    <option selected disabled />\n                    <option value="bug">Problem</option>\n                    <option value="question">Question</option>\n                    <option value="enhancement">Enhancement suggestion</option>\n                    <option value="other">Other</option>\n                </select>\n            </p>\n            <p>\n                <label for="issueDescription">What\'s on your mind?</label><br>\n                <textarea v-model="description" id="issueDescription" class="description" type="text"></textarea>\n            </p>\n            <p>\n                When you send the report <strong>what you wrote will be publicly visible on the <a href="https://github.com/giovannipessiva/l4w/issues">project issue tracker</a></strong>.<br>\n                If you want some privacy, <a href="mailto:rpt@altervista.org?subject=Feedback%20on%20L4W">drop me a mail</a>\n            </p>\n            <button v-on:click="send()" v-bind:disabled="description.trim().length === 0">Send</button>\n        </div>\n        <div v-else>\n            <div v-if="!flagReceived">\n                <img class="loading" src="/style/ui/ajax-loader.webp" alt="loading..." />\n            </div>\n            <div v-else-if="url !== undefined">\n                <p>\n                    Thank you for your feedback!<br>\n                    You can find it on the project issue tracker: <a v-bind:href="url">{{ url }}</a><br>\n                </p>\n                <button v-on:click="reset()">Dismiss</button>\n            </div>\n            <div v-else>\n                <p>\n                    An error occured :(<br>\n                </p>\n                <button v-on:click="reset(true)">Dismiss</button>\n            </div>\n        </div>\n    </div>\n</template>\n\n<script lang="ts">\nimport Vue from "vue"\n\nimport { Resource } from "../core/util/Resource";\nimport { Utils } from "../../common/Utils";\nimport { IIssueRequest, IIssueResponse } from "../../common/ServerAPI"\n\ndeclare let grecaptcha: any; // Loaded from Google script\n\nexport default Vue.extend({\n    name: "bug-reporting",\n    data: function(): {\n        label?: string,\n        description: string,\n        flagSent?: boolean,\n        flagReceived?: boolean,\n        url?: string\n    } {\n        return {\n            label: undefined,\n            description: "",\n            flagSent: false,\n            flagReceived: false,\n            url: undefined\n        }\n    },\n    methods: {\n        send: function() {\n            if(this.description.trim().length > 0) {\n                let vueScope = this;\n                grecaptcha.ready(function() {\n                    grecaptcha.execute("6LfudvIUAAAAADY9aLIgdcbuY8kekIKAv6WYEYFb", {action: "bugReport"}).then(function(token: string) {\n                        let request: IIssueRequest = {\n                            label: vueScope.label, \n                            description: vueScope.description,\n                            captchaToken: token\n                        };\n                        Vue.set(vueScope, "flagSent", true);\n                        Resource.sendPOSTRequest("issue", JSON.stringify(request), function(response?: string) {\n                            Vue.set(vueScope, "flagReceived", true);\n                            if(!Utils.isEmpty(response)) {\n                                try {\n                                    let resp: IIssueResponse = JSON.parse(response!);\n                                    Vue.set(vueScope, "url", resp.url);\n                                    return;\n                                } catch(e) {\n                                    console.error(response);\n                                }\n                            }\n                            console.error("Issue creation failed");\n                        });\n                    });\n                });\n            }\n        },\n        reset: function(flagPreserveRequest?: boolean) {\n            Vue.set(this, "flagSent", false);\n            Vue.set(this, "flagReceived", false);\n            Vue.set(this, "url", undefined);\n            if(!flagPreserveRequest) {\n                Vue.set(this, "description", "");\n                Vue.set(this, "label", undefined);\n            }\n        }\n    }\n});\n<\/script>\n\n<style scoped>\n.root {\n    margin: 1em;\n}\n.description{\n    width: 21em;\n    height: 4em;\n    font-family: Oldenburg, Verdana, Geneva, Arial, Helvetica, sans-serif;\n    font-display: swap;\n    font-size: medium;\n    resize: vertical;\n}\n.loading {\n    width: 2em;\n    height: 2em;   \n}\n</style>'],
    sourceRoot: ""
  }]), t["default"] = i;
},,,,,,, function (e, t, n) {
  "use strict";

  n.r(t), n.d(t, "Game", function () {
    return x;
  });
  var r,
      i = n(8),
      o = n(29),
      a = n(39),
      s = n(4),
      l = n(2),
      c = n(7),
      u = n(16),
      f = n(0),
      d = n(15),
      p = n(9);

  (r || (r = {})).launchAction = function (e, t, n, r, i) {
    var o = e.states[r];

    if (0 === o.trigger) {
      var _t28 = l.a.getDirection(e, n),
          _r17 = c.a.getState(n);

      void 0 !== _r17 ? _r17.direction = _t28 : console.error("Hero state undefined");

      var _i14 = l.a.getOpposedDirections(_t28);

      _r17 = c.a.getState(e), void 0 !== _r17 ? _r17.direction = _i14 : console.error("Event state undefined:" + e);
    }

    {
      var _r18 = e.script,
          _a8 = new u[_r18](e, n, t);

      if (f.a.isEmpty(_a8)) return console.error('Script "' + _r18 + '" not found (event: ' + e.name + ")"), !1;
      var _s2 = o.action;
      if (f.a.isEmpty(_s2)) ;else if (_s2 in _a8) try {
        return f.a.isEmpty(i) ? _a8[_s2]() : _a8[_s2](i);
      } catch (e) {
        console.error(e);
      } else console.error('Action "' + _s2 + '" not found in script "' + _r18 + '" (event: ' + e.name + ")");
    }
    {
      var _r19 = o.dialog;
      void 0 !== _r19 && d.a.showComplexDialog(t, n, e.name, _r19, t.save.config, p.b);
    }
    return !1;
  };

  var h,
      v = n(18),
      g = n(26),
      m = n(17),
      y = n(12),
      b = n(6);
  !function (e) {
    var t;
    e.WEBWORKER_URL = "workers/l4w-webworker.js", e.SERVICEWORKER_URL = "workers/l4w-serviceworker.js", e.SERVICEWORKER_OPTIONS = {
      scope: "../"
    }, e.launchWebWorker = function (n) {
      g.a.webWorker() && (f.a.isEmpty(t) && (t = new Worker(e.WEBWORKER_URL)), t.postMessage(n));
    }, e.registerServiceWorker = function () {
      g.a.serviceWorker() && navigator.serviceWorker.register(e.SERVICEWORKER_URL, e.SERVICEWORKER_OPTIONS).then(function (e) {}, function (e) {
        console.warn("ServiceWorker registration failed: ", e);
      });
    };
  }(h || (h = {}));

  var _ = n(23);

  var E = /*#__PURE__*/function (_$a) {
    _inherits(E, _$a);

    var _super5 = _createSuper(E);

    function E(e, t) {
      _classCallCheck(this, E);

      return _super5.call(this, e, t, _.b.game);
    }

    _createClass(E, [{
      key: "deferredInit",
      value: function deferredInit(e) {
        _get(_getPrototypeOf(E.prototype), "deferredInit", this).call(this, e);

        var t = e.get("canvasRatio");
        void 0 === t && (t = 1), this.canvasRatio = t, this.scaleStepX = this.cellW * Math.pow(2, -10), this.scaleStepY = this.cellH * Math.pow(2, -10);
      }
    }, {
      key: "refreshCanvasSize",
      value: function refreshCanvasSize() {
        if (this.naturalScale) this.doubleScale ? (this.scaleX = 2, this.scaleY = 2) : (this.scaleX = 1, this.scaleY = 1);else {
          var _e42 = this.baseH / this.height(),
              _t29 = this.baseW / this.width(),
              _n23 = this.canvasRatio / (_e42 > _t29 ? _e42 : _t29);

          this.scaleX = _n23 - _n23 % this.scaleStepX, this.scaleY = _n23 - _n23 % this.scaleStepY;
        }

        _get(_getPrototypeOf(E.prototype), "refreshCanvasSize", this).call(this);
      }
    }, {
      key: "width",
      value: function width() {
        return window.innerWidth || (null !== document.documentElement ? document.documentElement.clientWidth : document.body.clientWidth || 0);
      }
    }, {
      key: "height",
      value: function height() {
        return window.innerHeight || (null !== document.documentElement ? document.documentElement.clientHeight : document.body.clientHeight || 0);
      }
    }, {
      key: "toggleNaturalScale",
      value: function toggleNaturalScale(e, t) {
        this.naturalScale = void 0 !== e ? e : !this.toggleNaturalScale, this.doubleScale = t || !1;
      }
    }]);

    return E;
  }(_.a);

  var w,
      S,
      A,
      T = n(27),
      k = n(3),
      C = n(11);
  (S = w || (w = {})).speak = function (e, t) {
    if (!g.a.webSpeech()) return;
    var n = new SpeechSynthesisUtterance(e);
    n.lang = t, speechSynthesis.speak(n);
  }, S.gandalf = function e(t) {
    if (!g.a.webSpeech()) return;
    var n = null,
        r = window.speechSynthesis.getVoices();

    if (0 === r.length) {
      if (void 0 === t) return void setTimeout(function () {
        return e(3);
      }, 0);
      if (t > 0) return void setTimeout(function () {
        return e(t - 1);
      }, 10);
    }

    var _iterator28 = _createForOfIteratorHelper(r),
        _step28;

    try {
      for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
        var _e43 = _step28.value;

        if (["Google UK English Male", "Microsoft David Desktop - English (United States)", "Google US English"].includes(_e43.name)) {
          n = _e43;
          break;
        }
      }
    } catch (err) {
      _iterator28.e(err);
    } finally {
      _iterator28.f();
    }

    var i = new SpeechSynthesisUtterance("You shall not pass");
    i.lang = s.b.EN, i.pitch = 0, i.rate = .1, null !== n && (i.voice = n), speechSynthesis.speak(i);
  }, function (e) {
    e.flagGodMode = !1;
    var t = "background: black; color: white; font-size: 18px";

    function n() {
      console.log("%cAccepted commands                                                          \n%c---------------------------------------------------------------------------\nhelp    lists accepted commands                                            \niddqd   activates God Mode (only Talos supported)                          \nman     opens manual pages                                                 \nuname   show system info                                                   \n", "background: black; color: white; font-weight: bold; font-size: 18px", t);
    }

    function r() {
      e.flagGodMode = !e.flagGodMode;
      var n = e.flagGodMode ? "enabled " : "disabled";
      console.log("%cGod Mode " + n + "                                                          \n", t);
    }

    function i() {
      console.log("%cOpening manual pages...                                                    \n", t), window.open("https://github.com/giovannipessiva/l4w/wiki", "_blank");
    }

    function o() {
      b.a.sendGETRequest("/v", function (e) {
        e = null == e ? void 0 : e.padEnd(20), console.log("%c" + e + "                                                       \n", t);
      });
    }

    function a() {
      w.gandalf(), console.warn("%c\n                                                         █                             █                         \n                  ╓▄▄                                    ██                           ▐█                         \n                  ████                                  ▐██                           ▐█                         \n                  ████▌                                 ████                          ▐█                         \n                   ▀██                                  ████                          ▐█                         \n                    ▐█                                 ▐█████                          █                         \n                     █                                 ██████                          █                         \n                     ██                            ▄▄▄████████▄▄▄▄▄                    █                         \n                      █                  ▄▄▄▄█████████████████████████████▄▄          ▐█▄                        \n                      █▌                   ╙▀▀▀██████████████████████▀▀▀▀           ╙▀███▀▀                      \n                      ▐█                            ▐███████████                 ▄▄ ╔████                        \n                      ████▄ ██▄▄▄,                  █████▀▀▀████             ▄█████▌▐████                        \n                      █████▌█████████▄▄▄,     ▄▄▄▄▄▄███ ╙▀▀▀ ████▄▄▄▄▄▄▄▄██████████▌  ▐█                         \n                      ▀███▀  █████████████████████████        █████████████████████▌   ╙                         \n                        █▌   ▀███████████████████████▌        ▐█████████████████████                             \n                        ▐█    ███████████████████████         ▐█████████████████████                             \n                         █    ███████████████████████         ▐████      ▀██████████▄                            \n                         ██   ██████████▀▀▀    ▀█████▌        ▐████          ▀██████▌                            \n                         ▐█   ▀▀▀▀▀              █████        █████                                              \n                          █▌                    ▐█████▌      ▄█████▌                                             \n                          ▐█                    ████████,  ,████████                                             \n                           █                   ▐████████████████████▌                                            \n                           ██                  ██████████████████████                                            \n                           ▐█                 ▐██████████████████████▌                                           \n                            █▌                ████████████████████████                                           \n                            ▐█               ]████████████████████████▌                                          \n                             █               ██████████████████████████                                          \n                             ██             ]██████████████████████████▌                                         \n                             ▐█             ████████████████████████████                                         \n                              █▌           ]████████████████████████████▌                                        \n                              ▐█           ██████████████████████████████                                        \n                               █          ]██████████████████████████████▌                                       \n                               █▌         ████████████████████████████████                                       \n                               ▐█        ]████████████████████████████████▄                                      \n                                '        ██████████████████████████████████                                      \n                                        ▀▀▀▀▀▀▀▀██████▀▀▀▀▀▀███████▀▀▀▀▀▀▀                                       \n                                                ▀▀▀▀▀         ▀▀▀▀▀                                              ", "background: black; color: bada55; font-size: 12px");
    }

    e.start = function () {
      C.a.ui.enableCLI && (console.log("%c                       ____       _____  __      __                        \n                      |    |     /  |  |/  \\    /  \\                       \n                      |    |    /   |  |\\   \\/\\/   /                       \n                      |    |___/    ^   /\\        /                        \n                      |_______ \\____   |  \\__/\\  /                         \n                              \\/    |__|       \\/                          \n%cWelcome to L4W command line interface! Type 'help' for listing commands    ", "background: black; color: #bada55; font-size: 18px", "background: black; color: #bada55; font-size: 18px"), Object.defineProperty(window, "help", {
        get: function get() {
          setTimeout(n, 0);
        }
      }), Object.defineProperty(window, "iddqd", {
        get: function get() {
          setTimeout(r, 0);
        }
      }), Object.defineProperty(window, "man", {
        get: function get() {
          setTimeout(i, 0);
        }
      }), Object.defineProperty(window, "su", {
        get: function get() {
          setTimeout(a, 0);
        }
      }), Object.defineProperty(window, "uname", {
        get: function get() {
          setTimeout(o, 0);
        }
      }));
    };
  }(A || (A = {}));
  var x,
      I = n(5);
  !function (e) {
    var t;

    function n() {
      var e = document.getElementById("comboLang");

      if (null !== e && e instanceof HTMLSelectElement) {
        var _n24 = e.selectedOptions.item(0);

        if (null !== _n24) {
          void 0 !== s.b[_n24.value] && t.setLanguage(s.b[_n24.value]);
        }
      }
    }

    function c(e, t) {
      b.a.load("0", k.a.SAVE, function (n) {
        if (f.a.isEmpty(n)) t();else try {
          var _e44 = JSON.parse(n);

          t(_e44);
        } catch (n) {
          "SyntaxError" === n.name ? console.error("Error while parsing save") : "TypeError" === n.name ? console.error("Error while reading save") : console.error(n), m.a.showError(e.getContext("2d")), t();
        }
      });
    }

    function u(e, t) {
      var n = e.hero,
          r = e.hero.target;

      if (void 0 === r && (r = e.hero.newTarget), void 0 !== r) {
        l.a.getPointDistance(e.hero.position, r) <= Math.floor(e.grid.cellH / 2) && (n = e.grid.mapCanvasToCell(r));
      }

      var i = l.a.getDirectionTarget(n, t);
      e.startMovement(i.i, i.j);
    }

    function _() {
      var e = document.getElementById("comboScreen");

      switch (e.value) {
        case "apt":
          t.toggleNaturalScale(!1);
          break;

        case "nat":
          t.toggleNaturalScale(!0, !1);
          break;

        case "nat2":
          t.toggleNaturalScale(!0, !0);
          break;

        default:
          console.error("Unexpected comboScreen value:" + e.value);
      }

      w();
    }

    function w() {
      var e = document.getElementById("canvas1"),
          t = Math.round((window.innerHeight - e.clientHeight) / 2) + "px";
      e.style.marginTop = t, e.style.marginBottom = t;
    }

    function S() {
      var e = document.getElementById("checkAntialiasing");
      t.toggleAntialiasing(e.checked);
    }

    function C() {
      if (null === document.fullscreenElement) {
        var _e45 = document.documentElement;
        if (_e45.requestFullscreen) _e45.requestFullscreen();else if (_e45.mozRequestFullScreen) _e45.mozRequestFullScreen();else if (_e45.webkitRequestFullscreen) _e45.webkitRequestFullscreen();else {
          if (!_e45.msRequestFullscreen) return void console.error("Cannot request FullScreen");
          _e45["msRequestFullscreen("];
        }
      }
    }

    function x() {
      if (null !== document.fullscreenElement) if (document.exitFullscreen) document.exitFullscreen();else if (document.mozCancelFullScreen) document.mozCancelFullScreen();else if (document.webkitExitFullscreen) document.webkitExitFullscreen();else {
        if (!document.msExitFullscreen) return void console.error("Cannot request FullScreen");
        document.msExitFullscreen();
      }
    }

    e.start = function (e) {
      g.a.check(), h.registerServiceWorker(), A.start(), new i.a({
        el: "#loginVue",
        components: {
          login: o.a
        }
      }), new i.a({
        el: "#bugReportingVue",
        components: {
          "bug-reporting": a.a
        }
      }), new E(e, function (i) {
        t = new T.a(i, r.launchAction), function (e, t, n) {
          var r = new Map();
          r[y.a.Keys.W] = function (e) {
            u(t, 0);
          }, r[y.a.Keys.S] = function (e) {
            u(t, 2);
          }, r[y.a.Keys.A] = function (e) {
            u(t, 3);
          }, r[y.a.Keys.D] = function (e) {
            u(t, 1);
          }, r[y.a.Keys.F1] = function (e) {
            t.toggleFPS(), e.preventDefault();
          }, r[y.a.Keys.F2] = function (e) {
            t.toggleGridMode(), e.preventDefault();
          }, r[y.a.Keys.F3] = function (e) {
            t.toggleCellNumbering(), e.preventDefault();
          }, r[y.a.Keys.F4] = function (e) {
            t.toggleFocus(), e.preventDefault();
          }, r[y.a.Keys.F5] = function (e) {
            t.toggleBlocks(), e.preventDefault();
          }, r[y.a.Keys.F6] = function (e) {
            t.toggleAntialiasing(), e.preventDefault();
          };
          y.a.init(e, n, r, p.b, function (e, n, r, i) {
            !function (e, n) {
              t.registerAction(e, n), t.startMovement(e, n);
            }(e, n);
          }, p.b, p.b, function (e, n) {
            t.updatePointer(e, n);
          }, function (e, n) {
            t.updatePointer(e, n);
          }, function () {
            t.togglePause(!0);
          }, function () {
            t.togglePause(!1);
          }, function () {
            t.togglePause(!0), n.refreshCanvasSize(), t.changeScale(), t.reapplyTranslation(), t.togglePause(!1), w();
          }, p.b, p.b, p.b);
        }(e, t, i), c(e, function (r) {
          t.loadSave(r, function (i) {
            t.start(e), t.moveFocusToDirection();
            var o = document.getElementById("comboLang");
            void 0 !== r && void 0 !== r.config && (void 0 !== r.config.lang && (o.value = r.config.lang, n()), void 0 !== r.config.flagAntialiasing && (document.getElementById("checkAntialiasing").checked = r.config.flagAntialiasing, S()), void 0 !== r.config.flagNatural && void 0 !== r.config.flagDouble && (document.getElementById("comboScreen").value = r.config.flagNatural ? r.config.flagDouble ? "nat2" : "nat" : "apt", _())), o.options.add(new Option("English 🇬🇧", s.b.EN)), o.options.add(new Option("Italiano 🇮🇹", s.b.IT)), o.value = t.save.config.lang, w(), e.classList.add("l4wCanvas"), document.getElementById("footer").style.visibility = "visible";
          });
        });
      });
    }, e.changeLanguage = n, e.load = function () {
      d.a.closeDialog(!0), c(document.getElementById("canvas1"), function (e) {
        t.loadSave(e, function (e) {
          t.moveFocusToDirection(), e ? console.log("Save loaded successfully") : console.log("Save not found");
        });
      });
    }, e.save = function () {
      var e = I.a.FIRST_ELEM_ID,
          n = v.a.getSave(t.map, t.hero);
      void 0 !== n && f.a.isNumeric(n.id) && (e = n.id), n.config.lang = document.getElementById("comboLang").value, n.config.flagAntialiasing = document.getElementById("checkAntialiasing").checked, n.config.flagNatural = "apt" !== document.getElementById("comboScreen").value, n.config.flagDouble = "nat2" === document.getElementById("comboScreen").value, b.a.save(e + "", JSON.stringify(n), k.a.SAVE, function (e, t) {
        t && console.log("Game saved successfully");
      });
    }, e.changeScreen = _, e.changeFullscreen = function () {
      document.getElementById("checkFullscreen").checked ? C() : x(), w();
    }, e.changeAntialiasing = S, e.openFullscreen = C, e.closeFullscreen = x;
  }(x || (x = {}));
}]);
