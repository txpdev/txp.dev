export const site = {
  name: "TXP.DEV — Tibo X Perol",
  shortName: "TXP.DEV",
  description:
    "Tibo X Perol is an engineer building software for health, infrastructure, enterprise work, and science.",
  url: "https://txp.dev",
  themeColor: "#a9bdc0",
} as const;

export const projects = [
  {
    number: "01",
    name: "StormForge",
    category: "AI infrastructure",
    role: "Founding engineer · Chief AI Officer",
    outcome: "Acquired by CloudBolt",
    color: "orange",
    description:
      "Software that continuously rightsizes Kubernetes workloads to reduce cloud costs without sacrificing performance or reliability.",
    href: "https://stormforge.io",
  },
  {
    number: "02",
    name: "OneSuite",
    category: "Enterprise agents",
    role: "Head of Engineering and AI",
    outcome: "Building now",
    color: "blue",
    description:
      "An AI workspace for performance teams that brings projects, agents, live campaign data, and brand briefs together.",
    href: "https://onesuite.performics.com/login",
  },
  {
    number: "03",
    name: "Parfait Health",
    category: "Consumer health",
    role: "Founder · Builder",
    outcome: "Building now",
    color: "green",
    description:
      "A mobile app that turns care conversations into notes, next steps, and shared context.",
    href: "https://parfait-health.dev/",
  },
  {
    number: "04",
    name: "ConvNetQuake",
    category: "Earthquake science",
    role: "Research",
    outcome: "Open source",
    color: "yellow",
    description:
      "An open-source neural network that detects and locates earthquakes from seismic data.",
    href: "https://github.com/txpdev/ConvNetQuake",
  },
] as const;

export const profiles = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/thibautperol" },
  { label: "GitHub", href: "https://github.com/txpdev" },
  { label: "X", href: "https://x.com/txpdev" },
] as const;
