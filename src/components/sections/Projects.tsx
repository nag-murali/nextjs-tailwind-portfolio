import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Eye } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import * as motion from 'motion/react-client';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'ZaraHome Clone',
      description:
        'Clone of ZaraHome website for home textiles and decor. Features shopping and cart functionality with both backend and frontend implementation.',
      image: '/projects/zara_home.png',
      technologies: [
        'MongoDB',
        'Express.js',
        'Node.js',
        'JavaScript',
        'CSS',
        'HTML',
      ],
      liveUrl: 'https://github.com/nag-murali/ZaraHome-Backened',
      githubUrl: 'https://github.com/nag-murali/ZaraHome-Backened',
      featured: true,
    },

    {
      id: 2,
      title: 'Quora Clone',
      description:
        'Platform to ask questions and get answers from experienced people. Built with React and Material UI for modern user experience.',
      image: '/projects/quora.jpg',
      technologies: ['React', 'CSS', 'MongoDB', 'Express', 'Material UI'],
      liveUrl: 'https://github.com/nag-murali/quora-clone',
      githubUrl: 'https://github.com/nag-murali/quora-clone',
      featured: true,
    },
    {
      id: 3,
      title: 'Weather App',
      description:
        'Get current and weekly weather forecasts and maps for any city. Features real-time weather data with interactive interface.',
      image: '/projects/weather_app.png',
      technologies: ['HTML', 'JavaScript', 'CSS', 'Weather API'],
      liveUrl: 'https://weather123app.netlify.app/',
      githubUrl: 'https://github.com/nag-murali/weather_app',
      featured: false,
    },
    {
      id: 4,
      title: 'Clone Croma',
      description:
        'Clone of Croma online store for digital gadgets and home electronics with responsive design and modern UI.',
      image: '/projects/croma.png',
      technologies: ['HTML', 'JavaScript', 'CSS'],
      liveUrl: 'https://clone-croma.netlify.app/',
      githubUrl: 'https://github.com/nag-murali/Clone-Croma',
      featured: false,
    },
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.0,
        ease: 'easeOut',
      },
    },
  } as const;

  // Animation variants for project images
  const imageVariants = {
    hover: {
      rotateX: -8,
      rotateY: 8,
      scale: 1.05,
      z: 30,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
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
            Featured Projects
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            A showcase of my recent work and side projects. Each project
            demonstrates different skills and technologies I&apos;ve mastered.
          </p>
        </div>

        {/* Featured Projects */}
        <div
          className='space-y-12 mb-16'
          style={{ perspective: '1200px', perspectiveOrigin: 'center center' }}
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              animate={{
                rotateX: [0, -4, 0],
                rotateY: [0, 4, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
            >
              <Card className='overflow-hidden hover:shadow-lg transition-shadow'>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-cols-2' : ''}`}
                >
                  {/* Project Image */}
                  <motion.div
                    className={`relative h-64 lg:h-auto ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                    whileHover='hover'
                    variants={imageVariants}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className='object-cover'
                      sizes='(max-width: 768px) 100vw, 50vw'
                    />
                    <div className='absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors' />
                  </motion.div>

                  {/* Project Content */}
                  <div
                    className={`p-6 lg:p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}
                  >
                    <CardHeader className='p-0 mb-4'>
                      <CardTitle className='text-2xl mb-2'>
                        {project.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className='p-0 space-y-4'>
                      <p className='text-muted-foreground leading-relaxed'>
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className='flex flex-wrap gap-2'>
                        {project.technologies.map(tech => (
                          <Badge key={tech} variant='secondary'>
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {/* Project Links */}
                      <div className='flex gap-4 pt-4'>
                        <Button asChild>
                          <Link
                            href={project.liveUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            <Eye className='h-4 w-4 mr-2' />
                            Live Demo
                          </Link>
                        </Button>
                        <Button variant='outline' asChild>
                          <Link
                            href={project.githubUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            <Github className='h-4 w-4 mr-2' />
                            Source Code
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className='space-y-8'>
          <h3 className='text-2xl font-bold text-foreground text-center'>
            Other Projects
          </h3>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {otherProjects.map(project => (
              <motion.div
                key={project.id}
                initial='hidden'
                whileInView='visible'
                whileHover='hover'
                viewport={{ once: true, amount: 0.2 }}
                variants={gridCardVariants}
              >
                <Card className='hover:shadow-lg transition-shadow'>
                  <div className='relative h-48'>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className='object-cover rounded-t-lg'
                      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    />
                  </div>

                  <CardHeader>
                    <CardTitle className='text-lg'>{project.title}</CardTitle>
                  </CardHeader>

                  <CardContent className='space-y-4'>
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

                    {/* Project Links */}
                    <div className='flex gap-2'>
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
              href='https://github.com/nag-murali?tab=repositories'
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
