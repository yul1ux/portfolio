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
  description: string;
  emphasis: 'accent' | 'muted';
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Cloud Platforms & Multi-Cloud',
    description:
      'Designing highly available, multi-region architectures with automated failover, private connectivity, and strict IAM governance across public clouds.',
    icon: 'cloud',
    skills: ['AWS', 'GCP', 'Cloudflare', 'VPC Peering'],
  },
  {
    title: 'Infrastructure as Code & GitOps',
    description:
      'Enforcing state-driven, version-controlled cloud provision through modular configurations and automated continuous reconciliation pipelines.',
    icon: 'layers',
    skills: ['Terraform', 'OpenTofu', 'ArgoCD', 'Ansible'],
  },
  {
    title: 'Containers & Orchestration',
    description:
      'Production-grade Kubernetes cluster management, custom ingress controllers, service mesh integration, and microservice containerization.',
    icon: 'server',
    skills: ['Kubernetes', 'Docker', 'Helm', 'Istio'],
  },
  {
    title: 'Observability & Reliability',
    description:
      'End-to-end metrics telemetry, distributed tracing, automated alert routing, and proactive chaos engineering for high availability.',
    icon: 'network',
    skills: ['Prometheus', 'Grafana', 'OpenTelemetry', 'Datadog'],
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
    period: '2023 \u00e2\u20ac\u201d PRESENT',
    role: 'Senior Cloud Infrastructure Engineer',
    organization: 'ENTERPRISE CLOUD PLATFORMS',
    description:
      'Leading the evolution of core cloud runtime environments. Directing the migration towards declarative GitOps, cost-efficient Kubernetes spot instance strategy, and zero-trust mesh networking.',
    emphasis: 'accent',
  },
  {
    period: '2021 \u00e2\u20ac\u201d 2023',
    role: 'DevOps & Systems Specialist',
    organization: 'DISTRIBUTED SYSTEMS GROUP',
    description:
      'Standardized Infrastructure as Code modules across 15+ engineering teams. Implemented automated CI/CD security scanning, container image signing, and unified Prometheus metrics.',
    emphasis: 'muted',
  },
  {
    period: 'RESEARCH & INVESTIGATIONS',
    role: 'Ongoing Technical Curiosity',
    description:
      'Currently exploring eBPF for deep kernel network visibility, WebAssembly for edge microservices, and deterministic build systems (Nix/NixOS).',
    emphasis: 'muted',
  },
];
