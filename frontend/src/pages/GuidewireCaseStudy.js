import React from "react";
import { motion } from "framer-motion";
import { Badge } from "../components/ui/badge";
import Header from "../components/Header";

const Section = ({ title, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="space-y-4"
  >
    <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>

    <div className="text-muted-foreground leading-relaxed text-lg">
      {children}
    </div>
  </motion.div>
);

const GuidewireCaseStudy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">

      {/* HEADER */}
      <Header activeSection="blog" />

      {/* OUTER SPACING */}
      <div className="px-4 pt-32 pb-20">

        {/* GLASS CONTAINER */}
        <div className="max-w-5xl mx-auto space-y-16 p-8 md:p-12 rounded-2xl border border-border bg-white/10 backdrop-blur-md shadow-xl">

          {/* HERO */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6 text-center"
          >
            <div className="flex justify-center gap-2">
              <Badge>Guidewire DEVTrails 2026</Badge>
              <Badge variant="outline">AI + Parametric Insurance</Badge>
            </div>

            <p className="text-primary font-medium">
              Built for Guidewire DEVTrails 2026 Hackathon 
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              AI-Powered Income Protection for Gig Workers
            </h1>

            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A proactive insurance system designed to protect delivery partners 
              from unpredictable income loss using AI, real-time data, and automated triggers.
            </p>
          </motion.div>

          {/* PROBLEM */}
          <Section title="The Problem">
            Delivery partners form the backbone of India’s digital economy, yet their income 
            is highly vulnerable to external disruptions such as extreme weather, pollution, 
            or regional shutdowns. These uncontrollable factors can reduce earnings by up to 
            30%, with no financial safety net in place.
          </Section>

          {/* CORE IDEA */}
          <Section title="Core Idea">
            This solution introduces a parametric income protection system specifically 
            designed for gig delivery workers.

            Instead of relying on traditional claim-based insurance, the system uses 
            real-time external signals such as weather conditions, pollution levels, 
            and regional disruptions to automatically determine risk and trigger payouts.

            The goal is to ensure that workers are financially protected during situations 
            beyond their control, without requiring manual intervention.
          </Section>

          {/* APPROACH */}
          <Section title="Our Approach">
            We designed a weekly-based income protection model where workers contribute 
            similarly to a savings system but receive automated coverage.

            Instead of reactive insurance, this system predicts disruptions and protects 
            income before losses occur, ensuring fairness and efficiency.

            Payouts are triggered automatically using real-world signals like weather, 
            pollution, and delivery conditions — eliminating manual claims entirely.
          </Section>

          {/* FEATURES */}
          <Section title="Key Innovations">
            <ul className="list-disc pl-5 space-y-2">
              <li>Dynamic coverage boost during high-risk conditions (rain, pollution)</li>
              <li>AI-based disruption detection using real-world datasets</li>
              <li>Weekly insurance model aligned with gig income cycles</li>
              <li>Smart routing for safer and optimized delivery paths</li>
            </ul>
          </Section>

          {/* REAL WORLD */}
          <Section title="Real-World Scenario">
            Imagine a delivery partner working during heavy rainfall:

            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>Normal day → ₹200 income protection</li>
              <li>Heavy rain detected → Coverage increases to ₹240 (20% boost)</li>
              <li>System detects disruption → Automatic payout triggered</li>
            </ul>

            This ensures fairness, removes dependency on manual claims, and provides 
            instant financial support when it’s needed the most.
          </Section>

          {/* DIFFERENTIATION */}
          <Section title="What Makes This Different">
            Unlike traditional insurance systems, this model eliminates manual claims entirely. 
            It uses parametric triggers and AI predictions to ensure instant payouts and fairness, 
            while dynamically adapting to real-time working conditions.
          </Section>

          {/* IMPACT */}
          <Section title="Impact">
            This system aims to create a financial safety net for millions of gig workers, 
            ensuring stability even during uncertain conditions. It bridges the gap between 
            insurance and real-world unpredictability using technology.
          </Section>

          {/* WHY THIS */}
          <Section title="Why This Solution Stands Out">
            <ul className="list-disc pl-5 space-y-2">
              <li>No claim process → instant payouts</li>
              <li>Adaptive insurance instead of static policies</li>
              <li>Designed specifically for gig economy behavior</li>
              <li>Highly scalable across India’s delivery platforms</li>
            </ul>
          </Section>

        </div>
      </div>
    </div>
  );
};

export default GuidewireCaseStudy;