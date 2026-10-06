"use client";

import {
  SiPython,
  SiFastapi,
  SiPostgresql,
  SiReact,
  SiPandas,
  SiNumpy,
  SiOpencv,
  SiScikitlearn,
} from "react-icons/si";
import {
  Code2,
  Sparkles,
  Eye,
  Brain,
  Boxes,
  Wand2,
  BarChart3,
  LineChart,
  Database,
  Zap,
} from "lucide-react";
import type { IconType } from "react-icons";

type IconEntry =
  | { kind: "si"; Icon: IconType }
  | { kind: "lucide"; Icon: typeof Code2 };

const TECH_ICONS: Record<string, IconEntry> = {
  // Languages / frameworks / backends
  python: { kind: "si", Icon: SiPython },
  fastapi: { kind: "si", Icon: SiFastapi },
  react: { kind: "si", Icon: SiReact },

  // Data
  pandas: { kind: "si", Icon: SiPandas },
  numpy: { kind: "si", Icon: SiNumpy },
  matplotlib: { kind: "lucide", Icon: LineChart },
  "power bi": { kind: "lucide", Icon: BarChart3 },

  // ML / CV / AI
  "scikit-learn": { kind: "si", Icon: SiScikitlearn },
  sklearn: { kind: "si", Icon: SiScikitlearn },
  opencv: { kind: "si", Icon: SiOpencv },
  openai: { kind: "lucide", Icon: Sparkles },

  // Databases
  postgresql: { kind: "si", Icon: SiPostgresql },
  postgres: { kind: "si", Icon: SiPostgresql },
  database: { kind: "lucide", Icon: Database },

  // Concept-level
  "ai/ml": { kind: "lucide", Icon: Brain },
  "machine learning": { kind: "lucide", Icon: Brain },
  "computer vision": { kind: "lucide", Icon: Eye },
  "generative ai": { kind: "lucide", Icon: Sparkles },
  "prompt engineering": { kind: "lucide", Icon: Wand2 },
  llms: { kind: "lucide", Icon: Sparkles },
  yolov8: { kind: "lucide", Icon: Boxes },
  analytics: { kind: "lucide", Icon: BarChart3 },
  "api integration": { kind: "lucide", Icon: Zap },
  "strategy": { kind: "lucide", Icon: Brain },
  "content design": { kind: "lucide", Icon: Wand2 },
  "community management": { kind: "lucide", Icon: Brain },
  "brand systems": { kind: "lucide", Icon: Boxes },
  "graphic design": { kind: "lucide", Icon: Wand2 },
  "print & digital": { kind: "lucide", Icon: Boxes },
  "visual identity": { kind: "lucide", Icon: Eye },
};

const DEFAULT_ICON: IconEntry = { kind: "lucide", Icon: Code2 };

export default function TechTag({ label }: { label: string }) {
  const key = label.toLowerCase().trim();
  const entry = TECH_ICONS[key] ?? DEFAULT_ICON;
  const { Icon, kind } = entry;

  return (
    <span className="block-tech-tag">
      <span className={`block-tech-icon block-tech-icon-${kind}`}>
        <Icon size={15} />
      </span>
      <span className="block-tech-label">{label}</span>
    </span>
  );
}