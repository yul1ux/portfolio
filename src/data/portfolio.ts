export interface SkillCategory {
  title: string;
  description: string;
  icon: 'cloud' | 'layers' | 'server' | 'network';
  skills: string[];
}

export interface CaseStudy {
  id: string;
  category: string;
  title: string;
  description: string;
  technologyStack: string;
  actionLabel: string;
  layout: 'standard' | 'wide';
  metrics?: {
    ingestion: string;
    mttdReduction: string;
    costEfficiency: string;
  };
}

export interface ExperienceEntry {
  period?: string;
  role: string;
  organization?: string;
  location?: string;
  description: string;
  emphasis: 'accent' | 'muted';
}

export interface EducationEntry {
  school: string;
  degree: string;
  start: string;
  end?: string;
  href?: string;
}

export interface CertificationEntry {
  name: string;
  issuer: string;
  shortName?: string;
  issued: string;
  credentialId?: string;
  verificationUrl?: string;
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Cloud Platforms & Infrastructure',
    description:
      'Hands-on AWS infrastructure work focused on secure, reliable, and automated cloud environments.',
    icon: 'cloud',
    skills: ['AWS', 'Terraform', 'Linux'],
  },
  {
    title: 'Automation & Scripting',
    description:
      'Using Bash, Python, GitHub Actions, and Git to automate provisioning, troubleshooting, and operational workflows.',
    icon: 'layers',
    skills: ['Bash', 'GitHub Actions', 'Git', 'Python'],
  },
  {
    title: 'Containers & Platform Work',
    description:
      'Working with Docker and Kubernetes to support repeatable environments and modern infrastructure workflows.',
    icon: 'server',
    skills: ['Docker', 'Kubernetes'],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: '001',
    category: 'PRODUCTION ARCHITECTURE',
    title: 'Multi-Region Kubernetes & Zero-Downtime Migration',
    description:
      'Architected and executed a seamless live traffic migration across multi-region Kubernetes clusters. Reduced latency by 35% while establishing active-active redundancy with automated DNS failover.',
    technologyStack: 'AWS EKS, Terraform, ArgoCD, Route53, Cilium CNI',
    actionLabel: 'VIEW SYSTEM SPECIFICATION',
    layout: 'standard',
  },
  {
    id: '002',
    category: 'SECURITY & COMPLIANCE',
    title: 'Immutable GitOps & Zero-Trust Infrastructure',
    description:
      'Designed an automated Infrastructure as Code ecosystem enforcing strict policy-as-code validation. Eliminated direct ssh access in favor of ephemeral session tokens and automated drift correction.',
    technologyStack: 'OpenTofu, OPA Gatekeeper, HashiCorp Vault, Teleport',
    actionLabel: 'VIEW SYSTEM SPECIFICATION',
    layout: 'standard',
  },
  {
    id: '003',
    category: 'OBSERVABILITY PLATFORM',
    title: 'Unified Telemetry Stack for Distributed Services',
    description:
      'Constructed an enterprise observability pipeline processing 10B+ daily log events and metrics. Enabled predictive alerting, reducing Mean Time to Detection (MTTD) by 60%.',
    technologyStack: 'Prometheus, Thanos, Grafana, OpenTelemetry, Vector',
    actionLabel: 'EXPLORE ARCHITECTURE',
    layout: 'wide',
    metrics: {
      ingestion: '10B events/day',
      mttdReduction: '-60%',
      costEfficiency: '+40% optimized',
    },
  },
];

export const professionalExperience: ExperienceEntry[] = [
  {
    period: '2025 — PRESENT',
    role: 'Network Operations Center Engineer',
    organization: 'Maharnet - FTTH ISP',
    location: 'Myanmar',
    description:
      'Monitor and support ISP network operations including FTTH customer connectivity, network incidents, and infrastructure troubleshooting. Work with routing, switching, MikroTik devices, PPPoE authentication, and monitoring systems to maintain reliable internet services. Troubleshoot customer and core network issues while improving automation and cloud infrastructure skills.',
    emphasis: 'accent',
  },
];

export const educationEntries: EducationEntry[] = [
  {
    school: 'Government Technical Institute (GTI) - Pyin Oo Lwin',
    degree: 'Diploma in Mechanical Engineering',
    start: '2018',
    end: '2020',
  },
];

export const certifications: CertificationEntry[] = [
  {
    name: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    shortName: 'AWS SAA-C03',
    issued: 'Aug 2026',
    credentialId: '4ead7e47b6eb4753a52fe3bf1d662a6e',
    verificationUrl:
      'https://www.credly.com/badges/6777f1bc-d772-4327-a63c-084869854c32',
  },
  {
    name: 'Red Hat Certified System Administrator',
    issuer: 'KodeKloud',
    shortName: 'RHCSA',
    issued: '2025',
    credentialId: '97939308-c542-470f-90fe-dcfe10ecec35',
    verificationUrl:
      'https://learn.kodekloud.com/learn/certificate/97939308-c542-470f-90fe-dcfe10ecec35',
  },
  {
    name: "CS50's Introduction to Computer Science",
    issuer: 'Harvard University',
    shortName: 'CS50',
    issued: '2025',
    credentialId: 'a3b3914e-8dae-4efb-aeac-3a51f3c71f87',
    verificationUrl:
      'https://certificates.cs50.io/a3b3914e-8dae-4efb-aeac-3a51f3c71f87.pdf?size=letter',
  },
];
