import {
  Users,
  Sparkles,
  Boxes,
  Target,
  LineChart,
  TrendingUp,
  Home as HomeIcon,
  BookOpen,
  LayoutGrid,
} from "lucide-react";

export type Project = {
  number: string;
  slug: string;
  image: string;
  title: string;
  category: string;
  tags: string[];
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  tagline: string;
  shortDescription: string;
  overview: string;
  problem: string;
  solution: string;
  role: string;
  deliverables: string[];
  features: string[];
  tech: string[];
  outcome: string;
  purpose: string;
};

export const projects: Project[] = [
  {
    number: "01",
    slug: "see-and-hire",
    image: "/projects/see-and-hire.png",
    title: "See and Hire",
    category: "AI PLATFORM",
    tags: ["ai-ml", "software"],
    icon: Users,
    tagline: "Hiring, shortened from hundreds to a shortlist.",
    shortDescription:
      "A hiring platform built to shorten the distance between a candidate and the right opening — using AI-assisted matching instead of endless manual screening.",
    overview:
      "See and Hire is a full recruitment platform that sits between candidates and open roles, using AI to do the first pass of screening that recruiters normally do by hand. Instead of reviewing hundreds of profiles per opening, recruiters receive a shortlist ranked by actual fit. The system is built as one product — candidate-facing application flow, recruiter dashboard, matching engine and backend API — so the whole hiring loop runs through a single place.",
    problem:
      "Recruiters sift through hundreds of profiles per role. The right candidate is often buried, and the process drains time from both sides of the hire.",
    solution:
      "We built a platform where the matching logic does the first pass — surfacing candidates by fit, not just keyword overlap, and giving recruiters a shorter, sharper shortlist.",
    role: "AJ Technologies designed and built See and Hire end to end — product design, front end, backend API, database schema and the AI matching layer that powers the shortlist. We ran it as a single build, not a handoff between teams, so the matching logic and the recruitment workflow were designed together.",
    deliverables: [
      "Product design and system architecture",
      "Full-stack application build",
      "Backend and REST API engineering",
      "AI-assisted matching engine",
      "Recruiter workflow and dashboard",
    ],
    features: [
      "AI-assisted candidate matching",
      "Structured recruitment workflow",
      "Shortlist recommendations",
      "Full-stack platform build",
      "Backend and API engineering",
    ],
    tech: ["Python", "AI/ML", "FastAPI", "PostgreSQL", "React"],
    outcome:
      "The result is a working platform where the matching layer removes the first, most repetitive stage of screening — giving recruiters a focused shortlist instead of a flood of profiles, and giving candidates a shorter path from application to review.",
    purpose:
      "A full product build — front end, back end, matching logic and workflow — delivered as one system.",
  },
  {
    number: "02",
    slug: "nutra-ai",
    image: "/projects/nutra-ai.png",
    title: "Nutra AI",
    category: "GENERATIVE AI",
    tags: ["gen-ai", "ai-ml"],
    icon: Sparkles,
    tagline: "A nutrition assistant that answers, not prescribes.",
    shortDescription:
      "A nutrition assistant that answers real questions about food and diet through conversation, powered by large language models instead of rigid meal plans.",
    overview:
      "Nutra AI is a conversational nutrition assistant built on top of large language models. Instead of generating a fixed meal plan and leaving the user to follow it, the assistant takes questions — about specific foods, dietary goals, restrictions, substitutions — and responds in context. It remembers what the user has said, adapts to their preferences and adjusts recommendations as those preferences change over time.",
    problem:
      "Most nutrition tools hand you a generic plan. They ignore context — what you already eat, what you avoid, what you actually want to change.",
    solution:
      "We built a conversational assistant on top of LLMs that adapts to the person using it. It answers dietary questions, generates suggestions and adjusts as preferences shift.",
    role: "We designed the assistant's prompt architecture, wired the LLM integration, and built the conversation layer that keeps track of user context across a session. The focus was making the model behave less like a search engine and more like a knowledgeable assistant that understands the person it's talking to.",
    deliverables: [
      "LLM integration and prompt design",
      "Conversation state and context handling",
      "Personalization logic",
      "Assistant interface build",
      "API and model pipeline",
    ],
    features: [
      "LLM-powered conversations",
      "Personalized food guidance",
      "Context-aware recommendations",
      "Interactive assistant interface",
      "End-to-end AI application",
    ],
    tech: ["Python", "LLMs", "OpenAI", "Generative AI", "API Integration"],
    outcome:
      "Nutra AI showed us where personalization actually lives in an LLM product — not in the model itself, but in how context is gathered, retained and fed back. The assistant now responds with answers that fit the person asking, rather than a generic plan for everyone.",
    purpose:
      "An experiment in using LLMs where personalization is the whole point — not a feature added on top.",
  },
  {
    number: "03",
    slug: "tableop",
    image: "/projects/tableop.png",
    title: "Tableop",
    category: "AI / SOFTWARE",
    tags: ["software", "ai-ml"],
    icon: Boxes,
    tagline: "Software where the intelligence is part of the workflow.",
    shortDescription:
      "A software platform where intelligent capability sits inside the product — not as an add-on, but as part of how the system works.",
    overview:
      "Tableop is a software platform built around a simple idea: intelligence should be part of how the product works, not a separate tool bolted onto the side. The AI layer runs inside the workflow — reading inputs, making suggestions, handling repetitive steps — so the person using the product experiences it as a smoother process, not as an extra feature they have to remember to activate.",
    problem:
      "Most software products bolt AI on late. It feels disconnected from the actual workflow and adds friction instead of removing it.",
    solution:
      "We designed Tableop so the intelligence runs through the product itself — integrated into the flow rather than sitting off to the side as a separate tool.",
    role: "We handled product engineering, backend architecture, database design and the integration of AI capability directly into the application's workflow. The build was structured so the intelligent parts could evolve independently from the rest of the product — without requiring a rewrite every time the model changed.",
    deliverables: [
      "Product engineering and architecture",
      "Backend and database design",
      "AI integration into core workflow",
      "Application interface",
      "End-to-end delivery",
    ],
    features: [
      "Product engineering",
      "AI integrated into workflow",
      "Backend architecture",
      "Application design",
      "End-to-end delivery",
    ],
    tech: ["Python", "FastAPI", "AI/ML", "PostgreSQL"],
    outcome:
      "Tableop is a working demonstration of the alternative to bolt-on AI: the intelligence is invisible in the best way — the user just experiences a workflow that requires less manual effort, without ever having to think about the model running underneath.",
    purpose:
      "A build that treats AI as core infrastructure — not a bolt-on feature.",
  },
  {
    number: "04",
    slug: "dental-dynamo",
    image: "/projects/dental-dynamo.png",
    title: "Dental Dynamo",
    category: "COMPUTER VISION",
    tags: ["cv", "ai-ml"],
    icon: Target,
    tagline: "A second pass on dental X-rays, powered by vision.",
    shortDescription:
      "A computer-vision tool that reads dental X-rays and highlights regions of interest — supporting the analysis rather than replacing it.",
    overview:
      "Dental Dynamo is a computer-vision system trained to read dental X-ray imagery and highlight regions that warrant a closer look. It's built as a support tool, not a diagnostic replacement — the model flags and annotates, the clinician reviews and decides. The pipeline takes raw imaging, preprocesses it, runs detection and produces an annotated output for review.",
    problem:
      "Reading dental X-rays is careful, visual work. Details matter, and a second pass through detection can catch what the eye skims past.",
    solution:
      "We trained a YOLOv8 model on dental imagery and paired it with OpenCV for preprocessing. The system flags regions and supports the analysis — leaving the clinical call to the professional.",
    role: "We built the full computer-vision pipeline — dataset preparation, image preprocessing with OpenCV, model training and evaluation with YOLOv8, and the detection output used to flag regions of interest in dental X-ray imagery.",
    deliverables: [
      "Dataset preparation and annotation",
      "Image preprocessing pipeline (OpenCV)",
      "YOLOv8 model training",
      "Model evaluation and tuning",
      "Detection output for review",
    ],
    features: [
      "Computer vision pipeline",
      "Medical image analysis",
      "YOLOv8 object detection",
      "AI-assisted screening",
      "Model training and evaluation",
    ],
    tech: ["Python", "YOLOv8", "OpenCV", "Computer Vision"],
    outcome:
      "The result is a trained, working pipeline that applies modern object detection to a real clinical image type — demonstrating how vision models can act as a structured second pass on medical imagery without overstepping into diagnosis.",
    purpose:
      "A working computer-vision pipeline applied to a real clinical image type — not a toy dataset.",
  },
  {
    number: "05",
    slug: "mental-health-in-tech",
    image: "/projects/mental-health.png",
    title: "Mental Health in Tech",
    category: "DATA & ANALYTICS",
    tags: ["data"],
    icon: LineChart,
    tagline: "Reading a survey that most people skim past.",
    shortDescription:
      "A data project that reads between the lines of a real survey — looking at how mental health patterns show up inside tech workplaces.",
    overview:
      "Mental Health in Tech is a data analysis project built on a real industry survey. The dataset exists publicly — the value comes from what you do with it. We cleaned the data, questioned it, ran exploratory analysis to find signal beneath the surface, and produced visualizations that tell a coherent story instead of presenting every column as a chart.",
    problem:
      "Survey data about mental health in tech exists, but it's rarely read carefully. Patterns sit buried under columns of answers nobody actually looks at.",
    solution:
      "We cleaned and analyzed the dataset, ran exploratory work to find real signal, and built visualizations that tell a coherent story — not just charts for the sake of charts.",
    role: "We handled the full analysis lifecycle — data cleaning and preparation, exploratory analysis, statistical pattern finding, and the visualizations that translate the findings into something a reader can act on. The work was framed around questions worth asking, not just what was easy to plot.",
    deliverables: [
      "Data cleaning and preparation",
      "Exploratory data analysis",
      "Statistical pattern identification",
      "Data visualization and reporting",
      "Insight-driven summary",
    ],
    features: [
      "Data cleaning and preparation",
      "Exploratory analysis",
      "Visualization and reporting",
      "Statistical pattern finding",
      "Insight-driven reporting",
    ],
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Power BI"],
    outcome:
      "The project produced a clear, readable picture of how mental health patterns appear inside the tech industry — grounded in real data, structured around questions the survey was actually trying to answer, and presented without the padding that usually buries survey findings.",
    purpose:
      "Data work done with care — cleaning, questioning, and reporting what the numbers actually say.",
  },
  {
    number: "06",
    slug: "job-salaries-management",
    image: "/projects/job-salaries.png",
    title: "Job Salaries Management",
    category: "DATA ANALYTICS",
    tags: ["data"],
    icon: TrendingUp,
    tagline: "Making messy salary data readable.",
    shortDescription:
      "A salary analysis project that turns a scattered dataset into something you can actually read — roles, ranges, trends, at a glance.",
    overview:
      "Job Salaries Management takes a raw, messy salary dataset and turns it into something structured and readable. The original data mixes formats, uses different titles for the same role and offers little at face value. We normalized it, grouped roles meaningfully, and built an analysis layer that surfaces the trends that matter — without requiring the reader to dig through a spreadsheet.",
    problem:
      "Salary data is messy. It comes in different formats, uses different titles for the same role, and rarely tells you anything useful at face value.",
    solution:
      "We normalized the data, grouped roles sensibly, and built an analysis layer that makes the numbers readable — so the trends are visible without having to dig for them.",
    role: "We normalized and structured the dataset, grouped role titles into sensible categories, ran the analysis, and produced visualizations and summaries that let the numbers speak clearly. The dashboard work was built in Power BI, with the data pipeline handled in Python.",
    deliverables: [
      "Data normalization and cleaning",
      "Role grouping and categorization",
      "Analysis and statistical summarization",
      "Dashboard build (Power BI)",
      "Trend visualization",
    ],
    features: [
      "Data normalization",
      "Salary and role analysis",
      "Trend visualization",
      "Statistical summaries",
      "Dashboard reporting",
    ],
    tech: ["Python", "Pandas", "NumPy", "Power BI"],
    outcome:
      "The result is a clean view of salary data — role-by-role ranges, comparisons and trends that would have been buried in the raw file. The dataset was turned into a tool for reading, not a file to comb through.",
    purpose:
      "Structured analysis that takes raw records and returns a clear picture of salary trends.",
  },
  {
    number: "07",
    slug: "house-price-predictions",
    image: "/projects/house-price.png",
    title: "House Price Predictions",
    category: "MACHINE LEARNING",
    tags: ["ai-ml", "data"],
    icon: HomeIcon,
    tagline: "A regression model, trained and tested — not guessed.",
    shortDescription:
      "A machine-learning model that estimates property prices from housing data — trained, evaluated and tested on real feature sets.",
    overview:
      "House Price Predictions is a complete machine-learning pipeline that estimates property prices from housing data. It's built as a proper ML project — data cleaning, feature engineering, model training, evaluation against a held-out set, and a working prediction pipeline. No shortcuts on evaluation; the model was tested, not just fitted.",
    problem:
      "Property pricing depends on many features at once. Linear guessing misses interactions that only show up when you model them together.",
    solution:
      "We built a regression pipeline with scikit-learn — cleaned the data, engineered features, trained the model and evaluated it against a held-out set to see what actually held up.",
    role: "We handled the full pipeline — preprocessing and cleaning, feature engineering, model selection and training with scikit-learn, evaluation on held-out data, and packaging the trained model into a prediction pipeline. The focus was on a model that performs honestly, not one that scores well on training data alone.",
    deliverables: [
      "Data preprocessing and cleaning",
      "Feature engineering",
      "Regression model training (scikit-learn)",
      "Model evaluation on held-out set",
      "Prediction pipeline",
    ],
    features: [
      "Regression modeling",
      "Data preprocessing",
      "Feature engineering",
      "Model training and evaluation",
      "Prediction pipeline",
    ],
    tech: ["Python", "scikit-learn", "Pandas", "NumPy", "Machine Learning"],
    outcome:
      "The end result is a working regression pipeline that takes housing features and returns estimated prices — trained on real data, evaluated honestly, and structured so the model can be reused or retrained as more data arrives.",
    purpose:
      "A complete ML pipeline from raw data to a tested prediction — evaluation included, not skipped.",
  },
  {
    number: "08",
    slug: "story-generator",
    image: "/projects/story-generator.png",
    title: "Story Generator",
    category: "GENERATIVE AI",
    tags: ["gen-ai"],
    icon: BookOpen,
    tagline: "Testing where the model writes, and where it falls back.",
    shortDescription:
      "A generative AI application that turns a prompt into a short story — testing where language models are genuinely creative and where they fall back on patterns.",
    overview:
      "Story Generator is a generative AI application built to explore how far language models can go when treated as a writing partner instead of a text expander. The user provides a prompt; the model produces narrative. The interesting work was in prompt design — tuning how the model responds so it varies in tone, structure and pacing, instead of defaulting to the same shape every time.",
    problem:
      "Template-based content generators produce the same story shape every time. Real narrative needs something less predictable.",
    solution:
      "We built a generator on top of LLMs with tuned prompts. The output varies in tone, structure and pacing depending on the input — closer to writing than filling in blanks.",
    role: "We designed and tuned the prompt architecture that drives the generator, built the interactive interface for prompt input, and structured the model pipeline. The aim was to get variance and voice out of the model — not just coherent output.",
    deliverables: [
      "LLM integration",
      "Prompt design and tuning",
      "Narrative output structure",
      "Interactive generation interface",
      "Application build",
    ],
    features: [
      "LLM-driven generation",
      "Prompt design and tuning",
      "Narrative output control",
      "Interactive generation interface",
      "AI application build",
    ],
    tech: ["Python", "LLMs", "Generative AI", "Prompt Engineering"],
    outcome:
      "The project produced a working generator and, more importantly, a clearer picture of the line between generation and imitation — where the model produces something new, and where it falls back on the patterns it was trained on. That distinction is what makes a generative tool feel like a writer instead of a template.",
    purpose:
      "Creative experimentation with LLMs — using the model as a writing partner rather than a text expander.",
  },
  {
    number: "09",
    slug: "social-media-management",
    image: "/projects/social-media.png",
    title: "Social Media Management",
    category: "SOCIAL MEDIA",
    tags: ["social"],
    icon: TrendingUp,
    tagline: "Brand growth treated as a system, not a series of posts.",
    shortDescription:
      "A full social media service run through AJ Technologies — strategy, content, scheduling and analytics handled as one continuous operation.",
    overview:
      "Social Media Management is a service line run through AJ Technologies — not a one-off content package, but an ongoing operation. It covers strategy, content creation, day-to-day account management and analytics, run as one continuous loop. What gets posted is decided from data, what the data shows feeds back into the next cycle, and the brand's presence builds steadily instead of in bursts.",
    problem:
      "Brands post inconsistently. Content gets made in bursts, strategies shift without reason, and analytics stay untouched. Growth stalls quietly.",
    solution:
      "We manage the whole loop — build a strategy from real audience data, produce content on a rhythm, handle day-to-day account operations and read the numbers back into the next cycle.",
    role: "We run the entire social operation — content strategy informed by audience data, ongoing content creation, day-to-day account and community management, and analytics reporting that drives the next cycle of decisions. Multi-platform optimization is built into the process from the start.",
    deliverables: [
      "Content strategy and planning",
      "Ongoing content creation",
      "Account and community management",
      "Multi-platform optimization",
      "Analytics and monthly reporting",
    ],
    features: [
      "Content strategy",
      "Ongoing content creation",
      "Account and community management",
      "Analytics and reporting",
      "Multi-platform optimization",
    ],
    tech: ["Strategy", "Content Design", "Analytics", "Community Management"],
    outcome:
      "Across campaigns and months of continuous operation, this service has produced measurable engagement, follower and reach growth — driven by a consistent rhythm of content and a feedback loop that treats analytics as input, not as a report at the end.",
    purpose:
      "A service line that treats brand growth as an operating system — not a series of one-off posts.",
  },
  {
    number: "10",
    slug: "graphics-design",
    image: "/projects/graphics-design.png",
    title: "Graphics Design",
    category: "CREATIVE DESIGN",
    tags: ["graphics"],
    icon: LayoutGrid,
    tagline: "One visual system, applied everywhere.",
    shortDescription:
      "A graphics design service covering brand identity, social visuals, print collateral and product interfaces — all built on one consistent visual system.",
    overview:
      "Graphics Design is a creative service covering the full range of brand surfaces — identity, social media graphics, print collateral and product interfaces. The core principle is that design is built as a system, not as a collection of assets. Logo, typography, color and layout are defined once, then applied consistently across every surface the brand appears on.",
    problem:
      "Brands end up with a patchwork of visuals — a logo here, a template there, print material that doesn't quite match the site. Nothing feels like one brand.",
    solution:
      "We start with the system, not the assets. Logo, typography, color and layout are defined once, then applied across every surface — social, print, and product screens alike.",
    role: "We define the brand system — logo, typography, color and layout — then design every surface the brand touches: social graphics, print collateral, marketing materials and product interfaces. Everything is delivered production-ready, organized and structured for ongoing use.",
    deliverables: [
      "Logo and brand identity",
      "Social media graphics and templates",
      "Marketing and print collateral",
      "UI and product visual design",
      "Multi-format delivery and handoff",
    ],
    features: [
      "Logo and brand identity",
      "Social media graphics",
      "Marketing collateral",
      "UI and visual design",
      "Multi-format delivery",
    ],
    tech: [
      "Brand Systems",
      "Graphic Design",
      "Print & Digital",
      "Visual Identity",
    ],
    outcome:
      "The result is a brand that holds together — where a social post, a printed brochure and a product screen all read as coming from the same place. Consistency isn't enforced asset by asset; it comes from designing the system once and applying it everywhere.",
    purpose:
      "Design work that holds together as a system — not a stack of unrelated files.",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return { prev: null, next: null };
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  return { prev, next };
}