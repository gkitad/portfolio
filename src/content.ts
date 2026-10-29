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
  heroIntro:
    "I've spent more than five years on enterprise help desks. I build AI tools that troubleshoot the way I do. They check the evidence first and ask before changing anything.",
  about: [
    "I've been in IT support since 2017. I started at the headquarters of a supermarket chain in Peru, then supported an insurance company through Capgemini, set up devices for Round Rock ISD schools, and now work the help desk at Samsung's semiconductor plant in Austin.",
    "Most of the job is figuring out what's really wrong, because it's rarely what the first ticket says. That's what my AI projects do too. They read the logs, run the checks and wait for a person before they change anything.",
    "I'm looking for a remote role where I can keep doing both: helping people with their tech and building tools that make that work faster.",
  ],
};

export type Step = { label: string; detail: string };

export type Project = {
  name: string;
  kind: "featured" | "main" | "personal";
  meta: string;
  tagline: string;
  description: string;
  stack: string[];
  /** The order the tool works in, taken from what the project actually does. */
  steps?: Step[];
  /** The main safety control, in one sentence. */
  guard?: string;
  proof?: string;
  image?: { src: StaticImageData; alt: string; url: string };
  demo?: string;
  source?: string;
};

/** What runs where in Agent Ops Lab, top to bottom. */
export const opsLabArchitecture: { name: string; detail: string; items?: string[] }[] = [
  { name: "This page", detail: "A static Next.js app in the visitor's browser" },
  { name: "Incident service", detail: "Python. Injects the fault, streams the timeline, relays approvals" },
  { name: "Claude", detail: "Reads the evidence and asks for changes, through MCP only" },
  { name: "MCP server", detail: "Python. Command allowlist, approvals, budgets, audit log" },
  {
    name: "Docker lab",
    detail: "Six containers on one DigitalOcean droplet",
    items: ["lb-01", "crm-app-01", "crm-app-02", "db-01", "dns-01", "office-pc"],
  },
];

export const projects: Project[] = [
  {
    name: "Agent Ops Lab",
    kind: "featured",
    meta: "Claude API + MCP, 2026",
    tagline: "A live server I break on purpose so an AI agent can fix it, inside guardrails I wrote.",
    description:
      "I set up a small company's CRM on an Ubuntu server at DigitalOcean, with a load balancer, two app servers, PostgreSQL and DNS running in Docker. You pick a fault, like a full disk, an expired certificate or a database out of connections, and it really happens. Claude only gets the user's complaint, and it can only reach the servers through an MCP server I wrote in Python. It can run read-only commands from an allowlist, and every change waits for someone to approve it. The lab checks the result on its own, and every fault hides fake instructions in the logs to see if the agent falls for them.",
    stack: ["Python", "MCP", "Claude API", "Docker", "PostgreSQL", "Caddy", "Next.js"],
    steps: [
      { label: "Complaint", detail: "Claude gets the users' complaint, never which fault was picked." },
      { label: "Diagnosis", detail: "Read-only commands from an allowlist, run through the MCP server." },
      { label: "Approval", detail: "Every change waits for a person, with the reason it should work." },
      { label: "Fix", detail: "The smallest change the evidence supports." },
      { label: "Verification", detail: "The lab runs its own user check before it counts as fixed." },
    ],
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
    kind: "main",
    meta: "Claude API, 2026",
    tagline: "A simulated company network with six outages and an AI on-call engineer that has to find the cause.",
    description:
      "Pick one of six outages, or a random one you don't get to see. The agent starts with only the user's complaint. It reproduces the problem, checks logs, DNS, certificates and recent changes, and has to get past the red herrings I planted. It asks before fixing anything and writes a postmortem at the end.",
    stack: ["Next.js", "TypeScript", "Claude API", "Tool use", "AES-GCM encrypted state"],
    steps: [
      { label: "Reproduce", detail: "Runs the user's check" },
      { label: "Investigate", detail: "Logs, DNS, certificates, changes" },
      { label: "Approve", detail: "You approve the fix" },
      { label: "Postmortem", detail: "Writes up what happened" },
    ],
    proof: "Fixed 6 of 6 outages with a single change each when I tested it.",
    image: {
      src: incidentShot,
      alt: "The Incident Responder waiting for approval to renew an expired certificate, with the load balancer marked as failing on the network map.",
      url: "ai-incident-responder.vercel.app",
    },
    demo: "https://ai-incident-responder.vercel.app/",
    source: "https://github.com/gkitad/ai-incident-responder",
  },
  {
    name: "IT Onboarding Agent",
    kind: "main",
    meta: "Claude API, 2026",
    tagline: "Sets up new hires and removes people who leave, and asks before granting anything sensitive.",
    description:
      "You describe who's starting or leaving, and the agent works through a mock company directory. It handles accounts, licenses, groups, a laptop request for Desktop Support and an email to the manager.",
    stack: ["Next.js", "TypeScript", "Claude API", "Tool use", "Human-in-the-loop"],
    steps: [
      { label: "Policy", detail: "Reads the department's access policy" },
      { label: "Accounts", detail: "Account, licenses and groups" },
      { label: "Hardware", detail: "Laptop request and setup task" },
      { label: "Manager", detail: "Drafts the email" },
    ],
    guard: "Payroll and HR access need approval, admin and production access are blocked in the code, and every change is logged.",
    image: {
      src: onboardingShot,
      alt: "The Onboarding Agent setting up a new Finance hire, paused for approval before adding her to the payroll and banking share.",
      url: "it-onboarding-agent-nine.vercel.app",
    },
    demo: "https://it-onboarding-agent-nine.vercel.app/",
    source: "https://github.com/gkitad/it-onboarding-agent",
  },
  {
    name: "AI Helpdesk Assistant",
    kind: "main",
    meta: "Claude API, 2026",
    tagline: "Turns a complaint written in plain words into a ticket, with fixes from real runbooks.",
    description:
      "It sets the priority and category, searches a small knowledge base of help desk runbooks, and walks the user through the fixes they can safely do on their own. Anything else goes to the right team with a handoff note.",
    stack: ["Next.js", "TypeScript", "Claude API", "Structured outputs", "Retrieval"],
    steps: [
      { label: "Triage", detail: "Priority and category" },
      { label: "Runbooks", detail: "Searches the knowledge base" },
      { label: "Self-service", detail: "Safe steps for the user" },
      { label: "Handoff", detail: "Notes for the right team" },
    ],
    guard: "Phishing and hacked accounts go straight to Security as P1.",
    image: {
      src: helpdeskShot,
      alt: "The Helpdesk Assistant filing a phishing report as a P1 for Security, with containment steps for the user.",
      url: "it-helpdesk-assistant-three.vercel.app",
    },
    demo: "https://it-helpdesk-assistant-three.vercel.app/",
    source: "https://github.com/gkitad/it-helpdesk-assistant",
  },
  {
    name: "Griffin Care Tracker",
    kind: "personal",
    meta: "React Native, 2026",
    tagline: "The iPhone app my wife and I use to keep our dog's walks and meals in sync.",
    description:
      "We work different shifts, so one tap logs that Griffin was walked or fed, morning and evening, and it resets every day. It was my first app, and it's why I started building.",
    stack: ["React Native", "Expo", "TypeScript"],
  },
];

export const experience: { company: string; detail?: string; title: string; period: string }[] = [
  { company: "Samsung Austin Semiconductor", title: "IT Help Desk Support Technician", period: "2026 - now" },
  { company: "GTS Technology Solutions", detail: "Round Rock ISD", title: "Field Deployment Technician", period: "2026" },
  { company: "Capgemini", detail: "Progressive Insurance", title: "IT Support Technician, Tier 1 and 2", period: "2024" },
  { company: "Manpower", detail: "Peru", title: "Incident Management Specialist", period: "2021 - 2022" },
  { company: "Sapia", detail: "Supermercados Peruanos", title: "Second Level Support Analyst", period: "2017 - 2021" },
];


export const skills: { group: string; items: string[] }[] = [
  { group: "IT support and troubleshooting", items: ["Windows & macOS support", "Hardware deployment & imaging", "Ticketing & SLAs"] },
  { group: "Systems and enterprise tools", items: ["Active Directory", "Microsoft 365"] },
  { group: "AI agents and automation", items: ["AI agents & tool use", "Claude API & prompt design"] },
  { group: "Software development", items: ["Next.js, React & TypeScript", "React Native"] },
  { group: "Languages", items: ["English & Spanish"] },
];
