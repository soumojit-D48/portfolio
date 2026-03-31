
interface PR {
  title: string;
  url: string;
  type: "feat" | "fix" | "test";
}

interface Project {
  name: string;
  prs: PR[];
}

export const projects: Project[] = [
  {
    name: "Contributions",
    prs: [
      { title: "Convert Document Text to Canvas Diagrams using AI", url: "https://github.com/Antarik06/Procastify--AI-Powered-Learning-App/pull/46", type: "feat" },
      { title: "Resolve style application on GitHub and complex websites", url: "https://github.com/developer-diganta/Dino/pull/179", type: "fix" },
      { title: "Social Media Uploader Service (LinkedIn)", url: "https://github.com/Open-Source-Chandigarh/orycon/pull/79", type: "feat" },
      { title: "Backend OAuth2 Implementation and Profile Management", url: "https://github.com/x0lg0n/Inventory-Billing-Management-System/pull/16", type: "feat" },
      { title: "Add automated yield rebalancing with migration suggestions", url: "https://github.com/GauravKarakoti/SwapSmith/pull/98", type: "feat" },
      { title: "Adds rate limiting to protect against DoS attacks, misconfigured agents,", url: "https://github.com/sarika-03/LogPulse/pull/12", type: "feat" },
      { title: "Add comprehensive input validation for all backend routes", url: "https://github.com/sarojit049/Fleetiva-Roadlines/pull/84", type: "feat" },
      { title: "Implement skeleton loading screens across the application", url: "https://github.com/Nitya-003/CropChain/pull/40", type: "feat" },
      { title: "Implement unit tests for cli.py", url: "https://github.com/sr-857/AstraGuard-AI-Apertre-3.0/pull/736", type: "test" },
      { title: "Optimization and Hardening: src/app.py", url: "https://github.com/sr-857/AstraGuard-AI-Apertre-3.0/pull/816", type: "fix" },
    ],
  },
];
