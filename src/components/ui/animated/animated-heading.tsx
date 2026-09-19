'use client';
import * as motion from 'motion/react-client';
import { useState, useEffect } from 'react';

interface AnimatedHeadingProps {
  name: string;
  title: string;
  interval?: number;
  className?: string;
}

const AnimatedHeading = ({
  name,
  title,
  interval = 3500,
  className = '',
}: AnimatedHeadingProps) => {
  const [showName, setShowName] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowName(prev => !prev);
    }, interval);

    return () => clearInterval(intervalId);
  }, [interval]);

  const transition = {
    opacity: { duration: 0.5, ease: 'easeOut' },
    y: { duration: 0.5, ease: 'easeOut' },
  } as const;

  return (
    // Both states share a single grid cell, so the box is exactly as tall as
    // its tallest state — no absolute positioning, and no reserved dead space.
    <div className={`grid place-items-center ${className}`}>
      <motion.h1
        className='[grid-area:1/1] text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance'
        initial={{ opacity: 1 }}
        animate={{ opacity: showName ? 1 : 0, y: showName ? 0 : -16 }}
        transition={transition}
        aria-hidden={!showName}
      >
        Hi, I&apos;m{' '}
        <span className='bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent'>
          {name}
        </span>
      </motion.h1>

      <motion.p
        className='[grid-area:1/1] text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground leading-tight text-balance'
        initial={{ opacity: 0 }}
        animate={{ opacity: showName ? 0 : 1, y: showName ? 16 : 0 }}
        transition={transition}
        aria-hidden={showName}
      >
        {title}
      </motion.p>
    </div>
  );
};

export default AnimatedHeading;
