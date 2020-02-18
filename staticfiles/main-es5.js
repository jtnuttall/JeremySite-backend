function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- app.component.html -->\n<header id=\"header\">\n  <nav class=\"navbar navbar-expand-lg navbar-dark navbar-inverse\">\n    <a class=\"navbar-brand\" href=\"/#top\">Jeremy</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div id=\"navbarNav\" class=\"collapse navbar-collapse\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"/#top\">Home</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"projects\">Projects List</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" target=\"_blank\" href=\"http://www.github.com/jtnuttall\">GitHub</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" target=\"_blank\" href=\"https://www.linkedin.com/in/jeremy-nuttall/\">LinkedIn</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</header>\n<main>\n  <router-outlet></router-outlet>\n</main>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/homepage/homepage.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/homepage/homepage.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomepageHomepageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div id=\"menuContainer\">\n    <nav id=\"menu\" class=\"navbar navbar-dark d-none d-md-block\">\n        <ul class=\"nav navbar-nav flex-column\">\n            <li class=\"nav-item menu-item first-menu-item\" data-menuanchor=\"introduction\">\n                <a class=\"nav-link\" href=\"#introduction\">About me</a>\n            </li>\n            <li class=\"nav-item menu-item\" data-menuanchor=\"experience\">\n                <a class=\"nav-link\" href=\"#experience\">Experience</a>\n            </li>\n            <li class=\"nav-item menu-item\" data-menuanchor=\"skills\">\n                <a class=\"nav-link\" href=\"#skills\">Skills</a>\n            </li>\n            <li class=\"nav-item menu-item\" data-menuanchor=\"portfolio\">\n                <a class=\"nav-link\" href=\"#portfolio\">Portfolio</a>\n            </li>\n            <li class=\"nav-item menu-item last-menu-item\" data-menuanchor=\"publications\">\n                <a class=\"nav-link\" href=\"#publications\">Publications</a>\n            </li>\n        </ul>\n    </nav>\n</div>\n\n<!-- TODO set up dialog for frontend and backend -->\n<div id=\"getSource\"><a href=\"projects\">View site source</a></div>\n\n<div fullpage id=\"fullpage\" [options]=\"config\" (ref)=\"getRef($event)\">\n    <div class=\"section\" id=\"introCard-id\" data-anchor=\"top\">\n        <h1>Jeremy Nuttall</h1>\n        <h2>Software Developer</h2>\n    </div>\n    <div class=\"section\" id=\"aboutCard-id\" data-anchor=\"aboutCard\">\n        <!-- <h1>About Me</h1> -->\n        <div class=\"infoText\">\n            <p>I'm a software developer with a B.S. in computer science from the University of Southern California.\n                I have broad abilities in programming languages, including C++, C#, Haskell, Erlang, and Python. My interests\n                include functional programming, design patterns, and machine learning. I am comfortable working across the \n                stack and am a quick learner, particularly when it comes to languages and frameworks.\n            </p>\n        </div>\n    </div>\n    <div class=\"section\" id=\"experience-id\" data-anchor=\"experience\" style=\"background-color:#254A79;\">\n        <div id=\"experience-lead\" class=\"slide\">\n            <h2>Experience</h2>\n        </div>\n        <div class=\"slide experiences\" *ngFor=\"let experience of experiences | async\">\n            <h1>{{experience.title}}: {{experience.organization}}</h1>\n            <h2>{{renderDate(experience.date_started)}} &ndash; {{renderDate(experience.date_ended)}}</h2>\n            <p>{{experience.synopsis}}</p>\n            <ul class=\"experience-descriptions list-group transparent\">\n                <li class=\"list-group-item transparent\" *ngFor=\"let description of experience.descriptions\">\n                    {{description}}\n                </li>\n            </ul>\n        </div>\n    </div>\n    <div class=\"section\" id=\"skills-id\" data-anchor=\"skills\" style=\"background-color: blueviolet;\">\n        Skills\n        <div class=\"skills-badges-container\">\n            <span \n                class=\"badge badge-pill badge-padded\" \n                *ngFor=\"let skill of skills | async\"\n                [style.background-color]=\"skillColorPalette[{} | random: skillColorPalette.length | floor]\"\n            >\n                {{skill.name}}\n            </span>\n        </div>\n    </div>\n    <div class=\"section\" id=\"portfolio-id\" data-anchor=\"portfolio\" style=\"background-color:orangered;\">\n        <div id=\"portfolio-lead\" class=\"slide\">\n            <div class=\"fifty-pixels\">\n                <h1>Portfolio</h1>\n                <p>This is a shortlist of projects I've worked on. For the full list, please see\n                    <a href=\"projects\">the projects list here</a>.\n                </p>\n            </div>\n        </div>\n        <div class=\"slide projects\" *ngFor=\"let project of projects | async | take: 5\">\n            <h1>{{project.name}}</h1>\n\n            <ul class=\"portfolio-details list-group transparent\">\n                <li class=\"list-group-item transparent\">\n                    {{project.synopsis}}\n                </li>\n                <li class=\"list-group-item transparent\">\n                    Language: {{project.language}}\n                </li>\n                <li class=\"list-group-item transparent\" *ngIf=\"!!project.framework\">\n                    Using framework: {{project.framework}}\n                </li>\n                <li class=\"list-group-item transparent\" *ngIf=\"!!project.example\">\n                    <a [attr.href]=\"project.example\">Example link</a>\n                </li>\n                <li class=\"list-group-item transparent\" *ngIf=\"!!project.git\">\n                    <a [attr.href]=\"project.git\">Git link</a>\n                </li>\n            </ul>\n        </div>\n    </div>\n    <div class=\"section\" id=\"publications-id\" data-anchor=\"publications\" style=\"background-color: black;\">\n        <div class=\"slide\">\n            Publications\n        </div>\n        <div class=\"slide\" *ngFor=\"let publication of publications | async\">\n            <h1>{{publication.title}}</h1>\n            <div class=\"fifty-pixels-pad table-responsive\">\n                <table class=\"table publications-table\">\n                    <tbody>\n                        <!-- Authors -->\n                        <tr>\n                            <ng-template \n                                [ngIf]=\"publication.authors.length === 1\" \n                                [ngIfElse]=\"mult\"\n                            >\n                                <th scope=\"row\">\n                                    Author\n                                </th>\n                            </ng-template>\n                            <ng-template #mult>\n                                <th scope=\"row\">\n                                    Authors\n                                </th>\n                            </ng-template>\n                            <td>\n                                {{ publication.authors | join: ', ' }}\n                            </td>\n                        </tr>\n                        <!-- Abstract -->\n                        <tr *ngIf=\"!!publication.abstract\">\n                            <th scope=\"row\">\n                                Abstract\n                            </th>\n                            <td scope=\"row\">\n                                {{publication.abstract}}\n                            </td>\n                        </tr>\n                        <!-- Journal -->\n                        <tr *ngIf=\"!!publication.journal\">\n                            <th scope=\"row\">\n                                Journal\n                            </th>\n                            <td scope=\"row\">\n                                {{publication.journal}}\n                            </td>\n                        </tr>\n                        <!-- Publisher -->\n                        <tr *ngIf=\"!!publication.publisher\">\n                            <th scope=\"row\">\n                                Publisher\n                            </th>\n                            <td scope=\"row\">\n                                {{publication.publisher}}\n                            </td>\n                        </tr>\n                        <!-- Publication Date -->\n                        <tr *ngIf=\"!!publication.publication_date\">\n                            <th scope=\"row\">\n                                Publication Date\n                            </th>\n                            <td scope=\"row\">\n                                {{ publication.publication_date | date: 'MMMM y' }}\n                            </td>\n                        </tr>\n                        <!-- Description -->\n                        <tr *ngIf=\"!!publication.description\">\n                            <th scope=\"row\">\n                                Description\n                            </th>\n                            <td scope=\"row\">\n                                {{publication.description}}\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProjectsProjectsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-template #NA>\n    N/A\n</ng-template>\n\n<div id=\"projects-container\">\n    <div *ngIf=\"projects.length === 0\">There doesn't seem to be anything here.</div>\n\n    <table class=\"table table-striped\">\n        <thead>\n            <th scope=\"col\">Name</th>\n            <th scope=\"col\">Synopsis</th>\n            <th scope=\"col\">Language</th>\n            <th scope=\"col\">Framework</th>\n            <th scope=\"col\">Example</th>\n            <th scope=\"col\">Git Repository</th>\n        </thead>\n\n        <tbody>\n            <tr *ngFor=\"let project of projects | async\">\n                <td scope=\"col\">{{project.name}}</td>\n                <td scope=\"col\">{{project.synopsis}}</td>\n                <td scope=\"col\">{{project.language}}</td>\n                <td scope=\"col\">\n                    <ng-template [ngIf]=\"project.framework !== null\" [ngIfElse]=\"NA\">\n                        {{project.framework}}\n                    </ng-template>\n                </td>\n                <td scope=\"col\">\n                    <ng-template [ngIf]=\"project.example !== null\" [ngIfElse]=\"NA\">\n                            <a [attr.href]=\"project.example\" target=\"_blank\">Example Link</a>\n                    </ng-template>\n                </td>\n                <td scope=\"col\">\n                    <ng-template [ngIf]=\"project.git !== null\" [ngIfElse]=\"NA\">\n                        <a [attr.href]=\"project.git\" target=\"_blank\">Git Link</a>\n                    </ng-template>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tankbattle/tankbattle.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tankbattle/tankbattle.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTankbattleTankbattleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<iframe id=\"tankbattle\" src=\"assets/TankBattle/index.html\"></iframe>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./homepage/homepage.component */
    "./src/app/homepage/homepage.component.ts");
    /* harmony import */


    var _tankbattle_tankbattle_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./tankbattle/tankbattle.component */
    "./src/app/tankbattle/tankbattle.component.ts");
    /* harmony import */


    var _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./projects/projects.component */
    "./src/app/projects/projects.component.ts");

    var routes = [{
      path: '',
      component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__["HomepageComponent"]
    }, {
      path: 'tankbattle',
      component: _tankbattle_tankbattle_component__WEBPACK_IMPORTED_MODULE_4__["TankbattleComponent"]
    }, {
      path: 'projects',
      component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#header {\n  width: 100%;\n  background-color: #42403c;\n  background: rgba(0, 0, 0, 0.7);\n  position: fixed;\n  height: 50px;\n  top: 0;\n  z-index: 99;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2plcmVteS9Eb2N1bWVudHMvUHJvamVjdHMvSmVyZW15U2l0ZS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0FDSkoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIGh0bWwuZnAtZW5hYmxlZCBib2R5IHtcbi8vICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuLy8gfVxuXG4jaGVhZGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI0MDNjO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHRvcDogMDtcbiAgICB6LWluZGV4OiA5OTtcbn1cbiIsIiNoZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyNDAzYztcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGhlaWdodDogNTBweDtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiA5OTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      // sectionsColor: [];
      this.title = 'Jeremy Nuttall: Software Developer';
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var angular_fullpage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! angular-fullpage */
    "./node_modules/angular-fullpage/__ivy_ngcc__/fesm2015/angular-fullpage.js");
    /* harmony import */


    var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./homepage/homepage.component */
    "./src/app/homepage/homepage.component.ts");
    /* harmony import */


    var _tankbattle_tankbattle_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./tankbattle/tankbattle.component */
    "./src/app/tankbattle/tankbattle.component.ts");
    /* harmony import */


    var _projects_projects_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./projects/projects.component */
    "./src/app/projects/projects.component.ts");
    /* harmony import */


    var angular_pipes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! angular-pipes */
    "./node_modules/angular-pipes/__ivy_ngcc__/fesm2015/angular-pipes.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_7__["HomepageComponent"], _tankbattle_tankbattle_component__WEBPACK_IMPORTED_MODULE_8__["TankbattleComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_9__["ProjectsComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], angular_fullpage__WEBPACK_IMPORTED_MODULE_6__["AngularFullpageModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], angular_pipes__WEBPACK_IMPORTED_MODULE_10__["NgRandomPipeModule"], angular_pipes__WEBPACK_IMPORTED_MODULE_10__["NgFloorPipeModule"], angular_pipes__WEBPACK_IMPORTED_MODULE_10__["NgJoinPipeModule"], angular_pipes__WEBPACK_IMPORTED_MODULE_10__["NgTakePipeModule"]],
      providers: [angular_pipes__WEBPACK_IMPORTED_MODULE_10__["NgRandomPipeModule"], angular_pipes__WEBPACK_IMPORTED_MODULE_10__["NgFloorPipeModule"], angular_pipes__WEBPACK_IMPORTED_MODULE_10__["NgJoinPipeModule"], angular_pipes__WEBPACK_IMPORTED_MODULE_10__["NgTakePipeModule"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/experiences.service.ts":
  /*!****************************************!*\
    !*** ./src/app/experiences.service.ts ***!
    \****************************************/

  /*! exports provided: ExperiencesService */

  /***/
  function srcAppExperiencesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExperiencesService", function () {
      return ExperiencesService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ExperiencesService =
    /*#__PURE__*/
    function () {
      function ExperiencesService(http) {
        _classCallCheck(this, ExperiencesService);

        this.http = http;
      }

      _createClass(ExperiencesService, [{
        key: "fetchExperiencesList",
        value: function fetchExperiencesList() {
          return this.http.get('api/experiences/');
        }
      }]);

      return ExperiencesService;
    }();

    ExperiencesService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ExperiencesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ExperiencesService);
    /***/
  },

  /***/
  "./src/app/homepage/homepage.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/homepage/homepage.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomepageHomepageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "a {\n  color: #e9c4ff;\n}\n\ntd {\n  word-wrap: break-word;\n  display: block;\n}\n\n#menu {\n  padding: 0px !important;\n}\n\n.menu-item {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.menu-item.active {\n  background-color: rgba(233, 233, 233, 0.75);\n}\n\n.menu-item.menu-item.active > a {\n  color: black !important;\n}\n\n.first-menu-item {\n  border-top-right-radius: 10px;\n  border-top-left-radius: 10px;\n}\n\n.last-menu-item {\n  border-bottom-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n}\n\n#menuContainer {\n  position: absolute;\n  top: 60px;\n  right: 10px;\n  z-index: 1;\n  background-color: rgba(0, 0, 0, 0.5);\n  border-radius: 10px;\n}\n\n#getSource {\n  z-index: 1;\n  position: absolute;\n  bottom: 1%;\n  right: 10px;\n  background-color: rgba(0, 0, 0, 0);\n}\n\n#getSource > a {\n  color: white;\n  -webkit-text-emphasis: none;\n          text-emphasis: none;\n}\n\n#introCard-id {\n  background-image: url(/assets/haskell-code-1.png);\n  background-size: cover;\n  background-position: 50%;\n}\n\n#aboutCard-id {\n  background-image: url(/assets/fractal-dark-abstract.png);\n  background-size: cover;\n  background-position: 50%;\n}\n\n#experience-id {\n  background-image: url(/assets/white-bg.jpeg);\n  background-size: cover;\n  background-position: 50%;\n}\n\n#skills-id {\n  background-image: url(/assets/purple-bg.jpeg);\n  background-size: cover;\n  background-position: 50%;\n}\n\n#portfolio-id {\n  background-image: url(/assets/blue-bg.jpeg);\n  background-size: cover;\n  background-position: 50%;\n}\n\n#publications-id {\n  background-image: url(/assets/blue-orange-bg.jpeg);\n  background-size: cover;\n  background-position: 50%;\n}\n\n#fullpage {\n  color: white;\n}\n\n.infoText {\n  border-radius: 10px;\n  width: 50%;\n  margin: auto;\n}\n\n@media only screen and (max-width: 991px) {\n  .infoText {\n    width: 100%;\n  }\n}\n\n@media only screen and (max-width: 991px) {\n  #navbarNav {\n    background-color: rgba(0, 0, 0, 0.75) !important;\n  }\n}\n\n.infoText > p {\n  text-align: left;\n  padding: 20px;\n}\n\n.transparent {\n  background-color: transparent;\n}\n\n.experiences {\n  padding-left: 100px;\n  padding-right: 100px;\n}\n\n.experience-descriptions {\n  text-align: left;\n}\n\n@media only screen and (max-width: 991px) {\n  .experiences {\n    padding-left: 50px;\n    padding-right: 50px;\n  }\n}\n\n.badge-padded {\n  margin-top: 10px;\n  margin-left: 5px;\n  margin-right: 5px;\n}\n\n.skills-badges-container {\n  margin-left: 25%;\n  margin-right: 25%;\n  width: 50%;\n}\n\n@media only screen and (max-width: 1600px) {\n  .skills-badges-container {\n    margin-left: 12.5%;\n    margin-right: 12.5%;\n    width: 75%;\n  }\n}\n\n@media only screen and (max-width: 991px) {\n  .skills-badges-container {\n    margin-left: 0;\n    margin-right: 0;\n    width: 100%;\n  }\n}\n\n.portfolio-details {\n  text-align: left;\n  margin-left: 25%;\n  margin-right: 25%;\n}\n\n@media only screen and (max-width: 991px) {\n  .portfolio-details {\n    margin-left: 50px;\n    margin-right: 50px;\n  }\n}\n\n.fifty-pixels {\n  margin-left: 50px;\n  margin-right: 50px;\n}\n\n.fifty-pixels-pad {\n  padding-left: 50px;\n  padding-right: 50px;\n}\n\n.publications-table {\n  color: white;\n  display: block;\n  width: 100%;\n  table-layout: fixed;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2plcmVteS9Eb2N1bWVudHMvUHJvamVjdHMvSmVyZW15U2l0ZS9zcmMvYXBwL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lcGFnZS9ob21lcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksdUJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLDJDQUFBO0FDQ0o7O0FERUE7RUFDSSx1QkFBQTtBQ0NKOztBREVBO0VBQ0ksNkJBQUE7RUFDQSw0QkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0NBQUE7RUFDQSwrQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtDQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsMkJBQUE7VUFBQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksaURBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0FDQ0o7O0FERUE7RUFDSSx3REFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7QUNDSjs7QURFQTtFQUNJLDRDQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtBQ0NKOztBREVBO0VBQ0ksNkNBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0FDQ0o7O0FERUE7RUFDSSwyQ0FBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7QUNDSjs7QURFQTtFQUNJLGtEQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0k7SUFDSSxXQUFBO0VDQ047QUFDRjs7QURHQTtFQUNJO0lBQ0ksZ0RBQUE7RUNETjtBQUNGOztBRElBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0FDRko7O0FES0E7RUFDSSw2QkFBQTtBQ0ZKOztBREtBO0VBQ0ksbUJBQUE7RUFDQSxvQkFBQTtBQ0ZKOztBREtBO0VBQ0ksZ0JBQUE7QUNGSjs7QURLQTtFQUNJO0lBQ0ksa0JBQUE7SUFDQSxtQkFBQTtFQ0ZOO0FBQ0Y7O0FES0E7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNISjs7QURNQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FDSEo7O0FETUE7RUFDSTtJQUNJLGtCQUFBO0lBQ0EsbUJBQUE7SUFDQSxVQUFBO0VDSE47QUFDRjs7QURNQTtFQUNJO0lBQ0ksY0FBQTtJQUNBLGVBQUE7SUFDQSxXQUFBO0VDSk47QUFDRjs7QURPQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0xKOztBRFFBO0VBQ0k7SUFDSSxpQkFBQTtJQUNBLGtCQUFBO0VDTE47QUFDRjs7QURRQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUNOSjs7QURTQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUNOSjs7QURTQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNOSiIsImZpbGUiOiJzcmMvYXBwL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XG4gICAgY29sb3I6ICNlOWM0ZmY7XG59XG5cbnRkIHtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbiNtZW51IHtcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLm1lbnUtaXRlbSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG5cbi5tZW51LWl0ZW0uYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogcmdiKDIzMywgMjMzLCAyMzMpLCAkYWxwaGE6IDAuNzUpO1xufVxuXG4ubWVudS1pdGVtLm1lbnUtaXRlbS5hY3RpdmUgPiBhIHtcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbn1cblxuLmZpcnN0LW1lbnUtaXRlbSB7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbn1cblxuLmxhc3QtbWVudS1pdGVtIHtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xufVxuXG4jbWVudUNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNjBweDtcbiAgICByaWdodDogMTBweDtcbiAgICB6LWluZGV4OiAxO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAjMDAwMDAwLCAkYWxwaGE6IDAuNSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuI2dldFNvdXJjZSB7XG4gICAgei1pbmRleDogMTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxJTtcbiAgICByaWdodDogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogIzAwMDAwMCwgJGFscGhhOiAwLjApO1xufVxuXG4jZ2V0U291cmNlID4gYSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtZW1waGFzaXM6IG5vbmU7XG59XG5cbiNpbnRyb0NhcmQtaWQge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2hhc2tlbGwtY29kZS0xLnBuZyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCU7XG59XG5cbiNhYm91dENhcmQtaWQge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ZyYWN0YWwtZGFyay1hYnN0cmFjdC5wbmcpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlO1xufVxuXG4jZXhwZXJpZW5jZS1pZCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvd2hpdGUtYmcuanBlZyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCU7XG59XG5cbiNza2lsbHMtaWQge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL3B1cnBsZS1iZy5qcGVnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJTtcbn1cblxuI3BvcnRmb2xpby1pZCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvYmx1ZS1iZy5qcGVnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJTtcbn1cblxuI3B1YmxpY2F0aW9ucy1pZCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvYmx1ZS1vcmFuZ2UtYmcuanBlZyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCU7XG59XG5cbiNmdWxscGFnZSB7XG4gICAgY29sb3I6d2hpdGU7XG59XG5cbi5pbmZvVGV4dCB7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB3aWR0aDogNTAlO1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgIC5pbmZvVGV4dCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAjbmF2YmFyTmF2IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6IGJsYWNrLCAkYWxwaGE6IDAuNzUpICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG4uaW5mb1RleHQgPiBwIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG5cbi50cmFuc3BhcmVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5leHBlcmllbmNlcyB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMDBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMDBweFxufVxuXG4uZXhwZXJpZW5jZS1kZXNjcmlwdGlvbnMge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAuZXhwZXJpZW5jZXMge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gICAgfVxufVxuXG4uYmFkZ2UtcGFkZGVkIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5za2lsbHMtYmFkZ2VzLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDI1JTtcbiAgICB3aWR0aDogNTAlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2MDBweCkge1xuICAgIC5za2lsbHMtYmFkZ2VzLWNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMi41JTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMi41JTtcbiAgICAgICAgd2lkdGg6IDc1JTtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAuc2tpbGxzLWJhZGdlcy1jb250YWluZXIge1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG5cbi5wb3J0Zm9saW8tZGV0YWlscyB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xuICAgIG1hcmdpbi1yaWdodDogMjUlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgLnBvcnRmb2xpby1kZXRhaWxzIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNTBweDtcbiAgICB9XG59XG5cbi5maWZ0eS1waXhlbHMge1xuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICAgIG1hcmdpbi1yaWdodDogNTBweDtcbn1cblxuLmZpZnR5LXBpeGVscy1wYWQge1xuICAgIHBhZGRpbmctbGVmdDogNTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xufVxuXG4ucHVibGljYXRpb25zLXRhYmxlIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufSIsImEge1xuICBjb2xvcjogI2U5YzRmZjtcbn1cblxudGQge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4jbWVudSB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4ubWVudS1pdGVtIHtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuXG4ubWVudS1pdGVtLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMzLCAyMzMsIDIzMywgMC43NSk7XG59XG5cbi5tZW51LWl0ZW0ubWVudS1pdGVtLmFjdGl2ZSA+IGEge1xuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbn1cblxuLmZpcnN0LW1lbnUtaXRlbSB7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xufVxuXG4ubGFzdC1tZW51LWl0ZW0ge1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbn1cblxuI21lbnVDb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNjBweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuI2dldFNvdXJjZSB7XG4gIHotaW5kZXg6IDE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxJTtcbiAgcmlnaHQ6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG59XG5cbiNnZXRTb3VyY2UgPiBhIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWVtcGhhc2lzOiBub25lO1xufVxuXG4jaW50cm9DYXJkLWlkIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaGFza2VsbC1jb2RlLTEucG5nKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlO1xufVxuXG4jYWJvdXRDYXJkLWlkIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvZnJhY3RhbC1kYXJrLWFic3RyYWN0LnBuZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJTtcbn1cblxuI2V4cGVyaWVuY2UtaWQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy93aGl0ZS1iZy5qcGVnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlO1xufVxuXG4jc2tpbGxzLWlkIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvcHVycGxlLWJnLmpwZWcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCU7XG59XG5cbiNwb3J0Zm9saW8taWQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9ibHVlLWJnLmpwZWcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCU7XG59XG5cbiNwdWJsaWNhdGlvbnMtaWQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9ibHVlLW9yYW5nZS1iZy5qcGVnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlO1xufVxuXG4jZnVsbHBhZ2Uge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5pbmZvVGV4dCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuaW5mb1RleHQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICNuYXZiYXJOYXYge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NSkgIWltcG9ydGFudDtcbiAgfVxufVxuLmluZm9UZXh0ID4gcCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi50cmFuc3BhcmVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZXhwZXJpZW5jZXMge1xuICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMDBweDtcbn1cblxuLmV4cGVyaWVuY2UtZGVzY3JpcHRpb25zIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuZXhwZXJpZW5jZXMge1xuICAgIHBhZGRpbmctbGVmdDogNTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xuICB9XG59XG4uYmFkZ2UtcGFkZGVkIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5za2lsbHMtYmFkZ2VzLWNvbnRhaW5lciB7XG4gIG1hcmdpbi1sZWZ0OiAyNSU7XG4gIG1hcmdpbi1yaWdodDogMjUlO1xuICB3aWR0aDogNTAlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2MDBweCkge1xuICAuc2tpbGxzLWJhZGdlcy1jb250YWluZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAxMi41JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEyLjUlO1xuICAgIHdpZHRoOiA3NSU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLnNraWxscy1iYWRnZXMtY29udGFpbmVyIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbi5wb3J0Zm9saW8tZGV0YWlscyB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAyNSU7XG4gIG1hcmdpbi1yaWdodDogMjUlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5wb3J0Zm9saW8tZGV0YWlscyB7XG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICB9XG59XG4uZmlmdHktcGl4ZWxzIHtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gIG1hcmdpbi1yaWdodDogNTBweDtcbn1cblxuLmZpZnR5LXBpeGVscy1wYWQge1xuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG59XG5cbi5wdWJsaWNhdGlvbnMtdGFibGUge1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/homepage/homepage.component.ts":
  /*!************************************************!*\
    !*** ./src/app/homepage/homepage.component.ts ***!
    \************************************************/

  /*! exports provided: HomepageComponent */

  /***/
  function srcAppHomepageHomepageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomepageComponent", function () {
      return HomepageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _license__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../license */
    "./src/license.ts");
    /* harmony import */


    var _projects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../projects.service */
    "./src/app/projects.service.ts");
    /* harmony import */


    var _experiences_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../experiences.service */
    "./src/app/experiences.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _skills_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../skills.service */
    "./src/app/skills.service.ts");
    /* harmony import */


    var _publications_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../publications.service */
    "./src/app/publications.service.ts");

    var HomepageComponent =
    /*#__PURE__*/
    function () {
      function HomepageComponent(projectsService, experiencesService, skillsService, publicationsService) {
        _classCallCheck(this, HomepageComponent);

        this.projectsService = projectsService;
        this.experiencesService = experiencesService;
        this.skillsService = skillsService;
        this.publicationsService = publicationsService;
        this.skillColorPalette = ['#5B2AD2', '#8864DF', '#360CA0', '#1D0556', '#5B2AD2', '#8864DF', '#360CA0', '#1D0556', '#E41887', '#EC5BAA', '#BC0067', '#660038', '#1C9EC9', '#58B9D9', '#046E92', '#023B4F'];
        this.projects = this.projectsService.fetchProjectsList();
        this.experiences = this.experiencesService.fetchExperiencesList();
        this.skills = this.skillsService.fetchSkillsList();
        this.publications = this.publicationsService.fetchPublicationsList(); // TODO fix fetch homepage

        this.config = {
          licenseKey: _license__WEBPACK_IMPORTED_MODULE_2__["LICENSE_KEY"],
          anchors: ['top', 'introduction', 'experience', 'skills', 'portfolio', 'publications'],
          scrollOverflow: true,
          menu: '#menu'
        };
      }

      _createClass(HomepageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this = this;

          this.projects.subscribe(function (_) {
            _this.fullpage_api.build();
          });
          this.experiences.subscribe(function (_) {
            _this.fullpage_api.build();
          });
          this.skills.subscribe(function (_) {
            _this.fullpage_api.build();
          });
          this.publications.subscribe(function (x) {
            console.warn(x);

            _this.fullpage_api.build();
          });
        }
      }, {
        key: "getRef",
        value: function getRef(fullPageRef) {
          this.fullpage_api = fullPageRef;
        }
      }, {
        key: "renderDate",
        value: function renderDate(date) {
          return date === null ? 'Present' : Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["formatDate"])(date, 'MMMM yyyy', 'en-US', '+0430');
        }
      }]);

      return HomepageComponent;
    }();

    HomepageComponent.ctorParameters = function () {
      return [{
        type: _projects_service__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"]
      }, {
        type: _experiences_service__WEBPACK_IMPORTED_MODULE_4__["ExperiencesService"]
      }, {
        type: _skills_service__WEBPACK_IMPORTED_MODULE_6__["SkillsService"]
      }, {
        type: _publications_service__WEBPACK_IMPORTED_MODULE_7__["PublicationsService"]
      }];
    };

    HomepageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-homepage',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./homepage.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/homepage/homepage.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./homepage.component.scss */
      "./src/app/homepage/homepage.component.scss")).default]
    })], HomepageComponent);
    /***/
  },

  /***/
  "./src/app/projects.service.ts":
  /*!*************************************!*\
    !*** ./src/app/projects.service.ts ***!
    \*************************************/

  /*! exports provided: ProjectsService */

  /***/
  function srcAppProjectsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsService", function () {
      return ProjectsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ProjectsService =
    /*#__PURE__*/
    function () {
      function ProjectsService(http) {
        _classCallCheck(this, ProjectsService);

        this.http = http;
      }

      _createClass(ProjectsService, [{
        key: "fetchProjectsList",
        value: function fetchProjectsList() {
          return this.http.get("api/projects/");
        }
      }]);

      return ProjectsService;
    }();

    ProjectsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ProjectsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ProjectsService);
    /***/
  },

  /***/
  "./src/app/projects/projects.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/projects/projects.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProjectsProjectsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#projects-container {\n  margin-top: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2plcmVteS9Eb2N1bWVudHMvUHJvamVjdHMvSmVyZW15U2l0ZS9zcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwcm9qZWN0cy1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG59IiwiI3Byb2plY3RzLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/projects/projects.component.ts":
  /*!************************************************!*\
    !*** ./src/app/projects/projects.component.ts ***!
    \************************************************/

  /*! exports provided: ProjectsComponent */

  /***/
  function srcAppProjectsProjectsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function () {
      return ProjectsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _projects_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../projects.service */
    "./src/app/projects.service.ts");

    var ProjectsComponent =
    /*#__PURE__*/
    function () {
      function ProjectsComponent(projectsService) {
        _classCallCheck(this, ProjectsComponent);

        this.projectsService = projectsService;
        this.projects = this.projectsService.fetchProjectsList();
      }

      _createClass(ProjectsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProjectsComponent;
    }();

    ProjectsComponent.ctorParameters = function () {
      return [{
        type: _projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"]
      }];
    };

    ProjectsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-projects',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./projects.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./projects.component.scss */
      "./src/app/projects/projects.component.scss")).default]
    })], ProjectsComponent);
    /***/
  },

  /***/
  "./src/app/publications.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/publications.service.ts ***!
    \*****************************************/

  /*! exports provided: PublicationsService */

  /***/
  function srcAppPublicationsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PublicationsService", function () {
      return PublicationsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var PublicationsService =
    /*#__PURE__*/
    function () {
      function PublicationsService(http) {
        _classCallCheck(this, PublicationsService);

        this.http = http;
      }

      _createClass(PublicationsService, [{
        key: "fetchPublicationsList",
        value: function fetchPublicationsList() {
          return this.http.get('api/publications/');
        }
      }]);

      return PublicationsService;
    }();

    PublicationsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    PublicationsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], PublicationsService);
    /***/
  },

  /***/
  "./src/app/skills.service.ts":
  /*!***********************************!*\
    !*** ./src/app/skills.service.ts ***!
    \***********************************/

  /*! exports provided: SkillsService */

  /***/
  function srcAppSkillsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SkillsService", function () {
      return SkillsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var SkillsService =
    /*#__PURE__*/
    function () {
      function SkillsService(http) {
        _classCallCheck(this, SkillsService);

        this.http = http;
      }

      _createClass(SkillsService, [{
        key: "fetchSkillsList",
        value: function fetchSkillsList() {
          return this.http.get('api/skills/');
        }
      }]);

      return SkillsService;
    }();

    SkillsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    SkillsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SkillsService);
    /***/
  },

  /***/
  "./src/app/tankbattle/tankbattle.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/tankbattle/tankbattle.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTankbattleTankbattleComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "body {\n  background-color: black;\n}\n\n#tankbattle {\n  position: absolute;\n  display: block;\n  bottom: 0;\n  padding-top: 50px;\n  width: 100%;\n  height: 100%;\n  border: none;\n  background-color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2plcmVteS9Eb2N1bWVudHMvUHJvamVjdHMvSmVyZW15U2l0ZS9zcmMvYXBwL3RhbmtiYXR0bGUvdGFua2JhdHRsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGFua2JhdHRsZS90YW5rYmF0dGxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC90YW5rYmF0dGxlL3RhbmtiYXR0bGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuI3RhbmtiYXR0bGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3R0b206IDA7XG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn0iLCJib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbiN0YW5rYmF0dGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm90dG9tOiAwO1xuICBwYWRkaW5nLXRvcDogNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/tankbattle/tankbattle.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/tankbattle/tankbattle.component.ts ***!
    \****************************************************/

  /*! exports provided: TankbattleComponent */

  /***/
  function srcAppTankbattleTankbattleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TankbattleComponent", function () {
      return TankbattleComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TankbattleComponent =
    /*#__PURE__*/
    function () {
      function TankbattleComponent() {
        _classCallCheck(this, TankbattleComponent);
      }

      _createClass(TankbattleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TankbattleComponent;
    }();

    TankbattleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tankbattle',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tankbattle.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tankbattle/tankbattle.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./tankbattle.component.scss */
      "./src/app/tankbattle/tankbattle.component.scss")).default]
    })], TankbattleComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/license.ts":
  /*!************************!*\
    !*** ./src/license.ts ***!
    \************************/

  /*! exports provided: LICENSE_KEY */

  /***/
  function srcLicenseTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LICENSE_KEY", function () {
      return LICENSE_KEY;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var LICENSE_KEY = '61196834-BBBC4A6E-94F132B3-0D8C8465';
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/jeremy/Documents/Projects/JeremySite/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map