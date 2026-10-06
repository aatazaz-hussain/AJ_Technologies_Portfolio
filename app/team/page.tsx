"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { motion, Variants } from "framer-motion";
import "./team.css";

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

const team = [
  {
    number: "01",
    name: "Aqsa Fayyaz",
    role: "Chief Executive Officer",
    short: "CEO",
    line: "Leading the vision, direction and the AI journey behind AJ Technologies.",
  },
  {
    number: "02",
    name: "Javed Iqbal",
    role: "Director",
    short: "Director",
    line: "Guiding strategy, partnerships and the operational direction of the company.",
  },
  {
    number: "03",
    name: "Samiya Nazeer",
    role: "Chief Technology Officer",
    short: "CTO",
    line: "Driving the technical architecture and engineering decisions across every project.",
  },
];

export default function Team() {
  return (
    <div className="team-page">
      <main>
        <section className="team-hero">
          <div className="team-hero-grid" />
          <div className="team-hero-noise" />
          <div className="team-hero-glow team-hero-glow-one" />
          <div className="team-hero-glow team-hero-glow-two" />

          <div className="team-hero-container">
            <motion.div
              className="team-hero-inner"
              variants={staggerParentSlow}
              initial="hidden"
              animate="show"
            >
              <motion.div className="hero-eyebrow" variants={slideLeft}>
                <span className="eyebrow-pulse" />
                <span>THE TEAM</span>
                <span className="eyebrow-divider" />
                <span>BEHIND THE JOURNEY</span>
              </motion.div>

              <h1>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    <span>The people</span> building
                  </motion.span>
                </span>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    the AI journey.
                  </motion.span>
                </span>
              </h1>

              <motion.p className="team-hero-text" variants={fadeUp}>
                A small, focused team of technology leaders combining vision,
                strategy and engineering to turn ambitious ideas into
                intelligent digital products.
              </motion.p>

              <motion.div className="team-hero-tags" variants={fadeUp}>
                <span>VISION</span>
                <i />
                <span>STRATEGY</span>
                <i />
                <span>ENGINEERING</span>
              </motion.div>

              <motion.div className="team-hero-actions" variants={fadeUp}>
                <Link href="/contact" className="hero-primary">
                  <span>Work With Us</span>
                  <ArrowUpRight size={17} strokeWidth={2} />
                </Link>

                <Link href="/projects" className="hero-secondary">
                  <span>Explore Our Work</span>
                  <ArrowUpRight size={17} strokeWidth={2} />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className="team-hero-visual"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, ease, delay: 0.3 }}
            >
              <div className="hero-visual-aura" />
              <div className="visual-orbit orbit-one" />
              <div className="visual-orbit orbit-two" />

              <div className="hero-image-frame">
                <Image
                  src="/images/team-hero.png"
                  alt="Abstract constellation of connected glowing nodes representing the AJ Technologies team"
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
                    <i /> CORE TEAM
                  </span>
                  <strong>LEADERSHIP · BUILDING</strong>
                </div>
              </div>

              <motion.div
                className="floating-panel panel-top"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.9, ease }}
              >
                <Sparkles size={17} />
                <div>
                  <span>LEADERSHIP</span>
                  <strong>Vision · Direction</strong>
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
                  <span>COLLABORATIVE</span>
                  <strong>Built together</strong>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="team-intro">
          <div className="section-container">
            <div className="team-intro-layout">
              <motion.div
                className="team-label"
                variants={slideLeft}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
              >
                <span>01</span>
                <i />
                <span>WHO LEADS</span>
              </motion.div>

              <motion.div
                className="team-intro-main"
                variants={staggerParent}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
              >
                <h2>
                  <span className="reveal-mask">
                    <motion.span
                      className="reveal-line"
                      variants={fadeUp}
                      style={{ display: "block" }}
                    >
                      <span>Small team.</span> Serious
                    </motion.span>
                  </span>
                  <span className="reveal-mask">
                    <motion.span
                      className="reveal-line"
                      variants={fadeUp}
                      style={{ display: "block" }}
                    >
                      ambition.
                    </motion.span>
                  </span>
                </h2>

                <motion.p variants={fadeUp}>
                  AJ Technologies is led by a focused team of technology
                  leaders. Each of us brings a distinct strength to the company
                  — from the vision that shapes what we build, to the strategy
                  that guides how we operate, to the engineering that makes
                  every solution real.
                </motion.p>

                <motion.p variants={fadeUp}>
                  We don't hide behind departments or handoffs. The people who
                  lead the company are the same people who work directly with
                  the technology.
                </motion.p>
              </motion.div>

              <motion.div
                className="team-intro-orbit"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={viewport}
                transition={{ duration: 0.9, ease }}
              >
                <div className="orbit-ring orbit-ring-a" />
                <div className="orbit-ring orbit-ring-b" />
                <div className="orbit-ring orbit-ring-c" />
                <div className="orbit-core">
                  <Sparkles size={26} strokeWidth={1.6} />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="team-roster">
          <div className="section-container">
            <motion.div
              className="team-roster-head"
              variants={staggerParent}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <motion.div className="section-kicker" variants={fadeUp}>
                02 / LEADERSHIP
              </motion.div>
              <h2>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    <span>The people behind</span>
                  </motion.span>
                </span>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    the work.
                  </motion.span>
                </span>
              </h2>
            </motion.div>

            <motion.div
              className="roster-list"
              variants={staggerParentSlow}
              initial="hidden"
              whileInView="show"
              viewport={viewportLow}
            >
              {team.map((member) => (
                <motion.article
                  className="roster-row"
                  key={member.number}
                  variants={fadeUp}
                >
                  <span className="roster-index">{member.number}</span>

                  <div className="roster-name-block">
                    <span className="roster-role-short">{member.short}</span>
                    <h3 className="roster-name">{member.name}</h3>
                    <span className="roster-role">{member.role}</span>
                  </div>

                  <div className="roster-line-block">
                    <span className="roster-line-divider" />
                    <p className="roster-line">{member.line}</p>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="team-values">
          <div className="section-container">
            <motion.div
              className="team-values-head"
              variants={staggerParent}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <motion.div className="section-kicker" variants={fadeUp}>
                03 / HOW WE WORK TOGETHER
              </motion.div>
              <h2>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    <span>One direction.</span> Shared
                  </motion.span>
                </span>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    standards.
                  </motion.span>
                </span>
              </h2>
            </motion.div>

            <motion.div
              className="values-grid"
              variants={staggerParentSlow}
              initial="hidden"
              whileInView="show"
              viewport={viewportLow}
            >
              {[
                {
                  number: "01",
                  title: "Direct",
                  text: "No layers, no handoffs. The people leading the company work directly with the technology and the client.",
                },
                {
                  number: "02",
                  title: "Aligned",
                  text: "Vision, strategy and engineering decisions are made together — the same direction across every project.",
                },
                {
                  number: "03",
                  title: "Accountable",
                  text: "The team that designs the solution is the same team responsible for how it performs in the real world.",
                },
              ].map((item) => (
                <motion.div
                  className="value-card"
                  key={item.number}
                  variants={fadeUp}
                >
                  <span className="value-number">{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="team-cta">
          <div className="team-cta-grid" />
          <div className="team-cta-glow" />
          <div className="team-cta-orbit" />

          <div className="section-container">
            <motion.div
              className="team-cta-content"
              variants={staggerParent}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <motion.div className="section-kicker" variants={fadeUp}>
                WORK WITH US
              </motion.div>

              <h2>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    <span>Let's build something</span>
                  </motion.span>
                </span>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    worth building.
                  </motion.span>
                </span>
              </h2>

              <motion.p variants={fadeUp}>
                Have an idea, a challenge or a project in mind? The AJ
                Technologies team is ready to help you move it forward.
              </motion.p>

              <motion.div className="team-cta-actions" variants={fadeUp}>
                <Link href="/contact" className="cta-button">
                  <span>Start a Project</span>
                  <ArrowUpRight size={18} strokeWidth={2} />
                </Link>

                <Link href="/projects" className="cta-link">
                  <span>Explore Our Work</span>
                  <ArrowUpRight size={18} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}