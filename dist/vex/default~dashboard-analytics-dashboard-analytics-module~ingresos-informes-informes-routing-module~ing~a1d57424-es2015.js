(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~dashboard-analytics-dashboard-analytics-module~ingresos-informes-informes-routing-module~ing~a1d57424"],{

/***/ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js ***!
  \**********************************************************************/
/*! exports provided: MAT_SORT_HEADER_INTL_PROVIDER, MAT_SORT_HEADER_INTL_PROVIDER_FACTORY, MatSort, MatSortHeader, MatSortHeaderIntl, MatSortModule, matSortAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SORT_HEADER_INTL_PROVIDER", function() { return MAT_SORT_HEADER_INTL_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SORT_HEADER_INTL_PROVIDER_FACTORY", function() { return MAT_SORT_HEADER_INTL_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSort", function() { return MatSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSortHeader", function() { return MatSortHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSortHeaderIntl", function() { return MatSortHeaderIntl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSortModule", function() { return MatSortModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matSortAnimations", function() { return matSortAnimations; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/fesm2015/coercion.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** @docs-private */




const _c0 = ["mat-sort-header", ""];
function MatSortHeader_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("@arrowPosition.start", function MatSortHeader_div_3_Template_div_animation_arrowPosition_start_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r1._disableViewStateAnimation = true; })("@arrowPosition.done", function MatSortHeader_div_3_Template_div_animation_arrowPosition_done_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r3._disableViewStateAnimation = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("@arrowOpacity", ctx_r0._getArrowViewState())("@arrowPosition", ctx_r0._getArrowViewState())("@allowChildren", ctx_r0._getArrowDirectionState());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("@indicator", ctx_r0._getArrowDirectionState());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("@leftPointer", ctx_r0._getArrowDirectionState());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("@rightPointer", ctx_r0._getArrowDirectionState());
} }
const _c1 = ["*"];
function getSortDuplicateSortableIdError(id) {
    return Error(`Cannot have two MatSortables with the same id (${id}).`);
}
/** @docs-private */
function getSortHeaderNotContainedWithinSortError() {
    return Error(`MatSortHeader must be placed within a parent element with the MatSort directive.`);
}
/** @docs-private */
function getSortHeaderMissingIdError() {
    return Error(`MatSortHeader must be provided with a unique id.`);
}
/** @docs-private */
function getSortInvalidDirectionError(direction) {
    return Error(`${direction} is not a valid sort direction ('asc' or 'desc').`);
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Boilerplate for applying mixins to MatSort.
/** @docs-private */
class MatSortBase {
}
const _MatSortMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinInitialized"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisabled"])(MatSortBase));
/** Container for MatSortables to manage the sort state and provide default sort parameters. */
let MatSort = /** @class */ (() => {
    class MatSort extends _MatSortMixinBase {
        constructor() {
            super(...arguments);
            /** Collection of all registered sortables that this directive manages. */
            this.sortables = new Map();
            /** Used to notify any child components listening to state changes. */
            this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
            /**
             * The direction to set when an MatSortable is initially sorted.
             * May be overriden by the MatSortable's sort start.
             */
            this.start = 'asc';
            this._direction = '';
            /** Event emitted when the user changes either the active sort or sort direction. */
            this.sortChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }
        /** The sort direction of the currently active MatSortable. */
        get direction() { return this._direction; }
        set direction(direction) {
            if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])() && direction && direction !== 'asc' && direction !== 'desc') {
                throw getSortInvalidDirectionError(direction);
            }
            this._direction = direction;
        }
        /**
         * Whether to disable the user from clearing the sort by finishing the sort direction cycle.
         * May be overriden by the MatSortable's disable clear input.
         */
        get disableClear() { return this._disableClear; }
        set disableClear(v) { this._disableClear = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(v); }
        /**
         * Register function to be used by the contained MatSortables. Adds the MatSortable to the
         * collection of MatSortables.
         */
        register(sortable) {
            if (!sortable.id) {
                throw getSortHeaderMissingIdError();
            }
            if (this.sortables.has(sortable.id)) {
                throw getSortDuplicateSortableIdError(sortable.id);
            }
            this.sortables.set(sortable.id, sortable);
        }
        /**
         * Unregister function to be used by the contained MatSortables. Removes the MatSortable from the
         * collection of contained MatSortables.
         */
        deregister(sortable) {
            this.sortables.delete(sortable.id);
        }
        /** Sets the active sort id and determines the new sort direction. */
        sort(sortable) {
            if (this.active != sortable.id) {
                this.active = sortable.id;
                this.direction = sortable.start ? sortable.start : this.start;
            }
            else {
                this.direction = this.getNextSortDirection(sortable);
            }
            this.sortChange.emit({ active: this.active, direction: this.direction });
        }
        /** Returns the next sort direction of the active sortable, checking for potential overrides. */
        getNextSortDirection(sortable) {
            if (!sortable) {
                return '';
            }
            // Get the sort direction cycle with the potential sortable overrides.
            const disableClear = sortable.disableClear != null ? sortable.disableClear : this.disableClear;
            let sortDirectionCycle = getSortDirectionCycle(sortable.start || this.start, disableClear);
            // Get and return the next direction in the cycle
            let nextDirectionIndex = sortDirectionCycle.indexOf(this.direction) + 1;
            if (nextDirectionIndex >= sortDirectionCycle.length) {
                nextDirectionIndex = 0;
            }
            return sortDirectionCycle[nextDirectionIndex];
        }
        ngOnInit() {
            this._markInitialized();
        }
        ngOnChanges() {
            this._stateChanges.next();
        }
        ngOnDestroy() {
            this._stateChanges.complete();
        }
    }
MatSort.??fac = function MatSort_Factory(t) { return ??MatSort_BaseFactory(t || MatSort); };
MatSort.??dir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({ type: MatSort, selectors: [["", "matSort", ""]], hostAttrs: [1, "mat-sort"], inputs: { disabled: ["matSortDisabled", "disabled"], start: ["matSortStart", "start"], direction: ["matSortDirection", "direction"], disableClear: ["matSortDisableClear", "disableClear"], active: ["matSortActive", "active"] }, outputs: { sortChange: "matSortChange" }, exportAs: ["matSort"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["????NgOnChangesFeature"]] });
    MatSort.propDecorators = {
        active: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['matSortActive',] }],
        start: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['matSortStart',] }],
        direction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['matSortDirection',] }],
        disableClear: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['matSortDisableClear',] }],
        sortChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['matSortChange',] }]
    };
const ??MatSort_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](MatSort);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MatSort, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[matSort]',
                exportAs: 'matSort',
                host: { 'class': 'mat-sort' },
                inputs: ['disabled: matSortDisabled']
            }]
    }], null, { start: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matSortStart']
        }], sortChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['matSortChange']
        }], direction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matSortDirection']
        }], disableClear: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matSortDisableClear']
        }], active: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matSortActive']
        }] }); })();
    return MatSort;
})();
/** Returns the sort direction cycle to use given the provided parameters of order and clear. */
function getSortDirectionCycle(start, disableClear) {
    let sortOrder = ['asc', 'desc'];
    if (start == 'desc') {
        sortOrder.reverse();
    }
    if (!disableClear) {
        sortOrder.push('');
    }
    return sortOrder;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const SORT_ANIMATION_TRANSITION = _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["AnimationDurations"].ENTERING + ' ' +
    _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["AnimationCurves"].STANDARD_CURVE;
/**
 * Animations used by MatSort.
 * @docs-private
 */
const matSortAnimations = {
    /** Animation that moves the sort indicator. */
    indicator: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('indicator', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('active-asc, asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translateY(0px)' })),
        // 10px is the height of the sort indicator, minus the width of the pointers
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('active-desc, desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translateY(10px)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('active-asc <=> active-desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])(SORT_ANIMATION_TRANSITION))
    ]),
    /** Animation that rotates the left pointer of the indicator based on the sorting direction. */
    leftPointer: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('leftPointer', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('active-asc, asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'rotate(-45deg)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('active-desc, desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'rotate(45deg)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('active-asc <=> active-desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])(SORT_ANIMATION_TRANSITION))
    ]),
    /** Animation that rotates the right pointer of the indicator based on the sorting direction. */
    rightPointer: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('rightPointer', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('active-asc, asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'rotate(45deg)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('active-desc, desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'rotate(-45deg)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('active-asc <=> active-desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])(SORT_ANIMATION_TRANSITION))
    ]),
    /** Animation that controls the arrow opacity. */
    arrowOpacity: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('arrowOpacity', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('desc-to-active, asc-to-active, active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 1 })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('desc-to-hint, asc-to-hint, hint', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: .54 })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('hint-to-desc, active-to-desc, desc, hint-to-asc, active-to-asc, asc, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0 })),
        // Transition between all states except for immediate transitions
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('* => asc, * => desc, * => active, * => hint, * => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('0ms')),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('* <=> *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])(SORT_ANIMATION_TRANSITION)),
    ]),
    /**
     * Animation for the translation of the arrow as a whole. States are separated into two
     * groups: ones with animations and others that are immediate. Immediate states are asc, desc,
     * peek, and active. The other states define a specific animation (source-to-destination)
     * and are determined as a function of their prev user-perceived state and what the next state
     * should be.
     */
    arrowPosition: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('arrowPosition', [
        // Hidden Above => Hint Center
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('* => desc-to-hint, * => desc-to-active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])(SORT_ANIMATION_TRANSITION, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translateY(-25%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translateY(0)' })
        ]))),
        // Hint Center => Hidden Below
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('* => hint-to-desc, * => active-to-desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])(SORT_ANIMATION_TRANSITION, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translateY(0)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translateY(25%)' })
        ]))),
        // Hidden Below => Hint Center
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('* => asc-to-hint, * => asc-to-active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])(SORT_ANIMATION_TRANSITION, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translateY(25%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translateY(0)' })
        ]))),
        // Hint Center => Hidden Above
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('* => hint-to-asc, * => active-to-asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])(SORT_ANIMATION_TRANSITION, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translateY(0)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translateY(-25%)' })
        ]))),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('desc-to-hint, asc-to-hint, hint, desc-to-active, asc-to-active, active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translateY(0)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('hint-to-desc, active-to-desc, desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translateY(-25%)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('hint-to-asc, active-to-asc, asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translateY(25%)' })),
    ]),
    /** Necessary trigger that calls animate on children animations. */
    allowChildren: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('allowChildren', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('* <=> *', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["query"])('@*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animateChild"])(), { optional: true })
        ])
    ]),
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * To modify the labels and text displayed, create a new instance of MatSortHeaderIntl and
 * include it in a custom provider.
 */
let MatSortHeaderIntl = /** @class */ (() => {
    class MatSortHeaderIntl {
        constructor() {
            /**
             * Stream that emits whenever the labels here are changed. Use this to notify
             * components if the labels have changed after initialization.
             */
            this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
            /** ARIA label for the sorting button. */
            this.sortButtonLabel = (id) => {
                return `Change sorting for ${id}`;
            };
        }
    }
MatSortHeaderIntl.??fac = function MatSortHeaderIntl_Factory(t) { return new (t || MatSortHeaderIntl)(); };
    MatSortHeaderIntl.??prov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"])({ factory: function MatSortHeaderIntl_Factory() { return new MatSortHeaderIntl(); }, token: MatSortHeaderIntl, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MatSortHeaderIntl, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();
    return MatSortHeaderIntl;
})();
/** @docs-private */
function MAT_SORT_HEADER_INTL_PROVIDER_FACTORY(parentIntl) {
    return parentIntl || new MatSortHeaderIntl();
}
/** @docs-private */
const MAT_SORT_HEADER_INTL_PROVIDER = {
    // If there is already an MatSortHeaderIntl available, use that. Otherwise, provide a new one.
    provide: MatSortHeaderIntl,
    deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), MatSortHeaderIntl]],
    useFactory: MAT_SORT_HEADER_INTL_PROVIDER_FACTORY
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Boilerplate for applying mixins to the sort header.
/** @docs-private */
class MatSortHeaderBase {
}
const _MatSortHeaderMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisabled"])(MatSortHeaderBase);
/**
 * Applies sorting behavior (click to change sort) and styles to an element, including an
 * arrow to display the current sort direction.
 *
 * Must be provided with an id and contained within a parent MatSort directive.
 *
 * If used on header cells in a CdkTable, it will automatically default its id from its containing
 * column definition.
 */
let MatSortHeader = /** @class */ (() => {
    class MatSortHeader extends _MatSortHeaderMixinBase {
        constructor(_intl, changeDetectorRef, _sort, _columnDef, _focusMonitor, _elementRef) {
            // Note that we use a string token for the `_columnDef`, because the value is provided both by
            // `material/table` and `cdk/table` and we can't have the CDK depending on Material,
            // and we want to avoid having the sort header depending on the CDK table because
            // of this single reference.
            super();
            this._intl = _intl;
            this._sort = _sort;
            this._columnDef = _columnDef;
            this._focusMonitor = _focusMonitor;
            this._elementRef = _elementRef;
            /**
             * Flag set to true when the indicator should be displayed while the sort is not active. Used to
             * provide an affordance that the header is sortable by showing on focus and hover.
             */
            this._showIndicatorHint = false;
            /** The direction the arrow should be facing according to the current state. */
            this._arrowDirection = '';
            /**
             * Whether the view state animation should show the transition between the `from` and `to` states.
             */
            this._disableViewStateAnimation = false;
            /** Sets the position of the arrow that displays when sorted. */
            this.arrowPosition = 'after';
            if (!_sort) {
                throw getSortHeaderNotContainedWithinSortError();
            }
            this._rerenderSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(_sort.sortChange, _sort._stateChanges, _intl.changes)
                .subscribe(() => {
                if (this._isSorted()) {
                    this._updateArrowDirection();
                }
                // If this header was recently active and now no longer sorted, animate away the arrow.
                if (!this._isSorted() && this._viewState && this._viewState.toState === 'active') {
                    this._disableViewStateAnimation = false;
                    this._setAnimationTransitionState({ fromState: 'active', toState: this._arrowDirection });
                }
                changeDetectorRef.markForCheck();
            });
        }
        /** Overrides the disable clear value of the containing MatSort for this MatSortable. */
        get disableClear() { return this._disableClear; }
        set disableClear(v) { this._disableClear = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(v); }
        ngOnInit() {
            if (!this.id && this._columnDef) {
                this.id = this._columnDef.name;
            }
            // Initialize the direction of the arrow and set the view state to be immediately that state.
            this._updateArrowDirection();
            this._setAnimationTransitionState({ toState: this._isSorted() ? 'active' : this._arrowDirection });
            this._sort.register(this);
        }
        ngAfterViewInit() {
            // We use the focus monitor because we also want to style
            // things differently based on the focus origin.
            this._focusMonitor.monitor(this._elementRef, true)
                .subscribe(origin => this._setIndicatorHintVisible(!!origin));
        }
        ngOnDestroy() {
            this._focusMonitor.stopMonitoring(this._elementRef);
            this._sort.deregister(this);
            this._rerenderSubscription.unsubscribe();
        }
        /**
         * Sets the "hint" state such that the arrow will be semi-transparently displayed as a hint to the
         * user showing what the active sort will become. If set to false, the arrow will fade away.
         */
        _setIndicatorHintVisible(visible) {
            // No-op if the sort header is disabled - should not make the hint visible.
            if (this._isDisabled() && visible) {
                return;
            }
            this._showIndicatorHint = visible;
            if (!this._isSorted()) {
                this._updateArrowDirection();
                if (this._showIndicatorHint) {
                    this._setAnimationTransitionState({ fromState: this._arrowDirection, toState: 'hint' });
                }
                else {
                    this._setAnimationTransitionState({ fromState: 'hint', toState: this._arrowDirection });
                }
            }
        }
        /**
         * Sets the animation transition view state for the arrow's position and opacity. If the
         * `disableViewStateAnimation` flag is set to true, the `fromState` will be ignored so that
         * no animation appears.
         */
        _setAnimationTransitionState(viewState) {
            this._viewState = viewState;
            // If the animation for arrow position state (opacity/translation) should be disabled,
            // remove the fromState so that it jumps right to the toState.
            if (this._disableViewStateAnimation) {
                this._viewState = { toState: viewState.toState };
            }
        }
        /** Triggers the sort on this sort header and removes the indicator hint. */
        _handleClick() {
            if (this._isDisabled()) {
                return;
            }
            this._sort.sort(this);
            // Do not show the animation if the header was already shown in the right position.
            if (this._viewState.toState === 'hint' || this._viewState.toState === 'active') {
                this._disableViewStateAnimation = true;
            }
            // If the arrow is now sorted, animate the arrow into place. Otherwise, animate it away into
            // the direction it is facing.
            const viewState = this._isSorted() ?
                { fromState: this._arrowDirection, toState: 'active' } :
                { fromState: 'active', toState: this._arrowDirection };
            this._setAnimationTransitionState(viewState);
            this._showIndicatorHint = false;
        }
        /** Whether this MatSortHeader is currently sorted in either ascending or descending order. */
        _isSorted() {
            return this._sort.active == this.id &&
                (this._sort.direction === 'asc' || this._sort.direction === 'desc');
        }
        /** Returns the animation state for the arrow direction (indicator and pointers). */
        _getArrowDirectionState() {
            return `${this._isSorted() ? 'active-' : ''}${this._arrowDirection}`;
        }
        /** Returns the arrow position state (opacity, translation). */
        _getArrowViewState() {
            const fromState = this._viewState.fromState;
            return (fromState ? `${fromState}-to-` : '') + this._viewState.toState;
        }
        /**
         * Updates the direction the arrow should be pointing. If it is not sorted, the arrow should be
         * facing the start direction. Otherwise if it is sorted, the arrow should point in the currently
         * active sorted direction. The reason this is updated through a function is because the direction
         * should only be changed at specific times - when deactivated but the hint is displayed and when
         * the sort is active and the direction changes. Otherwise the arrow's direction should linger
         * in cases such as the sort becoming deactivated but we want to animate the arrow away while
         * preserving its direction, even though the next sort direction is actually different and should
         * only be changed once the arrow displays again (hint or activation).
         */
        _updateArrowDirection() {
            this._arrowDirection = this._isSorted() ?
                this._sort.direction :
                (this.start || this._sort.start);
        }
        _isDisabled() {
            return this._sort.disabled || this.disabled;
        }
        /**
         * Gets the aria-sort attribute that should be applied to this sort header. If this header
         * is not sorted, returns null so that the attribute is removed from the host element. Aria spec
         * says that the aria-sort property should only be present on one header at a time, so removing
         * ensures this is true.
         */
        _getAriaSortAttribute() {
            if (!this._isSorted()) {
                return null;
            }
            return this._sort.direction == 'asc' ? 'ascending' : 'descending';
        }
        /** Whether the arrow inside the sort header should be rendered. */
        _renderArrow() {
            return !this._isDisabled() || this._isSorted();
        }
    }
MatSortHeader.??fac = function MatSortHeader_Factory(t) { return new (t || MatSortHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](MatSortHeaderIntl), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](MatSort, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"]('MAT_SORT_HEADER_COLUMN_DEF', 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
MatSortHeader.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: MatSortHeader, selectors: [["", "mat-sort-header", ""]], hostAttrs: [1, "mat-sort-header"], hostVars: 3, hostBindings: function MatSortHeader_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MatSortHeader_click_HostBindingHandler() { return ctx._handleClick(); })("mouseenter", function MatSortHeader_mouseenter_HostBindingHandler() { return ctx._setIndicatorHintVisible(true); })("mouseleave", function MatSortHeader_mouseleave_HostBindingHandler() { return ctx._setIndicatorHintVisible(false); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("aria-sort", ctx._getAriaSortAttribute());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("mat-sort-header-disabled", ctx._isDisabled());
    } }, inputs: { disabled: "disabled", arrowPosition: "arrowPosition", disableClear: "disableClear", id: ["mat-sort-header", "id"], start: "start" }, exportAs: ["matSortHeader"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]], attrs: _c0, ngContentSelectors: _c1, decls: 4, vars: 7, consts: [[1, "mat-sort-header-container"], ["type", "button", 1, "mat-sort-header-button", "mat-focus-indicator"], ["class", "mat-sort-header-arrow", 4, "ngIf"], [1, "mat-sort-header-arrow"], [1, "mat-sort-header-stem"], [1, "mat-sort-header-indicator"], [1, "mat-sort-header-pointer-left"], [1, "mat-sort-header-pointer-right"], [1, "mat-sort-header-pointer-middle"]], template: function MatSortHeader_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????projectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????projection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, MatSortHeader_div_3_Template, 6, 6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("mat-sort-header-sorted", ctx._isSorted())("mat-sort-header-position-before", ctx.arrowPosition == "before");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("disabled", ctx._isDisabled() || null)("aria-label", ctx._intl.sortButtonLabel(ctx.id));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx._renderArrow());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: [".mat-sort-header-container{display:flex;cursor:pointer;align-items:center}.mat-sort-header-disabled .mat-sort-header-container{cursor:default}.mat-sort-header-position-before{flex-direction:row-reverse}.mat-sort-header-button{border:none;background:0 0;display:flex;align-items:center;padding:0;cursor:inherit;outline:0;font:inherit;color:currentColor}[mat-sort-header].cdk-keyboard-focused .mat-sort-header-button,[mat-sort-header].cdk-program-focused .mat-sort-header-button{border-bottom:solid 1px currentColor}.mat-sort-header-button::-moz-focus-inner{border:0}.mat-sort-header-arrow{height:12px;width:12px;min-width:12px;position:relative;display:flex;opacity:0}.mat-sort-header-arrow,[dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow{margin:0 0 0 6px}.mat-sort-header-position-before .mat-sort-header-arrow,[dir=rtl] .mat-sort-header-arrow{margin:0 6px 0 0}.mat-sort-header-stem{background:currentColor;height:10px;width:2px;margin:auto;display:flex;align-items:center}.cdk-high-contrast-active .mat-sort-header-stem{width:0;border-left:solid 2px}.mat-sort-header-indicator{width:100%;height:2px;display:flex;align-items:center;position:absolute;top:0;left:0}.mat-sort-header-pointer-middle{margin:auto;height:2px;width:2px;background:currentColor;transform:rotate(45deg)}.cdk-high-contrast-active .mat-sort-header-pointer-middle{width:0;height:0;border-top:solid 2px;border-left:solid 2px}.mat-sort-header-pointer-left,.mat-sort-header-pointer-right{background:currentColor;width:6px;height:2px;position:absolute;top:0}.cdk-high-contrast-active .mat-sort-header-pointer-left,.cdk-high-contrast-active .mat-sort-header-pointer-right{width:0;height:0;border-left:solid 6px;border-top:solid 2px}.mat-sort-header-pointer-left{transform-origin:right;left:0}.mat-sort-header-pointer-right{transform-origin:left;right:0}\n"], encapsulation: 2, data: { animation: [
            matSortAnimations.indicator,
            matSortAnimations.leftPointer,
            matSortAnimations.rightPointer,
            matSortAnimations.arrowOpacity,
            matSortAnimations.arrowPosition,
            matSortAnimations.allowChildren,
        ] }, changeDetection: 0 });
    MatSortHeader.ctorParameters = () => [
        { type: MatSortHeaderIntl },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: MatSort, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['MAT_SORT_HEADER_COLUMN_DEF',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
        { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ];
    MatSortHeader.propDecorators = {
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['mat-sort-header',] }],
        arrowPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        start: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        disableClear: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MatSortHeader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: '[mat-sort-header]',
                exportAs: 'matSortHeader',
                template: "<div class=\"mat-sort-header-container\"\n     [class.mat-sort-header-sorted]=\"_isSorted()\"\n     [class.mat-sort-header-position-before]=\"arrowPosition == 'before'\">\n  <button class=\"mat-sort-header-button mat-focus-indicator\" type=\"button\"\n          [attr.disabled]=\"_isDisabled() || null\"\n          [attr.aria-label]=\"_intl.sortButtonLabel(id)\">\n    <ng-content></ng-content>\n  </button>\n\n  <!-- Disable animations while a current animation is running -->\n  <div class=\"mat-sort-header-arrow\"\n       *ngIf=\"_renderArrow()\"\n       [@arrowOpacity]=\"_getArrowViewState()\"\n       [@arrowPosition]=\"_getArrowViewState()\"\n       [@allowChildren]=\"_getArrowDirectionState()\"\n       (@arrowPosition.start)=\"_disableViewStateAnimation = true\"\n       (@arrowPosition.done)=\"_disableViewStateAnimation = false\">\n    <div class=\"mat-sort-header-stem\"></div>\n    <div class=\"mat-sort-header-indicator\" [@indicator]=\"_getArrowDirectionState()\">\n      <div class=\"mat-sort-header-pointer-left\" [@leftPointer]=\"_getArrowDirectionState()\"></div>\n      <div class=\"mat-sort-header-pointer-right\" [@rightPointer]=\"_getArrowDirectionState()\"></div>\n      <div class=\"mat-sort-header-pointer-middle\"></div>\n    </div>\n  </div>\n</div>\n",
                host: {
                    'class': 'mat-sort-header',
                    '(click)': '_handleClick()',
                    '(mouseenter)': '_setIndicatorHintVisible(true)',
                    '(mouseleave)': '_setIndicatorHintVisible(false)',
                    '[attr.aria-sort]': '_getAriaSortAttribute()',
                    '[class.mat-sort-header-disabled]': '_isDisabled()'
                },
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                inputs: ['disabled'],
                animations: [
                    matSortAnimations.indicator,
                    matSortAnimations.leftPointer,
                    matSortAnimations.rightPointer,
                    matSortAnimations.arrowOpacity,
                    matSortAnimations.arrowPosition,
                    matSortAnimations.allowChildren,
                ],
                styles: [".mat-sort-header-container{display:flex;cursor:pointer;align-items:center}.mat-sort-header-disabled .mat-sort-header-container{cursor:default}.mat-sort-header-position-before{flex-direction:row-reverse}.mat-sort-header-button{border:none;background:0 0;display:flex;align-items:center;padding:0;cursor:inherit;outline:0;font:inherit;color:currentColor}[mat-sort-header].cdk-keyboard-focused .mat-sort-header-button,[mat-sort-header].cdk-program-focused .mat-sort-header-button{border-bottom:solid 1px currentColor}.mat-sort-header-button::-moz-focus-inner{border:0}.mat-sort-header-arrow{height:12px;width:12px;min-width:12px;position:relative;display:flex;opacity:0}.mat-sort-header-arrow,[dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow{margin:0 0 0 6px}.mat-sort-header-position-before .mat-sort-header-arrow,[dir=rtl] .mat-sort-header-arrow{margin:0 6px 0 0}.mat-sort-header-stem{background:currentColor;height:10px;width:2px;margin:auto;display:flex;align-items:center}.cdk-high-contrast-active .mat-sort-header-stem{width:0;border-left:solid 2px}.mat-sort-header-indicator{width:100%;height:2px;display:flex;align-items:center;position:absolute;top:0;left:0}.mat-sort-header-pointer-middle{margin:auto;height:2px;width:2px;background:currentColor;transform:rotate(45deg)}.cdk-high-contrast-active .mat-sort-header-pointer-middle{width:0;height:0;border-top:solid 2px;border-left:solid 2px}.mat-sort-header-pointer-left,.mat-sort-header-pointer-right{background:currentColor;width:6px;height:2px;position:absolute;top:0}.cdk-high-contrast-active .mat-sort-header-pointer-left,.cdk-high-contrast-active .mat-sort-header-pointer-right{width:0;height:0;border-left:solid 6px;border-top:solid 2px}.mat-sort-header-pointer-left{transform-origin:right;left:0}.mat-sort-header-pointer-right{transform-origin:left;right:0}\n"]
            }]
    }], function () { return [{ type: MatSortHeaderIntl }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: MatSort, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: ['MAT_SORT_HEADER_COLUMN_DEF']
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { arrowPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disableClear: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['mat-sort-header']
        }], start: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
    return MatSortHeader;
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
let MatSortModule = /** @class */ (() => {
    class MatSortModule {
    }
MatSortModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: MatSortModule });
MatSortModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function MatSortModule_Factory(t) { return new (t || MatSortModule)(); }, providers: [MAT_SORT_HEADER_INTL_PROVIDER], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](MatSortModule, { declarations: function () { return [MatSort, MatSortHeader]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"]]; }, exports: function () { return [MatSort, MatSortHeader]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MatSortModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"]],
                exports: [MatSort, MatSortHeader],
                declarations: [MatSort, MatSortHeader],
                providers: [MAT_SORT_HEADER_INTL_PROVIDER]
            }]
    }], null, null); })();
    return MatSortModule;
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

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



//# sourceMappingURL=sort.js.map

/***/ }),

/***/ "./src/@vex/components/page-layout/page-layout-content.directive.ts":
/*!**************************************************************************!*\
  !*** ./src/@vex/components/page-layout/page-layout-content.directive.ts ***!
  \**************************************************************************/
/*! exports provided: PageLayoutContentDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLayoutContentDirective", function() { return PageLayoutContentDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PageLayoutContentDirective {
    constructor() { }
}
PageLayoutContentDirective.??fac = function PageLayoutContentDirective_Factory(t) { return new (t || PageLayoutContentDirective)(); };
PageLayoutContentDirective.??dir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({ type: PageLayoutContentDirective, selectors: [["", "vexPageLayoutContent", ""], ["vex-page-layout-content"]], hostAttrs: [1, "vex-page-layout-content"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PageLayoutContentDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[vexPageLayoutContent],vex-page-layout-content',
                host: {
                    class: 'vex-page-layout-content'
                }
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=default~dashboard-analytics-dashboard-analytics-module~ingresos-informes-informes-routing-module~ing~a1d57424-es2015.js.map