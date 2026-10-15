export const PROFILE = {
  name: "Kshitiz Bhardwaj",
  role: "Data Analyst & Product Engineer",
  summary: "Computer Science graduate specializing in operational data validation, KPI monitoring, and AI-driven product intelligence. Expert in transforming complex datasets into actionable business insights using SQL, Python, and Power BI, with a strong foundation in Full-Stack development and on-chain data analysis.",
  email: "kshitizb07@gmail.com",
  location: "Indore, India",
  image: "/profile.png",
  links: {
    github: "https://github.com/Kshitiz-tech21",
    linkedin: "https://www.linkedin.com/in/kshitiz-bhardwaj-55286a270/",
  },
};

export const SKILLS = [
  { 
    category: "Data Analysis", 
    items: [
      { name: "SQL", level: 95 },
      { name: "PostgreSQL", level: 90 },
      { name: "Python", level: 90 },
      { name: "Pandas", level: 85 },
      { name: "NumPy", level: 80 },
      { name: "Excel", level: 95 },
      { name: "EDA", level: 88 },
    ] 
  },
  { 
    category: "Business Intelligence", 
    items: [
      { name: "Power BI", level: 92 },
      { name: "DAX", level: 85 },
      { name: "Power Query", level: 80 },
      { name: "Data Modeling", level: 88 },
      { name: "Tableau", level: 75 },
      { name: "Azure", level: 70 },
    ] 
  },
  { 
    category: "Analytics", 
    items: [
      { name: "Data Validation", level: 90 },
      { name: "KPI Reporting", level: 95 },
      { name: "Trend Analysis", level: 85 },
      { name: "Funnel Analysis", level: 80 },
      { name: "Root-Cause Analysis", level: 88 },
      { name: "RFM Segmentation", level: 82 },
    ] 
  },
  { 
    category: "Engineering", 
    items: [
      { name: "FastAPI", level: 80 },
      { name: "Node.js", level: 75 },
      { name: "React", level: 85 },
      { name: "WebSockets", level: 80 },
      { name: "LangGraph", level: 70 },
      { name: "Scala", level: 65 },
      { name: "TypeScript", level: 75 },
    ] 
  },
];

export const EXPERIENCE = [
  {
    company: "Dyno Research Org",
    role: "Associate Data Analyst Intern",
    period: "Jan 2025 – Aug 2025",
    location: "Indore, India",
    highlights: [
      "Managed and validated 200+ structured records, centralizing operational info to reduce administrative overhead.",
      "Engineered a real-time monitoring workflow to accelerate operational information retrieval.",
      "Analyzed operational KPIs and exceptions to identify abnormal patterns; documented data flows for onboarding.",
    ],
  },
  {
    company: "Auspify Technologies",
    role: "Data Analysis Intern",
    period: "2026",
    location: "Remote",
    highlights: [
      "Processed and analyzed datasets of 1.5L+ records using Python and Pandas to uncover hidden operational trends.",
      "Reduced data preprocessing time by 30% by implementing optimized cleaning pipelines for real-world datasets.",
      "Delivered high-impact visualization reports that translated complex data into actionable business strategies.",
    ],
  },
  {
    company: "47Billion",
    role: "Technical Intern – Data & Performance Analysis",
    period: "Nov 2023 – Apr 2024",
    location: "Remote",
    highlights: [
      "Evaluated performance across 5+ application pages and investigated 15+ critical bottlenecks to optimize speed.",
      "Collaborated with cross-functional dev and design teams to translate functional requirements into validation activities.",
    ],
  },
  {
    company: "Neolen",
    role: "Data Analytics Intern",
    period: "Feb 2022 – Apr 2022",
    location: "Remote",
    highlights: [
      "Processed large-scale initial datasets to conduct exploratory data analysis (EDA), providing data-driven insights for IT consulting.",
      "Built initial reporting templates that improved the efficiency of client data reviews.",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Executive Business Insights",
    description: "Advanced business analyst dashboard focusing on high-level executive KPIs and strategic growth metrics.",
    tech: ["Power BI", "SQL", "Excel"],
    highlights: [
      "Designed an executive-level dashboard for real-time tracking of revenue growth and operational efficiency.",
      "Integrated multiple data streams to provide a single source of truth for C-suite decision making.",
    ],
    link: "#",
  },
  {
    title: "Audience Segmentation Analysis",
    description: "Deep-dive analysis into user demographics and behavioral patterns to optimize targeting.",
    tech: ["Python", "Pandas", "Tableau"],
    highlights: [
      "Performed cluster analysis to segment audience into 5 distinct personas based on engagement and value.",
      "Identified high-churn risk segments and proposed targeted retention strategies.",
    ],
    link: "#",
  },
  {
    title: "ProductLens AI",
    description: "An AI-powered product intelligence platform for KPI anomaly detection and root-cause analysis.",
    tech: ["Python", "FastAPI", "PostgreSQL", "React", "LangGraph"],
    highlights: [
      "Implemented automated KPI anomaly detection and root-cause analysis pipelines.",
      "Integrated RICE/ICE feature prioritization framework to optimize product roadmaps.",
      "Built with a modern AI agent architecture using LangGraph for complex analytical reasoning.",
    ],
    link: "https://github.com/kshitizb07/ProductLens-AI",
  },
  {
    title: "RailPredict AI",
    description: "Predictive analytics platform for railway exam pattern analysis and performance forecasting.",
    tech: ["Python", "FastAPI", "Alembic", "PostgreSQL"],
    highlights: [
      "Developed an automated pipeline for ingesting and parsing railway PYQs (Previous Year Questions).",
      "Built a prediction engine to identify high-probability topics based on historical data.",
      "Designed a scalable architecture with workers for ingestion and analytical processing.",
    ],
    link: "#",
  },
  {
    title: "RailPrep Research",
    description: "AI-driven research agent for railway exam preparation and material synthesis.",
    tech: ["Python", "FastAPI", "Next.js", "AI Agents"],
    highlights: [
      "Implemented an agentic workflow to research and synthesize exam preparation materials.",
      "Built a custom toolset for the AI agent to fetch and process specific railway-domain data.",
    ],
    link: "#",
  },
  {
    title: "Wash Trading Detector",
    description: "On-chain anomaly detection system for DEX platforms using Solana trade data.",
    tech: ["Python", "Bitquery", "Solana API"],
    highlights: [
      "Analyzed large-scale on-chain trade data to identify potential wash trading behaviors.",
      "Developed a rule-based detection engine to flag suspicious wallet clusters and circular trades.",
    ],
    link: "https://github.com/kshitizb07/wash-trading-detector",
  },
  {
    title: "Corporate Analytics Platform",
    description: "Real-time KPI monitoring system with automated anomaly flagging.",
    tech: ["PostgreSQL", "Node.js", "React", "WebSockets"],
    highlights: [
      "Developed a real-time dashboard using WebSockets for continuous operational data streams.",
      "Implemented rolling-window Z-score anomaly detection to flag metric deviations instantly.",
      "Built deep-dive funnel analysis tools to identify user drop-off points in business processes.",
    ],
    link: "#",
  },
  {
    title: "Websocket Streams Latency Benchmark",
    description: "Performance framework comparing websocket stream latency between major data providers.",
    tech: ["Node.js", "WebSockets", "JavaScript"],
    highlights: [
      "Created a reproducible benchmark tool to compare latency between Bitquery and Birdeye.",
      "Analyzed data stream arrival times to provide empirical performance metrics for traders.",
    ],
    link: "https://github.com/kshitizb07/streams-bench-test",
  },
  {
    title: "Ecommerce Power BI Intelligence",
    description: "Advanced revenue reporting and customer segmentation dashboard for e-commerce growth.",
    tech: ["Power BI", "DAX", "Python"],
    highlights: [
      "Architected a star-schema data model for 25,000+ transactions for optimized query performance.",
      "Applied RFM (Recency, Frequency, Monetary) segmentation to categorize customers into 8 value segments.",
      "Developed complex DAX measures for YoY growth, target variance, and Customer Lifetime Value (CLV).",
    ],
    link: "#",
  },
  {
    title: "Netflix Market Analysis",
    description: "Analytical report on global content release patterns and market penetration.",
    tech: ["Scala", "Python", "SQL", "Azure"],
    highlights: [
      "Built a business intelligence pipeline on Azure to analyze Netflix release data.",
      "Utilized Scala and SQL for large-scale data processing and trend extraction.",
    ],
    link: "#",
  },
];

export const EDUCATION = [
  {
    degree: "Executive MBA (EMBA) – Generative AI & Product Management",
    institution: "Indian Institute of Technology Patna",
    period: "Expected 2028",
    type: "Full-time Hybrid Program",
  },
  {
    degree: "B.Tech – Computer Science & Engineering",
    institution: "Indore Institute of Science & Technology",
    period: "Graduated Jun 2026",
    type: "Full-time",
  },
];
