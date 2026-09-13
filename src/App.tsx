import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Mail, 
  Linkedin,
  Brain, 
  ArrowRight, 
  Menu, 
  X,
  Cloud,
  Cpu,
  ArrowUpRight,
  Download,
  Copy,
  Check,
  ChevronUp,
  Briefcase,
  Zap,
  GraduationCap,
  Award,
  Layers,
  Sparkles,
  ExternalLink,
  Code2,
  Terminal,
  ShieldCheck,
  CheckCircle2,
  Compass
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [typingText, setTypingText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [activeCategory, setActiveCategory] = useState('All');

  const typingStrings = [
    "Software Engineer (Full-Stack & Cloud)", 
    "Applied AI & LLM Systems Builder", 
    "Open Source Contributor @ GSSoC '26", 
    "Computer Science & Business Systems Scholar", 
    "0→1 Product Architect • 7.8 CGPA"
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowScrollTop(currentScrollY > 400);
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsNavVisible(false);
      } else {
        setIsNavVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % typingStrings.length;
      const fullText = typingStrings[i];

      setTypingText(isDeleting 
        ? fullText.substring(0, typingText.length - 1) 
        : fullText.substring(0, typingText.length + 1)
      );

      if (!isDeleting && typingText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && typingText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [typingText, isDeleting, loopNum]);

  const copyEmail = () => {
    navigator.clipboard.writeText('deekshagpbangera@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const stats = [
    { label: 'Internships', value: '5', sub: 'Industry Validated' },
    { label: 'Flagship Systems', value: '7', sub: 'Full 0→1 Deployments' },
    { label: 'Cloud & Badges', value: '18+', sub: 'GCP & AWS Verified' },
    { label: 'Engineering CGPA', value: '7.8', sub: 'CS & Business Systems' }
  ];

  const values = [
    { 
      title: 'Architectural Rigor', 
      desc: 'Designing fault-tolerant, resilient architectures from database schema to edge delivery.' 
    },
    { 
      title: 'Applied AI Focus', 
      desc: 'Engineering production LLM pipelines and computer vision that produce quantified user impact.' 
    },
    { 
      title: 'Clean Engineering', 
      desc: 'Writing maintainable, test-driven code adhering to zero-trust principles and CI/CD best practices.' 
    },
    { 
      title: 'Relentless Velocity', 
      desc: 'Rapidly converting user requirements into polished, high-throughput digital products.' 
    }
  ];

  const services = [
    { 
      title: 'Full-Stack Engineering', 
      desc: 'Developing high-performance, responsive applications with React 19, Next.js, Node.js, and clean RESTful microservices.',
      icon: <Cpu className="w-8 h-8 text-sky-600" />,
      tag: 'Frontend & Backend'
    },
    { 
      title: 'Applied AI & GenAI Systems', 
      desc: 'Harnessing Google Gemini 2.5 Flash, structured prompt engineering, and scikit-learn to automate multi-modal reasoning.',
      icon: <Brain className="w-8 h-8 text-sky-600" />,
      tag: 'Machine Learning & LLMs'
    },
    { 
      title: 'Cloud & Security Infrastructure', 
      desc: 'Architecting secure AWS and Google Cloud environments with Zero-Trust Network Access (ZTNA) and automated CI/CD.',
      icon: <Cloud className="w-8 h-8 text-sky-600" />,
      tag: 'Cloud & DevOps'
    }
  ];

  const skillDomains = [
    {
      category: 'Languages',
      badge: 'Core Syntax',
      items: ['Python', 'Java', 'C++', 'TypeScript', 'JavaScript', 'SQL', 'Solidity']
    },
    {
      category: 'Frontend & UI',
      badge: 'Modern Client',
      items: ['React 19', 'Next.js', 'Tailwind CSS', 'Vite', 'HTML5 / CSS3', 'Framer Motion']
    },
    {
      category: 'Backend & APIs',
      badge: 'Services & DB',
      items: ['Node.js', 'Express.js', 'REST APIs', 'Postman API Expert', 'Firebase', 'Cloud Firestore']
    },
    {
      category: 'Cloud & DevOps',
      badge: 'Infra & Deploy',
      items: ['AWS (EC2, S3, VPC, IAM)', 'Google Cloud (ACE)', 'Docker', 'Git / GitHub', 'GitHub Actions CI/CD']
    },
    {
      category: 'AI & Security',
      badge: 'Intelligence & Defense',
      items: ['Google Gemini 2.5 Flash', 'Prompt Design', 'Scikit-Learn ML', 'Zero-Trust (ZTNA)', 'Fortinet Security']
    }
  ];

  const experience = [
    { 
      date: 'May 2026 - Present', 
      title: 'Open Source Software Engineering Contributor', 
      company: 'GirlScript Summer of Code (GSSoC)',
      location: 'Remote',
      badge: 'Open Source Contributor',
      points: [
        'Contributing core features and bug fixes to developer and security tooling open-source repositories via Git/GitHub.',
        'Configured automated GitHub Actions CI/CD workflows for linting, unit testing, and branch validation, cutting review cycles by 25%.',
        'Collaborating with distributed engineering teams on modern pull request reviews and semantic versioning.'
      ]
    },
    { 
      date: 'Oct 2025 - Dec 2025', 
      title: 'Network Security Engineering Intern', 
      company: 'Fortinet (via AICTE & EduSkills)',
      location: 'Virtual',
      badge: 'Grade O (90-100%)',
      points: [
        'Graduated from 10-week enterprise security engineering program with Grade O (Outstanding, 90-100%).',
        'Configured stateful firewall inspection policies, Zero-Trust Network Access (ZTNA), and simulated enterprise attack vectors.',
        'Hardened virtualized network perimeters and conducted automated threat-surface audits.'
      ]
    },
    { 
      date: 'Jan 2025 - Mar 2025', 
      title: 'Cybersecurity Engineering Intern', 
      company: 'Palo Alto Networks (via AICTE & EduSkills)',
      location: 'Virtual',
      badge: 'Grade E (80-89%)',
      points: [
        'Completed 10-week intensive cybersecurity track, achieving Grade E (Excellent, 80-89%).',
        'Analyzed real-time network traffic telemetry, investigated simulated SOC alarms, and mitigated perimeter vulnerabilities.',
        'Constructed threat-modeling topologies and incident response automation playbooks for hybrid cloud workloads.'
      ]
    },
    { 
      date: 'Nov 2024 - Dec 2024', 
      title: 'AI Product Intern', 
      company: 'TechSaksham (Microsoft & SAP CSR Initiative)',
      location: 'Remote',
      badge: '94% ML Accuracy',
      points: [
        'Engineered deep learning computer vision pipelines for sustainable agriculture, achieving 94% prediction accuracy.',
        'Optimized model inference latency for real-time edge processing across 10,000+ agricultural data records.',
        'Collaborated with cross-functional product leads to translate business requirements into production ML architecture.'
      ]
    },
    { 
      date: 'Oct 2024 - Dec 2024', 
      title: 'Cloud Infrastructure Engineering Intern', 
      company: 'AWS Academy',
      location: 'Remote',
      badge: 'Grade A Evaluation',
      points: [
        'Architected resilient, highly available cloud infrastructures utilizing AWS Core Services (EC2, S3, VPC, RDS, IAM) with Grade A evaluation.',
        'Engineered multi-AZ subnet topologies, routing tables, and security group policies for scalable microservice hosting.',
        'Implemented CloudWatch monitoring alarms and cloud cost-optimization strategies.'
      ]
    }
  ];

  const certifications = [
    { title: 'Google Cloud ACE', issuer: 'Google Cloud' },
    { title: '18+ GCP Skill Badges', issuer: 'Google Cloud' },
    { title: 'AWS Academy Cloud Architect', issuer: 'Amazon Web Services' },
    { title: 'Fortinet Network Security (FCA)', issuer: 'Fortinet' },
    { title: 'Palo Alto Networks Cyber', issuer: 'Palo Alto Networks' },
    { title: 'Postman API Student Expert', issuer: 'Postman' },
    { title: 'Vertex AI Prompt Design', issuer: 'Google Cloud' },
    { title: 'Data Analytics Specialist', issuer: 'Google' }
  ];

  const projectCategories = ['All', 'AI & Cloud', 'Full-Stack', 'Security & Web3', 'Mobile'];

  const projects = [
    {
      title: 'RazorOps AI',
      slug: 'razorops-ai',
      tag: 'FinTech / Automated Reconciliation',
      category: 'Full-Stack',
      metric: '-40% Auditing Overhead',
      desc: 'Cloud-native financial operations portal simulating transaction batch clearing, status lifecycles, and liquidity forecasting. Automated API test suites with Postman validate idempotency and cut manual auditing overhead by 40%.',
      img: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=1000',
      github: 'https://github.com/DeekshaG96',
      tech: ['React 19', 'JavaScript', 'Firebase', 'SQL', 'Postman API', 'Tailwind CSS']
    },
    {
      title: 'Eco-Track Logistics',
      slug: 'eco-track-logistics',
      tag: 'Logistics / Gemini 2.5 Flash',
      category: 'AI & Cloud',
      metric: '+25% Route Resilience',
      desc: 'AI-assisted logistics intelligence platform for supply chain disruption risk detection and recovery routing. Integrates Google Gemini 2.5 Flash reasoning with real-time IoT sensor telemetry in Firebase (+25% routing resilience). Built for Google Solution Challenge 2026.',
      img: 'https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=1000',
      github: 'https://github.com/DeekshaG96/eco-track-logistics',
      live: 'https://techspire-13303696-1c68d.web.app',
      tech: ['React', 'Gemini AI', 'Firebase', 'Google Maps API', 'CI/CD']
    },
    {
      title: 'Smart Farmer Connect',
      slug: 'smart-farm-connect',
      tag: 'AgriTech / Next.js Platform',
      category: 'Full-Stack',
      metric: '+40% User Engagement',
      desc: 'Scalable full-stack marketplace and crop intelligence portal connecting farmers to agronomy analytics and direct commercial buyers. Features dynamic pricing models and localized weather analytics (+40% user engagement).',
      img: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=1000',
      github: 'https://github.com/DeekshaG96/smart-farm-connect',
      live: 'https://v0-smart-farm-connect-ui.vercel.app/',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel', 'REST API']
    },
    {
      title: 'VotX Protocol',
      slug: 'votx-protocol',
      tag: 'Web3 / Cryptography',
      category: 'Security & Web3',
      metric: '10,000+ Anonymous Ballots',
      desc: 'Decentralized electronic voting platform deploying gas-optimized Solidity smart contracts on Polygon with Zero-Knowledge proofs (ZK-proofs) for complete voter anonymity and tamper-proof ballot verification across 10,000+ simulated voters.',
      img: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000',
      github: 'https://github.com/DeekshaG96',
      tech: ['Solidity', 'Polygon', 'ZK-Proofs', 'Web3.js', 'Smart Contracts']
    },
    {
      title: 'Student Success Dashboard',
      slug: 'student-success-dashboard',
      tag: 'EdTech / MLOps',
      category: 'AI & Cloud',
      metric: 'Real-Time ML Forecasting',
      desc: 'Interactive predictive machine learning portal analyzing educational indicators to forecast student retention and graduation outcomes in real time with feature-importance visual explainability.',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
      github: 'https://github.com/DeekshaG96/Student-Success-Dashboard',
      tech: ['Python', 'Streamlit', 'Scikit-Learn', 'Pandas', 'Matplotlib']
    },
    {
      title: 'Soul Journal',
      slug: 'soul-journal',
      tag: 'Mobile / Flutter & Cloud',
      category: 'Mobile',
      metric: 'Riverpod & Biometric Auth',
      desc: 'Cross-platform mental wellness and habit-building mobile application engineered in Flutter with Riverpod state architecture, biometric security, and real-time Cloud Firestore synchronization.',
      img: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=1000',
      github: 'https://github.com/DeekshaG96/soul_journal',
      live: 'https://soul-journal-65327.web.app/',
      tech: ['Flutter', 'Firebase', 'Riverpod', 'Cloud Firestore', 'Dart']
    },
    {
      title: 'AI Text Summarizer',
      slug: 'aitextsummarizer',
      tag: 'NLP / GenAI Engine',
      category: 'AI & Cloud',
      metric: 'Sub-Second LLM Ingestion',
      desc: 'High-throughput document intelligence workspace leveraging Google Gemini LLM API to parse, summarize, and extract sentiment and core action items from dense documents and meeting transcripts.',
      img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000',
      github: 'https://github.com/DeekshaG96/aitextsummarizer',
      tech: ['Node.js', 'Express', 'Gemini AI', 'React 19', 'Tailwind CSS']
    }
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="relative min-h-screen bg-[#f0f6fc] text-slate-800 selection:bg-sky-500/20 selection:text-sky-700 font-sans mesh-bg">
      {/* Dynamic Ambient Blur Mesh */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-15%] left-[-10%] w-[50%] h-[50%] bg-sky-200/50 blur-[150px] rounded-full animate-pulse-slow" />
        <div className="absolute bottom-[-15%] right-[-10%] w-[50%] h-[50%] bg-blue-200/40 blur-[150px] rounded-full animate-pulse-slow" />
        <div className="absolute top-[35%] right-[5%] w-[40%] h-[40%] bg-indigo-100/45 blur-[160px] rounded-full" />
      </div>
      
      {/* Navigation Header */}
      <header className={`fixed top-0 w-full z-50 bg-[#f0f6fc]/85 backdrop-blur-xl border-b border-sky-200/60 transition-transform duration-500 shadow-xs ${isNavVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <nav className="flex justify-between items-center px-6 md:px-12 py-3.5 max-w-7xl mx-auto">
          {/* Side Logo with requested signature cursive script font */}
          <motion.a 
            href="#header" 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-cursive text-3xl md:text-4xl text-slate-900 hover:text-sky-600 transition-colors tracking-wide select-none pt-1 group flex items-center gap-1.5"
          >
            <span>Deeksha G</span>
            <span className="w-1.5 h-1.5 rounded-full bg-sky-600 group-hover:scale-125 transition-transform mt-2" />
          </motion.a>
          
          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-600">
            <a href="#about" className="hover:text-sky-600 transition-colors">About</a>
            <a href="#projects" className="hover:text-sky-600 transition-colors">Works</a>
            <a href="#skills" className="hover:text-sky-600 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-sky-600 transition-colors">Experience</a>
            <a href="#education" className="hover:text-sky-600 transition-colors">Education</a>
            <a href="#contact" className="hover:text-sky-600 transition-colors">Contact</a>
            
            {/* Quick Actions */}
            <div className="flex items-center gap-4 pl-4 border-l border-sky-200">
              <a href="https://github.com/DeekshaG96" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-sky-600 transition-colors" title="GitHub"><Github size={17} /></a>
              <a href="https://linkedin.com/in/deeksha-g-cybersec" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-sky-600 transition-colors" title="LinkedIn"><Linkedin size={17} /></a>
              <a 
                href="./Deeksha_G_Resume.pdf" 
                download="Deeksha_G_Resume.pdf" 
                className="bg-slate-900 text-white hover:bg-sky-600 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-1.5 shadow-md shadow-slate-900/10 hover:shadow-sky-600/25 ml-1"
                title="Download Master 1-Page Resume PDF"
              >
                Resume <Download size={12} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-slate-800 p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu">
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile Nav Drawer */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-full left-0 w-full bg-[#f0f6fc]/95 backdrop-blur-2xl border-b border-sky-200 p-8 flex flex-col gap-6 md:hidden shadow-2xl"
            >
              <div className="flex flex-col gap-5 text-sm font-bold uppercase tracking-widest text-slate-700">
                <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-sky-600">About</a>
                <a href="#projects" onClick={() => setIsMenuOpen(false)} className="hover:text-sky-600">Works</a>
                <a href="#skills" onClick={() => setIsMenuOpen(false)} className="hover:text-sky-600">Skills</a>
                <a href="#experience" onClick={() => setIsMenuOpen(false)} className="hover:text-sky-600">Experience</a>
                <a href="#education" onClick={() => setIsMenuOpen(false)} className="hover:text-sky-600">Education</a>
                <a href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-sky-600">Contact</a>
                <a 
                  href="./Deeksha_G_Resume.pdf" 
                  download="Deeksha_G_Resume.pdf" 
                  className="bg-slate-900 text-white text-center py-3.5 rounded-xl text-xs font-black uppercase tracking-widest mt-2 shadow-md"
                >
                  Download Master Resume (PDF)
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Hero Section */}
        <section id="header" className="min-h-screen flex flex-col justify-center items-center text-center pt-28 pb-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8 max-w-5xl"
          >
            {/* Live Recruiter Status Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-emerald-50/90 border border-emerald-200/90 text-emerald-800 text-xs font-bold uppercase tracking-wider shadow-xs backdrop-blur-md"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Open for Full-Time SWE, Cloud & AI Engineering Roles • Immediate Joining</span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-7xl sm:text-8xl md:text-[9.5rem] font-black tracking-tighter leading-[0.88] text-slate-900 drop-shadow-xs">
                DEEKSHA<br/>
                <span className="aesthetic-gradient">G.</span>
              </h1>
            </div>
            
            {/* Dynamic Typing Title */}
            <p className="text-slate-600 text-xl md:text-2xl max-w-2xl mx-auto font-normal leading-relaxed min-h-[3rem] flex items-center justify-center">
              <span>I am a <span className="text-slate-900 font-bold italic">{typingText}</span></span>
              <span className="inline-block w-0.5 h-6 bg-sky-600 ml-1 animate-pulse" />
            </p>
            
            {/* Primary Action Buttons */}
            <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
              <a 
                href="#projects" 
                className="group flex items-center gap-3 text-xs md:text-sm font-black uppercase tracking-widest bg-slate-900 text-white px-8 md:px-10 py-4.5 rounded-full hover:bg-sky-600 transition-all shadow-xl shadow-slate-900/10 hover:shadow-sky-600/30 hover:-translate-y-0.5"
              >
                Explore Projects <ArrowRight size={17} className="group-hover:translate-x-1.5 transition-transform" />
              </a>
              <a 
                href="./Deeksha_G_Resume.pdf" 
                download="Deeksha_G_Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center gap-3 text-xs md:text-sm font-black uppercase tracking-widest border border-sky-300 bg-white/90 text-slate-800 px-8 md:px-10 py-4.5 rounded-full hover:border-sky-500 hover:text-sky-600 hover:bg-white transition-all shadow-sm hover:-translate-y-0.5"
              >
                Download Master Resume <Download size={17} className="group-hover:translate-y-1 transition-transform" />
              </a>
              <button 
                onClick={copyEmail}
                className="group flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest border border-slate-300/80 bg-white/80 text-slate-700 px-6 py-4.5 rounded-full hover:border-sky-400 hover:text-sky-600 transition-all shadow-xs"
                title="Copy official email"
              >
                {copied ? <Check size={15} className="text-sky-600" /> : <Copy size={15} />}
                {copied ? 'Copied!' : 'Copy Email'}
              </button>
            </div>

            {/* Recruiter 10-Second Quick-Scan Snapshot Card */}
            <div className="pt-6 w-full max-w-4xl mx-auto">
              <div className="glass-card rounded-3xl p-6 md:p-8 text-left grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="space-y-1.5 border-b sm:border-b-0 sm:border-r border-sky-100 pb-4 sm:pb-0 sm:pr-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-sky-600 flex items-center gap-1.5">
                    <Briefcase size={13} /> Target Roles
                  </span>
                  <p className="text-sm font-bold text-slate-900">Software Engineer</p>
                  <p className="text-xs text-slate-500 font-medium">Full-Stack • Cloud & AI Systems</p>
                </div>
                <div className="space-y-1.5 border-b sm:border-b-0 lg:border-r border-sky-100 pb-4 sm:pb-0 lg:pr-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 flex items-center gap-1.5">
                    <Zap size={13} /> Availability
                  </span>
                  <p className="text-sm font-bold text-emerald-700 flex items-center gap-1.5">
                    Immediate Joining
                  </p>
                  <p className="text-xs text-slate-500 font-medium">Full-Time (Remote / Relocate)</p>
                </div>
                <div className="space-y-1.5 border-b sm:border-b-0 sm:border-r border-sky-100 pb-4 sm:pb-0 sm:pr-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-sky-600 flex items-center gap-1.5">
                    <GraduationCap size={13} /> Education
                  </span>
                  <p className="text-sm font-bold text-slate-900">B.E. in CSBS (7.8 CGPA)</p>
                  <p className="text-xs text-slate-500 font-medium">Srinivas Inst. of Tech (2026)</p>
                </div>
                <div className="space-y-1.5">
                  <span className="text-[10px] font-black uppercase tracking-widest text-sky-600 flex items-center gap-1.5">
                    <Award size={13} /> Credentials
                  </span>
                  <p className="text-sm font-bold text-slate-900">Google Cloud & AWS</p>
                  <p className="text-xs text-slate-500 font-medium">5 Internships • Fortinet Grade O</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Bento Grid: Engineering Philosophy & Numbers */}
        <section id="about" className="py-24">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 glass-card rounded-3xl p-10 md:p-14 space-y-6">
              <div className="flex items-center gap-2">
                <Compass size={16} className="text-sky-600" />
                <h2 className="text-xs font-black uppercase tracking-[0.3em] text-sky-600">Engineering Philosophy</h2>
              </div>
              <div className="space-y-5 text-2xl md:text-3xl font-light leading-relaxed text-slate-700">
                <p>
                  Driven by calm focus and technical precision, I am <span className="text-slate-900 font-semibold">Deeksha G.</span>—a Software Engineer dedicated to architecting resilient, production-ready digital systems.
                </p>
                <p className="text-lg md:text-xl text-slate-600 font-normal">
                  I bridge the gap between rigorous enterprise cloud infrastructure and modern intuitive user interfaces, transforming complex algorithmic challenges into elegant, high-impact products.
                </p>
              </div>
            </div>

            {/* Key Numeric Metrics */}
            <div className="glass-card bg-gradient-to-br from-white/90 via-sky-50/50 to-blue-50/40 rounded-3xl p-10 flex flex-col justify-between relative overflow-hidden group">
              <div className="relative z-10 space-y-6">
                {stats.map((stat, i) => (
                  <div key={i} className="border-b border-sky-200/60 pb-3.5 flex justify-between items-end">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-sky-700 block">{stat.label}</span>
                      <span className="text-xs text-slate-500 font-medium">{stat.sub}</span>
                    </div>
                    <span className="text-3xl font-black text-slate-900 tracking-tight">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 4 Core Pillars */}
            <div className="md:col-span-3 glass-card rounded-3xl p-10 md:p-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {values.map((val, i) => (
                  <div key={i} className="space-y-2.5">
                    <div className="w-8 h-8 rounded-xl bg-sky-100 flex items-center justify-center text-sky-700 text-xs font-black">
                      0{i + 1}
                    </div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">{val.title}</h3>
                    <p className="text-slate-600 text-xs md:text-sm font-normal leading-relaxed">{val.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Core Expertise Services */}
        <section className="py-24">
          <div className="space-y-16">
            <div className="text-center space-y-3">
              <h2 className="text-xs font-black uppercase tracking-[0.3em] text-sky-600">Specialized Disciplines</h2>
              <h3 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900">TECHNICAL FOCUS.</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, i) => (
                <div key={i} className="glass-card glass-card-hover rounded-3xl p-10 space-y-6 group">
                  <div className="flex justify-between items-start">
                    <div className="p-4 bg-sky-50 rounded-2xl w-fit group-hover:bg-sky-100 transition-colors">
                      {service.icon}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-sky-100/70 text-sky-800">
                      {service.tag}
                    </span>
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 tracking-tight">{service.title}</h4>
                  <p className="text-slate-600 font-normal leading-relaxed text-sm">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Selected Works / Projects Showcase (macOS window UI) */}
        <section id="projects" className="py-24">
          <div className="space-y-16">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-sky-200/80 pb-12">
              <div className="space-y-3">
                <h2 className="text-xs font-black uppercase tracking-[0.3em] text-sky-600">Production Systems</h2>
                <h3 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900">SELECTED WORKS.</h3>
              </div>
              <p className="text-slate-600 text-base md:text-lg font-normal max-w-md leading-relaxed">
                A showcase of 0→1 engineering prototypes demonstrating scalable architecture, modern client UX, and applied AI systems.
              </p>
            </div>

            {/* Recruiter Category Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {projectCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/15 scale-105'
                      : 'bg-white/85 text-slate-600 border border-sky-200/80 hover:border-sky-400 hover:text-sky-700'
                  }`}
                >
                  {cat} {cat === 'All' ? `(${projects.length})` : ''}
                </button>
              ))}
            </div>

            <div className="grid gap-24">
              {filteredProjects.map((project, i) => (
                <motion.div 
                  key={project.title} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group relative grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center"
                >
                  {/* macOS App Window Device Mockup */}
                  <div 
                    className="relative rounded-3xl overflow-hidden glass-card shadow-2xl shadow-sky-900/10 border border-sky-200/90 group"
                    onMouseEnter={() => setHoveredProject(i)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    {/* Window Controls Header */}
                    <div className="bg-slate-100/90 border-b border-sky-100 px-4 py-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-rose-400 inline-block" />
                        <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
                        <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
                      </div>
                      <div className="bg-white/80 border border-slate-200/70 rounded-md px-4 py-1 text-[11px] font-mono text-slate-500 truncate max-w-[220px]">
                        deeksha.dev/{project.slug}
                      </div>
                      <div className="w-12" />
                    </div>

                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                      <img 
                        src={project.img} 
                        alt={project.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out opacity-95 group-hover:opacity-100"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-xs">
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noreferrer"
                          className="bg-white text-slate-900 px-6 py-3 rounded-full text-[11px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-sky-500 hover:text-white transition-colors shadow-lg"
                        >
                          Code <Github size={14} />
                        </a>
                        {project.live && (
                          <a 
                            href={project.live} 
                            target="_blank" 
                            rel="noreferrer"
                            className="bg-sky-600 text-white px-6 py-3 rounded-full text-[11px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-sky-700 transition-colors shadow-lg"
                          >
                            Live Demo <ArrowUpRight size={14} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Project Details */}
                  <div className="space-y-5">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-xs font-bold uppercase tracking-widest text-sky-600">{project.tag}</span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/90 text-[11px] font-bold tracking-wide">
                        <Zap size={11} className="text-emerald-600" /> {project.metric}
                      </span>
                    </div>

                    <h4 className="text-3xl md:text-4xl font-black tracking-tighter text-slate-900 group-hover:text-sky-600 transition-colors">
                      {project.title}
                    </h4>

                    <p className="text-slate-600 text-base md:text-lg font-normal leading-relaxed">
                      {project.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.tech.map((t) => (
                        <span key={t} className="text-[11px] font-semibold uppercase tracking-wider text-sky-800 bg-sky-100/70 border border-sky-200/80 px-3.5 py-1.5 rounded-full">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-6 pt-3">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-xs font-bold uppercase tracking-[0.2em] text-slate-700 hover:text-sky-600 flex items-center gap-2 transition-colors"
                      >
                        View Code <Github size={15} />
                      </a>
                      {project.live && (
                        <a 
                          href={project.live} 
                          target="_blank" 
                          rel="noreferrer"
                          className="text-xs font-bold uppercase tracking-[0.2em] text-sky-600 hover:text-sky-800 flex items-center gap-2 transition-colors font-semibold"
                        >
                          Live Demo <ArrowUpRight size={15} />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Categorized Technical Stack Matrix */}
        <section id="skills" className="py-24">
          <div className="glass-card rounded-[3rem] p-10 md:p-16 space-y-12 shadow-xl shadow-sky-900/5">
            <div className="text-center space-y-3">
              <h2 className="text-xs font-black uppercase tracking-[0.3em] text-sky-600">Technical Competencies</h2>
              <h3 className="text-3xl md:text-5xl font-black tracking-tighter text-slate-900">SKILLS MATRIX BY DOMAIN.</h3>
              <p className="text-slate-600 text-sm max-w-xl mx-auto">
                Industry-tested toolchains and frameworks used across production microservices, AI pipelines, and cloud systems.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillDomains.map((domain, i) => (
                <div key={i} className="bg-white/80 border border-sky-100 rounded-2xl p-6 space-y-4 hover:border-sky-300 hover:shadow-lg transition-all">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Layers size={16} className="text-sky-600" />
                      <h4 className="text-xs font-black uppercase tracking-widest text-slate-900">{domain.category}</h4>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-sky-600 bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-100">
                      {domain.badge}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {domain.items.map((skill) => (
                      <span key={skill} className="px-3 py-1.5 bg-sky-50/70 hover:bg-white rounded-lg text-xs font-semibold text-slate-700 border border-sky-200/60 shadow-xs transition-colors cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Professional Experience (Interactive Timeline Spine) */}
        <section id="experience" className="py-24">
          <div className="max-w-4xl mx-auto space-y-14">
            <div className="text-center space-y-3">
              <h2 className="text-xs font-black uppercase tracking-[0.3em] text-sky-600">Enterprise Track Record</h2>
              <h3 className="text-3xl md:text-5xl font-black tracking-tighter text-slate-900">PROFESSIONAL EXPERIENCE.</h3>
            </div>
            
            <div className="relative pl-6 md:pl-10 border-l-2 border-sky-200/80 space-y-12">
              {experience.map((exp, i) => (
                <div key={i} className="relative group">
                  {/* Timeline Glowing Node */}
                  <div className="absolute -left-[31px] md:-left-[47px] top-6 w-5 h-5 rounded-full bg-white border-4 border-sky-500 group-hover:scale-125 group-hover:border-sky-600 transition-all shadow-md" />

                  <div className="glass-card glass-card-hover rounded-3xl p-8 md:p-10 space-y-4">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-3 border-b border-sky-100 pb-4">
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-2xl font-black text-slate-900 group-hover:text-sky-600 transition-colors tracking-tight">{exp.title}</h3>
                          {exp.badge && (
                            <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-sky-100 text-sky-800 border border-sky-200">
                              {exp.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-base font-semibold text-slate-700">{exp.company}</p>
                      </div>
                      <div className="text-left md:text-right">
                        <span className="text-[11px] font-bold uppercase tracking-widest text-sky-600">{exp.date}</span>
                        <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-500">{exp.location}</p>
                      </div>
                    </div>
                    <ul className="space-y-2.5 pt-2">
                      {exp.points.map((point, idx) => (
                        <li key={idx} className="flex gap-3 text-slate-600 font-normal leading-relaxed text-sm">
                          <span className="text-sky-600 font-bold mt-0.5">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Academic Foundation / Education Card */}
        <section id="education" className="py-24">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="text-center space-y-3">
              <h2 className="text-xs font-black uppercase tracking-[0.3em] text-sky-600">Academic Foundation</h2>
              <h3 className="text-3xl md:text-5xl font-black tracking-tighter text-slate-900">EDUCATION & HONORS.</h3>
            </div>
            
            <div className="glass-card rounded-3xl p-8 md:p-12 shadow-xl shadow-sky-900/5 hover:border-sky-300 transition-all flex flex-col md:flex-row justify-between gap-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-800 text-[11px] font-bold uppercase tracking-wider">
                  <GraduationCap size={15} /> Bachelor of Engineering (B.E.)
                </div>
                <div>
                  <h4 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    Computer Science & Business Systems (CSBS)
                  </h4>
                  <p className="text-base font-semibold text-slate-700 mt-1">
                    Srinivas Institute of Technology (SIT), Mangaluru • Visvesvaraya Technological University (VTU)
                  </p>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed max-w-xl">
                  <span className="font-bold text-slate-800">Core Coursework:</span> Data Structures & Algorithms, Object-Oriented Programming (Java/C++), Database Management (SQL), Operating Systems, Computer Networks, Cloud Architecture, Artificial Intelligence & Machine Learning, Software Engineering.
                </p>
              </div>

              <div className="md:text-right flex flex-col justify-between shrink-0 border-t md:border-t-0 md:border-l border-sky-100 pt-6 md:pt-0 md:pl-8">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-sky-600">2022 – 2026 (Final Year)</span>
                  <div className="flex items-baseline md:justify-end gap-1.5 mt-1">
                    <span className="text-4xl font-black text-slate-900">7.8</span>
                    <span className="text-sm font-semibold text-slate-500">/ 10.0 CGPA</span>
                  </div>
                </div>
                <div className="mt-4">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold">
                    <Sparkles size={12} /> Expected Graduation: June 2026
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Validated Certifications Grid */}
        <section className="py-24">
          <div className="glass-card rounded-[3rem] p-10 md:p-16 space-y-12 shadow-xl shadow-sky-900/5">
            <div className="text-center space-y-3">
              <h2 className="text-xs font-black uppercase tracking-[0.3em] text-sky-600">Industry Credentials</h2>
              <h3 className="text-3xl md:text-5xl font-black tracking-tighter text-slate-900">CERTIFICATIONS & BADGES.</h3>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {certifications.map((cert) => (
                <div key={cert.title} className="bg-white/80 border border-sky-100 rounded-2xl p-5 text-center space-y-1.5 hover:border-sky-300 hover:shadow-md transition-all">
                  <Award size={20} className="text-sky-600 mx-auto mb-2" />
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-900">{cert.title}</p>
                  <p className="text-[11px] text-slate-500 font-medium">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10 text-left">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="space-y-6"
              >
                <h2 className="text-7xl md:text-[8rem] font-black tracking-tighter text-slate-900 leading-none">
                  LET'S<br/>TALK.
                </h2>
                <p className="text-slate-600 text-xl font-normal max-w-xl leading-relaxed">
                  Available for full-time software engineering roles, cloud architecting, and AI product development. Immediate joining availability.
                </p>
              </motion.div>
              
              <div className="flex flex-col gap-5">
                <button 
                  onClick={copyEmail}
                  className="group flex items-center gap-4 text-lg font-bold text-slate-900 hover:text-sky-600 transition-colors relative w-fit"
                  title="Click to copy email"
                >
                  <div className="p-3 bg-sky-100/70 rounded-xl text-sky-600">
                    <Mail size={22} />
                  </div>
                  deekshagpbangera@gmail.com
                  <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-xs font-bold uppercase tracking-widest text-sky-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    {copied ? 'Copied!' : 'Click to Copy'}
                  </span>
                  {copied ? <Check size={18} className="text-sky-600" /> : <Copy size={18} className="opacity-30 group-hover:opacity-100 transition-opacity text-slate-600" />}
                </button>
                <a href="https://linkedin.com/in/deeksha-g-cybersec" target="_blank" rel="noreferrer" className="group flex items-center gap-4 text-lg font-bold text-slate-900 hover:text-sky-600 transition-colors w-fit">
                  <div className="p-3 bg-sky-100/70 rounded-xl text-sky-600">
                    <Linkedin size={22} />
                  </div>
                  LinkedIn Profile
                </a>
                <a href="https://github.com/DeekshaG96" target="_blank" rel="noreferrer" className="group flex items-center gap-4 text-lg font-bold text-slate-900 hover:text-sky-600 transition-colors w-fit">
                  <div className="p-3 bg-sky-100/70 rounded-xl text-sky-600">
                    <Github size={22} />
                  </div>
                  GitHub Profile
                </a>
              </div>
            </div>

            <div className="glass-card rounded-[3rem] p-10 md:p-12 space-y-8 shadow-2xl shadow-sky-900/5">
              <h3 className="text-2xl font-bold text-slate-900">Send an Opportunity / Message</h3>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-slate-500">Recruiter / Team Name</label>
                  <input type="text" placeholder="e.g., Tech Hiring Lead" className="w-full bg-sky-50/50 border border-sky-200 rounded-xl px-5 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-sky-500 outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-slate-500">Work Email</label>
                  <input type="email" placeholder="hiring@company.com" className="w-full bg-sky-50/50 border border-sky-200 rounded-xl px-5 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-sky-500 outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-slate-500">Role & Opportunity Details</label>
                  <textarea rows={4} placeholder="Tell me about the engineering role, team, and stack..." className="w-full bg-sky-50/50 border border-sky-200 rounded-xl px-5 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-sky-500 outline-none transition-colors resize-none" />
                </div>
                <button className="w-full bg-slate-900 text-white py-4.5 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-sky-600 transition-all flex items-center justify-center gap-3 shadow-md shadow-slate-900/10 hover:shadow-sky-600/25">
                  Connect on Opportunity <ArrowRight size={17} />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 bg-slate-900 text-white p-4 rounded-full shadow-2xl hover:bg-sky-600 transition-all group"
            title="Back to Top"
            aria-label="Back to Top"
          >
            <ChevronUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="py-16 border-t border-sky-200/70 text-center bg-white/40">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs font-semibold uppercase tracking-[0.2em]">
            © 2026 DEEKSHA G • ARCHITECTED WITH CALM CONFIDENCE & PRECISION.
          </p>
          <div className="flex gap-8 text-slate-500 text-xs font-semibold uppercase tracking-[0.2em]">
            <a href="#header" className="hover:text-sky-600 transition-colors">Back to Top</a>
            <span>Mangaluru, India (Open to Relocate)</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
