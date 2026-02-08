import { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [isPointer, setIsPointer] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024 || 'ontouchstart' in window);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    if (isMobile) {
      return;
    }

    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;

    if (!cursor || !cursorDot) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let dotX = 0;
    let dotY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('a, button, input, textarea, [role="button"]');
      setIsPointer(!!isInteractive);
    };

    const animateCursor = () => {
      const speed = 0.15;
      const dotSpeed = 0.3;

      cursorX += (mouseX - cursorX) * speed;
      cursorY += (mouseY - cursorY) * speed;
      dotX += (mouseX - dotX) * dotSpeed;
      dotY += (mouseY - dotY) * dotSpeed;

      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
      cursorDot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0)`;

      requestAnimationFrame(animateCursor);
    };

    const animationId = requestAnimationFrame(animateCursor);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('resize', checkMobile);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationId);
    };
  }, [isMobile]);

  if (isMobile) {
    return null;
  }

  return (
    <>
      {/* Main cursor circle */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 w-8 h-8 border rounded-full pointer-events-none z-[9999] transition-all duration-200 ${
          isPointer ? 'scale-150 border-accent' : 'scale-100 border-ivory-faint'
        }`}
        style={{
          marginLeft: '-16px',
          marginTop: '-16px',
          mixBlendMode: 'difference',
        }}
      />

      {/* Cursor dot */}
      <div
        ref={cursorDotRef}
        className={`fixed top-0 left-0 w-1 h-1 rounded-full pointer-events-none z-[9999] transition-all duration-100 ${
          isPointer ? 'bg-accent scale-150' : 'bg-ivory-dim scale-100'
        }`}
        style={{
          marginLeft: '-2px',
          marginTop: '-2px',
        }}
      />
    </>
  );
};

export default CustomCursor;
