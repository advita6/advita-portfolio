import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Award, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const Experience = () => {
  const workExperience = [
    {
      company: 'GLAMIS AI-Based Mock Interview Platform',
      role: 'Cloud Manager & Technical Intern',
      duration: 'Jan - Sep 2025',
      description: [
        'Managed server setup, load balancing, and uptime',
        'Validated builds and ran performance analysis',
        'Optimized cloud resource utilization'
      ],
      icon: Briefcase
    }
  ];

  const projects = [
    {
      title: 'Brain Tumor Detection Assistant',
      description: 'Built MRI upload + voice-command functionality, improving accuracy by 30%. Deployed on AWS EC2 with secured routing.',
      tech: ['Next.js', 'Node.js', 'TensorFlow', 'AWS EC2'],
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80'
    },
    {
      title: 'AI Augmented Cloud Operations (AIOps)',
      description: 'Developed a system for cloud scalability insights, smart alerts, and automated safety actions, focusing on cost-efficiency and API-driven logic.',
      tech: ['JavaScript', 'API Integration'],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80'
    },
    {
      title: 'AutoML Agent',
      description: 'Created a user interface and API communications, leading to a 25% improvement in accuracy. Deployed on AWS for scalable execution.',
      tech: ['Django', 'Flask', 'REST API', 'AWS'],
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80'
    },
    {
      title: 'Rockfall Guardian (Smart India Hackathon)',
      description: 'Developed a system for mine safety alerts using real-time IoT and ML modules.',
      tech: ['React', 'Docker', 'EC2', 'IoT', 'ML'],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80'
    },
    {
      title: 'Kubernetes To-Do App Deployment',
      description: 'Implemented deployments for frontend, backend, and database. Utilized ConfigMaps, ClusterIP, NodePort, and tested scaling & self-healing capabilities.',
      tech: ['Kubernetes', 'Minikube', 'Docker'],
      image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80'
    }
  ];

  const achievements = [
    {
      title: 'Vice President - GLOUD Cloud Computing Club',
      description: 'Elected Vice President of GLA University\'s Cloud Club. Led cloud workshops, events, training, and managed collaborations, planning, and student engagement.',
      year: '2025',
      icon: Users
    },
    {
      title: 'Smart India Hackathon Runner-Up',
      description: 'Runner-up for Rockfall Guardian project - a mine safety alert system using real-time IoT and ML.',
      year: '2025',
      icon: Award
    }
  ];

  return (
    <section id="work" className="py-24 px-6">
      <div className="max-w-7xl mx-auto space-y-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Experience & Projects</h2>
            <p className="text-muted-foreground text-lg">What I've built and where I've worked</p>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-3xl font-bold mb-8">Work Experience</h3>
              {workExperience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-[#A8D4DC]/20">
                          <exp.icon className="w-6 h-6 text-[#73617B]" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-2xl">{exp.company}</CardTitle>
                          <CardDescription className="text-lg mt-1">{exp.role}</CardDescription>
                          <p className="text-sm text-muted-foreground mt-2">{exp.duration}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-[#73617B] mt-1.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-8">Projects</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                      <div className="relative overflow-hidden rounded-t-lg h-48">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      </div>
                      <CardHeader>
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <CardDescription className="text-base">{project.description}</CardDescription>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, i) => (
                            <Badge key={i} variant="secondary">{tech}</Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-8">Leadership & Achievements</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-lg bg-[#959BB9]/20">
                            <achievement.icon className="w-6 h-6 text-[#73617B]" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-xl">{achievement.title}</CardTitle>
                            <p className="text-sm text-muted-foreground mt-1">{achievement.year}</p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">{achievement.description}</CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;