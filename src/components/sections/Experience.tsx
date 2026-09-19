import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  CalendarDays,
  MapPin,
  ExternalLink,
  GraduationCap,
} from 'lucide-react';
import Link from 'next/link';
import * as motion from 'motion/react-client';
import { experiences } from '@/data/experience';
import { education } from '@/data/education';
import { formatTenure } from '@/lib/utils';

const Experience = () => {
  // Animation variants for case studies
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Animation variants for section elements
  const sectionHeadingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section id='experience' className='pt-20 bg-background'>
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
            Experience
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            My professional journey and the impact I&apos;ve made across
            different projects
          </p>
        </motion.div>

        {/* Work Experience */}
        <div className='mb-16'>
          <div className='flex justify-center'>
            <div className='w-full max-w-4xl'>
              {experiences.map(exp => (
                <motion.div
                  key={exp.id}
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true, amount: 0.1, margin: '100px' }}
                  variants={cardVariants}
                >
                  <Card className='hover:shadow-lg transition-shadow h-full'>
                    <CardHeader className='pb-4 border-b'>
                      <CardTitle className='text-2xl font-bold text-foreground mb-4'>
                        Work Experience
                      </CardTitle>
                      <div className='space-y-2'>
                        <div className='flex items-start justify-between'>
                          <CardTitle className='text-lg pr-2'>
                            {exp.role}
                          </CardTitle>
                          <Badge variant='outline' className='text-xs shrink-0'>
                            {formatTenure(exp.startDate)}
                          </Badge>
                        </div>
                        <div className='flex items-center gap-2'>
                          <Link
                            href={exp.companyUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-primary hover:underline font-medium text-sm'
                          >
                            {exp.company}
                          </Link>
                          <ExternalLink className='h-3 w-3 text-muted-foreground' />
                        </div>
                        <div className='flex flex-wrap items-center gap-3 text-xs text-muted-foreground'>
                          <div className='flex items-center gap-1'>
                            <MapPin className='h-3 w-3' />
                            <span>{exp.location}</span>
                          </div>
                          <div className='flex items-center gap-1'>
                            <CalendarDays className='h-3 w-3' />
                            <span>
                              {exp.startLabel} - {exp.endLabel}
                            </span>
                          </div>
                          <Badge
                            variant='secondary'
                            className='text-xs px-2 py-0'
                          >
                            {exp.type}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className='space-y-6 pt-0'>
                      <p className='text-base font-medium leading-relaxed text-foreground'>
                        {exp.description}
                      </p>
                      <p className='text-sm text-muted-foreground'>
                        Four platforms, detailed in{' '}
                        <Link
                          href='#projects'
                          className='text-primary hover:underline'
                        >
                          Selected Work
                        </Link>
                        .
                      </p>

                      {/* Case Studies */}
                      <motion.div
                        className='space-y-5'
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true, amount: 0.1, margin: '50px' }}
                        variants={listVariants}
                      >
                        {exp.caseStudies.map(study => (
                          <motion.div
                            key={study.id}
                            variants={itemVariants}
                            className='border-l-2 border-primary/30 pl-4'
                          >
                            <div className='flex flex-wrap items-baseline gap-x-2'>
                              <h4 className='font-semibold text-foreground'>
                                {study.name}
                              </h4>
                              <span className='text-xs text-muted-foreground'>
                                {study.subtitle}
                              </span>
                            </div>
                            <p className='text-sm text-primary mt-1 mb-2'>
                              {study.outcome}
                            </p>
                            <div className='flex flex-wrap gap-1'>
                              {study.technologies.map(tech => (
                                <Badge
                                  key={tech}
                                  variant='secondary'
                                  className='text-xs px-2 py-0'
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Education */}
        <div>
          <div className='flex justify-center'>
            <div className='w-full max-w-4xl'>
              <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.1, margin: '100px' }}
                variants={cardVariants}
              >
                <Card className='hover:shadow-lg transition-shadow h-full'>
                  <CardHeader className='pb-4 border-b'>
                    <CardTitle className='text-2xl font-bold text-foreground'>
                      Education
                    </CardTitle>
                  </CardHeader>

                  <CardContent className='space-y-5 pt-0'>
                    {education.map(edu => (
                      <div key={edu.degree} className='flex items-start gap-3'>
                        <GraduationCap className='h-4 w-4 text-primary mt-1 shrink-0' />
                        <div className='space-y-1'>
                          <div className='flex flex-wrap items-baseline gap-x-2'>
                            <h4 className='font-semibold text-foreground text-sm'>
                              {edu.degree}
                            </h4>
                            <span className='text-xs text-muted-foreground'>
                              {edu.period}
                            </span>
                          </div>
                          <p className='text-primary font-medium text-sm'>
                            {edu.institution}
                          </p>
                          {edu.honours && (
                            <p className='text-xs text-muted-foreground'>
                              {edu.honours}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
