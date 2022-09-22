function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ingresos-ingresos-mensuales-ingresos-mensuales-module"], {
  /***/
  "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js":
  /*!***************************************************************************!*\
    !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js ***!
    \***************************************************************************/

  /*! exports provided: MatGridAvatarCssMatStyler, MatGridList, MatGridListModule, MatGridTile, MatGridTileFooterCssMatStyler, MatGridTileHeaderCssMatStyler, MatGridTileText, ɵTileCoordinator, ɵangular_material_src_material_grid_list_grid_list_a */

  /***/
  function node_modulesAngularMaterial__ivy_ngcc__Fesm2015GridListJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatGridAvatarCssMatStyler", function () {
      return MatGridAvatarCssMatStyler;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatGridList", function () {
      return MatGridList;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatGridListModule", function () {
      return MatGridListModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatGridTile", function () {
      return MatGridTile;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatGridTileFooterCssMatStyler", function () {
      return MatGridTileFooterCssMatStyler;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatGridTileHeaderCssMatStyler", function () {
      return MatGridTileHeaderCssMatStyler;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatGridTileText", function () {
      return MatGridTileText;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵTileCoordinator", function () {
      return TileCoordinator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_grid_list_grid_list_a", function () {
      return MAT_GRID_LIST;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Injection token used to provide a grid list to a tile and to avoid circular imports.
     * @docs-private
     */


    var _c0 = ["*"];
    var _c1 = [[["", "mat-grid-avatar", ""], ["", "matGridAvatar", ""]], [["", "mat-line", ""], ["", "matLine", ""]], "*"];
    var _c2 = ["[mat-grid-avatar], [matGridAvatar]", "[mat-line], [matLine]", "*"];
    var MAT_GRID_LIST = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_GRID_LIST');
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    var MatGridTile =
    /** @class */
    function () {
      var MatGridTile = /*#__PURE__*/function () {
        function MatGridTile(_element, _gridList) {
          _classCallCheck(this, MatGridTile);

          this._element = _element;
          this._gridList = _gridList;
          this._rowspan = 1;
          this._colspan = 1;
        }
        /** Amount of rows that the grid tile takes up. */


        _createClass(MatGridTile, [{
          key: "_setStyle",

          /**
           * Sets the style of the grid-tile element.  Needs to be set manually to avoid
           * "Changed after checked" errors that would occur with HostBinding.
           */
          value: function _setStyle(property, value) {
            this._element.nativeElement.style[property] = value;
          }
        }, {
          key: "rowspan",
          get: function get() {
            return this._rowspan;
          },
          set: function set(value) {
            this._rowspan = Math.round(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value));
          }
          /** Amount of columns that the grid tile takes up. */

        }, {
          key: "colspan",
          get: function get() {
            return this._colspan;
          },
          set: function set(value) {
            this._colspan = Math.round(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value));
          }
        }]);

        return MatGridTile;
      }();

      MatGridTile.ɵfac = function MatGridTile_Factory(t) {
        return new (t || MatGridTile)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_GRID_LIST, 8));
      };

      MatGridTile.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatGridTile,
        selectors: [["mat-grid-tile"]],
        hostAttrs: [1, "mat-grid-tile"],
        hostVars: 2,
        hostBindings: function MatGridTile_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("rowspan", ctx.rowspan)("colspan", ctx.colspan);
          }
        },
        inputs: {
          rowspan: "rowspan",
          colspan: "colspan"
        },
        exportAs: ["matGridTile"],
        ngContentSelectors: _c0,
        decls: 2,
        vars: 0,
        consts: [[1, "mat-figure"]],
        template: function MatGridTile_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "figure", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}\n"],
        encapsulation: 2,
        changeDetection: 0
      });

      MatGridTile.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MAT_GRID_LIST]
          }]
        }];
      };

      MatGridTile.propDecorators = {
        rowspan: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        colspan: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridTile, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'mat-grid-tile',
            exportAs: 'matGridTile',
            host: {
              'class': 'mat-grid-tile',
              // Ensures that the "rowspan" and "colspan" input value is reflected in
              // the DOM. This is needed for the grid-tile harness.
              '[attr.rowspan]': 'rowspan',
              '[attr.colspan]': 'colspan'
            },
            template: "<!-- TODO(kara): Revisit why this is a figure.-->\n<figure class=\"mat-figure\">\n  <ng-content></ng-content>\n</figure>",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [MAT_GRID_LIST]
            }]
          }];
        }, {
          rowspan: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          colspan: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      return MatGridTile;
    }();

    var MatGridTileText =
    /** @class */
    function () {
      var MatGridTileText = /*#__PURE__*/function () {
        function MatGridTileText(_element) {
          _classCallCheck(this, MatGridTileText);

          this._element = _element;
        }

        _createClass(MatGridTileText, [{
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["setLines"])(this._lines, this._element);
          }
        }]);

        return MatGridTileText;
      }();

      MatGridTileText.ɵfac = function MatGridTileText_Factory(t) {
        return new (t || MatGridTileText)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      MatGridTileText.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatGridTileText,
        selectors: [["mat-grid-tile-header"], ["mat-grid-tile-footer"]],
        contentQueries: function MatGridTileText_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLine"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._lines = _t);
          }
        },
        ngContentSelectors: _c2,
        decls: 4,
        vars: 0,
        consts: [[1, "mat-grid-list-text"]],
        template: function MatGridTileText_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 2);
          }
        },
        encapsulation: 2,
        changeDetection: 0
      });

      MatGridTileText.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      };

      MatGridTileText.propDecorators = {
        _lines: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLine"], {
            descendants: true
          }]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridTileText, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'mat-grid-tile-header, mat-grid-tile-footer',
            template: "<ng-content select=\"[mat-grid-avatar], [matGridAvatar]\"></ng-content>\n<div class=\"mat-grid-list-text\"><ng-content select=\"[mat-line], [matLine]\"></ng-content></div>\n<ng-content></ng-content>\n",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          _lines: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLine"], {
              descendants: true
            }]
          }]
        });
      })();

      return MatGridTileText;
    }();
    /**
     * Directive whose purpose is to add the mat- CSS styling to this selector.
     * @docs-private
     */


    var MatGridAvatarCssMatStyler =
    /** @class */
    function () {
      var MatGridAvatarCssMatStyler = function MatGridAvatarCssMatStyler() {
        _classCallCheck(this, MatGridAvatarCssMatStyler);
      };

      MatGridAvatarCssMatStyler.ɵfac = function MatGridAvatarCssMatStyler_Factory(t) {
        return new (t || MatGridAvatarCssMatStyler)();
      };

      MatGridAvatarCssMatStyler.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatGridAvatarCssMatStyler,
        selectors: [["", "mat-grid-avatar", ""], ["", "matGridAvatar", ""]],
        hostAttrs: [1, "mat-grid-avatar"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridAvatarCssMatStyler, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[mat-grid-avatar], [matGridAvatar]',
            host: {
              'class': 'mat-grid-avatar'
            }
          }]
        }], null, null);
      })();

      return MatGridAvatarCssMatStyler;
    }();
    /**
     * Directive whose purpose is to add the mat- CSS styling to this selector.
     * @docs-private
     */


    var MatGridTileHeaderCssMatStyler =
    /** @class */
    function () {
      var MatGridTileHeaderCssMatStyler = function MatGridTileHeaderCssMatStyler() {
        _classCallCheck(this, MatGridTileHeaderCssMatStyler);
      };

      MatGridTileHeaderCssMatStyler.ɵfac = function MatGridTileHeaderCssMatStyler_Factory(t) {
        return new (t || MatGridTileHeaderCssMatStyler)();
      };

      MatGridTileHeaderCssMatStyler.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatGridTileHeaderCssMatStyler,
        selectors: [["mat-grid-tile-header"]],
        hostAttrs: [1, "mat-grid-tile-header"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridTileHeaderCssMatStyler, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'mat-grid-tile-header',
            host: {
              'class': 'mat-grid-tile-header'
            }
          }]
        }], null, null);
      })();

      return MatGridTileHeaderCssMatStyler;
    }();
    /**
     * Directive whose purpose is to add the mat- CSS styling to this selector.
     * @docs-private
     */


    var MatGridTileFooterCssMatStyler =
    /** @class */
    function () {
      var MatGridTileFooterCssMatStyler = function MatGridTileFooterCssMatStyler() {
        _classCallCheck(this, MatGridTileFooterCssMatStyler);
      };

      MatGridTileFooterCssMatStyler.ɵfac = function MatGridTileFooterCssMatStyler_Factory(t) {
        return new (t || MatGridTileFooterCssMatStyler)();
      };

      MatGridTileFooterCssMatStyler.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatGridTileFooterCssMatStyler,
        selectors: [["mat-grid-tile-footer"]],
        hostAttrs: [1, "mat-grid-tile-footer"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridTileFooterCssMatStyler, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'mat-grid-tile-footer',
            host: {
              'class': 'mat-grid-tile-footer'
            }
          }]
        }], null, null);
      })();

      return MatGridTileFooterCssMatStyler;
    }();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Class for determining, from a list of tiles, the (row, col) position of each of those tiles
     * in the grid. This is necessary (rather than just rendering the tiles in normal document flow)
     * because the tiles can have a rowspan.
     *
     * The positioning algorithm greedily places each tile as soon as it encounters a gap in the grid
     * large enough to accommodate it so that the tiles still render in the same order in which they
     * are given.
     *
     * The basis of the algorithm is the use of an array to track the already placed tiles. Each
     * element of the array corresponds to a column, and the value indicates how many cells in that
     * column are already occupied; zero indicates an empty cell. Moving "down" to the next row
     * decrements each value in the tracking array (indicating that the column is one cell closer to
     * being free).
     *
     * @docs-private
     */


    var TileCoordinator = /*#__PURE__*/function () {
      function TileCoordinator() {
        _classCallCheck(this, TileCoordinator);

        /** Index at which the search for the next gap will start. */
        this.columnIndex = 0;
        /** The current row index. */

        this.rowIndex = 0;
      }
      /** Gets the total number of rows occupied by tiles */


      _createClass(TileCoordinator, [{
        key: "update",

        /**
         * Updates the tile positions.
         * @param numColumns Amount of columns in the grid.
         * @param tiles Tiles to be positioned.
         */
        value: function update(numColumns, tiles) {
          var _this = this;

          this.columnIndex = 0;
          this.rowIndex = 0;
          this.tracker = new Array(numColumns);
          this.tracker.fill(0, 0, this.tracker.length);
          this.positions = tiles.map(function (tile) {
            return _this._trackTile(tile);
          });
        }
        /** Calculates the row and col position of a tile. */

      }, {
        key: "_trackTile",
        value: function _trackTile(tile) {
          // Find a gap large enough for this tile.
          var gapStartIndex = this._findMatchingGap(tile.colspan); // Place tile in the resulting gap.


          this._markTilePosition(gapStartIndex, tile); // The next time we look for a gap, the search will start at columnIndex, which should be
          // immediately after the tile that has just been placed.


          this.columnIndex = gapStartIndex + tile.colspan;
          return new TilePosition(this.rowIndex, gapStartIndex);
        }
        /** Finds the next available space large enough to fit the tile. */

      }, {
        key: "_findMatchingGap",
        value: function _findMatchingGap(tileCols) {
          if (tileCols > this.tracker.length) {
            throw Error("mat-grid-list: tile with colspan ".concat(tileCols, " is wider than ") + "grid with cols=\"".concat(this.tracker.length, "\"."));
          } // Start index is inclusive, end index is exclusive.


          var gapStartIndex = -1;
          var gapEndIndex = -1; // Look for a gap large enough to fit the given tile. Empty spaces are marked with a zero.

          do {
            // If we've reached the end of the row, go to the next row.
            if (this.columnIndex + tileCols > this.tracker.length) {
              this._nextRow();

              gapStartIndex = this.tracker.indexOf(0, this.columnIndex);
              gapEndIndex = this._findGapEndIndex(gapStartIndex);
              continue;
            }

            gapStartIndex = this.tracker.indexOf(0, this.columnIndex); // If there are no more empty spaces in this row at all, move on to the next row.

            if (gapStartIndex == -1) {
              this._nextRow();

              gapStartIndex = this.tracker.indexOf(0, this.columnIndex);
              gapEndIndex = this._findGapEndIndex(gapStartIndex);
              continue;
            }

            gapEndIndex = this._findGapEndIndex(gapStartIndex); // If a gap large enough isn't found, we want to start looking immediately after the current
            // gap on the next iteration.

            this.columnIndex = gapStartIndex + 1; // Continue iterating until we find a gap wide enough for this tile. Since gapEndIndex is
            // exclusive, gapEndIndex is 0 means we didn't find a gap and should continue.
          } while (gapEndIndex - gapStartIndex < tileCols || gapEndIndex == 0); // If we still didn't manage to find a gap, ensure that the index is
          // at least zero so the tile doesn't get pulled out of the grid.


          return Math.max(gapStartIndex, 0);
        }
        /** Move "down" to the next row. */

      }, {
        key: "_nextRow",
        value: function _nextRow() {
          this.columnIndex = 0;
          this.rowIndex++; // Decrement all spaces by one to reflect moving down one row.

          for (var i = 0; i < this.tracker.length; i++) {
            this.tracker[i] = Math.max(0, this.tracker[i] - 1);
          }
        }
        /**
         * Finds the end index (exclusive) of a gap given the index from which to start looking.
         * The gap ends when a non-zero value is found.
         */

      }, {
        key: "_findGapEndIndex",
        value: function _findGapEndIndex(gapStartIndex) {
          for (var i = gapStartIndex + 1; i < this.tracker.length; i++) {
            if (this.tracker[i] != 0) {
              return i;
            }
          } // The gap ends with the end of the row.


          return this.tracker.length;
        }
        /** Update the tile tracker to account for the given tile in the given space. */

      }, {
        key: "_markTilePosition",
        value: function _markTilePosition(start, tile) {
          for (var i = 0; i < tile.colspan; i++) {
            this.tracker[start + i] = tile.rowspan;
          }
        }
      }, {
        key: "rowCount",
        get: function get() {
          return this.rowIndex + 1;
        }
        /**
         * Gets the total span of rows occupied by tiles.
         * Ex: A list with 1 row that contains a tile with rowspan 2 will have a total rowspan of 2.
         */

      }, {
        key: "rowspan",
        get: function get() {
          var lastRowMax = Math.max.apply(Math, _toConsumableArray(this.tracker)); // if any of the tiles has a rowspan that pushes it beyond the total row count,
          // add the difference to the rowcount

          return lastRowMax > 1 ? this.rowCount + lastRowMax - 1 : this.rowCount;
        }
      }]);

      return TileCoordinator;
    }();
    /**
     * Simple data structure for tile position (row, col).
     * @docs-private
     */


    var TilePosition = function TilePosition(row, col) {
      _classCallCheck(this, TilePosition);

      this.row = row;
      this.col = col;
    };
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * RegExp that can be used to check whether a value will
     * be allowed inside a CSS `calc()` expression.
     */


    var cssCalcAllowedValue = /^-?\d+((\.\d+)?[A-Za-z%$]?)+$/;
    /**
     * Sets the style properties for an individual tile, given the position calculated by the
     * Tile Coordinator.
     * @docs-private
     */

    var TileStyler = /*#__PURE__*/function () {
      function TileStyler() {
        _classCallCheck(this, TileStyler);

        this._rows = 0;
        this._rowspan = 0;
      }
      /**
       * Adds grid-list layout info once it is available. Cannot be processed in the constructor
       * because these properties haven't been calculated by that point.
       *
       * @param gutterSize Size of the grid's gutter.
       * @param tracker Instance of the TileCoordinator.
       * @param cols Amount of columns in the grid.
       * @param direction Layout direction of the grid.
       */


      _createClass(TileStyler, [{
        key: "init",
        value: function init(gutterSize, tracker, cols, direction) {
          this._gutterSize = normalizeUnits(gutterSize);
          this._rows = tracker.rowCount;
          this._rowspan = tracker.rowspan;
          this._cols = cols;
          this._direction = direction;
        }
        /**
         * Computes the amount of space a single 1x1 tile would take up (width or height).
         * Used as a basis for other calculations.
         * @param sizePercent Percent of the total grid-list space that one 1x1 tile would take up.
         * @param gutterFraction Fraction of the gutter size taken up by one 1x1 tile.
         * @return The size of a 1x1 tile as an expression that can be evaluated via CSS calc().
         */

      }, {
        key: "getBaseTileSize",
        value: function getBaseTileSize(sizePercent, gutterFraction) {
          // Take the base size percent (as would be if evenly dividing the size between cells),
          // and then subtracting the size of one gutter. However, since there are no gutters on the
          // edges, each tile only uses a fraction (gutterShare = numGutters / numCells) of the gutter
          // size. (Imagine having one gutter per tile, and then breaking up the extra gutter on the
          // edge evenly among the cells).
          return "(".concat(sizePercent, "% - (").concat(this._gutterSize, " * ").concat(gutterFraction, "))");
        }
        /**
         * Gets The horizontal or vertical position of a tile, e.g., the 'top' or 'left' property value.
         * @param offset Number of tiles that have already been rendered in the row/column.
         * @param baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
         * @return Position of the tile as a CSS calc() expression.
         */

      }, {
        key: "getTilePosition",
        value: function getTilePosition(baseSize, offset) {
          // The position comes the size of a 1x1 tile plus gutter for each previous tile in the
          // row/column (offset).
          return offset === 0 ? '0' : calc("(".concat(baseSize, " + ").concat(this._gutterSize, ") * ").concat(offset));
        }
        /**
         * Gets the actual size of a tile, e.g., width or height, taking rowspan or colspan into account.
         * @param baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
         * @param span The tile's rowspan or colspan.
         * @return Size of the tile as a CSS calc() expression.
         */

      }, {
        key: "getTileSize",
        value: function getTileSize(baseSize, span) {
          return "(".concat(baseSize, " * ").concat(span, ") + (").concat(span - 1, " * ").concat(this._gutterSize, ")");
        }
        /**
         * Sets the style properties to be applied to a tile for the given row and column index.
         * @param tile Tile to which to apply the styling.
         * @param rowIndex Index of the tile's row.
         * @param colIndex Index of the tile's column.
         */

      }, {
        key: "setStyle",
        value: function setStyle(tile, rowIndex, colIndex) {
          // Percent of the available horizontal space that one column takes up.
          var percentWidthPerTile = 100 / this._cols; // Fraction of the vertical gutter size that each column takes up.
          // For example, if there are 5 columns, each column uses 4/5 = 0.8 times the gutter width.

          var gutterWidthFractionPerTile = (this._cols - 1) / this._cols;
          this.setColStyles(tile, colIndex, percentWidthPerTile, gutterWidthFractionPerTile);
          this.setRowStyles(tile, rowIndex, percentWidthPerTile, gutterWidthFractionPerTile);
        }
        /** Sets the horizontal placement of the tile in the list. */

      }, {
        key: "setColStyles",
        value: function setColStyles(tile, colIndex, percentWidth, gutterWidth) {
          // Base horizontal size of a column.
          var baseTileWidth = this.getBaseTileSize(percentWidth, gutterWidth); // The width and horizontal position of each tile is always calculated the same way, but the
          // height and vertical position depends on the rowMode.

          var side = this._direction === 'rtl' ? 'right' : 'left';

          tile._setStyle(side, this.getTilePosition(baseTileWidth, colIndex));

          tile._setStyle('width', calc(this.getTileSize(baseTileWidth, tile.colspan)));
        }
        /**
         * Calculates the total size taken up by gutters across one axis of a list.
         */

      }, {
        key: "getGutterSpan",
        value: function getGutterSpan() {
          return "".concat(this._gutterSize, " * (").concat(this._rowspan, " - 1)");
        }
        /**
         * Calculates the total size taken up by tiles across one axis of a list.
         * @param tileHeight Height of the tile.
         */

      }, {
        key: "getTileSpan",
        value: function getTileSpan(tileHeight) {
          return "".concat(this._rowspan, " * ").concat(this.getTileSize(tileHeight, 1));
        }
        /**
         * Calculates the computed height and returns the correct style property to set.
         * This method can be implemented by each type of TileStyler.
         * @docs-private
         */

      }, {
        key: "getComputedHeight",
        value: function getComputedHeight() {
          return null;
        }
      }]);

      return TileStyler;
    }();
    /**
     * This type of styler is instantiated when the user passes in a fixed row height.
     * Example `<mat-grid-list cols="3" rowHeight="100px">`
     * @docs-private
     */


    var FixedTileStyler = /*#__PURE__*/function (_TileStyler) {
      _inherits(FixedTileStyler, _TileStyler);

      var _super = _createSuper(FixedTileStyler);

      function FixedTileStyler(fixedRowHeight) {
        var _this2;

        _classCallCheck(this, FixedTileStyler);

        _this2 = _super.call(this);
        _this2.fixedRowHeight = fixedRowHeight;
        return _this2;
      }

      _createClass(FixedTileStyler, [{
        key: "init",
        value: function init(gutterSize, tracker, cols, direction) {
          _get(_getPrototypeOf(FixedTileStyler.prototype), "init", this).call(this, gutterSize, tracker, cols, direction);

          this.fixedRowHeight = normalizeUnits(this.fixedRowHeight);

          if (!cssCalcAllowedValue.test(this.fixedRowHeight)) {
            throw Error("Invalid value \"".concat(this.fixedRowHeight, "\" set as rowHeight."));
          }
        }
      }, {
        key: "setRowStyles",
        value: function setRowStyles(tile, rowIndex) {
          tile._setStyle('top', this.getTilePosition(this.fixedRowHeight, rowIndex));

          tile._setStyle('height', calc(this.getTileSize(this.fixedRowHeight, tile.rowspan)));
        }
      }, {
        key: "getComputedHeight",
        value: function getComputedHeight() {
          return ['height', calc("".concat(this.getTileSpan(this.fixedRowHeight), " + ").concat(this.getGutterSpan()))];
        }
      }, {
        key: "reset",
        value: function reset(list) {
          list._setListStyle(['height', null]);

          if (list._tiles) {
            list._tiles.forEach(function (tile) {
              tile._setStyle('top', null);

              tile._setStyle('height', null);
            });
          }
        }
      }]);

      return FixedTileStyler;
    }(TileStyler);
    /**
     * This type of styler is instantiated when the user passes in a width:height ratio
     * for the row height.  Example `<mat-grid-list cols="3" rowHeight="3:1">`
     * @docs-private
     */


    var RatioTileStyler = /*#__PURE__*/function (_TileStyler2) {
      _inherits(RatioTileStyler, _TileStyler2);

      var _super2 = _createSuper(RatioTileStyler);

      function RatioTileStyler(value) {
        var _this3;

        _classCallCheck(this, RatioTileStyler);

        _this3 = _super2.call(this);

        _this3._parseRatio(value);

        return _this3;
      }

      _createClass(RatioTileStyler, [{
        key: "setRowStyles",
        value: function setRowStyles(tile, rowIndex, percentWidth, gutterWidth) {
          var percentHeightPerTile = percentWidth / this.rowHeightRatio;
          this.baseTileHeight = this.getBaseTileSize(percentHeightPerTile, gutterWidth); // Use padding-top and margin-top to maintain the given aspect ratio, as
          // a percentage-based value for these properties is applied versus the *width* of the
          // containing block. See http://www.w3.org/TR/CSS2/box.html#margin-properties

          tile._setStyle('marginTop', this.getTilePosition(this.baseTileHeight, rowIndex));

          tile._setStyle('paddingTop', calc(this.getTileSize(this.baseTileHeight, tile.rowspan)));
        }
      }, {
        key: "getComputedHeight",
        value: function getComputedHeight() {
          return ['paddingBottom', calc("".concat(this.getTileSpan(this.baseTileHeight), " + ").concat(this.getGutterSpan()))];
        }
      }, {
        key: "reset",
        value: function reset(list) {
          list._setListStyle(['paddingBottom', null]);

          list._tiles.forEach(function (tile) {
            tile._setStyle('marginTop', null);

            tile._setStyle('paddingTop', null);
          });
        }
      }, {
        key: "_parseRatio",
        value: function _parseRatio(value) {
          var ratioParts = value.split(':');

          if (ratioParts.length !== 2) {
            throw Error("mat-grid-list: invalid ratio given for row-height: \"".concat(value, "\""));
          }

          this.rowHeightRatio = parseFloat(ratioParts[0]) / parseFloat(ratioParts[1]);
        }
      }]);

      return RatioTileStyler;
    }(TileStyler);
    /**
     * This type of styler is instantiated when the user selects a "fit" row height mode.
     * In other words, the row height will reflect the total height of the container divided
     * by the number of rows.  Example `<mat-grid-list cols="3" rowHeight="fit">`
     *
     * @docs-private
     */


    var FitTileStyler = /*#__PURE__*/function (_TileStyler3) {
      _inherits(FitTileStyler, _TileStyler3);

      var _super3 = _createSuper(FitTileStyler);

      function FitTileStyler() {
        _classCallCheck(this, FitTileStyler);

        return _super3.apply(this, arguments);
      }

      _createClass(FitTileStyler, [{
        key: "setRowStyles",
        value: function setRowStyles(tile, rowIndex) {
          // Percent of the available vertical space that one row takes up.
          var percentHeightPerTile = 100 / this._rowspan; // Fraction of the horizontal gutter size that each column takes up.

          var gutterHeightPerTile = (this._rows - 1) / this._rows; // Base vertical size of a column.

          var baseTileHeight = this.getBaseTileSize(percentHeightPerTile, gutterHeightPerTile);

          tile._setStyle('top', this.getTilePosition(baseTileHeight, rowIndex));

          tile._setStyle('height', calc(this.getTileSize(baseTileHeight, tile.rowspan)));
        }
      }, {
        key: "reset",
        value: function reset(list) {
          if (list._tiles) {
            list._tiles.forEach(function (tile) {
              tile._setStyle('top', null);

              tile._setStyle('height', null);
            });
          }
        }
      }]);

      return FitTileStyler;
    }(TileStyler);
    /** Wraps a CSS string in a calc function */


    function calc(exp) {
      return "calc(".concat(exp, ")");
    }
    /** Appends pixels to a CSS string if no units are given. */


    function normalizeUnits(value) {
      return value.match(/([A-Za-z%]+)$/) ? value : "".concat(value, "px");
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    // TODO(kara): Conditional (responsive) column count / row size.
    // TODO(kara): Re-layout on window resize / media change (debounced).
    // TODO(kara): gridTileHeader and gridTileFooter.


    var MAT_FIT_MODE = 'fit';

    var MatGridList =
    /** @class */
    function () {
      var MatGridList = /*#__PURE__*/function () {
        function MatGridList(_element, _dir) {
          _classCallCheck(this, MatGridList);

          this._element = _element;
          this._dir = _dir;
          /** The amount of space between tiles. This will be something like '5px' or '2em'. */

          this._gutter = '1px';
        }
        /** Amount of columns in the grid list. */


        _createClass(MatGridList, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this._checkCols();

            this._checkRowHeight();
          }
          /**
           * The layout calculation is fairly cheap if nothing changes, so there's little cost
           * to run it frequently.
           */

        }, {
          key: "ngAfterContentChecked",
          value: function ngAfterContentChecked() {
            this._layoutTiles();
          }
          /** Throw a friendly error if cols property is missing */

        }, {
          key: "_checkCols",
          value: function _checkCols() {
            if (!this.cols) {
              throw Error("mat-grid-list: must pass in number of columns. " + "Example: <mat-grid-list cols=\"3\">");
            }
          }
          /** Default to equal width:height if rowHeight property is missing */

        }, {
          key: "_checkRowHeight",
          value: function _checkRowHeight() {
            if (!this._rowHeight) {
              this._setTileStyler('1:1');
            }
          }
          /** Creates correct Tile Styler subtype based on rowHeight passed in by user */

        }, {
          key: "_setTileStyler",
          value: function _setTileStyler(rowHeight) {
            if (this._tileStyler) {
              this._tileStyler.reset(this);
            }

            if (rowHeight === MAT_FIT_MODE) {
              this._tileStyler = new FitTileStyler();
            } else if (rowHeight && rowHeight.indexOf(':') > -1) {
              this._tileStyler = new RatioTileStyler(rowHeight);
            } else {
              this._tileStyler = new FixedTileStyler(rowHeight);
            }
          }
          /** Computes and applies the size and position for all children grid tiles. */

        }, {
          key: "_layoutTiles",
          value: function _layoutTiles() {
            var _this4 = this;

            if (!this._tileCoordinator) {
              this._tileCoordinator = new TileCoordinator();
            }

            var tracker = this._tileCoordinator;

            var tiles = this._tiles.filter(function (tile) {
              return !tile._gridList || tile._gridList === _this4;
            });

            var direction = this._dir ? this._dir.value : 'ltr';

            this._tileCoordinator.update(this.cols, tiles);

            this._tileStyler.init(this.gutterSize, tracker, this.cols, direction);

            tiles.forEach(function (tile, index) {
              var pos = tracker.positions[index];

              _this4._tileStyler.setStyle(tile, pos.row, pos.col);
            });

            this._setListStyle(this._tileStyler.getComputedHeight());
          }
          /** Sets style on the main grid-list element, given the style name and value. */

        }, {
          key: "_setListStyle",
          value: function _setListStyle(style) {
            if (style) {
              this._element.nativeElement.style[style[0]] = style[1];
            }
          }
        }, {
          key: "cols",
          get: function get() {
            return this._cols;
          },
          set: function set(value) {
            this._cols = Math.max(1, Math.round(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value)));
          }
          /** Size of the grid list's gutter in pixels. */

        }, {
          key: "gutterSize",
          get: function get() {
            return this._gutter;
          },
          set: function set(value) {
            this._gutter = "".concat(value == null ? '' : value);
          }
          /** Set internal representation of row height from the user-provided value. */

        }, {
          key: "rowHeight",
          get: function get() {
            return this._rowHeight;
          },
          set: function set(value) {
            var newValue = "".concat(value == null ? '' : value);

            if (newValue !== this._rowHeight) {
              this._rowHeight = newValue;

              this._setTileStyler(this._rowHeight);
            }
          }
        }]);

        return MatGridList;
      }();

      MatGridList.ɵfac = function MatGridList_Factory(t) {
        return new (t || MatGridList)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"], 8));
      };

      MatGridList.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatGridList,
        selectors: [["mat-grid-list"]],
        contentQueries: function MatGridList_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatGridTile, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._tiles = _t);
          }
        },
        hostAttrs: [1, "mat-grid-list"],
        hostVars: 1,
        hostBindings: function MatGridList_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("cols", ctx.cols);
          }
        },
        inputs: {
          cols: "cols",
          gutterSize: "gutterSize",
          rowHeight: "rowHeight"
        },
        exportAs: ["matGridList"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: MAT_GRID_LIST,
          useExisting: MatGridList
        }])],
        ngContentSelectors: _c0,
        decls: 2,
        vars: 0,
        template: function MatGridList_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}\n"],
        encapsulation: 2,
        changeDetection: 0
      });

      MatGridList.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }];
      };

      MatGridList.propDecorators = {
        _tiles: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [MatGridTile, {
            descendants: true
          }]
        }],
        cols: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        gutterSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        rowHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridList, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'mat-grid-list',
            exportAs: 'matGridList',
            template: "<div>\n  <ng-content></ng-content>\n</div>",
            host: {
              'class': 'mat-grid-list',
              // Ensures that the "cols" input value is reflected in the DOM. This is
              // needed for the grid-list harness.
              '[attr.cols]': 'cols'
            },
            providers: [{
              provide: MAT_GRID_LIST,
              useExisting: MatGridList
            }],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }]
          }];
        }, {
          cols: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          gutterSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          rowHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          _tiles: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [MatGridTile, {
              descendants: true
            }]
          }]
        });
      })();

      return MatGridList;
    }();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    var MatGridListModule =
    /** @class */
    function () {
      var MatGridListModule = function MatGridListModule() {
        _classCallCheck(this, MatGridListModule);
      };

      MatGridListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatGridListModule
      });
      MatGridListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MatGridListModule_Factory(t) {
          return new (t || MatGridListModule)();
        },
        imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatGridListModule, {
          declarations: function declarations() {
            return [MatGridList, MatGridTile, MatGridTileText, MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, MatGridAvatarCssMatStyler];
          },
          imports: function imports() {
            return [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]];
          },
          exports: function exports() {
            return [MatGridList, MatGridTile, MatGridTileText, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"], MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, MatGridAvatarCssMatStyler];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridListModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]],
            exports: [MatGridList, MatGridTile, MatGridTileText, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"], MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, MatGridAvatarCssMatStyler],
            declarations: [MatGridList, MatGridTile, MatGridTileText, MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, MatGridAvatarCssMatStyler]
          }]
        }], null, null);
      })();

      return MatGridListModule;
    }();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=grid-list.js.map

    /***/

  },

  /***/
  "./src/app/ingresos/detalle-concesion/detalle-concesion.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/ingresos/detalle-concesion/detalle-concesion.component.ts ***!
    \***************************************************************************/

  /*! exports provided: DetalleConcesionComponent */

  /***/
  function srcAppIngresosDetalleConcesionDetalleConcesionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetalleConcesionComponent", function () {
      return DetalleConcesionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../@vex/animations/stagger.animation */
    "./src/@vex/animations/stagger.animation.ts");
    /* harmony import */


    var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-close */
    "./node_modules/@iconify/icons-ic/twotone-close.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_ingreso_mensuales_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../services/ingreso-mensuales.service */
    "./src/app/services/ingreso-mensuales.service.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");

    function DetalleConcesionComponent_h2_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 115);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.arrdetalleconsecion[0].str_nombre_concesion, " ");
      }
    }

    function DetalleConcesionComponent_th_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ID ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r209 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r209.id, " ");
      }
    }

    function DetalleConcesionComponent_th_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Creado por ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r210 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r210.createdBy, "");
      }
    }

    function DetalleConcesionComponent_th_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Fecha de creaci\xF3n ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r211 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r211.createdDate, "dd/MM/yyyy"), "");
      }
    }

    function DetalleConcesionComponent_th_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \xDAltima modificacion por ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r212 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r212.lastModifiedBy, "");
      }
    }

    function DetalleConcesionComponent_th_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \xDAltima fechade modificaci\xF3n");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r213 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r213.lastModifiedDate, "dd/MM/yyyy"), "");
      }
    }

    function DetalleConcesionComponent_th_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Status ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r214 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r214.bitStatus, "");
      }
    }

    function DetalleConcesionComponent_th_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Placa ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r215 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r215.strPlaca, "");
      }
    }

    function DetalleConcesionComponent_th_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Latitud ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r216 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r216.strLatitud, "");
      }
    }

    function DetalleConcesionComponent_th_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Longitud ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r217 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r217.strLongitud, "");
      }
    }

    function DetalleConcesionComponent_th_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Auto recarga ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r218 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r218.booleanAutoRecarga, "");
      }
    }

    function DetalleConcesionComponent_th_38_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Multa ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_39_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r219 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r219.booleanMulta, "");
      }
    }

    function DetalleConcesionComponent_th_41_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Hora inicio ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_42_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r220 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r220.dtHoraInicio, "h:mm:ss a"), "");
      }
    }

    function DetalleConcesionComponent_th_44_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Fecha insercion descuento ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_45_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r221 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r221.dtmFechaInsercionDescuento, "");
      }
    }

    function DetalleConcesionComponent_th_47_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Fecha descuento ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_48_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r222 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r222.dtmFechaDescuento, "");
      }
    }

    function DetalleConcesionComponent_th_50_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Hora fin ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_51_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r223 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r223.dtmHoraFin, "h:mm:ss a"), "");
      }
    }

    function DetalleConcesionComponent_th_53_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Tiempo comprado ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_54_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r224 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r224.intTiempoComprado, "");
      }
    }

    function DetalleConcesionComponent_th_56_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Tiempo ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_57_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r225 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r225.int_tiempo, "");
      }
    }

    function DetalleConcesionComponent_th_59_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Moneda saldo previo descuento ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_60_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r226 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 1, element_r226.fltMonedaSaldoPrevioDescuento, "CAD", "symbol-narrow"), "");
      }
    }

    function DetalleConcesionComponent_th_62_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Monto ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_63_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r227 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 1, element_r227.fltMonto, "CAD", "symbol-narrow"), "");
      }
    }

    function DetalleConcesionComponent_th_65_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Monto inicial ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_66_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r228 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 1, element_r228.fltMontoInicial, "CAD", "symbol-narrow"), "");
      }
    }

    function DetalleConcesionComponent_th_68_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Porcentaje comisi\xF3n");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_69_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r229 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r229.fltPorcentajeComision, "");
      }
    }

    function DetalleConcesionComponent_th_71_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Monto porcentaje");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_72_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r230 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 1, element_r230.fltMontoPorcentaje, "CAD", "symbol-narrow"), "");
      }
    }

    function DetalleConcesionComponent_th_74_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Total con comisi\xF3n");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_75_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r231 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 1, element_r231.fltTotalConComision, "CAD", "symbol-narrow"), "");
      }
    }

    function DetalleConcesionComponent_th_77_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "concesi\xF3n");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_78_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r232 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r232.strNombreConcesion, "");
      }
    }

    function DetalleConcesionComponent_th_80_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Saldo anterior");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_81_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r233 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 1, element_r233.fltSaldoAnterior, "CAD", "symbol-narrow"), "");
      }
    }

    function DetalleConcesionComponent_th_83_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Tiempo devuelto");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_84_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r234 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r234.intTiempoDevuelto, "");
      }
    }

    function DetalleConcesionComponent_th_86_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Monto devoluci\xF3n");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_87_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r235 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 1, element_r235.fltMontoDevolucion, "CAD", "symbol-narrow"), "");
      }
    }

    function DetalleConcesionComponent_th_89_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Monto porcentaje devoluci\xF3n");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_90_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r236 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 1, element_r236.fltMontoPorcDevolucion, "CAD", "symbol-narrow"), "");
      }
    }

    function DetalleConcesionComponent_th_92_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Total devoluci\xF3n con comisi\xF3n");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_93_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r237 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 1, element_r237.fltTotalDevConComision, "CAD", "symbol-narrow"), "");
      }
    }

    function DetalleConcesionComponent_th_95_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Monto real");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_96_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r238 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 1, element_r238.fltMontoReal, "CAD", "symbol-narrow"), "");
      }
    }

    function DetalleConcesionComponent_th_98_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Saldo previo a descuento");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_99_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r239 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r239.fltSaldoPrevioDescuento, "");
      }
    }

    function DetalleConcesionComponent_th_101_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Valor descuento");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_102_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r240 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r240.fltValorDescuento, "");
      }
    }

    function DetalleConcesionComponent_th_104_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Valor devuelto");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_105_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r241 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r241.fltValorDevuelto, "");
      }
    }

    function DetalleConcesionComponent_th_107_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Valor final descuento");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_108_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r242 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r242.fltValorFinalDescuento, "");
      }
    }

    function DetalleConcesionComponent_th_110_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cambio de descuento");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_111_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r243 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r243.strCambioDescuento, "");
      }
    }

    function DetalleConcesionComponent_th_113_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "C\xF3digo autorizaci\xF3n");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_114_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r244 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r244.strCodigoAutorizacion, "");
      }
    }

    function DetalleConcesionComponent_th_116_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "C\xF3digo transacci\xF3n");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_117_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r245 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r245.strCodigoTransaccion, "");
      }
    }

    function DetalleConcesionComponent_th_119_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Comentarios");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_120_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r246 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r246.strComentarios, "");
      }
    }

    function DetalleConcesionComponent_th_122_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "hash tarjeta");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_123_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r247 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r247.strHashTarjeta, "");
      }
    }

    function DetalleConcesionComponent_th_125_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Instalaci\xF3n");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_126_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r248 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r248.strInstalacion, "");
      }
    }

    function DetalleConcesionComponent_th_128_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Instalaci\xF3n abrv");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_129_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r249 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r249.strInstalacionAbrv, "");
      }
    }

    function DetalleConcesionComponent_th_131_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Moneda valor descuento");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_132_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r250 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r250.strMonedaValorDescuento, "");
      }
    }

    function DetalleConcesionComponent_th_134_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Referencia de operaci\xF3n");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_135_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r251 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r251.strReferenciaOperacion, "");
      }
    }

    function DetalleConcesionComponent_th_137_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "SO");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_138_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r252 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r252.strSo, "");
      }
    }

    function DetalleConcesionComponent_th_140_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Tipo");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_141_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r253 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r253.strTipo, "");
      }
    }

    function DetalleConcesionComponent_th_143_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "App versi\xF3n");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_144_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r254 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r254.strVersionapp, "");
      }
    }

    function DetalleConcesionComponent_th_146_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ID espacio");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_147_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r255 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r255.intIdEspacio, "");
      }
    }

    function DetalleConcesionComponent_th_149_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ID saldo");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_150_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r256 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r256.intIdSaldoId, "");
      }
    }

    function DetalleConcesionComponent_th_152_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ID usuario");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_153_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r257 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r257.intIdUsuarioId, "");
      }
    }

    function DetalleConcesionComponent_th_155_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ID vehiculo");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_156_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r258 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r258.intIdVehiculoId, "");
      }
    }

    function DetalleConcesionComponent_th_158_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Espacios");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_159_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r259 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r259.tbespacios, "");
      }
    }

    function DetalleConcesionComponent_th_161_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Saldo");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_162_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r260 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r260.tbsaldo, "");
      }
    }

    function DetalleConcesionComponent_th_164_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Vehiculos");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_165_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r261 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r261.tbvehiculos, "");
      }
    }

    function DetalleConcesionComponent_th_167_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ID concesi\xF3n");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_168_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r262 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r262.intidconcesionId, "");
      }
    }

    function DetalleConcesionComponent_th_170_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Concesiones");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_171_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r263 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r263.tbconcesiones, "");
      }
    }

    function DetalleConcesionComponent_th_173_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ID multa");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_174_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r264 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r264.intIdMulta, "");
      }
    }

    function DetalleConcesionComponent_th_176_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ins descripci\xF3n");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_177_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r265 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r265.insDescription, "");
      }
    }

    function DetalleConcesionComponent_th_179_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ins descripci\xF3n corta");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_180_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r266 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r266.insShortdesc, "");
      }
    }

    function DetalleConcesionComponent_th_182_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Balance anterior");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_183_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r267 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r267.balanceBefore, "");
      }
    }

    function DetalleConcesionComponent_th_185_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "N\xFAmero de ticket");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_186_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r268 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r268.ticketNumber, "");
      }
    }

    function DetalleConcesionComponent_th_188_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sector");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_189_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r269 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r269.sector, "");
      }
    }

    function DetalleConcesionComponent_th_191_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Tarifa");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_192_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r270 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r270.tariff, "");
      }
    }

    function DetalleConcesionComponent_th_194_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ID de moneda de monto de descuento");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_195_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r271 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r271.discountAmountCurrencyId, "");
      }
    }

    function DetalleConcesionComponent_th_197_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ID de moneda del saldo de descuento");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_198_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r272 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r272.discountBalanceCurrencyId, "");
      }
    }

    function DetalleConcesionComponent_th_200_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Descuento de saldo anterior");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_201_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r273 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r273.discountBalanceBefore, "");
      }
    }

    function DetalleConcesionComponent_th_203_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ID de tipo de cargo de servicio");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_204_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r274 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r274.serviceChargeTypeId, "");
      }
    }

    function DetalleConcesionComponent_th_206_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Tarjeta de referencia");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_207_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r275 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r275.cardReference, "");
      }
    }

    function DetalleConcesionComponent_th_209_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Esquema de tarjeta");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_210_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r276 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r276.cardScheme, "");
      }
    }

    function DetalleConcesionComponent_th_212_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Mascara de n\xFAmero de tarjeta");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_213_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r277 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r277.maskedCardNumber, "");
      }
    }

    function DetalleConcesionComponent_th_215_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Fecha de vencimiento de la tarjeta");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_216_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r278 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r278.cardExpirationDate, "");
      }
    }

    function DetalleConcesionComponent_th_218_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ID externo 1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_219_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r279 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r279.externalId1, "");
      }
    }

    function DetalleConcesionComponent_th_221_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ID externo 2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_222_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r280 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r280.externalId2, "");
      }
    }

    function DetalleConcesionComponent_th_224_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ID externo 3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_225_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r281 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r281.externalId3, "");
      }
    }

    function DetalleConcesionComponent_th_227_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "percVat1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_228_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r282 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r282.percVat1, "");
      }
    }

    function DetalleConcesionComponent_th_230_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "percVat2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_231_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r283 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r283.percVat2, "");
      }
    }

    function DetalleConcesionComponent_th_233_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Vat1 parcial");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_234_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r284 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r284.partialVat1, "");
      }
    }

    function DetalleConcesionComponent_th_236_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Tarifa perc");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_237_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r285 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r285.percFee, "");
      }
    }

    function DetalleConcesionComponent_th_239_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Tarifa perc superada");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_240_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r286 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r286.percFeeTopped, "");
      }
    }

    function DetalleConcesionComponent_th_242_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Tarifa parcial perc");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_243_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r287 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r287.partialPercFee, "");
      }
    }

    function DetalleConcesionComponent_th_245_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cuota fija");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_246_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r288 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r288.fixedFee, "");
      }
    }

    function DetalleConcesionComponent_th_248_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Tarifa fija parcial");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_249_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r289 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r289.partialFixedFee, "");
      }
    }

    function DetalleConcesionComponent_th_251_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cantidad total");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_252_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r290 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r290.totalAmount, "");
      }
    }

    function DetalleConcesionComponent_th_254_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cantidad total");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_255_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r291 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r291.cuspmrPagateliaNewBalance, "");
      }
    }

    function DetalleConcesionComponent_th_257_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "cuspmrTipo");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_258_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r292 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r292.cuspmrType, "");
      }
    }

    function DetalleConcesionComponent_th_260_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Operaci\xF3n de comerciante");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_261_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r293 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r293.shopkeeperOp, "");
      }
    }

    function DetalleConcesionComponent_th_263_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Monto de comerciante");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_264_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r294 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r294.shopkeeperAmount, "");
      }
    }

    function DetalleConcesionComponent_th_266_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Beneficio del comerciante");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_267_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r295 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r295.shopkeeperProfit, "");
      }
    }

    function DetalleConcesionComponent_th_269_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Placa 2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_270_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r296 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r296.plate2, "");
      }
    }

    function DetalleConcesionComponent_th_272_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Placa 3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_273_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r297 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r297.plate3, "");
      }
    }

    function DetalleConcesionComponent_th_275_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Placa 4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_276_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r298 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r298.plate4, "");
      }
    }

    function DetalleConcesionComponent_th_278_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Placa 5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_279_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r299 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r299.plate5, "");
      }
    }

    function DetalleConcesionComponent_th_281_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Placa 6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_282_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r300 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r300.plate6, "");
      }
    }

    function DetalleConcesionComponent_th_284_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Placa 7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_285_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r301 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r301.plate7, "");
      }
    }

    function DetalleConcesionComponent_th_287_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Placa 8");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_288_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r302 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r302.plate8, "");
      }
    }

    function DetalleConcesionComponent_th_290_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Placa 9");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_291_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r303 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r303.plate9, "");
      }
    }

    function DetalleConcesionComponent_th_293_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Placa 10");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_294_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r304 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r304.plate10, "");
      }
    }

    function DetalleConcesionComponent_th_296_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Permitir renovaci\xF3n autom\xE1tica");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_297_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r305 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r305.permitAutoRenew, "");
      }
    }

    function DetalleConcesionComponent_th_299_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Caducidad del permiso");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_300_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r306 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r306.permitExpiration, "");
      }
    }

    function DetalleConcesionComponent_th_302_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Status de la trasacci\xF3n");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_303_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r307 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r307.transStatus, "");
      }
    }

    function DetalleConcesionComponent_th_305_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cantidad devuelta");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_306_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r308 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r308.refundAmount, "");
      }
    }

    function DetalleConcesionComponent_th_308_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Valor sin bonificar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_309_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r309 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r309.valorSinBonificar, "");
      }
    }

    function DetalleConcesionComponent_th_311_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Bonificaci\xF3n");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_312_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r310 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r310.bonificacion, "");
      }
    }

    function DetalleConcesionComponent_th_314_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Tipo vehiculo");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleConcesionComponent_td_315_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r311 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r311.tipoVehiculo, "");
      }
    }

    function DetalleConcesionComponent_tr_316_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 118);
      }
    }

    function DetalleConcesionComponent_tr_317_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 119);
      }
    }

    var DetalleConcesionComponent = /*#__PURE__*/function () {
      function DetalleConcesionComponent(intIdConcesion, dialogRef, fb, cd, ingresosmesualesservices) {
        _classCallCheck(this, DetalleConcesionComponent);

        this.intIdConcesion = intIdConcesion;
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.cd = cd;
        this.ingresosmesualesservices = ingresosmesualesservices;
        this.pageSize = 10;
        this.pageSizeOptions = [10, 20, 30, 50]; // pageEvent: PageEvent;

        this.displayedColumns = ['id', 'createdBy', 'createdDate', 'lastModifiedBy', 'lastModifiedDate', 'bitStatus', 'strPlaca', 'strLatitud', 'strLongitud', 'booleanAutoRecarga', 'booleanMulta', 'dtHoraInicio', 'dtmFechaInsercionDescuento', 'dtmFechaDescuento', 'dtmHoraFin', 'intTiempoComprado', 'int_tiempo', 'fltMonedaSaldoPrevioDescuento', 'fltMonto', 'fltMontoInicial', 'fltPorcentajeComision', 'fltMontoPorcentaje', 'fltTotalConComision', 'strNombreConcesion', 'fltSaldoAnterior', 'intTiempoDevuelto', 'fltMontoDevolucion', 'fltMontoPorcDevolucion', 'fltTotalDevConComision', 'fltMontoReal', 'fltSaldoPrevioDescuento', 'fltValorDescuento', 'fltValorDevuelto', 'fltValorFinalDescuento', 'strCambioDescuento', 'strCodigoAutorizacion', 'strCodigoTransaccion', 'strComentarios', 'strHashTarjeta', 'strInstalacion', 'strInstalacionAbrv', 'strMonedaValorDescuento', 'strReferenciaOperacion', 'strSo', 'strTipo', 'strVersionapp', 'intIdEspacio', 'intIdSaldoId', 'intIdUsuarioId', 'intIdVehiculoId', 'tbespacios', 'tbsaldo', 'tbvehiculos', 'intidconcesionId', 'tbconcesiones', 'intIdMulta', 'insDescription', 'insShortdesc', 'balanceBefore', 'ticketNumber', 'sector', 'tariff', 'discountAmountCurrencyId', 'discountBalanceCurrencyId', 'discountBalanceBefore', 'serviceChargeTypeId', 'cardReference', 'cardScheme', 'maskedCardNumber', 'cardExpirationDate', 'externalId1', 'externalId2', 'externalId3', 'percVat1', 'percVat2', 'partialVat1', 'percFee', 'percFeeTopped', 'partialPercFee', 'fixedFee', 'partialFixedFee', 'totalAmount', 'cuspmrPagateliaNewBalance', 'cuspmrType', 'shopkeeperOp', 'shopkeeperAmount', 'shopkeeperProfit', 'plate2', 'plate3', 'plate4', 'plate5', 'plate6', 'plate7', 'plate8', 'plate9', 'plate10', 'permitAutoRenew', 'permitExpiration', 'transStatus', 'refundAmount', 'valorSinBonificar', 'bonificacion', 'tipoVehiculo'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](DATOS); // arreglos utilizados para guardar los datos

        this.arrdetalleconsecion = []; // iconos

        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_6___default.a;
        this.mtdobtenerfechaseleccionada();
      }

      _createClass(DetalleConcesionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log('Soy el id de la concesion: ' + this.intIdConcesion);
          this.mtdobtenerdetalleingresos();
        } // paginador

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        } // metodo que permite recuperar el detalle de los ingresos por concesion
        // en base al mes, añi y idconcesion

      }, {
        key: "mtdobtenerdetalleingresos",
        value: function mtdobtenerdetalleingresos() {
          var _this5 = this;

          if (this.intIdConcesion) {
            if (!this.datemes && !this.dateanio) {
              this.arrdetalleconsecion = [];
              var myDate = new Date();
              var month = myDate.getMonth() + 1;
              var year = myDate.getFullYear();
              console.log('Fecha no seleccionada ' + this.datemes, this.dateanio);
              this.ingresosmesualesservices.mtdgetdetalleingresoXConsecion(this.intIdConcesion, month, year).then(function (response) {
                console.log(response);
                _this5.arrdetalleconsecion = response.data;
                _this5.dataSource.data = _this5.arrdetalleconsecion;

                _this5.cd.markForCheck();
              });
            } else {
              this.arrdetalleconsecion = [];
              console.log('Fecha seleccionada ' + this.datemes, this.dateanio);
              this.ingresosmesualesservices.mtdgetdetalleingresoXConsecion(this.intIdConcesion, this.datemes, this.dateanio).then(function (response) {
                console.log(response);
                _this5.arrdetalleconsecion = response.data;
                _this5.dataSource.data = _this5.arrdetalleconsecion;

                _this5.cd.markForCheck();
              });
            }
          } else {
            console.log('No existe id conseción');
          }
        } // metodo que recupera el mes y año seleccionado por el usuario

      }, {
        key: "mtdobtenerfechaseleccionada",
        value: function mtdobtenerfechaseleccionada() {
          this.datemes = this.ingresosmesualesservices.getMesSeleccionado();
          this.dateanio = this.ingresosmesualesservices.getAnioSeleccionado();
        }
      }]);

      return DetalleConcesionComponent;
    }();

    DetalleConcesionComponent.ɵfac = function DetalleConcesionComponent_Factory(t) {
      return new (t || DetalleConcesionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ingreso_mensuales_service__WEBPACK_IMPORTED_MODULE_8__["IngresoMensualesService"]));
    };

    DetalleConcesionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DetalleConcesionComponent,
      selectors: [["vex-detalle-concesion"]],
      viewQuery: function DetalleConcesionComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        }
      },
      decls: 319,
      vars: 7,
      consts: [["fxLayout", "row", "fxLayoutAlign", "start center", "mat-dialog-title", ""], ["class", "headline m-0", "fxFlex", "auto", 4, "ngIf"], ["type", "button", "mat-icon-button", "", "mat-dialog-close", "", 1, "text-secondary"], [3, "icIcon"], ["fxLayout", "column", 1, "card", "overflow-auto", 2, "min-height", "fit-content"], [1, "flex", "flex-col", "sm:flex-row", 2, "margin-top", "5px"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "createdBy"], ["matColumnDef", "createdDate"], ["matColumnDef", "lastModifiedBy"], ["matColumnDef", "lastModifiedDate"], ["matColumnDef", "bitStatus"], ["matColumnDef", "strPlaca"], ["matColumnDef", "strLatitud"], ["matColumnDef", "strLongitud"], ["matColumnDef", "booleanAutoRecarga"], ["matColumnDef", "booleanMulta"], ["matColumnDef", "dtHoraInicio"], ["matColumnDef", "dtmFechaInsercionDescuento"], ["matColumnDef", "dtmFechaDescuento"], ["matColumnDef", "dtmHoraFin"], ["matColumnDef", "intTiempoComprado"], ["matColumnDef", "int_tiempo"], ["matColumnDef", "fltMonedaSaldoPrevioDescuento"], ["matColumnDef", "fltMonto"], ["matColumnDef", "fltMontoInicial"], ["matColumnDef", "fltPorcentajeComision"], ["matColumnDef", "fltMontoPorcentaje"], ["matColumnDef", "fltTotalConComision"], ["matColumnDef", "strNombreConcesion"], ["matColumnDef", "fltSaldoAnterior"], ["matColumnDef", "intTiempoDevuelto"], ["matColumnDef", "fltMontoDevolucion"], ["matColumnDef", "fltMontoPorcDevolucion"], ["matColumnDef", "fltTotalDevConComision"], ["matColumnDef", "fltMontoReal"], ["matColumnDef", "fltSaldoPrevioDescuento"], ["matColumnDef", "fltValorDescuento"], ["matColumnDef", "fltValorDevuelto"], ["matColumnDef", "fltValorFinalDescuento"], ["matColumnDef", "strCambioDescuento"], ["matColumnDef", "strCodigoAutorizacion"], ["matColumnDef", "strCodigoTransaccion"], ["matColumnDef", "strComentarios"], ["matColumnDef", "strHashTarjeta"], ["matColumnDef", "strInstalacion"], ["matColumnDef", "strInstalacionAbrv"], ["matColumnDef", "strMonedaValorDescuento"], ["matColumnDef", "strReferenciaOperacion"], ["matColumnDef", "strSo"], ["matColumnDef", "strTipo"], ["matColumnDef", "strVersionapp"], ["matColumnDef", "intIdEspacio"], ["matColumnDef", "intIdSaldoId"], ["matColumnDef", "intIdUsuarioId"], ["matColumnDef", "intIdVehiculoId"], ["matColumnDef", "tbespacios"], ["matColumnDef", "tbsaldo"], ["matColumnDef", "tbvehiculos"], ["matColumnDef", "intidconcesionId"], ["matColumnDef", "tbconcesiones"], ["matColumnDef", "intIdMulta"], ["matColumnDef", "insDescription"], ["matColumnDef", "insShortdesc"], ["matColumnDef", "balanceBefore"], ["matColumnDef", "ticketNumber"], ["matColumnDef", "sector"], ["matColumnDef", "tariff"], ["matColumnDef", "discountAmountCurrencyId"], ["matColumnDef", "discountBalanceCurrencyId"], ["matColumnDef", "discountBalanceBefore"], ["matColumnDef", "serviceChargeTypeId"], ["matColumnDef", "cardReference"], ["matColumnDef", "cardScheme"], ["matColumnDef", "maskedCardNumber"], ["matColumnDef", "cardExpirationDate"], ["matColumnDef", "externalId1"], ["matColumnDef", "externalId2"], ["matColumnDef", "externalId3"], ["matColumnDef", "percVat1"], ["matColumnDef", "percVat2"], ["matColumnDef", "partialVat1"], ["matColumnDef", "percFee"], ["matColumnDef", "percFeeTopped"], ["matColumnDef", "partialPercFee"], ["matColumnDef", "fixedFee"], ["matColumnDef", "partialFixedFee"], ["matColumnDef", "totalAmount"], ["matColumnDef", "cuspmrPagateliaNewBalance"], ["matColumnDef", "cuspmrType"], ["matColumnDef", "shopkeeperOp"], ["matColumnDef", "shopkeeperAmount"], ["matColumnDef", "shopkeeperProfit"], ["matColumnDef", "plate2"], ["matColumnDef", "plate3"], ["matColumnDef", "plate4"], ["matColumnDef", "plate5"], ["matColumnDef", "plate6"], ["matColumnDef", "plate7"], ["matColumnDef", "plate8"], ["matColumnDef", "plate9"], ["matColumnDef", "plate10"], ["matColumnDef", "permitAutoRenew"], ["matColumnDef", "permitExpiration"], ["matColumnDef", "transStatus"], ["matColumnDef", "refundAmount"], ["matColumnDef", "valorSinBonificar"], ["matColumnDef", "bonificacion"], ["matColumnDef", "tipoVehiculo"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "pageSizeOptions", "pageSize"], ["fxFlex", "auto", 1, "headline", "m-0"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]],
      template: function DetalleConcesionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DetalleConcesionComponent_h2_1_Template, 2, 1, "h2", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-icon", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-dialog-content", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DetalleConcesionComponent_th_8_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DetalleConcesionComponent_td_9_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DetalleConcesionComponent_th_11_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DetalleConcesionComponent_td_12_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DetalleConcesionComponent_th_14_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DetalleConcesionComponent_td_15_Template, 3, 4, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](16, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, DetalleConcesionComponent_th_17_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, DetalleConcesionComponent_td_18_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](19, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, DetalleConcesionComponent_th_20_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, DetalleConcesionComponent_td_21_Template, 3, 4, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](22, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, DetalleConcesionComponent_th_23_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, DetalleConcesionComponent_td_24_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](25, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, DetalleConcesionComponent_th_26_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, DetalleConcesionComponent_td_27_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](28, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, DetalleConcesionComponent_th_29_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, DetalleConcesionComponent_td_30_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](31, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, DetalleConcesionComponent_th_32_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, DetalleConcesionComponent_td_33_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](34, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, DetalleConcesionComponent_th_35_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, DetalleConcesionComponent_td_36_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](37, 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, DetalleConcesionComponent_th_38_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, DetalleConcesionComponent_td_39_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](40, 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, DetalleConcesionComponent_th_41_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, DetalleConcesionComponent_td_42_Template, 3, 4, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](43, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, DetalleConcesionComponent_th_44_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, DetalleConcesionComponent_td_45_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](46, 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, DetalleConcesionComponent_th_47_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, DetalleConcesionComponent_td_48_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](49, 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, DetalleConcesionComponent_th_50_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, DetalleConcesionComponent_td_51_Template, 3, 4, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](52, 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, DetalleConcesionComponent_th_53_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, DetalleConcesionComponent_td_54_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](55, 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, DetalleConcesionComponent_th_56_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, DetalleConcesionComponent_td_57_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](58, 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, DetalleConcesionComponent_th_59_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, DetalleConcesionComponent_td_60_Template, 3, 5, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](61, 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, DetalleConcesionComponent_th_62_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, DetalleConcesionComponent_td_63_Template, 3, 5, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](64, 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, DetalleConcesionComponent_th_65_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, DetalleConcesionComponent_td_66_Template, 3, 5, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](67, 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, DetalleConcesionComponent_th_68_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, DetalleConcesionComponent_td_69_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](70, 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, DetalleConcesionComponent_th_71_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, DetalleConcesionComponent_td_72_Template, 3, 5, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](73, 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, DetalleConcesionComponent_th_74_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, DetalleConcesionComponent_td_75_Template, 3, 5, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](76, 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, DetalleConcesionComponent_th_77_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, DetalleConcesionComponent_td_78_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](79, 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, DetalleConcesionComponent_th_80_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, DetalleConcesionComponent_td_81_Template, 3, 5, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](82, 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, DetalleConcesionComponent_th_83_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, DetalleConcesionComponent_td_84_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](85, 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](86, DetalleConcesionComponent_th_86_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](87, DetalleConcesionComponent_td_87_Template, 3, 5, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](88, 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](89, DetalleConcesionComponent_th_89_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](90, DetalleConcesionComponent_td_90_Template, 3, 5, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](91, 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](92, DetalleConcesionComponent_th_92_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](93, DetalleConcesionComponent_td_93_Template, 3, 5, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](94, 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](95, DetalleConcesionComponent_th_95_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](96, DetalleConcesionComponent_td_96_Template, 3, 5, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](97, 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](98, DetalleConcesionComponent_th_98_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](99, DetalleConcesionComponent_td_99_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](100, 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](101, DetalleConcesionComponent_th_101_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](102, DetalleConcesionComponent_td_102_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](103, 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](104, DetalleConcesionComponent_th_104_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](105, DetalleConcesionComponent_td_105_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](106, 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](107, DetalleConcesionComponent_th_107_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](108, DetalleConcesionComponent_td_108_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](109, 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](110, DetalleConcesionComponent_th_110_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](111, DetalleConcesionComponent_td_111_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](112, 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](113, DetalleConcesionComponent_th_113_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](114, DetalleConcesionComponent_td_114_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](115, 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](116, DetalleConcesionComponent_th_116_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](117, DetalleConcesionComponent_td_117_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](118, 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](119, DetalleConcesionComponent_th_119_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](120, DetalleConcesionComponent_td_120_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](121, 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](122, DetalleConcesionComponent_th_122_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](123, DetalleConcesionComponent_td_123_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](124, 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](125, DetalleConcesionComponent_th_125_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](126, DetalleConcesionComponent_td_126_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](127, 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](128, DetalleConcesionComponent_th_128_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](129, DetalleConcesionComponent_td_129_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](130, 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](131, DetalleConcesionComponent_th_131_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](132, DetalleConcesionComponent_td_132_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](133, 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](134, DetalleConcesionComponent_th_134_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](135, DetalleConcesionComponent_td_135_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](136, 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](137, DetalleConcesionComponent_th_137_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](138, DetalleConcesionComponent_td_138_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](139, 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](140, DetalleConcesionComponent_th_140_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](141, DetalleConcesionComponent_td_141_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](142, 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](143, DetalleConcesionComponent_th_143_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](144, DetalleConcesionComponent_td_144_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](145, 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](146, DetalleConcesionComponent_th_146_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](147, DetalleConcesionComponent_td_147_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](148, 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](149, DetalleConcesionComponent_th_149_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](150, DetalleConcesionComponent_td_150_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](151, 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](152, DetalleConcesionComponent_th_152_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](153, DetalleConcesionComponent_td_153_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](154, 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](155, DetalleConcesionComponent_th_155_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](156, DetalleConcesionComponent_td_156_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](157, 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](158, DetalleConcesionComponent_th_158_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](159, DetalleConcesionComponent_td_159_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](160, 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](161, DetalleConcesionComponent_th_161_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](162, DetalleConcesionComponent_td_162_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](163, 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](164, DetalleConcesionComponent_th_164_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](165, DetalleConcesionComponent_td_165_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](166, 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](167, DetalleConcesionComponent_th_167_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](168, DetalleConcesionComponent_td_168_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](169, 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](170, DetalleConcesionComponent_th_170_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](171, DetalleConcesionComponent_td_171_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](172, 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](173, DetalleConcesionComponent_th_173_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](174, DetalleConcesionComponent_td_174_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](175, 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](176, DetalleConcesionComponent_th_176_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](177, DetalleConcesionComponent_td_177_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](178, 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](179, DetalleConcesionComponent_th_179_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](180, DetalleConcesionComponent_td_180_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](181, 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](182, DetalleConcesionComponent_th_182_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](183, DetalleConcesionComponent_td_183_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](184, 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](185, DetalleConcesionComponent_th_185_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](186, DetalleConcesionComponent_td_186_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](187, 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](188, DetalleConcesionComponent_th_188_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](189, DetalleConcesionComponent_td_189_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](190, 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](191, DetalleConcesionComponent_th_191_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](192, DetalleConcesionComponent_td_192_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](193, 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](194, DetalleConcesionComponent_th_194_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](195, DetalleConcesionComponent_td_195_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](196, 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](197, DetalleConcesionComponent_th_197_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](198, DetalleConcesionComponent_td_198_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](199, 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](200, DetalleConcesionComponent_th_200_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](201, DetalleConcesionComponent_td_201_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](202, 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](203, DetalleConcesionComponent_th_203_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](204, DetalleConcesionComponent_td_204_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](205, 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](206, DetalleConcesionComponent_th_206_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](207, DetalleConcesionComponent_td_207_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](208, 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](209, DetalleConcesionComponent_th_209_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](210, DetalleConcesionComponent_td_210_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](211, 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](212, DetalleConcesionComponent_th_212_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](213, DetalleConcesionComponent_td_213_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](214, 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](215, DetalleConcesionComponent_th_215_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](216, DetalleConcesionComponent_td_216_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](217, 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](218, DetalleConcesionComponent_th_218_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](219, DetalleConcesionComponent_td_219_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](220, 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](221, DetalleConcesionComponent_th_221_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](222, DetalleConcesionComponent_td_222_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](223, 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](224, DetalleConcesionComponent_th_224_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](225, DetalleConcesionComponent_td_225_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](226, 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](227, DetalleConcesionComponent_th_227_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](228, DetalleConcesionComponent_td_228_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](229, 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](230, DetalleConcesionComponent_th_230_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](231, DetalleConcesionComponent_td_231_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](232, 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](233, DetalleConcesionComponent_th_233_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](234, DetalleConcesionComponent_td_234_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](235, 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](236, DetalleConcesionComponent_th_236_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](237, DetalleConcesionComponent_td_237_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](238, 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](239, DetalleConcesionComponent_th_239_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](240, DetalleConcesionComponent_td_240_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](241, 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](242, DetalleConcesionComponent_th_242_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](243, DetalleConcesionComponent_td_243_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](244, 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](245, DetalleConcesionComponent_th_245_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](246, DetalleConcesionComponent_td_246_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](247, 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](248, DetalleConcesionComponent_th_248_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](249, DetalleConcesionComponent_td_249_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](250, 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](251, DetalleConcesionComponent_th_251_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](252, DetalleConcesionComponent_td_252_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](253, 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](254, DetalleConcesionComponent_th_254_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](255, DetalleConcesionComponent_td_255_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](256, 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](257, DetalleConcesionComponent_th_257_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](258, DetalleConcesionComponent_td_258_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](259, 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](260, DetalleConcesionComponent_th_260_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](261, DetalleConcesionComponent_td_261_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](262, 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](263, DetalleConcesionComponent_th_263_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](264, DetalleConcesionComponent_td_264_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](265, 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](266, DetalleConcesionComponent_th_266_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](267, DetalleConcesionComponent_td_267_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](268, 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](269, DetalleConcesionComponent_th_269_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](270, DetalleConcesionComponent_td_270_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](271, 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](272, DetalleConcesionComponent_th_272_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](273, DetalleConcesionComponent_td_273_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](274, 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](275, DetalleConcesionComponent_th_275_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](276, DetalleConcesionComponent_td_276_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](277, 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](278, DetalleConcesionComponent_th_278_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](279, DetalleConcesionComponent_td_279_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](280, 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](281, DetalleConcesionComponent_th_281_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](282, DetalleConcesionComponent_td_282_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](283, 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](284, DetalleConcesionComponent_th_284_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](285, DetalleConcesionComponent_td_285_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](286, 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](287, DetalleConcesionComponent_th_287_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](288, DetalleConcesionComponent_td_288_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](289, 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](290, DetalleConcesionComponent_th_290_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](291, DetalleConcesionComponent_td_291_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](292, 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](293, DetalleConcesionComponent_th_293_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](294, DetalleConcesionComponent_td_294_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](295, 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](296, DetalleConcesionComponent_th_296_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](297, DetalleConcesionComponent_td_297_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](298, 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](299, DetalleConcesionComponent_th_299_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](300, DetalleConcesionComponent_td_300_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](301, 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](302, DetalleConcesionComponent_th_302_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](303, DetalleConcesionComponent_td_303_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](304, 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](305, DetalleConcesionComponent_th_305_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](306, DetalleConcesionComponent_td_306_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](307, 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](308, DetalleConcesionComponent_th_308_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](309, DetalleConcesionComponent_td_309_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](310, 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](311, DetalleConcesionComponent_th_311_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](312, DetalleConcesionComponent_td_312_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](313, 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](314, DetalleConcesionComponent_th_314_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](315, DetalleConcesionComponent_td_315_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](316, DetalleConcesionComponent_tr_316_Template, 1, 0, "tr", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](317, DetalleConcesionComponent_tr_317_Template, 1, 0, "tr", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](318, "mat-paginator", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.arrdetalleconsecion.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx.icClose);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](310);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", ctx.pageSizeOptions)("pageSize", ctx.pageSize);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutAlignDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_13__["IconDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultFlexDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["CurrencyPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZ3Jlc29zL2RldGFsbGUtY29uY2VzaW9uL2RldGFsbGUtY29uY2VzaW9uLmNvbXBvbmVudC5zY3NzIn0= */"],
      data: {
        animation: [_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_5__["stagger40ms"]]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetalleConcesionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'vex-detalle-concesion',
          templateUrl: './detalle-concesion.component.html',
          styleUrls: ['./detalle-concesion.component.scss'],
          animations: [_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_5__["stagger40ms"]]
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _services_ingreso_mensuales_service__WEBPACK_IMPORTED_MODULE_8__["IngresoMensualesService"]
        }];
      }, {
        table: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], {
            "static": true
          }]
        }],
        paginator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]]
        }],
        sort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], {
            "static": true
          }]
        }]
      });
    })();

    var DATOS = [];
    /***/
  },

  /***/
  "./src/app/ingresos/detalle-concesion/detalle-concesion.module.ts":
  /*!************************************************************************!*\
    !*** ./src/app/ingresos/detalle-concesion/detalle-concesion.module.ts ***!
    \************************************************************************/

  /*! exports provided: DetalleConcesionModule */

  /***/
  function srcAppIngresosDetalleConcesionDetalleConcesionModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetalleConcesionModule", function () {
      return DetalleConcesionModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _detalle_concesion_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./detalle-concesion.component */
    "./src/app/ingresos/detalle-concesion/detalle-concesion.component.ts");

    var DetalleConcesionModule = function DetalleConcesionModule() {
      _classCallCheck(this, DetalleConcesionModule);
    };

    DetalleConcesionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DetalleConcesionModule
    });
    DetalleConcesionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function DetalleConcesionModule_Factory(t) {
        return new (t || DetalleConcesionModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__["IconModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DetalleConcesionModule, {
        declarations: [_detalle_concesion_component__WEBPACK_IMPORTED_MODULE_17__["DetalleConcesionComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__["IconModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetalleConcesionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_detalle_concesion_component__WEBPACK_IMPORTED_MODULE_17__["DetalleConcesionComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__["IconModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"]],
          entryComponents: [_detalle_concesion_component__WEBPACK_IMPORTED_MODULE_17__["DetalleConcesionComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/ingresos/ingresos-mensuales/ingresos-mensuales-routing.module.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/ingresos/ingresos-mensuales/ingresos-mensuales-routing.module.ts ***!
    \**********************************************************************************/

  /*! exports provided: IngresosMensualesRoutingModule */

  /***/
  function srcAppIngresosIngresosMensualesIngresosMensualesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IngresosMensualesRoutingModule", function () {
      return IngresosMensualesRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ingresos_mensuales_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./ingresos-mensuales.component */
    "./src/app/ingresos/ingresos-mensuales/ingresos-mensuales.component.ts");
    /* harmony import */


    var _pages_auth_login_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../pages/auth/login/auth.guard */
    "./src/app/pages/auth/login/auth.guard.ts"); // const routes: Routes = [];


    var routes = [{
      path: '',
      component: _ingresos_mensuales_component__WEBPACK_IMPORTED_MODULE_2__["IngresosMensualesComponent"],
      canActivate: [_pages_auth_login_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
      data: {
        toolbarShadowEnabled: true,
        //containerEnabled: true,
        scrollDisableb: false
      }
    }];

    var IngresosMensualesRoutingModule = function IngresosMensualesRoutingModule() {
      _classCallCheck(this, IngresosMensualesRoutingModule);
    };

    IngresosMensualesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: IngresosMensualesRoutingModule
    });
    IngresosMensualesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function IngresosMensualesRoutingModule_Factory(t) {
        return new (t || IngresosMensualesRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IngresosMensualesRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IngresosMensualesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/ingresos/ingresos-mensuales/ingresos-mensuales.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/ingresos/ingresos-mensuales/ingresos-mensuales.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: IngresosMensualesComponent */

  /***/
  function srcAppIngresosIngresosMensualesIngresosMensualesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IngresosMensualesComponent", function () {
      return IngresosMensualesComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../@vex/animations/fade-in-right.animation */
    "./src/@vex/animations/fade-in-right.animation.ts");
    /* harmony import */


    var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../@vex/animations/stagger.animation */
    "./src/@vex/animations/stagger.animation.ts");
    /* harmony import */


    var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../@vex/animations/fade-in-up.animation */
    "./src/@vex/animations/fade-in-up.animation.ts");
    /* harmony import */


    var _vex_animations_scale_fade_in_animation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../@vex/animations/scale-fade-in.animation */
    "./src/@vex/animations/scale-fade-in.animation.ts");
    /* harmony import */


    var _vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../@vex/animations/scale-in.animation */
    "./src/@vex/animations/scale-in.animation.ts");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_contacts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-contacts */
    "./node_modules/@iconify/icons-ic/twotone-contacts.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_contacts__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_contacts__WEBPACK_IMPORTED_MODULE_12__);
    /* harmony import */


    var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-search */
    "./node_modules/@iconify/icons-ic/twotone-search.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_13__);
    /* harmony import */


    var _iconify_icons_fa_solid_cloud_download_alt__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @iconify/icons-fa-solid/cloud-download-alt */
    "./node_modules/@iconify/icons-fa-solid/cloud-download-alt.js");
    /* harmony import */


    var _iconify_icons_fa_solid_cloud_download_alt__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_cloud_download_alt__WEBPACK_IMPORTED_MODULE_14__);
    /* harmony import */


    var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ngneat/until-destroy */
    "./node_modules/@ngneat/until-destroy/__ivy_ngcc__/fesm2015/ngneat-until-destroy.js");
    /* harmony import */


    var _detalle_concesion_detalle_concesion_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../detalle-concesion/detalle-concesion.component */
    "./src/app/ingresos/detalle-concesion/detalle-concesion.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _services_ingreso_mensuales_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ../../services/ingreso-mensuales.service */
    "./src/app/services/ingreso-mensuales.service.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ../../../@vex/directives/container/container.directive */
    "./src/@vex/directives/container/container.directive.ts");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _vex_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ../../../@vex/components/page-layout/page-layout-content.directive */
    "./src/@vex/components/page-layout/page-layout-content.directive.ts");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    function IngresosMensualesComponent_mat_option_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var mes_r21 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", mes_r21.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", mes_r21.nombre, " ");
      }
    }

    function IngresosMensualesComponent_mat_option_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var anio_r22 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", anio_r22.anio);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", anio_r22.anio, " ");
      }
    }

    function IngresosMensualesComponent_mat_grid_tile_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-grid-tile", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tile_r23 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](tile_r23.style);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", tile_r23.color);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("colspan", tile_r23.cols)("rowspan", tile_r23.rows);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tile_r23.text);
      }
    }

    function IngresosMensualesComponent_span_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Buscar:");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function IngresosMensualesComponent_th_50_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Conseci\xF3n");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function IngresosMensualesComponent_td_51_Template(rf, ctx) {
      if (rf & 1) {
        var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IngresosMensualesComponent_td_51_Template_td_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26);

          var element_r24 = ctx.$implicit;

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r25.mtdclickDetalleIngreso(element_r24.intIdConcesion);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r24 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r24.nombreConcesion, " ");
      }
    }

    function IngresosMensualesComponent_th_53_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Tiempo vendido ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function IngresosMensualesComponent_td_54_Template(rf, ctx) {
      if (rf & 1) {
        var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IngresosMensualesComponent_td_54_Template_td_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29);

          var element_r27 = ctx.$implicit;

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r28.mtdclickDetalleIngreso(element_r27.intIdConcesion);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r27 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r27.tiempoVendido, " ");
      }
    }

    function IngresosMensualesComponent_th_56_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Monto vendido ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function IngresosMensualesComponent_td_57_Template(rf, ctx) {
      if (rf & 1) {
        var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IngresosMensualesComponent_td_57_Template_td_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32);

          var element_r30 = ctx.$implicit;

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r31.mtdclickDetalleIngreso(element_r30.intIdConcesion);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r30 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](2, 1, element_r30.montoVendido, "CAD", "symbol-narrow"), " ");
      }
    }

    function IngresosMensualesComponent_th_59_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Tiempo devoluci\xF3n ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function IngresosMensualesComponent_td_60_Template(rf, ctx) {
      if (rf & 1) {
        var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IngresosMensualesComponent_td_60_Template_td_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35);

          var element_r33 = ctx.$implicit;

          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r34.mtdclickDetalleIngreso(element_r33.intIdConcesion);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r33 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r33.tiempoDevolucion, " ");
      }
    }

    function IngresosMensualesComponent_th_62_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Monto devoluci\xF3n ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function IngresosMensualesComponent_td_63_Template(rf, ctx) {
      if (rf & 1) {
        var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IngresosMensualesComponent_td_63_Template_td_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r38);

          var element_r36 = ctx.$implicit;

          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r37.mtdclickDetalleIngreso(element_r36.intIdConcesion);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r36 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](2, 1, element_r36.montoDevolucion, "CAD", "symbol-narrow"), " ");
      }
    }

    function IngresosMensualesComponent_th_65_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Total");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function IngresosMensualesComponent_td_66_Template(rf, ctx) {
      if (rf & 1) {
        var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IngresosMensualesComponent_td_66_Template_td_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r41);

          var element_r39 = ctx.$implicit;

          var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r40.mtdclickDetalleIngreso(element_r39.intIdConcesion);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r39 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](2, 1, element_r39.total, "CAD", "symbol-narrow"), " ");
      }
    }

    function IngresosMensualesComponent_tr_67_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 51);
      }
    }

    function IngresosMensualesComponent_tr_68_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 52);
      }
    } // doracion de UntilDestroy


    var IngresosMensualesComponent = /*#__PURE__*/function () {
      function IngresosMensualesComponent(fb, cd, dialog, currencyPipe, ingresosmensualesservices) {
        _classCallCheck(this, IngresosMensualesComponent);

        this.fb = fb;
        this.cd = cd;
        this.dialog = dialog;
        this.currencyPipe = currencyPipe;
        this.ingresosmensualesservices = ingresosmensualesservices; // arrglo para generar la primera parte del grid view con ayuda de la
        // interfaces Tile

        this.tiles = []; // arreglo de meses

        this.arrmeses = [{
          nombre: 'Enero',
          value: 1
        }, {
          nombre: 'Febrero',
          value: 2
        }, {
          nombre: 'Marzo',
          value: 3
        }, {
          nombre: 'Abril',
          value: 4
        }, {
          nombre: 'Mayo',
          value: 5
        }, {
          nombre: 'Junio',
          value: 6
        }, {
          nombre: 'Julio',
          value: 7
        }, {
          nombre: 'Agosto',
          value: 8
        }, {
          nombre: 'Septiembre',
          value: 9
        }, {
          nombre: 'Octubre',
          value: 10
        }, {
          nombre: 'Noviembre',
          value: 11
        }, {
          nombre: 'Diciembre',
          value: 12
        }]; // arreglo del tipo IngresosMensualesModel para
        // guardar la data del ingresosmensualesservice

        this.arringresosmensuales = [];
        this.arrfechasanios = [];
        this.pageSize = 10;
        this.pageSizeOptions = [10, 20, 30, 50];
        this.displayedColumns = ['nombreConcesion', 'tiempoVendido', 'montoVendido', 'tiempoDevolucion', 'montoDevolucion', 'total'];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_11__["SelectionModel"](true, []);
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](DATOS); // iconos

        this.icContacts = _iconify_icons_ic_twotone_contacts__WEBPACK_IMPORTED_MODULE_12___default.a;
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_13___default.a;
        this.icDownload = _iconify_icons_fa_solid_cloud_download_alt__WEBPACK_IMPORTED_MODULE_14___default.a;
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
      }

      _createClass(IngresosMensualesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.mtdobtenerIngresosMensualesxConcesion();
          this.mtdobternerIngresosMensualesResumen();
          this.mtdgenerarAnios();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this6 = this;

          this.mtdpintarfechaSeleccionada();
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort; // Filtro de la tabla

          this.searchCtrl.valueChanges.pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_15__["untilDestroyed"])(this)).subscribe(function (value) {
            return _this6.onFilterChange(value);
          });
        } // mtd de filtrado de la tabla

      }, {
        key: "onFilterChange",
        value: function onFilterChange(value) {
          if (!this.dataSource) {
            return;
          }

          value = value.trim();
          value = value.toLowerCase();
          this.dataSource.filter = value;
        } // metodo que permite pintar la fecha en el titulo del grib

      }, {
        key: "mtdpintarfechaSeleccionada",
        value: function mtdpintarfechaSeleccionada() {
          var _this7 = this;

          this.datefecha = new Date();
          this.mesSelected = this.datefecha.getMonth() + 1;
          this.anioSelected = this.datefecha.getFullYear(); // this.mtdobtenerNombreMeses(this.mesSelected);

          var nombreMes = this.arrmeses.filter(function (arrmeses) {
            return arrmeses.value == _this7.mesSelected;
          }); // console.log('mes actualizado', nombreMes);

          this.mesSelected = nombreMes[0].nombre;
        } // Metodo que utiliza el evento click para recuperar los datos
        // del grib y table

      }, {
        key: "mtdclickobtenerIngresosMensualesFecha",
        value: function mtdclickobtenerIngresosMensualesFecha(mes, anio) {
          if (mes === '' && anio === '') {
            return;
          }

          if (mes === '' || anio === '') {
            return;
          }

          console.log('Mes2: ' + mes, 'Año2: ' + anio);
          this.mtdobternerIngresosMensualesResumenParam(mes, anio);
          this.mtdobtenerIngresosMensualesxConcesionParam(mes, anio);
          this.ingresosmensualesservices.setMesSeleccionado(mes);
          this.ingresosmensualesservices.setAnioSeleccionado(anio);
          var nombreMes = this.arrmeses.filter(function (arrmeses) {
            return arrmeses.value == mes;
          }); // console.log('mes actualizado', nombreMes);

          this.mesSelected = nombreMes[0].nombre;
          this.anioSelected = anio;
          this.cd.markForCheck();
        }
      }, {
        key: "mtdclickDetalleIngreso",
        value: function mtdclickDetalleIngreso(intIdConcesion) {
          this.dialog.open(_detalle_concesion_detalle_concesion_component__WEBPACK_IMPORTED_MODULE_16__["DetalleConcesionComponent"], {
            height: 'auto',
            data: intIdConcesion
          });
        } // Metodo que permite recuperar los ingresos mensuales
        // y llena la segunda parte del grid a partir de la
        // fecha ingresa por el usuario

      }, {
        key: "mtdobternerIngresosMensualesResumenParam",
        value: function mtdobternerIngresosMensualesResumenParam(mes, anio) {
          var _this8 = this;

          this.tiles = [];
          this.ingresosmensualesservices.mtdgetingresosMensualesResumenPara(mes, anio).then(function (response) {
            console.log('Data filtrada', response);

            _this8.tiles.push({
              text: 'ParkiFácil',
              cols: 1,
              rows: 3,
              color: '#FFFFFF',
              style: 'font-weight: bold;'
            }, {
              text: 'Saldo de usuario mes anterior',
              cols: 1,
              rows: 2,
              color: '#C1C0BF',
              style: 'font-weight: bold;'
            }, {
              text: 'Recarga de saldo del mes',
              cols: 3,
              rows: 1,
              color: '#C1C0BF',
              style: 'font-weight: bold;'
            }, {
              text: 'Saldo usuario del mes',
              cols: 1,
              rows: 2,
              color: '#C1C0BF',
              style: 'font-weight: bold;'
            }, {
              text: 'Compra de recargas del mes',
              cols: 3,
              rows: 1,
              color: '#C1C0BF',
              style: 'font-weight: bold;'
            }, {
              text: 'Saldo final usuarios',
              cols: 1,
              rows: 2,
              color: '#C1C0BF',
              style: 'font-weight: bold;'
            }, {
              text: 'Ingreso por comisiones',
              cols: 1,
              rows: 2,
              color: '#C1C0BF',
              style: 'font-weight: bold;'
            }, {
              text: 'Recarga usuario',
              cols: 1,
              rows: 1,
              color: '#C1C0BF',
              style: 'font-weight: bold;'
            }, {
              text: 'Comisión recarga',
              cols: 1,
              rows: 1,
              color: '#C1C0BF',
              style: 'font-weight: bold;'
            }, {
              text: 'Total cobrado',
              cols: 1,
              rows: 1,
              color: '#C1C0BF',
              style: 'font-weight: bold;'
            }, {
              text: 'Venta concesión',
              cols: 1,
              rows: 1,
              color: '#C1C0BF',
              style: 'font-weight: bold;'
            }, {
              text: 'Comisión',
              cols: 1,
              rows: 1,
              color: '#C1C0BF',
              style: 'font-weight: bold;'
            }, {
              text: 'Total cobrado',
              cols: 1,
              rows: 1,
              color: '#C1C0BF',
              style: 'font-weight: bold;'
            }, {
              text: _this8.currencyPipe.transform(response['data']['saldoUsuarioMesAnterior'], 'CAD', 'symbol-narrow'),
              cols: 1,
              rows: 1,
              color: '#FFFFFF',
              style: 'font-weight: normal;'
            }, {
              text: _this8.currencyPipe.transform(response['data']['recargaUsuario'], 'CAD', 'symbol-narrow'),
              cols: 1,
              rows: 1,
              color: '#FFFFFF',
              style: 'font-weight: normal;'
            }, {
              text: _this8.currencyPipe.transform(response['data']['comisionRecarga'], 'CAD', 'symbol-narrow'),
              cols: 1,
              rows: 1,
              color: '#C6E0B4',
              style: 'font-weight: normal;'
            }, {
              text: _this8.currencyPipe.transform(response['data']['totalCobradoRecarga'], 'CAD', 'symbol-narrow'),
              cols: 1,
              rows: 1,
              color: '#BDD7EE',
              style: 'font-weight: bold;'
            }, {
              text: _this8.currencyPipe.transform(response['data']['saldoUsuarioMes'], 'CAD', 'symbol-narrow'),
              cols: 1,
              rows: 1,
              color: '#FFFFFF',
              style: 'font-weight: normal;'
            }, {
              text: _this8.currencyPipe.transform(response['data']['ventaConcesion'], 'CAD', 'symbol-narrow'),
              cols: 1,
              rows: 1,
              color: '#F8CBAD',
              style: 'font-weight: normal;'
            }, {
              text: _this8.currencyPipe.transform(response['data']['comision'], 'CAD', 'symbol-narrow'),
              cols: 1,
              rows: 1,
              color: '#C6E0B4',
              style: 'font-weight: normal;'
            }, {
              text: _this8.currencyPipe.transform(response['data']['totalCobradoCompra'], 'CAD', 'symbol-narrow'),
              cols: 1,
              rows: 1,
              color: '#BDD7EE',
              style: 'font-weight: bold;'
            }, {
              text: _this8.currencyPipe.transform(response['data']['saldoFinalUsuaios'], 'CAD', 'symbol-narrow'),
              cols: 1,
              rows: 1,
              color: '#2F75B5',
              style: 'font-weight: bold; color:white;'
            }, {
              text: _this8.currencyPipe.transform(response['data']['ingresoXComisiones'], 'CAD', 'symbol-narrow'),
              cols: 1,
              rows: 1,
              color: '#548235',
              style: 'font-weight: bold; color:white;'
            });

            _this8.cd.markForCheck();
          });
          this.mtdobtenerIngresosMensualesxConcesionParam(mes, anio);
        } // Metodo que permite recuperar los ingresos mensuales
        // por concesión y llena el mat-table en base a la fecha
        // ingresada por el usuario

      }, {
        key: "mtdobtenerIngresosMensualesxConcesionParam",
        value: function mtdobtenerIngresosMensualesxConcesionParam(mes, anio) {
          var _this9 = this;

          this.arringresosmensuales = [];
          this.ingresosmensualesservices.mtdgetingresosMensualesxConsecionPara(mes, anio).subscribe(function (response) {
            _this9.arringresosmensuales = response.data;
            _this9.dataSource.data = _this9.arringresosmensuales;

            _this9.cd.markForCheck();
          });
        } // Metodo que permite recuperar los ingresos mensuales
        // por concesión y llena el mat-table

      }, {
        key: "mtdobtenerIngresosMensualesxConcesion",
        value: function mtdobtenerIngresosMensualesxConcesion() {
          var _this10 = this;

          var myDate = new Date();
          var month = myDate.getMonth() + 1;
          var year = myDate.getFullYear();
          console.log('Mes: ' + month, 'Año: ' + year);
          this.ingresosmensualesservices.mtdgetingresosMensualesxConsecion(month, year).then(function (response) {
            console.log('ingresos ', response);
            _this10.arringresosmensuales = response.data; // this.arringresosmensuales.sort((a, b) => b.montoVendido - a.montoVendido);

            _this10.dataSource.data = _this10.arringresosmensuales;
          });
        } // Metodo que permite recuperar los ingresos mensuales
        // y llena la segunda parte del grid

      }, {
        key: "mtdobternerIngresosMensualesResumen",
        value: function mtdobternerIngresosMensualesResumen() {
          var _this11 = this;

          var myDate = new Date();
          var month = myDate.getMonth() + 1;
          var year = myDate.getFullYear();
          console.log('Mes: ' + month, 'Año: ' + year);
          this.ingresosmensualesservices.mtdgetingresosMensualesResumen(month, year).then(function (response) {
            console.log(response);

            _this11.tiles.push({
              text: 'ParkiFácil',
              cols: 1,
              rows: 3,
              color: '#FFFFFF',
              style: 'font-weight: bold;'
            }, {
              text: 'Saldo de usuario mes anterior',
              cols: 1,
              rows: 2,
              color: '#C1C0BF',
              style: 'font-weight: bold;'
            }, {
              text: 'Recarga de saldo del mes',
              cols: 3,
              rows: 1,
              color: '#C1C0BF',
              style: 'font-weight: bold;'
            }, {
              text: 'Saldo usuario del mes',
              cols: 1,
              rows: 2,
              color: '#C1C0BF',
              style: 'font-weight: bold;'
            }, {
              text: 'Compra de recargas del mes',
              cols: 3,
              rows: 1,
              color: '#C1C0BF',
              style: 'font-weight: bold;'
            }, {
              text: 'Saldo final usuarios',
              cols: 1,
              rows: 2,
              color: '#C1C0BF',
              style: 'font-weight: bold;'
            }, {
              text: 'Ingreso por comisiones',
              cols: 1,
              rows: 2,
              color: '#C1C0BF',
              style: 'font-weight: bold;'
            }, {
              text: 'Recarga usuario',
              cols: 1,
              rows: 1,
              color: '#C1C0BF',
              style: 'font-weight: bold;'
            }, {
              text: 'Comisión recarga',
              cols: 1,
              rows: 1,
              color: '#C1C0BF',
              style: 'font-weight: bold;'
            }, {
              text: 'Total cobrado',
              cols: 1,
              rows: 1,
              color: '#C1C0BF',
              style: 'font-weight: bold;'
            }, {
              text: 'Venta concesión',
              cols: 1,
              rows: 1,
              color: '#C1C0BF',
              style: 'font-weight: bold;'
            }, {
              text: 'Comisión',
              cols: 1,
              rows: 1,
              color: '#C1C0BF',
              style: 'font-weight: bold;'
            }, {
              text: 'Total cobrado',
              cols: 1,
              rows: 1,
              color: '#C1C0BF',
              style: 'font-weight: bold;'
            }, {
              text: _this11.currencyPipe.transform(response['data']['saldoUsuarioMesAnterior'], 'CAD', 'symbol-narrow'),
              cols: 1,
              rows: 1,
              color: '#FFFFFF',
              style: 'font-weight: normal;'
            }, {
              text: _this11.currencyPipe.transform(response['data']['recargaUsuario'], 'CAD', 'symbol-narrow'),
              cols: 1,
              rows: 1,
              color: '#FFFFFF',
              style: 'font-weight: normal;'
            }, {
              text: _this11.currencyPipe.transform(response['data']['comisionRecarga'], 'CAD', 'symbol-narrow'),
              cols: 1,
              rows: 1,
              color: '#C6E0B4',
              style: 'font-weight: normal;'
            }, {
              text: _this11.currencyPipe.transform(response['data']['totalCobradoRecarga'], 'CAD', 'symbol-narrow'),
              cols: 1,
              rows: 1,
              color: '#BDD7EE',
              style: 'font-weight: bold;'
            }, {
              text: _this11.currencyPipe.transform(response['data']['saldoUsuarioMes'], 'CAD', 'symbol-narrow'),
              cols: 1,
              rows: 1,
              color: '#FFFFFF',
              style: 'font-weight: normal;'
            }, {
              text: _this11.currencyPipe.transform(response['data']['ventaConcesion'], 'CAD', 'symbol-narrow'),
              cols: 1,
              rows: 1,
              color: '#F8CBAD',
              style: 'font-weight: normal;'
            }, {
              text: _this11.currencyPipe.transform(response['data']['comision'], 'MXN', 'symbol-narrow'),
              cols: 1,
              rows: 1,
              color: '#C6E0B4',
              style: 'font-weight: normal;'
            }, {
              text: _this11.currencyPipe.transform(response['data']['totalCobradoCompra'], 'CAD', 'symbol-narrow'),
              cols: 1,
              rows: 1,
              color: '#BDD7EE',
              style: 'font-weight: bold;'
            }, {
              text: _this11.currencyPipe.transform(response['data']['saldoFinalUsuaios'], 'CAD', 'symbol-narrow'),
              cols: 1,
              rows: 1,
              color: '#2F75B5',
              style: 'font-weight: bold; color:white;'
            }, {
              text: _this11.currencyPipe.transform(response['data']['ingresoXComisiones'], 'CAD', 'symbol-narrow'),
              cols: 1,
              rows: 1,
              color: '#548235',
              style: 'font-weight: bold; color:white;'
            });

            _this11.cd.markForCheck();
          });
        } // metodo que genera los años para llenar el select de años

      }, {
        key: "mtdgenerarAnios",
        value: function mtdgenerarAnios() {
          var myDate = new Date();
          var year = myDate.getFullYear();

          for (var index = 2020; index < year + 1; index++) {
            this.arrfechasanios.push({
              anio: index
            });
          }

          console.log(this.arrfechasanios);
        } // metodo que permite encontrar el nombre del mes apartir de 
        // su numero

      }, {
        key: "mtdobtenerNombreMeses",
        value: function mtdobtenerNombreMeses(mes) {
          if (mes === 1) {
            this.mesSelected = 'Enero';
          }

          if (mes === 2) {
            this.mesSelected = 'Febrero';
          }

          if (mes === 3) {
            this.mesSelected = 'Marzo';
          }

          if (mes === 4) {
            this.mesSelected = 'Abril';
          }

          if (mes === 5) {
            this.mesSelected = 'Mayo';
          }

          if (mes === 6) {
            this.mesSelected = 'Junio';
          }

          if (mes === 7) {
            this.mesSelected = 'Julio';
          }

          if (mes === 8) {
            this.mesSelected = 'Agosto';
          }

          if (mes === 9) {
            this.mesSelected = 'Septiembre';
          }

          if (mes === 10) {
            this.mesSelected = 'Octubre';
          }

          if (mes === 11) {
            this.mesSelected = 'Noviembre';
          }

          if (mes === 12) {
            this.mesSelected = 'Diciembre';
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }]);

      return IngresosMensualesComponent;
    }();

    IngresosMensualesComponent.ɵfac = function IngresosMensualesComponent_Factory(t) {
      return new (t || IngresosMensualesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_18__["CurrencyPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_ingreso_mensuales_service__WEBPACK_IMPORTED_MODULE_19__["IngresoMensualesService"]));
    };

    IngresosMensualesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: IngresosMensualesComponent,
      selectors: [["vex-ingresos-mensuales"]],
      viewQuery: function IngresosMensualesComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTable"], true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__["MatPaginator"], true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSort"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        }
      },
      decls: 70,
      vars: 17,
      consts: [["fxLayout", "column", 1, "h-full"], ["fxFlex", "none", 1, "p-6", "pb-0", "bg-card", "shadow-b"], ["vexContainer", ""], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "display-1", "mt-0", "mb-4"], [1, "w-12", "h-12", "rounded-full", "text-primary", "ltr:mr-4", "rtl:ml-4", "flex", "items-center", "justify-center", "bg-primary-light"], ["size", "24px", 3, "icon"], [1, "block"], ["fxFlex", "none", 1, "mt-4", "p-6", "pb-0", "bg-card", "shadow-b"], [1, "flex", "flex-col"], [1, "mt-5", "sm:ml-3", "flex-auto"], ["for", "anio"], ["name", "mes", "matSelect", "", "required", ""], ["mes", ""], [3, "value", 4, "ngFor", "ngForOf"], ["name", "anio", "matSelect", "", "required", ""], ["anio", ""], ["color", "primary", "mat-button", "", "type", "button", 3, "click"], ["vexContainer", "", 1, "mt-10"], [2, "text-align", "center"], [1, "mb-2"], ["cols", "11", "rowHeight", "50px"], [3, "colspan", "rowspan", "background", "style", 4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "bg-app-bar", "px-6", "h-16", "border-b", "sticky", "left-0"], ["fxFlex", "auto", "fxHide.xs", "", 1, "title", "my-0", "ltr:pr-4", "rtl:pl-4", "ltr:mr-4", "rtl:ml-4", "ltr:border-r", "rtl:border-l"], [4, "ngIf"], ["fxFlex", "800px", "fxFlex.lt-md", "auto", "fxHide.xs", "", "fxLayout", "row", 1, "bg-card", "rounded-full", "border", "px-4"], ["size", "40px", 3, "icIcon"], ["placeholder", "Buscar...", "type", "search", 1, "px-4", "py-3", "border-0", "outline-none", "w-full", "bg-transparent", 3, "formControl"], ["fxFlex", ""], ["fxFlex", "none", "fxHide.gt-xs", "", "mat-icon-button", "", "type", "button", 1, "ml-4"], [3, "icIcon"], [1, "card", "overflow-auto"], [1, "mt-3", "mb-3", "ml-2"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", "tbResumen", 3, "dataSource"], ["table", ""], ["matColumnDef", "nombreConcesion"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "click", 4, "matCellDef"], ["matColumnDef", "tiempoVendido"], ["matColumnDef", "montoVendido"], ["matColumnDef", "tiempoDevolucion"], ["matColumnDef", "montoDevolucion"], ["matColumnDef", "total"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "sticky", "left-0", 3, "pageSizeOptions", "pageSize"], [3, "value"], [3, "colspan", "rowspan"], [1, "text-inside-grid"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]],
      template: function IngresosMensualesComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "ic-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Ingresos Mensuales");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Selecciona una fecha");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-form-field", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Selecciona mes");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-select", 11, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, IngresosMensualesComponent_mat_option_18_Template, 2, 2, "mat-option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-form-field", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Selecciona a\xF1o");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-select", 14, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, IngresosMensualesComponent_mat_option_24_Template, 2, 2, "mat-option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IngresosMensualesComponent_Template_button_click_25_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](17);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](23);

            return ctx.mtdclickobtenerIngresosMensualesFecha(_r0.value, _r2.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " ACEPTAR ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "h2", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "mat-grid-list", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, IngresosMensualesComponent_mat_grid_tile_32_Template, 3, 7, "mat-grid-tile", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "h2", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, IngresosMensualesComponent_span_36_Template, 2, 0, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "ic-icon", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "mat-icon", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "vex-page-layout-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "h2", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Resumen de concesiones");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "table", 33, 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](49, 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, IngresosMensualesComponent_th_50_Template, 2, 0, "th", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, IngresosMensualesComponent_td_51_Template, 2, 1, "td", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](52, 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](53, IngresosMensualesComponent_th_53_Template, 2, 0, "th", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, IngresosMensualesComponent_td_54_Template, 2, 1, "td", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](55, 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, IngresosMensualesComponent_th_56_Template, 2, 0, "th", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](57, IngresosMensualesComponent_td_57_Template, 3, 5, "td", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](58, 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](59, IngresosMensualesComponent_th_59_Template, 2, 0, "th", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](60, IngresosMensualesComponent_td_60_Template, 2, 1, "td", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](61, 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](62, IngresosMensualesComponent_th_62_Template, 2, 0, "th", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](63, IngresosMensualesComponent_td_63_Template, 3, 5, "td", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](64, 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](65, IngresosMensualesComponent_th_65_Template, 2, 0, "th", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](66, IngresosMensualesComponent_td_66_Template, 3, 5, "td", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](67, IngresosMensualesComponent_tr_67_Template, 1, 0, "tr", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](68, IngresosMensualesComponent_tr_68_Template, 1, 0, "tr", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "mat-paginator", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@scaleIn", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.icContacts);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInRight", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.arrmeses);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.arrfechasanios);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" Ingresos mensuales - Mes: ", ctx.mesSelected, " A\xF1o: ", ctx.anioSelected, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.tiles);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selection.isEmpty());

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icIcon", ctx.icSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.searchCtrl);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icIcon", ctx.icSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageSizeOptions", ctx.pageSizeOptions)("pageSize", ctx.pageSize);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultFlexDirective"], _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_21__["ContainerDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultLayoutAlignDirective"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_22__["IconDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_25__["MatButton"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__["MatGridList"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_27__["DefaultShowHideDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__["MatIcon"], _vex_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_29__["PageLayoutContentDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__["MatPaginator"], _angular_material_core__WEBPACK_IMPORTED_MODULE_30__["MatOption"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__["MatGridTile"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatRow"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_18__["CurrencyPipe"]],
      styles: ["mat-grid-tile[_ngcontent-%COMP%] {\n  background: lightblue;\n}\n\n.text-inside-grid[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.mat-grid-tile[_ngcontent-%COMP%] {\n  border: solid 1px #000;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.tbResumen[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5ncmVzb3MvaW5ncmVzb3MtbWVuc3VhbGVzL2luZ3Jlc29zLW1lbnN1YWxlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2luZ3Jlc29zL2luZ3Jlc29zLW1lbnN1YWxlcy9pbmdyZXNvcy1tZW5zdWFsZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZ3JpZC10aWxlIHtcbiAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xufVxuXG4udGV4dC1pbnNpZGUtZ3JpZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1hdC1ncmlkLXRpbGUge1xuICBib3JkZXI6IHNvbGlkIDFweCAjMDAwO1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGJSZXN1bWVuIHRkIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"],
      data: {
        animation: [_vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_7__["scaleIn400ms"], _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_3__["fadeInRight400ms"], _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_4__["stagger40ms"], _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_5__["fadeInUp400ms"], _vex_animations_scale_fade_in_animation__WEBPACK_IMPORTED_MODULE_6__["scaleFadeIn400ms"]]
      },
      changeDetection: 0
    });
    IngresosMensualesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_15__["UntilDestroy"])()], IngresosMensualesComponent);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IngresosMensualesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'vex-ingresos-mensuales',
          templateUrl: './ingresos-mensuales.component.html',
          styleUrls: ['./ingresos-mensuales.component.scss'],
          animations: [_vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_7__["scaleIn400ms"], _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_3__["fadeInRight400ms"], _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_4__["stagger40ms"], _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_5__["fadeInUp400ms"], _vex_animations_scale_fade_in_animation__WEBPACK_IMPORTED_MODULE_6__["scaleFadeIn400ms"]],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialog"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_18__["CurrencyPipe"]
        }, {
          type: _services_ingreso_mensuales_service__WEBPACK_IMPORTED_MODULE_19__["IngresoMensualesService"]
        }];
      }, {
        table: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTable"], {
            "static": true
          }]
        }],
        paginator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__["MatPaginator"], {
            "static": true
          }]
        }],
        sort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSort"], {
            "static": true
          }]
        }]
      });
    })();

    var DATOS = [];
    /***/
  },

  /***/
  "./src/app/ingresos/ingresos-mensuales/ingresos-mensuales.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/ingresos/ingresos-mensuales/ingresos-mensuales.module.ts ***!
    \**************************************************************************/

  /*! exports provided: IngresosMensualesModule */

  /***/
  function srcAppIngresosIngresosMensualesIngresosMensualesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IngresosMensualesModule", function () {
      return IngresosMensualesModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ingresos_mensuales_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./ingresos-mensuales-routing.module */
    "./src/app/ingresos/ingresos-mensuales/ingresos-mensuales-routing.module.ts");
    /* harmony import */


    var _ingresos_mensuales_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ingresos-mensuales.component */
    "./src/app/ingresos/ingresos-mensuales/ingresos-mensuales.component.ts");
    /* harmony import */


    var _detalle_concesion_detalle_concesion_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../detalle-concesion/detalle-concesion.module */
    "./src/app/ingresos/detalle-concesion/detalle-concesion.module.ts");
    /* harmony import */


    var _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../@vex/components/page-layout/page-layout.module */
    "./src/@vex/components/page-layout/page-layout.module.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../@vex/components/breadcrumbs/breadcrumbs.module */
    "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../../@vex/directives/container/container.module */
    "./src/@vex/directives/container/container.module.ts");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _vex_pipes_color_color_fade_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ../../../@vex/pipes/color/color-fade.module */
    "./src/@vex/pipes/color/color-fade.module.ts");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
    /* harmony import */


    var _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ../../../@vex/components/secondary-toolbar/secondary-toolbar.module */
    "./src/@vex/components/secondary-toolbar/secondary-toolbar.module.ts");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");

    var IngresosMensualesModule = function IngresosMensualesModule() {
      _classCallCheck(this, IngresosMensualesModule);
    };

    IngresosMensualesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: IngresosMensualesModule
    });
    IngresosMensualesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function IngresosMensualesModule_Factory(t) {
        return new (t || IngresosMensualesModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ingresos_mensuales_routing_module__WEBPACK_IMPORTED_MODULE_2__["IngresosMensualesRoutingModule"], _detalle_concesion_detalle_concesion_module__WEBPACK_IMPORTED_MODULE_4__["DetalleConcesionModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__["MatSortModule"], _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_5__["PageLayoutModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_7__["BreadcrumbsModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_14__["IconModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"], _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_17__["ContainerModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"], _vex_pipes_color_color_fade_module__WEBPACK_IMPORTED_MODULE_19__["ColorFadeModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_20__["MatButtonToggleModule"], _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_21__["SecondaryToolbarModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__["MatDatepickerModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInputModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_24__["MatAutocompleteModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_25__["MatSnackBarModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_26__["MatStepperModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_28__["MatTabsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__["MatDialogModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_30__["MatGridListModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_32__["MatDividerModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IngresosMensualesModule, {
        declarations: [_ingresos_mensuales_component__WEBPACK_IMPORTED_MODULE_3__["IngresosMensualesComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ingresos_mensuales_routing_module__WEBPACK_IMPORTED_MODULE_2__["IngresosMensualesRoutingModule"], _detalle_concesion_detalle_concesion_module__WEBPACK_IMPORTED_MODULE_4__["DetalleConcesionModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__["MatSortModule"], _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_5__["PageLayoutModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_7__["BreadcrumbsModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_14__["IconModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"], _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_17__["ContainerModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"], _vex_pipes_color_color_fade_module__WEBPACK_IMPORTED_MODULE_19__["ColorFadeModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_20__["MatButtonToggleModule"], _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_21__["SecondaryToolbarModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__["MatDatepickerModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInputModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_24__["MatAutocompleteModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_25__["MatSnackBarModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_26__["MatStepperModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_28__["MatTabsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__["MatDialogModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_30__["MatGridListModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_32__["MatDividerModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IngresosMensualesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_ingresos_mensuales_component__WEBPACK_IMPORTED_MODULE_3__["IngresosMensualesComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ingresos_mensuales_routing_module__WEBPACK_IMPORTED_MODULE_2__["IngresosMensualesRoutingModule"], _detalle_concesion_detalle_concesion_module__WEBPACK_IMPORTED_MODULE_4__["DetalleConcesionModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__["MatSortModule"], _vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_5__["PageLayoutModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], _vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_7__["BreadcrumbsModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_14__["IconModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"], _vex_directives_container_container_module__WEBPACK_IMPORTED_MODULE_17__["ContainerModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"], _vex_pipes_color_color_fade_module__WEBPACK_IMPORTED_MODULE_19__["ColorFadeModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_20__["MatButtonToggleModule"], _vex_components_secondary_toolbar_secondary_toolbar_module__WEBPACK_IMPORTED_MODULE_21__["SecondaryToolbarModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__["MatDatepickerModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInputModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_24__["MatAutocompleteModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_25__["MatSnackBarModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_26__["MatStepperModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_28__["MatTabsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__["MatDialogModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_30__["MatGridListModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_32__["MatDividerModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=ingresos-ingresos-mensuales-ingresos-mensuales-module-es5.js.map