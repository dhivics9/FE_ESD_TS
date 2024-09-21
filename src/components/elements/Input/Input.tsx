import { forwardRef, InputHTMLAttributes, ReactNode } from "react";

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label?: string;
  labelAlt?: string;
  labelBottomLeft?: string;
  labelBottomRight?: string;
  error?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
  as?: "input" | "textarea";
  readonlyPlaceholder?: boolean;
}

const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(
  (
    {
      label,
      labelAlt,
      labelBottomLeft,
      labelBottomRight,
      error,
      leftIcon,
      rightIcon,
      className = "",
      as = "input",
      readonlyPlaceholder = false,
      ...props
    },
    ref,
  ) => {
    const Component = as;
    return (
      <label className={`form-control w-full ${className}`}>
        {(label || labelAlt) && (
          <div className="label">
            {label && (
              <span className="label-text text-base font-medium capitalize">
                {label}
              </span>
            )}
            {labelAlt && (
              <span className="label-text-alt text-base font-medium">
                {labelAlt}
              </span>
            )}
          </div>
        )}
        <div className="relative">
          {leftIcon && (
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              {leftIcon}
            </span>
          )}
          <Component
            // @ts-expect-error: TypeScript cannot infer the correct type for ref here
            ref={ref}
            readOnly={readonlyPlaceholder}
            className={`input-bordered placeholder:text-textGrayColor input w-full placeholder:text-sm ${
              leftIcon ? "pl-10" : ""
            } ${rightIcon ? "pr-10" : ""} ${error ? "input-error" : ""} ${
              as === "textarea" && "min-h-28 pt-4"
            } ${as !== "input" && "pt-4"} ${
              readonlyPlaceholder ? "cursor-not-allowed" : "bg-transparent"
            }`}
            {...props}
          />
          {rightIcon && (
            <span className="absolute inset-y-0 right-0 flex items-center pr-3">
              {rightIcon}
            </span>
          )}
        </div>
        {error && <span className="label-text-alt text-error">{error}</span>}
        {(labelBottomLeft || labelBottomRight) && (
          <div className="label">
            {labelBottomLeft && (
              <span className="label-text-alt">{labelBottomLeft}</span>
            )}
            {labelBottomRight && (
              <span className="label-text-alt">{labelBottomRight}</span>
            )}
          </div>
        )}
      </label>
    );
  },
);

Input.displayName = "Input";

export default Input;
