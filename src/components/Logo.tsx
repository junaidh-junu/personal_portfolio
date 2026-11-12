interface Props {
  size?: number;
  className?: string;
}

/**
 * The brand mark: a JH monogram. The J and the H share one stem, and the
 * last stroke of the H is a text cursor: flat ends, slightly taller than
 * the letters. The letters follow the text colour; the cursor is the accent.
 * At 32px and below a heavier cut keeps the line from thinning out.
 */
export default function Logo({ size = 28, className = '' }: Props) {
  const small = size <= 32;
  const weight = small ? 11 : 8;
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <path
        d={small ? 'M10 38A11 11 0 0 0 32 38V15' : 'M13 39A10 10 0 0 0 33 39V15'}
        stroke="currentColor"
        strokeWidth={weight}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d={small ? 'M32 32H53' : 'M33 32H51'} stroke="currentColor" strokeWidth={weight} />
      <path d={small ? 'M53 7V57' : 'M51 8V56'} className="logo-cursor" strokeWidth={weight} />
    </svg>
  );
}
