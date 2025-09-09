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

  return (
    <div
      className={`relative min-h-[90px] md:min-h-[140px] flex flex-col justify-center ${className}`}
    >
      <motion.h1 className='text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight'>
        Hi, I&apos;m{' '}
        <motion.span
          className='bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent inline-block'
          initial={{ opacity: 1 }}
          animate={{
            opacity: showName ? 1 : 0,
            y: showName ? 0 : -20,
          }}
          transition={{
            opacity: { duration: 0.5, ease: 'easeOut' },
            y: { duration: 0.5, ease: 'easeOut' },
          }}
        >
          {name}
        </motion.span>
      </motion.h1>

      <motion.h2
        className='text-lg md:text-xl lg:text-2xl text-muted-foreground font-medium absolute left-1/2 transform -translate-x-1/2 w-full'
        initial={{ opacity: 0 }}
        animate={{
          opacity: showName ? 0 : 1,
          y: showName
            ? '3rem' // Hidden position (48px at default font size)
            : '1.75rem', // Visible position (28px at default font size)
        }}
        transition={{
          opacity: { duration: 0.5, ease: 'backOut' },
          y: { duration: 0.6, ease: 'backOut' },
        }}
      >
        {title}
      </motion.h2>
    </div>
  );
};

export default AnimatedHeading;
