import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowUpRight, Code2, ArrowLeft } from "lucide-react";
import {
  projects,
  getProjectBySlug,
  getAdjacentProjects,
} from "@/lib/projects";
import ProjectBlocks from "./ProjectBlocks";
import "./project-detail.css";

const GITHUB_URL =
  "https://github.com/aqsatanoli?tab=repositories&type=source";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: `${project.title} | AJ Technologies`,
    description: project.shortDescription,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(slug);
  const Icon = project.icon;

  // Strip the icon function before passing to client component
  const { icon: _icon, ...blockData } = project;

  return (
    <div className="project-detail-page">
      <section className="project-detail-hero">
        <div className="project-detail-hero-grid" />
        <div className="project-detail-hero-glow" />

        <div className="section-container">
          <Link href="/projects" className="project-detail-back">
            <ArrowLeft size={16} />
            <span>Back to all projects</span>
          </Link>

          <div className="project-detail-hero-inner">
            <div className="project-detail-hero-visual">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                sizes="(max-width: 1050px) 100vw, 560px"
                className="project-detail-hero-image"
              />
              <div className="project-detail-hero-overlay" />
              <span className="project-detail-index">{project.number}</span>
              <div className="project-detail-icon-tag">
                <Icon size={20} strokeWidth={1.8} />
              </div>
            </div>

            <div className="project-detail-hero-copy">
              <span className="project-detail-category">
                {project.category}
              </span>
              <h1>{project.title}</h1>
              <p className="project-detail-tagline">{project.tagline}</p>
              <p>{project.shortDescription}</p>

              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="project-detail-github"
              >
                <Code2 size={18} />
                <span>View on GitHub</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="project-detail-body">
        <div className="section-container">
          <ProjectBlocks project={blockData} />
        </div>
      </section>

      {(prev || next) && (
        <section className="project-detail-nav">
          <div className="section-container">
            <div className="project-detail-nav-inner">
              {prev && (
                <Link
                  href={`/projects/${prev.slug}`}
                  className="project-detail-nav-link prev"
                >
                  <span className="project-detail-nav-label">
                    <ArrowLeft size={14} />
                    Previous
                  </span>
                  <strong>{prev.title}</strong>
                </Link>
              )}

              {next && (
                <Link
                  href={`/projects/${next.slug}`}
                  className="project-detail-nav-link next"
                >
                  <span className="project-detail-nav-label">
                    Next
                    <ArrowUpRight size={14} />
                  </span>
                  <strong>{next.title}</strong>
                </Link>
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}