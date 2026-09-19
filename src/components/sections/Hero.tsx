import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AnimatedHeading } from '@/components/ui/animated';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMail, HiArrowDown, HiDownload } from 'react-icons/hi';
import Link from 'next/link';
import Image from 'next/image';
import * as motion from 'motion/react-client';
import { profile } from '@/data/profile';
import { contact } from '@/data/social';

const Hero = () => {
  return (
    <section
      id='home'
      className='flex items-center justify-center bg-gradient-to-br from-background to-muted/20 relative pt-8'
    >
      <div className='container mx-auto px-4 py-16'>
        <div className='text-center space-y-6 max-w-3xl mx-auto'>
          {/* Profile Photo */}
          <div className='flex justify-center mb-6'>
            <div className='relative h-28 w-28 md:h-32 md:w-32'>
              {/* Rotating Glow Trail */}
              <motion.div
                className='absolute inset-0 rounded-full'
                style={{
                  background:
                    'conic-gradient(from 0deg, transparent 270deg, var(--primary) 360deg)',
                  filter: 'blur(6px)',
                  opacity: 0.8,
                }}
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />

              {/* Secondary Pulse Glow */}
              <motion.div
                className='absolute inset-0 rounded-full border-2 border-primary/40'
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Profile Image Container */}
              <div className='relative h-full w-full rounded-full border-4 border-primary/20 shadow-lg overflow-hidden bg-background z-10'>
                <Image
                  src={profile.photo.hero}
                  alt={`${profile.name} - ${profile.title}`}
                  fill
                  className='object-cover'
                  sizes='(max-width: 768px) 112px, 128px'
                  priority
                />
              </div>
            </div>
          </div>

          {/* Status Badge */}
          <Badge variant='secondary' className='mb-3'>
            {profile.availability}
          </Badge>

          {/* Animated Heading with Transition */}
          <AnimatedHeading name={profile.name} title={profile.headingTitle} />

          {/* Description */}
          <p className='text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed'>
            {profile.tagline}
          </p>

          {/* CTA Buttons */}
          <div className='flex flex-col sm:flex-row gap-3 justify-center items-center pt-2'>
            <Button asChild size='lg' className='px-6 py-3 w-48'>
              <Link href='#projects'>View My Work</Link>
            </Button>
            <Button
              variant='outline'
              size='lg'
              asChild
              className='px-6 py-3 w-48'
            >
              <Link
                href={profile.resumeUrl}
                target='_blank'
                rel='noopener noreferrer'
              >
                <HiDownload className='h-4 w-4 mr-2' />
                Resume
              </Link>
            </Button>
          </div>

          {/* Social Links */}
          <div className='flex justify-center items-center gap-4 pt-4'>
            <Link
              href={contact.github}
              target='_blank'
              rel='noopener noreferrer'
              className='text-muted-foreground hover:text-primary transition-colors'
            >
              <FaGithub className='h-5 w-5' />
              <span className='sr-only'>GitHub</span>
            </Link>
            <Link
              href={contact.linkedin}
              target='_blank'
              rel='noopener noreferrer'
              className='text-muted-foreground hover:text-primary transition-colors'
            >
              <FaLinkedin className='h-5 w-5' />
              <span className='sr-only'>LinkedIn</span>
            </Link>
            <Link
              href={`mailto:${contact.email}`}
              className='text-muted-foreground hover:text-primary transition-colors'
            >
              <HiMail className='h-5 w-5' />
              <span className='sr-only'>Email</span>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce'>
          <Link
            href='#about'
            className='text-muted-foreground hover:text-primary transition-colors'
          >
            <HiArrowDown className='h-6 w-6' />
            <span className='sr-only'>Scroll down</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
