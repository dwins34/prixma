import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'text' | 'destructive';
type ButtonSize = 'sm' | 'md' | 'lg';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    loading?: boolean;
    leadingIcon?: React.ReactNode;
    trailingIcon?: React.ReactNode;
    iconButton?: boolean;
    fullWidth?: boolean;
}
declare function Button({ variant, size, loading, leadingIcon, trailingIcon, iconButton, fullWidth, disabled, children, className, ...props }: ButtonProps): React.JSX.Element;

type InputSize = 'sm' | 'md' | 'lg';
interface BaseProps {
    label?: string;
    hint?: string;
    error?: string;
    success?: boolean;
    optional?: boolean;
    required?: boolean;
    disabled?: boolean;
    leadingIcon?: React.ReactNode;
    trailingIcon?: React.ReactNode;
    size?: InputSize;
    className?: string;
}
interface TopLabelProps extends BaseProps, Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    variant?: 'top';
}
interface FloatingLabelProps extends BaseProps, Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    variant: 'floating';
}
interface InlineLabelProps extends BaseProps, Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    variant: 'inline';
}
type InputProps = TopLabelProps | FloatingLabelProps | InlineLabelProps;
declare const Input: React.FC<InputProps>;

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label?: string;
    indeterminate?: boolean;
    error?: boolean;
}
declare const Checkbox: React.FC<CheckboxProps>;

interface ChipProps {
    children: React.ReactNode;
    variant?: 'default' | 'purple' | 'green' | 'red';
    dot?: boolean;
    onDismiss?: () => void;
}
declare const Chip: React.FC<ChipProps>;

type StepStatus = 'default' | 'active' | 'completed' | 'disabled' | 'error';
interface Step {
    title: string;
    subheader?: string;
    status?: StepStatus;
    isOptional?: boolean;
    icon?: React.ReactNode;
}
interface StepperProps {
    steps: Step[];
    orientation?: 'horizontal' | 'vertical';
    size?: 'sm' | 'md' | 'lg';
    variant?: 'number' | 'dot' | 'icon';
    className?: string;
}
declare const Stepper: React.FC<StepperProps>;

interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label?: string;
}
declare const Switch: React.FC<SwitchProps>;

interface ToggleProps {
    options: string[];
    value?: string;
    onChange?: (value: string) => void;
    disabled?: boolean;
}
declare const Toggle: React.FC<ToggleProps>;

export { Button, Checkbox, Chip, Input, Stepper, Switch, Toggle };
