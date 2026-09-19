import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import * as motion from 'motion/react-client';
import Image from 'next/image';
import { profile } from '@/data/profile';
import { skillCategories } from '@/data/skills';

const About = () => {
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
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const skillListVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.1,
      },
    },
  };

  const skillBadgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
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
            {profile.aboutSubtitle}
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
                      src={profile.photo.about}
                      alt={profile.name}
                      width={160}
                      height={192}
                      className='w-full h-full object-cover'
                    />
                  </motion.div>
                </div>
              </CardHeader>
              <CardContent className='pt-0'>
                <div className='space-y-4 text-muted-foreground'>
                  {profile.bio.map((paragraph, index) => (
                    <p
                      key={index}
                      className={
                        index === 0 ? 'text-base leading-relaxed' : undefined
                      }
                    >
                      {paragraph}
                    </p>
                  ))}
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
                  {skillCategories.map(category => (
                    <motion.div
                      key={category.category}
                      className='p-3 rounded-lg border bg-muted/40'
                      variants={skillCategoryVariants}
                    >
                      <div className='flex items-center gap-2 mb-1'>
                        <div
                          className={`w-2 h-2 rounded-full shrink-0 ${category.accent}`}
                        ></div>
                        <h4 className='font-semibold text-sm text-foreground'>
                          {category.category}
                        </h4>
                      </div>
                      <p className='text-xs text-muted-foreground mb-2'>
                        {category.description}
                      </p>
                      <motion.div
                        className='flex flex-wrap gap-1'
                        variants={skillListVariants}
                      >
                        {category.skills.map(skill => (
                          <motion.div key={skill} variants={skillBadgeVariants}>
                            <Badge variant='secondary' className='text-xs'>
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
