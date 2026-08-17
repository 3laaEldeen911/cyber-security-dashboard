export const savedTargets = [
  {
    id: 'epam',
    domain: 'epam.com',
    status: 'COMPLETED',
    lastRun: '2h ago',
    score: 87,
    risk: 'Medium',
  },
  {
    id: 'google',
    domain: 'google.com',
    status: 'FAILED',
    lastRun: '8h ago',
    score: 64,
    risk: 'High',
  },
  {
    id: 'microsoft',
    domain: 'microsoft.com',
    status: 'COMPLETED',
    lastRun: '1d ago',
    score: 91,
    risk: 'Low',
  },
]

export const quickActions = [
  {
    title: 'Recon',
    subtitle: 'Passive discovery',
    detail: 'DNS, WHOIS, certificates',
    icon: 'search',
  },
  {
    title: 'Surface',
    subtitle: 'Asset mapping',
    detail: 'Subdomains and routes',
    icon: 'radar',
  },
  {
    title: 'Vuln',
    subtitle: 'Risk checks',
    detail: 'CVEs and weak exposure',
    icon: 'shield',
  },
  {
    title: 'Full scan',
    subtitle: 'End-to-end review',
    detail: 'Deep validation workflow',
    icon: 'sparkles',
  },
]

export const pipelineStages = [
  { name: 'Recon', state: 'completed', time: '00:04:12' },
  { name: 'Surface', state: 'completed', time: '00:08:35' },
  { name: 'Vuln scan', state: 'running', time: '00:22:11' },
  { name: 'AI analysis', state: 'pending', time: 'Queued' },
  { name: 'Reporting', state: 'pending', time: 'Queued' },
]

export const dashboardStats = [
  { label: 'Queued stages', value: '04', delta: '+2 from yesterday' },
  { label: 'High findings', value: '13', delta: '-4% this week' },
  { label: 'Last sync', value: '92%', delta: 'Updated 12 min ago' },
  { label: 'Threat score', value: '8.7/10', delta: 'Elevated' },
]
