'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from '@/components/ui/sheet';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { Separator } from '@/components/ui/separator';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import * as motion from 'motion/react-client';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  // Animation variants for mobile menu
  const listVariants = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    visible: {
      opacity: 1,
      x: 0,
    },
    hidden: {
      opacity: 0,
      x: -20,
    },
  };

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <Link
            href='#home'
            className='text-xl font-bold text-foreground hover:text-primary transition-colors'
          >
            Nagendra Pulla
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className='hidden md:flex'>
            <NavigationMenuList className='space-x-6'>
              {navItems.map(item => (
                <NavigationMenuItem key={item.name}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      className='text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-3 py-2 rounded-md'
                    >
                      {item.name}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Button - Desktop */}
          <div className='hidden md:flex items-center space-x-2'>
            <ThemeToggle />
            <Button asChild>
              <Link href='#contact'>Get In Touch</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className='md:hidden'>
              <Button variant='ghost' size='sm'>
                <Menu className='h-5 w-5' />
                <span className='sr-only'>Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side='right' className='w-80 p-6'>
              <SheetTitle className='sr-only'>Navigation Menu</SheetTitle>
              <div className='flex flex-col h-full'>
                {/* Mobile Logo */}
                <div className='flex items-center justify-between mb-8'>
                  <Link
                    href='#home'
                    className='text-xl font-bold text-foreground'
                    onClick={() => setIsOpen(false)}
                  >
                    Nagendra Pulla
                  </Link>
                </div>

                <Separator className='mb-6' />

                {/* Mobile Navigation with Animation */}
                <nav className='flex-1'>
                  <motion.ul
                    className='space-y-4'
                    initial='hidden'
                    animate={isOpen ? 'visible' : 'hidden'}
                    variants={listVariants}
                  >
                    {navItems.map(item => (
                      <motion.li key={item.name} variants={itemVariants}>
                        <Link
                          href={item.href}
                          className='block text-lg font-medium text-muted-foreground hover:text-primary transition-colors py-2'
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </motion.li>
                    ))}
                  </motion.ul>
                </nav>

                <Separator className='my-6' />

                {/* Theme Toggle - Mobile */}
                <div className='flex items-center justify-between mb-6'>
                  <span className='text-sm font-medium text-muted-foreground'>
                    Toggle theme
                  </span>
                  <ThemeToggle />
                </div>

                {/* Mobile CTA Button */}
                <Button asChild className='w-full'>
                  <Link href='#contact' onClick={() => setIsOpen(false)}>
                    Get In Touch
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
