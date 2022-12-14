function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ingresos-ingresos-usuarios-ingresos-usuarios-routing-module"], {
  /***/
  "./src/@vex/animations/fade-in-right.animation.ts":
  /*!********************************************************!*\
    !*** ./src/@vex/animations/fade-in-right.animation.ts ***!
    \********************************************************/

  /*! exports provided: fadeInRightAnimation, fadeInRight400ms */

  /***/
  function srcVexAnimationsFadeInRightAnimationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fadeInRightAnimation", function () {
      return fadeInRightAnimation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fadeInRight400ms", function () {
      return fadeInRight400ms;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    function fadeInRightAnimation(duration) {
      return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeInRight', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'translateX(-20px)',
        opacity: 0
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("".concat(duration, "ms cubic-bezier(0.35, 0, 0.25, 1)"), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'translateX(0)',
        opacity: 1
      }))])]);
    }

    var fadeInRight400ms = fadeInRightAnimation(400);
    /***/
  },

  /***/
  "./src/@vex/animations/fade-in-up.animation.ts":
  /*!*****************************************************!*\
    !*** ./src/@vex/animations/fade-in-up.animation.ts ***!
    \*****************************************************/

  /*! exports provided: fadeInUpAnimation, fadeInUp400ms */

  /***/
  function srcVexAnimationsFadeInUpAnimationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fadeInUpAnimation", function () {
      return fadeInUpAnimation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fadeInUp400ms", function () {
      return fadeInUp400ms;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    function fadeInUpAnimation(duration) {
      return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeInUp', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'translateY(20px)',
        opacity: 0
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("".concat(duration, "ms cubic-bezier(0.35, 0, 0.25, 1)"), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'translateY(0)',
        opacity: 1
      }))])]);
    }

    var fadeInUp400ms = fadeInUpAnimation(400);
    /***/
  },

  /***/
  "./src/@vex/animations/scale-fade-in.animation.ts":
  /*!********************************************************!*\
    !*** ./src/@vex/animations/scale-fade-in.animation.ts ***!
    \********************************************************/

  /*! exports provided: scaleFadeInAnimation, scaleFadeIn400ms */

  /***/
  function srcVexAnimationsScaleFadeInAnimationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "scaleFadeInAnimation", function () {
      return scaleFadeInAnimation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "scaleFadeIn400ms", function () {
      return scaleFadeIn400ms;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    function scaleFadeInAnimation(duration) {
      return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('scaleFadeIn', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'scale(0.8)',
        opacity: 0
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("".concat(duration, "ms cubic-bezier(0.35, 0, 0.25, 1)"), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'scale(1)',
        opacity: 1
      }))])]);
    }

    var scaleFadeIn400ms = scaleFadeInAnimation(400);
    /***/
  },

  /***/
  "./src/@vex/animations/scale-in.animation.ts":
  /*!***************************************************!*\
    !*** ./src/@vex/animations/scale-in.animation.ts ***!
    \***************************************************/

  /*! exports provided: scaleInAnimation, scaleIn400ms */

  /***/
  function srcVexAnimationsScaleInAnimationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "scaleInAnimation", function () {
      return scaleInAnimation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "scaleIn400ms", function () {
      return scaleIn400ms;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    function scaleInAnimation(duration) {
      return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('scaleIn', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'scale(0)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("".concat(duration, "ms cubic-bezier(0.35, 0, 0.25, 1)"), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'scale(1)'
      }))])]);
    }

    var scaleIn400ms = scaleInAnimation(400);
    /***/
  },

  /***/
  "./src/app/ingresos/detalleIngreso/detalle-usuario/detalle-usuario.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/ingresos/detalleIngreso/detalle-usuario/detalle-usuario.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: DetalleUsuarioComponent */

  /***/
  function srcAppIngresosDetalleIngresoDetalleUsuarioDetalleUsuarioComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetalleUsuarioComponent", function () {
      return DetalleUsuarioComponent;
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


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-close */
    "./node_modules/@iconify/icons-ic/twotone-close.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_ingreso_usuarios_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../services/ingreso-usuarios.service */
    "./src/app/services/ingreso-usuarios.service.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function DetalleUsuarioComponent_th_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " No. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function DetalleUsuarioComponent_td_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var element_r34 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r34.no, " ");
      }
    }

    function DetalleUsuarioComponent_th_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Fecha ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function DetalleUsuarioComponent_td_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var element_r35 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](2, 1, element_r35.fechaInicio, "dd/MM/yyyy"), " ");
      }
    }

    function DetalleUsuarioComponent_th_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Hora inicio ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function DetalleUsuarioComponent_td_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var element_r36 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](2, 1, element_r36.fechaInicio, "h:mm:ss a"), " ");
      }
    }

    function DetalleUsuarioComponent_th_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Hora fin ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function DetalleUsuarioComponent_td_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var element_r37 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](2, 1, element_r37.fechaFin, "h:mm:ss a"), " ");
      }
    }

    function DetalleUsuarioComponent_th_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Concesi\xF3n ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function DetalleUsuarioComponent_td_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var element_r38 = ctx.$implicit;

        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("background", ctx_r9.colorVERDE);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r38.concesion, " ");
      }
    }

    function DetalleUsuarioComponent_th_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Saldo anterior ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function DetalleUsuarioComponent_td_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var element_r39 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind3"](2, 1, element_r39.saldoAnterior, "CAD", "symbol-narrow"), " ");
      }
    }

    function DetalleUsuarioComponent_th_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Tiempo ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function DetalleUsuarioComponent_td_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var element_r40 = ctx.$implicit;

        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("background", ctx_r13.colorVERDE);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r40.tiempo, " ");
      }
    }

    function DetalleUsuarioComponent_th_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Monto ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function DetalleUsuarioComponent_td_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var element_r41 = ctx.$implicit;

        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("background", ctx_r15.colorVERDE);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind3"](2, 3, element_r41.monto, "CAD", "symbol-narrow"), " ");
      }
    }

    function DetalleUsuarioComponent_th_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Comisi\xF3n ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function DetalleUsuarioComponent_td_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var element_r42 = ctx.$implicit;

        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("background", ctx_r17.colorVERDE);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind3"](2, 3, element_r42.comision, "CAD", "symbol-narrow"), " ");
      }
    }

    function DetalleUsuarioComponent_th_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Cargo ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function DetalleUsuarioComponent_td_37_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var element_r43 = ctx.$implicit;

        var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("background", ctx_r19.colorVERDE);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind3"](2, 3, element_r43.cargo, "CAD", "symbol-narrow"), " ");
      }
    }

    function DetalleUsuarioComponent_th_39_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Tiempo devuelto");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function DetalleUsuarioComponent_td_40_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var element_r44 = ctx.$implicit;

        var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("background", ctx_r21.colorROSA);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r44.tiempoDevuelto, " ");
      }
    }

    function DetalleUsuarioComponent_th_42_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Monto devuelto");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function DetalleUsuarioComponent_td_43_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var element_r45 = ctx.$implicit;

        var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("background", ctx_r23.colorROSA);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind3"](2, 3, element_r45.montoDevuelto, "CAD", "symbol-narrow"), " ");
      }
    }

    function DetalleUsuarioComponent_th_45_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Comisi\xF3n devuelta");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function DetalleUsuarioComponent_td_46_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var element_r46 = ctx.$implicit;

        var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("background", ctx_r25.colorROSA);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind3"](2, 3, element_r46.comisionDevuelta, "CAD", "symbol-narrow"), " ");
      }
    }

    function DetalleUsuarioComponent_th_48_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Monto total de devoluci\xF3n");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function DetalleUsuarioComponent_td_49_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var element_r47 = ctx.$implicit;

        var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("background", ctx_r27.colorROSA);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind3"](2, 3, element_r47.montoTotalDevolucion, "CAD", "symbol-narrow"), " ");
      }
    }

    function DetalleUsuarioComponent_th_51_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Tiempo total ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function DetalleUsuarioComponent_td_52_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var element_r48 = ctx.$implicit;

        var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("background", ctx_r29.colorVERDEOscuro);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", element_r48.tiempoTotal, " ");
      }
    }

    function DetalleUsuarioComponent_th_54_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Monto total ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function DetalleUsuarioComponent_td_55_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var element_r49 = ctx.$implicit;

        var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("background", ctx_r31.colorVERDEOscuro);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind3"](2, 3, element_r49.montoTotal, "CAD", "symbol-narrow"), " ");
      }
    }

    function DetalleUsuarioComponent_tr_56_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 30);
      }
    }

    function DetalleUsuarioComponent_tr_57_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "tr", 31);
      }
    }

    var DetalleUsuarioComponent = /*#__PURE__*/function () {
      function DetalleUsuarioComponent(usuario, dialogRef, fb, cd, ingresosusuariosservices) {
        _classCallCheck(this, DetalleUsuarioComponent);

        this.usuario = usuario;
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.cd = cd;
        this.ingresosusuariosservices = ingresosusuariosservices; // pageSize = 10;
        // pageSizeOptions: number[] = [10, 20, 30, 50];

        this.displayedColumns = ['ID', 'fecha', 'horaInicio', 'horaFin', 'concesion', 'saldoant', 'tiempo', 'monto', 'comision', 'cargo', 'devtiempo', 'devolucion', 'comisiondev', 'devtotal', 'tiempototal', 'montototal']; // pageEvent: PageEvent;
        // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](DATOS); // propiedades de los colores de la tabla

        this.colorVERDE = '#E2EFDA';
        this.colorVERDEOscuro = '#c6e0b4';
        this.colorROSA = '#ff9999'; // arreglos utilizados

        this.arrmovimientosusuarios = []; // iconos

        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5___default.a;
        this.mtdobtenerfechaseleccionada();
      } // @ViewChild(MatSort, { static: true }) sort: MatSort;


      _createClass(DetalleUsuarioComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log('soy el usuario que viene de aya', this.usuario);
          this.mtddetallemovimientos();
        } // paginador

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {// this.dataSource.paginator = this.paginator;
          // this.dataSource.sort = this.sort;
        }
      }, {
        key: "mtddetallemovimientos",
        value: function mtddetallemovimientos() {
          var _this = this;

          if (this.usuario) {
            if (!this.datemes && !this.dateanio) {
              this.arrmovimientosusuarios = [];
              var myDate = new Date();
              var month = myDate.getMonth() + 1;
              var year = myDate.getFullYear();
              console.log('Fecha no seleccionada ' + this.datemes, this.dateanio);
              this.ingresosusuariosservices.mtdgetobtenermovimientosUsuarios(month, year, this.usuario).subscribe(function (_ref) {
                var response = _ref.data;
                console.log(response);
                _this.arrmovimientosusuarios = response;
                _this.dataSource.data = _this.arrmovimientosusuarios;

                _this.cd.markForCheck();
              });
            } else {
              this.arrmovimientosusuarios = [];
              console.log('Fecha seleccionada ' + this.datemes, this.dateanio);
              this.ingresosusuariosservices.mtdgetobtenermovimientosUsuarios(this.datemes, this.dateanio, this.usuario).subscribe(function (_ref2) {
                var response = _ref2.data;
                console.log(response);
                _this.arrmovimientosusuarios = response;
                _this.dataSource.data = _this.arrmovimientosusuarios;

                _this.cd.markForCheck();
              });
            }
          } else {
            console.log('No existe el usuario');
          }
        } // metodo que recupera el mes y a??o seleccionado por el usuario

      }, {
        key: "mtdobtenerfechaseleccionada",
        value: function mtdobtenerfechaseleccionada() {
          this.datemes = this.ingresosusuariosservices.getMesSeleccionado();
          this.dateanio = this.ingresosusuariosservices.getAnioSeleccionado();
        }
      }]);

      return DetalleUsuarioComponent;
    }();

    DetalleUsuarioComponent.??fac = function DetalleUsuarioComponent_Factory(t) {
      return new (t || DetalleUsuarioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_ingreso_usuarios_service__WEBPACK_IMPORTED_MODULE_7__["IngresoUsuariosService"]));
    };

    DetalleUsuarioComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: DetalleUsuarioComponent,
      selectors: [["vex-detalle-usuario"]],
      viewQuery: function DetalleUsuarioComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????staticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.sort = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.paginator = _t.first);
        }
      },
      decls: 58,
      vars: 5,
      consts: [["fxLayout", "row", "fxLayoutAlign", "start center", "mat-dialog-title", ""], ["type", "button", "mat-icon-button", "", "mat-dialog-close", "", 1, "text-secondary"], [3, "icIcon"], ["fxFlex", "auto", 1, "headline", "m-0"], ["fxLayout", "column", 1, "card", "overflow-auto", 2, "min-height", "fit-content"], [1, "flex", "flex-col", "sm:flex-row", 2, "margin-top", "5px"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "ID"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "fecha"], ["matColumnDef", "horaInicio"], ["matColumnDef", "horaFin"], ["matColumnDef", "concesion"], ["mat-cell", "", 3, "background", 4, "matCellDef"], ["matColumnDef", "saldoant"], ["matColumnDef", "tiempo"], ["matColumnDef", "monto"], ["matColumnDef", "comision"], ["matColumnDef", "cargo"], ["matColumnDef", "devtiempo"], ["matColumnDef", "devolucion"], ["matColumnDef", "comisiondev"], ["matColumnDef", "devtotal"], ["matColumnDef", "tiempototal"], ["matColumnDef", "montototal"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]],
      template: function DetalleUsuarioComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "mat-icon", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h2", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "mat-dialog-content", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "table", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](8, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, DetalleUsuarioComponent_th_9_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, DetalleUsuarioComponent_td_10_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](11, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, DetalleUsuarioComponent_th_12_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, DetalleUsuarioComponent_td_13_Template, 3, 4, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](14, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, DetalleUsuarioComponent_th_15_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, DetalleUsuarioComponent_td_16_Template, 3, 4, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](17, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, DetalleUsuarioComponent_th_18_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](19, DetalleUsuarioComponent_td_19_Template, 3, 4, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](20, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](21, DetalleUsuarioComponent_th_21_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](22, DetalleUsuarioComponent_td_22_Template, 2, 3, "td", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](23, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](24, DetalleUsuarioComponent_th_24_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](25, DetalleUsuarioComponent_td_25_Template, 3, 5, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](26, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](27, DetalleUsuarioComponent_th_27_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](28, DetalleUsuarioComponent_td_28_Template, 2, 3, "td", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](29, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](30, DetalleUsuarioComponent_th_30_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](31, DetalleUsuarioComponent_td_31_Template, 3, 7, "td", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](32, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](33, DetalleUsuarioComponent_th_33_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](34, DetalleUsuarioComponent_td_34_Template, 3, 7, "td", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](35, 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](36, DetalleUsuarioComponent_th_36_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](37, DetalleUsuarioComponent_td_37_Template, 3, 7, "td", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](38, 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](39, DetalleUsuarioComponent_th_39_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](40, DetalleUsuarioComponent_td_40_Template, 2, 3, "td", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](41, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](42, DetalleUsuarioComponent_th_42_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](43, DetalleUsuarioComponent_td_43_Template, 3, 7, "td", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](44, 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](45, DetalleUsuarioComponent_th_45_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](46, DetalleUsuarioComponent_td_46_Template, 3, 7, "td", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](47, 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](48, DetalleUsuarioComponent_th_48_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](49, DetalleUsuarioComponent_td_49_Template, 3, 7, "td", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](50, 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](51, DetalleUsuarioComponent_th_51_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](52, DetalleUsuarioComponent_td_52_Template, 2, 3, "td", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](53, 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](54, DetalleUsuarioComponent_th_54_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](55, DetalleUsuarioComponent_td_55_Template, 3, 7, "td", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](56, DetalleUsuarioComponent_tr_56_Template, 1, 0, "tr", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](57, DetalleUsuarioComponent_tr_57_Template, 1, 0, "tr", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("icIcon", ctx.icClose);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" Movimientos del usuario ", ctx.usuario, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dataSource", ctx.dataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matHeaderRowDef", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matRowDefColumns", ctx.displayedColumns);
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__["IconDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["CurrencyPipe"]],
      styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nth.mat-header-cell[_ngcontent-%COMP%], td.mat-cell[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5ncmVzb3MvZGV0YWxsZUluZ3Jlc28vZGV0YWxsZS11c3VhcmlvL2RldGFsbGUtdXN1YXJpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTs7RUFFRSxrQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaW5ncmVzb3MvZGV0YWxsZUluZ3Jlc28vZGV0YWxsZS11c3VhcmlvL2RldGFsbGUtdXN1YXJpby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRoLm1hdC1oZWFkZXItY2VsbCxcbnRkLm1hdC1jZWxsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DetalleUsuarioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'vex-detalle-usuario',
          templateUrl: './detalle-usuario.component.html',
          styleUrls: ['./detalle-usuario.component.scss']
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
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _services_ingreso_usuarios_service__WEBPACK_IMPORTED_MODULE_7__["IngresoUsuariosService"]
        }];
      }, {
        sort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], {
            "static": true
          }]
        }],
        paginator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]]
        }]
      });
    })();

    var DATOS = [];
    /***/
  },

  /***/
  "./src/app/ingresos/ingresos-usuarios/ingresos-usuarios-routing.module.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/ingresos/ingresos-usuarios/ingresos-usuarios-routing.module.ts ***!
    \********************************************************************************/

  /*! exports provided: IngresosUsuariosRoutingModule */

  /***/
  function srcAppIngresosIngresosUsuariosIngresosUsuariosRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IngresosUsuariosRoutingModule", function () {
      return IngresosUsuariosRoutingModule;
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


    var _ingresos_usuarios_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./ingresos-usuarios.component */
    "./src/app/ingresos/ingresos-usuarios/ingresos-usuarios.component.ts");
    /* harmony import */


    var _pages_auth_login_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../pages/auth/login/auth.guard */
    "./src/app/pages/auth/login/auth.guard.ts"); //const routes: Routes = [];


    var routes = [{
      path: '',
      component: _ingresos_usuarios_component__WEBPACK_IMPORTED_MODULE_2__["IngresosUsuariosComponent"],
      canActivate: [_pages_auth_login_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
      data: {
        toolbarShadowEnabled: true,
        //containerEnabled: true,
        scrollDisableb: false
      }
    }];

    var IngresosUsuariosRoutingModule = function IngresosUsuariosRoutingModule() {
      _classCallCheck(this, IngresosUsuariosRoutingModule);
    };

    IngresosUsuariosRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: IngresosUsuariosRoutingModule
    });
    IngresosUsuariosRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function IngresosUsuariosRoutingModule_Factory(t) {
        return new (t || IngresosUsuariosRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](IngresosUsuariosRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](IngresosUsuariosRoutingModule, [{
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
  "./src/app/ingresos/ingresos-usuarios/ingresos-usuarios.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/ingresos/ingresos-usuarios/ingresos-usuarios.component.ts ***!
    \***************************************************************************/

  /*! exports provided: IngresosUsuariosComponent */

  /***/
  function srcAppIngresosIngresosUsuariosIngresosUsuariosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IngresosUsuariosComponent", function () {
      return IngresosUsuariosComponent;
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


    var _detalleIngreso_detalle_usuario_detalle_usuario_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../detalleIngreso/detalle-usuario/detalle-usuario.component */
    "./src/app/ingresos/detalleIngreso/detalle-usuario/detalle-usuario.component.ts");
    /* harmony import */


    var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ngneat/until-destroy */
    "./node_modules/@ngneat/until-destroy/__ivy_ngcc__/fesm2015/ngneat-until-destroy.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _services_ingreso_usuarios_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../services/ingreso-usuarios.service */
    "./src/app/services/ingreso-usuarios.service.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ../../../@vex/directives/container/container.directive */
    "./src/@vex/directives/container/container.directive.ts");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _vex_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ../../../@vex/components/page-layout/page-layout-content.directive */
    "./src/@vex/components/page-layout/page-layout-content.directive.ts");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function IngresosUsuariosComponent_option_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "option", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }

      if (rf & 2) {
        var mes_r35 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", mes_r35.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", mes_r35.nombre, " ");
      }
    }

    function IngresosUsuariosComponent_option_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "option", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }

      if (rf & 2) {
        var anio_r36 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", anio_r36.anio);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", anio_r36.anio, " ");
      }
    }

    function IngresosUsuariosComponent_span_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Buscar:");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return {
        "display": "none"
      };
    };

    function IngresosUsuariosComponent_th_45_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " concesion ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](1, _c0));
      }
    }

    function IngresosUsuariosComponent_td_46_Template(rf, ctx) {
      if (rf & 1) {
        var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function IngresosUsuariosComponent_td_46_Template_td_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r39);

          var element_r37 = ctx.$implicit;

          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          return ctx_r38.mtdclickDetalleIngresoUsuario(element_r37.usuario);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }

      if (rf & 2) {
        var element_r37 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", element_r37.usuario, " ");
      }
    }

    function IngresosUsuariosComponent_th_48_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Usuario");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????attribute"]("rowspan", 2);
      }
    }

    function IngresosUsuariosComponent_th_50_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " concesion ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](1, _c0));
      }
    }

    function IngresosUsuariosComponent_td_51_Template(rf, ctx) {
      if (rf & 1) {
        var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function IngresosUsuariosComponent_td_51_Template_td_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r42);

          var element_r40 = ctx.$implicit;

          var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          return ctx_r41.mtdclickDetalleIngresoUsuario(element_r40.usuario);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](2, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }

      if (rf & 2) {
        var element_r40 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind3"](2, 1, element_r40.saldoMesAnterior, "CAD", "symbol-narrow"), " ");
      }
    }

    function IngresosUsuariosComponent_th_53_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Saldo del mes anterior");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????attribute"]("rowspan", 2);
      }
    }

    function IngresosUsuariosComponent_th_55_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Recarga de saldo en el mes ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????attribute"]("colspan", 3);
      }
    }

    function IngresosUsuariosComponent_th_57_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Saldo ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }
    }

    function IngresosUsuariosComponent_td_58_Template(rf, ctx) {
      if (rf & 1) {
        var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function IngresosUsuariosComponent_td_58_Template_td_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r45);

          var element_r43 = ctx.$implicit;

          var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          return ctx_r44.mtdclickDetalleIngresoUsuario(element_r43.usuario);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](2, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }

      if (rf & 2) {
        var element_r43 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind3"](2, 1, element_r43.saldo, "CAD", "symbol-narrow"), " ");
      }
    }

    function IngresosUsuariosComponent_th_60_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Comisi\xF3n ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }
    }

    function IngresosUsuariosComponent_td_61_Template(rf, ctx) {
      if (rf & 1) {
        var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function IngresosUsuariosComponent_td_61_Template_td_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r48);

          var element_r46 = ctx.$implicit;

          var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          return ctx_r47.mtdclickDetalleIngresoUsuario(element_r46.usuario);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](2, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }

      if (rf & 2) {
        var element_r46 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind3"](2, 1, element_r46.comision, "CAD", "symbol-narrow"), " ");
      }
    }

    function IngresosUsuariosComponent_th_63_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Total cobrado ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }
    }

    function IngresosUsuariosComponent_td_64_Template(rf, ctx) {
      if (rf & 1) {
        var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function IngresosUsuariosComponent_td_64_Template_td_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r51);

          var element_r49 = ctx.$implicit;

          var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          return ctx_r50.mtdclickDetalleIngresoUsuario(element_r49.usuario);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](2, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }

      if (rf & 2) {
        var element_r49 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind3"](2, 1, element_r49.totalCobrado, "CAD", "symbol-narrow"), " ");
      }
    }

    function IngresosUsuariosComponent_th_66_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "th", 54);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](1, _c0));
      }
    }

    function IngresosUsuariosComponent_td_67_Template(rf, ctx) {
      if (rf & 1) {
        var _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function IngresosUsuariosComponent_td_67_Template_td_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r54);

          var element_r52 = ctx.$implicit;

          var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          return ctx_r53.mtdclickDetalleIngresoUsuario(element_r52.usuario);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](2, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }

      if (rf & 2) {
        var element_r52 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind3"](2, 1, element_r52.saldoDelMes, "CAD", "symbol-narrow"), " ");
      }
    }

    function IngresosUsuariosComponent_th_69_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Saldo del mes");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????attribute"]("rowspan", 2);
      }
    }

    function IngresosUsuariosComponent_th_71_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Compra parquimetros en el mes ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????attribute"]("colspan", 3);
      }
    }

    function IngresosUsuariosComponent_th_73_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Cargos ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }
    }

    function IngresosUsuariosComponent_td_74_Template(rf, ctx) {
      if (rf & 1) {
        var _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function IngresosUsuariosComponent_td_74_Template_td_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r57);

          var element_r55 = ctx.$implicit;

          var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          return ctx_r56.mtdclickDetalleIngresoUsuario(element_r55.usuario);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](2, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }

      if (rf & 2) {
        var element_r55 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind3"](2, 1, element_r55.cargos, "CAD", "symbol-narrow"), " ");
      }
    }

    function IngresosUsuariosComponent_th_76_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Comisi\xF3n ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }
    }

    function IngresosUsuariosComponent_td_77_Template(rf, ctx) {
      if (rf & 1) {
        var _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function IngresosUsuariosComponent_td_77_Template_td_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r60);

          var element_r58 = ctx.$implicit;

          var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          return ctx_r59.mtdclickDetalleIngresoUsuario(element_r58.usuario);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](2, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }

      if (rf & 2) {
        var element_r58 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind3"](2, 1, element_r58.comisionMov, "CAD", "symbol-narrow"), " ");
      }
    }

    function IngresosUsuariosComponent_th_79_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Comisi\xF3n ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }
    }

    function IngresosUsuariosComponent_td_80_Template(rf, ctx) {
      if (rf & 1) {
        var _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function IngresosUsuariosComponent_td_80_Template_td_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r63);

          var element_r61 = ctx.$implicit;

          var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          return ctx_r62.mtdclickDetalleIngresoUsuario(element_r61.usuario);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](2, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }

      if (rf & 2) {
        var element_r61 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind3"](2, 1, element_r61.comisionTotal, "CAD", "symbol-narrow"), " ");
      }
    }

    function IngresosUsuariosComponent_th_82_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Saldo ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](1, _c0));
      }
    }

    function IngresosUsuariosComponent_td_83_Template(rf, ctx) {
      if (rf & 1) {
        var _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function IngresosUsuariosComponent_td_83_Template_td_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r66);

          var element_r64 = ctx.$implicit;

          var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          return ctx_r65.mtdclickDetalleIngresoUsuario(element_r64.usuario);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](2, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }

      if (rf & 2) {
        var element_r64 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind3"](2, 1, element_r64.saldoFinal, "CAD", "symbol-narrow"), " ");
      }
    }

    function IngresosUsuariosComponent_th_85_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Saldo Final");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????attribute"]("rowspan", 2);
      }
    }

    function IngresosUsuariosComponent_tr_86_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "tr", 57);
      }
    }

    function IngresosUsuariosComponent_tr_87_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "tr", 57);
      }
    }

    function IngresosUsuariosComponent_tr_88_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "tr", 58);
      }
    }

    var _c1 = function _c1() {
      return ["usuarioSaldo", "saldoanterior", "recarga", "saldomesActual", "compraParquimetros", "saldoFinalMes"];
    }; // doracion de UntilDestroy


    var IngresosUsuariosComponent = /*#__PURE__*/function () {
      function IngresosUsuariosComponent(fb, dialog, cd, ingresosusuariosservices) {
        var _this2 = this;

        _classCallCheck(this, IngresosUsuariosComponent);

        this.fb = fb;
        this.dialog = dialog;
        this.cd = cd;
        this.ingresosusuariosservices = ingresosusuariosservices;
        this.arrResumenXusuarios = [];
        this.arrIngresosXusuario = [];
        this.arrUsuario = [];
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](); // propiedades de la tabla
        // pageSize = 10;
        // pageSizeOptions: number[] = [10, 20, 30, 50];

        this.displayedColumns = ['usuario', 'saldoant', 'recargaU', 'comision', 'totalC', 'saldomes', 'cargos', 'comisionVenta', 'totalCVenta', 'saldoFinal'];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_11__["SelectionModel"](true, []);
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](DATOS);
        this.selectedOptions = [];
        this.checkedValues = [];
        this.arrCtasLicencia = [];
        this.arrPassLicencia = []; // arreglo para guardar los meses

        this.arrfechasanios = []; // arreglos para guardar el resumen de los usuarios

        this.arringresosresumen = []; // arreglo de meses

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
        }]; // iconos

        this.icContacts = _iconify_icons_ic_twotone_contacts__WEBPACK_IMPORTED_MODULE_12___default.a;
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_13___default.a;
        this.mtdgenerarAnios();
        this.ingresosusuariosservices.mtdrefreshdata$.subscribe(function () {
          _this2.mtdobtenerResumendeIngresosUsuarios();
        });
        this.mtdobtenerResumendeIngresosUsuarios();
      }

      _createClass(IngresosUsuariosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this3 = this;

          // this.dataSource.paginator = this.paginator;
          this.mtdpintarfechaSeleccionada(); // this.dataSource.sort = this.sort;
          // Filtro de la tabla

          this.searchCtrl.valueChanges.pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_15__["untilDestroyed"])(this)).subscribe(function (value) {
            return _this3.onFilterChange(value);
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
        }
      }, {
        key: "mtdclickDetalleIngresoUsuario",
        value: function mtdclickDetalleIngresoUsuario(usuario) {
          this.dialog.open(_detalleIngreso_detalle_usuario_detalle_usuario_component__WEBPACK_IMPORTED_MODULE_14__["DetalleUsuarioComponent"], {
            height: 'auto',
            data: usuario
          });
        } // metodo que permite obtener los ingresos de usuarios acorde a la fecha

      }, {
        key: "mtdclickobtenerIngresosMensualesFecha",
        value: function mtdclickobtenerIngresosMensualesFecha(mes, anio) {
          if (mes === '' && anio === '') {
            return;
          }

          if (mes === '' || anio === '') {
            return;
          }

          console.log('Mes2: ' + mes, 'A??o2: ' + anio);
          this.mtdobtenerResumendeIngresosUsuariosParam(mes, anio);
          this.ingresosusuariosservices.setMesSeleccionado(mes);
          this.ingresosusuariosservices.setAnioSeleccionado(anio); // this.mesSelected = mes;

          var nombreMes = this.arrmeses.filter(function (arrmeses) {
            return arrmeses.value == mes;
          }); // console.log('mes actualizado', nombreMes);

          this.mesSelected = nombreMes[0].nombre;
          this.anioSelected = anio;
          this.cd.markForCheck();
        }
      }, {
        key: "mtdobtenerResumendeIngresosUsuarios",
        value: function mtdobtenerResumendeIngresosUsuarios() {
          var _this4 = this;

          var myDate = new Date();
          var month = myDate.getMonth() + 1;
          var year = myDate.getFullYear();
          console.log('Mes: ' + month, 'A??o: ' + year);
          this.ingresosusuariosservices.mtdgetobtenerResumenIngresosUsuarios(month, year).subscribe(function (response) {
            _this4.arringresosresumen = response.data;
            _this4.dataSource.data = _this4.arringresosresumen; //console.log(this.arringresosresumen);
          });
        }
      }, {
        key: "mtdobtenerResumendeIngresosUsuariosParam",
        value: function mtdobtenerResumendeIngresosUsuariosParam(mes, anio) {
          var _this5 = this;

          this.arringresosresumen = [];
          this.ingresosusuariosservices.mtdgetobtenerResumenIngresosUsuarios(mes, anio).subscribe(function (response) {
            _this5.arringresosresumen = response.data;
            _this5.dataSource.data = _this5.arringresosresumen;

            _this5.cd.markForCheck();

            console.log(_this5.arringresosresumen);
          });
        } // metodo que permite pintar la fecha

      }, {
        key: "mtdpintarfechaSeleccionada",
        value: function mtdpintarfechaSeleccionada() {
          var _this6 = this;

          this.datefecha = new Date();
          this.mesSelected = this.datefecha.getMonth() + 1;
          var nombreMes = this.arrmeses.filter(function (arrmeses) {
            return arrmeses.value == _this6.mesSelected;
          }); // console.log('mes actualizado', nombreMes);

          this.mesSelected = nombreMes[0].nombre;
          this.anioSelected = this.datefecha.getFullYear();
        }
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
        }
      }]);

      return IngresosUsuariosComponent;
    }();

    IngresosUsuariosComponent.??fac = function IngresosUsuariosComponent_Factory(t) {
      return new (t || IngresosUsuariosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_services_ingreso_usuarios_service__WEBPACK_IMPORTED_MODULE_17__["IngresoUsuariosService"]));
    };

    IngresosUsuariosComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
      type: IngresosUsuariosComponent,
      selectors: [["vex-ingresos-usuarios"]],
      viewQuery: function IngresosUsuariosComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????staticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__["MatPaginator"], true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????staticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSort"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????loadQuery"]()) && (ctx.paginator = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????loadQuery"]()) && (ctx.sort = _t.first);
        }
      },
      decls: 89,
      vars: 16,
      consts: [["fxLayout", "column", 1, "h-full"], ["fxFlex", "none", 1, "p-6", "pb-0", "bg-card", "shadow-b"], ["vexContainer", ""], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "display-1", "mt-0", "mb-4"], [1, "w-12", "h-12", "rounded-full", "text-primary", "ltr:mr-4", "rtl:ml-4", "flex", "items-center", "justify-center", "bg-primary-light"], ["size", "24px", 3, "icon"], [1, "block"], ["fxFlex", "none", 1, "mt-4", "p-6", "pb-0", "bg-card", "shadow-b"], ["fxFlex", "30", 1, "mt-5", "sm:ml-3"], ["for", "mes"], ["matNativeControl", "", "name", "mes", "required", ""], ["mes", ""], ["value", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "anio"], ["matNativeControl", "", "name", "anio", "required", ""], ["anio", ""], ["color", "primary", "mat-button", "", "type", "button", 1, "ml-3", "mb-2", 3, "click"], [1, "mt-10"], [1, "card", "overflow-auto"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "bg-app-bar", "px-6", "h-16", "border-b", "sticky", "left-0"], ["fxFlex", "auto", "fxHide.xs", "", 1, "title", "my-0", "ltr:pr-4", "rtl:pl-4", "ltr:mr-4", "rtl:ml-4", "ltr:border-r", "rtl:border-l"], [4, "ngIf"], ["fxFlex", "850px", "fxFlex.lt-md", "auto", "fxHide.xs", "", "fxLayout", "row", 1, "bg-card", "rounded-full", "border", "px-4"], ["size", "40px", 3, "icIcon"], ["placeholder", "Buscar...", "type", "search", 1, "px-4", "py-3", "border-0", "outline-none", "w-full", "bg-transparent", 3, "formControl"], ["fxFlex", ""], ["fxFlex", "none", "fxHide.gt-xs", "", "mat-icon-button", "", "type", "button", 1, "ml-4"], [3, "icIcon"], [1, "mt-3", "mb-6", "ml-2"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["table", ""], ["matColumnDef", "usuario"], ["mat-header-cell", "", 3, "ngStyle", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "click", 4, "matCellDef"], ["matColumnDef", "usuarioSaldo"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "saldoant"], ["matColumnDef", "saldoanterior"], ["matColumnDef", "recarga"], ["matColumnDef", "recargaU"], ["matColumnDef", "comision"], ["matColumnDef", "totalC"], ["matColumnDef", "saldomes"], ["matColumnDef", "saldomesActual"], ["matColumnDef", "compraParquimetros"], ["matColumnDef", "cargos"], ["matColumnDef", "comisionVenta"], ["matColumnDef", "totalCVenta"], ["matColumnDef", "saldoFinal"], ["matColumnDef", "saldoFinalMes"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "value"], ["mat-header-cell", "", 3, "ngStyle"], ["mat-cell", "", 3, "click"], ["mat-header-cell", ""], ["mat-header-row", ""], ["mat-row", ""]],
      template: function IngresosUsuariosComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](5, "ic-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "Ingresos Mensuales de Usuarios");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10, "Selecciona una fecha");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "mat-label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15, "Selecciona mes");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "select", 10, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](18, "option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](19, IngresosUsuariosComponent_option_19_Template, 2, 2, "option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "mat-label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](22, "Selecciona a\xF1o");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "select", 15, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](25, "option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](26, IngresosUsuariosComponent_option_26_Template, 2, 2, "option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function IngresosUsuariosComponent_Template_button_click_27_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r68);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](17);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](24);

            return ctx.mtdclickobtenerIngresosMensualesFecha(_r0.value, _r2.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](28, " ACEPTAR ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "vex-page-layout-content", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "h2", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](33, IngresosUsuariosComponent_span_33_Template, 2, 0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](35, "ic-icon", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](36, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](37, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](39, "mat-icon", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "h2", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](42, "table", 30, 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](44, 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](45, IngresosUsuariosComponent_th_45_Template, 2, 2, "th", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](46, IngresosUsuariosComponent_td_46_Template, 2, 1, "td", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](47, 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](48, IngresosUsuariosComponent_th_48_Template, 2, 1, "th", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](49, 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](50, IngresosUsuariosComponent_th_50_Template, 2, 2, "th", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](51, IngresosUsuariosComponent_td_51_Template, 3, 5, "td", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](52, 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](53, IngresosUsuariosComponent_th_53_Template, 2, 1, "th", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](54, 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](55, IngresosUsuariosComponent_th_55_Template, 2, 1, "th", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](56, 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](57, IngresosUsuariosComponent_th_57_Template, 2, 0, "th", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](58, IngresosUsuariosComponent_td_58_Template, 3, 5, "td", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](59, 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](60, IngresosUsuariosComponent_th_60_Template, 2, 0, "th", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](61, IngresosUsuariosComponent_td_61_Template, 3, 5, "td", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](62, 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](63, IngresosUsuariosComponent_th_63_Template, 2, 0, "th", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](64, IngresosUsuariosComponent_td_64_Template, 3, 5, "td", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](65, 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](66, IngresosUsuariosComponent_th_66_Template, 1, 2, "th", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](67, IngresosUsuariosComponent_td_67_Template, 3, 5, "td", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](68, 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](69, IngresosUsuariosComponent_th_69_Template, 2, 1, "th", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](70, 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](71, IngresosUsuariosComponent_th_71_Template, 2, 1, "th", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](72, 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](73, IngresosUsuariosComponent_th_73_Template, 2, 0, "th", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](74, IngresosUsuariosComponent_td_74_Template, 3, 5, "td", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](75, 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](76, IngresosUsuariosComponent_th_76_Template, 2, 0, "th", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](77, IngresosUsuariosComponent_td_77_Template, 3, 5, "td", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](78, 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](79, IngresosUsuariosComponent_th_79_Template, 2, 0, "th", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](80, IngresosUsuariosComponent_td_80_Template, 3, 5, "td", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](81, 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](82, IngresosUsuariosComponent_th_82_Template, 2, 2, "th", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](83, IngresosUsuariosComponent_td_83_Template, 3, 5, "td", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](84, 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](85, IngresosUsuariosComponent_th_85_Template, 2, 1, "th", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](86, IngresosUsuariosComponent_tr_86_Template, 1, 0, "tr", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](87, IngresosUsuariosComponent_tr_87_Template, 1, 0, "tr", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](88, IngresosUsuariosComponent_tr_88_Template, 1, 0, "tr", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("@scaleIn", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("icon", ctx.icContacts);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("@fadeInRight", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.arrmeses);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.arrfechasanios);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.selection.isEmpty());

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("icIcon", ctx.icSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("formControl", ctx.searchCtrl);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("icIcon", ctx.icSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate2"]("Resumen de usuarios - Mes: ", ctx.mesSelected, " A\xF1o: ", ctx.anioSelected, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("dataSource", ctx.dataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("matHeaderRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](15, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("matHeaderRowDef", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("matRowDefColumns", ctx.displayedColumns);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__["DefaultFlexDirective"], _vex_directives_container_container_directive__WEBPACK_IMPORTED_MODULE_19__["ContainerDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__["DefaultLayoutAlignDirective"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_20__["IconDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_24__["MatButton"], _vex_components_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_25__["PageLayoutContentDirective"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_26__["DefaultShowHideDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderCell"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["NgStyle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_26__["DefaultStyleDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatRow"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_23__["CurrencyPipe"]],
      styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nth.mat-header-cell[_ngcontent-%COMP%], td.mat-cell[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\nth.mat-header-column[_ngcontent-%COMP%], td.mat-column[_ngcontent-%COMP%] {\n  width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5ncmVzb3MvaW5ncmVzb3MtdXN1YXJpb3MvaW5ncmVzb3MtdXN1YXJpb3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsa0JBQUE7QUFDRjs7QUFFQTs7RUFFRSxZQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9pbmdyZXNvcy9pbmdyZXNvcy11c3Vhcmlvcy9pbmdyZXNvcy11c3Vhcmlvcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRoLm1hdC1oZWFkZXItY2VsbCxcbnRkLm1hdC1jZWxsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG50aC5tYXQtaGVhZGVyLWNvbHVtbixcbnRkLm1hdC1jb2x1bW4ge1xuICB3aWR0aDogMjAwcHg7XG59Il19 */"],
      data: {
        animation: [_vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_7__["scaleIn400ms"], _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_3__["fadeInRight400ms"], _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_4__["stagger40ms"], _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_5__["fadeInUp400ms"], _vex_animations_scale_fade_in_animation__WEBPACK_IMPORTED_MODULE_6__["scaleFadeIn400ms"]]
      },
      changeDetection: 0
    });
    IngresosUsuariosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_15__["UntilDestroy"])()], IngresosUsuariosComponent);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](IngresosUsuariosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'vex-ingresos-usuarios',
          templateUrl: './ingresos-usuarios.component.html',
          styleUrls: ['./ingresos-usuarios.component.scss'],
          animations: [_vex_animations_scale_in_animation__WEBPACK_IMPORTED_MODULE_7__["scaleIn400ms"], _vex_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_3__["fadeInRight400ms"], _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_4__["stagger40ms"], _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_5__["fadeInUp400ms"], _vex_animations_scale_fade_in_animation__WEBPACK_IMPORTED_MODULE_6__["scaleFadeIn400ms"]],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialog"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: _services_ingreso_usuarios_service__WEBPACK_IMPORTED_MODULE_17__["IngresoUsuariosService"]
        }];
      }, {
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
  "./src/app/services/ingreso-usuarios.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/services/ingreso-usuarios.service.ts ***!
    \******************************************************/

  /*! exports provided: IngresoUsuariosService */

  /***/
  function srcAppServicesIngresoUsuariosServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IngresoUsuariosService", function () {
      return IngresoUsuariosService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _shared_services_abstractmanager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/services/abstractmanager.service */
    "./src/app/shared/services/abstractmanager.service.ts");

    var IngresoUsuariosService = /*#__PURE__*/function (_shared_services_abst) {
      _inherits(IngresoUsuariosService, _shared_services_abst);

      var _super = _createSuper(IngresoUsuariosService);

      function IngresoUsuariosService(http) {
        var _this7;

        _classCallCheck(this, IngresoUsuariosService);

        _this7 = _super.call(this);
        _this7.http = http; // API anterior
        //private urlApi: string = 'http://74.208.52.12/api/';

        _this7._refreshdata$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        _this7.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
        _this7.currentUser = {};
        return _this7;
      }

      _createClass(IngresoUsuariosService, [{
        key: "setMesSeleccionado",
        value: function setMesSeleccionado(datemes) {
          this.datemes = datemes;
        }
      }, {
        key: "setAnioSeleccionado",
        value: function setAnioSeleccionado(dateanio) {
          this.dateanio = dateanio;
        }
      }, {
        key: "getMesSeleccionado",
        value: function getMesSeleccionado() {
          return this.datemes;
        }
      }, {
        key: "getAnioSeleccionado",
        value: function getAnioSeleccionado() {
          return this.dateanio;
        }
      }, {
        key: "mtdgetobtenerResumenIngresosUsuarios",
        value: function mtdgetobtenerResumenIngresosUsuarios(mes, anio) {
          return this.http.get("".concat(this.API_URL, "api/Movimientos/mtdObtenerResumenMensualUsuarios?mes=").concat(mes, "&anio=").concat(anio));
        }
      }, {
        key: "mtdgetobtenermovimientosUsuarios",
        value: function mtdgetobtenermovimientosUsuarios(mes, anio, usuario) {
          console.log("".concat(this.API_URL, "api/Movimientos/mtdObtenerResumenMensualXUsuario?strCorreo=").concat(usuario, "&mes=").concat(mes, "&anio=").concat(anio));
          return this.http.get("".concat(this.API_URL, "api/Movimientos/mtdObtenerResumenMensualXUsuario?strCorreo=").concat(usuario, "&mes=").concat(mes, "&anio=").concat(anio));
        } // Error

      }, {
        key: "handleError",
        value: function handleError(error) {
          var msg = '';

          if (error.error instanceof ErrorEvent) {
            // client-side error
            msg = error.error.message;
          } else {
            // server-side error
            msg = "Error Code: ".concat(error.status, "\nMessage: ").concat(error.message);
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(msg);
        }
      }, {
        key: "mtdrefreshdata$",
        get: function get() {
          return this._refreshdata$;
        }
      }]);

      return IngresoUsuariosService;
    }(_shared_services_abstractmanager_service__WEBPACK_IMPORTED_MODULE_3__["AbstractmanagerService"]);

    IngresoUsuariosService.??fac = function IngresoUsuariosService_Factory(t) {
      return new (t || IngresoUsuariosService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    IngresoUsuariosService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: IngresoUsuariosService,
      factory: IngresoUsuariosService.??fac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](IngresoUsuariosService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=ingresos-ingresos-usuarios-ingresos-usuarios-routing-module-es5.js.map