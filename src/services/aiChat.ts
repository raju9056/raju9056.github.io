// AI Chat Service - Connects to Raju's backend API
// Configure the API URL in .env file as VITE_AI_API_URL

import { profile } from "../data/profile";

const API_URL =
  import.meta.env.VITE_AI_API_URL ||
  "https://he6dj36bkh.execute-api.us-east-2.amazonaws.com/prod";

export interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
  timestamp: Date;
}

export interface ChatResponse {
  message: string;
  success: boolean;
  error?: string;
}

/**
 * Generate comprehensive system context about Raju from profile data
 */
function generateSystemContext(): string {
  const { personal, summary, skillCategories, experience, projects, education, publications, awards, certifications } = profile;
  
  return `You are an AI assistant for Raju Yallappa's portfolio. Answer questions about Raju professionally and accurately based on the following information:

PERSONAL INFORMATION:
- Name: ${personal.name}
- Location: ${personal.location}
- Email: ${personal.email}
- LinkedIn: ${personal.linkedin}
- GitHub: ${personal.github}
- Available for Work: ${personal.availableForWork ? "Yes" : "No"}

PROFESSIONAL SUMMARY:
${summary}

SKILLS:
${skillCategories.map(cat => `${cat.category}: ${cat.items.join(", ")}`).join("\n")}

WORK EXPERIENCE:
${experience.map(exp => `
${exp.role} at ${exp.company} (${exp.location})
Period: ${exp.period}${exp.current ? " - Current" : ""}
Key Highlights:
${exp.highlights.map(h => `- ${h}`).join("\n")}
Technologies: ${exp.technologies.join(", ")}
`).join("\n")}

PROJECTS:
${projects.map(proj => `
${proj.name}${proj.featured ? " (Featured)" : ""}
${proj.description}
${proj.github ? `GitHub: ${proj.github}` : ""}
${proj.website ? `Website: ${proj.website}` : ""}
Technologies: ${proj.tags.join(", ")}
`).join("\n")}

EDUCATION:
${education.map(edu => `
${edu.degree}
${edu.institution}, ${edu.location}
Period: ${edu.period}
`).join("\n")}

PUBLICATIONS:
${publications.map(pub => `- ${pub.title} (${pub.type}): ${pub.url}`).join("\n")}

AWARDS:
${awards.map(award => `- ${award.company}: ${award.description}`).join("\n")}

CERTIFICATIONS:
${certifications.map(cert => `- ${cert.name}`).join("\n")}

When answering questions:
1. Be professional and concise
2. Use specific details from the information above
3. If asked about something not covered, politely indicate that information isn't available
4. Highlight relevant achievements and technical expertise
5. Be enthusiastic about Raju's work and capabilities`;
}

/**
 * Send a message to Raju's AI backend and get a response
 */
export async function sendMessage(
  message: string,
  conversationHistory: ChatMessage[] = []
): Promise<ChatResponse> {
  try {
    // Build messages array with system context
    const messages = [
      { role: "system", content: generateSystemContext() },
      ...conversationHistory.map((msg) => ({
        role: msg.role,
        content: msg.content,
      })),
      { role: "user", content: message },
    ];

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messages }),
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();

    // The API Gateway with AWS_PROXY returns { response: "..." } directly
    const messageContent = data.response || data.message || data.answer || "";

    return {
      message: messageContent,
      success: true,
    };
  } catch (error) {
    console.error("AI Chat API Error:", error);

    // Return a fallback response when API is unavailable
    return {
      message: getFallbackResponse(message),
      success: false,
      error: error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
}

/**
 * Fallback responses when the API is unavailable
 */
export function getFallbackResponse(question: string): string {
  const lowerQuestion = question.toLowerCase();
  const { personal, experience, projects } = profile;

  // Experience questions
  if (
    lowerQuestion.includes("experience") ||
    lowerQuestion.includes("years") ||
    lowerQuestion.includes("work")
  ) {
    return `Raju has 6+ years of experience as a Data & Cloud Engineer. Currently working as a Full Stack Developer at AbbVie (San Francisco, CA) since June 2022. Previously worked at Wichita State University as a Graduate Research Assistant and at Rakuten (Bangalore, India) as an Associate Software Developer.`;
  }

  // Skills questions
  if (
    lowerQuestion.includes("skill") ||
    lowerQuestion.includes("language") ||
    lowerQuestion.includes("tech")
  ) {
    return `Raju's core skills include Python, SQL, Java, JavaScript, and Scala. He specializes in Azure (Data Factory, Databricks, EventHub, ADLS), AWS (S3, Lambda, ECS, Redshift), ETL/ELT pipelines, Data Warehousing, Spark, Kafka, and cloud-native architectures. Also experienced with Docker, Kubernetes, and CI/CD tools.`;
  }

  // Cloud/Data questions
  if (
    lowerQuestion.includes("cloud") ||
    lowerQuestion.includes("azure") ||
    lowerQuestion.includes("aws") ||
    lowerQuestion.includes("data")
  ) {
    return `Raju is an expert in cloud and data engineering with strong expertise in Azure (Data Factory, Databricks, EventHub, ADLS, Functions) and AWS (S3, Lambda, ECS, Redshift). He has built scalable ETL/ELT pipelines, data lakes, and real-time streaming systems using Kafka, Spark, and modern data platforms like Snowflake.`;
  }

  // AI/ML questions
  if (
    lowerQuestion.includes("ai") ||
    lowerQuestion.includes("machine learning") ||
    lowerQuestion.includes("ml") ||
    lowerQuestion.includes("llm")
  ) {
    return `Raju has worked on several AI/ML projects including an AI-Powered Data Analyst Agent that connects to databases and generates SQL queries using LLMs, LLM Fine-Tuning for Ecommerce Data Extraction using 4-bit quantization, and CyberSenseAI for web security analysis with GPT. He also writes technical articles about RAG and AI on Medium!`;
  }

  // Education questions
  if (
    lowerQuestion.includes("education") ||
    lowerQuestion.includes("degree") ||
    lowerQuestion.includes("university")
  ) {
    return `Raju has a Master's in Computer Science from Wichita State University (2021-2022) and a Bachelor of Engineering in Computer Science & Engineering from Reva University, Bangalore, India (2016-2020).`;
  }

  // Contact questions
  if (
    lowerQuestion.includes("contact") ||
    lowerQuestion.includes("email") ||
    lowerQuestion.includes("hire")
  ) {
    return `You can reach Raju at ${personal.email} or connect on LinkedIn at ${personal.linkedin}. He is currently ${personal.availableForWork ? "open to new opportunities" : "not actively looking"}!`;
  }

  // Projects questions
  if (
    lowerQuestion.includes("project") ||
    lowerQuestion.includes("portfolio") ||
    lowerQuestion.includes("built")
  ) {
    const featuredProjects = projects.filter(p => p.featured).map(p => p.name).join(", ");
    return `Raju's featured projects include: ${featuredProjects}. These showcase his expertise in AI/LLMs, data engineering, web development, and machine learning. Check out his GitHub at ${personal.github}!`;
  }

  // Current role questions
  if (
    lowerQuestion.includes("current") ||
    lowerQuestion.includes("now") ||
    lowerQuestion.includes("abbvie")
  ) {
    const currentRole = experience.find(exp => exp.current);
    if (currentRole) {
      return `Raju is currently a ${currentRole.role} at ${currentRole.company} in ${currentRole.location}. He designs and implements data pipelines using Azure Data Factory, Databricks, and Python, builds streaming workflows with Kafka and EventHub, and develops monitoring dashboards with Grafana and Prometheus.`;
    }
  }

  // Greeting
  if (
    lowerQuestion.includes("hello") ||
    lowerQuestion.includes("hi") ||
    lowerQuestion.includes("hey")
  ) {
    return `Hello! I'm ${personal.name}'s AI assistant. I can tell you about his experience, skills, projects, and more. What would you like to know?`;
  }

  // Default response
  return `I'm ${personal.name}'s personal assistant! I can answer questions about his experience, skills, projects, education, and more. The backend API seems to be unavailable right now, but feel free to ask me anything and I'll do my best to help!`;
}
