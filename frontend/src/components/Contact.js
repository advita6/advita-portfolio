import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Phone, Send } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: 'Message Sent!',
      description: 'Thanks for reaching out. I\'ll get back to you soon!',
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/advita-singh-984a6a289/',
      color: '#A8D4DC'
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/advita6',
      color: '#959BB9'
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:advitacloud@gmail.com',
      color: '#73617B'
    },
    {
      name: 'Phone',
      icon: Phone,
      href: 'tel:+919839110240',
      color: '#A8D4DC'
    }
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Get In Touch</h2>
            <p className="text-muted-foreground text-lg">Let's connect and collaborate</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="flex items-center gap-3 p-4 rounded-lg border border-border hover:shadow-lg transition-all duration-300 group"
                    >
                      <div 
                        className="p-2 rounded-lg"
                        style={{ backgroundColor: `${social.color}20` }}
                      >
                        <social.icon className="w-5 h-5" style={{ color: social.color }} />
                      </div>
                      <span className="font-medium group-hover:text-[#73617B] transition-colors">
                        {social.name}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Contact Information</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    advitacloud@gmail.com
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    advita.singhh@outlook.com
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    +91 9839110240
                  </p>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send a Message</CardTitle>
                <CardDescription>Fill out the form and I'll get back to you soon</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;