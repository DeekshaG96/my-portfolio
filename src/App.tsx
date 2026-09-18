import { useState, useEffect, type FormEvent } from 'react';
import { 
  Github, 
  Mail, 
  ArrowRight, 
  Download, 
  Copy, 
  Check, 
  ChevronUp, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Code2, 
  Layers, 
  Server, 
  Cloud, 
  Cpu, 
  ShieldCheck, 
  ExternalLink, 
  Send, 
  CheckCircle2, 
  Briefcase, 
  GraduationCap, 
  Calendar,
  Sparkles,
  MousePointer,
  Linkedin,
  FileText
} from 'lucide-react';

interface Project {
  title: string;
  tag: string;
  category: 'Full-Stack' | 'AI & Cloud' | 'Security & Web3' | 'Mobile';
  metric: string;
  desc: string;
  img: string;
  github: string;
  live?: string;
  tech: string[];
}

export default function App() {
  // Theme state: dark / light
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [qualificationTab, setQualificationTab] = useState<'experience' | 'education'>('experience');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const officialResume = {
    name: 'Deeksha G — Master ATS Resume',
    filename: 'Deeksha_G_Resume.pdf',
    url: './Deeksha_G_Resume.pdf?v=20260918_v4',
    desc: 'Verified 1-Page ATS Resume • B.E. Computer Science & Business Systems (Expected June 2027) • Full-Stack & Applied AI'
  };

  // Contact Form State
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 380);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => setDarkMode(!darkMode);

  const copyEmail = () => {
    navigator.clipboard.writeText('deekshagpbangera@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormState({ name: '', email: '', message: '' });
      setFormSubmitted(false);
    }, 4500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const projectCategories = ['All', 'Full-Stack', 'AI & Cloud', 'Security & Web3', 'Mobile'];

  const projects: Project[] = [
    {
      title: 'RazorOps AI',
      tag: 'FinTech / Autonomous Reconciliation',
      category: 'AI & Cloud',
      metric: '5,000+ Records • 19/19 Assertions',
      desc: 'Autonomous financial reconciliation and liquidity intelligence engine built for Razorpay AI Buildathon. Decouples deterministic math from Gemini reasoning across 5,000+ transaction records, reducing manual audit overhead by 40%.',
      img: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=1000',
      github: 'https://github.com/DeekshaG96/razorops-ai',
      live: 'https://razorops-ai.web.app',
      tech: ['React 19', 'Gemini AI', 'Firebase', 'E2E Testing (19/19)', 'Tailwind CSS']
    },
    {
      title: 'NaanStop | Food Delivery Platform',
      tag: 'Full-Stack / Kitchen KDS & Mobile App',
      category: 'Full-Stack',
      metric: '500+ Daily Orders • Sub-250ms Latency',
      desc: 'Complete full-stack commerce platform serving 500+ daily orders with real-time Kitchen Display System (KDS), admin catalog manager, and native Android application with sub-250ms state synchronization.',
      img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=1000',
      github: 'https://github.com/DeekshaG96/food-delivery-app',
      live: 'https://naanstop-customer.vercel.app',
      tech: ['React 19', 'TypeScript', 'Node.js', 'Express', 'Firebase', 'Android']
    },
    {
      title: 'Eco-Track Logistics',
      tag: 'Logistics / Gemini AI',
      category: 'AI & Cloud',
      metric: '10,000+ Points • +25% Resilience',
      desc: 'AI-assisted logistics intelligence platform for supply chain disruption detection and recovery routing. Interfaces Gemini AI reasoning with real-time IoT sensor telemetry (10,000+ points) to cut transit delays by 30%.',
      img: 'https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=1000',
      github: 'https://github.com/DeekshaG96/eco-track-logistics',
      live: 'https://techspire-13303696-1c68d.web.app',
      tech: ['React', 'Gemini AI', 'Firebase', 'Google Maps API', 'CI/CD']
    },
    {
      title: 'The Architectural Ledger',
      tag: 'Enterprise HRMS & Payroll',
      category: 'Full-Stack',
      metric: 'Enterprise RBAC & Auditing',
      desc: 'Enterprise human resource management system featuring role-based access control, departmental salary indexing, attendance tracking, and cryptographically verified employee ledgers.',
      img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000',
      github: 'https://github.com/DeekshaG96/the-architectural-ledger',
      live: 'https://the-architectural-ledger.netlify.app/',
      tech: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite', 'Lucide']
    },
    {
      title: 'Smart Farmer Connect',
      tag: 'AgriTech / Marketplace Platform',
      category: 'Full-Stack',
      metric: '+40% User Engagement',
      desc: 'Scalable full-stack marketplace and crop intelligence portal connecting farmers to agronomy analytics and direct commercial buyers. Features dynamic pricing models and localized weather analytics (+40% user engagement). Built for Srinathon 2.0.',
      img: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=1000',
      github: 'https://github.com/DeekshaG96/smart-farm-connect',
      live: 'https://v0-smart-farm-connect-ui.vercel.app/',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel', 'REST API']
    },
    {
      title: 'VotX Protocol',
      tag: 'Web3 / Cryptographic Governance',
      category: 'Security & Web3',
      metric: '10,000+ Anonymous Ballots',
      desc: 'Decentralized electronic voting platform deploying gas-optimized Solidity smart contracts on Ethereum Sepolia with cryptographic verification for voter anonymity and tamper-proof ballot verification across 10,000+ simulated voters.',
      img: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000',
      github: 'https://github.com/DeekshaG96/blockchain_proj',
      live: 'https://blockchainproj-7nj1.vercel.app',
      tech: ['Solidity', 'Ethereum Sepolia', 'Ethers.js', 'React', 'MetaMask']
    },
    {
      title: 'SIT Global Success Hub',
      tag: 'EdTech / Predictive MLOps',
      category: 'AI & Cloud',
      metric: 'Real-Time ML Forecasting',
      desc: 'Interactive predictive machine learning portal analyzing educational indicators to forecast student retention and academic performance in real time with feature-importance visual explainability.',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
      github: 'https://github.com/DeekshaG96/Student-Success-Dashboard',
      live: 'https://student-success-dashboard-cpnswmcahqbt6zwqkhwghy.streamlit.app/',
      tech: ['Python', 'Streamlit', 'Scikit-Learn', 'Pandas', 'Matplotlib']
    }
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const services = [
    {
      title: 'Full-Stack Web Development',
      desc: 'Architecting scalable, responsive web applications using React 19, TypeScript, Next.js, and Node.js RESTful APIs with clean design architecture.',
      icon: <Layers className="w-8 h-8 text-sky-500" />
    },
    {
      title: 'Applied AI & GenAI Systems',
      desc: 'Deploying generative AI workflows with Google Gemini 2.5 Flash, structured prompt engineering, and scikit-learn machine learning inference.',
      icon: <Cpu className="w-8 h-8 text-sky-500" />
    },
    {
      title: 'Cloud & DevOps Architecture',
      desc: 'Designing resilient cloud topologies on AWS Core and Google Cloud Platform with automated GitHub Actions CI/CD workflows.',
      icon: <Cloud className="w-8 h-8 text-sky-500" />
    },
    {
      title: 'Network Security & Zero-Trust',
      desc: 'Configuring enterprise firewalls, Zero-Trust Network Access (ZTNA) policies, and rigorous security posture monitoring learned at Fortinet & Palo Alto.',
      icon: <ShieldCheck className="w-8 h-8 text-sky-500" />
    }
  ];

  const skillGroups = [
    {
      category: 'Frontend Development',
      icon: <Code2 size={20} className="text-sky-500" />,
      skills: [
        { name: 'React 19', level: 'Advanced' },
        { name: 'TypeScript', level: 'Proficient' },
        { name: 'Next.js', level: 'Proficient' },
        { name: 'Tailwind CSS', level: 'Advanced' },
        { name: 'HTML5 & CSS3', level: 'Advanced' },
        { name: 'Vite & Webpack', level: 'Proficient' }
      ]
    },
    {
      category: 'Backend & Cloud',
      icon: <Server size={20} className="text-sky-500" />,
      skills: [
        { name: 'Node.js & Express', level: 'Proficient' },
        { name: 'AWS (EC2, S3, VPC)', level: 'Certified' },
        { name: 'Google Cloud (ACE)', level: 'Certified' },
        { name: 'Docker & Containers', level: 'Intermediate' },
        { name: 'REST APIs & Postman', level: 'Advanced' },
        { name: 'SQL & Database Design', level: 'Proficient' }
      ]
    },
    {
      category: 'Applied AI & Security',
      icon: <Cpu size={20} className="text-sky-500" />,
      skills: [
        { name: 'Google Gemini AI', level: 'Advanced' },
        { name: 'Python (NumPy, Pandas)', level: 'Advanced' },
        { name: 'Scikit-Learn ML', level: 'Proficient' },
        { name: 'Prompt Engineering', level: 'Advanced' },
        { name: 'Fortinet ZTNA', level: 'Grade O' },
        { name: 'Palo Alto Security', level: 'Grade E' }
      ]
    }
  ];

  const certifications = [
    'Pearson: Artificial Intelligence (PLD3-uSKY)',
    'Pearson: Data Analytics (waLMM-H9e3)',
    'Pearson: JavaScript (m39T-uTnz)',
    'Pearson: HTML5 App Dev (58VV-4wLq)',
    'Google Cloud ACE',
    'AWS Academy Cloud Architect',
    'Fortinet Network Security (Grade O)',
    'Postman API Student Expert',
    'Vertex AI Prompt Specialist'
  ];

  const experienceItems = [
    {
      title: 'Open Source Software Contributor',
      company: 'GirlScript Summer of Code (GSSoC)',
      date: 'May 2024 - Aug 2024',
      badge: 'Open Source',
      desc: 'Contributing core features and bug fixes to developer and security tooling open-source repositories with automated GitHub Actions CI/CD workflows.'
    },
    {
      title: 'Network Security Engineering Intern',
      company: 'Fortinet (via AICTE & EduSkills)',
      date: 'Oct 2024 - Dec 2024',
      badge: 'Grade O (Outstanding, 90-100%)',
      desc: 'Configured stateful firewall inspection rules, Zero-Trust Network Access (ZTNA) perimeters, and simulated enterprise threat vectors.'
    },
    {
      title: 'Cybersecurity Engineering Intern',
      company: 'Palo Alto Networks (via AICTE & EduSkills)',
      date: 'Jan 2025 - Mar 2025',
      badge: 'Grade E (Excellent, 80-89%)',
      desc: 'Analyzed real-time network traffic telemetry, investigated simulated SOC alarms, and engineered automated incident response playbooks.'
    },
    {
      title: 'AI Product Intern',
      company: 'TechSaksham (Microsoft & SAP Initiative)',
      date: 'Nov 2024 - Dec 2024',
      badge: '94% ML Accuracy',
      desc: 'Engineered deep learning computer vision pipelines for agricultural anomaly detection, achieving 94% prediction accuracy across 10,000+ records.'
    },
    {
      title: 'Cloud Infrastructure Intern',
      company: 'AWS Academy',
      date: 'Oct 2024 - Dec 2024',
      badge: 'Grade A Evaluation',
      desc: 'Architected resilient cloud infrastructures utilizing AWS Core Services (EC2, S3, VPC, RDS, IAM) with multi-AZ fault tolerance and CloudWatch alarms.'
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--body-color)] text-[var(--text-color)] font-sans bg-grid relative selection:bg-sky-500/20 selection:text-sky-600">
      
      {/* ==================== HEADER / NAVBAR ==================== */}
      <header className="sticky top-0 z-50 bg-[var(--container-color)]/90 backdrop-blur-md border-b border-[var(--border-color)]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo with Signature Script Font & Accent Dot */}
          <a 
            href="#home" 
            className="font-signature text-3xl sm:text-4xl text-[var(--title-color)] hover:text-sky-500 transition-all flex items-center select-none leading-none tracking-normal"
          >
            <span>Deeksha</span><span className="text-sky-500 font-sans text-2xl font-black leading-none ml-0.5">.</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-semibold uppercase tracking-wider text-[var(--text-color)]">
            <a href="#home" className="hover:text-sky-500 transition-colors">Home</a>
            <a href="#about" className="hover:text-sky-500 transition-colors">About</a>
            <a href="#skills" className="hover:text-sky-500 transition-colors">Skills</a>
            <a href="#qualification" className="hover:text-sky-500 transition-colors">Qualification</a>
            <a href="#services" className="hover:text-sky-500 transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-sky-500 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-sky-500 transition-colors">Contact</a>

            <div className="flex items-center gap-3 pl-4 border-l border-[var(--border-color)]">
              {/* Dark/Light Mode Switcher */}
              <button 
                onClick={toggleTheme}
                aria-label="Toggle Theme"
                className="w-9 h-9 rounded-xl flex items-center justify-center text-[var(--text-color)] hover:text-sky-500 hover:bg-[var(--border-color)]/40 transition-colors"
                title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                {darkMode ? <Sun size={17} className="text-amber-400" /> : <Moon size={17} />}
              </button>

              {/* GitHub Link */}
              <a 
                href="https://github.com/DeekshaG96" 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-xl flex items-center justify-center text-[var(--text-color)] hover:text-sky-500 hover:bg-[var(--border-color)]/40 transition-colors"
                title="GitHub Profile"
              >
                <Github size={17} />
              </a>

              {/* LinkedIn Link */}
              <a 
                href="https://linkedin.com/in/deeksha-g-cybersec" 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-xl flex items-center justify-center text-[var(--text-color)] hover:text-sky-500 hover:bg-[var(--border-color)]/40 transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin size={17} />
              </a>

              {/* Interactive Resume Portal Button */}
              <button 
                onClick={() => setIsResumeModalOpen(true)}
                className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-sm"
              >
                <FileText size={13} /> Resume
              </button>
            </div>
          </nav>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button 
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2 rounded-lg text-[var(--text-color)] hover:bg-[var(--border-color)]/40"
            >
              {darkMode ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} />}
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="p-2 rounded-lg text-[var(--text-color)] hover:bg-[var(--border-color)]/40"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {isMenuOpen && (
          <div className="md:hidden bg-[var(--container-color)] border-b border-[var(--border-color)] px-6 py-5 flex flex-col gap-4 text-sm font-semibold shadow-xl">
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="hover:text-sky-500">Home</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-sky-500">About</a>
            <a href="#skills" onClick={() => setIsMenuOpen(false)} className="hover:text-sky-500">Skills</a>
            <a href="#qualification" onClick={() => setIsMenuOpen(false)} className="hover:text-sky-500">Qualification</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="hover:text-sky-500">Services</a>
            <a href="#portfolio" onClick={() => setIsMenuOpen(false)} className="hover:text-sky-500">Projects</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-sky-500">Contact</a>
            <div className="flex items-center gap-3 pt-2 border-t border-[var(--border-color)]">
              <a 
                href="https://github.com/DeekshaG96" 
                target="_blank" 
                rel="noreferrer" 
                className="flex-1 py-2 rounded-xl b-card flex items-center justify-center gap-1.5 text-xs font-semibold hover:text-sky-500 transition-colors"
              >
                <Github size={15} /> GitHub
              </a>
              <a 
                href="https://linkedin.com/in/deeksha-g-cybersec" 
                target="_blank" 
                rel="noreferrer" 
                className="flex-1 py-2 rounded-xl b-card flex items-center justify-center gap-1.5 text-xs font-semibold hover:text-sky-500 transition-colors"
              >
                <Linkedin size={15} /> LinkedIn
              </a>
            </div>
            <button 
              onClick={() => { setIsResumeModalOpen(true); setIsMenuOpen(false); }}
              className="bg-sky-500 text-white text-center py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider mt-1 flex items-center justify-center gap-2 shadow-sm"
            >
              <FileText size={14} /> View & Download Resume
            </button>
          </div>
        )}
      </header>

      {/* ==================== 1. HOME / HERO SECTION ==================== */}
      <section id="home" className="max-w-6xl mx-auto px-6 pt-16 sm:pt-24 pb-20 relative">
        <div className="grid md:grid-cols-[auto_1fr_auto] items-center gap-8 sm:gap-12">
          
          {/* Vertical Socials on Left (Iconic Bedimcode Style) */}
          <div className="hidden md:flex flex-col items-center gap-4 text-[var(--text-color-light)]">
            <a 
              href="https://github.com/DeekshaG96" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-sky-500 transition-transform hover:-translate-y-1"
              title="GitHub"
            >
              <Github size={19} />
            </a>
            <a 
              href="https://linkedin.com/in/deeksha-g-cybersec" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-sky-500 transition-transform hover:-translate-y-1"
              title="LinkedIn"
            >
              <Linkedin size={19} />
            </a>
            <a 
              href="mailto:deekshagpbangera@gmail.com" 
              className="hover:text-sky-500 transition-transform hover:-translate-y-1"
              title="Send Email"
            >
              <Mail size={19} />
            </a>
            <div className="w-[1.5px] h-10 bg-[var(--border-color)] mt-1" />
            <span className="font-signature text-2xl text-[var(--text-color-light)] select-none [writing-mode:vertical-rl] rotate-180 tracking-widest opacity-80 pt-2 hover:text-sky-500 transition-colors">
              Deeksha
            </span>
          </div>

          {/* Hero Content (Center) */}
          <div className="space-y-4 max-w-xl text-center md:text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-600 dark:text-sky-400 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Software & AI Engineer • Expected June 2027 • Open for Roles</span>
            </div>

            <div className="space-y-1">
              <h3 className="text-sm font-semibold tracking-wider uppercase text-[var(--text-color-light)]">
                Hello, I'm
              </h3>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-headline text-[var(--title-color)] tracking-tight">
                Deeksha G.
              </h1>
              <h2 className="text-lg sm:text-xl font-medium text-sky-500 font-headline pt-1">
                Software Engineer & AI Architect
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[var(--text-color)] leading-relaxed pt-1">
              Engineering high-resilience full-stack web platforms, cloud architectures, and applied AI systems. Pursuing B.E. in Computer Science & Business Systems (CSBS) at Srinivas Institute of Technology (SIT), Mangaluru.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-4">
              <a 
                href="#contact" 
                className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-sky-500/20 flex items-center gap-2 group"
              >
                Say Hello <Send size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <button 
                onClick={() => setIsResumeModalOpen(true)}
                className="b-card px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-[var(--title-color)] hover:text-sky-500 transition-all flex items-center gap-2 shadow-sm"
              >
                <FileText size={14} className="text-sky-500" /> View & Download CV
              </button>
              <button 
                onClick={copyEmail}
                className="px-4 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 bg-sky-500/10 hover:bg-sky-500/20 transition-all flex items-center gap-1.5"
                title="Copy Email Address"
              >
                {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                {copied ? 'Copied' : 'Copy Email'}
              </button>
            </div>
          </div>

          {/* Right Column: Signature Bedimcode Blob Avatar Frame */}
          <div className="flex justify-center order-first md:order-last">
            <div className="relative">
              <div className="home__blob overflow-hidden p-1.5">
                <img 
                  src="./assets/avatar.jpg" 
                  alt="Deeksha G" 
                  className="w-full h-full object-cover object-top rounded-[60%_40%_30%_70%/60%_30%_70%_40%]"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 b-card px-4 py-2 rounded-xl text-xs font-bold text-[var(--title-color)] flex items-center gap-2 shadow-lg">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span>Open for Internships</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Scroll Down Indicator (Bedimcode Signature) */}
        <div className="hidden sm:flex justify-center mt-16 text-xs font-semibold text-[var(--text-color-light)]">
          <a href="#about" className="flex items-center gap-2 hover:text-sky-500 transition-colors">
            <MousePointer size={15} className="animate-bounce text-sky-500" />
            <span>Scroll down</span>
            <ArrowRight size={13} />
          </a>
        </div>
      </section>

      {/* ==================== 2. ABOUT SECTION ==================== */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-16">
        <span className="section__subtitle">My Introduction</span>
        <h2 className="section__title">About Me</h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* About Image with Stats Cards */}
          <div className="relative flex justify-center">
            <div className="w-64 sm:w-72 aspect-square rounded-3xl overflow-hidden b-card p-2">
              <img 
                src="./assets/avatar.jpg" 
                alt="Deeksha G" 
                className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* About Information & Stats */}
          <div className="space-y-5">
            {/* 3 Bedimcode Experience Cards */}
            <div className="grid grid-cols-3 gap-3">
              <div className="b-card p-3.5 rounded-2xl text-center">
                <Briefcase className="w-5 h-5 text-sky-500 mx-auto mb-1" />
                <h4 className="text-xs font-bold text-[var(--title-color)] font-headline">Experience</h4>
                <span className="text-[11px] text-[var(--text-color-light)]">5 Internships</span>
              </div>
              <div className="b-card p-3.5 rounded-2xl text-center">
                <CheckCircle2 className="w-5 h-5 text-sky-500 mx-auto mb-1" />
                <h4 className="text-xs font-bold text-[var(--title-color)] font-headline">Completed</h4>
                <span className="text-[11px] text-[var(--text-color-light)]">10+ Projects</span>
              </div>
              <div className="b-card p-3.5 rounded-2xl text-center">
                <GraduationCap className="w-5 h-5 text-sky-500 mx-auto mb-1" />
                <h4 className="text-xs font-bold text-[var(--title-color)] font-headline">Degree</h4>
                <span className="text-[11px] text-[var(--text-color-light)]">B.E. CSBS '27</span>
              </div>
            </div>

            {/* Narrative Bio */}
            <div className="space-y-3 text-sm text-[var(--text-color)] leading-relaxed">
              <p>
                I am a Computer Science & Business Systems (CSBS) engineering undergraduate at Srinivas Institute of Technology (SIT), Mangaluru (Expected June 2027, VTU affiliated).
              </p>
              <p>
                I specialize in building production-ready web applications, integrating applied AI, and deploying cloud architectures. Having completed enterprise internships across Fortinet (Grade O), Palo Alto Networks (Grade E), Microsoft TechSaksham (94% accuracy), AWS Academy (Grade A), and open-source contributions at GSSoC (May 2024 – Aug 2024), I build with clean architecture and strict quality standards.
              </p>
            </div>

            {/* Core Competencies Checklist */}
            <div className="grid grid-cols-2 gap-2 text-xs text-[var(--text-color)] pt-1">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-sky-500 shrink-0" />
                <span>Full-Stack (React 19, Next.js)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-sky-500 shrink-0" />
                <span>Applied AI & LLM Systems</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-sky-500 shrink-0" />
                <span>Cloud (AWS & Google Cloud)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-sky-500 shrink-0" />
                <span>Network Security (ZTNA)</span>
              </div>
            </div>

            {/* Action */}
            <div className="pt-2">
              <button 
                onClick={() => setIsResumeModalOpen(true)}
                className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all inline-flex items-center gap-2 shadow-sm"
              >
                <FileText size={14} /> View Master Resume (PDF)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 3. SKILLS SECTION ==================== */}
      <section id="skills" className="max-w-5xl mx-auto px-6 py-16">
        <span className="section__subtitle">My Technical Level</span>
        <h2 className="section__title">Skills & Competencies</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div key={group.category} className="b-card p-6 rounded-2xl space-y-5">
              <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-3">
                <h3 className="text-sm font-bold font-headline text-[var(--title-color)]">
                  {group.category}
                </h3>
                {group.icon}
              </div>

              <div className="grid grid-cols-2 gap-3.5">
                {group.skills.map((s) => (
                  <div key={s.name} className="flex items-start gap-2">
                    <CheckCircle2 size={15} className="text-sky-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-[var(--title-color)] leading-tight">{s.name}</h4>
                      <span className="text-[11px] text-[var(--text-color-light)]">{s.level}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Cloud */}
        <div className="b-card p-6 rounded-2xl mt-8 text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-sky-500">
            <Sparkles size={15} />
            <span>Certifications & Verified Badges</span>
          </div>
          <div className="flex flex-wrap justify-center gap-2 pt-1">
            {certifications.map((c) => (
              <span 
                key={c} 
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[var(--body-color)] border border-[var(--border-color)] text-[var(--text-color)] hover:border-sky-500 hover:text-sky-500 transition-colors"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 4. QUALIFICATION SECTION (Bedimcode Timeline) ==================== */}
      <section id="qualification" className="max-w-4xl mx-auto px-6 py-16">
        <span className="section__subtitle">My Personal Journey</span>
        <h2 className="section__title">Qualification</h2>

        {/* Interactive Tabs */}
        <div className="flex justify-center gap-6 mb-12">
          <button
            onClick={() => setQualificationTab('experience')}
            className={`flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-colors ${
              qualificationTab === 'experience'
                ? 'text-sky-500 border-b-2 border-sky-500 pb-1'
                : 'text-[var(--text-color-light)] hover:text-[var(--title-color)]'
            }`}
          >
            <Briefcase size={18} />
            <span>Experience</span>
          </button>

          <button
            onClick={() => setQualificationTab('education')}
            className={`flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-colors ${
              qualificationTab === 'education'
                ? 'text-sky-500 border-b-2 border-sky-500 pb-1'
                : 'text-[var(--text-color-light)] hover:text-[var(--title-color)]'
            }`}
          >
            <GraduationCap size={18} />
            <span>Education</span>
          </button>
        </div>

        {/* Experience Timeline */}
        {qualificationTab === 'experience' && (
          <div className="space-y-6">
            {experienceItems.map((item, idx) => (
              <div key={idx} className="b-card p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="text-base font-bold font-headline text-[var(--title-color)] pt-1">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-sky-500">{item.company}</p>
                  <p className="text-xs text-[var(--text-color)] pt-1 leading-relaxed max-w-xl">
                    {item.desc}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[var(--text-color-light)] font-medium shrink-0 self-start sm:self-center">
                  <Calendar size={14} className="text-sky-500" />
                  <span>{item.date}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Education Tab (Strictly ZERO CGPA!) */}
        {qualificationTab === 'education' && (
          <div className="space-y-6">
            <div className="b-card p-6 sm:p-8 rounded-2xl space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--border-color)] pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-500">Bachelor of Engineering (B.E.)</span>
                  <h3 className="text-lg sm:text-xl font-bold font-headline text-[var(--title-color)] mt-0.5">
                    Computer Science & Business Systems (CSBS)
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-[var(--text-color)]">
                    Srinivas Institute of Technology (SIT), Mangaluru
                  </p>
                </div>
                <div className="text-left sm:text-right">
                  <span className="inline-block px-3 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 rounded-full text-xs font-bold">
                    Expected June 2027
                  </span>
                  <p className="text-xs text-[var(--text-color-light)] mt-1 flex items-center sm:justify-end gap-1">
                    <Calendar size={13} className="text-sky-500" /> Affiliated to VTU Belagavi • AICTE Approved
                  </p>
                </div>
              </div>

              <div className="space-y-2 pt-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-color-light)]">
                  Core Engineering Curriculum
                </span>
                <p className="text-xs text-[var(--text-color)] leading-relaxed">
                  Data Structures & Algorithms, Operating Systems, Database Management Systems, Computer Networks, Software Engineering, Object-Oriented Programming (Java / C++), Cloud Computing, and Machine Learning Systems.
                </p>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* ==================== 5. SERVICES SECTION (Bedimcode Style) ==================== */}
      <section id="services" className="max-w-5xl mx-auto px-6 py-16">
        <span className="section__subtitle">What I Offer</span>
        <h2 className="section__title">Services & Domains</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((svc) => (
            <div key={svc.title} className="b-card p-6 rounded-2xl flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center">
                  {svc.icon}
                </div>
                <h3 className="text-sm font-bold font-headline text-[var(--title-color)]">
                  {svc.title}
                </h3>
                <p className="text-xs text-[var(--text-color)] leading-relaxed">
                  {svc.desc}
                </p>
              </div>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-500 hover:text-sky-600 uppercase tracking-wider transition-colors pt-2"
              >
                Inquire <ArrowRight size={13} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== 6. PORTFOLIO / PROJECTS SECTION ==================== */}
      <section id="portfolio" className="max-w-5xl mx-auto px-6 py-16">
        <span className="section__subtitle">Most Recent Work</span>
        <h2 className="section__title">Featured Projects</h2>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                activeCategory === cat
                  ? 'bg-sky-500 text-white shadow-md shadow-sky-500/20 font-bold'
                  : 'b-card text-[var(--text-color)] hover:text-sky-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map((p) => (
            <div 
              key={p.title} 
              className="b-card rounded-2xl overflow-hidden flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img 
                    src={p.img} 
                    alt={p.title} 
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" 
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-3 right-3 bg-[var(--container-color)]/95 backdrop-blur-md px-2.5 py-1 rounded-lg text-[11px] font-bold text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 shadow-xs">
                    {p.metric}
                  </span>
                </div>
                
                <div className="p-6 space-y-3">
                  <div>
                    <span className="text-[11px] font-bold text-sky-500 uppercase tracking-wider block">{p.tag}</span>
                    <h3 className="text-lg font-bold font-headline text-[var(--title-color)] mt-0.5">{p.title}</h3>
                  </div>

                  <p className="text-[var(--text-color)] text-xs sm:text-sm leading-relaxed">
                    {p.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {p.tech.map((t) => (
                      <span 
                        key={t} 
                        className="text-[11px] bg-[var(--body-color)] text-[var(--text-color)] px-2.5 py-0.5 rounded-md font-medium border border-[var(--border-color)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-6 pb-5 pt-2 flex items-center gap-5 border-t border-[var(--border-color)]">
                <a 
                  href={p.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-xs font-bold text-[var(--title-color)] hover:text-sky-500 flex items-center gap-1.5 transition-colors uppercase tracking-wider"
                >
                  <Github size={15} /> Source Code
                </a>
                {p.live && (
                  <a 
                    href={p.live} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-xs font-bold text-sky-500 hover:text-sky-600 flex items-center gap-1.5 transition-colors uppercase tracking-wider"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== 7. CONTACT ME SECTION ==================== */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-16">
        <span className="section__subtitle">Get In Touch</span>
        <h2 className="section__title">Contact Me</h2>

        <div className="grid md:grid-cols-[1fr_1.3fr] gap-8 items-start">
          {/* Talk to Me Cards (Bedimcode Style) */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold font-headline uppercase tracking-wider text-[var(--title-color)] text-center md:text-left">
              Talk to me
            </h3>

            {/* Email Card */}
            <div className="b-card p-5 rounded-2xl text-center space-y-2">
              <Mail size={22} className="mx-auto text-sky-500" />
              <h4 className="text-xs font-bold text-[var(--title-color)]">Email</h4>
              <span className="text-xs text-[var(--text-color)] block break-all font-medium">deekshagpbangera@gmail.com</span>
              <button 
                onClick={copyEmail}
                className="inline-flex items-center gap-1 text-xs font-bold text-sky-500 hover:text-sky-600 uppercase tracking-wider transition-colors pt-1"
              >
                {copied ? <Check size={13} className="text-emerald-500" /> : <Copy size={13} />}
                <span>{copied ? 'Copied to clipboard' : 'Copy email address'}</span>
              </button>
            </div>

            {/* GitHub Card */}
            <div className="b-card p-5 rounded-2xl text-center space-y-2">
              <Github size={22} className="mx-auto text-sky-500" />
              <h4 className="text-xs font-bold text-[var(--title-color)]">GitHub</h4>
              <span className="text-xs text-[var(--text-color)] block font-medium">github.com/DeekshaG96</span>
              <a 
                href="https://github.com/DeekshaG96" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-1 text-xs font-bold text-sky-500 hover:text-sky-600 uppercase tracking-wider transition-colors pt-1"
              >
                <span>Visit Profile</span> <ArrowRight size={13} />
              </a>
            </div>

            {/* LinkedIn Card */}
            <div className="b-card p-5 rounded-2xl text-center space-y-2">
              <Linkedin size={22} className="mx-auto text-sky-500" />
              <h4 className="text-xs font-bold text-[var(--title-color)]">LinkedIn</h4>
              <span className="text-xs text-[var(--text-color)] block font-medium">deeksha-g-cybersec</span>
              <a 
                href="https://linkedin.com/in/deeksha-g-cybersec" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-1 text-xs font-bold text-sky-500 hover:text-sky-600 uppercase tracking-wider transition-colors pt-1"
              >
                <span>Connect with me</span> <ArrowRight size={13} />
              </a>
            </div>

            {/* Availability Pill */}
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-semibold text-center flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Immediate Full-Time & Internship Roles</span>
            </div>
          </div>

          {/* Direct Message Form (Bedimcode Style) */}
          <div className="b-card p-6 sm:p-8 rounded-2xl space-y-4">
            <h3 className="text-sm font-bold font-headline uppercase tracking-wider text-[var(--title-color)]">
              Write me your message
            </h3>

            {formSubmitted ? (
              <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 p-6 rounded-xl text-center space-y-2">
                <CheckCircle2 size={28} className="mx-auto text-emerald-500" />
                <p className="font-bold text-sm">Message Sent Successfully!</p>
                <p className="text-xs">Thank you for reaching out. I'll get back to you promptly.</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[var(--text-color)]">Your Name</label>
                  <input 
                    type="text" 
                    required 
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full bg-[var(--body-color)] border border-[var(--border-color)] rounded-xl px-4 py-3 text-xs sm:text-sm text-[var(--title-color)] focus:border-sky-500 outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[var(--text-color)]">Email Address</label>
                  <input 
                    type="email" 
                    required 
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="Enter your email"
                    className="w-full bg-[var(--body-color)] border border-[var(--border-color)] rounded-xl px-4 py-3 text-xs sm:text-sm text-[var(--title-color)] focus:border-sky-500 outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[var(--text-color)]">Message</label>
                  <textarea 
                    rows={4} 
                    required 
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Hi Deeksha, I'd like to discuss a role..."
                    className="w-full bg-[var(--body-color)] border border-[var(--border-color)] rounded-xl px-4 py-3 text-xs sm:text-sm text-[var(--title-color)] focus:border-sky-500 outline-none transition-colors resize-none"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-sky-500 hover:bg-sky-600 text-white py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md shadow-sky-500/20"
                >
                  Send Message <Send size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="border-t border-[var(--border-color)] bg-[var(--container-color)] py-12 text-center text-xs text-[var(--text-color-light)]">
        <div className="max-w-5xl mx-auto px-6 space-y-6">
          <div>
            <h2 className="font-signature text-3xl sm:text-4xl text-[var(--title-color)]">
              Deeksha<span className="text-sky-500 font-sans text-2xl font-black ml-0.5">.</span>
            </h2>
            <p className="text-xs text-[var(--text-color-light)] mt-1">
              Software Engineer • Applied AI & Cloud Architecture
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-xs font-semibold uppercase tracking-wider text-[var(--text-color)]">
            <a href="#about" className="hover:text-sky-500 transition-colors">About</a>
            <a href="#skills" className="hover:text-sky-500 transition-colors">Skills</a>
            <a href="#qualification" className="hover:text-sky-500 transition-colors">Qualification</a>
            <a href="#services" className="hover:text-sky-500 transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-sky-500 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-sky-500 transition-colors">Contact</a>
          </div>

          {/* Footer Social Links */}
          <div className="flex justify-center items-center gap-3 text-[var(--text-color)] pt-1">
            <a 
              href="https://github.com/DeekshaG96" 
              target="_blank" 
              rel="noreferrer" 
              className="w-8 h-8 rounded-lg b-card flex items-center justify-center hover:text-sky-500 transition-colors"
              title="GitHub"
            >
              <Github size={15} />
            </a>
            <a 
              href="https://linkedin.com/in/deeksha-g-cybersec" 
              target="_blank" 
              rel="noreferrer" 
              className="w-8 h-8 rounded-lg b-card flex items-center justify-center hover:text-sky-500 transition-colors"
              title="LinkedIn"
            >
              <Linkedin size={15} />
            </a>
            <a 
              href="mailto:deekshagpbangera@gmail.com" 
              className="w-8 h-8 rounded-lg b-card flex items-center justify-center hover:text-sky-500 transition-colors"
              title="Email"
            >
              <Mail size={15} />
            </a>
          </div>

          <p className="text-[11px] font-medium pt-4 border-t border-[var(--border-color)]/60 max-w-md mx-auto">
            &copy; {new Date().getFullYear()} Deeksha G. All rights reserved. Crafted with Simple, Organized & Modern Engineering.
          </p>
        </div>
      </footer>

      {/* Floating Scroll To Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-xl bg-sky-500 text-white hover:bg-sky-600 shadow-lg shadow-sky-500/25 flex items-center justify-center transition-all hover:-translate-y-1"
        >
          <ChevronUp size={20} />
        </button>
      )}

      {/* ==================== RESUME PORTAL MODAL ==================== */}
      {isResumeModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md">
          <div className="bg-[var(--container-color)] border border-[var(--border-color)] rounded-3xl w-full max-w-5xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden">
            
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-[var(--border-color)] flex items-center justify-between bg-[var(--body-color)]/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-sky-500/10 text-sky-500 flex items-center justify-center shadow-inner">
                  <FileText size={20} />
                </div>
                <div>
                  <h3 className="text-base font-bold font-headline text-[var(--title-color)]">
                    Official Technical Resume (Master ATS)
                  </h3>
                  <p className="text-xs text-[var(--text-color-light)]">
                    Verified 1-Page Technical Resume • Strictly Zero CGPA Mention • Batch 2027
                  </p>
                </div>
              </div>

              <button 
                onClick={() => setIsResumeModalOpen(false)}
                className="p-2 rounded-xl text-[var(--text-color)] hover:bg-[var(--border-color)] transition-colors"
                aria-label="Close Resume Modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Action Bar */}
            <div className="px-6 py-3 border-b border-[var(--border-color)] flex flex-wrap items-center justify-between gap-3 bg-[var(--container-color)]">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-xl text-xs font-semibold bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
                  Master Full-Stack & Applied AI Resume
                </span>
                <span className="text-xs text-[var(--text-color-light)] hidden sm:inline">
                  • 1 Page • Pure ASCII • ATS Grade A+
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <a
                  href={officialResume.url}
                  download={officialResume.filename}
                  className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm"
                >
                  <Download size={13} /> Download PDF
                </a>
                <a
                  href={officialResume.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="b-card px-3.5 py-2 rounded-xl text-xs font-bold text-[var(--title-color)] hover:text-sky-500 transition-all flex items-center gap-1.5"
                >
                  <ExternalLink size={13} /> Open Tab
                </a>
              </div>
            </div>

            {/* Embedded Live PDF Viewer */}
            <div className="flex-1 p-4 bg-[var(--body-color)] overflow-hidden flex flex-col">
              <iframe
                src={officialResume.url}
                className="w-full flex-1 rounded-2xl border border-[var(--border-color)] shadow-inner bg-slate-950 min-h-[520px]"
                title="Deeksha G Official Resume Viewer"
              />
            </div>

            {/* Modal Footer with Verification Links */}
            <div className="px-6 py-3 border-t border-[var(--border-color)] bg-[var(--container-color)] flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-[var(--text-color-light)]">
                <Sparkles size={14} className="text-sky-500" />
                <span>Verified Credentials:</span>
                <span className="font-mono text-sky-600 dark:text-sky-400 font-bold">PLD3-uSKY (AI)</span>
                <span>•</span>
                <span className="font-mono text-sky-600 dark:text-sky-400 font-bold">waLMM-H9e3 (Data)</span>
                <span>•</span>
                <span className="font-mono text-sky-600 dark:text-sky-400 font-bold">m39T-uTnz (JS)</span>
              </div>
              <a
                href="https://www.linkedin.com/in/deeksha-g-cybersec/details/certifications/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-500 hover:underline font-bold flex items-center gap-1"
              >
                Verify Credentials on LinkedIn <ExternalLink size={12} />
              </a>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
