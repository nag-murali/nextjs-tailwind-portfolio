'use client';

import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { cn } from '@/lib/utils';
import * as motion from 'motion/react-client';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === 'dark';

  // Animation variants
  const buttonVariants = {
    pressed: { scale: 0.9 },
    hover: { scale: 1.1 },
    idle: { scale: 1 },
  };

  const sunVariants = {
    visible: {
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: { duration: 0.5 },
    },
    hidden: {
      opacity: 0,
      rotate: 90,
      scale: 0,
      transition: { duration: 0.5 },
    },
  };

  const moonVariants = {
    visible: {
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: { duration: 0.5 },
    },
    hidden: {
      opacity: 0,
      rotate: -90,
      scale: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div whileHover='hover' whileTap='pressed' variants={buttonVariants}>
      <SwitchPrimitive.Root
        checked={isDark}
        onCheckedChange={() => setTheme(isDark ? 'light' : 'dark')}
        className={cn(
          'peer data-[state=checked]:bg-primary/80 data-[state=unchecked]:bg-slate-200 dark:data-[state=unchecked]:bg-slate-700',
          'focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-[24px] w-[46px]',
          'shrink-0 items-center rounded-full border border-transparent shadow-sm transition-all',
          'outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 relative'
        )}
        aria-label='Toggle dark mode'
      >
        <SwitchPrimitive.Thumb
          className={cn(
            'bg-white dark:data-[state=unchecked]:bg-slate-200 dark:data-[state=checked]:bg-white',
            'pointer-events-none block h-[20px] w-[20px] rounded-full shadow-lg ring-0',
            'transition-transform data-[state=checked]:translate-x-[24px] data-[state=unchecked]:translate-x-[2px]',
            'flex items-center justify-center'
          )}
        >
          {/* Icons inside the thumb with Motion */}
          <motion.div
            variants={sunVariants}
            initial='hidden'
            animate={isDark ? 'hidden' : 'visible'}
            className='absolute'
          >
            <Sun className='h-3 w-3 text-amber-500' />
          </motion.div>

          <motion.div
            variants={moonVariants}
            initial='hidden'
            animate={isDark ? 'visible' : 'hidden'}
            className='absolute'
          >
            <Moon className='h-3 w-3 text-indigo-500' />
          </motion.div>
        </SwitchPrimitive.Thumb>
      </SwitchPrimitive.Root>
    </motion.div>
  );
}
