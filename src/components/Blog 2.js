import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const Blog = () => {
  return (
    <section id="blog" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Blog</h2>
            <p className="text-muted-foreground text-lg">Thoughts, tutorials, and insights</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-2 border-dashed">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-muted">
                    <BookOpen className="w-8 h-8 text-muted-foreground" />
                  </div>
                </div>
                <CardTitle className="text-2xl">Coming Soon</CardTitle>
                <CardDescription className="text-base">
                  I'm working on sharing my experiences, technical tutorials, and insights 
                  about cloud computing, AI, and software development.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Articles and tutorials will be added here soon. Stay tuned!
                </p>
                <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <span>Check back later</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;