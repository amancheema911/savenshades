import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

function ArrowUpRightIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7 17 17 7M9 7h8v8"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const sizeStyles = {
  sm: {
    root: "gap-3 pl-4 pr-1.5 py-1.5 text-sm",
    icon: "size-8",
    iconSvg: 15,
  },
  md: {
    root: "gap-4 pl-6 pr-1.5 py-1.5 text-[0.95rem] sm:pl-7 sm:text-base",
    icon: "size-10 sm:size-11",
    iconSvg: 18,
  },
  lg: {
    root: "gap-5 pl-7 pr-1.5 py-1.5 text-base sm:pl-8 sm:text-lg",
    icon: "size-11 sm:size-12",
    iconSvg: 20,
  },
} as const;

type ButtonSize = keyof typeof sizeStyles;

type CommonProps = {
  children: ReactNode;
  className?: string;
  size?: ButtonSize;
  fullWidth?: boolean;
  showIcon?: boolean;
};

type ButtonAsLink = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children"> & {
    href: string;
    type?: never;
    disabled?: never;
  };

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

export type ButtonProps = ButtonAsLink | ButtonAsButton;

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export default function Button({
  children,
  className,
  size = "md",
  fullWidth = false,
  showIcon = true,
  ...props
}: ButtonProps) {
  const sizing = sizeStyles[size];

  const classes = cx(
    "group inline-flex items-center rounded-full",
    showIcon ? "justify-between" : "justify-center",
    "bg-[var(--brand-color)] text-white",
    "font-medium",
    "shadow-md",
    "transition-[transform,filter,box-shadow] duration-300",
    "hover:brightness-110 hover:shadow-lg",
    "active:scale-[0.98]",
    "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--brand-color-deep)]",
    "disabled:pointer-events-none disabled:opacity-60",
    sizing.root,
    !showIcon && "pr-6 sm:pr-7",
    fullWidth && "w-full",
    className,
  );

  const content = (
    <>
      <span className="whitespace-nowrap">{children}</span>
      {showIcon ? (
        <span
          className={cx(
            "inline-flex shrink-0 items-center justify-center rounded-full",
            "bg-[var(--brand-color-deep)] text-white",
            "transition-transform duration-300 group-hover:scale-105",
            sizing.icon,
          )}
          aria-hidden="true"
        >
          <ArrowUpRightIcon size={sizing.iconSvg} />
        </span>
      ) : null}
    </>
  );

  if ("href" in props && props.href) {
    const { href, ...linkProps } = props;
    return (
      <Link href={href} className={classes} {...linkProps}>
        {content}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button
      type={buttonProps.type ?? "button"}
      className={classes}
      {...buttonProps}
    >
      {content}
    </button>
  );
}
