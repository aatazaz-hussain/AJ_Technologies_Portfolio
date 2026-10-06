"use client";

import { motion, Variants } from "framer-motion";
import type { Project } from "@/lib/projects";
import TechTag from "./TechTag";

type ProjectBlockData = Omit<Project, "icon">;

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const viewport = { once: true, amount: 0.15 } as const;

export default function ProjectBlocks({
  project,
}: {
  project: ProjectBlockData;
}) {
  return (
    <motion.div
      className="project-blocks-grid"
      variants={staggerParent}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
    >
      <motion.div className="project-block block-full" variants={fadeUp}>
        <span className="block-number">01</span>
        <span className="block-label">OVERVIEW</span>
        <p className="block-text block-text-lg">{project.overview}</p>
      </motion.div>

      <motion.div className="project-block" variants={fadeUp}>
        <span className="block-number">02</span>
        <span className="block-label">PROBLEM</span>
        <p className="block-text">{project.problem}</p>
      </motion.div>

      <motion.div className="project-block" variants={fadeUp}>
        <span className="block-number">03</span>
        <span className="block-label">SOLUTION</span>
        <p className="block-text">{project.solution}</p>
      </motion.div>

      <motion.div className="project-block block-full" variants={fadeUp}>
        <span className="block-number">04</span>
        <span className="block-label">OUR ROLE</span>
        <p className="block-text">{project.role}</p>
        <div className="block-deliverables">
          {project.deliverables.map((d) => (
            <span key={d}>{d}</span>
          ))}
        </div>
      </motion.div>

      <motion.div className="project-block" variants={fadeUp}>
        <span className="block-number">05</span>
        <span className="block-label">KEY FEATURES</span>
        <div className="block-tags">
          {project.features.map((f) => (
            <span key={f}>{f}</span>
          ))}
        </div>
      </motion.div>

      <motion.div className="project-block" variants={fadeUp}>
        <span className="block-number">06</span>
        <span className="block-label">TECHNOLOGY</span>
        <div className="block-tech-tags">
          {project.tech.map((t) => (
            <TechTag key={t} label={t} />
          ))}
        </div>
      </motion.div>

      <motion.div className="project-block block-highlight" variants={fadeUp}>
        <span className="block-number">07</span>
        <span className="block-label">OUTCOME</span>
        <p className="block-text">{project.outcome}</p>
      </motion.div>

      <motion.div className="project-block" variants={fadeUp}>
        <span className="block-number">08</span>
        <span className="block-label">PURPOSE</span>
        <p className="block-text">{project.purpose}</p>
      </motion.div>
    </motion.div>
  );
}