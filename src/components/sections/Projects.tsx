import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import * as motion from 'motion/react-client';
import { featuredWork, earlierProjects } from '@/data/projects';
import { contact } from '@/data/social';

const Projects = () => {
  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  } as const;

  const gridCardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 25,
      },
    },
  } as const;

  return (
    <section id='projects' className='pt-20 bg-muted/20'>
      <div className='container mx-auto px-4'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>
            Selected Work
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            Production platforms I&apos;ve built at Gale Partners, spanning
            marketing automation, digital advertising, and design tooling.
          </p>
        </div>

        {/* Featured Case Studies */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-20 max-w-5xl mx-auto'>
          {featuredWork.map(study => (
            <motion.div
              key={study.id}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <Card className='h-full hover:shadow-lg transition-shadow'>
                <CardHeader className='pb-3'>
                  <CardTitle className='text-xl'>{study.name}</CardTitle>
                  <p className='text-sm text-muted-foreground'>
                    {study.subtitle}
                  </p>
                </CardHeader>

                <CardContent className='space-y-4'>
                  {/* Outcome — the headline result, in place of a screenshot */}
                  <p className='text-sm font-medium text-primary border-l-2 border-primary/40 pl-3'>
                    {study.outcome}
                  </p>

                  <ul className='space-y-1.5'>
                    {study.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className='flex items-start gap-2 text-sm text-muted-foreground'
                      >
                        <span className='text-primary mt-1 text-xs'>•</span>
                        <span className='leading-relaxed'>{highlight}</span>
                      </li>
                    ))}
                  </ul>

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

                  {/* Only rendered where a public artifact actually exists */}
                  {study.url && (
                    <Button variant='outline' size='sm' asChild>
                      <Link
                        href={study.url}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <ExternalLink className='h-3 w-3 mr-1' />
                        {study.urlLabel ?? 'View'}
                      </Link>
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Earlier Projects Grid */}
        <div className='space-y-8'>
          <div className='text-center'>
            <h3 className='text-2xl font-bold text-foreground'>
              Earlier Projects
            </h3>
            <p className='text-sm text-muted-foreground mt-2'>
              Learning projects built while training at Masai School in
              2021&ndash;22.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {earlierProjects.map(project => (
              <motion.div
                key={project.id}
                initial='hidden'
                whileInView='visible'
                whileHover='hover'
                viewport={{ once: true, amount: 0.2 }}
                variants={gridCardVariants}
              >
                <Card className='hover:shadow-lg transition-shadow h-full flex flex-col pt-0'>
                  <div className='relative h-40'>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className='object-cover rounded-t-lg'
                      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw'
                    />
                  </div>

                  <CardHeader>
                    <CardTitle className='text-lg'>{project.title}</CardTitle>
                  </CardHeader>

                  <CardContent className='space-y-4 flex flex-col flex-1'>
                    <p className='text-sm text-muted-foreground'>
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className='flex flex-wrap gap-1'>
                      {project.technologies.slice(0, 3).map(tech => (
                        <Badge
                          key={tech}
                          variant='secondary'
                          className='text-xs'
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant='secondary' className='text-xs'>
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>

                    {/* Project Links — only what actually exists */}
                    <div className='flex gap-2 mt-auto'>
                      {project.liveUrl && (
                        <Button size='sm' asChild className='flex-1'>
                          <Link
                            href={project.liveUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            <ExternalLink className='h-3 w-3 mr-1' />
                            Demo
                          </Link>
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button
                          size='sm'
                          variant='outline'
                          asChild
                          className='flex-1'
                        >
                          <Link
                            href={project.githubUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            <Github className='h-3 w-3 mr-1' />
                            Code
                          </Link>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View More Button */}
        <div className='text-center mt-12'>
          <Button variant='outline' size='lg' asChild>
            <Link
              href={`${contact.github}?tab=repositories`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <Github className='h-4 w-4 mr-2' />
              View All Projects on GitHub
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
