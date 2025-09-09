import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-muted/30 border-t'>
      <div className='container mx-auto px-4 py-8'>
        {/* Bottom Section */}
        <div className='flex flex-col sm:flex-row justify-between items-center gap-4'>
          <div className='text-sm text-muted-foreground'>
            © {currentYear} Nagendra Muralidhar Pulla. All rights reserved.
          </div>

          <div className='flex items-center gap-2 text-sm text-muted-foreground'>
            <span>Built with</span>
            <div className='flex items-center gap-1'>
              <Badge variant='secondary' className='text-xs'>
                <Link
                  href='https://nextjs.org'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-primary transition-colors'
                >
                  Next.js
                </Link>
              </Badge>
              <Badge variant='secondary' className='text-xs'>
                <Link
                  href='https://tailwindcss.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-primary transition-colors'
                >
                  Tailwind
                </Link>
              </Badge>
              <Badge variant='secondary' className='text-xs'>
                <Link
                  href='https://ui.shadcn.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-primary transition-colors'
                >
                  shadcn/ui
                </Link>
              </Badge>
              <Badge variant='secondary' className='text-xs'>
                <Link
                  href='https://motion.dev'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-primary transition-colors'
                >
                  Motion
                </Link>
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
