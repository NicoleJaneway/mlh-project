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
  socTarget?: string;
  posted: string;
  requiredSkills: string[];
  matchedRole: string;
}

export const INITIAL_BLS_JOBS: BlsJob[] = [
  {
    id: 'soc-15-1252',
    title: 'Software Developer & QA Analyst',
    socCode: '15-1252',
    growthRate: '+25%',
    medianPay: '$127,260 / yr',
    description: 'Design, code, and test software applications while leveraging modern AI tools and systems.',
    demandLevel: 'Very High',
    topSkills: ['JavaScript', 'React', 'Python', 'System Design', 'Problem Solving']
  },
  {
    id: 'soc-15-2051',
    title: 'Data Scientist & Analytics Specialist',
    socCode: '15-2051',
    growthRate: '+35%',
    medianPay: '$103,500 / yr',
    description: 'Analyze complex datasets to identify trends, build models, and guide operational insights.',
    demandLevel: 'Extremely High',
    topSkills: ['SQL', 'Python', 'Data Visualization', 'Statistical Analysis', 'Machine Learning']
  },
  {
    id: 'soc-15-1212',
    title: 'Information Security Analyst',
    socCode: '15-1212',
    growthRate: '+32%',
    medianPay: '$112,000 / yr',
    description: 'Plan and execute security measures to protect organizations from cyber threats and data breaches.',
    demandLevel: 'Very High',
    topSkills: ['Cybersecurity', 'Network Security', 'Incident Response', 'Compliance', 'Risk Assessment']
  },
  {
    id: 'soc-11-9111',
    title: 'Medical & Health Services Manager',
    socCode: '11-9111',
    growthRate: '+28%',
    medianPay: '$104,830 / yr',
    description: 'Coordinate health services, clinical departments, and digital record operations across medical facilities.',
    demandLevel: 'High',
    topSkills: ['Healthcare Admin', 'Compliance', 'Operations', 'Budgeting', 'EHR Systems']
  },
  {
    id: 'soc-31-1120',
    title: 'Home Health & Personal Care Aide',
    socCode: '31-1120',
    growthRate: '+22%',
    medianPay: '$33,380 / yr',
    description: 'Provide daily care, monitoring, and assistance for patients in community and home healthcare settings.',
    demandLevel: 'Very High',
    topSkills: ['Patient Care', 'CPR & First Aid', 'Compassion', 'Vital Signs Monitoring', 'Communication']
  },
  {
    id: 'soc-53-3032',
    title: 'Heavy & Tractor-Trailer Truck Driver',
    socCode: '53-3032',
    growthRate: '+15%',
    medianPay: '$54,200 / yr',
    description: 'Transport goods and materials regionally using fleet route planning and safety logging tools.',
    demandLevel: 'High',
    topSkills: ['Commercial Driving (CDL)', 'GPS & Route Planning', 'Logistics Safety', 'Time Management', 'Vehicle Inspection']
  },
  {
    id: 'soc-43-4051',
    title: 'Customer Service & Support Specialist',
    socCode: '43-4051',
    growthRate: '+12%',
    medianPay: '$41,200 / yr',
    description: 'Assist clients across help centers, digital channels, and ticketing platforms.',
    demandLevel: 'High',
    topSkills: ['Customer Relations', 'CRM & Helpdesk Tools', 'Problem Solving', 'Data Entry', 'Active Listening']
  }
];

export const INITIAL_LIVE_JOBS: LiveJob[] = [
  // --- Matched to: Software Developer & QA Analyst (3 jobs) ---
  {
    id: 101,
    title: 'Frontend React Developer',
    company: 'TechCorp Solutions',
    location: 'Remote / Austin, TX',
    salary: '$95,000 - $115,000',
    socTarget: '15-1252',
    posted: '2 hours ago',
    requiredSkills: ['React', 'JavaScript', 'Tailwind CSS', 'Troubleshooting', 'REST APIs'],
    matchedRole: 'Software Developer & QA Analyst'
  },
  {
    id: 105,
    title: 'Full Stack JavaScript Engineer',
    company: 'Innovate Labs',
    location: 'Remote',
    salary: '$110,000 - $130,000',
    socTarget: '15-1252',
    posted: '3 hours ago',
    requiredSkills: ['React', 'Node.js', 'Python', 'Troubleshooting', 'TypeScript'],
    matchedRole: 'Software Developer & QA Analyst'
  },
  {
    id: 107,
    title: 'Junior QA Test Automation Engineer',
    company: 'Apex Software Group',
    location: 'Atlanta, GA (Hybrid)',
    salary: '$75,000 - $88,000',
    socTarget: '15-1252',
    posted: '1 day ago',
    requiredSkills: ['Python', 'JavaScript', 'Automated Testing', 'Troubleshooting'],
    matchedRole: 'Software Developer & QA Analyst'
  },

  // --- Matched to: Data Scientist & Analytics Specialist (3 jobs) ---
  {
    id: 102,
    title: 'Junior Data Analyst',
    company: 'Apex Logistics',
    location: 'Atlanta, GA (Hybrid)',
    salary: '$72,000 - $85,000',
    socTarget: '15-2051',
    posted: '4 hours ago',
    requiredSkills: ['SQL', 'Excel', 'Data Visualization', 'Python', 'Logistics'],
    matchedRole: 'Data Scientist & Analytics Specialist'
  },
  {
    id: 106,
    title: 'Supply Chain Data Analyst',
    company: 'FinTech Analytics',
    location: 'New York, NY',
    salary: '$90,000 - $115,000',
    socTarget: '15-2051',
    posted: '5 hours ago',
    requiredSkills: ['SQL', 'Data Visualization', 'Power BI', 'Logistics', 'Python'],
    matchedRole: 'Data Scientist & Analytics Specialist'
  },
  {
    id: 108,
    title: 'Associate Data Scientist',
    company: 'Insight AI Labs',
    location: 'Remote',
    salary: '$98,000 - $118,000',
    socTarget: '15-2051',
    posted: 'Yesterday',
    requiredSkills: ['Python', 'Statistical Analysis', 'SQL', 'Machine Learning'],
    matchedRole: 'Data Scientist & Analytics Specialist'
  },

  // --- Matched to: Information Security Analyst (2 jobs) ---
  {
    id: 103,
    title: 'Cybersecurity Operations Specialist',
    company: 'SecureNet Cloud',
    location: 'Remote',
    salary: '$105,000 - $125,000',
    socTarget: '15-1212',
    posted: '1 day ago',
    requiredSkills: ['Cybersecurity', 'Network Security', 'Linux', 'Troubleshooting', 'Safety'],
    matchedRole: 'Information Security Analyst'
  },
  {
    id: 109,
    title: 'Information Security Risk Auditor',
    company: 'Peachtree Financial Group',
    location: 'Atlanta, GA',
    salary: '$92,000 - $110,000',
    socTarget: '15-1212',
    posted: '3 hours ago',
    requiredSkills: ['Compliance', 'Risk Assessment', 'Cybersecurity', 'Safety'],
    matchedRole: 'Information Security Analyst'
  },

  // --- Matched to: Medical & Health Services Manager (2 jobs) ---
  {
    id: 104,
    title: 'Health Systems Operations Lead',
    company: 'WellCare Health',
    location: 'Dallas, TX',
    salary: '$98,000 - $110,000',
    socTarget: '11-9111',
    posted: 'Just now',
    requiredSkills: ['Patient Care', 'Operations', 'Customer Care', 'Safety'],
    matchedRole: 'Medical & Health Services Manager'
  },
  {
    id: 110,
    title: 'Clinical Department Manager',
    company: 'Northside Health Network',
    location: 'Sandy Springs, GA',
    salary: '$95,000 - $112,000',
    socTarget: '11-9111',
    posted: '2 days ago',
    requiredSkills: ['Patient Care', 'Budgeting', 'Compliance', 'Safety'],
    matchedRole: 'Medical & Health Services Manager'
  },

  // --- Matched to: Home Health & Personal Care Aide (2 jobs) ---
  {
    id: 1,
    title: 'Patient Care Coordinator',
    company: 'Emory Community Health',
    location: 'Atlanta, GA (Hybrid)',
    salary: '$36,000 - $42,000',
    socTarget: '31-1120',
    posted: '1 day ago',
    requiredSkills: ['Patient Care', 'Customer Care', 'Scheduling', 'Medical Records'],
    matchedRole: 'Home Health & Personal Care Aide'
  },
  {
    id: 2,
    title: 'Senior Care Specialist',
    company: 'Comfort Keepers',
    location: 'Alpharetta, GA',
    salary: '$34,000 - $38,000',
    socTarget: '31-1120',
    posted: '2 days ago',
    requiredSkills: ['Patient Care', 'Customer Care', 'CPR & First Aid', 'Safety'],
    matchedRole: 'Home Health & Personal Care Aide'
  },

  // --- Matched to: Heavy & Tractor-Trailer Truck Driver (2 jobs) ---
  {
    id: 3,
    title: 'Regional Logistics Driver',
    company: 'Swift Freight Logistics',
    location: 'Marietta, GA',
    salary: '$52,000 - $65,000',
    socTarget: '53-3032',
    posted: '3 hours ago',
    requiredSkills: ['Commercial Driving (CDL)', 'GPS & Route Planning', 'Logistics', 'Safety'],
    matchedRole: 'Heavy & Tractor-Trailer Truck Driver'
  },
  {
    id: 4,
    title: 'Fleet Delivery Driver',
    company: 'Peachtree Logistics',
    location: 'Atlanta, GA',
    salary: '$48,000 - $56,000',
    socTarget: '53-3032',
    posted: 'Yesterday',
    requiredSkills: ['Vehicle Inspection', 'Time Management', 'Logistics', 'Safety'],
    matchedRole: 'Heavy & Tractor-Trailer Truck Driver'
  },

  // --- Matched to: Customer Service & Support Specialist (2 jobs) ---
  {
    id: 5,
    title: 'Client Support Associate',
    company: 'Metro Financial Services',
    location: 'Remote / Atlanta, GA',
    salary: '$42,000 - $48,000',
    socTarget: '43-4051',
    posted: 'Just now',
    requiredSkills: ['Customer Care', 'Active Listening', 'CRM & Helpdesk Tools', 'Troubleshooting'],
    matchedRole: 'Customer Service & Support Specialist'
  },
  {
    id: 6,
    title: 'Digital Help Desk Assistant',
    company: 'Northside Health System',
    location: 'Sandy Springs, GA',
    salary: '$40,000 - $45,000',
    socTarget: '43-4051',
    posted: '4 hours ago',
    requiredSkills: ['Troubleshooting', 'Data Entry', 'Customer Care'],
    matchedRole: 'Customer Service & Support Specialist'
  }
];