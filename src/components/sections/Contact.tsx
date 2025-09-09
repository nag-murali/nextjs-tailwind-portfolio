'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Send, CheckCircle, PhoneCall } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import Link from 'next/link';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'sonner';
import * as motion from 'motion/react-client';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/nag-murali',
      icon: FaGithub,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/nagendra-muralidhar-pulla-0a836a21b',
      icon: FaLinkedin,
    },
    {
      name: 'Call',
      href: 'tel:+919666756386',
      icon: PhoneCall,
    },
    {
      name: 'Email',
      href: 'mailto:nagmurali96@gmail.com',
      icon: HiMail,
    },
  ];

  // Animation variants
  const sectionHeadingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.0,
        delay: 0.3,
      },
    },
  };

  const socialButtonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.5 + i * 0.2,
        duration: 0.7,
      },
    }),
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        delay: 0.4,
      },
    },
  };

  const formItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.6 + i * 0.25,
        duration: 0.8,
      },
    }),
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send form data using axios
      await axios.post('/api/contact', formData);

      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error: unknown) {
      console.error('Form submission error:', error);

      // Get error message from response or use generic message
      const errorMessage =
        error instanceof Error
          ? error.message
          : 'Failed to send message. Please try again later.';

      // Show error toast only
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id='contact' className='pt-20 pb-12 bg-muted/20'>
      <div className='container mx-auto px-4'>
        {/* Section Header */}
        <motion.div
          className='text-center mb-16'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionHeadingVariants}
        >
          <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>
            Get In Touch
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto mb-6'>
            Have a project in mind or want to collaborate? I&apos;d love to hear
            from you. Let&apos;s create something amazing together!
          </p>

          {/* Social Links */}
          <div className='flex gap-3 justify-center mb-8'>
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <motion.div
                  key={social.name}
                  custom={index}
                  variants={socialButtonVariants}
                  initial='hidden'
                  whileInView='visible'
                  whileHover='hover'
                  viewport={{ once: true }}
                >
                  <Button
                    variant='outline'
                    size='icon'
                    asChild
                    className='h-10 w-10 text-muted-foreground hover:text-primary hover:border-primary transition-colors'
                  >
                    <Link
                      href={social.href}
                      target='_blank'
                      rel='noopener noreferrer'
                      aria-label={social.name}
                    >
                      <IconComponent className='h-5 w-5' />
                    </Link>
                  </Button>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <div className='max-w-2xl mx-auto'>
          {/* Contact Form */}
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.1 }}
            variants={cardVariants}
          >
            <Card className='hover:shadow-lg transition-shadow'>
              <CardHeader>
                <CardTitle className='text-2xl'>Send Message</CardTitle>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <motion.div
                    className='text-center py-8 space-y-4'
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: 'spring' as const,
                        stiffness: 200,
                        damping: 25,
                        delay: 0.4,
                      }}
                    >
                      <CheckCircle className='h-16 w-16 text-green-500 mx-auto' />
                    </motion.div>
                    <h3 className='text-xl font-semibold text-foreground'>
                      Message Sent!
                    </h3>
                    <p className='text-muted-foreground'>
                      Thank you for reaching out. I&apos;ll get back to you
                      within 24 hours.
                    </p>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8, duration: 0.6 }}
                    >
                      <Button
                        variant='outline'
                        onClick={() => setIsSubmitted(false)}
                        className='mt-4'
                      >
                        Send Another Message
                      </Button>
                    </motion.div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className='space-y-6'>
                    {/* Name Field */}
                    <motion.div
                      className='space-y-2'
                      custom={0}
                      variants={formItemVariants}
                    >
                      <Label htmlFor='name'>Full Name *</Label>
                      <Input
                        id='name'
                        name='name'
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder='Your full name'
                        required
                      />
                    </motion.div>

                    {/* Email Field */}
                    <motion.div
                      className='space-y-2'
                      custom={1}
                      variants={formItemVariants}
                    >
                      <Label htmlFor='email'>Email Address *</Label>
                      <Input
                        id='email'
                        name='email'
                        type='email'
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder='your.email@example.com'
                        required
                      />
                    </motion.div>

                    {/* Message Field */}
                    <motion.div
                      className='space-y-2'
                      custom={2}
                      variants={formItemVariants}
                    >
                      <Label htmlFor='message'>Message *</Label>
                      <Textarea
                        id='message'
                        name='message'
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder='Tell me about your project or idea...'
                        className='min-h-[120px]'
                        required
                      />
                    </motion.div>

                    {/* Submit Button */}
                    <motion.div custom={3} variants={formItemVariants}>
                      <Button
                        type='submit'
                        size='lg'
                        className='w-full'
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className='animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2' />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className='h-4 w-4 mr-2' />
                            Send Message
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
