(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~ingresos-ingresos-mensuales-ingresos-mensuales-module~pages-auth-login-login-module~usuarios~416e4124"],{

/***/ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js ***!
  \**************************************************************************/
/*! exports provided: MAT_CHECKBOX_CLICK_ACTION, MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR, MAT_CHECKBOX_DEFAULT_OPTIONS, MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY, MAT_CHECKBOX_REQUIRED_VALIDATOR, MatCheckbox, MatCheckboxChange, MatCheckboxModule, MatCheckboxRequiredValidator, _MatCheckboxRequiredValidatorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_CHECKBOX_CLICK_ACTION", function() { return MAT_CHECKBOX_CLICK_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR", function() { return MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_CHECKBOX_DEFAULT_OPTIONS", function() { return MAT_CHECKBOX_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY", function() { return MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_CHECKBOX_REQUIRED_VALIDATOR", function() { return MAT_CHECKBOX_REQUIRED_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCheckbox", function() { return MatCheckbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCheckboxChange", function() { return MatCheckboxChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCheckboxModule", function() { return MatCheckboxModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCheckboxRequiredValidator", function() { return MatCheckboxRequiredValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatCheckboxRequiredValidatorModule", function() { return _MatCheckboxRequiredValidatorModule; });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/fesm2015/coercion.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/observers */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/observers.js");








/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Injection token to be used to override the default options for `mat-checkbox`. */





const _c0 = ["input"];
const _c1 = function () { return { enterDuration: 150 }; };
const _c2 = ["*"];
const MAT_CHECKBOX_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('mat-checkbox-default-options', {
    providedIn: 'root',
    factory: MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY
});
/** @docs-private */
function MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY() {
    return {
        color: 'accent',
        clickAction: 'check-indeterminate',
    };
}
/**
 * Injection token that can be used to specify the checkbox click behavior.
 * @deprecated Injection token will be removed, use `MAT_CHECKBOX_DEFAULT_OPTIONS` instead.
 * @breaking-change 10.0.0
 */
const MAT_CHECKBOX_CLICK_ACTION = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('mat-checkbox-click-action');

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Increasing integer for generating unique ids for checkbox components.
let nextUniqueId = 0;
/**
 * Provider Expression that allows mat-checkbox to register as a ControlValueAccessor.
 * This allows it to support [(ngModel)].
 * @docs-private
 */
const MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(() => MatCheckbox),
    multi: true
};
/** Change event object emitted by MatCheckbox. */
class MatCheckboxChange {
}
// Boilerplate for applying mixins to MatCheckbox.
/** @docs-private */
class MatCheckboxBase {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
}
const _MatCheckboxMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["mixinDisableRipple"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["mixinDisabled"])(MatCheckboxBase))));
/**
 * A material design checkbox component. Supports all of the functionality of an HTML5 checkbox,
 * and exposes a similar API. A MatCheckbox can be either checked, unchecked, indeterminate, or
 * disabled. Note that all additional accessibility attributes are taken care of by the component,
 * so there is no need to provide them yourself. However, if you want to omit a label and still
 * have the checkbox be accessible, you may supply an [aria-label] input.
 * See: https://material.io/design/components/selection-controls.html
 */
let MatCheckbox = /** @class */ (() => {
    class MatCheckbox extends _MatCheckboxMixinBase {
        constructor(elementRef, _changeDetectorRef, _focusMonitor, _ngZone, tabIndex, 
        /**
         * @deprecated `_clickAction` parameter to be removed, use
         * `MAT_CHECKBOX_DEFAULT_OPTIONS`
         * @breaking-change 10.0.0
         */
        _clickAction, _animationMode, _options) {
            super(elementRef);
            this._changeDetectorRef = _changeDetectorRef;
            this._focusMonitor = _focusMonitor;
            this._ngZone = _ngZone;
            this._clickAction = _clickAction;
            this._animationMode = _animationMode;
            this._options = _options;
            /**
             * Attached to the aria-label attribute of the host element. In most cases, aria-labelledby will
             * take precedence so this may be omitted.
             */
            this.ariaLabel = '';
            /**
             * Users can specify the `aria-labelledby` attribute which will be forwarded to the input element
             */
            this.ariaLabelledby = null;
            this._uniqueId = `mat-checkbox-${++nextUniqueId}`;
            /** A unique id for the checkbox input. If none is supplied, it will be auto-generated. */
            this.id = this._uniqueId;
            /** Whether the label should appear after or before the checkbox. Defaults to 'after' */
            this.labelPosition = 'after';
            /** Name value will be applied to the input element if present */
            this.name = null;
            /** Event emitted when the checkbox's `checked` value changes. */
            this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
            /** Event emitted when the checkbox's `indeterminate` value changes. */
            this.indeterminateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
            /**
             * Called when the checkbox is blurred. Needed to properly implement ControlValueAccessor.
             * @docs-private
             */
            this._onTouched = () => { };
            this._currentAnimationClass = '';
            this._currentCheckState = 0 /* Init */;
            this._controlValueAccessorChangeFn = () => { };
            this._checked = false;
            this._disabled = false;
            this._indeterminate = false;
            this._options = this._options || {};
            if (this._options.color) {
                this.color = this._options.color;
            }
            this.tabIndex = parseInt(tabIndex) || 0;
            // TODO: Remove this after the `_clickAction` parameter is removed as an injection parameter.
            this._clickAction = this._clickAction || this._options.clickAction;
        }
        /** Returns the unique id for the visual hidden input. */
        get inputId() { return `${this.id || this._uniqueId}-input`; }
        /** Whether the checkbox is required. */
        get required() { return this._required; }
        set required(value) { this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value); }
        ngAfterViewInit() {
            this._focusMonitor.monitor(this._elementRef, true).subscribe(focusOrigin => {
                if (!focusOrigin) {
                    // When a focused element becomes disabled, the browser *immediately* fires a blur event.
                    // Angular does not expect events to be raised during change detection, so any state change
                    // (such as a form control's 'ng-touched') will cause a changed-after-checked error.
                    // See https://github.com/angular/angular/issues/17793. To work around this, we defer
                    // telling the form control it has been touched until the next tick.
                    Promise.resolve().then(() => {
                        this._onTouched();
                        this._changeDetectorRef.markForCheck();
                    });
                }
            });
            this._syncIndeterminate(this._indeterminate);
        }
        // TODO: Delete next major revision.
        ngAfterViewChecked() { }
        ngOnDestroy() {
            this._focusMonitor.stopMonitoring(this._elementRef);
        }
        /**
         * Whether the checkbox is checked.
         */
        get checked() { return this._checked; }
        set checked(value) {
            if (value != this.checked) {
                this._checked = value;
                this._changeDetectorRef.markForCheck();
            }
        }
        /**
         * Whether the checkbox is disabled. This fully overrides the implementation provided by
         * mixinDisabled, but the mixin is still required because mixinTabIndex requires it.
         */
        get disabled() { return this._disabled; }
        set disabled(value) {
            const newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
            if (newValue !== this.disabled) {
                this._disabled = newValue;
                this._changeDetectorRef.markForCheck();
            }
        }
        /**
         * Whether the checkbox is indeterminate. This is also known as "mixed" mode and can be used to
         * represent a checkbox with three states, e.g. a checkbox that represents a nested list of
         * checkable items. Note that whenever checkbox is manually clicked, indeterminate is immediately
         * set to false.
         */
        get indeterminate() { return this._indeterminate; }
        set indeterminate(value) {
            const changed = value != this._indeterminate;
            this._indeterminate = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
            if (changed) {
                if (this._indeterminate) {
                    this._transitionCheckState(3 /* Indeterminate */);
                }
                else {
                    this._transitionCheckState(this.checked ? 1 /* Checked */ : 2 /* Unchecked */);
                }
                this.indeterminateChange.emit(this._indeterminate);
            }
            this._syncIndeterminate(this._indeterminate);
        }
        _isRippleDisabled() {
            return this.disableRipple || this.disabled;
        }
        /** Method being called whenever the label text changes. */
        _onLabelTextChange() {
            // Since the event of the `cdkObserveContent` directive runs outside of the zone, the checkbox
            // component will be only marked for check, but no actual change detection runs automatically.
            // Instead of going back into the zone in order to trigger a change detection which causes
            // *all* components to be checked (if explicitly marked or not using OnPush), we only trigger
            // an explicit change detection for the checkbox view and its children.
            this._changeDetectorRef.detectChanges();
        }
        // Implemented as part of ControlValueAccessor.
        writeValue(value) {
            this.checked = !!value;
        }
        // Implemented as part of ControlValueAccessor.
        registerOnChange(fn) {
            this._controlValueAccessorChangeFn = fn;
        }
        // Implemented as part of ControlValueAccessor.
        registerOnTouched(fn) {
            this._onTouched = fn;
        }
        // Implemented as part of ControlValueAccessor.
        setDisabledState(isDisabled) {
            this.disabled = isDisabled;
        }
        _getAriaChecked() {
            if (this.checked) {
                return 'true';
            }
            return this.indeterminate ? 'mixed' : 'false';
        }
        _transitionCheckState(newState) {
            let oldState = this._currentCheckState;
            let element = this._elementRef.nativeElement;
            if (oldState === newState) {
                return;
            }
            if (this._currentAnimationClass.length > 0) {
                element.classList.remove(this._currentAnimationClass);
            }
            this._currentAnimationClass = this._getAnimationClassForCheckStateTransition(oldState, newState);
            this._currentCheckState = newState;
            if (this._currentAnimationClass.length > 0) {
                element.classList.add(this._currentAnimationClass);
                // Remove the animation class to avoid animation when the checkbox is moved between containers
                const animationClass = this._currentAnimationClass;
                this._ngZone.runOutsideAngular(() => {
                    setTimeout(() => {
                        element.classList.remove(animationClass);
                    }, 1000);
                });
            }
        }
        _emitChangeEvent() {
            const event = new MatCheckboxChange();
            event.source = this;
            event.checked = this.checked;
            this._controlValueAccessorChangeFn(this.checked);
            this.change.emit(event);
        }
        /** Toggles the `checked` state of the checkbox. */
        toggle() {
            this.checked = !this.checked;
        }
        /**
         * Event handler for checkbox input element.
         * Toggles checked state if element is not disabled.
         * Do not toggle on (change) event since IE doesn't fire change event when
         *   indeterminate checkbox is clicked.
         * @param event
         */
        _onInputClick(event) {
            // We have to stop propagation for click events on the visual hidden input element.
            // By default, when a user clicks on a label element, a generated click event will be
            // dispatched on the associated input element. Since we are using a label element as our
            // root container, the click event on the `checkbox` will be executed twice.
            // The real click event will bubble up, and the generated click event also tries to bubble up.
            // This will lead to multiple click events.
            // Preventing bubbling for the second event will solve that issue.
            event.stopPropagation();
            // If resetIndeterminate is false, and the current state is indeterminate, do nothing on click
            if (!this.disabled && this._clickAction !== 'noop') {
                // When user manually click on the checkbox, `indeterminate` is set to false.
                if (this.indeterminate && this._clickAction !== 'check') {
                    Promise.resolve().then(() => {
                        this._indeterminate = false;
                        this.indeterminateChange.emit(this._indeterminate);
                    });
                }
                this.toggle();
                this._transitionCheckState(this._checked ? 1 /* Checked */ : 2 /* Unchecked */);
                // Emit our custom change event if the native input emitted one.
                // It is important to only emit it, if the native input triggered one, because
                // we don't want to trigger a change event, when the `checked` variable changes for example.
                this._emitChangeEvent();
            }
            else if (!this.disabled && this._clickAction === 'noop') {
                // Reset native input when clicked with noop. The native checkbox becomes checked after
                // click, reset it to be align with `checked` value of `mat-checkbox`.
                this._inputElement.nativeElement.checked = this.checked;
                this._inputElement.nativeElement.indeterminate = this.indeterminate;
            }
        }
        /** Focuses the checkbox. */
        focus(origin = 'keyboard', options) {
            this._focusMonitor.focusVia(this._inputElement, origin, options);
        }
        _onInteractionEvent(event) {
            // We always have to stop propagation on the change event.
            // Otherwise the change event, from the input element, will bubble up and
            // emit its event object to the `change` output.
            event.stopPropagation();
        }
        _getAnimationClassForCheckStateTransition(oldState, newState) {
            // Don't transition if animations are disabled.
            if (this._animationMode === 'NoopAnimations') {
                return '';
            }
            let animSuffix = '';
            switch (oldState) {
                case 0 /* Init */:
                    // Handle edge case where user interacts with checkbox that does not have [(ngModel)] or
                    // [checked] bound to it.
                    if (newState === 1 /* Checked */) {
                        animSuffix = 'unchecked-checked';
                    }
                    else if (newState == 3 /* Indeterminate */) {
                        animSuffix = 'unchecked-indeterminate';
                    }
                    else {
                        return '';
                    }
                    break;
                case 2 /* Unchecked */:
                    animSuffix = newState === 1 /* Checked */ ?
                        'unchecked-checked' : 'unchecked-indeterminate';
                    break;
                case 1 /* Checked */:
                    animSuffix = newState === 2 /* Unchecked */ ?
                        'checked-unchecked' : 'checked-indeterminate';
                    break;
                case 3 /* Indeterminate */:
                    animSuffix = newState === 1 /* Checked */ ?
                        'indeterminate-checked' : 'indeterminate-unchecked';
                    break;
            }
            return `mat-checkbox-anim-${animSuffix}`;
        }
        /**
         * Syncs the indeterminate value with the checkbox DOM node.
         *
         * We sync `indeterminate` directly on the DOM node, because in Ivy the check for whether a
         * property is supported on an element boils down to `if (propName in element)`. Domino's
         * HTMLInputElement doesn't have an `indeterminate` property so Ivy will warn during
         * server-side rendering.
         */
        _syncIndeterminate(value) {
            const nativeCheckbox = this._inputElement;
            if (nativeCheckbox) {
                nativeCheckbox.nativeElement.indeterminate = value;
            }
        }
    }
MatCheckbox.ɵfac = function MatCheckbox_Factory(t) { return new (t || MatCheckbox)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MAT_CHECKBOX_CLICK_ACTION, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MAT_CHECKBOX_DEFAULT_OPTIONS, 8)); };
MatCheckbox.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MatCheckbox, selectors: [["mat-checkbox"]], viewQuery: function MatCheckbox_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRipple"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._inputElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.ripple = _t.first);
    } }, hostAttrs: [1, "mat-checkbox"], hostVars: 12, hostBindings: function MatCheckbox_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵhostProperty"]("id", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("tabindex", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mat-checkbox-indeterminate", ctx.indeterminate)("mat-checkbox-checked", ctx.checked)("mat-checkbox-disabled", ctx.disabled)("mat-checkbox-label-before", ctx.labelPosition == "before")("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
    } }, inputs: { disableRipple: "disableRipple", color: "color", tabIndex: "tabIndex", ariaLabel: ["aria-label", "ariaLabel"], ariaLabelledby: ["aria-labelledby", "ariaLabelledby"], id: "id", labelPosition: "labelPosition", name: "name", required: "required", checked: "checked", disabled: "disabled", indeterminate: "indeterminate", ariaDescribedby: ["aria-describedby", "ariaDescribedby"], value: "value" }, outputs: { change: "change", indeterminateChange: "indeterminateChange" }, exportAs: ["matCheckbox"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c2, decls: 17, vars: 20, consts: [[1, "mat-checkbox-layout"], ["label", ""], [1, "mat-checkbox-inner-container"], ["type", "checkbox", 1, "mat-checkbox-input", "cdk-visually-hidden", 3, "id", "required", "checked", "disabled", "tabIndex", "change", "click"], ["input", ""], ["matRipple", "", 1, "mat-checkbox-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleRadius", "matRippleCentered", "matRippleAnimation"], [1, "mat-ripple-element", "mat-checkbox-persistent-ripple"], [1, "mat-checkbox-frame"], [1, "mat-checkbox-background"], ["version", "1.1", "focusable", "false", "viewBox", "0 0 24 24", 0, "xml", "space", "preserve", 1, "mat-checkbox-checkmark"], ["fill", "none", "stroke", "white", "d", "M4.1,12.7 9,17.6 20.3,6.3", 1, "mat-checkbox-checkmark-path"], [1, "mat-checkbox-mixedmark"], [1, "mat-checkbox-label", 3, "cdkObserveContent"], ["checkboxLabel", ""], [2, "display", "none"]], template: function MatCheckbox_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function MatCheckbox_Template_input_change_3_listener($event) { return ctx._onInteractionEvent($event); })("click", function MatCheckbox_Template_input_click_3_listener($event) { return ctx._onInputClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("cdkObserveContent", function MatCheckbox_Template_span_cdkObserveContent_12_listener() { return ctx._onLabelTextChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("for", ctx.inputId);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mat-checkbox-inner-container-no-side-margin", !_r2.textContent || !_r2.textContent.trim());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx.inputId)("required", ctx.required)("checked", ctx.checked)("disabled", ctx.disabled)("tabIndex", ctx.tabIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("value", ctx.value)("name", ctx.name)("aria-label", ctx.ariaLabel || null)("aria-labelledby", ctx.ariaLabelledby)("aria-checked", ctx._getAriaChecked())("aria-describedby", ctx.ariaDescribedby);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRippleTrigger", _r0)("matRippleDisabled", ctx._isRippleDisabled())("matRippleRadius", 20)("matRippleCentered", true)("matRippleAnimation", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](19, _c1));
    } }, directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRipple"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__["CdkObserveContent"]], styles: ["@keyframes mat-checkbox-fade-in-background{0%{opacity:0}50%{opacity:1}}@keyframes mat-checkbox-fade-out-background{0%,50%{opacity:1}100%{opacity:0}}@keyframes mat-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:22.910259}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1)}100%{stroke-dashoffset:0}}@keyframes mat-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mat-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);stroke-dashoffset:0}to{stroke-dashoffset:-22.910259}}@keyframes mat-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(45deg)}}@keyframes mat-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:0;transform:rotate(45deg)}to{opacity:1;transform:rotate(360deg)}}@keyframes mat-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:0;transform:rotate(-45deg)}to{opacity:1;transform:rotate(0deg)}}@keyframes mat-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(315deg)}}@keyframes mat-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;opacity:1;transform:scaleX(1)}32.8%,100%{opacity:0;transform:scaleX(0)}}.mat-checkbox-background,.mat-checkbox-frame{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:2px;box-sizing:border-box;pointer-events:none}.mat-checkbox{transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);cursor:pointer;-webkit-tap-highlight-color:transparent}._mat-animation-noopable.mat-checkbox{transition:none;animation:none}.mat-checkbox .mat-ripple-element:not(.mat-checkbox-persistent-ripple){opacity:.16}.mat-checkbox-layout{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:inherit;align-items:baseline;vertical-align:middle;display:inline-flex;white-space:nowrap}.mat-checkbox-label{-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto}.mat-checkbox-inner-container{display:inline-block;height:16px;line-height:0;margin:auto;margin-right:8px;order:0;position:relative;vertical-align:middle;white-space:nowrap;width:16px;flex-shrink:0}[dir=rtl] .mat-checkbox-inner-container{margin-left:8px;margin-right:auto}.mat-checkbox-inner-container-no-side-margin{margin-left:0;margin-right:0}.mat-checkbox-frame{background-color:transparent;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1);border-width:2px;border-style:solid}._mat-animation-noopable .mat-checkbox-frame{transition:none}.cdk-high-contrast-active .mat-checkbox.cdk-keyboard-focused .mat-checkbox-frame{border-style:dotted}.mat-checkbox-background{align-items:center;display:inline-flex;justify-content:center;transition:background-color 90ms cubic-bezier(0, 0, 0.2, 0.1),opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}._mat-animation-noopable .mat-checkbox-background{transition:none}.cdk-high-contrast-active .mat-checkbox .mat-checkbox-background{background:none}.mat-checkbox-persistent-ripple{width:100%;height:100%;transform:none}.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:.04}.mat-checkbox.cdk-keyboard-focused .mat-checkbox-persistent-ripple{opacity:.12}.mat-checkbox-persistent-ripple,.mat-checkbox.mat-checkbox-disabled .mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:0}@media(hover: none){.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{display:none}}.mat-checkbox-checkmark{top:0;left:0;right:0;bottom:0;position:absolute;width:100%}.mat-checkbox-checkmark-path{stroke-dashoffset:22.910259;stroke-dasharray:22.910259;stroke-width:2.1333333333px}.cdk-high-contrast-black-on-white .mat-checkbox-checkmark-path{stroke:#000 !important}.mat-checkbox-mixedmark{width:calc(100% - 6px);height:2px;opacity:0;transform:scaleX(0) rotate(0deg);border-radius:2px}.cdk-high-contrast-active .mat-checkbox-mixedmark{height:0;border-top:solid 2px;margin-top:2px}.mat-checkbox-label-before .mat-checkbox-inner-container{order:1;margin-left:8px;margin-right:auto}[dir=rtl] .mat-checkbox-label-before .mat-checkbox-inner-container{margin-left:auto;margin-right:8px}.mat-checkbox-checked .mat-checkbox-checkmark{opacity:1}.mat-checkbox-checked .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-checked .mat-checkbox-mixedmark{transform:scaleX(1) rotate(-45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark{opacity:0;transform:rotate(45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-indeterminate .mat-checkbox-mixedmark{opacity:1;transform:scaleX(1) rotate(0deg)}.mat-checkbox-unchecked .mat-checkbox-background{background-color:transparent}.mat-checkbox-disabled{cursor:default}.cdk-high-contrast-active .mat-checkbox-disabled{opacity:.5}.mat-checkbox-anim-unchecked-checked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-checked .mat-checkbox-checkmark-path{animation:180ms linear 0ms mat-checkbox-unchecked-checked-checkmark-path}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-unchecked-indeterminate-mixedmark}.mat-checkbox-anim-checked-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-checked-unchecked .mat-checkbox-checkmark-path{animation:90ms linear 0ms mat-checkbox-checked-unchecked-checkmark-path}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-checkmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-checkmark}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-mixedmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-checkmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-checkmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-mixedmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-mixedmark}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-mixedmark{animation:300ms linear 0ms mat-checkbox-indeterminate-unchecked-mixedmark}.mat-checkbox-input{bottom:0;left:50%}.mat-checkbox .mat-checkbox-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}\n"], encapsulation: 2, changeDetection: 0 });
    MatCheckbox.ctorParameters = () => [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Attribute"], args: ['tabindex',] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [MAT_CHECKBOX_CLICK_ACTION,] }] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"],] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [MAT_CHECKBOX_DEFAULT_OPTIONS,] }] }
    ];
    MatCheckbox.propDecorators = {
        ariaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['aria-label',] }],
        ariaLabelledby: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['aria-labelledby',] }],
        ariaDescribedby: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['aria-describedby',] }],
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        labelPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        indeterminateChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        _inputElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['input',] }],
        ripple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRipple"],] }],
        checked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        indeterminate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
    };
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatCheckbox, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'mat-checkbox',
                template: "<label [attr.for]=\"inputId\" class=\"mat-checkbox-layout\" #label>\n  <div class=\"mat-checkbox-inner-container\"\n       [class.mat-checkbox-inner-container-no-side-margin]=\"!checkboxLabel.textContent || !checkboxLabel.textContent.trim()\">\n    <input #input\n           class=\"mat-checkbox-input cdk-visually-hidden\" type=\"checkbox\"\n           [id]=\"inputId\"\n           [required]=\"required\"\n           [checked]=\"checked\"\n           [attr.value]=\"value\"\n           [disabled]=\"disabled\"\n           [attr.name]=\"name\"\n           [tabIndex]=\"tabIndex\"\n           [attr.aria-label]=\"ariaLabel || null\"\n           [attr.aria-labelledby]=\"ariaLabelledby\"\n           [attr.aria-checked]=\"_getAriaChecked()\"\n           [attr.aria-describedby]=\"ariaDescribedby\"\n           (change)=\"_onInteractionEvent($event)\"\n           (click)=\"_onInputClick($event)\">\n    <div matRipple class=\"mat-checkbox-ripple mat-focus-indicator\"\n         [matRippleTrigger]=\"label\"\n         [matRippleDisabled]=\"_isRippleDisabled()\"\n         [matRippleRadius]=\"20\"\n         [matRippleCentered]=\"true\"\n         [matRippleAnimation]=\"{enterDuration: 150}\">\n      <div class=\"mat-ripple-element mat-checkbox-persistent-ripple\"></div>\n    </div>\n    <div class=\"mat-checkbox-frame\"></div>\n    <div class=\"mat-checkbox-background\">\n      <svg version=\"1.1\"\n           focusable=\"false\"\n           class=\"mat-checkbox-checkmark\"\n           viewBox=\"0 0 24 24\"\n           xml:space=\"preserve\">\n        <path class=\"mat-checkbox-checkmark-path\"\n              fill=\"none\"\n              stroke=\"white\"\n              d=\"M4.1,12.7 9,17.6 20.3,6.3\"/>\n      </svg>\n      <!-- Element for rendering the indeterminate state checkbox. -->\n      <div class=\"mat-checkbox-mixedmark\"></div>\n    </div>\n  </div>\n  <span class=\"mat-checkbox-label\" #checkboxLabel (cdkObserveContent)=\"_onLabelTextChange()\">\n    <!-- Add an invisible span so JAWS can read the label -->\n    <span style=\"display:none\">&nbsp;</span>\n    <ng-content></ng-content>\n  </span>\n</label>\n",
                exportAs: 'matCheckbox',
                host: {
                    'class': 'mat-checkbox',
                    '[id]': 'id',
                    '[attr.tabindex]': 'null',
                    '[class.mat-checkbox-indeterminate]': 'indeterminate',
                    '[class.mat-checkbox-checked]': 'checked',
                    '[class.mat-checkbox-disabled]': 'disabled',
                    '[class.mat-checkbox-label-before]': 'labelPosition == "before"',
                    '[class._mat-animation-noopable]': `_animationMode === 'NoopAnimations'`
                },
                providers: [MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR],
                inputs: ['disableRipple', 'color', 'tabIndex'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                styles: ["@keyframes mat-checkbox-fade-in-background{0%{opacity:0}50%{opacity:1}}@keyframes mat-checkbox-fade-out-background{0%,50%{opacity:1}100%{opacity:0}}@keyframes mat-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:22.910259}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1)}100%{stroke-dashoffset:0}}@keyframes mat-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mat-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);stroke-dashoffset:0}to{stroke-dashoffset:-22.910259}}@keyframes mat-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(45deg)}}@keyframes mat-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:0;transform:rotate(45deg)}to{opacity:1;transform:rotate(360deg)}}@keyframes mat-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:0;transform:rotate(-45deg)}to{opacity:1;transform:rotate(0deg)}}@keyframes mat-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(315deg)}}@keyframes mat-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;opacity:1;transform:scaleX(1)}32.8%,100%{opacity:0;transform:scaleX(0)}}.mat-checkbox-background,.mat-checkbox-frame{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:2px;box-sizing:border-box;pointer-events:none}.mat-checkbox{transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);cursor:pointer;-webkit-tap-highlight-color:transparent}._mat-animation-noopable.mat-checkbox{transition:none;animation:none}.mat-checkbox .mat-ripple-element:not(.mat-checkbox-persistent-ripple){opacity:.16}.mat-checkbox-layout{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:inherit;align-items:baseline;vertical-align:middle;display:inline-flex;white-space:nowrap}.mat-checkbox-label{-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto}.mat-checkbox-inner-container{display:inline-block;height:16px;line-height:0;margin:auto;margin-right:8px;order:0;position:relative;vertical-align:middle;white-space:nowrap;width:16px;flex-shrink:0}[dir=rtl] .mat-checkbox-inner-container{margin-left:8px;margin-right:auto}.mat-checkbox-inner-container-no-side-margin{margin-left:0;margin-right:0}.mat-checkbox-frame{background-color:transparent;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1);border-width:2px;border-style:solid}._mat-animation-noopable .mat-checkbox-frame{transition:none}.cdk-high-contrast-active .mat-checkbox.cdk-keyboard-focused .mat-checkbox-frame{border-style:dotted}.mat-checkbox-background{align-items:center;display:inline-flex;justify-content:center;transition:background-color 90ms cubic-bezier(0, 0, 0.2, 0.1),opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}._mat-animation-noopable .mat-checkbox-background{transition:none}.cdk-high-contrast-active .mat-checkbox .mat-checkbox-background{background:none}.mat-checkbox-persistent-ripple{width:100%;height:100%;transform:none}.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:.04}.mat-checkbox.cdk-keyboard-focused .mat-checkbox-persistent-ripple{opacity:.12}.mat-checkbox-persistent-ripple,.mat-checkbox.mat-checkbox-disabled .mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:0}@media(hover: none){.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{display:none}}.mat-checkbox-checkmark{top:0;left:0;right:0;bottom:0;position:absolute;width:100%}.mat-checkbox-checkmark-path{stroke-dashoffset:22.910259;stroke-dasharray:22.910259;stroke-width:2.1333333333px}.cdk-high-contrast-black-on-white .mat-checkbox-checkmark-path{stroke:#000 !important}.mat-checkbox-mixedmark{width:calc(100% - 6px);height:2px;opacity:0;transform:scaleX(0) rotate(0deg);border-radius:2px}.cdk-high-contrast-active .mat-checkbox-mixedmark{height:0;border-top:solid 2px;margin-top:2px}.mat-checkbox-label-before .mat-checkbox-inner-container{order:1;margin-left:8px;margin-right:auto}[dir=rtl] .mat-checkbox-label-before .mat-checkbox-inner-container{margin-left:auto;margin-right:8px}.mat-checkbox-checked .mat-checkbox-checkmark{opacity:1}.mat-checkbox-checked .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-checked .mat-checkbox-mixedmark{transform:scaleX(1) rotate(-45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark{opacity:0;transform:rotate(45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-indeterminate .mat-checkbox-mixedmark{opacity:1;transform:scaleX(1) rotate(0deg)}.mat-checkbox-unchecked .mat-checkbox-background{background-color:transparent}.mat-checkbox-disabled{cursor:default}.cdk-high-contrast-active .mat-checkbox-disabled{opacity:.5}.mat-checkbox-anim-unchecked-checked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-checked .mat-checkbox-checkmark-path{animation:180ms linear 0ms mat-checkbox-unchecked-checked-checkmark-path}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-unchecked-indeterminate-mixedmark}.mat-checkbox-anim-checked-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-checked-unchecked .mat-checkbox-checkmark-path{animation:90ms linear 0ms mat-checkbox-checked-unchecked-checkmark-path}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-checkmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-checkmark}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-mixedmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-checkmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-checkmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-mixedmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-mixedmark}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-mixedmark{animation:300ms linear 0ms mat-checkbox-indeterminate-unchecked-mixedmark}.mat-checkbox-input{bottom:0;left:50%}.mat-checkbox .mat-checkbox-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Attribute"],
                args: ['tabindex']
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [MAT_CHECKBOX_CLICK_ACTION]
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [MAT_CHECKBOX_DEFAULT_OPTIONS]
            }] }]; }, { ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['aria-label']
        }], ariaLabelledby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['aria-labelledby']
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], labelPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], indeterminateChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], checked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], indeterminate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], ariaDescribedby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['aria-describedby']
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], _inputElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['input']
        }], ripple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRipple"]]
        }] }); })();
    return MatCheckbox;
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const MAT_CHECKBOX_REQUIRED_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(() => MatCheckboxRequiredValidator),
    multi: true
};
/**
 * Validator for Material checkbox's required attribute in template-driven checkbox.
 * Current CheckboxRequiredValidator only work with `input type=checkbox` and does not
 * work with `mat-checkbox`.
 */
let MatCheckboxRequiredValidator = /** @class */ (() => {
    class MatCheckboxRequiredValidator extends _angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxRequiredValidator"] {
    }
MatCheckboxRequiredValidator.ɵfac = function MatCheckboxRequiredValidator_Factory(t) { return ɵMatCheckboxRequiredValidator_BaseFactory(t || MatCheckboxRequiredValidator); };
MatCheckboxRequiredValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: MatCheckboxRequiredValidator, selectors: [["mat-checkbox", "required", "", "formControlName", ""], ["mat-checkbox", "required", "", "formControl", ""], ["mat-checkbox", "required", "", "ngModel", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([MAT_CHECKBOX_REQUIRED_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]] });
const ɵMatCheckboxRequiredValidator_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](MatCheckboxRequiredValidator);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatCheckboxRequiredValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: `mat-checkbox[required][formControlName],
             mat-checkbox[required][formControl], mat-checkbox[required][ngModel]`,
                providers: [MAT_CHECKBOX_REQUIRED_VALIDATOR]
            }]
    }], null, null); })();
    return MatCheckboxRequiredValidator;
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** This module is used by both original and MDC-based checkbox implementations. */
let _MatCheckboxRequiredValidatorModule = /** @class */ (() => {
    class _MatCheckboxRequiredValidatorModule {
    }
_MatCheckboxRequiredValidatorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: _MatCheckboxRequiredValidatorModule });
_MatCheckboxRequiredValidatorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function _MatCheckboxRequiredValidatorModule_Factory(t) { return new (t || _MatCheckboxRequiredValidatorModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_MatCheckboxRequiredValidatorModule, { declarations: [MatCheckboxRequiredValidator], exports: [MatCheckboxRequiredValidator] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](_MatCheckboxRequiredValidatorModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                exports: [MatCheckboxRequiredValidator],
                declarations: [MatCheckboxRequiredValidator]
            }]
    }], null, null); })();
    return _MatCheckboxRequiredValidatorModule;
})();
let MatCheckboxModule = /** @class */ (() => {
    class MatCheckboxModule {
    }
MatCheckboxModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: MatCheckboxModule });
MatCheckboxModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function MatCheckboxModule_Factory(t) { return new (t || MatCheckboxModule)(); }, imports: [[
            _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__["ObserversModule"],
            _MatCheckboxRequiredValidatorModule
        ], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _MatCheckboxRequiredValidatorModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MatCheckboxModule, { declarations: function () { return [MatCheckbox]; }, imports: function () { return [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__["ObserversModule"], _MatCheckboxRequiredValidatorModule]; }, exports: function () { return [MatCheckbox, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _MatCheckboxRequiredValidatorModule]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatCheckboxModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__["ObserversModule"],
                    _MatCheckboxRequiredValidatorModule
                ],
                exports: [MatCheckbox, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _MatCheckboxRequiredValidatorModule],
                declarations: [MatCheckbox]
            }]
    }], null, null); })();
    return MatCheckboxModule;
})();

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



//# sourceMappingURL=checkbox.js.map

/***/ }),

/***/ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js ***!
  \***************************************************************************/
/*! exports provided: MAT_SNACK_BAR_DATA, MAT_SNACK_BAR_DEFAULT_OPTIONS, MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY, MatSnackBar, MatSnackBarConfig, MatSnackBarContainer, MatSnackBarModule, MatSnackBarRef, SimpleSnackBar, matSnackBarAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SNACK_BAR_DATA", function() { return MAT_SNACK_BAR_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SNACK_BAR_DEFAULT_OPTIONS", function() { return MAT_SNACK_BAR_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY", function() { return MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSnackBar", function() { return MatSnackBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSnackBarConfig", function() { return MatSnackBarConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSnackBarContainer", function() { return MatSnackBarContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSnackBarModule", function() { return MatSnackBarModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSnackBarRef", function() { return MatSnackBarRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleSnackBar", function() { return SimpleSnackBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matSnackBarAnimations", function() { return matSnackBarAnimations; });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");












/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Maximum amount of milliseconds that can be passed into setTimeout. */








function SimpleSnackBar_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SimpleSnackBar_div_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r1.action(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.data.action);
} }
function MatSnackBarContainer_ng_template_0_Template(rf, ctx) { }
const MAX_TIMEOUT = Math.pow(2, 31) - 1;
/**
 * Reference to a snack bar dispatched from the snack bar service.
 */
class MatSnackBarRef {
    constructor(containerInstance, _overlayRef) {
        this._overlayRef = _overlayRef;
        /** Subject for notifying the user that the snack bar has been dismissed. */
        this._afterDismissed = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /** Subject for notifying the user that the snack bar has opened and appeared. */
        this._afterOpened = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /** Subject for notifying the user that the snack bar action was called. */
        this._onAction = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /** Whether the snack bar was dismissed using the action button. */
        this._dismissedByAction = false;
        this.containerInstance = containerInstance;
        // Dismiss snackbar on action.
        this.onAction().subscribe(() => this.dismiss());
        containerInstance._onExit.subscribe(() => this._finishDismiss());
    }
    /** Dismisses the snack bar. */
    dismiss() {
        if (!this._afterDismissed.closed) {
            this.containerInstance.exit();
        }
        clearTimeout(this._durationTimeoutId);
    }
    /** Marks the snackbar action clicked. */
    dismissWithAction() {
        if (!this._onAction.closed) {
            this._dismissedByAction = true;
            this._onAction.next();
            this._onAction.complete();
        }
    }
    /**
     * Marks the snackbar action clicked.
     * @deprecated Use `dismissWithAction` instead.
     * @breaking-change 8.0.0
     */
    closeWithAction() {
        this.dismissWithAction();
    }
    /** Dismisses the snack bar after some duration */
    _dismissAfter(duration) {
        // Note that we need to cap the duration to the maximum value for setTimeout, because
        // it'll revert to 1 if somebody passes in something greater (e.g. `Infinity`). See #17234.
        this._durationTimeoutId = setTimeout(() => this.dismiss(), Math.min(duration, MAX_TIMEOUT));
    }
    /** Marks the snackbar as opened */
    _open() {
        if (!this._afterOpened.closed) {
            this._afterOpened.next();
            this._afterOpened.complete();
        }
    }
    /** Cleans up the DOM after closing. */
    _finishDismiss() {
        this._overlayRef.dispose();
        if (!this._onAction.closed) {
            this._onAction.complete();
        }
        this._afterDismissed.next({ dismissedByAction: this._dismissedByAction });
        this._afterDismissed.complete();
        this._dismissedByAction = false;
    }
    /** Gets an observable that is notified when the snack bar is finished closing. */
    afterDismissed() {
        return this._afterDismissed.asObservable();
    }
    /** Gets an observable that is notified when the snack bar has opened and appeared. */
    afterOpened() {
        return this.containerInstance._onEnter;
    }
    /** Gets an observable that is notified when the snack bar action is called. */
    onAction() {
        return this._onAction.asObservable();
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Injection token that can be used to access the data that was passed in to a snack bar. */
const MAT_SNACK_BAR_DATA = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('MatSnackBarData');
/**
 * Configuration used when opening a snack-bar.
 */
class MatSnackBarConfig {
    constructor() {
        /** The politeness level for the MatAriaLiveAnnouncer announcement. */
        this.politeness = 'assertive';
        /**
         * Message to be announced by the LiveAnnouncer. When opening a snackbar without a custom
         * component or template, the announcement message will default to the specified message.
         */
        this.announcementMessage = '';
        /** The length of time in milliseconds to wait before automatically dismissing the snack bar. */
        this.duration = 0;
        /** Data being injected into the child component. */
        this.data = null;
        /** The horizontal position to place the snack bar. */
        this.horizontalPosition = 'center';
        /** The vertical position to place the snack bar. */
        this.verticalPosition = 'bottom';
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A component used to open as the default snack bar, matching material spec.
 * This should only be used internally by the snack bar service.
 */
let SimpleSnackBar = /** @class */ (() => {
    class SimpleSnackBar {
        constructor(snackBarRef, data) {
            this.snackBarRef = snackBarRef;
            this.data = data;
        }
        /** Performs the action on the snack bar. */
        action() {
            this.snackBarRef.dismissWithAction();
        }
        /** If the action button should be shown. */
        get hasAction() {
            return !!this.data.action;
        }
    }
SimpleSnackBar.ɵfac = function SimpleSnackBar_Factory(t) { return new (t || SimpleSnackBar)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MatSnackBarRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_SNACK_BAR_DATA)); };
SimpleSnackBar.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SimpleSnackBar, selectors: [["simple-snack-bar"]], hostAttrs: [1, "mat-simple-snackbar"], decls: 3, vars: 2, consts: [["class", "mat-simple-snackbar-action", 4, "ngIf"], [1, "mat-simple-snackbar-action"], ["mat-button", "", 3, "click"]], template: function SimpleSnackBar_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SimpleSnackBar_div_2_Template, 3, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.data.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.hasAction);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]], styles: [".mat-simple-snackbar{display:flex;justify-content:space-between;align-items:center;line-height:20px;opacity:1}.mat-simple-snackbar-action{flex-shrink:0;margin:-8px -8px -8px 8px}.mat-simple-snackbar-action button{max-height:36px;min-width:0}[dir=rtl] .mat-simple-snackbar-action{margin-left:-8px;margin-right:8px}\n"], encapsulation: 2, changeDetection: 0 });
    SimpleSnackBar.ctorParameters = () => [
        { type: MatSnackBarRef },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [MAT_SNACK_BAR_DATA,] }] }
    ];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](SimpleSnackBar, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'simple-snack-bar',
                template: "<span>{{data.message}}</span>\n<div class=\"mat-simple-snackbar-action\"  *ngIf=\"hasAction\">\n  <button mat-button (click)=\"action()\">{{data.action}}</button>\n</div>\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                host: {
                    'class': 'mat-simple-snackbar'
                },
                styles: [".mat-simple-snackbar{display:flex;justify-content:space-between;align-items:center;line-height:20px;opacity:1}.mat-simple-snackbar-action{flex-shrink:0;margin:-8px -8px -8px 8px}.mat-simple-snackbar-action button{max-height:36px;min-width:0}[dir=rtl] .mat-simple-snackbar-action{margin-left:-8px;margin-right:8px}\n"]
            }]
    }], function () { return [{ type: MatSnackBarRef }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [MAT_SNACK_BAR_DATA]
            }] }]; }, null); })();
    return SimpleSnackBar;
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Animations used by the Material snack bar.
 * @docs-private
 */
const matSnackBarAnimations = {
    /** Animation that shows and hides a snack bar. */
    snackBarState: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["trigger"])('state', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('void, hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
            transform: 'scale(0.8)',
            opacity: 0,
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
            transform: 'scale(1)',
            opacity: 1,
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('* => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('150ms cubic-bezier(0, 0, 0.2, 1)')),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('* => void, * => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('75ms cubic-bezier(0.4, 0.0, 1, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
            opacity: 0
        }))),
    ])
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Internal component that wraps user-provided snack bar content.
 * @docs-private
 */
let MatSnackBarContainer = /** @class */ (() => {
    class MatSnackBarContainer extends _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["BasePortalOutlet"] {
        constructor(_ngZone, _elementRef, _changeDetectorRef, 
        /** The snack bar configuration. */
        snackBarConfig) {
            super();
            this._ngZone = _ngZone;
            this._elementRef = _elementRef;
            this._changeDetectorRef = _changeDetectorRef;
            this.snackBarConfig = snackBarConfig;
            /** Whether the component has been destroyed. */
            this._destroyed = false;
            /** Subject for notifying that the snack bar has exited from view. */
            this._onExit = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
            /** Subject for notifying that the snack bar has finished entering the view. */
            this._onEnter = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
            /** The state of the snack bar animations. */
            this._animationState = 'void';
            /**
             * Attaches a DOM portal to the snack bar container.
             * @deprecated To be turned into a method.
             * @breaking-change 10.0.0
             */
            this.attachDomPortal = (portal) => {
                this._assertNotAttached();
                this._applySnackBarClasses();
                return this._portalOutlet.attachDomPortal(portal);
            };
            // Based on the ARIA spec, `alert` and `status` roles have an
            // implicit `assertive` and `polite` politeness respectively.
            if (snackBarConfig.politeness === 'assertive' && !snackBarConfig.announcementMessage) {
                this._role = 'alert';
            }
            else if (snackBarConfig.politeness === 'off') {
                this._role = null;
            }
            else {
                this._role = 'status';
            }
        }
        /** Attach a component portal as content to this snack bar container. */
        attachComponentPortal(portal) {
            this._assertNotAttached();
            this._applySnackBarClasses();
            return this._portalOutlet.attachComponentPortal(portal);
        }
        /** Attach a template portal as content to this snack bar container. */
        attachTemplatePortal(portal) {
            this._assertNotAttached();
            this._applySnackBarClasses();
            return this._portalOutlet.attachTemplatePortal(portal);
        }
        /** Handle end of animations, updating the state of the snackbar. */
        onAnimationEnd(event) {
            const { fromState, toState } = event;
            if ((toState === 'void' && fromState !== 'void') || toState === 'hidden') {
                this._completeExit();
            }
            if (toState === 'visible') {
                // Note: we shouldn't use `this` inside the zone callback,
                // because it can cause a memory leak.
                const onEnter = this._onEnter;
                this._ngZone.run(() => {
                    onEnter.next();
                    onEnter.complete();
                });
            }
        }
        /** Begin animation of snack bar entrance into view. */
        enter() {
            if (!this._destroyed) {
                this._animationState = 'visible';
                this._changeDetectorRef.detectChanges();
            }
        }
        /** Begin animation of the snack bar exiting from view. */
        exit() {
            // Note: this one transitions to `hidden`, rather than `void`, in order to handle the case
            // where multiple snack bars are opened in quick succession (e.g. two consecutive calls to
            // `MatSnackBar.open`).
            this._animationState = 'hidden';
            // Mark this element with an 'exit' attribute to indicate that the snackbar has
            // been dismissed and will soon be removed from the DOM. This is used by the snackbar
            // test harness.
            this._elementRef.nativeElement.setAttribute('mat-exit', '');
            return this._onExit;
        }
        /** Makes sure the exit callbacks have been invoked when the element is destroyed. */
        ngOnDestroy() {
            this._destroyed = true;
            this._completeExit();
        }
        /**
         * Waits for the zone to settle before removing the element. Helps prevent
         * errors where we end up removing an element which is in the middle of an animation.
         */
        _completeExit() {
            this._ngZone.onMicrotaskEmpty.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(() => {
                this._onExit.next();
                this._onExit.complete();
            });
        }
        /** Applies the various positioning and user-configured CSS classes to the snack bar. */
        _applySnackBarClasses() {
            const element = this._elementRef.nativeElement;
            const panelClasses = this.snackBarConfig.panelClass;
            if (panelClasses) {
                if (Array.isArray(panelClasses)) {
                    // Note that we can't use a spread here, because IE doesn't support multiple arguments.
                    panelClasses.forEach(cssClass => element.classList.add(cssClass));
                }
                else {
                    element.classList.add(panelClasses);
                }
            }
            if (this.snackBarConfig.horizontalPosition === 'center') {
                element.classList.add('mat-snack-bar-center');
            }
            if (this.snackBarConfig.verticalPosition === 'top') {
                element.classList.add('mat-snack-bar-top');
            }
        }
        /** Asserts that no content is already attached to the container. */
        _assertNotAttached() {
            if (this._portalOutlet.hasAttached()) {
                throw Error('Attempting to attach snack bar content after content is already attached');
            }
        }
    }
MatSnackBarContainer.ɵfac = function MatSnackBarContainer_Factory(t) { return new (t || MatSnackBarContainer)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MatSnackBarConfig)); };
MatSnackBarContainer.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MatSnackBarContainer, selectors: [["snack-bar-container"]], viewQuery: function MatSnackBarContainer_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._portalOutlet = _t.first);
    } }, hostAttrs: [1, "mat-snack-bar-container"], hostVars: 2, hostBindings: function MatSnackBarContainer_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcomponentHostSyntheticListener"]("@state.done", function MatSnackBarContainer_animation_state_done_HostBindingHandler($event) { return ctx.onAnimationEnd($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("role", ctx._role);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵupdateSyntheticHostBinding"]("@state", ctx._animationState);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 0, consts: [["cdkPortalOutlet", ""]], template: function MatSnackBarContainer_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, MatSnackBarContainer_ng_template_0_Template, 0, 0, "ng-template", 0);
    } }, directives: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"]], styles: [".mat-snack-bar-container{border-radius:4px;box-sizing:border-box;display:block;margin:24px;max-width:33vw;min-width:344px;padding:14px 16px;min-height:48px;transform-origin:center}.cdk-high-contrast-active .mat-snack-bar-container{border:solid 1px}.mat-snack-bar-handset{width:100%}.mat-snack-bar-handset .mat-snack-bar-container{margin:8px;max-width:100%;min-width:0;width:100%}\n"], encapsulation: 2, data: { animation: [matSnackBarAnimations.snackBarState] } });
    MatSnackBarContainer.ctorParameters = () => [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
        { type: MatSnackBarConfig }
    ];
    MatSnackBarContainer.propDecorators = {
        _portalOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], { static: true },] }]
    };
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatSnackBarContainer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'snack-bar-container',
                template: "<ng-template cdkPortalOutlet></ng-template>\n",
                // In Ivy embedded views will be change detected from their declaration place, rather than
                // where they were stamped out. This means that we can't have the snack bar container be OnPush,
                // because it might cause snack bars that were opened from a template not to be out of date.
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
                animations: [matSnackBarAnimations.snackBarState],
                host: {
                    '[attr.role]': '_role',
                    'class': 'mat-snack-bar-container',
                    '[@state]': '_animationState',
                    '(@state.done)': 'onAnimationEnd($event)'
                },
                styles: [".mat-snack-bar-container{border-radius:4px;box-sizing:border-box;display:block;margin:24px;max-width:33vw;min-width:344px;padding:14px 16px;min-height:48px;transform-origin:center}.cdk-high-contrast-active .mat-snack-bar-container{border:solid 1px}.mat-snack-bar-handset{width:100%}.mat-snack-bar-handset .mat-snack-bar-container{margin:8px;max-width:100%;min-width:0;width:100%}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }, { type: MatSnackBarConfig }]; }, { _portalOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], { static: true }]
        }] }); })();
    return MatSnackBarContainer;
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
let MatSnackBarModule = /** @class */ (() => {
    class MatSnackBarModule {
    }
MatSnackBarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: MatSnackBarModule });
MatSnackBarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function MatSnackBarModule_Factory(t) { return new (t || MatSnackBarModule)(); }, imports: [[
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"],
        ], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MatSnackBarModule, { declarations: function () { return [MatSnackBarContainer, SimpleSnackBar]; }, imports: function () { return [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"]]; }, exports: function () { return [MatSnackBarContainer, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"]]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatSnackBarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                imports: [
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"],
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"],
                ],
                exports: [MatSnackBarContainer, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"]],
                declarations: [MatSnackBarContainer, SimpleSnackBar],
                entryComponents: [MatSnackBarContainer, SimpleSnackBar]
            }]
    }], null, null); })();
    return MatSnackBarModule;
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Injection token that can be used to specify default snack bar. */
const MAT_SNACK_BAR_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('mat-snack-bar-default-options', {
    providedIn: 'root',
    factory: MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY,
});
/** @docs-private */
function MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY() {
    return new MatSnackBarConfig();
}
/**
 * Service to dispatch Material Design snack bar messages.
 */
let MatSnackBar = /** @class */ (() => {
    class MatSnackBar {
        constructor(_overlay, _live, _injector, _breakpointObserver, _parentSnackBar, _defaultConfig) {
            this._overlay = _overlay;
            this._live = _live;
            this._injector = _injector;
            this._breakpointObserver = _breakpointObserver;
            this._parentSnackBar = _parentSnackBar;
            this._defaultConfig = _defaultConfig;
            /**
             * Reference to the current snack bar in the view *at this level* (in the Angular injector tree).
             * If there is a parent snack-bar service, all operations should delegate to that parent
             * via `_openedSnackBarRef`.
             */
            this._snackBarRefAtThisLevel = null;
        }
        /** Reference to the currently opened snackbar at *any* level. */
        get _openedSnackBarRef() {
            const parent = this._parentSnackBar;
            return parent ? parent._openedSnackBarRef : this._snackBarRefAtThisLevel;
        }
        set _openedSnackBarRef(value) {
            if (this._parentSnackBar) {
                this._parentSnackBar._openedSnackBarRef = value;
            }
            else {
                this._snackBarRefAtThisLevel = value;
            }
        }
        /**
         * Creates and dispatches a snack bar with a custom component for the content, removing any
         * currently opened snack bars.
         *
         * @param component Component to be instantiated.
         * @param config Extra configuration for the snack bar.
         */
        openFromComponent(component, config) {
            return this._attach(component, config);
        }
        /**
         * Creates and dispatches a snack bar with a custom template for the content, removing any
         * currently opened snack bars.
         *
         * @param template Template to be instantiated.
         * @param config Extra configuration for the snack bar.
         */
        openFromTemplate(template, config) {
            return this._attach(template, config);
        }
        /**
         * Opens a snackbar with a message and an optional action.
         * @param message The message to show in the snackbar.
         * @param action The label for the snackbar action.
         * @param config Additional configuration options for the snackbar.
         */
        open(message, action = '', config) {
            const _config = Object.assign(Object.assign({}, this._defaultConfig), config);
            // Since the user doesn't have access to the component, we can
            // override the data to pass in our own message and action.
            _config.data = { message, action };
            if (!_config.announcementMessage) {
                _config.announcementMessage = message;
            }
            return this.openFromComponent(SimpleSnackBar, _config);
        }
        /**
         * Dismisses the currently-visible snack bar.
         */
        dismiss() {
            if (this._openedSnackBarRef) {
                this._openedSnackBarRef.dismiss();
            }
        }
        ngOnDestroy() {
            // Only dismiss the snack bar at the current level on destroy.
            if (this._snackBarRefAtThisLevel) {
                this._snackBarRefAtThisLevel.dismiss();
            }
        }
        /**
         * Attaches the snack bar container component to the overlay.
         */
        _attachSnackBarContainer(overlayRef, config) {
            const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
            const injector = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalInjector"](userInjector || this._injector, new WeakMap([
                [MatSnackBarConfig, config]
            ]));
            const containerPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["ComponentPortal"](MatSnackBarContainer, config.viewContainerRef, injector);
            const containerRef = overlayRef.attach(containerPortal);
            containerRef.instance.snackBarConfig = config;
            return containerRef.instance;
        }
        /**
         * Places a new component or a template as the content of the snack bar container.
         */
        _attach(content, userConfig) {
            const config = Object.assign(Object.assign(Object.assign({}, new MatSnackBarConfig()), this._defaultConfig), userConfig);
            const overlayRef = this._createOverlay(config);
            const container = this._attachSnackBarContainer(overlayRef, config);
            const snackBarRef = new MatSnackBarRef(container, overlayRef);
            if (content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]) {
                const portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["TemplatePortal"](content, null, {
                    $implicit: config.data,
                    snackBarRef
                });
                snackBarRef.instance = container.attachTemplatePortal(portal);
            }
            else {
                const injector = this._createInjector(config, snackBarRef);
                const portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["ComponentPortal"](content, undefined, injector);
                const contentRef = container.attachComponentPortal(portal);
                // We can't pass this via the injector, because the injector is created earlier.
                snackBarRef.instance = contentRef.instance;
            }
            // Subscribe to the breakpoint observer and attach the mat-snack-bar-handset class as
            // appropriate. This class is applied to the overlay element because the overlay must expand to
            // fill the width of the screen for full width snackbars.
            this._breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__["Breakpoints"].HandsetPortrait).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(overlayRef.detachments())).subscribe(state => {
                const classList = overlayRef.overlayElement.classList;
                const className = 'mat-snack-bar-handset';
                state.matches ? classList.add(className) : classList.remove(className);
            });
            this._animateSnackBar(snackBarRef, config);
            this._openedSnackBarRef = snackBarRef;
            return this._openedSnackBarRef;
        }
        /** Animates the old snack bar out and the new one in. */
        _animateSnackBar(snackBarRef, config) {
            // When the snackbar is dismissed, clear the reference to it.
            snackBarRef.afterDismissed().subscribe(() => {
                // Clear the snackbar ref if it hasn't already been replaced by a newer snackbar.
                if (this._openedSnackBarRef == snackBarRef) {
                    this._openedSnackBarRef = null;
                }
                if (config.announcementMessage) {
                    this._live.clear();
                }
            });
            if (this._openedSnackBarRef) {
                // If a snack bar is already in view, dismiss it and enter the
                // new snack bar after exit animation is complete.
                this._openedSnackBarRef.afterDismissed().subscribe(() => {
                    snackBarRef.containerInstance.enter();
                });
                this._openedSnackBarRef.dismiss();
            }
            else {
                // If no snack bar is in view, enter the new snack bar.
                snackBarRef.containerInstance.enter();
            }
            // If a dismiss timeout is provided, set up dismiss based on after the snackbar is opened.
            if (config.duration && config.duration > 0) {
                snackBarRef.afterOpened().subscribe(() => snackBarRef._dismissAfter(config.duration));
            }
            if (config.announcementMessage) {
                this._live.announce(config.announcementMessage, config.politeness);
            }
        }
        /**
         * Creates a new overlay and places it in the correct location.
         * @param config The user-specified snack bar config.
         */
        _createOverlay(config) {
            const overlayConfig = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayConfig"]();
            overlayConfig.direction = config.direction;
            let positionStrategy = this._overlay.position().global();
            // Set horizontal position.
            const isRtl = config.direction === 'rtl';
            const isLeft = (config.horizontalPosition === 'left' ||
                (config.horizontalPosition === 'start' && !isRtl) ||
                (config.horizontalPosition === 'end' && isRtl));
            const isRight = !isLeft && config.horizontalPosition !== 'center';
            if (isLeft) {
                positionStrategy.left('0');
            }
            else if (isRight) {
                positionStrategy.right('0');
            }
            else {
                positionStrategy.centerHorizontally();
            }
            // Set horizontal position.
            if (config.verticalPosition === 'top') {
                positionStrategy.top('0');
            }
            else {
                positionStrategy.bottom('0');
            }
            overlayConfig.positionStrategy = positionStrategy;
            return this._overlay.create(overlayConfig);
        }
        /**
         * Creates an injector to be used inside of a snack bar component.
         * @param config Config that was used to create the snack bar.
         * @param snackBarRef Reference to the snack bar.
         */
        _createInjector(config, snackBarRef) {
            const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
            return new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalInjector"](userInjector || this._injector, new WeakMap([
                [MatSnackBarRef, snackBarRef],
                [MAT_SNACK_BAR_DATA, config.data]
            ]));
        }
    }
MatSnackBar.ɵfac = function MatSnackBar_Factory(t) { return new (t || MatSnackBar)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["LiveAnnouncer"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](MatSnackBar, 12), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](MAT_SNACK_BAR_DEFAULT_OPTIONS)); };
    MatSnackBar.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"])({ factory: function MatSnackBar_Factory() { return new MatSnackBar(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["LiveAnnouncer"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_3__["INJECTOR"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__["BreakpointObserver"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(MatSnackBar, 12), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(MAT_SNACK_BAR_DEFAULT_OPTIONS)); }, token: MatSnackBar, providedIn: MatSnackBarModule });
    MatSnackBar.ctorParameters = () => [
        { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"] },
        { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["LiveAnnouncer"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"] },
        { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__["BreakpointObserver"] },
        { type: MatSnackBar, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["SkipSelf"] }] },
        { type: MatSnackBarConfig, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [MAT_SNACK_BAR_DEFAULT_OPTIONS,] }] }
    ];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatSnackBar, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"],
        args: [{ providedIn: MatSnackBarModule }]
    }], function () { return [{ type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"] }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["LiveAnnouncer"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"] }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__["BreakpointObserver"] }, { type: MatSnackBar, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["SkipSelf"]
            }] }, { type: MatSnackBarConfig, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [MAT_SNACK_BAR_DEFAULT_OPTIONS]
            }] }]; }, null); })();
    return MatSnackBar;
})();

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



//# sourceMappingURL=snack-bar.js.map

/***/ }),

/***/ "./src/@vex/animations/fade-in-up.animation.ts":
/*!*****************************************************!*\
  !*** ./src/@vex/animations/fade-in-up.animation.ts ***!
  \*****************************************************/
/*! exports provided: fadeInUpAnimation, fadeInUp400ms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInUpAnimation", function() { return fadeInUpAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInUp400ms", function() { return fadeInUp400ms; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

function fadeInUpAnimation(duration) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeInUp', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'translateY(20px)',
                opacity: 0
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(`${duration}ms cubic-bezier(0.35, 0, 0.25, 1)`, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'translateY(0)',
                opacity: 1
            }))
        ])
    ]);
}
const fadeInUp400ms = fadeInUpAnimation(400);


/***/ })

}]);
//# sourceMappingURL=default~ingresos-ingresos-mensuales-ingresos-mensuales-module~pages-auth-login-login-module~usuarios~416e4124-es2015.js.map