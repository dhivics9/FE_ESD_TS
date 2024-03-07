import classNames from "classnames";
import { forwardRef } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: "primary" | "secondary" | "danger";
  href?: string;
  disabled?: boolean;
}

const variants = {
  primary:
    "bg-primaryNormal hover:bg-primaryNormalHover text-[#ffffff] hover:brightness-90",
  secondary:
    "bg-[#ffffff] hover:bg-infoLightHover border border-[--gray-300] text-infoDark",
  danger: "bg-red-500 border-red-500 text-white hover:brightness-90",
};

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ children, className, variant = "primary", ...props }, ref) => {
    return (
      <button
        disabled={props.disabled}
        ref={ref}
        className={classNames(
          "shadow-[0px 1px 2px 0px rgba(16, 24, 40, 0.05)] h-full rounded-lg p-[10px_16px] font-semibold transition-all",
          variants[variant],
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
