import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Phone, Send } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "../hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/advita-singh-984a6a289/",
      color: "#A8D4DC",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/advita6",
      color: "#959BB9",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:advitacloud@gmail.com",
      color: "#73617B",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    try {
      const res = await fetch("https://formsubmit.co/advitacloud@gmail.com", {
        method: "POST",
        body: new FormData(form),
      });

      if (res.ok) {
        toast({
          title: "Message Sent!",
          description: "Thanks for reaching out. I’ll get back to you soon 💙",
        });
        form.reset();
      } else {
        throw new Error("Failed");
      }
    } catch (err) {
      toast({
        title: "Something went wrong",
        description: "Please try again later or email me directly.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-28 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="space-y-14"
        >
          {/* HEADER */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Get In Touch</h2>
            <p className="text-muted-foreground text-lg">
              Let’s connect and collaborate
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-14 max-w-6xl mx-auto">
            {/* LEFT SIDE */}
            <div className="space-y-10">
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
                      whileHover={{ scale: 1.06, y: -6 }}
                      className="flex items-center gap-3 p-4 rounded-lg border border-border hover:shadow-lg transition-all duration-300 group"
                    >
                      <div
                        className="p-2 rounded-lg"
                        style={{ backgroundColor: `${social.color}20` }}
                      >
                        <social.icon
                          className="w-5 h-5"
                          style={{ color: social.color }}
                        />
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
                </div>
              </div>
            </div>

            {/* RIGHT SIDE FORM */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send a Message</CardTitle>
                <CardDescription>
                  Fill out the form and I’ll get back to you soon
                </CardDescription>
              </CardHeader>

              <CardContent>
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  {/* REQUIRED BY FORMSUBMIT */}
                  <input type="hidden" name="_subject" value="New Portfolio Contact!" />
                  <input type="hidden" name="_captcha" value="false" />

                  <Input name="name" placeholder="Your Name" required />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    required
                  />
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    required
                    rows={5}
                  />

                  <Button type="submit" className="w-full" size="lg" disabled={loading}>
                    <Send className="w-4 h-4 mr-2" />
                    {loading ? "Sending..." : "Send Message"}
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
