// All the text on the site lives here. Edit this file to update the page.

import type { StaticImageData } from "next/image";
import opsLabShot from "@/assets/work/agent-ops-lab.jpg";
import incidentShot from "@/assets/work/incident-responder.jpg";
import onboardingShot from "@/assets/work/onboarding-agent.jpg";
import helpdeskShot from "@/assets/work/helpdesk-assistant.jpg";

export const profile = {
  name: "Anthony Jaimez",
  title: "IT Support & AI",
  location: "Round Rock, TX",
  email: "anthony.jaimez.it@gmail.com",
  linkedin: "https://www.linkedin.com/in/anthonyjaimez",
  github: "https://github.com/gkitad",
  heroLead: "Help Desk Support Technician at Samsung Austin Semiconductor. Based in Round Rock, TX.",
  heroSub: "5+ years of enterprise support. Open to remote roles in AI and IT.",
  about: [
    "I've worked enterprise help desks for more than five years. I supported the headquarters of a supermarket chain in Peru, an insurance client through Capgemini, school districts around Round Rock and Austin, and now a semiconductor fab.",
    "Most tickets start with something vague like \"it's not working,\" and the real cause is usually somewhere else. So I started building AI tools that troubleshoot the way I do. They look at the evidence first and ask before changing anything. I'm looking for a role where I can keep doing both.",
  ],
};

export type Project = {
  name: string;
  meta: string;
  tagline: string;
  description: string;
  stack: string[];
  proof?: string;
  image?: { src: StaticImageData; alt: string; url: string };
  demo?: string;
  source?: string;
};

export const projects: Project[] = [
  {
    name: "Agent Ops Lab",
    meta: "Claude API + MCP, 2026",
    tagline: "A live server I break on purpose so an AI agent can fix it, inside guardrails I wrote.",
    description:
      "I set up a small company's CRM on an Ubuntu server at DigitalOcean, with a load balancer, two app servers, PostgreSQL and DNS running in Docker. You pick a fault, like a full disk, an expired certificate or a database out of connections, and it really happens. Claude only gets the user's complaint, and it can only reach the servers through an MCP server I wrote in Python. It can run read-only commands from an allowlist, and every change waits for someone to approve it. The lab checks the result on its own, and every fault hides fake instructions in the logs to see if the agent falls for them.",
    stack: ["Python", "MCP", "Claude API", "Docker", "PostgreSQL", "Caddy", "Next.js"],
    proof: "Tested with Haiku, Sonnet and Opus: 15 of 15 outages fixed, and none of them followed the fake instructions.",
    image: {
      src: opsLabShot,
      alt: "Agent Ops Lab mid-incident: Claude has traced a CRM outage to a reporting job holding every database connection and is asking for approval to end only those 35 sessions.",
      url: "138-197-164-83.sslip.io",
    },
    demo: "https://138-197-164-83.sslip.io/",
    source: "https://github.com/gkitad/agent-ops-lab",
  },
  {
    name: "AI Incident Responder",
    meta: "Claude API, 2026",
    tagline: "A simulated company network with six outages and an AI on-call engineer that has to find the cause.",
    description:
      "Pick one of six outages, or a random one you don't get to see. The agent starts with only the user's complaint. It reproduces the problem, checks logs, DNS, certificates and recent changes, and has to get past the red herrings I planted. It asks before fixing anything and writes a postmortem at the end.",
    stack: ["Next.js", "TypeScript", "Claude API", "Tool use", "AES-GCM encrypted state"],
    proof: "Fixed 6 of 6 outages with a single change each when I tested it.",
    image: {
      src: incidentShot,
      alt: "The Incident Responder mid-investigation: a network map with the database marked as failing, the agent's hypotheses, and a change waiting for approval.",
      url: "ai-incident-responder.vercel.app",
    },
    demo: "https://ai-incident-responder.vercel.app/",
    source: "https://github.com/gkitad/ai-incident-responder",
  },
  {
    name: "IT Onboarding Agent",
    meta: "Claude API, 2026",
    tagline: "Sets up new hires and removes people who leave, and asks before granting anything sensitive.",
    description:
      "You describe who's starting or leaving, and the agent works through a mock company directory. It handles accounts, licenses, groups, a laptop request for Desktop Support and an email to the manager. Payroll and HR access need approval, admin and production access are blocked in the code, and every change is logged.",
    stack: ["Next.js", "TypeScript", "Claude API", "Tool use", "Human-in-the-loop"],
    image: {
      src: onboardingShot,
      alt: "The Onboarding Agent provisioning a new Finance hire, paused for approval before granting access to the payroll share.",
      url: "it-onboarding-agent-nine.vercel.app",
    },
    demo: "https://it-onboarding-agent-nine.vercel.app/",
    source: "https://github.com/gkitad/it-onboarding-agent",
  },
  {
    name: "AI Helpdesk Assistant",
    meta: "Claude API, 2026",
    tagline: "Turns a complaint written in plain words into a ticket, with fixes from real runbooks.",
    description:
      "It sets the priority and category, searches a small knowledge base of help desk runbooks, and walks the user through the fixes they can safely do on their own. Anything else goes to the right team with a handoff note. Phishing and hacked accounts go straight to Security as P1.",
    stack: ["Next.js", "TypeScript", "Claude API", "Structured outputs", "Retrieval"],
    image: {
      src: helpdeskShot,
      alt: "The Helpdesk Assistant escalating a phishing report to Security as a P1, with containment steps and a handoff note.",
      url: "it-helpdesk-assistant-three.vercel.app",
    },
    demo: "https://it-helpdesk-assistant-three.vercel.app/",
    source: "https://github.com/gkitad/it-helpdesk-assistant",
  },
  {
    name: "Griffin Care Tracker",
    meta: "React Native, 2026",
    tagline: "The iPhone app my wife and I use to keep our dog's walks and meals in sync.",
    description:
      "We work different shifts, so one tap logs that Griffin was walked or fed, morning and evening, and it resets every day. It was my first app, and it's why I started building.",
    stack: ["React Native", "Expo", "TypeScript"],
  },
];

export const experience: { company: string; detail?: string; title: string; period?: string }[] = [
  { company: "Samsung Austin Semiconductor", title: "Help Desk Support Technician", period: "2026 - now" },
  { company: "Capgemini", detail: "Progressive Insurance", title: "IT Support Specialist", period: "2024" },
  { company: "GTS Technology Solutions", detail: "Round Rock ISD and Austin ISD", title: "Field Deployment Technician" },
  { company: "Manpower", detail: "Peru", title: "IT Support Specialist", period: "2021 - 2022" },
  { company: "Sapia", detail: "Supermercados Peruanos", title: "IT Support Specialist", period: "2017 - 2021" },
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
  "AI agents & tool use",
  "Claude API & prompt design",
  "Next.js, React & TypeScript",
  "React Native",
  "English & Spanish",
];
