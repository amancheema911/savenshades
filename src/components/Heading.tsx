import type { ElementType, ReactNode } from "react";

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type HeadingAlign = "left" | "center";
type HeadingTone = "light" | "dark";
type HeadingSize = "hero" | "page" | "section";

export type HeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  tag?: HeadingTag;
  align?: HeadingAlign;
  tone?: HeadingTone;
  size?: HeadingSize;
  id?: string;
  showLine?: boolean;
  className?: string;
  eyebrowClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  lineClassName?: string;
  children?: ReactNode;
};

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

const sizeStyles: Record<
  HeadingSize,
  { title: string; description: string; titleGap: string }
> = {
  hero: {
    titleGap: "mt-6",
    title: "font-display text-[2.4rem] font-bold leading-[1.05] tracking-[-0.025em] sm:text-[3.4rem] lg:text-[4rem]",
    description: "text-[1rem] leading-relaxed sm:text-lg",
  },
  page: {
    titleGap: "mt-5",
    title: "font-display text-[2.55rem] font-bold leading-[1.02] tracking-[-0.035em] sm:text-[3.5rem] lg:text-[4.25rem]",
    description: "mt-5 text-[1.02rem] leading-relaxed sm:text-lg",
  },
  section: {
    titleGap: "mt-3",
    title: "font-display text-[1.85rem] font-bold tracking-tight sm:text-4xl lg:text-[2.75rem]",
    description: "mt-4 text-[0.95rem] leading-relaxed sm:text-base space-y-2",
  },
};

const toneStyles: Record<
  HeadingTone,
  { title: string; description: string }
> = {
  light: {
    title: "text-white",
    description: "text-white/78",
  },
  dark: {
    title: "text-[#0B1120]",
    description: "text-black/50",
  },
};

export default function Heading({
  eyebrow,
  title,
  description,
  tag = "h2",
  align = "left",
  tone = "dark",
  size = "section",
  id,
  showLine = true,
  className,
  eyebrowClassName,
  titleClassName,
  descriptionClassName,
  lineClassName,
  children,
}: HeadingProps) {
  const Tag = tag as ElementType;
  const sizes = sizeStyles[size];
  const tones = toneStyles[tone];
  const isCenter = align === "center";

  return (
    <div className={cx(isCenter ? "text-center" : undefined, className)}>
      {eyebrow ? (
        <div
          className={cx(
            "flex items-center gap-3",
            isCenter && "justify-center",
          )}
        >
          {showLine ? (
            <span
              className={cx(
                "h-px w-10 bg-[var(--brand-color)] animate-about-line",
                lineClassName,
              )}
              aria-hidden="true"
            />
          ) : null}
          <p
            className={cx(
              "text-xs font-bold tracking-[0.22em] text-[var(--brand-color)] sm:text-sm",
              eyebrowClassName,
            )}
          >
            {eyebrow}
          </p>
        </div>
      ) : null}

      <Tag
        id={id}
        className={cx(
          sizes.titleGap,
          sizes.title,
          tones.title,
          titleClassName,
        )}
      >
        {title}
      </Tag>

      {description ? (
        <div
          className={cx(
            sizes.description,
            tones.description,
            descriptionClassName,
          )}
        >
          {description}
        </div>
      ) : null}

      {children}
    </div>
  );
}
