interface Props {
  size?: number;
  className?: string;
}

/**
 * The brand mark: the Arabic letter jim (ج), the first letter of Junaidh,
 * drawn as one rounded stroke with its dot cradled in the bowl.
 * The stroke follows the text colour; the dot is the accent.
 */
export default function Logo({ size = 28, className = '' }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path
        d="M17 14 H38 a6 6 0 0 1 6 6 V30 C44 44 36 53 25 53 C16 53 10 47 10 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="29" cy="37" r="6" className="fill-accent" />
    </svg>
  );
}
