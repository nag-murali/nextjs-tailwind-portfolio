import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import * as motion from 'motion/react-client';
import Image from 'next/image';

const About = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      description: 'Client-side technologies for building user interfaces',
      skills: [
        'React',
        'Next.js',
        'TypeScript',
        'JavaScript',
        'HTML5',
        'CSS3',
        'Tailwind CSS',
        'MUI',
      ],
      color: 'bg-blue-500',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-700',
      bgColor: 'bg-blue-50',
    },
    {
      category: 'Backend',
      description: 'Server-side technologies and database management',
      skills: ['Node.js', 'Express.js', 'MongoDB'],
      color: 'bg-green-500',
      borderColor: 'border-green-200',
      textColor: 'text-green-700',
      bgColor: 'bg-green-50',
    },
    {
      category: 'State Management & Tools',
      description: 'State management solutions and development tools',
      skills: [
        'Jest',
        'Figma',
        'REST APIs',
        'Redux',
        'React Query',
        'Zustand',
        'Storybook',
      ],
      color: 'bg-purple-500',
      borderColor: 'border-purple-200',
      textColor: 'text-purple-700',
      bgColor: 'bg-purple-50',
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

  const skillCategoryVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.4,
      },
    },
  };

  const skillBadgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id='about' className='pt-20 bg-background'>
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
            About Me
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            Passionate full-stack developer with a love for creating exceptional
            digital experiences
          </p>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto'>
          {/* Left Column - Personal Profile */}
          <motion.div
            className='lg:col-span-1'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.1 }}
            variants={cardVariants}
          >
            <Card className='h-full'>
              <CardHeader>
                <div className='flex flex-col items-center text-center gap-4'>
                  <motion.div
                    className='h-48 w-40 border-4 border-primary/20 shadow-lg rounded-lg overflow-hidden'
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src='/profile-pic.jpg'
                      alt='Nagendra Muralidhar Pulla'
                      width={160}
                      height={192}
                      className='w-full h-full object-cover'
                    />
                  </motion.div>
                </div>
              </CardHeader>
              <CardContent className='pt-0'>
                <div className='space-y-4 text-muted-foreground'>
                  <p className='text-base leading-relaxed'>
                    Full Stack Developer with 3+ years of experience building
                    scalable, high-performance, and user- friendly web
                    applications. Known for perceptiveness and problem-solving
                    skills, with a passion for writing clean code, delivering
                    optimized solutions, and collaborating effectively in Agile
                    teams.
                  </p>
                  <p>
                    I specialize in modern web technologies like React, Next.js,
                    and Node.js, but I&apos;m always excited to learn new tools
                    and frameworks. I believe in writing clean, maintainable
                    code and creating intuitive user experiences.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Column - Technical Skills */}
          <motion.div
            className='lg:col-span-1'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.1 }}
            variants={cardVariants}
          >
            <Card className='h-full'>
              <CardHeader>
                <CardTitle>Technical Skills</CardTitle>
                <p className='text-sm text-muted-foreground'>
                  Technologies organized by domain and use case
                </p>
              </CardHeader>
              <CardContent className='pt-0'>
                <motion.div
                  className='space-y-4'
                  variants={staggerContainerVariants}
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true }}
                >
                  {skillCategories.map((category, index) => (
                    <motion.div
                      key={index}
                      className={`p-3 rounded-lg border-2 ${category.borderColor} ${category.bgColor}`}
                      variants={skillCategoryVariants}
                    >
                      <div className='flex items-center gap-2 mb-2'>
                        <div
                          className={`w-2 h-2 rounded-full ${category.color}`}
                        ></div>
                        <h4
                          className={`font-semibold text-sm ${category.textColor}`}
                        >
                          {category.category}
                        </h4>
                      </div>
                      <motion.div
                        className='flex flex-wrap gap-1'
                        variants={staggerContainerVariants}
                      >
                        {category.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skillIndex}
                            variants={skillBadgeVariants}
                          >
                            <Badge
                              variant='secondary'
                              className={`text-xs ${category.textColor} bg-white/50 hover:bg-white/80 transition-colors`}
                            >
                              {skill}
                            </Badge>
                          </motion.div>
                        ))}
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
