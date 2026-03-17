import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const Certifications = () => {
  const certifications = [
    {
      title: 'Oracle Cloud Infrastructure Professional',
      issuer: 'Oracle',
      description: 'Focus: Cloud-native CI/CD + DevOps tools',
      score: '88%',
      color: '#A8D4DC'
    },
    {
      title: 'Oracle Certified Foundation Associate',
      issuer: 'Oracle',
      description: 'Focus: Core AI/ML + OCI AI services',
      score: '95%',
      color: '#959BB9'
    },
    {
      title: 'Environmental Engineering',
      issuer: 'NPTEL IIT Kharagpur',
      description: 'Completed in 2025',
      score: null,
      color: '#73617B'
    },
    {
      title: 'Software Engineering',
      issuer: 'NPTEL IIT Kharagpur',
      description: 'Completed in 2024',
      score: null,
      color: '#A8D4DC'
    }
  ];

  return (
    <section id="certifications" className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Certifications</h2>
            <p className="text-muted-foreground text-lg">Professional certifications and achievements</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div 
                        className="p-3 rounded-lg"
                        style={{ backgroundColor: `${cert.color}20` }}
                      >
                        <Award className="w-6 h-6" style={{ color: cert.color }} />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl group-hover:text-[#73617B] transition-colors">
                          {cert.title}
                        </CardTitle>
                        <CardDescription className="mt-2">{cert.issuer}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-muted-foreground">{cert.description}</p>
                    {cert.score && (
                      <Badge variant="secondary" className="text-sm">
                        Score: {cert.score}
                      </Badge>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;