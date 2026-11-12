import { useEffect, useRef } from 'react';

export type MascotPose = 'wave' | 'phone' | 'point' | 'sleep';

interface Props {
  pose: MascotPose;
  /** Rendered height and width in px. */
  size?: number;
  className?: string;
}

/**
 * The character: the cursor from the JH logo, standing up, with a face.
 * It is decoration, so it is hidden from assistive tech. Only the waving
 * pose follows the pointer with its eyes, and only when motion is allowed.
 */
export default function Mascot({ pose, size = 96, className = '' }: Props) {
  const svg = useRef<SVGSVGElement>(null);
  const eyes = useRef<SVGGElement>(null);

  useEffect(() => {
    if (pose !== 'wave') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let frame = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const box = svg.current?.getBoundingClientRect();
        if (!box || !eyes.current) return;
        const dx = e.clientX - (box.left + box.width / 2);
        const dy = e.clientY - (box.top + box.height * 0.3);
        const len = Math.hypot(dx, dy) || 1;
        const reach = Math.min(1, len / 240) * 1.3;
        eyes.current.style.transform = `translate(${((dx / len) * reach).toFixed(2)}px, ${((dy / len) * reach).toFixed(2)}px)`;
      });
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', onMove);
    };
  }, [pose]);

  if (pose === 'sleep') {
    return (
      <svg ref={svg} width={size} height={size} viewBox="0 0 64 64" className={`mascot ${className}`} aria-hidden="true">
        <path className="mascot-limb" d="M54 46.5H60M54 51.5H60" />
        <rect className="mascot-body" x="8" y="42" width="46" height="14" rx="3.5" />
        <path className="mascot-line" d="M13 48.4q1.7 1.7 3.4 0M19.6 48.4q1.7 1.7 3.4 0" />
        <text className="mascot-z" x="40" y="35" fontSize="8">z</text>
        <text className="mascot-z" x="48" y="27" fontSize="10">z</text>
      </svg>
    );
  }

  const look = pose === 'wave' ? 0 : 1;
  return (
    <svg ref={svg} width={size} height={size} viewBox="0 0 64 64" className={`mascot ${className}`} aria-hidden="true">
      <path className="mascot-limb" d="M25 31L18 37M29 52V58M35 52V58" />
      {pose === 'wave' && <path className="mascot-limb mascot-wave-arm" d="M39 30L47 19" />}
      {pose === 'phone' && <path className="mascot-limb" d="M39 32L45 31" />}
      {pose === 'point' && <path className="mascot-limb" d="M39 30L47 30" />}
      <rect className="mascot-body" x="25" y="6" width="14" height="46" rx="3.5" />
      <g ref={eyes}>
        <circle className="mascot-eye" cx={29.2 + look} cy="19" r="1.6" />
        <circle className="mascot-eye" cx={34.8 + look} cy="19" r="1.6" />
      </g>
      <path className="mascot-line" d={`M${29.5 + look} 24.5Q${32 + look} 27 ${34.5 + look} 24.5`} />
      {pose === 'phone' && <rect className="mascot-phone" x="44.5" y="23" width="9" height="15" rx="2" />}
      {pose === 'point' && <rect className="mascot-prop" x="49" y="23.5" width="13" height="13" rx="4" />}
    </svg>
  );
}
