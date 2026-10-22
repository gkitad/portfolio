// All the text on the site lives here. Edit this file to update the page.

export const profile = {
  name: "Anthony Jaimez",
  role: "IT Support Specialist building with AI",
  location: "Round Rock, TX",
  availability: "Open to remote roles in AI and IT",
  email: "anthony.jaimez.it@gmail.com",
  linkedin: "https://www.linkedin.com/in/anthonyjaimez",
  github: "https://github.com/gkitad",
  summary: [
    "I've spent 5+ years on enterprise help desks, keeping people and their machines working — from a supermarket chain in Peru to school districts in Texas to a semiconductor fab in Austin.",
    "Now I build software with AI: mobile apps, websites, and automations. I'm moving toward roles where I can use both — someone who understands the support queue from the inside and can build the tools that shorten it.",
  ],
};

export type Status = "shipped" | "in-progress";

export const projects: {
  name: string;
  status: Status;
  description: string;
  stack: string[];
  links?: { label: string; href: string }[];
}[] = [
  {
    name: "IT Onboarding Agent",
    status: "shipped",
    description:
      "An AI agent that onboards new hires and offboards leavers across a simulated company directory: accounts, licenses, groups, hardware, tasks for Desktop Support and email drafts for managers. Access to sensitive groups and disabling accounts wait for a person to approve, admin and production access are refused in code, and every change lands in an audit log.",
    stack: ["Next.js", "TypeScript", "Claude API", "Tool use", "Human-in-the-loop approvals"],
    links: [
      { label: "Try the live demo", href: "https://it-onboarding-agent-nine.vercel.app/" },
      { label: "View source", href: "https://github.com/gkitad/it-onboarding-agent" },
    ],
  },
  {
    name: "AI IT Helpdesk Assistant",
    status: "shipped",
    description:
      "Describe an IT problem in plain words and the assistant files a ticket: it sets priority and category, searches a knowledge base of help desk runbooks, walks the user through safe troubleshooting steps, and escalates to the right team with a handoff note when the steps don't work.",
    stack: ["Next.js", "TypeScript", "Claude API", "Structured outputs", "BM25 retrieval"],
    links: [
      { label: "Try the live demo", href: "https://it-helpdesk-assistant-three.vercel.app/" },
      { label: "View source", href: "https://github.com/gkitad/it-helpdesk-assistant" },
    ],
  },
  {
    name: "Griffin Care Tracker",
    status: "shipped",
    description:
      "An iPhone app my wife and I use to coordinate our dog's care across different work schedules. Tap when he's been walked or fed, morning and evening; it resets every day.",
    stack: ["React Native", "Expo", "TypeScript"],
  },
  {
    name: "This portfolio",
    status: "shipped",
    description:
      "Designed and built from scratch, deployed on Vercel with continuous deployment from GitHub.",
    stack: ["Next.js", "React", "TypeScript"],
    links: [{ label: "View source", href: "https://github.com/gkitad/portfolio" }],
  },
];

export const experience: {
  company: string;
  detail?: string;
  title: string;
  period?: string;
  place?: string;
}[] = [
  {
    company: "Samsung Austin Semiconductor",
    title: "Help Desk Support Technician",
    period: "Sep 2026 – Present",
    place: "Austin, TX",
  },
  {
    company: "Capgemini",
    detail: "Client: Progressive Insurance",
    title: "IT Support Specialist",
    period: "2024",
  },
  {
    company: "GTS Technology Solutions",
    detail: "Round Rock ISD and Austin ISD",
    title: "Field Deployment Technician",
    place: "Round Rock & Austin, TX",
  },
  {
    company: "Manpower",
    title: "IT Support Specialist",
    period: "Oct 2021 – Sep 2022",
    place: "Peru",
  },
  {
    company: "Sapia",
    detail: "Client: Supermercados Peruanos",
    title: "IT Support Specialist",
    period: "Mar 2017 – Sep 2021",
    place: "Peru",
  },
];

export const education = {
  degree: "B.S. in Computer Science",
  school: "IUT “Tomás Lander”, Venezuela",
  year: "2016",
};

export const skills = [
  "Windows & macOS support",
  "Active Directory",
  "Microsoft 365",
  "Hardware deployment & imaging",
  "Ticketing & SLAs",
  "React & React Native",
  "Next.js & TypeScript",
  "Claude API & prompt design",
  "Email & workflow automation",
  "English & Spanish",
];
