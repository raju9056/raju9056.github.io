export interface Skill {
  name: string;
  level: number;
  years?: number;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Experience {
  company: string;
  location: string;
  role: string;
  period: string;
  current: boolean;
  highlights: string[];
  technologies: string[];
}

export interface Project {
  name: string;
  description: string;
  github?: string;
  website?: string;
  tags: string[];
  featured: boolean;
}

export interface Education {
  institution: string;
  location: string;
  degree: string;
  period: string;
}

export interface Publication {
  title: string;
  url: string;
  type: string;
}

export interface Award {
  company: string;
  description: string;
}

export interface Certification {
  name: string;
}

export interface Profile {
  personal: {
    name: string;
    title: string;
    location: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    availableForWork: boolean;
  };
  summary: string;
  skillCategories: SkillCategory[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
  publications: Publication[];
  awards: Award[];
  certifications: Certification[];
}

export const profile: Profile = {
  personal: {
    name: "Raju Yallappa",
    title: "Senior Software Engineer | AI/ML Engineer | Data & ML Systems",
    location: "USA (Open to Relocation)",
    email: "rajuyallappa9056@gmail.com",
    phone: "316259xxxx",
    linkedin: "https://www.linkedin.com/in/raju-yallappa",
    github: "https://github.com/raju9056",
    availableForWork: true,
  },

  summary: `Senior Software Engineer | AI/ML Engineer | Data & ML Systems with 8+ years building production-grade machine learning systems, real-time and batch data pipelines, and operational decisioning platforms. I specialize in AI/ML lifecycle engineering, feature engineering, data quality, model deployment, monitoring, and cloud-native analytics on GCP, Azure, and AWS. My work emphasizes fraud and risk-oriented intelligence, scalable ML operations, and trusted decision support for business stakeholders.`,

  skillCategories: [
    {
      category: "Languages",
      items: ["Python", "SQL", "Java", "Scala (familiar)", "JavaScript (ES6)"],
    },
    {
      category: "Cloud & Data Platforms",
      items: [
        "GCP (BigQuery, Pub/Sub, Dataflow, Vertex AI)",
        "Azure (ADF, Databricks, EventHub, ADLS, Functions, Blob Storage, Power BI)",
        "AWS (S3, Lambda, ECS, Redshift)",
      ],
    },
    {
      category: "Data Engineering & Analytics",
      items: [
        "Streaming & batch pipeline design",
        "Feature engineering / reusable feature stores",
        "Large-scale data preparation",
        "Schema governance, deduplication, lineage, validation",
        "Anomaly detection & risk scoring",
      ],
    },
    {
      category: "AI & Machine Learning",
      items: [
        "ML model deployment & monitoring",
        "Risk scoring / fraud detection",
        "MLOps and CI/CD for ML lifecycles",
        "Graph analytics, entity linking, anomaly detection",
      ],
    },
    {
      category: "Tools & Frameworks",
      items: [
        "Spark",
        "Apache Beam",
        "TensorFlow",
        "PyTorch",
        "FastAPI",
        "Flask",
        "Kubeflow",
        "Terraform",
        "GitHub Actions",
        "Jenkins",
      ],
    },
    {
      category: "DevOps & Observability",
      items: ["Kubernetes", "Docker", "Prometheus", "Grafana", "CloudWatch"],
    },
    {
      category: "BI & Visualization",
      items: ["Power BI", "Tableau", "Grafana"],
    },
    {
      category: "Security & Governance",
      items: [
        "Audit & compliance support",
        "Model governance",
        "IAM",
        "RBAC",
        "KMS",
      ],
    },
    {
      category: "Methodologies",
      items: ["Agile", "DevOps", "CI/CD", "Test-Driven Development"],
    },
  ],

  experience: [
    {
      company: "AbbVie",
      location: "San Francisco, CA, USA",
      role: "Full Stack Developer",
      period: "06/2022 – present",
      current: true,
      highlights: [
        "Designed production-grade ML and analytics pipelines combining streaming events and batch processing with Azure Data Factory, Databricks, Kafka, and Python.",
        "Developed reusable feature engineering pipelines and operational feature definitions for online/offline risk scoring and decisioning.",
        "Integrated model outputs into low-latency decision services and deployed model serving components in Kubernetes for real-time business workflows.",
        "Improved data quality and reliability through schema governance, deduplication, lineage tracking, and automated validation dashboards.",
        "Implemented MLOps automation for model training, deployment, versioning, and infrastructure provisioning using Azure DevOps.",
        "Collaborated with product, risk, and governance stakeholders to translate business rules into model improvements and audit-ready controls.",
        "Mentored engineers on scalable data engineering, feature store design, and cloud ML best practices.",
      ],
      technologies: [
        "Azure Data Factory",
        "Databricks",
        "Python",
        "Kafka",
        "EventHub",
        "AWS Lambda",
        "ADLS",
        "Kubernetes",
        "Grafana",
        "Prometheus",
        "Azure DevOps",
      ],
    },
    {
      company: "Wichita State University",
      location: "Wichita, KS, USA",
      role: "Graduate Research Assistant",
      period: "08/2021 – 05/2022",
      current: false,
      highlights: [
        "Engineered distributed data processing pipelines on Azure HPC clusters for AI-based data extraction, improving GPU utilization by 20%.",
        "Implemented REST APIs and Python-based microservices for serving ML-based analytics via Flask and FastAPI.",
        "Managed structured and unstructured datasets in PostgreSQL and DynamoDB, supporting 1M+ curated records.",
        "Automated dataset validation pipelines, enhancing curation efficiency and reducing manual processing by 40%.",
      ],
      technologies: [
        "Azure HPC",
        "Python",
        "Flask",
        "FastAPI",
        "PostgreSQL",
        "DynamoDB",
      ],
    },
    {
      company: "Rakuten",
      location: "Bangalore, India",
      role: "Associate Software Developer",
      period: "01/2020 – 01/2021",
      current: false,
      highlights: [
        "Developed real-time data streaming solutions using Kafka, Flask, and AWS Lambda for payment analytics platforms.",
        "Automated ETL workflows for high-volume transactional datasets using Python, SQL, and AWS Glue/S3, increasing ingestion reliability by 40% and reducing manual pipeline maintenance by 60%.",
        "Containerized applications with Docker and orchestrated with Kubernetes, reducing deployment time by 50%.",
        "Improved system observability and proactive alerting through custom Grafana dashboards and telemetry integration.",
      ],
      technologies: [
        "Kafka",
        "Flask",
        "AWS Lambda",
        "Python",
        "SQL",
        "AWS Glue",
        "S3",
        "Docker",
        "Kubernetes",
        "Grafana",
      ],
    },
    {
      company: "Bank of America",
      location: "Bengaluru, Karnataka, India",
      role: "Software Engineer Intern",
      period: "12/2018 – 07/2019",
      current: false,
      highlights: [
        "Contributed to on-site engineering efforts for banking workflows and internal software systems during an eight-month internship.",
        "Supported data validation, process automation, and collaboration with cross-functional teams to improve application reliability and compliance readiness.",
        "Gained practical exposure to enterprise banking operations and client authentication workflows in a regulated financial environment.",
      ],
      technologies: [
        "Java",
        "SQL",
        "Python",
        "Spring Boot",
        "Jenkins",
      ],
    },
  ],

  projects: [
    {
      name: "AI-Powered Data Analyst Agent",
      description:
        "Built an intelligent agent that connects to live databases and supports uploading local files. It interprets user questions, generates SQL queries, and returns real-time insights with visualizations.",
      github:
        "https://github.com/raju9056/data-analysis/blob/main/data-analyst.py",
      tags: ["Python", "PostgreSQL", "Pandas", "LLM"],
      featured: true,
    },
    {
      name: "LLM Fine-Tuning for Ecommerce Data Extraction",
      description:
        "Used 4-bit quantization and Unsloth for memory-efficient training and deployed in GGUF format for lightweight inference.",
      github: "https://github.com/raju9056/fine-tuning",
      tags: ["Python", "HuggingFace", "Unsloth", "LoRA"],
      featured: true,
    },
    {
      name: "CyberSenseAI",
      description:
        "Built a web security analysis tool that scans websites, captures client-side data (cookies, localStorage, JS errors), and uses GPT to generate AI-driven risk summaries and security scores.",
      website: "https://d4nxx94in9m6e.cloudfront.net/",
      tags: ["ReactJS", "OpenAI", "Puppeteer", "NodeJS"],
      featured: true,
    },
    {
      name: "COVID-19 Tracker",
      description:
        "Created an interactive dashboard to monitor global COVID-19 trends using real-time API data, user authentication, and Firestore for dynamic storage.",
      website: "https://covid-19-tracker-9056.web.app/",
      tags: ["ReactJS", "Firebase", "SQL", "HTML5", "CSS3"],
      featured: true,
    },
    {
      name: "Twitter Research Tools",
      description:
        "Developed tools to analyze Twitter data and detect trends using supervised ML models, with visualizations and accuracy comparisons between classifiers.",
      github: "https://github.com/raju9056/twitter-research-tools",
      tags: ["Python", "Matplotlib", "SVM", "Pandas", "KNeighbors Classifier"],
      featured: true,
    },
  ],

  education: [
    {
      institution: "Wichita State University",
      location: "Wichita, KS, USA",
      degree: "Master's in Computer Science",
      period: "01/2021 – 05/2022",
    },
    {
      institution: "Reva University",
      location: "Bangalore, KA, IN",
      degree: "Bachelor of Engineering in Computer Science & Engineering",
      period: "08/2016 – 05/2020",
    },
  ],

  publications: [
    {
      title: "Building Scalable RAG Knowledge Base",
      url: "https://medium.com/@rajuyallappa9056/why-your-rag-sucks-fixing-broken-retrieval-with-hybrid-search-reranking-contextual-chunking-336d47a8e7c0",
      type: "article",
    },
    {
      title: "Want an AI Data Analyst on Your Team? Here's How to Build One",
      url: "https://medium.com/@rajuyallappa9056/from-question-to-insight-automating-sql-python-analysis-with-llms-c8326c0e2f3d",
      type: "article",
    },
    {
      title: "Opinion mining of twitter data using machine learning",
      url: "https://web.p.ebscohost.com/abstract?site=ehost&scope=site&jrnl=09765697&AN=143484189",
      type: "paper",
    },
  ],

  awards: [
    {
      company: "Rakuten India",
      description: "SPOT award for excellence",
    },
    {
      company: "AbbVie",
      description:
        "Received 6 corporate awards for exceptional performance, teamwork and excellence from 2023-2025",
    },
  ],

  certifications: [
    { name: "AWS Cloud Practitioner certification" },
    { name: "Generative AI: Introduction to LLMs" },
    { name: "Modern React with Redux certification" },
    { name: "Learning Amazon Web Services Lambda" },
    { name: "Learning Azure DevOps" },
    { name: "React Hooks" },
  ],
};
