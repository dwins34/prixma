"use client";

// src/app/components/ui/Button.tsx
import React from "react";

// src/app/components/ui/Button.module.css
var Button_default = {};

// src/app/components/ui/Button.tsx
function Button({
  variant = "primary",
  size = "md",
  loading = false,
  leadingIcon,
  trailingIcon,
  iconButton = false,
  fullWidth = false,
  disabled,
  children,
  className,
  ...props
}) {
  const cls = [
    Button_default.btn,
    Button_default[variant],
    Button_default[size],
    iconButton ? Button_default.iconBtn : "",
    fullWidth ? Button_default.fullWidth : "",
    className ?? ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      className: cls,
      disabled: disabled || loading,
      "aria-busy": loading,
      ...props
    },
    loading ? /* @__PURE__ */ React.createElement("span", { className: `${Button_default.spinner} ${variant === "secondary" || variant === "text" ? Button_default.spinnerDark : ""}` }) : /* @__PURE__ */ React.createElement(React.Fragment, null, leadingIcon && /* @__PURE__ */ React.createElement("span", { className: Button_default.icon }, leadingIcon), !iconButton && children, trailingIcon && /* @__PURE__ */ React.createElement("span", { className: Button_default.icon }, trailingIcon), iconButton && children)
  );
}

// src/app/components/ui/Input.tsx
import React2, { useState, useId } from "react";

// src/app/components/ui/Input.module.css
var Input_default = {};

// src/app/components/ui/Input.tsx
function TopLabelInput({
  label,
  hint,
  error,
  success,
  optional,
  required,
  disabled,
  leadingIcon,
  trailingIcon,
  size = "md",
  className,
  variant: _variant,
  ...rest
}) {
  const sizeClass = Input_default[size];
  const stateClass = error ? Input_default.error : disabled ? Input_default.disabled : success ? Input_default.success : "";
  return /* @__PURE__ */ React2.createElement("div", { className: `${Input_default.group} ${sizeClass} ${stateClass} ${className || ""}` }, label && /* @__PURE__ */ React2.createElement("div", { className: Input_default.labelRow }, /* @__PURE__ */ React2.createElement("label", { className: Input_default.label }, label), optional && /* @__PURE__ */ React2.createElement("span", { className: Input_default.optional }, "(optional)"), required && /* @__PURE__ */ React2.createElement("span", { className: Input_default.required }, " *")), /* @__PURE__ */ React2.createElement("div", { className: Input_default.fieldWrap }, leadingIcon && /* @__PURE__ */ React2.createElement("span", { className: Input_default.icon }, leadingIcon), /* @__PURE__ */ React2.createElement(
    "input",
    {
      className: Input_default.input,
      disabled,
      ...rest
    }
  ), trailingIcon && /* @__PURE__ */ React2.createElement("span", { className: Input_default.icon }, trailingIcon)), error && /* @__PURE__ */ React2.createElement("span", { className: Input_default.errorText }, error), !error && hint && /* @__PURE__ */ React2.createElement("span", { className: Input_default.helperText }, hint));
}
function FloatingLabelInput({
  label,
  hint,
  error,
  optional,
  required,
  disabled,
  leadingIcon,
  trailingIcon,
  size = "md",
  className,
  ...rest
}) {
  const [focused, setFocused] = useState(false);
  const [hasValue, setHasValue] = useState(!!rest.defaultValue || !!rest.value);
  const inputId = useId();
  const isFloated = focused || hasValue || !!rest.value || !!rest.defaultValue;
  const stateClass = error ? Input_default.floatingError : disabled ? Input_default.floatingDisabled : "";
  return /* @__PURE__ */ React2.createElement("div", { className: `${Input_default.floatingGroup} ${stateClass} ${className || ""}` }, /* @__PURE__ */ React2.createElement("div", { className: Input_default.floatingField }, leadingIcon && /* @__PURE__ */ React2.createElement("span", { className: Input_default.icon }, leadingIcon), /* @__PURE__ */ React2.createElement("div", { className: Input_default.floatingInner }, label && /* @__PURE__ */ React2.createElement(
    "label",
    {
      htmlFor: inputId,
      className: [
        Input_default.floatingLabel,
        isFloated ? Input_default.floated : "",
        isFloated && focused ? Input_default.floatedFocus : ""
      ].join(" ")
    },
    label,
    required && /* @__PURE__ */ React2.createElement("span", { className: Input_default.required }, " *"),
    optional && /* @__PURE__ */ React2.createElement("span", { className: Input_default.optional }, " (optional)")
  ), /* @__PURE__ */ React2.createElement(
    "input",
    {
      id: inputId,
      className: `${Input_default.floatingInput} ${!isFloated ? Input_default.notFloated : ""}`,
      disabled,
      onFocus: (e) => {
        var _a;
        setFocused(true);
        (_a = rest.onFocus) == null ? void 0 : _a.call(rest, e);
      },
      onBlur: (e) => {
        var _a;
        setFocused(false);
        setHasValue(!!e.target.value);
        (_a = rest.onBlur) == null ? void 0 : _a.call(rest, e);
      },
      onChange: (e) => {
        var _a;
        setHasValue(!!e.target.value);
        (_a = rest.onChange) == null ? void 0 : _a.call(rest, e);
      },
      ...rest
    }
  )), trailingIcon && /* @__PURE__ */ React2.createElement("span", { className: Input_default.icon }, trailingIcon)), error && /* @__PURE__ */ React2.createElement("span", { className: Input_default.errorText }, error), !error && hint && /* @__PURE__ */ React2.createElement("span", { className: Input_default.helperText }, hint));
}
function InlineLabelInput({
  label,
  hint,
  error,
  optional,
  required,
  disabled,
  leadingIcon,
  trailingIcon,
  size = "md",
  className,
  ...rest
}) {
  const stateClass = error ? Input_default.inlineError : disabled ? Input_default.inlineDisabled : "";
  return /* @__PURE__ */ React2.createElement("div", { className: `${Input_default.inlineGroup} ${stateClass} ${className || ""}` }, /* @__PURE__ */ React2.createElement("div", { className: Input_default.inlineField }, leadingIcon && /* @__PURE__ */ React2.createElement("span", { className: Input_default.icon }, leadingIcon), /* @__PURE__ */ React2.createElement("div", { className: Input_default.inlineContent }, label && /* @__PURE__ */ React2.createElement("span", { className: Input_default.inlineLabel }, label, required && /* @__PURE__ */ React2.createElement("span", { className: Input_default.required }, " *"), optional && /* @__PURE__ */ React2.createElement("span", { className: Input_default.optional }, " (optional)")), /* @__PURE__ */ React2.createElement(
    "input",
    {
      className: Input_default.inlineInput,
      disabled,
      ...rest
    }
  )), trailingIcon && /* @__PURE__ */ React2.createElement("span", { className: Input_default.icon }, trailingIcon)), error && /* @__PURE__ */ React2.createElement("span", { className: Input_default.errorText }, error), !error && hint && /* @__PURE__ */ React2.createElement("span", { className: Input_default.helperText }, hint));
}
var Input = ({ variant = "top", ...props }) => {
  if (variant === "floating") return /* @__PURE__ */ React2.createElement(FloatingLabelInput, { ...props, variant: "floating" });
  if (variant === "inline") return /* @__PURE__ */ React2.createElement(InlineLabelInput, { ...props, variant: "inline" });
  return /* @__PURE__ */ React2.createElement(TopLabelInput, { ...props });
};

// src/app/components/ui/Checkbox.tsx
import React3 from "react";

// src/app/components/ui/Checkbox.module.css
var Checkbox_default = {};

// src/app/components/ui/Checkbox.tsx
var Checkbox = ({
  label,
  indeterminate,
  error,
  checked,
  disabled,
  className,
  ...props
}) => {
  return /* @__PURE__ */ React3.createElement("label", { className: `
      ${Checkbox_default.container} 
      ${disabled ? Checkbox_default.disabled : ""} 
      ${indeterminate ? Checkbox_default.indeterminate : ""}
      ${error ? Checkbox_default.error : ""}
      ${className || ""}
    ` }, /* @__PURE__ */ React3.createElement(
    "input",
    {
      type: "checkbox",
      className: Checkbox_default.input,
      checked,
      disabled,
      ...props
    }
  ), /* @__PURE__ */ React3.createElement("span", { className: Checkbox_default.checkmark }), label && /* @__PURE__ */ React3.createElement("span", { className: Checkbox_default.label }, label));
};
var Checkbox_default2 = Checkbox;

// src/app/components/ui/Chip.tsx
import React4 from "react";

// src/app/components/ui/Chip.module.css
var Chip_default = {};

// src/app/components/ui/Chip.tsx
var Chip = ({
  children,
  variant = "default",
  dot,
  onDismiss
}) => {
  const variantClass = variant === "purple" ? Chip_default.purple : variant === "green" ? Chip_default.green : variant === "red" ? Chip_default.red : "";
  return /* @__PURE__ */ React4.createElement("span", { className: `${Chip_default.chip} ${variantClass}` }, dot && /* @__PURE__ */ React4.createElement("span", { className: Chip_default.dot }), children, onDismiss && /* @__PURE__ */ React4.createElement("button", { className: Chip_default.dismiss, onClick: onDismiss, type: "button", "aria-label": "Remove" }, "\xD7"));
};

// src/app/components/ui/Stepper.tsx
import React5 from "react";

// src/app/components/ui/Stepper.module.css
var Stepper_default = {};

// src/app/components/ui/Stepper.tsx
var CheckIcon = () => /* @__PURE__ */ React5.createElement("svg", { width: "100%", height: "100%", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React5.createElement("polyline", { points: "20 6 9 17 4 12" }));
var ErrorIcon = () => /* @__PURE__ */ React5.createElement("svg", { width: "100%", height: "100%", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React5.createElement("line", { x1: "12", y1: "8", x2: "12", y2: "12" }), /* @__PURE__ */ React5.createElement("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" }), /* @__PURE__ */ React5.createElement("circle", { cx: "12", cy: "12", r: "10", strokeWidth: "2" }));
var Stepper = ({
  steps,
  orientation = "horizontal",
  size = "md",
  variant = "number",
  className = ""
}) => {
  return /* @__PURE__ */ React5.createElement("div", { className: `${Stepper_default.stepper} ${Stepper_default[orientation]} ${Stepper_default[size]} ${variant === "dot" ? Stepper_default.dotVariant : ""} ${className}` }, steps.map((step, index) => {
    const isLast = index === steps.length - 1;
    const status = step.status || "default";
    return /* @__PURE__ */ React5.createElement("div", { key: index, className: `${Stepper_default.step} ${Stepper_default[status]}` }, !isLast && /* @__PURE__ */ React5.createElement("div", { className: Stepper_default.connector }), /* @__PURE__ */ React5.createElement("div", { className: Stepper_default.indicatorWrapper }, variant === "dot" ? /* @__PURE__ */ React5.createElement("div", { className: Stepper_default.dot }) : /* @__PURE__ */ React5.createElement("div", { className: Stepper_default.indicator }, status === "completed" ? /* @__PURE__ */ React5.createElement("div", { className: Stepper_default.icon }, /* @__PURE__ */ React5.createElement(CheckIcon, null)) : status === "error" ? /* @__PURE__ */ React5.createElement("div", { className: Stepper_default.icon }, /* @__PURE__ */ React5.createElement(ErrorIcon, null)) : variant === "icon" && step.icon ? /* @__PURE__ */ React5.createElement("div", { className: Stepper_default.icon }, step.icon) : /* @__PURE__ */ React5.createElement("span", null, index + 1))), /* @__PURE__ */ React5.createElement("div", { className: Stepper_default.content }, /* @__PURE__ */ React5.createElement("div", { className: Stepper_default.header }, step.title), step.subheader && /* @__PURE__ */ React5.createElement("div", { className: Stepper_default.subheader }, step.subheader), step.isOptional && /* @__PURE__ */ React5.createElement("span", { className: Stepper_default.optional }, "Optional")));
  }));
};

// src/app/components/ui/Switch.tsx
import React6 from "react";

// src/app/components/ui/Switch.module.css
var Switch_default = {};

// src/app/components/ui/Switch.tsx
var Switch = ({
  label,
  checked,
  onChange,
  disabled,
  className,
  ...props
}) => {
  return /* @__PURE__ */ React6.createElement("label", { className: `${Switch_default.container} ${disabled ? Switch_default.disabled : ""} ${className || ""}` }, /* @__PURE__ */ React6.createElement("div", { className: Switch_default.track }, /* @__PURE__ */ React6.createElement(
    "input",
    {
      type: "checkbox",
      checked,
      onChange,
      disabled,
      ...props
    }
  ), /* @__PURE__ */ React6.createElement("span", { className: Switch_default.slider })), label && /* @__PURE__ */ React6.createElement("span", { className: Switch_default.label }, label));
};
var Switch_default2 = Switch;

// src/app/components/ui/Toggle.tsx
import React7, { useRef, useEffect, useState as useState2 } from "react";

// src/app/components/ui/Toggle.module.css
var Toggle_default = {};

// src/app/components/ui/Toggle.tsx
var Toggle = ({
  options,
  value,
  onChange,
  disabled
}) => {
  const [internalValue, setInternalValue] = useState2(options[0]);
  const containerRef = useRef(null);
  const [sliderStyle, setSliderStyle] = useState2({});
  const activeValue = value !== void 0 ? value : internalValue;
  const activeIndex = options.indexOf(activeValue);
  const handleToggle = (opt) => {
    if (disabled) return;
    if (value === void 0) setInternalValue(opt);
    onChange == null ? void 0 : onChange(opt);
  };
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const btns = container.querySelectorAll(`.${Toggle_default.option}`);
    if (!btns[activeIndex]) return;
    const btn = btns[activeIndex];
    setSliderStyle({ width: btn.offsetWidth, transform: `translateX(${btn.offsetLeft - 4}px)` });
  }, [activeIndex, options]);
  return /* @__PURE__ */ React7.createElement(
    "div",
    {
      ref: containerRef,
      className: `${Toggle_default.container} ${disabled ? Toggle_default.disabled : ""}`
    },
    /* @__PURE__ */ React7.createElement("div", { className: Toggle_default.slider, style: sliderStyle }),
    options.map((opt) => /* @__PURE__ */ React7.createElement(
      "button",
      {
        key: opt,
        className: `${Toggle_default.option} ${activeValue === opt ? Toggle_default.activeOption : ""}`,
        onClick: () => handleToggle(opt),
        disabled,
        type: "button"
      },
      opt
    ))
  );
};
var Toggle_default2 = Toggle;
export {
  Button,
  Checkbox_default2 as Checkbox,
  Chip,
  Input,
  Stepper,
  Switch_default2 as Switch,
  Toggle_default2 as Toggle
};
//# sourceMappingURL=index.mjs.map