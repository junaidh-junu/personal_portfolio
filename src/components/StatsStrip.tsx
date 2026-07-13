import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { siteStats } from '../data/portfolio';
import type { SiteStat } from '../types';

function parseStatValue(value: string) {
  const match = value.match(/^([^\d]*)(\d+)(.*)$/);
  if (!match) return { number: 0, prefix: '', suffix: value };
  return { number: parseInt(match[2], 10), prefix: match[1], suffix: match[3] };
}

interface StatItemProps {
  stat: SiteStat;
  index: number;
  isActive: boolean;
}

const StatItem = ({ stat, index, isActive }: StatItemProps) => {
  const { number, prefix, suffix } = parseStatValue(stat.value);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) return;
    const duration = 1200;
    const startTime = performance.now();
    let rafId: number;
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * number));
      if (progress < 1) rafId = requestAnimationFrame(step);
    };
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [isActive, number]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={isActive ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.08 + index * 0.07 }}
      className="px-4 py-6 md:px-8 md:py-8 text-center md:text-left"
    >
      <div className="font-display text-4xl md:text-5xl lg:text-6xl text-ink mb-2">
        {prefix}{count}{suffix}
      </div>
      <div className="font-mono text-[10px] text-ink-muted tracking-[0.2em] uppercase">
        {stat.label}
      </div>
    </motion.div>
  );
};

const StatsStrip = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <section id="stats" className="border-b border-rule">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 divide-x divide-rule border-y border-rule"
        >
          {siteStats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} index={i} isActive={inView} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsStrip;
