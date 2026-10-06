"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BrainCircuit,
  Bot,
  Sparkles,
  Database,
  Code2,
  Palette,
  LineChart,
  Users,
  TrendingUp,
  Compass,
  Award,
  ShieldCheck,
  PenTool,
  Rocket,
  RefreshCw,
  Megaphone,
  PenLine,
  BarChart3,
  Calendar,
  X,
  LayoutGrid,
  Image as ImageIcon,
  Printer,
  Layers,
  Check,
} from "lucide-react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import "./home.css";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.75, ease } },
};

const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const staggerParentSlow: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.15 } },
};

const viewport = { once: true, amount: 0.2 } as const;
const viewportLow = { once: true, amount: 0.1 } as const;

const services = [
  {
    number: "01",
    icon: BrainCircuit,
    title: "AI & Machine Learning",
    text: "Intelligent models that turn complex data into smarter decisions and real-world outcomes.",
  },
  {
    number: "02",
    icon: Bot,
    title: "AI Agents & Automation",
    text: "Autonomous AI agents and workflows that reduce manual work and improve operational efficiency.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Generative AI & LLMs",
    text: "Custom AI solutions powered by LLMs for content, knowledge, assistants, and intelligent applications.",
  },
  {
    number: "04",
    icon: Database,
    title: "Data & Analytics",
    text: "Transform raw data into clear insights, predictive intelligence, and actionable business decisions.",
  },
  {
    number: "05",
    icon: Code2,
    title: "Web & Software Development",
    text: "Scalable, high-performance digital products built around your business goals and users.",
  },
  {
    number: "06",
    icon: Palette,
    title: "Design & Digital Solutions",
    text: "Modern, intuitive digital experiences that combine strong design with meaningful functionality.",
  },
];

const capabilities = [
  "Deep Learning Models",
  "Computer Vision",
  "Natural Language Processing",
  "Autonomous AI Agents",
  "LLM Applications",
  "Prompt Engineering",
  "Predictive Analytics",
  "Business Intelligence",
  "Data Pipelines",
  "Process Automation",
  "Full-Stack Development",
  "Cloud Architecture",
  "API & Systems Integration",
  "Product Design",
  "UI / UX Systems",
  "Digital Strategy",
];

const socialServices = [
  {
    number: "01",
    icon: Compass,
    title: "Content Strategy",
    text: "Structured content plans aligned with brand goals, audience needs and targeted messaging.",
  },
  {
    number: "02",
    icon: PenLine,
    title: "Content Creation",
    text: "Consistent visual and short-form content produced to reflect brand identity across platforms.",
  },
  {
    number: "03",
    icon: Calendar,
    title: "Account Management",
    text: "End-to-end posting, scheduling, engagement and daily account activity managed for the brand.",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Analytics & Reporting",
    text: "Performance tracking and data-driven optimization across every active social platform.",
  },
];
const graphicsServices = [
  {
    number: "01",
    icon: Palette,
    title: "Logo & Brand Identity",
    text: "Complete logo systems, visual identity and brand guidelines built to scale across every platform.",
  },
  {
    number: "02",
    icon: ImageIcon,
    title: "Social Media Graphics",
    text: "Consistent post templates, carousels, story graphics and campaign visuals designed for engagement.",
  },
  {
    number: "03",
    icon: Printer,
    title: "Marketing Collateral",
    text: "Brochures, pitch decks, business cards, banners and print-ready marketing assets.",
  },
  {
    number: "04",
    icon: LayoutGrid,
    title: "UI & Visual Design",
    text: "Web interfaces, app screens, dashboards and digital product visuals built around real usability.",
  },
];

const graphicsProof = [
  {
    icon: Layers,
    title: "Brand-Led",
    text: "Every visual is built around a defined brand system — not improvised per asset.",
  },
  {
    icon: ImageIcon,
    title: "Multi-Format",
    text: "Print, digital, social and product surfaces all covered from one design language.",
  },
  {
    icon: Check,
    title: "Delivery-Ready",
    text: "Final files organized, exported and structured for handover and future use.",
  },
];

const graphicsProcess = [
  {
    number: "01",
    title: "Brief",
    text: "Understanding the brand, audience and objective before any design work begins.",
  },
  {
    number: "02",
    title: "Concept",
    text: "Exploring multiple directions that fit the brief and the brand's positioning.",
  },
  {
    number: "03",
    title: "Design",
    text: "Refining the chosen direction into polished, production-ready visuals.",
  },
  {
    number: "04",
    title: "Deliver",
    text: "Final files organized for print, digital and future brand use.",
  },
];
const socialMetrics = [
  { value: 120, suffix: "%", label: "Engagement Rate" },
  { value: 80, suffix: "%", label: "Follower Growth" },
  { value: 60, suffix: "%", label: "Reach Increase" },
];

const socialPlatformTypes = [
  {
    icon: Megaphone,
    title: "Short-form Video Content",
    text: "Engaging vertical videos designed for audience retention and platform reach.",
  },
  {
    icon: Palette,
    title: "Visual Content Feeds",
    text: "Branded and consistent social media visuals aligned with each platform's format.",
  },
  {
    icon: Users,
    title: "Story-Based Content",
    text: "Interactive and real-time audience engagement built around brand narratives.",
  },
];

const socialProcess = [
  {
    number: "01",
    title: "Research",
    text: "Understanding your brand, audience and competitive landscape.",
  },
  {
    number: "02",
    title: "Planning",
    text: "Building a clear, consistent content strategy around your objectives.",
  },
  {
    number: "03",
    title: "Execution",
    text: "Creating and publishing content across the right platforms and formats.",
  },
  {
    number: "04",
    title: "Optimization",
    text: "Analyzing results and refining performance based on real data.",
  },
];

const featuredProjects = [
  {
    number: "01",
    title: "Dental AI Diagnostics",
    category: "AI & HEALTHCARE",
    text: "An AI-powered dental diagnostic system designed to analyze dental imagery and assist with identifying potential dental conditions.",
    tech: ["YOLOv8", "OpenCV", "Python", "Flask"],
    icon: LineChart,
    href: "/projects",
  },
  {
    number: "02",
    title: "See and Hire",
    category: "AI / RECRUITMENT",
    text: "An intelligent hiring platform designed to improve the recruitment experience by connecting candidates, opportunities and intelligent hiring workflows.",
    tech: ["Python", "FastAPI", "React", "LLMs"],
    icon: Users,
    href: "/projects",
  },
  {
    number: "03",
    title: "Job Salaries Management",
    category: "DATA & ANALYTICS",
    text: "A data-driven salary management and analysis solution focused on organizing, analyzing and understanding job salary information.",
    tech: ["Python", "Pandas", "Power BI", "Analytics"],
    icon: TrendingUp,
    href: "/projects",
  },
];

const reasons = [
  {
    number: "01",
    icon: Compass,
    title: "Strategy before technology",
    text: "We start with the problem, not the tool. The right technology follows a clear understanding of what actually needs to change.",
  },
  {
    number: "02",
    icon: Award,
    title: "Craft in every detail",
    text: "From architecture to interface, every decision is deliberate — built to hold up under real-world use, not just demos.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Built to evolve",
    text: "Products are never truly finished. We design systems that can grow, adapt and stay valuable as your needs change.",
  },
];

const process = [
  {
    number: "01",
    icon: Compass,
    title: "Discover",
    text: "We understand the problem before choosing the technology.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Design",
    text: "We turn the opportunity into a clear and purposeful experience.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Develop",
    text: "We engineer the solution with performance and scalability in mind.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Deploy",
    text: "We release, measure and refine with real users and real feedback.",
  },
  {
    number: "05",
    icon: RefreshCw,
    title: "Evolve",
    text: "We continuously improve the product as your needs change.",
  },
];

export default function Home() {
  const [socialModalOpen, setSocialModalOpen] = useState(false);
  const [graphicsModalOpen, setGraphicsModalOpen] = useState(false);
  return (
    <div className="home-page">
      <main>
        <section className="hero-section">
          <div className="hero-grid" />
          <div className="hero-noise" />
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />

          <div className="hero-container">
            <motion.div
              className="hero-content"
              variants={staggerParentSlow}
              initial="hidden"
              animate="show"
            >
              <motion.div className="hero-eyebrow" variants={slideLeft}>
                <span className="eyebrow-pulse" />
                <span>AJ Technologies</span>
                <span className="eyebrow-divider" />
                <span>AI JOURNEY</span>
              </motion.div>

              <h1>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    <span>Technology</span>
                  </motion.span>
                </span>

                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    <span>that</span> moves
                  </motion.span>
                </span>

                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    forward.
                  </motion.span>
                </span>
              </h1>

              <motion.p className="hero-description" variants={fadeUp}>
                We build intelligent digital products, AI-powered systems and
                modern software experiences that turn ambitious ideas into
                meaningful outcomes.
              </motion.p>

              <motion.div className="hero-actions" variants={fadeUp}>
                <Link href="/projects" className="hero-primary">
                  <span>Explore our work</span>
                  <ArrowUpRight size={18} strokeWidth={2} />
                </Link>

                <Link href="/contact" className="hero-secondary">
                  <span>Start a conversation</span>
                  <ArrowUpRight size={18} strokeWidth={2} />
                </Link>
              </motion.div>

              <motion.div className="hero-proof" variants={fadeUp}>
                <div>
                  <strong>AI</strong>
                  <span>Intelligent</span>
                </div>
                <div>
                  <strong>DIGITAL</strong>
                  <span>Connected</span>
                </div>
                <div>
                  <strong>FUTURE</strong>
                  <span>Ready</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="hero-visual"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, ease, delay: 0.3 }}
            >
              <div className="hero-visual-aura" />
              <div className="visual-orbit orbit-one" />
              <div className="visual-orbit orbit-two" />

              <div className="hero-image-frame">
                <Image
                  src="/images/hero-tech.png"
                  alt="AJ Technologies AI workspace"
                  fill
                  priority
                  sizes="(max-width: 1050px) 100vw, 620px"
                  className="hero-image"
                />
                <div className="hero-image-overlay" />
                <div className="hero-scan" />

                <div className="hero-corner hero-corner-tl" />
                <div className="hero-corner hero-corner-tr" />
                <div className="hero-corner hero-corner-bl" />
                <div className="hero-corner hero-corner-br" />

                <div className="hero-image-label">
                  <span>
                    <i /> SYSTEM STATUS
                  </span>
                  <strong>INTELLIGENT · ONLINE</strong>
                </div>
              </div>

              <motion.div
                className="floating-panel panel-top"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.9, ease }}
              >
                <Sparkles size={18} />
                <div>
                  <span>INTELLIGENCE</span>
                  <strong>Built in</strong>
                </div>
              </motion.div>

              <motion.div
                className="floating-panel panel-bottom"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.05, ease }}
              >
                <span className="eyebrow-pulse" />
                <div>
                  <span>AI JOURNEY</span>
                  <strong>Already moving</strong>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="hero-bottom-line"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.25, duration: 0.8 }}
          >
            <i />
            <span>SCROLL TO EXPLORE</span>
            <i />
          </motion.div>
        </section>

        <section className="intro-section">
          <div className="section-container">
            <div className="intro-layout">
              <motion.div
                className="intro-label"
                variants={slideLeft}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
              >
                <span>01</span>
                <i />
                <span>WHO WE ARE</span>
              </motion.div>

              <motion.div
                className="intro-main"
                variants={staggerParent}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
              >
                <motion.div
                  className="section-kicker"
                  variants={fadeUp}
                  style={{ display: "block" }}
                >
                  AJ Technologies
                </motion.div>

                <h2>
                  <span className="reveal-mask">
                    <motion.span
                      className="reveal-line"
                      variants={fadeUp}
                      style={{ display: "block" }}
                    >
                      <span>We don't just build technology.</span>
                    </motion.span>
                  </span>
                  <span className="reveal-mask">
                    <motion.span
                      className="reveal-line"
                      variants={fadeUp}
                      style={{ display: "block" }}
                    >
                      We build possibility.
                    </motion.span>
                  </span>
                </h2>

                <motion.p variants={fadeUp}>
                  AJ Technologies brings together strategy, design, engineering
                  and artificial intelligence to create technology that has a
                  reason to exist.
                </motion.p>

                <motion.div variants={fadeUp}>
                  <Link href="/team" className="section-link">
                    <span>More about AJ Technologies</span>
                    <ArrowUpRight size={17} />
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div
                className="intro-orbit"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={viewport}
                transition={{ duration: 0.9, ease }}
              >
                <div className="intro-orbit-ring ring-a" />
                <div className="intro-orbit-ring ring-b" />
                <div className="intro-orbit-core">
                  <Sparkles size={24} strokeWidth={1.6} />
                </div>
              </motion.div>
            </div>

            <motion.div
              className="intro-values"
              variants={staggerParent}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              {[
                ["01", "Purpose", "Every solution starts with a reason."],
                ["02", "Precision", "Every detail has a role to play."],
                ["03", "Progress", "Every product should keep evolving."],
              ].map(([number, title, text]) => (
                <motion.div
                  className="value-card"
                  key={number}
                  variants={fadeUp}
                >
                  <span className="value-number">{number}</span>
                  <div className="value-content">
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                  <ArrowUpRight size={18} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="services-section">
          <div className="section-container">
            <motion.div
              className="section-heading"
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              variants={staggerParent}
            >
              <div>
                <motion.div
                  className="section-kicker"
                  variants={fadeUp}
                  style={{ display: "block" }}
                >
                  WHAT WE DO
                </motion.div>
                <h2>
                  <span className="reveal-mask">
                    <motion.span
                      className="reveal-line"
                      variants={fadeUp}
                      style={{ display: "block" }}
                    >
                      <span>Different challenges.</span>
                    </motion.span>
                  </span>
                  <span className="reveal-mask">
                    <motion.span
                      className="reveal-line"
                      variants={fadeUp}
                      style={{ display: "block" }}
                    >
                      One technology partner.
                    </motion.span>
                  </span>
                </h2>
              </div>

              <motion.p variants={fadeUp}>
                From your first idea to a complete digital ecosystem, we bring
                technology, creativity and business thinking together.
              </motion.p>
            </motion.div>

            <motion.div
              className="services-grid"
              variants={staggerParentSlow}
              initial="hidden"
              whileInView="show"
              viewport={viewportLow}
            >
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <motion.article
                    className="service-card"
                    key={service.number}
                    variants={fadeUp}
                  >
                    <div className="service-glow" />
                    <span className="service-number">{service.number}</span>

                    <div className="service-icon">
                      <Icon size={22} strokeWidth={1.8} />
                    </div>

                    <h3>{service.title}</h3>
                    <p>{service.text}</p>

                    <div className="service-footer">
                      <span>Explore capability</span>
                      <Link
                        href="/projects"
                        aria-label={service.title}
                        className="service-footer-link"
                      >
                        <ArrowUpRight size={16} />
                      </Link>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>

            <motion.div
              className="services-action"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <Link href="/projects">
                <span>Explore all services</span>
                <ArrowUpRight size={17} />
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="social-section">
          <div className="social-section-grid" />
          <div className="social-section-glow" />

          <div className="section-container">
            <motion.div
              className="social-heading"
              variants={staggerParent}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <motion.div className="section-kicker" variants={fadeUp}>
                DIGITAL SERVICES
              </motion.div>
              <h2>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    <span>Social Media</span>
                  </motion.span>
                </span>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    Management.
                  </motion.span>
                </span>
              </h2>
              <motion.p variants={fadeUp}>
                Beyond technology, AJ Technologies helps brands grow through
                strategic social media management — content strategy, creation,
                account management and analytics.
              </motion.p>
            </motion.div>

            <motion.div
              className="social-grid"
              variants={staggerParentSlow}
              initial="hidden"
              whileInView="show"
              viewport={viewportLow}
            >
              {socialServices.map((service) => {
                const Icon = service.icon;
                return (
                  <motion.article
                    className="social-card"
                    key={service.number}
                    variants={fadeUp}
                  >
                    <div className="social-card-glow" />
                    <span className="social-card-number">{service.number}</span>
                    <div className="social-card-icon">
                      <Icon size={22} strokeWidth={1.8} />
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </motion.article>
                );
              })}
            </motion.div>

            <motion.div
              className="social-metrics"
              variants={staggerParentSlow}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              {socialMetrics.map((metric) => (
                <motion.div
                  className="social-metric"
                  key={metric.label}
                  variants={fadeUp}
                >
                  <div className="social-metric-value">
                    +{metric.value}
                    <span>{metric.suffix}</span>
                  </div>
                  <div className="social-metric-label">{metric.label}</div>
                </motion.div>
              ))}
              <motion.div className="social-metric-info" variants={fadeUp}>
                <div className="social-metric-info-row">
                  <span>3</span>
                  <strong>Campaigns Managed</strong>
                </div>
                <div className="social-metric-info-row">
                  <span>6</span>
                  <strong>Months Growth</strong>
                </div>
                <div className="social-metric-info-row">
                  <span>∞</span>
                  <strong>Multi-Platform Optimization</strong>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="social-actions"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <button
                type="button"
                className="social-cta"
                onClick={() => setSocialModalOpen(true)}
              >
                <span>Explore Social Services</span>
                <ArrowUpRight size={17} strokeWidth={2} />
              </button>
            </motion.div>
          </div>
        </section>
        <section className="graphics-section">
          <div className="graphics-section-grid" />
          <div className="graphics-section-glow" />

          <div className="section-container">
            <motion.div
              className="graphics-heading"
              variants={staggerParent}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <motion.div className="section-kicker" variants={fadeUp}>
                CREATIVE SERVICES
              </motion.div>
              <h2>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    <span>Graphics</span>
                  </motion.span>
                </span>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    Design.
                  </motion.span>
                </span>
              </h2>
              <motion.p variants={fadeUp}>
                AJ Technologies designs brand systems, social graphics,
                marketing collateral and digital interfaces — visual work built
                around a clear brief and structured for real-world use.
              </motion.p>
            </motion.div>

            <motion.div
              className="graphics-grid"
              variants={staggerParentSlow}
              initial="hidden"
              whileInView="show"
              viewport={viewportLow}
            >
              {graphicsServices.map((service) => {
                const Icon = service.icon;
                return (
                  <motion.article
                    className="graphics-card"
                    key={service.number}
                    variants={fadeUp}
                  >
                    <div className="graphics-card-glow" />
                    <span className="graphics-card-number">
                      {service.number}
                    </span>
                    <div className="graphics-card-icon">
                      <Icon size={22} strokeWidth={1.8} />
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </motion.article>
                );
              })}
            </motion.div>

            <motion.div
              className="graphics-proof"
              variants={staggerParentSlow}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              {graphicsProof.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    className="graphics-proof-card"
                    key={item.title}
                    variants={fadeUp}
                  >
                    <div className="graphics-proof-icon">
                      <Icon size={20} strokeWidth={1.8} />
                    </div>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div
              className="graphics-actions"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <button
                type="button"
                className="graphics-cta"
                onClick={() => setGraphicsModalOpen(true)}
              >
                <span>Explore Graphics Services</span>
                <ArrowUpRight size={17} strokeWidth={2} />
              </button>
            </motion.div>
          </div>
        </section>
        <section className="technology-section">
          <div className="section-container">
            <div className="technology-layout">
              <motion.div
                variants={staggerParent}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
              >
                <motion.div
                  className="section-kicker"
                  variants={fadeUp}
                  style={{ display: "block" }}
                >
                  CAPABILITIES
                </motion.div>
                <h2>
                  <span className="reveal-mask">
                    <motion.span
                      className="reveal-line"
                      variants={fadeUp}
                      style={{ display: "block" }}
                    >
                      <span>The technology</span>
                    </motion.span>
                  </span>
                  <span className="reveal-mask">
                    <motion.span
                      className="reveal-line"
                      variants={fadeUp}
                      style={{ display: "block" }}
                    >
                      behind the journey.
                    </motion.span>
                  </span>
                </h2>
              </motion.div>

              <motion.div
                className="technology-cloud"
                variants={staggerParent}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
              >
                {capabilities.map((item) => (
                  <motion.span key={item} variants={fadeUp}>
                    {item}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <section className="projects-section">
          <div className="section-container">
            <div className="projects-heading">
              <motion.div
                variants={staggerParent}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
              >
                <motion.div
                  className="section-kicker"
                  variants={fadeUp}
                  style={{ display: "block" }}
                >
                  SELECTED WORK
                </motion.div>
                <h2>
                  <span className="reveal-mask">
                    <motion.span
                      className="reveal-line"
                      variants={fadeUp}
                      style={{ display: "block" }}
                    >
                      <span>Ideas</span> made real.
                    </motion.span>
                  </span>
                </h2>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
              >
                <Link href="/projects" className="projects-link">
                  <span>View all projects</span>
                  <ArrowUpRight size={17} />
                </Link>
              </motion.div>
            </div>

            <motion.div
              className="projects-list"
              variants={staggerParentSlow}
              initial="hidden"
              whileInView="show"
              viewport={viewportLow}
            >
              {featuredProjects.map((project) => {
                const Icon = project.icon;
                return (
                  <motion.article
                    className="project-row"
                    key={project.number}
                    variants={slideLeft}
                  >
                    <span className="project-index">{project.number}</span>

                    <div className="project-visual">
                      <span>{project.category}</span>
                      <Icon size={28} strokeWidth={1.5} />
                    </div>

                    <div className="project-details">
                      <h3>{project.title}</h3>
                      <p>{project.text}</p>

                      <div className="project-tech">
                        {project.tech.map((t) => (
                          <span key={t}>{t}</span>
                        ))}
                      </div>
                    </div>

                    <Link
                      href={project.href}
                      className="project-arrow"
                      aria-label={project.title}
                    >
                      <ArrowUpRight size={20} />
                    </Link>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </section>

        <section className="why-section">
          <div className="section-container">
            <div className="why-layout">
              <motion.div
                className="why-copy"
                variants={staggerParent}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
              >
                <motion.div
                  className="section-kicker"
                  variants={fadeUp}
                  style={{ display: "block" }}
                >
                  WHY AJ Technologies
                </motion.div>

                <h2>
                  <span className="reveal-mask">
                    <motion.span
                      className="reveal-line"
                      variants={fadeUp}
                      style={{ display: "block" }}
                    >
                      <span>Built on clarity.</span>
                    </motion.span>
                  </span>
                  <span className="reveal-mask">
                    <motion.span
                      className="reveal-line"
                      variants={fadeUp}
                      style={{ display: "block" }}
                    >
                      Driven by purpose.
                    </motion.span>
                  </span>
                </h2>

                <motion.p variants={fadeUp}>
                  Technology only earns its place when it solves something
                  meaningful. We build with that principle in mind — from the
                  first conversation to long after launch.
                </motion.p>

                <motion.div variants={fadeUp}>
                  <Link href="/team" className="section-link">
                    <span>How we think</span>
                    <ArrowUpRight size={17} />
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div
                className="reasons-grid"
                variants={staggerParent}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
              >
                {reasons.map((reason) => {
                  const Icon = reason.icon;
                  return (
                    <motion.div
                      className="reason-card"
                      key={reason.number}
                      variants={fadeUp}
                    >
                      <div className="reason-top">
                        <Icon size={19} strokeWidth={1.8} />
                        <span>{reason.number}</span>
                      </div>
                      <h3>{reason.title}</h3>
                      <p>{reason.text}</p>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </section>

        <section className="process-section">
          <div className="section-container">
            <motion.div
              className="process-heading"
              variants={staggerParent}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <motion.div
                className="section-kicker"
                variants={fadeUp}
                style={{ display: "block" }}
              >
                HOW WE WORK
              </motion.div>

              <h2>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    <span>Clear thinking.</span>
                  </motion.span>
                </span>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    Better outcomes.
                  </motion.span>
                </span>
              </h2>

              <motion.p variants={fadeUp}>
                A structured process keeps creativity focused and technology
                connected to the outcome that matters.
              </motion.p>
            </motion.div>

            <motion.div
              className="process-track"
              variants={staggerParentSlow}
              initial="hidden"
              whileInView="show"
              viewport={viewportLow}
            >
              {process.map((step) => {
                const Icon = step.icon;
                return (
                  <motion.article
                    className="process-item"
                    key={step.number}
                    variants={fadeUp}
                  >
                    <div className="process-top">
                      <span>{step.number}</span>
                      <i />
                    </div>
                    <div className="process-icon">
                      <Icon size={22} strokeWidth={1.8} />
                    </div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </motion.article>
                );
              })}
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <Link href="/projects" className="process-link">
                <span>See our full process</span>
                <ArrowUpRight size={17} />
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-grid" />
          <div className="cta-glow" />
          <div className="cta-orbit" />

          <div className="section-container">
            <motion.div
              className="cta-content"
              variants={staggerParent}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <motion.div
                className="section-kicker"
                variants={fadeUp}
                style={{ display: "block" }}
              >
                READY WHEN YOU ARE
              </motion.div>

              <h2>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    <span>Your next idea</span>
                  </motion.span>
                </span>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    deserves to move.
                  </motion.span>
                </span>
              </h2>

              <motion.p variants={fadeUp}>
                Tell us what you're building, improving or imagining. Let's turn
                the next step into something real.
              </motion.p>

              <motion.div variants={fadeUp}>
                <Link href="/contact" className="cta-button">
                  <span>Start a Project</span>
                  <ArrowUpRight size={18} strokeWidth={2} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <AnimatePresence>
        {socialModalOpen && (
          <motion.div
            className="social-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSocialModalOpen(false)}
          >
            <motion.div
              className="social-modal"
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.4, ease }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="social-modal-close"
                onClick={() => setSocialModalOpen(false)}
                aria-label="Close"
              >
                <X size={20} />
              </button>

              <div className="social-modal-hero">
                <div className="social-modal-hero-glow" />
                <span className="social-modal-eyebrow">
                  AJ Technologies · DIGITAL SERVICES
                </span>
                <h2>Social Media Management</h2>
                <p>
                  A strategy-driven social media service helping brands grow
                  through content, engagement and analytics. Delivered by AJ
                  Technologies as part of our end-to-end digital capability.
                </p>
              </div>

              <div className="social-modal-body">
                <div className="social-modal-block">
                  <span className="social-modal-block-label">WHAT WE DO</span>
                  <div className="social-modal-services">
                    {socialServices.map((s) => {
                      const Icon = s.icon;
                      return (
                        <div className="social-modal-service" key={s.number}>
                          <div className="social-modal-service-icon">
                            <Icon size={20} strokeWidth={1.8} />
                          </div>
                          <h3>{s.title}</h3>
                          <p>{s.text}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="social-modal-block">
                  <span className="social-modal-block-label">OUR APPROACH</span>
                  <h3 className="social-modal-statement">
                    Strategy first, content second.
                  </h3>
                  <p>
                    Every piece of content we produce reflects the brand&apos;s
                    essence and meets specific marketing objectives. We
                    understand the brand, audience and goals — then create
                    aligned content that drives cohesive communication and
                    meaningful engagement.
                  </p>
                </div>

                <div className="social-modal-block">
                  <span className="social-modal-block-label">KEY METRICS</span>
                  <div className="social-modal-metrics">
                    {socialMetrics.map((metric) => (
                      <div className="social-modal-metric" key={metric.label}>
                        <div className="social-modal-metric-value">
                          +{metric.value}
                          <span>{metric.suffix}</span>
                        </div>
                        <div className="social-modal-metric-label">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="social-modal-metric-note">
                    3 campaigns managed · 6 months growth · multi-platform
                    optimization
                  </p>
                </div>

                <div className="social-modal-block">
                  <span className="social-modal-block-label">
                    PLATFORM TYPES
                  </span>
                  <div className="social-modal-platforms">
                    {socialPlatformTypes.map((type) => {
                      const Icon = type.icon;
                      return (
                        <div className="social-modal-platform" key={type.title}>
                          <div className="social-modal-platform-icon">
                            <Icon size={20} strokeWidth={1.8} />
                          </div>
                          <h3>{type.title}</h3>
                          <p>{type.text}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="social-modal-block">
                  <span className="social-modal-block-label">WORK PROCESS</span>
                  <div className="social-modal-process">
                    {socialProcess.map((step, index) => (
                      <div
                        className="social-modal-process-step"
                        key={step.number}
                      >
                        <div className="social-modal-process-head">
                          <span>{step.number}</span>
                          {index < socialProcess.length - 1 && <i />}
                        </div>
                        <h3>{step.title}</h3>
                        <p>{step.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="social-modal-cta">
                  <Link href="/contact" className="social-modal-button">
                    <span>Start a Project</span>
                    <ArrowUpRight size={17} strokeWidth={2} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {graphicsModalOpen && (
          <motion.div
            className="social-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setGraphicsModalOpen(false)}
          >
            <motion.div
              className="social-modal"
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.4, ease }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="social-modal-close"
                onClick={() => setGraphicsModalOpen(false)}
                aria-label="Close"
              >
                <X size={20} />
              </button>

              <div className="social-modal-hero">
                <div className="social-modal-hero-glow" />
                <span className="social-modal-eyebrow">
                  AJ Technologies · CREATIVE SERVICES
                </span>
                <h2>Graphics Design</h2>
                <p>
                  Brand systems, social graphics, marketing collateral and
                  digital interfaces — designed with purpose and delivered ready
                  for real-world use.
                </p>
              </div>

              <div className="social-modal-body">
                <div className="social-modal-block">
                  <span className="social-modal-block-label">WHAT WE DO</span>
                  <div className="social-modal-services">
                    {graphicsServices.map((s) => {
                      const Icon = s.icon;
                      return (
                        <div className="social-modal-service" key={s.number}>
                          <div className="social-modal-service-icon">
                            <Icon size={20} strokeWidth={1.8} />
                          </div>
                          <h3>{s.title}</h3>
                          <p>{s.text}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="social-modal-block">
                  <span className="social-modal-block-label">OUR APPROACH</span>
                  <h3 className="social-modal-statement">
                    Design with purpose. Visuals that work.
                  </h3>
                  <p>
                    Every visual we produce serves a function — to communicate
                    clearly, fit its format and reflect the brand it belongs to.
                    We design around the brief, the audience and the final use
                    case, not just the visual alone.
                  </p>
                </div>

                <div className="social-modal-block">
                  <span className="social-modal-block-label">
                    HOW WE DELIVER
                  </span>
                  <div className="social-modal-platforms">
                    {graphicsProof.map((item) => {
                      const Icon = item.icon;
                      return (
                        <div className="social-modal-platform" key={item.title}>
                          <div className="social-modal-platform-icon">
                            <Icon size={20} strokeWidth={1.8} />
                          </div>
                          <h3>{item.title}</h3>
                          <p>{item.text}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="social-modal-block">
                  <span className="social-modal-block-label">WORK PROCESS</span>
                  <div className="social-modal-process">
                    {graphicsProcess.map((step, index) => (
                      <div
                        className="social-modal-process-step"
                        key={step.number}
                      >
                        <div className="social-modal-process-head">
                          <span>{step.number}</span>
                          {index < graphicsProcess.length - 1 && <i />}
                        </div>
                        <h3>{step.title}</h3>
                        <p>{step.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="social-modal-cta">
                  <Link href="/contact" className="social-modal-button">
                    <span>Start a Project</span>
                    <ArrowUpRight size={17} strokeWidth={2} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
