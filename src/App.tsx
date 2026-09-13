import { useState } from 'react';
import { 
  Github, 
  Mail, 
  Linkedin, 
  Phone,
  ArrowRight, 
  ArrowDown,
  ArrowUpRight,
  ExternalLink, 
  Download, 
  Copy, 
  Check, 
  Menu, 
  X,
  Cpu, 
  Brain, 
  Cloud, 
  ShieldCheck, 
  GraduationCap, 
  Award,
  Layers,
  Sparkles,
  MapPin,
  Calendar,
  BookOpen,
  Briefcase,
  Terminal,
  Database,
  Code2,
  Send,
  ChevronUp
} from 'lucide-react';

interface Project {
  num: string;
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

interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  badge: string;
  badgeType?: 'primary' | 'success' | 'warning';
  points: string[];
}

interface SkillCategory {
  title: string;
  icon: JSX.Element;
  skills: string[];
}

interface ServiceItem {
  title: string;
  description: string;
  icon: JSX.Element;
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  
  // Contact Form State
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('deekshagpbangera@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormState({ name: '', email: '', subject: '', message: '' });
      setFormSubmitted(false);
    }, 5000);
  };

  const projectCategories = ['All', 'Full-Stack', 'AI & Cloud', 'Security & Web3', 'Mobile'];

  const projects: Project[] = [
    {
      num: '01',
      title: 'RazorOps AI | Autonomous Reconciliation',
      tag: 'Razorpay AI Buildathon 2026 (Track 4)',
      category: 'AI & Cloud',
      metric: 'Razorpay Buildathon • 93.4% Match',
      desc: 'Autonomous financial reconciliation and liquidity intelligence engine built for Razorpay AI Buildathon 2026. Segregates deterministic math from Gemini Copilot reasoning, detecting MDR variances and modeling RBI nodal settlement cycles.',
      img: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=1000',
      github: 'https://github.com/DeekshaG96/razorops-ai',
      live: 'https://razorops-ai.web.app',
      tech: ['React 19', 'Gemini AI', 'Firebase', 'E2E Testing (19/19)', 'Tailwind CSS']
    },
    {
      num: '02',
      title: 'NaanStop Food Delivery & Kitchen OS',
      tag: 'Full-Stack / Restaurant ERP',
      category: 'Full-Stack',
      metric: 'Customer + Admin KDS + Android',
      desc: 'Full-stack multi-tier food ordering & restaurant ERP with real-time table reservations, live Kitchen Display System (KDS Kanban), JWT authentication, and Capacitor Android mobile app.',
      img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=1000',
      github: 'https://github.com/DeekshaG96/food-delivery-app',
      live: 'https://naanstop-customer.vercel.app',
      tech: ['React 18', 'Node.js', 'Express', 'MongoDB Atlas', 'Capacitor Android', 'JWT']
    },
    {
      num: '03',
      title: 'Eco-Track Resilient',
      tag: 'Google Solution Challenge 2026',
      category: 'AI & Cloud',
      metric: 'Gemini 1.5 Flash + Maps',
      desc: 'AI-assisted logistics intelligence prototype for Google Solution Challenge 2026. Predicts supply-chain disruption risks, calculates Scope 3 GLEC emissions, and simulates war room disaster recovery routing.',
      img: 'https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=1000',
      github: 'https://github.com/DeekshaG96/eco-track-logistics',
      live: 'https://techspire-13303696-1c68d.web.app',
      tech: ['Gemini 1.5 Flash', 'React', 'Vite', 'Google Maps API', 'Firebase', 'Tailwind CSS']
    },
    {
      num: '04',
      title: 'The Architectural Ledger',
      tag: 'Enterprise HRMS & Payroll',
      category: 'Full-Stack',
      metric: 'Enterprise RBAC & Payroll',
      desc: 'Modern Human Resources Management Suite engineered for enterprise administration, role-based departmental oversight, interactive Recharts analytics, and automated payroll calculation ledgers.',
      img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000',
      github: 'https://github.com/DeekshaG96/the-architectural-ledger',
      live: 'https://the-architectural-ledger.netlify.app/',
      tech: ['React 19', 'Vite', 'Tailwind CSS v4', 'Firebase', 'Recharts', 'Lucide React']
    },
    {
      num: '05',
      title: 'SIT Global Success Hub',
      tag: 'EdTech / MLOps Portal',
      category: 'AI & Cloud',
      metric: 'Random Forest + Gemini AI',
      desc: 'Institutional student success platform for Srinivas Institute of Technology CSBS scholars. Implements scikit-learn Random Forest outcome prediction, Google Gemini 1.5 Pro AI mentor, and zero-leak bcrypt auth.',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
      github: 'https://github.com/DeekshaG96/Student-Success-Dashboard',
      live: 'https://student-success-dashboard-cpnswmcahqbt6zwqkhwghy.streamlit.app/',
      tech: ['Python', 'Streamlit', 'Scikit-Learn', 'Gemini 1.5 Pro', 'Bcrypt', 'Pandas']
    },
    {
      num: '06',
      title: 'VotX Decentralized Voting System',
      tag: 'Web3 / Smart Contracts',
      category: 'Security & Web3',
      metric: 'Sepolia Ethereum dApp',
      desc: 'Tamper-proof electronic voting dApp with Solidity ^0.8.24 smart contracts on Sepolia Testnet. Employs MetaMask decentralized identity (DID) to eliminate double-voting and record immutable ballots.',
      img: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000',
      github: 'https://github.com/DeekshaG96/blockchain_proj',
      live: 'https://blockchainproj-7nj1.vercel.app',
      tech: ['Solidity', 'Ethereum Sepolia', 'Hardhat', 'Ethers.js', 'React', 'Tailwind CSS']
    },
    {
      num: '07',
      title: 'Smart Farmer Connect',
      tag: 'Agritech / Srinathon 2.0',
      category: 'Full-Stack',
      metric: '24-Hr Hackathon Build',
      desc: 'Agritech marketplace platform developed at Srinathon 2.0 International Hackathon bridging farmers directly with consumers. Features real-time crop market pricing and localized weather analytics.',
      img: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=1000',
      github: 'https://github.com/DeekshaG96/smart-farm-connect',
      live: 'https://v0-smart-farm-connect-ui.vercel.app/',
      tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'REST API', 'Vercel']
    },
    {
      num: '08',
      title: 'Netflix Platform (Clean Architecture)',
      tag: 'Clean Architecture / Streaming',
      category: 'Full-Stack',
      metric: 'Clean Architecture & TMDB',
      desc: 'High-fidelity video streaming web application designed with Clean Architecture principles. Features Firebase Auth, dynamic TMDB API integration, real-time movie search, and responsive video overlay.',
      img: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&q=80&w=1000',
      github: 'https://github.com/DeekshaG96/_netflix-clone_',
      live: 'https://netflix-clone-eight-liard-22.vercel.app',
      tech: ['React 18', 'TypeScript', 'Tailwind CSS', 'Firebase Auth', 'TMDB API', 'Framer Motion']
    },
    {
      num: '09',
      title: 'PlantGuard AI Diagnostics',
      tag: 'Computer Vision / TechSaksham',
      category: 'AI & Cloud',
      metric: 'Microsoft & SAP 94% Honors',
      desc: 'AICTE-TechSaksham (Microsoft & SAP) capstone deep learning model utilizing Convolutional Neural Networks (CNN) to detect agricultural crop diseases from leaf imagery with high accuracy.',
      img: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&q=80&w=1000',
      github: 'https://github.com/DeekshaG96/Plant-Disease-Detection-System-for-Sustainable-Agriculture-P2-',
      tech: ['Python', 'PyTorch', 'TensorFlow', 'CNN', 'OpenCV', 'Jupyter']
    },
    {
      num: '10',
      title: 'Soul Journal & Mental Wellness',
      tag: 'Mobile / Flutter & Cloud',
      category: 'Mobile',
      metric: 'Cross-Platform Flutter & Web',
      desc: 'Cross-platform mindful journaling and wellness mobile application engineered in Flutter. Features biometric security, mood tracking analytics, Pomodoro focus timer, and Cloud Firestore sync.',
      img: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=1000',
      github: 'https://github.com/DeekshaG96/soul_journal',
      live: 'https://soul-journal-65327.web.app/',
      tech: ['Flutter', 'Dart', 'Firebase', 'Cloud Firestore', 'Biometrics', 'Web']
    }
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const experiences: ExperienceItem[] = [
    { 
      period: 'May 2026 - Present', 
      role: 'Open Source Software Contributor', 
      company: 'GirlScript Summer of Code (GSSoC)',
      badge: 'Open Source',
      points: [
        'Actively contributing core features, automated triage pipelines, and bug fixes across community repositories.',
        'Configured automated GitHub Actions CI/CD workflows for linting, testing, and branch validation, cutting review cycles by 25%.'
      ]
    },
    { 
      period: 'Oct 2025 - Dec 2025', 
      role: 'Network Security Engineering Intern', 
      company: 'Fortinet (via AICTE & EduSkills)',
      badge: 'Grade O (90-100%)',
      points: [
        'Graduated with Grade O (Outstanding, 90-100%) across enterprise network security engineering curriculum.',
        'Configured stateful firewall inspection rules, Zero-Trust Network Access (ZTNA), and simulated enterprise attack vectors.'
      ]
    },
    { 
      period: 'Jan 2025 - Mar 2025', 
      role: 'Cybersecurity Engineering Intern', 
      company: 'Palo Alto Networks (via AICTE & EduSkills)',
      badge: 'Grade E (80-89%)',
      points: [
        'Completed 10-week intensive cybersecurity track, achieving Grade E (Excellent, 80-89%).',
        'Analyzed real-time network traffic telemetry, investigated simulated SOC alarms, and mitigated perimeter vulnerabilities.'
      ]
    },
    { 
      period: 'Nov 2024 - Dec 2024', 
      role: 'AI & Cloud Product Intern', 
      company: 'TechSaksham (Microsoft & SAP CSR Initiative)',
      badge: '94% ML Accuracy Honors',
      points: [
        'Engineered deep learning computer vision pipelines for sustainable agriculture, achieving 94% prediction accuracy.',
        'Optimized model inference latency for edge processing across 10,000+ agricultural data records.'
      ]
    },
    { 
      period: 'Oct 2024 - Dec 2024', 
      role: 'Cloud Infrastructure Engineering Intern', 
      company: 'AWS Academy',
      badge: 'Grade A Evaluation',
      points: [
        'Architected resilient cloud infrastructures utilizing AWS Core Services (EC2, S3, VPC, RDS, IAM) with Grade A evaluation.',
        'Engineered multi-AZ subnet topologies, routing tables, and security group policies for scalable microservice hosting.'
      ]
    }
  ];

  const skillCategories: SkillCategory[] = [
    {
      title: 'Programming Languages',
      icon: <Code2 className="w-5 h-5 text-emerald-400" />,
      skills: ['Python', 'Java', 'C++', 'TypeScript', 'JavaScript (ES6+)', 'Solidity', 'SQL', 'Dart']
    },
    {
      title: 'Frontend Architecture',
      icon: <Layers className="w-5 h-5 text-emerald-400" />,
      skills: ['React 19', 'Next.js', 'Tailwind CSS v4', 'HTML5 / CSS3', 'Vite', 'Redux Toolkit', 'Flutter']
    },
    {
      title: 'Backend & APIs',
      icon: <Terminal className="w-5 h-5 text-emerald-400" />,
      skills: ['Node.js', 'Express', 'FastAPI', 'RESTful APIs', 'JWT Authentication', 'Postman API Testing']
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud className="w-5 h-5 text-emerald-400" />,
      skills: ['AWS (EC2, S3, VPC, IAM)', 'Google Cloud', 'Firebase Hosting', 'Docker', 'GitHub Actions CI/CD']
    },
    {
      title: 'Database & Storage',
      icon: <Database className="w-5 h-5 text-emerald-400" />,
      skills: ['MongoDB Atlas', 'PostgreSQL', 'Supabase', 'Cloud Firestore', 'MySQL', 'Local JSON Storage']
    },
    {
      title: 'AI, ML & Security',
      icon: <Brain className="w-5 h-5 text-emerald-400" />,
      skills: ['Google Gemini AI', 'Scikit-Learn', 'PyTorch', 'CNNs', 'Zero-Trust (ZTNA)', 'Fortinet Firewalls']
    }
  ];

  const services: ServiceItem[] = [
    {
      title: 'Full-Stack Web Development',
      description: 'Building high-performance, responsive applications with React 19, Next.js, Node.js, and clean RESTful APIs.',
      icon: <Cpu className="w-6 h-6 text-emerald-400" />
    },
    {
      title: 'Applied AI & GenAI Systems',
      description: 'Integrating Google Gemini AI, prompt design, and scikit-learn models for operational business workflows.',
      icon: <Brain className="w-6 h-6 text-emerald-400" />
    },
    {
      title: 'Cloud Architecture & DevOps',
      description: 'Architecting resilient AWS and Google Cloud environments with automated CI/CD pipelines and cost-optimized compute.',
      icon: <Cloud className="w-6 h-6 text-emerald-400" />
    },
    {
      title: 'Network Security & Defense',
      description: 'Implementing Zero-Trust Network Access (ZTNA), stateful firewall policies, and secure cryptographic verification.',
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-[#090d0a] text-[#94a3b8] font-sans antialiased selection:bg-emerald-500/20 selection:text-emerald-400">
      
      {/* Background Ambient Lighting */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[3%] left-[50%] -translate-x-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[140px] rounded-full" />
        <div className="absolute top-[35%] right-[-10%] w-[500px] h-[500px] bg-emerald-600/5 blur-[160px] rounded-full" />
        <div className="absolute top-[70%] left-[-10%] w-[500px] h-[500px] bg-emerald-500/5 blur-[160px] rounded-full" />
      </div>

      {/* ==================== FLOATING NAVBAR ==================== */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-5 pb-3">
        <nav className="max-w-5xl mx-auto bg-[#111612]/90 backdrop-blur-xl border border-emerald-500/20 rounded-full px-6 py-3 flex justify-between items-center shadow-xl shadow-black/40">
          <a href="#home" className="font-cursive text-2xl sm:text-3xl text-white hover:text-emerald-400 transition-colors select-none">
            Deeksha G<span className="text-emerald-400 font-sans">.</span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 text-xs font-medium uppercase tracking-wider text-slate-300">
            <a href="#home" className="hover:text-emerald-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-emerald-400 transition-colors">Experience</a>
            <a href="#skills" className="hover:text-emerald-400 transition-colors">Skills</a>
            <a href="#education" className="hover:text-emerald-400 transition-colors">Education</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a 
              href="./Deeksha_G_Resume.pdf" 
              download="Deeksha_G_Resume.pdf" 
              className="inline-flex items-center gap-1.5 bg-[#161d17] hover:bg-[#1f2a20] text-slate-200 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider px-3.5 py-2 rounded-full transition-all"
            >
              Resume <Download size={13} />
            </a>
            <a 
              href="#contact" 
              className="bg-emerald-400 hover:bg-emerald-300 text-black font-semibold text-xs uppercase tracking-wider px-4 py-2 rounded-full transition-all shadow-md shadow-emerald-400/20 hover:shadow-emerald-400/30"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="lg:hidden text-white p-1 focus:outline-none" 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={22} className="text-emerald-400" /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden max-w-sm mx-auto mt-2 bg-[#111612]/95 backdrop-blur-2xl border border-emerald-500/20 rounded-3xl p-6 flex flex-col gap-4 text-sm font-medium shadow-2xl">
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-emerald-400 py-1">Home</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-emerald-400 py-1">About Me</a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-emerald-400 py-1">Featured Projects</a>
            <a href="#experience" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-emerald-400 py-1">Career Experience</a>
            <a href="#skills" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-emerald-400 py-1">Technical Skills</a>
            <a href="#education" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-emerald-400 py-1">Education</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-emerald-400 py-1">Contact</a>
            
            <a 
              href="./Deeksha_G_Resume.pdf" 
              download="Deeksha_G_Resume.pdf" 
              className="inline-flex items-center justify-center gap-2 bg-emerald-400 text-black text-center py-2.5 rounded-full text-xs font-bold uppercase tracking-wider mt-2 shadow-md shadow-emerald-400/20"
            >
              Download Resume (PDF) <Download size={14} />
            </a>
          </div>
        )}
      </header>

      {/* ==================== MAIN CONTENT CONTAINER ==================== */}
      <main className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-24 space-y-32">

        {/* ==================== 1. HERO SECTION ==================== */}
        <section id="home" className="text-center space-y-8 pt-4">
          
          {/* Eyebrow Status Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-medium tracking-wide">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Full-Stack Software Engineer • Available for Roles
          </div>

          {/* Headline */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight font-headline">
              Creative Engineer & <br />
              <span className="text-gradient">Full-Stack Cloud Architect</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
              B.E. in Computer Science & Business Systems from SIT Mangaluru (7.8 CGPA, 2026). Building resilient cloud architectures, scalable full-stack applications, and applied AI systems.
            </p>
          </div>

          {/* Centerpiece: Bedimcode Portrait Card with Continuous Rotating Badge */}
          <div className="relative w-64 sm:w-72 h-80 sm:h-96 mx-auto my-8">
            <div className="absolute inset-0 bg-emerald-500/20 blur-2xl rounded-full" />

            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border-2 border-emerald-400/40 shadow-2xl shadow-emerald-500/20 bg-gradient-to-b from-emerald-900/40 via-[#111612] to-[#090d0a]">
              <img 
                src="./assets/avatar.jpg" 
                alt="Deeksha G" 
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Rotating Circular Badge */}
            <div className="absolute -bottom-5 -right-5 w-24 h-24 rounded-full bg-[#111612] border-2 border-emerald-400/60 flex items-center justify-center shadow-xl shadow-black/80">
              <svg className="w-full h-full animate-spin-slow p-1" viewBox="0 0 100 100">
                <path 
                  id="circlePath" 
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" 
                  fill="transparent" 
                />
                <text className="text-[9.5px] font-bold uppercase tracking-[0.22em] fill-emerald-400">
                  <textPath href="#circlePath">
                    EXPLORE • MORE • LET'S BUILD •
                  </textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-emerald-400">
                <ArrowDown size={16} />
              </div>
            </div>
          </div>

          {/* Standardized Hero Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto pt-4 pb-2">
            <div className="bedim-card rounded-2xl p-4 text-center">
              <p className="text-2xl sm:text-3xl font-bold text-emerald-400 font-headline">5+</p>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 pt-1">Internships</p>
            </div>
            <div className="bedim-card rounded-2xl p-4 text-center">
              <p className="text-2xl sm:text-3xl font-bold text-emerald-400 font-headline">10+</p>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 pt-1">Live Projects</p>
            </div>
            <div className="bedim-card rounded-2xl p-4 text-center">
              <p className="text-2xl sm:text-3xl font-bold text-emerald-400 font-headline">7.8</p>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 pt-1">CGPA (CSBS)</p>
            </div>
            <div className="bedim-card rounded-2xl p-4 text-center">
              <p className="text-2xl sm:text-3xl font-bold text-emerald-400 font-headline">Grade O</p>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 pt-1">Security Honors</p>
            </div>
          </div>

          {/* Quick CTA Actions */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 bg-emerald-400 hover:bg-emerald-300 text-black text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full transition-all shadow-md shadow-emerald-400/20"
            >
              Get In Touch <ArrowRight size={14} />
            </a>
            <a 
              href="./Deeksha_G_Resume.pdf" 
              download="Deeksha_G_Resume.pdf" 
              className="inline-flex items-center gap-2 bg-[#161d17] hover:bg-[#1f2a20] text-slate-200 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-full transition-all"
            >
              Download CV <Download size={14} />
            </a>
          </div>
        </section>

        {/* ==================== 2. ABOUT ME SECTION ==================== */}
        <section id="about" className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Profile Overview</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-headline">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
              Bridging technical software engineering with business systems strategy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Biography Card */}
            <div className="bedim-card rounded-3xl p-6 sm:p-8 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wider font-headline">
                  <Briefcase size={16} className="text-emerald-400" />
                  <span>Engineering Philosophy</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  I am a pre-final year Computer Science & Business Systems engineering student at <span className="text-white font-semibold">Srinivas Institute of Technology (SIT), Mangaluru</span> with an academic record of <span className="text-emerald-400 font-semibold">7.8 CGPA</span> (graduating in June 2026).
                </p>
                <p className="text-sm text-slate-400 leading-relaxed">
                  My experience spans enterprise internships at <span className="text-slate-200">Fortinet</span> (Grade O), <span className="text-slate-200">Palo Alto Networks</span> (Grade E), <span className="text-slate-200">TechSaksham / Microsoft & SAP</span> (94% accuracy), and <span className="text-slate-200">AWS Academy</span> (Grade A), along with open-source contributions in GSSoC 2024.
                </p>
              </div>

              <div className="pt-4 border-t border-emerald-500/10 flex flex-wrap gap-4 text-xs">
                <div className="flex items-center gap-1.5 text-slate-300">
                  <MapPin size={14} className="text-emerald-400" />
                  <span>Mangaluru, India</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-300">
                  <Calendar size={14} className="text-emerald-400" />
                  <span>Graduating June 2026</span>
                </div>
              </div>
            </div>

            {/* 4 Pillars of Excellence */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bedim-card rounded-2xl p-5 space-y-2">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <GraduationCap size={18} />
                </div>
                <h3 className="text-sm font-bold text-white font-headline">B.E. in CSBS</h3>
                <p className="text-xs text-slate-400">7.8 CGPA • VTU Affiliated curriculum covering DSA, Cloud, OS & AI.</p>
              </div>

              <div className="bedim-card rounded-2xl p-5 space-y-2">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Award size={18} />
                </div>
                <h3 className="text-sm font-bold text-white font-headline">5 Internships</h3>
                <p className="text-xs text-slate-400">Fortinet Grade O, Palo Alto Grade E, TechSaksham 94%, AWS Grade A.</p>
              </div>

              <div className="bedim-card rounded-2xl p-5 space-y-2">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Sparkles size={18} />
                </div>
                <h3 className="text-sm font-bold text-white font-headline">Hackathons</h3>
                <p className="text-xs text-slate-400">Google Solution Challenge '26, Razorpay AI Buildathon '26, Srinathon 2.0.</p>
              </div>

              <div className="bedim-card rounded-2xl p-5 space-y-2">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <ShieldCheck size={18} />
                </div>
                <h3 className="text-sm font-bold text-white font-headline">Security & Cloud</h3>
                <p className="text-xs text-slate-400">Zero-Trust Network Access (ZTNA), AWS Core Infrastructure & Web3.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== 3. FEATURED PROJECTS SECTION ==================== */}
        <section id="projects" className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Portfolio Work</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-headline">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
              Real-world engineering platforms built with modern tech stacks, live production URLs, and public GitHub code.
            </p>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap justify-center gap-2 pt-4">
              {projectCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                    activeCategory === cat
                      ? 'bg-emerald-400 text-black font-semibold shadow-md shadow-emerald-400/20'
                      : 'bg-[#111612] text-slate-400 border border-emerald-500/20 hover:text-white hover:border-emerald-400/50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* 3-Column Work Grid (Standardized Card Architecture) */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((p) => (
              <div 
                key={p.title} 
                className="bedim-card rounded-3xl p-4 flex flex-col justify-between group"
              >
                <div>
                  {/* Image Container with View Arrow */}
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-black/40 border border-emerald-500/20">
                    <img 
                      src={p.img} 
                      alt={p.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute top-2.5 left-2.5 bg-black/85 backdrop-blur-md px-2 py-0.5 rounded-md text-[10px] font-bold text-emerald-400 border border-emerald-500/30">
                      {p.metric}
                    </span>
                    <a 
                      href={p.live || p.github} 
                      target="_blank" 
                      rel="noreferrer"
                      className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-emerald-400 hover:bg-emerald-300 text-black flex items-center justify-center transition-all shadow-md"
                      title={p.live ? "Live Demo" : "View Code"}
                    >
                      <ArrowUpRight size={15} />
                    </a>
                  </div>

                  {/* Card Details */}
                  <div className="pt-4 pb-2 space-y-1.5">
                    <span className="text-xs font-bold text-emerald-400 font-headline block">
                      {p.num}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-400 transition-colors font-headline line-clamp-1">
                      {p.title}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>

                {/* Footer with Tech & Action Links */}
                <div className="pt-3 border-t border-emerald-500/10 flex items-center justify-between text-[11px] mt-2">
                  <span className="text-slate-500 truncate max-w-[130px]">
                    {p.tech.slice(0, 2).join(', ')}
                  </span>
                  <div className="flex items-center gap-3">
                    {p.live && (
                      <a 
                        href={p.live} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1"
                      >
                        Live <ExternalLink size={12} />
                      </a>
                    )}
                    <a 
                      href={p.github} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-slate-400 hover:text-white font-semibold flex items-center gap-1"
                    >
                      Code <Github size={12} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==================== 4. EXPERIENCE & INTERNSHIPS ==================== */}
        <section id="experience" className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Career Timeline</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-headline">
              Work <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
              Chronological track record of 5 enterprise internships and open-source contributions.
            </p>
          </div>

          <div className="space-y-4">
            {experiences.map((exp, idx) => (
              <div key={idx} className="bedim-card rounded-3xl p-6 space-y-3">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-1.5 border-b border-emerald-500/10 pb-3">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base sm:text-lg font-bold text-white font-headline">{exp.role}</h3>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        {exp.badge}
                      </span>
                    </div>
                    <p className="text-xs font-medium text-slate-300 pt-0.5">{exp.company}</p>
                  </div>
                  <span className="text-xs text-emerald-400 font-medium whitespace-nowrap">{exp.period}</span>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-400">
                  {exp.points.map((pt, pidx) => (
                    <li key={pidx} className="flex gap-2 leading-relaxed">
                      <span className="text-emerald-400 font-bold">•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ==================== 5. EDUCATION SECTION ==================== */}
        <section id="education" className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Academic Background</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-headline">
              Formal <span className="text-gradient">Education</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
              University degree foundation blending core computer science with enterprise business management.
            </p>
          </div>

          <div className="bedim-card rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-start gap-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                <GraduationCap size={16} /> Bachelor of Engineering (B.E.)
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-headline">
                Computer Science & Business Systems (CSBS)
              </h3>
              <p className="text-sm text-slate-300 font-medium">
                Srinivas Institute of Technology (SIT), Mangaluru
              </p>
              <p className="text-xs text-slate-400">
                Affiliated with Visvesvaraya Technological University (VTU), Belagavi
              </p>
              <p className="text-xs text-slate-400 pt-2 leading-relaxed max-w-xl">
                <span className="text-slate-300 font-semibold">Key Coursework:</span> Data Structures & Algorithms, Object-Oriented Programming (Java/C++), Operating Systems, Database Management Systems (DBMS), Computer Networks, Software Engineering, Cloud Computing, Artificial Intelligence.
              </p>
            </div>

            <div className="sm:text-right shrink-0 bg-[#161d17] border border-emerald-500/20 rounded-2xl p-5 w-full sm:w-auto">
              <span className="text-xs text-slate-400 block">2022 – 2026</span>
              <p className="text-3xl font-bold text-emerald-400 font-headline my-1">7.8 CGPA</p>
              <span className="inline-block text-[11px] font-semibold text-emerald-300 bg-emerald-950/70 border border-emerald-500/30 px-3 py-1 rounded-full">
                Graduating June 2026
              </span>
            </div>
          </div>
        </section>

        {/* ==================== 6. SKILLS SECTION ==================== */}
        <section id="skills" className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Technical Arsenal</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-headline">
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
              Standard categorization of programming languages, frameworks, cloud services, and security competencies.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillCategories.map((domain, i) => (
              <div key={i} className="bedim-card rounded-3xl p-6 space-y-3 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-2.5 text-white font-bold text-sm uppercase tracking-wider font-headline">
                    <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                      {domain.icon}
                    </div>
                    <span>{domain.title}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {domain.skills.map((skill) => (
                      <span 
                        key={skill} 
                        className="px-2.5 py-1 rounded-lg bg-[#182019] text-slate-200 border border-emerald-500/20 text-xs font-medium hover:border-emerald-400/60 hover:text-white transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==================== 7. SERVICES SECTION ==================== */}
        <section id="services" className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Core Offerings</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-headline">
              My <span className="text-gradient">Services</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
              Specialized technical competencies I bring to engineering teams and digital projects.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {services.map((s, idx) => (
              <div key={idx} className="bedim-card rounded-3xl p-6 space-y-3 group">
                <div className="w-12 h-12 rounded-2xl bg-[#1a231b] border border-emerald-500/30 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                  {s.icon}
                </div>
                <h3 className="text-lg font-bold text-white font-headline">{s.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ==================== 8. CONTACT SECTION ==================== */}
        <section id="contact" className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Get In Touch</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-headline">
              Contact <span className="text-gradient">Me</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
              Interested in discussing a software engineering role, internship, or technical collaboration? Let's connect!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Functional Contact Form */}
            <div className="bedim-card rounded-3xl p-6 sm:p-8 space-y-4">
              <h3 className="text-lg font-bold text-white font-headline">Send a Direct Message</h3>
              
              {formSubmitted ? (
                <div className="bg-emerald-950/80 border border-emerald-500/40 rounded-2xl p-6 text-center space-y-2 animate-fadeIn">
                  <div className="w-10 h-10 rounded-full bg-emerald-400 text-black flex items-center justify-center mx-auto">
                    <Check size={20} />
                  </div>
                  <h4 className="text-base font-bold text-white font-headline">Message Dispatched!</h4>
                  <p className="text-xs text-slate-300">
                    Thank you! Your message has been sent. Deeksha will get back to you promptly at {formState.email || 'your email'}.
                  </p>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleFormSubmit}>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">Your Name *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Priya Sharma" 
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                      className="w-full bg-[#182019] border border-emerald-500/20 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-emerald-400 outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">Email Address *</label>
                    <input 
                      type="email" 
                      required
                      placeholder="e.g. priya@company.com" 
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                      className="w-full bg-[#182019] border border-emerald-500/20 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-emerald-400 outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">Subject</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Software Engineering Opportunity" 
                      value={formState.subject}
                      onChange={(e) => setFormState({...formState, subject: e.target.value})}
                      className="w-full bg-[#182019] border border-emerald-500/20 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-emerald-400 outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">Message *</label>
                    <textarea 
                      rows={4} 
                      required
                      placeholder="Tell me about the engineering opportunity, timeline, or requirements..." 
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                      className="w-full bg-[#182019] border border-emerald-500/20 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-emerald-400 outline-none transition-colors resize-none"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-emerald-400 hover:bg-emerald-300 text-black font-bold uppercase tracking-wider text-xs py-3.5 rounded-xl transition-all shadow-md shadow-emerald-400/20 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Send Message <Send size={14} />
                  </button>
                </form>
              )}
            </div>

            {/* Direct Channels Cards */}
            <div className="space-y-3">
              <button 
                onClick={copyEmail}
                className="bedim-card rounded-2xl p-5 text-left flex items-center justify-between group hover:border-emerald-400/60 w-full cursor-pointer"
              >
                <div className="space-y-0.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                    <Mail size={13} /> Official Email
                  </span>
                  <p className="text-sm font-semibold text-white">deekshagpbangera@gmail.com</p>
                </div>
                <span className="text-xs font-medium text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-3 py-1 rounded-full">
                  {copiedEmail ? 'Copied!' : 'Copy'}
                </span>
              </button>

              <a 
                href="https://linkedin.com/in/deeksha-g-cybersec" 
                target="_blank" 
                rel="noreferrer" 
                className="bedim-card rounded-2xl p-5 flex items-center justify-between group hover:border-emerald-400/60"
              >
                <div className="space-y-0.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                    <Linkedin size={13} /> LinkedIn Profile
                  </span>
                  <p className="text-sm font-semibold text-white">linkedin.com/in/deeksha-g-cybersec</p>
                </div>
                <ArrowUpRight size={18} className="text-slate-400 group-hover:text-emerald-400 transition-colors" />
              </a>

              <a 
                href="https://github.com/DeekshaG96" 
                target="_blank" 
                rel="noreferrer" 
                className="bedim-card rounded-2xl p-5 flex items-center justify-between group hover:border-emerald-400/60"
              >
                <div className="space-y-0.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                    <Github size={13} /> GitHub Profile
                  </span>
                  <p className="text-sm font-semibold text-white">github.com/DeekshaG96</p>
                </div>
                <ArrowUpRight size={18} className="text-slate-400 group-hover:text-emerald-400 transition-colors" />
              </a>

              <div className="bedim-card rounded-2xl p-5 flex items-center justify-between">
                <div className="space-y-0.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                    <Phone size={13} /> Contact Telephone
                  </span>
                  <p className="text-sm font-semibold text-white">+91 91108 55431</p>
                </div>
                <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-1 rounded-full">
                  Available
                </span>
              </div>

              <div className="bedim-card rounded-2xl p-5 flex items-center justify-between">
                <div className="space-y-0.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                    <MapPin size={13} /> Location & Mobility
                  </span>
                  <p className="text-sm font-semibold text-white">Mangaluru, India</p>
                  <p className="text-xs text-slate-400">Open to Relocation across India & Global Remote</p>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ==================== FOOTER ==================== */}
      <footer className="border-t border-emerald-500/10 bg-[#070a08] py-14 text-center space-y-6">
        <div className="max-w-4xl mx-auto px-6 space-y-5">
          <a href="#home" className="font-cursive text-3xl text-white inline-block hover:text-emerald-400 transition-colors">
            Deeksha G<span className="text-emerald-400 font-sans">.</span>
          </a>

          <h2 className="text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-wider text-white font-headline max-w-xl mx-auto leading-snug">
            Collaborate with Deeksha and build reliable engineering systems today.
          </h2>

          <div className="flex flex-wrap justify-center gap-6 text-xs uppercase tracking-wider font-semibold text-slate-400 pt-2">
            <a href="#home" className="hover:text-emerald-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-emerald-400 transition-colors">Experience</a>
            <a href="#skills" className="hover:text-emerald-400 transition-colors">Skills</a>
            <a href="#education" className="hover:text-emerald-400 transition-colors">Education</a>
            <a href="./Deeksha_G_Resume.pdf" download="Deeksha_G_Resume.pdf" className="text-emerald-400 hover:text-emerald-300">Resume PDF</a>
          </div>

          <div className="flex justify-center gap-4 pt-2">
            <a 
              href="https://github.com/DeekshaG96" 
              target="_blank" 
              rel="noreferrer" 
              className="w-10 h-10 rounded-full bg-[#111612] border border-emerald-500/20 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-400 transition-colors shadow-sm"
              title="GitHub Profile"
            >
              <Github size={16} />
            </a>
            <a 
              href="https://linkedin.com/in/deeksha-g-cybersec" 
              target="_blank" 
              rel="noreferrer" 
              className="w-10 h-10 rounded-full bg-[#111612] border border-emerald-500/20 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-400 transition-colors shadow-sm"
              title="LinkedIn Profile"
            >
              <Linkedin size={16} />
            </a>
            <button 
              onClick={copyEmail} 
              className="w-10 h-10 rounded-full bg-[#111612] border border-emerald-500/20 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-400 transition-colors shadow-sm cursor-pointer" 
              title="Copy Email Address"
            >
              <Mail size={16} />
            </button>
            <a 
              href="#home"
              className="w-10 h-10 rounded-full bg-[#111612] border border-emerald-500/20 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-400 transition-colors shadow-sm"
              title="Back to Top"
            >
              <ChevronUp size={16} />
            </a>
          </div>

          <p className="text-xs text-slate-500 pt-4">
            © {new Date().getFullYear()} Deeksha G. All Rights Reserved. Built with React 19, TypeScript & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
