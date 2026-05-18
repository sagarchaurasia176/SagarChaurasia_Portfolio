import type { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type BaseProps = {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
};

type ButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> & { as?: "button" };

type ButtonAsAnchor = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children"> & { as: "a" };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const variantClasses = {
  primary:
    "bg-primary-600 text-white hover:bg-primary-700 shadow-sm shadow-primary-600/25",
  outline:
    "border border-surface-300 dark:border-surface-600 text-surface-700 dark:text-surface-300 hover:border-primary-400 dark:hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 bg-white dark:bg-surface-800",
  ghost:
    "text-surface-600 dark:text-surface-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-surface-100 dark:hover:bg-surface-800",
};

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

export default function Button(props: ButtonProps) {
  const { variant = "primary", size = "md" } = props;

  const classes = `inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 cursor-pointer ${variantClasses[variant]} ${sizeClasses[size]} ${props.className || ""}`;

  if (props.as === "a") {
    const { as: _, variant: _v, size: _s, children, className: _c, ...anchorProps } = props as ButtonAsAnchor & { variant?: string; size?: string };
    return (
      <a className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  const { as: _, variant: _v, size: _s, children, className: _c, ...buttonProps } = props as ButtonAsButton & { variant?: string; size?: string };
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
