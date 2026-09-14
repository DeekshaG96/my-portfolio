import { useState, type FormEvent } from 'react';
import { 
  Github, 
  Mail, 
  ArrowRight, 
  Menu, 
  X,
  Download,
  Copy,
  Check,
  ChevronUp,
  Sparkles,
  ExternalLink,
  Code2,
  Send,
  CheckCircle2,
  Terminal,
  Server,
  Cloud,
  Layers,
  Cpu
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Contact Form State
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

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

  const stats = [
    { label: 'Academic Batch', value: '2023–27', note: '7th Sem • B.E. CSBS' },
    { label: 'Internships', value: '5', note: 'AICTE, Fortinet & Industry' },
    { label: 'Live Projects', value: '10+', note: 'Full 0→1 Deployments' },
    { label: 'Cloud & AI Badges', value: '18+', note: 'Google Cloud & AWS' }
  ];

  const skillDomains = [
    {
      category: 'Languages',
      icon: <Terminal size={17} className="text-sky-600" />,
      items: ['Python', 'Java', 'C++', 'TypeScript', 'JavaScript', 'SQL', 'Solidity']
    },
    {
      category: 'Frontend & Web',
      icon: <Layers size={17} className="text-sky-600" />,
      items: ['React 19', 'Next.js', 'Tailwind CSS', 'Vite', 'HTML5 / CSS3', 'Responsive UI']
    },
    {
      category: 'Backend & APIs',
      icon: <Server size={17} className="text-sky-600" />,
      items: ['Node.js', 'Express.js', 'REST APIs', 'Postman API', 'Firebase', 'Supabase']
    },
    {
      category: 'Cloud & DevOps',
      icon: <Cloud size={17} className="text-sky-600" />,
      items: ['AWS (EC2, S3, VPC, IAM)', 'Google Cloud (ACE)', 'Docker', 'Git / GitHub', 'GitHub Actions']
    },
    {
      category: 'AI & Security',
      icon: <Cpu size={17} className="text-sky-600" />,
      items: ['Google Gemini 2.5 Flash', 'Prompt Engineering', 'Scikit-Learn ML', 'Zero-Trust (ZTNA)', 'Firewalls']
    }
  ];

  const experience = [
    { 
      date: 'May 2026 - Present', 
      title: 'Open Source Software Contributor', 
      company: 'GirlScript Summer of Code (GSSoC)',
      badge: 'Open Source',
      points: [
        'Contributing core features and bug fixes to developer and security tooling open-source repositories.',
        'Configured automated GitHub Actions CI/CD workflows for linting, testing, and branch validation, cutting review cycles by 25%.',
        'Collaborating with distributed engineering teams on modern pull request reviews and semantic releases.'
      ]
    },
    { 
      date: 'Oct 2025 - Dec 2025', 
      title: 'Network Security Engineering Intern', 
      company: 'Fortinet (via AICTE & EduSkills)',
      badge: 'Grade O (Outstanding)',
      points: [
        'Completed 10-week enterprise security program with Grade O (Outstanding, 90-100%).',
        'Configured stateful firewall inspection rules, Zero-Trust Network Access (ZTNA), and simulated threat vectors.',
        'Hardened virtualized network perimeters and conducted automated vulnerability assessments.'
      ]
    },
    { 
      date: 'Jan 2025 - Mar 2025', 
      title: 'Cybersecurity Engineering Intern', 
      company: 'Palo Alto Networks (via AICTE & EduSkills)',
      badge: 'Grade E (Excellent)',
      points: [
        'Completed intensive 10-week cybersecurity track, achieving Grade E (Excellent, 80-89%).',
        'Analyzed real-time network traffic telemetry, investigated simulated SOC alarms, and mitigated perimeter risks.',
        'Constructed threat-modeling topologies and incident response automation playbooks.'
      ]
    },
    { 
      date: 'Nov 2024 - Dec 2024', 
      title: 'AI Product Intern', 
      company: 'TechSaksham (Microsoft & SAP Initiative)',
      badge: '94% ML Accuracy',
      points: [
        'Engineered deep learning computer vision pipelines for sustainable agriculture, achieving 94% prediction accuracy.',
        'Optimized model inference latency for edge processing across 10,000+ agricultural data records.',
        'Collaborated with cross-functional product leads to translate business requirements into production ML architecture.'
      ]
    },
    { 
      date: 'Oct 2024 - Dec 2024', 
      title: 'Cloud Infrastructure Engineering Intern', 
      company: 'AWS Academy',
      badge: 'Grade A Evaluation',
      points: [
        'Architected resilient cloud infrastructures utilizing AWS Core Services (EC2, S3, VPC, RDS, IAM) with Grade A evaluation.',
        'Engineered multi-AZ subnet topologies, routing tables, and security group policies for scalable microservice hosting.',
        'Implemented CloudWatch monitoring alarms and cloud cost-optimization strategies.'
      ]
    }
  ];

  const certifications = [
    'Google Cloud ACE', '18+ GCP Skill Badges',
    'AWS Academy Cloud Architect', 'Fortinet Network Security (FCA)', 
    'Palo Alto Networks Cyber', 'Postman API Student Expert',
    'Vertex AI Prompt Design', 'Data Analytics Specialist'
  ];

  const projectCategories = ['All', 'Full-Stack', 'AI & Cloud', 'Security & Web3', 'Mobile'];

  const projects: Project[] = [
    {
      title: 'RazorOps AI',
      tag: 'FinTech / Automated Reconciliation',
      category: 'AI & Cloud',
      metric: 'Razorpay Buildathon • 93.4% Match',
      desc: 'Autonomous financial reconciliation and liquidity intelligence engine built for Razorpay AI Buildathon 2026. Segregates deterministic math from Gemini Copilot reasoning, detecting MDR variances and modeling RBI nodal settlement cycles.',
      img: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=1000',
      github: 'https://github.com/DeekshaG96/razorops-ai',
      live: 'https://razorops-ai.web.app',
      tech: ['React 19', 'Gemini AI', 'Firebase', 'E2E Testing (19/19)', 'Tailwind CSS']
    },
    {
      title: 'NaanStop | Food Delivery Platform',
      tag: 'Full-Stack / Kitchen KDS & App',
      category: 'Full-Stack',
      metric: 'Real-Time KDS & Mobile App',
      desc: 'Complete full-stack food delivery ecosystem featuring a customer storefront, kitchen display system (KDS), admin catalog manager, and native Android application with real-time order lifecycle tracking.',
      img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=1000',
      github: 'https://github.com/DeekshaG96/food-delivery-app',
      live: 'https://naanstop-customer.vercel.app',
      tech: ['React 19', 'TypeScript', 'Node.js', 'Express', 'Firebase', 'Android']
    },
    {
      title: 'Eco-Track Logistics',
      tag: 'Logistics / Gemini 2.5 Flash',
      category: 'AI & Cloud',
      metric: '+25% Route Resilience',
      desc: 'AI-assisted logistics intelligence platform for supply chain disruption detection and recovery routing. Integrates Google Gemini 2.5 Flash reasoning with real-time IoT sensor telemetry in Firebase (+25% routing resilience). Built for Google Solution Challenge 2026.',
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

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-sky-100 selection:text-sky-800 subtle-grid">
      {/* Sticky Clean Navbar */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo with Signature Script Font & Clean Accents */}
          <a 
            href="#header" 
            className="font-cursive text-3xl text-slate-900 hover:text-sky-600 transition-colors select-none flex items-center gap-1"
          >
            <span>Deeksha G</span><span className="text-sky-600 font-sans text-2xl leading-none">.</span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-7 text-xs font-semibold uppercase tracking-wider text-slate-600">
            <a href="#about" className="hover:text-sky-600 transition-colors">About</a>
            <a href="#projects" className="hover:text-sky-600 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-sky-600 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-sky-600 transition-colors">Experience</a>
            <a href="#education" className="hover:text-sky-600 transition-colors">Education</a>
            <a href="#contact" className="hover:text-sky-600 transition-colors">Contact</a>
            
            <div className="flex items-center gap-3 pl-3 border-l border-slate-200">
              <a 
                href="https://github.com/DeekshaG96" 
                target="_blank" 
                rel="noreferrer" 
                className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-900 hover:text-white text-slate-700 flex items-center justify-center transition-colors" 
                title="GitHub Profile"
              >
                <Github size={16} />
              </a>
              <a 
                href="./Deeksha_G_Resume.pdf" 
                download="Deeksha_G_Resume.pdf" 
                className="bg-slate-900 text-white hover:bg-sky-600 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-1.5 shadow-xs"
              >
                Resume <Download size={13} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button className="md:hidden text-slate-700 p-1.5 rounded-lg hover:bg-slate-100" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu">
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-6 py-5 flex flex-col gap-4 text-sm font-semibold shadow-lg">
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-sky-600">About</a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)} className="hover:text-sky-600">Projects</a>
            <a href="#skills" onClick={() => setIsMenuOpen(false)} className="hover:text-sky-600">Skills</a>
            <a href="#experience" onClick={() => setIsMenuOpen(false)} className="hover:text-sky-600">Experience</a>
            <a href="#education" onClick={() => setIsMenuOpen(false)} className="hover:text-sky-600">Education</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-sky-600">Contact</a>
            <a 
              href="./Deeksha_G_Resume.pdf" 
              download="Deeksha_G_Resume.pdf" 
              className="bg-slate-900 text-white text-center py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider mt-2"
            >
              Download Resume (PDF)
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section: Simple, High-Impact & Beautifully Organized */}
      <header id="header" className="max-w-4xl mx-auto px-6 pt-16 pb-12 text-center relative">
        <div className="hero-glow absolute inset-0 pointer-events-none" />

        {/* Tech Developer Avatar with Long Hair */}
        <div className="flex justify-center mb-6 relative">
          <div className="relative">
            <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full p-1 bg-gradient-to-tr from-sky-400 via-indigo-400 to-sky-200 shadow-xl shadow-sky-900/10">
              <img 
                src="./assets/avatar.jpg" 
                alt="Deeksha G" 
                className="w-full h-full rounded-full object-cover object-top bg-slate-100"
              />
            </div>
            <span className="absolute bottom-1 right-2 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white shadow-xs" title="Available for Roles" />
          </div>
        </div>

        {/* Status Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-sky-200 text-sky-800 text-xs font-semibold mb-4 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          7th Sem Engineer (Batch 2023–2027) • Open for Software & AI Roles
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight font-headline">
          Hi, I'm <span className="aesthetic-gradient">Deeksha G.</span>
        </h1>

        {/* Professional Subtitle */}
        <p className="text-lg sm:text-xl text-slate-700 font-medium mt-3.5 max-w-2xl mx-auto leading-relaxed">
          Software Engineer specializing in Full-Stack Web, Cloud Systems, and Applied AI.
        </p>

        {/* Concise Credibility Bio */}
        <p className="text-sm text-slate-500 mt-3 max-w-xl mx-auto leading-relaxed">
          Pursuing B.E. in Computer Science & Business Systems (CSBS) at Srinivas Institute of Technology (SIT), Mangaluru (Batch 2023–2027). Open source contributor at GSSoC '26, Google Cloud ACE & AWS certified with 5 technical internships.
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-3 mt-7">
          <a 
            href="#projects" 
            className="bg-slate-900 text-white hover:bg-sky-600 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-sm flex items-center gap-2"
          >
            View Projects <ArrowRight size={14} />
          </a>
          <a 
            href="./Deeksha_G_Resume.pdf" 
            download="Deeksha_G_Resume.pdf" 
            className="bg-white text-slate-800 border border-slate-300 hover:border-sky-500 hover:text-sky-600 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-xs flex items-center gap-2"
          >
            Download Resume <Download size={14} />
          </a>
          <button 
            onClick={copyEmail}
            className="bg-sky-50 text-sky-800 border border-sky-200 hover:bg-sky-100 px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-xs"
          >
            {copied ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
            {copied ? 'Email Copied!' : 'Copy Email'}
          </button>
        </div>

        {/* 4-Item Quick Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 mt-10 pt-7 border-t border-slate-200/80 text-left">
          {stats.map((s, idx) => (
            <div key={idx} className="card-clean p-4 rounded-xl">
              <span className="text-2xl font-extrabold text-slate-900 font-headline block">{s.value}</span>
              <p className="text-xs font-bold text-slate-700 mt-0.5">{s.label}</p>
              <p className="text-[11px] text-slate-400">{s.note}</p>
            </div>
          ))}
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-6 space-y-16 pb-24">
        {/* ==================== 1. ABOUT SECTION ==================== */}
        <section id="about" className="space-y-6 pt-2">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-600">Background & Philosophy</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-headline">Engineering with focus, precision, and purpose.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            <div className="md:col-span-2 card-clean rounded-2xl p-6 sm:p-8 space-y-4 text-slate-600 leading-relaxed text-sm">
              <p>
                I am a 7th Semester Computer Science & Business Systems (CSBS) engineering undergraduate at Srinivas Institute of Technology (SIT), Mangaluru (Batch 2023–2027, VTU affiliated). I engineer resilient, production-grade software platforms that balance algorithmic rigor with clean, user-centric interfaces.
              </p>
              <p>
                With 5 completed technical internships across enterprise security at Fortinet (Grade O), Palo Alto Networks (Grade E), AI product engineering at TechSaksham (Microsoft & SAP), AWS cloud architecture, and open source software contributions at GirlScript Summer of Code (GSSoC '26), I bring disciplined, test-driven engineering habits to fast-moving product teams.
              </p>
            </div>

            <div className="card-clean rounded-2xl p-6 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wider">
                  <Sparkles size={15} className="text-sky-600" />
                  <span>Core Strengths</span>
                </div>
                <ul className="space-y-2.5 text-xs text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-sky-600 shrink-0" />
                    <span><strong>Full-Stack Web:</strong> React 19, TypeScript, Next.js</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-sky-600 shrink-0" />
                    <span><strong>Applied AI:</strong> Gemini Flash, NLP, Vision</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-sky-600 shrink-0" />
                    <span><strong>Cloud & DevOps:</strong> AWS, Google Cloud, Docker</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-sky-600 shrink-0" />
                    <span><strong>CS Foundations:</strong> DSA, DBMS, OS, Networks</span>
                  </li>
                </ul>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <a 
                  href="#projects" 
                  className="text-xs font-bold text-sky-600 hover:text-sky-800 inline-flex items-center gap-1.5 transition-colors uppercase tracking-wider"
                >
                  Explore Projects <ArrowRight size={13} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== 2. FEATURED PROJECTS SECTION ==================== */}
        <section id="projects" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-sky-600">Portfolio Work</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-headline">Flagship Projects</h2>
            </div>
            
            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1.5">
              {projectCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeCategory === cat
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* 2-Column Grid: Highly Organized, Clean Cards with Visible Info */}
          <div className="grid md:grid-cols-2 gap-5">
            {filteredProjects.map((p) => (
              <div 
                key={p.title} 
                className="card-clean rounded-2xl overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                    <img 
                      src={p.img} 
                      alt={p.title} 
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" 
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-bold text-emerald-700 border border-emerald-200 shadow-xs">
                      {p.metric}
                    </span>
                  </div>
                  
                  <div className="p-6 space-y-3">
                    <div>
                      <span className="text-[11px] font-bold text-sky-600 uppercase tracking-wider block">{p.tag}</span>
                      <h3 className="text-lg font-bold text-slate-900 font-headline mt-0.5">{p.title}</h3>
                    </div>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {p.desc}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1.5">
                      {p.tech.map((t) => (
                        <span key={t} className="text-[11px] bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-md font-medium border border-slate-200/60">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-5 pt-2 flex items-center gap-5 border-t border-slate-100">
                  <a 
                    href={p.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-xs font-bold text-slate-700 hover:text-sky-600 flex items-center gap-1.5 transition-colors uppercase tracking-wider"
                  >
                    <Github size={15} /> Source Code
                  </a>
                  {p.live && (
                    <a 
                      href={p.live} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-xs font-bold text-sky-600 hover:text-sky-800 flex items-center gap-1.5 transition-colors uppercase tracking-wider"
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==================== 3. TECHNICAL SKILLS SECTION ==================== */}
        <section id="skills" className="space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-sky-600">Technical Expertise</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-headline">Skills & Tech Stack</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillDomains.map((domain) => (
              <div key={domain.category} className="card-clean rounded-2xl p-5 space-y-3">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    {domain.category}
                  </h3>
                  {domain.icon}
                </div>
                <div className="flex flex-wrap gap-1.5 pt-0.5">
                  {domain.items.map((item) => (
                    <span key={item} className="text-xs bg-sky-50 text-sky-900 border border-sky-100 px-2.5 py-1 rounded-md font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Validated Badges Pill Cloud */}
          <div className="card-clean rounded-2xl p-6 sm:p-7 space-y-3 text-center">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-sky-600">
              <Code2 size={15} />
              <span>Certifications & Verified Badges</span>
            </div>
            <div className="flex flex-wrap justify-center gap-2 pt-1">
              {certifications.map((c) => (
                <span key={c} className="px-3.5 py-1.5 bg-slate-50 border border-slate-200 rounded-full text-xs font-semibold text-slate-700 hover:border-sky-400 hover:text-sky-700 transition-colors">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== 4. EXPERIENCE SECTION ==================== */}
        <section id="experience" className="space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-sky-600">Career History</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-headline">Technical Internships</h2>
          </div>

          <div className="space-y-4">
            {experience.map((exp, idx) => (
              <div key={idx} className="card-clean rounded-2xl p-6 sm:p-7 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 font-headline">{exp.title}</h3>
                    <p className="text-xs font-semibold text-sky-700">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-medium text-slate-500">{exp.date}</span>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-sky-50 text-sky-800 border border-sky-200">
                      {exp.badge}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2 pt-1">
                  {exp.points.map((p, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5 text-slate-600 text-xs sm:text-sm leading-relaxed">
                      <span className="text-sky-600 font-bold mt-0.5">•</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ==================== 5. EDUCATION SECTION ==================== */}
        <section id="education" className="space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-sky-600">Academic Foundation</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-headline">Degree & Institution</h2>
          </div>

          <div className="card-clean rounded-2xl p-6 sm:p-7 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-sky-600">Bachelor of Engineering (B.E.)</span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-headline">Computer Science & Business Systems (CSBS)</h3>
                <p className="text-xs sm:text-sm font-semibold text-slate-700">Srinivas Institute of Technology (SIT), Mangaluru</p>
              </div>
              <div className="text-left sm:text-right">
                <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-full text-xs font-bold">
                  Batch 2023 – 2027 (7th Semester)
                </span>
                <p className="text-xs text-slate-500 mt-1">Affiliated to VTU Belagavi • AICTE Approved</p>
              </div>
            </div>

            <div className="space-y-1.5 pt-1">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Core Engineering Coursework</span>
              <p className="text-xs text-slate-600 leading-relaxed">
                Data Structures & Algorithms, Operating Systems, Database Management Systems, Computer Networks, Software Engineering, Object-Oriented Programming (Java/C++), Cloud Computing, and Artificial Intelligence.
              </p>
            </div>
          </div>
        </section>

        {/* ==================== 6. CONTACT SECTION ==================== */}
        <section id="contact" className="space-y-6 pt-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-sky-600">Get In Touch</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-headline">Let's Connect & Collaborate</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-start">
            <div className="space-y-4">
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                I am actively seeking software engineering, AI engineering, and cloud architect roles with immediate joining availability. Whether you have an open role or an innovative project, feel free to reach out.
              </p>

              <div className="space-y-3">
                <button
                  onClick={copyEmail}
                  className="w-full card-clean p-4 rounded-xl flex items-center justify-between transition-all group text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Direct Email</p>
                      <p className="text-sm font-bold text-slate-900 group-hover:text-sky-600 transition-colors">deekshagpbangera@gmail.com</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-sky-600 flex items-center gap-1">
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                    {copied ? 'Copied' : 'Copy'}
                  </span>
                </button>

                <a
                  href="https://github.com/DeekshaG96"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full card-clean p-4 rounded-xl flex items-center justify-between transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center">
                      <Github size={18} />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">GitHub Profile</p>
                      <p className="text-sm font-bold text-slate-900 group-hover:text-sky-600 transition-colors">github.com/DeekshaG96</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-sky-600">View &rarr;</span>
                </a>
              </div>
            </div>

            {/* Direct Message Form */}
            <div className="card-clean rounded-2xl p-6 sm:p-7 space-y-4">
              <h3 className="text-base font-bold text-slate-900 font-headline">Send a Direct Message</h3>
              {formSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-xl text-center space-y-2">
                  <CheckCircle2 size={26} className="mx-auto text-emerald-600" />
                  <p className="font-bold text-sm">Message Sent Successfully!</p>
                  <p className="text-xs text-emerald-700">Thank you for reaching out. I'll get back to you promptly.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-3.5">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">Your Name</label>
                    <input 
                      type="text" 
                      required 
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Alex Smith"
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:bg-white focus:border-sky-500 outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">Email Address</label>
                    <input 
                      type="email" 
                      required 
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:bg-white focus:border-sky-500 outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">Message</label>
                    <textarea 
                      rows={3} 
                      required 
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Hi Deeksha, I'd like to discuss a role..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:bg-white focus:border-sky-500 outline-none transition-colors resize-none"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-slate-900 text-white hover:bg-sky-600 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-xs"
                  >
                    Send Message <Send size={14} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Clean Footer */}
      <footer className="border-t border-slate-200/80 bg-white py-8 text-center text-xs text-slate-500">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-medium">
            &copy; {new Date().getFullYear()} Deeksha G. Built with Focus, Precision, and Purpose.
          </p>
          <div className="flex items-center gap-6 font-semibold uppercase tracking-wider">
            <button onClick={scrollToTop} className="hover:text-sky-600 transition-colors flex items-center gap-1">
              Back to Top <ChevronUp size={14} />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
