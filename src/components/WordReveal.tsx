import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface WordRevealProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3';
  delay?: number;
  stagger?: number;
  once?: boolean;
}

const motionTags = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
};

const WordReveal = ({
  text,
  className,
  as = 'h2',
  delay = 0,
  stagger = 0.07,
  once = true,
}: WordRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: '-10% 0px' });

  const words = text.split(' ');
  const MotionTag = motionTags[as];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 24, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <MotionTag
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden mr-[0.25em] last:mr-0"
          style={{ verticalAlign: 'bottom' }}
        >
          <motion.span className="inline-block" variants={wordVariants}>
            {word}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
};

export default WordReveal;
