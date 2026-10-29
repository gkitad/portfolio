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
    "I've spent more than five years on enterprise help desks, keeping people and their machines working: a supermarket chain's headquarters in Peru, an insurance client for Capgemini, school districts across Central Texas, and now a semiconductor fab in Austin.",
    "That work taught me how problems actually show up: a vague complaint, three red herrings, and a cause two systems away. Now I build AI that works the same way, with tools, evidence and a person approving anything risky. I'm looking for roles where I can do both.",
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
    tagline: "Break a real server and watch Claude fix it, through an MCP server I wrote to keep it safe.",
    description:
      "A small company's CRM runs on a live Ubuntu server: load balancer, two app servers, PostgreSQL and DNS in Docker. A visitor injects a real fault, like a full disk, an expired certificate or exhausted database connections, and Claude works it from the users' complaint. It only touches the servers through my MCP server: an argv-level command allowlist with no shell, a read-only database role, approval-gated changes it can't approve itself, budgets, and an audit log. The lab grades every incident itself, and each fault hides a prompt-injection trap in the logs.",
    stack: ["Python", "MCP", "Claude API", "Docker", "PostgreSQL", "Caddy", "Next.js"],
    proof: "Benchmark: Haiku, Sonnet and Opus resolved 15 of 15 real outages, and none acted on a planted prompt injection.",
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
    tagline: "Break something in a simulated network and watch an AI on-call engineer find the cause.",
    description:
      "Inject one of six realistic outages, or a hidden one. The agent gets only the user's complaint, reproduces it, tracks its hypotheses, follows logs, DNS, certificates and the change log past deliberate red herrings, fixes it with your approval, and writes the postmortem.",
    stack: ["Next.js", "TypeScript", "Claude API", "Tool use", "AES-GCM encrypted state"],
    proof: "Resolved 6 of 6 outages with one change each in live testing.",
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
    tagline: "Provisions new hires and offboards leavers, with a person approving anything sensitive.",
    description:
      "Describe who's starting or leaving and the agent works through a simulated directory: accounts, licenses, groups, hardware, tasks for Desktop Support and an email for the manager. Payroll and HR access wait for approval, admin and production access are refused in code, and every change lands in an audit log.",
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
    tagline: "Turns a plain-words complaint into a triaged ticket with fixes from real runbooks.",
    description:
      "It sets priority and category, searches a knowledge base of help desk runbooks with BM25, walks the user through safe self-service steps, and escalates to the right team with a handoff note. Phishing and compromised accounts go straight to Security as P1.",
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
      "We work different shifts, so one tap logs that Griffin was walked or fed, morning and evening, and it resets every day. My first app, and the reason I started building.",
    stack: ["React Native", "Expo", "TypeScript"],
  },
];

export const experience: { company: string; detail?: string; title: string; period?: string }[] = [
  { company: "Samsung Austin Semiconductor", title: "Help Desk Support Technician", period: "2026 – now" },
  { company: "Capgemini", detail: "Progressive Insurance", title: "IT Support Specialist", period: "2024" },
  { company: "GTS Technology Solutions", detail: "Round Rock ISD and Austin ISD", title: "Field Deployment Technician" },
  { company: "Manpower", detail: "Peru", title: "IT Support Specialist", period: "2021 – 2022" },
  { company: "Sapia", detail: "Supermercados Peruanos", title: "IT Support Specialist", period: "2017 – 2021" },
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
