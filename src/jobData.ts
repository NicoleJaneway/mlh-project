export interface BlsJob {
  id: string;
  title: string;
  socCode: string;
  growthRate: string;
  medianPay: string;
  description: string;
  demandLevel: string;
  topSkills: string[];
}

export interface LiveJob {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  socTarget: string;
  posted: string;
  requiredSkills: string[];
  matchedRole: string;
}

export const INITIAL_BLS_JOBS: BlsJob[] = [
  {
    id: 'soc-15-1252',
    title: 'Software Developer / Engineer',
    socCode: '15-1252',
    growthRate: '+25%',
    medianPay: '$127,260',
    description: 'High demand driven by software expansion across all industries.',
    demandLevel: 'Very High',
    topSkills: ['JavaScript', 'React', 'Python', 'Cloud Services', 'System Design']
  },
  {
    id: 'soc-15-2051',
    title: 'Data Scientist & Analyst',
    socCode: '15-2051',
    growthRate: '+35%',
    medianPay: '$103,500',
    description: 'Organizations leverage big data for AI models and business insights.',
    demandLevel: 'Extremely High',
    topSkills: ['SQL', 'Python', 'Data Visualization', 'Machine Learning', 'Statistics']
  },
  {
    id: 'soc-15-1212',
    title: 'Information Security Analyst',
    socCode: '15-1212',
    growthRate: '+32%',
    medianPay: '$112,000',
    description: 'Critical cyber protection for enterprise and infrastructure security.',
    demandLevel: 'High',
    topSkills: ['Cybersecurity', 'Network Security', 'Compliance', 'Risk Analysis', 'Incident Response']
  },
  {
    id: 'soc-11-9111',
    title: 'Medical & Health Services Manager',
    socCode: '11-9111',
    growthRate: '+28%',
    medianPay: '$104,830',
    description: 'Operations management in clinical settings and digital health systems.',
    demandLevel: 'High',
    topSkills: ['Healthcare Admin', 'Compliance', 'Operations', 'Budgeting', 'EHR Systems']
  }
];

export const INITIAL_LIVE_JOBS: LiveJob[] = [
  {
    id: 101,
    title: 'Frontend Developer',
    company: 'TechCorp Solutions',
    location: 'Remote / Austin, TX',
    salary: '$95,000 - $115,000',
    socTarget: '15-1252',
    posted: '2 hours ago',
    requiredSkills: ['React', 'JavaScript', 'Tailwind CSS', 'Git', 'REST APIs'],
    matchedRole: 'Software Developer'
  },
  {
    id: 102,
    title: 'Junior Data Analyst',
    company: 'Apex Logistics',
    location: 'Atlanta, GA (Hybrid)',
    salary: '$72,000 - $85,000',
    socTarget: '15-2051',
    posted: '4 hours ago',
    requiredSkills: ['SQL', 'Excel', 'Data Visualization', 'Python', 'Tableau'],
    matchedRole: 'Data Scientist & Analyst'
  },
  {
    id: 103,
    title: 'Cybersecurity Operations Specialist',
    company: 'SecureNet Cloud',
    location: 'Remote',
    salary: '$105,000 - $125,000',
    socTarget: '15-1212',
    posted: '1 day ago',
    requiredSkills: ['Cybersecurity', 'Network Security', 'Linux', 'Firewalls', 'SIEM'],
    matchedRole: 'Information Security Analyst'
  },
  {
    id: 104,
    title: 'Health Systems Operations Lead',
    company: 'WellCare Health',
    location: 'Dallas, TX',
    salary: '$98,000 - $110,000',
    socTarget: '11-9111',
    posted: 'Just now',
    requiredSkills: ['Healthcare Admin', 'Operations', 'EHR Systems', 'Staff Management'],
    matchedRole: 'Medical & Health Manager'
  },
  {
    id: 105,
    title: 'Full Stack JavaScript Engineer',
    company: 'Innovate Labs',
    location: 'Remote',
    salary: '$110,000 - $130,000',
    socTarget: '15-1252',
    posted: '3 hours ago',
    requiredSkills: ['React', 'Node.js', 'Python', 'SQL', 'TypeScript'],
    matchedRole: 'Software Developer'
  },
  {
    id: 106,
    title: 'Business Intelligence & SQL Developer',
    company: 'FinTech Analytics',
    location: 'New York, NY',
    salary: '$90,000 - $115,000',
    socTarget: '15-2051',
    posted: '5 hours ago',
    requiredSkills: ['SQL', 'Data Visualization', 'Power BI', 'ETL', 'Python'],
    matchedRole: 'Data Scientist & Analyst'
  }
];