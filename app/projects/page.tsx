"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Code2,
  Sparkles,
} from "lucide-react";
import { motion, Variants } from "framer-motion";
import { projects } from "@/lib/projects";
import "./projects.css";

const ease = [0.22, 1, 0.36, 1] as const;
const GITHUB_URL =
  "https://github.com/aqsatanoli?tab=repositories&type=source";

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
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const viewport = { once: true, amount: 0.2 } as const;

const filters = [
  { key: "all", label: "ALL" },
  { key: "ai-ml", label: "AI & ML" },
  { key: "gen-ai", label: "GENERATIVE AI" },
  { key: "cv", label: "COMPUTER VISION" },
  { key: "data", label: "DATA & ANALYTICS" },
  { key: "software", label: "SOFTWARE" },
  { key: "social", label: "SOCIAL MEDIA" },
  { key: "graphics", label: "GRAPHICS" },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.tags.includes(activeFilter));

  return (
    <div className="projects-page">
      <main>
        <section className="projects-hero">
          <div className="projects-hero-grid" />
          <div className="projects-hero-noise" />
          <div className="projects-hero-glow projects-hero-glow-one" />
          <div className="projects-hero-glow projects-hero-glow-two" />

          <div className="projects-hero-container">
            <motion.div
              className="projects-hero-inner"
              variants={staggerParentSlow}
              initial="hidden"
              animate="show"
            >
              <motion.div className="hero-eyebrow" variants={slideLeft}>
                <span className="eyebrow-pulse" />
                <span>OUR WORK</span>
                <span className="eyebrow-divider" />
                <span>FULL PORTFOLIO</span>
              </motion.div>

              <h1>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    <span>Ideas we&apos;ve turned</span>
                  </motion.span>
                </span>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    into intelligent solutions.
                  </motion.span>
                </span>
              </h1>

              <motion.p className="projects-hero-text" variants={fadeUp}>
                Explore a selection of AI, machine learning, generative AI, data
                analytics and software projects built to solve practical
                problems across different domains.
              </motion.p>

              <motion.div className="projects-hero-tags" variants={fadeUp}>
                <span>AI</span>
                <i />
                <span>MACHINE LEARNING</span>
                <i />
                <span>SOFTWARE</span>
                <i />
                <span>DATA</span>
              </motion.div>

              <motion.div className="projects-hero-actions" variants={fadeUp}>
                <Link href="/contact" className="hero-primary">
                  <span>Start a Project</span>
                  <ArrowUpRight size={17} strokeWidth={2} />
                </Link>

                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-secondary"
                >
                  <Code2 size={17} />
                  <span>View GitHub</span>
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              className="projects-hero-visual"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, ease, delay: 0.3 }}
            >
              <div className="hero-visual-aura" />
              <div className="visual-orbit orbit-one" />
              <div className="visual-orbit orbit-two" />

              <div className="hero-image-frame">
                <Image
                  src="/images/projects-hero.png"
                  alt="Abstract dashboard composition representing the AJ Technologies project portfolio"
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
                    <i /> PORTFOLIO
                  </span>
                  <strong>BUILT · SHIPPED · LIVE</strong>
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
                  <span>TEN PROJECTS</span>
                  <strong>Across domains</strong>
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
                  <span>OPEN SOURCE</span>
                  <strong>View on GitHub</strong>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="projects-intro">
          <div className="section-container">
            <div className="projects-intro-layout">
              <motion.div
                className="projects-label"
                variants={slideLeft}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
              >
                <span>01</span>
                <i />
                <span>SELECTED WORK</span>
              </motion.div>

              <motion.div
                className="projects-intro-main"
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
                      <span>Different problems. One</span>
                    </motion.span>
                  </span>
                  <span className="reveal-mask">
                    <motion.span
                      className="reveal-line"
                      variants={fadeUp}
                      style={{ display: "block" }}
                    >
                      engineering mindset.
                    </motion.span>
                  </span>
                </h2>

                <motion.p variants={fadeUp}>
                  Our portfolio reflects the breadth of our technical
                  capabilities — from computer vision and predictive machine
                  learning to generative AI, data analytics and complete
                  software platforms.
                </motion.p>

                <motion.p variants={fadeUp}>
                  Each project begins with a problem and ends with a
                  technology-driven solution designed around its intended use
                  case.
                </motion.p>
              </motion.div>

              <motion.div
                className="projects-intro-orbit"
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

        <section className="projects-list-section">
          <div className="section-container">
            <motion.div
              className="projects-filter"
              variants={staggerParent}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              {filters.map((f) => (
                <motion.button
                  key={f.key}
                  type="button"
                  className={`filter-btn ${activeFilter === f.key ? "active" : ""}`}
                  onClick={() => setActiveFilter(f.key)}
                  variants={fadeUp}
                >
                  {f.label}
                  <span className="filter-count">
                    {f.key === "all"
                      ? projects.length
                      : projects.filter((p) => p.tags.includes(f.key)).length}
                  </span>
                </motion.button>
              ))}
            </motion.div>

            <motion.div className="projects-grid" layout>
              {filteredProjects.map((project) => {
                const Icon = project.icon;
                return (
                  <motion.article
                    key={project.slug}
                    className="project-card"
                    layout
                    initial={{ opacity: 0, y: 30, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5, ease }}
                  >
                    <Link
                      href={`/projects/${project.slug}`}
                      className="project-card-inner"
                      aria-label={`Open ${project.title}`}
                    >
                      <div className="project-card-visual">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 760px) 100vw, 50vw"
                          className="project-card-image"
                        />

                        <div className="project-card-overlay" />

                        <span className="project-card-index">
                          {project.number}
                        </span>

                        <div className="project-card-icon-tag">
                          <Icon size={18} strokeWidth={1.8} />
                        </div>

                        <div className="project-card-corner tl" />
                        <div className="project-card-corner tr" />
                        <div className="project-card-corner bl" />
                        <div className="project-card-corner br" />

                        <div className="project-card-name">
                          <span>{project.title}</span>
                        </div>
                      </div>

                      <div className="project-card-body">
                        <span className="project-card-category">
                          {project.category}
                        </span>
                        <h3>{project.title}</h3>
                        <p>{project.shortDescription}</p>

                        <div className="project-card-tech">
                          {project.tech.slice(0, 4).map((t) => (
                            <span key={t}>{t}</span>
                          ))}
                        </div>

                        <div className="project-card-footer">
                          <span className="project-card-cta">
                            <span>View Project</span>
                            <ArrowUpRight size={16} />
                          </span>
                        </div>
                      </div>
                    </Link>

                    <a
                      href={GITHUB_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card-github"
                      aria-label={`${project.title} on GitHub`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Code2 size={16} />
                    </a>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </section>

        <section className="projects-cta">
          <div className="projects-cta-grid" />
          <div className="projects-cta-glow" />
          <div className="projects-cta-orbit" />

          <div className="section-container">
            <motion.div
              className="projects-cta-content"
              variants={staggerParent}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <motion.div className="section-kicker" variants={fadeUp}>
                HAVE A PROJECT IN MIND?
              </motion.div>

              <h2>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    <span>Your next project could</span>
                  </motion.span>
                </span>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    be our next build.
                  </motion.span>
                </span>
              </h2>

              <motion.p variants={fadeUp}>
                Have a problem that needs AI, software, data or a combination of
                technologies? Let&apos;s explore what we can build together.
              </motion.p>

              <motion.div className="projects-cta-actions" variants={fadeUp}>
                <Link href="/contact" className="cta-button">
                  <span>Start a Project</span>
                  <ArrowUpRight size={18} strokeWidth={2} />
                </Link>

                <Link href="/team" className="cta-link">
                  <span>Meet the Team</span>
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