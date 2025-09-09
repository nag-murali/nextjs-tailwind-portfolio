import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, MapPin, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import * as motion from 'motion/react-client';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: 'Gale Partners',
      role: 'Frontend Developer',
      location: 'Office',
      type: 'Hybrid',
      startDate: 'April 2022',
      endDate: 'Present',
      duration: '3+ years',
      companyUrl: 'https://galepartners.com',
      description:
        'Developed scalable frontend solutions for multiple projects including Weave, Navigator, and BMO for Women, focusing on performance optimization and accessibility.',
      achievements: [
        'Weave (GALE CRM Automation Platform): Developed scalable frontend from scratch using React, Vite, Zustand, and Ant Design with integrated error tracking and performance optimization. Built reusable multi-step forms and dynamic dashboards with code splitting and lazy loading for optimal user experience',
        'Navigator: Created reusable React components and infinite-scroll table for large datasets, built custom budget sliders with Facebook and TikTok integrations. Modernized Navigator stack with Next.js, Material-UI, and React Query, significantly improving application performance and maintainability',
        'BMO for Women (Bank of Montreal Initiative): Developed accessible, reusable React components using Emotion with improved keyboard navigation and Jest testing. Optimized image handling using Next.js and enhanced UI development workflow using Storybook for component documentation. Maintained type safety and clean code architecture with TypeScript across all projects for scalable, maintainable solutions',
        'Collaborated with cross-functional teams in Agile/Scrum environments and improved code quality with ESLint, Prettier, and Husky',
        'Implemented state management using Redux, React Query, and Zustand across projects.',
      ],
      technologies: [
        'React',
        'Next.js',
        'TypeScript',
        'Vite',
        'Zustand',
        'Redux',
        'React Query',
        'Ant Design',
        'Material-UI',
        'Emotion',
        'Jest',
        'Storybook',
      ],
    },
  ];

  // Animation variants for achievements
  const achievementListVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const achievementItemVariants = {
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

  const techBadgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  const techListVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.3,
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
                            {exp.duration}
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
                              {exp.startDate} - {exp.endDate}
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

                    <CardContent className='space-y-4 pt-0'>
                      <p className='text-base font-medium leading-relaxed text-foreground'>
                        {exp.description}
                      </p>

                      {/* Key Achievements */}
                      <div>
                        <h4 className='font-semibold text-foreground mb-2 text-sm'>
                          Key Achievements
                        </h4>
                        <motion.ul
                          className='space-y-1'
                          initial='hidden'
                          whileInView='visible'
                          viewport={{ once: true, amount: 0.2, margin: '50px' }}
                          variants={achievementListVariants}
                        >
                          {exp.achievements.map((achievement, idx) => (
                            <motion.li
                              key={idx}
                              className='flex items-start gap-2 text-muted-foreground text-sm'
                              variants={achievementItemVariants}
                            >
                              <span className='text-primary mt-1 text-xs'>
                                •
                              </span>
                              <span className='leading-relaxed'>
                                {achievement}
                              </span>
                            </motion.li>
                          ))}
                        </motion.ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className='font-semibold text-foreground mb-2 text-sm'>
                          Technologies
                        </h4>
                        <motion.div
                          className='flex flex-wrap gap-1'
                          variants={techListVariants}
                          initial='hidden'
                          whileInView='visible'
                          viewport={{ once: true }}
                        >
                          {exp.technologies.map(tech => (
                            <motion.div key={tech} variants={techBadgeVariants}>
                              <Badge
                                variant='secondary'
                                className='text-xs px-2 py-0'
                              >
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Education */}
        {/* <div>
          <div className='flex justify-center'>
            <div className='w-full max-w-4xl'>
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className='hover:shadow-lg transition-shadow h-full'
                >
                  <CardHeader className='pb-4 border-b'>
                    <CardTitle className='text-2xl font-bold text-foreground mb-4'>
                      Education
                    </CardTitle>
                    <div className='space-y-2'>
                      <div className='flex items-start justify-between gap-2'>
                        <CardTitle className='text-lg leading-tight'>
                          {edu.degree}
                        </CardTitle>
                        <Badge variant='outline' className='text-xs shrink-0'>
                          GPA: {edu.gpa}
                        </Badge>
                      </div>
                      <p className='text-primary font-medium text-sm'>
                        {edu.institution}
                      </p>
                      <div className='flex flex-wrap items-center gap-3 text-xs text-muted-foreground'>
                        <div className='flex items-center gap-1'>
                          <MapPin className='h-3 w-3' />
                          <span>{edu.location}</span>
                        </div>
                        <div className='flex items-center gap-1'>
                          <CalendarDays className='h-3 w-3' />
                          <span>
                            {edu.startDate} - {edu.endDate}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className='space-y-4 pt-0'>
                    <p className='text-muted-foreground text-sm leading-relaxed'>
                      {edu.description}
                    </p>

                    <div>
                      <h4 className='font-semibold text-foreground mb-2 text-sm'>
                        Achievements
                      </h4>
                      <ul className='space-y-1'>
                        {edu.achievements.map((achievement, idx) => (
                          <li
                            key={idx}
                            className='flex items-start gap-2 text-muted-foreground text-sm'
                          >
                            <span className='text-primary mt-1 text-xs'>•</span>
                            <span className='leading-relaxed'>
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Experience;
