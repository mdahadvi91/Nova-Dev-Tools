import express from 'express';
import path from 'path';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: '10mb' }));

// Lazy initialization of Gemini client
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return null;
  if (!aiClient) {
    aiClient = new GoogleGenAI({ apiKey });
  }
  return aiClient;
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    hasGemini: !!process.env.GEMINI_API_KEY,
    timestamp: new Date().toISOString(),
  });
});

// AI Career: Bullet Point Improver
app.post('/api/ai/bullet-improve', async (req, res) => {
  try {
    const { bullet, role, targetIndustry } = req.body;
    if (!bullet || typeof bullet !== 'string') {
      return res.status(400).json({ error: 'Bullet text is required.' });
    }

    const ai = getGeminiClient();
    if (!ai) {
      // High-quality local algorithmic fallback if no API key is provided
      const actionVerbs = ['Spearheaded', 'Orchestrated', 'Architected', 'Streamlined', 'Accelerated', 'Delivered'];
      const verb = actionVerbs[Math.floor(Math.random() * actionVerbs.length)];
      const cleaned = bullet.replace(/^(I |We |Responsible for |Helped with )/i, '').trim();
      const enhanced = `${verb} ${cleaned.charAt(0).toLowerCase() + cleaned.slice(1)}, improving workflow efficiency and operational output.`;
      return res.json({
        enhancedBullets: [
          enhanced,
          `Implemented key strategies to ${cleaned.charAt(0).toLowerCase() + cleaned.slice(1)}, driving measurable team impact.`,
          `Led initiative to ${cleaned.charAt(0).toLowerCase() + cleaned.slice(1)}, ensuring high-standard delivery.`,
        ],
        source: 'local-engine',
      });
    }

    const prompt = `You are an elite career strategist and ATS optimization expert. Improve the following resume bullet point for a ${role || 'professional'} in ${targetIndustry || 'their industry'}. Provide 3 stronger, quantified, action-verb-led versions that sound natural and high-impact. Do NOT invent crazy metrics, keep them realistic and adaptable.
Input bullet: "${bullet}"
Respond in JSON format: {"enhancedBullets": ["bullet 1", "bullet 2", "bullet 3"]}`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
      },
    });

    const text = response.text;
    if (!text) {
      throw new Error('Empty response from AI model');
    }
    const parsed = JSON.parse(text);
    return res.json({
      enhancedBullets: parsed.enhancedBullets || [parsed.enhanced || bullet],
      source: 'gemini-ai',
    });
  } catch (err: any) {
    console.error('Error in /api/ai/bullet-improve:', err);
    return res.status(500).json({
      error: 'Failed to enhance bullet point. Please try again.',
      details: err.message,
    });
  }
});

// AI Career: Cover Letter Generator
app.post('/api/ai/cover-letter', async (req, res) => {
  try {
    const { jobTitle, company, jobDescription, userExperience, skills, achievements, fullName } = req.body;
    if (!jobTitle || !company) {
      return res.status(400).json({ error: 'Job title and Company are required.' });
    }

    const ai = getGeminiClient();
    if (!ai) {
      // Structured local fallback
      const dateStr = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
      const draft = `${fullName || 'Applicant'}\n${dateStr}\n\nHiring Team\n${company}\n\nDear Hiring Team,\n\nI am writing to express my enthusiastic interest in the ${jobTitle} position at ${company}. With my background in ${skills || 'relevant domain skills'} and proven experience delivering results, I am confident in my ability to make an immediate, meaningful impact on your team.\n\nThroughout my career, I have dedicated myself to high-quality execution: ${userExperience || 'bringing dedicated problem-solving and rigorous collaboration to every project'}. In particular, ${achievements || 'I pride myself on driving efficiency and exceeding project milestones'}.\n\nWhat excites me most about ${company} is your commitment to excellence and innovation. My technical and collaborative foundation in ${skills || 'this domain'} aligns closely with the goals of this position.\n\nI welcome the opportunity to discuss how my skill set and passion can support ${company}'s upcoming initiatives. Thank you for your time and consideration.\n\nSincerely,\n${fullName || 'Applicant'}`;
      return res.json({ letter: draft, source: 'local-engine' });
    }

    const prompt = `Write a professional, compelling, and human-sounding cover letter.
Candidate Name: ${fullName || 'Candidate'}
Target Role: ${jobTitle}
Target Company: ${company}
Job Requirements/Description: ${jobDescription || 'Standard industry requirements'}
Candidate Experience: ${userExperience || 'Experienced professional'}
Candidate Skills: ${skills || 'Relevant skills'}
Key Achievements: ${achievements || 'Proven track record of high performance'}

Tone: Confident, professional, humble, compelling. Avoid generic corporate clichés like "I am thrilled to apply" or "supercharge". Ensure proper paragraph structure (Salutation, Hook & Alignment, Relevant Value Add, Company Fit, Strong Call to Action, Signoff). Return clean markdown.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
    });

    return res.json({ letter: response.text, source: 'gemini-ai' });
  } catch (err: any) {
    console.error('Error in /api/ai/cover-letter:', err);
    return res.status(500).json({
      error: 'Failed to generate cover letter.',
      details: err.message,
    });
  }
});

// AI Career: Resume Analysis
app.post('/api/ai/analyze-resume', async (req, res) => {
  try {
    const { resumeText, targetJob } = req.body;
    if (!resumeText || typeof resumeText !== 'string') {
      return res.status(400).json({ error: 'Resume text is required.' });
    }

    const ai = getGeminiClient();
    if (!ai) {
      // Local heuristic ATS analysis
      const wordCount = resumeText.trim().split(/\s+/).length;
      const hasEmail = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/.test(resumeText);
      const hasPhone = /(\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/.test(resumeText);
      const hasExperience = /experience|work history|employment/i.test(resumeText);
      const hasEducation = /education|university|college|bachelor|master|degree/i.test(resumeText);
      const hasSkills = /skills|competencies|technologies/i.test(resumeText);
      const hasSummary = /summary|profile|about/i.test(resumeText);

      let score = 65;
      if (hasEmail) score += 5;
      if (hasPhone) score += 5;
      if (hasExperience) score += 10;
      if (hasEducation) score += 5;
      if (hasSkills) score += 5;
      if (wordCount >= 250 && wordCount <= 800) score += 5;

      return res.json({
        score: Math.min(score, 94),
        strengths: [
          hasExperience ? 'Clearly identified Work Experience section.' : 'Readable text structure.',
          hasSkills ? 'Dedicated Skills listing detected for recruiter scanning.' : 'Contains foundational details.',
          wordCount > 200 ? 'Healthy word volume appropriate for single-page ATS review.' : 'Concise content.',
        ],
        improvements: [
          !hasSummary ? 'Consider adding a 2-3 line Professional Summary at the top.' : 'Ensure summary emphasizes your unique value proposition.',
          'Incorporate more quantifiable metrics (percentages, dollar amounts, time saved).',
          'Use strong action verbs (Architected, Spearheaded, Reduced) at the start of each bullet point.',
        ],
        atsReadability: 'Good. Standard single-column text flow is highly parseable by modern ATS systems.',
        source: 'local-heuristic',
      });
    }

    const prompt = `You are a certified ATS resume reviewer and executive recruiter. Analyze this resume text${targetJob ? ` for the target role "${targetJob}"` : ''}.
Resume Content:
"""
${resumeText.slice(0, 4000)}
"""

Provide an honest ATS-friendly evaluation. Do NOT guarantee 100% ATS pass.
Return JSON with this exact schema:
{
  "score": number (0-100),
  "strengths": string[],
  "improvements": string[],
  "atsReadability": string,
  "matchedKeywords": string[],
  "missingKeywords": string[]
}`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
      },
    });

    const parsed = JSON.parse(response.text || '{}');
    return res.json({ ...parsed, source: 'gemini-ai' });
  } catch (err: any) {
    console.error('Error in /api/ai/analyze-resume:', err);
    return res.status(500).json({
      error: 'Failed to analyze resume.',
      details: err.message,
    });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Nova Tools server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
