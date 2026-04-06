import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const Blog = () => {
  return (
    <section id="blog" className="py-24 px-6">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold">Case Studies</h2>
          <p className="text-muted-foreground text-lg">
            Real-world problems. Thoughtful solutions.
          </p>
        </motion.div>

        {/* BLOG CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          whileHover={{ y: -8 }}
          className="max-w-3xl mx-auto cursor-pointer"
          onClick={() => window.open("/guidewire-case-study", "_blank")}
        >
          <Card className="group overflow-hidden border hover:shadow-2xl transition-all duration-500">

            <CardHeader className="space-y-4">

              <div className="flex gap-2">
                <Badge variant="secondary">Guidewire DEVTrails 2026</Badge>
                <Badge variant="outline">AI + Insurance</Badge>
              </div>

              <CardTitle className="text-2xl md:text-3xl group-hover:text-primary transition">
                Gig Shield: AI-Powered Insurance for Gig Workers
              </CardTitle>

              <p className="text-muted-foreground text-base leading-relaxed">
                Gig Shield is an AI-powered delivery insurance platform that automates 
                risk detection, claim validation, and payouts in real time using weather, 
                route, and behavioral data — redefining how insurance works for gig workers.
                </p>

            </CardHeader>

            <CardContent className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                Hackathon Case Study
              </span>

              <div className="flex items-center gap-2 text-primary group-hover:translate-x-2 transition">
                <span className="text-sm font-medium">View Case Study</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </CardContent>

          </Card>
        </motion.div>

      </div>
    </section>
  );
};

export default Blog; 