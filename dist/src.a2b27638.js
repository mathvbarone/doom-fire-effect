// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/index.js":[function(require,module,exports) {
var init = function init() {
  var firePixelsArray = [];
  var fireWidth = 70;
  var fireHeight = 70;
  var fireColorsPalette = [{
    "r": 7,
    "g": 7,
    "b": 7
  }, {
    "r": 31,
    "g": 7,
    "b": 7
  }, {
    "r": 47,
    "g": 15,
    "b": 7
  }, {
    "r": 71,
    "g": 15,
    "b": 7
  }, {
    "r": 87,
    "g": 23,
    "b": 7
  }, {
    "r": 103,
    "g": 31,
    "b": 7
  }, {
    "r": 119,
    "g": 31,
    "b": 7
  }, {
    "r": 143,
    "g": 39,
    "b": 7
  }, {
    "r": 159,
    "g": 47,
    "b": 7
  }, {
    "r": 175,
    "g": 63,
    "b": 7
  }, {
    "r": 191,
    "g": 71,
    "b": 7
  }, {
    "r": 199,
    "g": 71,
    "b": 7
  }, {
    "r": 223,
    "g": 79,
    "b": 7
  }, {
    "r": 223,
    "g": 87,
    "b": 7
  }, {
    "r": 223,
    "g": 87,
    "b": 7
  }, {
    "r": 215,
    "g": 95,
    "b": 7
  }, {
    "r": 215,
    "g": 95,
    "b": 7
  }, {
    "r": 215,
    "g": 103,
    "b": 15
  }, {
    "r": 207,
    "g": 111,
    "b": 15
  }, {
    "r": 207,
    "g": 119,
    "b": 15
  }, {
    "r": 207,
    "g": 127,
    "b": 15
  }, {
    "r": 207,
    "g": 135,
    "b": 23
  }, {
    "r": 199,
    "g": 135,
    "b": 23
  }, {
    "r": 199,
    "g": 143,
    "b": 23
  }, {
    "r": 199,
    "g": 151,
    "b": 31
  }, {
    "r": 191,
    "g": 159,
    "b": 31
  }, {
    "r": 191,
    "g": 159,
    "b": 31
  }, {
    "r": 191,
    "g": 167,
    "b": 39
  }, {
    "r": 191,
    "g": 167,
    "b": 39
  }, {
    "r": 191,
    "g": 175,
    "b": 47
  }, {
    "r": 183,
    "g": 175,
    "b": 47
  }, {
    "r": 183,
    "g": 183,
    "b": 47
  }, {
    "r": 183,
    "g": 183,
    "b": 55
  }, {
    "r": 207,
    "g": 207,
    "b": 111
  }, {
    "r": 223,
    "g": 223,
    "b": 159
  }, {
    "r": 239,
    "g": 239,
    "b": 199
  }, {
    "r": 255,
    "g": 255,
    "b": 255
  }];

  var start = function start() {
    createFireDataStructure();
    createFireSource();
    renderFire();
    setInterval(calculateFirePropagation, 10);
  };

  var createFireDataStructure = function createFireDataStructure() {
    var numberOfPixels = fireWidth * fireHeight;

    for (var i = 0; i < numberOfPixels; i++) {
      firePixelsArray[i] = 0;
    }
  };

  var calculateFirePropagation = function calculateFirePropagation() {
    for (var column = 0; column < fireWidth; column++) {
      for (var row = 0; row < fireHeight; row++) {
        var pixelIndex = column + fireWidth * row;
        updateFireIntensityPerPixel(pixelIndex);
      }
    }

    renderFire();
  };

  var updateFireIntensityPerPixel = function updateFireIntensityPerPixel(currentPixelIndex) {
    var belowPixelIndex = currentPixelIndex + fireWidth;
    if (belowPixelIndex >= fireWidth * fireHeight) return;
    var decay = Math.floor(Math.random() * 3);
    var belowPixelFireIntensity = firePixelsArray[belowPixelIndex];
    var newFireIntensity = belowPixelFireIntensity - decay >= 0 ? belowPixelFireIntensity - decay : 0;
    firePixelsArray[currentPixelIndex - decay] = newFireIntensity;
  };

  var renderFire = function renderFire() {
    var debug = false;
    var html = '<table class="fireTable" cellpadding=0 callspacing=0>';

    for (var row = 0; row < fireHeight; row++) {
      html += '<tr>';

      for (var column = 0; column < fireWidth; column++) {
        var pixelIndex = column + fireWidth * row;
        var fireIntensity = firePixelsArray[pixelIndex];

        if (debug === true) {
          html += '<td>';
          html += "<div class=\"pixel-index\">".concat(pixelIndex, "</div>");
          html += fireIntensity;
          html += '</td>';
        } else {
          var color = fireColorsPalette[fireIntensity];
          var colorString = "".concat(color.r, ",").concat(color.g, ",").concat(color.b);
          html += "<td class=\"pixel\" style=\"background-color: rgb(".concat(colorString, ")\"");
          html += '</td>';
        }
      }

      html += '</tr>';
    }

    html += '</table>';
    document.querySelector('#fireCanvas').innerHTML = html;
  };

  var createFireSource = function createFireSource() {
    for (var column = 0; column <= fireWidth; column++) {
      var overflowPixelIndex = fireWidth * fireHeight;
      var pixelIndex = overflowPixelIndex - fireWidth + column;
      firePixelsArray[pixelIndex] = 36;
    }
  };

  start();
};

init();
},{}],"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64056" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map