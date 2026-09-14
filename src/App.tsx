import { useState, useEffect } from 'react';
import { 
  Github, 
  Mail, 
  ArrowRight, 
  ArrowUpRight,
  ExternalLink, 
  Download, 
  Copy, 
  Check, 
  Menu, 
  X,
  Brain, 
  Cloud, 
  ShieldCheck, 
  GraduationCap, 
  Award,
  Layers,
  Sparkles,
  Calendar,
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

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  
  // Contact Form State
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Typewriter Animation State (Amelia Portfolio style)
  const typewriterWords = [
    'Full-Stack Developer',
    'Applied AI Engineer',
    'Cloud & DevOps Builder',
    '7th Sem CSBS Engineer'
  ];
  const [wordIndex, setWordIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = typewriterWords[wordIndex];

    if (!isDeleting && subIndex === currentWord.length) {
      const timeout = setTimeout(() => setIsDeleting(true), 2200);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && subIndex === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % typewriterWords.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? 35 : 85);

    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, wordIndex]);

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
      num: '09',
      title: 'Soul Journal & Mental Wellness',
      tag: 'Mobile / Flutter & Cloud',
      category: 'Mobile',
      metric: 'Cross-Platform Flutter & Web',
      desc: 'Cross-platform mindful journaling and wellness mobile application engineered in Flutter. Features biometric security, mood tracking analytics, Pomodoro focus timer, and Cloud Firestore sync.',
      img: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=1000',
      github: 'https://github.com/DeekshaG96/soul_journal',
      live: 'https://soul-journal-65327.web.app/',
      tech: ['Flutter', 'Dart', 'Firebase', 'Cloud Firestore', 'Biometrics', 'Web']
    },
    {
      num: '10',
      title: 'AI Text Summarizer',
      tag: 'NLP / GenAI Engine',
      category: 'AI & Cloud',
      metric: 'Transformer NLP API',
      desc: 'High-throughput document intelligence workspace integrating Hugging Face transformer models to parse, synthesize, and extract key action items from lengthy technical documents.',
      img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000',
      github: 'https://github.com/DeekshaG96/aitextsummarizer',
      live: 'https://aitextsummarizer-omega.vercel.app',
      tech: ['JavaScript', 'Hugging Face API', 'HTML5', 'CSS3', 'Vercel']
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
      icon: <Code2 className="w-5 h-5 text-[#6d4300]" />,
      skills: ['Python', 'Java', 'C++', 'TypeScript', 'JavaScript (ES6+)', 'Solidity', 'SQL', 'Dart']
    },
    {
      title: 'Frontend Architecture',
      icon: <Layers className="w-5 h-5 text-[#6d4300]" />,
      skills: ['React 19', 'Next.js', 'Tailwind CSS v4', 'HTML5 / CSS3', 'Vite', 'Redux Toolkit', 'Flutter']
    },
    {
      title: 'Backend & APIs',
      icon: <Terminal className="w-5 h-5 text-[#6d4300]" />,
      skills: ['Node.js', 'Express', 'FastAPI', 'RESTful APIs', 'JWT Authentication', 'Postman API Testing']
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud className="w-5 h-5 text-[#6d4300]" />,
      skills: ['AWS (EC2, S3, VPC, IAM)', 'Google Cloud', 'Firebase Hosting', 'Docker', 'GitHub Actions CI/CD']
    },
    {
      title: 'Database & Storage',
      icon: <Database className="w-5 h-5 text-[#6d4300]" />,
      skills: ['MongoDB Atlas', 'PostgreSQL', 'Supabase', 'Cloud Firestore', 'MySQL', 'Local JSON Storage']
    },
    {
      title: 'AI, ML & Security',
      icon: <Brain className="w-5 h-5 text-[#6d4300]" />,
      skills: ['Google Gemini AI', 'Scikit-Learn', 'PyTorch', 'CNNs', 'Zero-Trust (ZTNA)', 'Fortinet Firewalls']
    }
  ];

  return (
    <div className="min-h-screen font-sans antialiased text-[#57534e]">
      
      {/* Background Soft Glow Accents */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-5%] left-[20%] w-[650px] h-[450px] bg-[#f8d7b3]/40 blur-[130px] rounded-full" />
        <div className="absolute top-[35%] right-[-10%] w-[550px] h-[550px] bg-[#eed0ab]/35 blur-[150px] rounded-full" />
        <div className="absolute top-[75%] left-[-10%] w-[600px] h-[600px] bg-[#faebd7]/50 blur-[160px] rounded-full" />
      </div>

      {/* ==================== FLOATING NAVBAR ==================== */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-3.5 pb-2 bg-gradient-to-b from-[#fffdfa] via-[#fffdfa]/95 to-transparent">
        <nav className="max-w-6xl mx-auto bg-white/85 backdrop-blur-xl border border-[#6d4300]/15 rounded-full px-6 py-3 flex justify-between items-center shadow-lg shadow-[#6d4300]/5">
          <a href="#home" className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1c1917] hover:text-[#6d4300] transition-colors select-none font-headline">
            Deeksha <span className="text-[#6d4300]">G.</span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7 text-xs font-semibold uppercase tracking-wider text-[#44403c]">
            <a href="#home" className="hover:text-[#6d4300] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#6d4300] hover:after:w-full after:transition-all">Home</a>
            <a href="#about" className="hover:text-[#6d4300] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#6d4300] hover:after:w-full after:transition-all">About</a>
            <a href="#projects" className="hover:text-[#6d4300] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#6d4300] hover:after:w-full after:transition-all">Projects</a>
            <a href="#experience" className="hover:text-[#6d4300] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#6d4300] hover:after:w-full after:transition-all">Experience</a>
            <a href="#education" className="hover:text-[#6d4300] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#6d4300] hover:after:w-full after:transition-all">Education</a>
            <a href="#skills" className="hover:text-[#6d4300] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#6d4300] hover:after:w-full after:transition-all">Skills</a>
            <a href="#contact" className="hover:text-[#6d4300] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#6d4300] hover:after:w-full after:transition-all">Contact</a>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a 
              href="./Deeksha_G_Resume.pdf" 
              download="Deeksha_G_Resume.pdf" 
              className="inline-flex items-center gap-1.5 btn-outline-caramel text-xs font-bold uppercase tracking-wider px-4 py-2"
            >
              Resume <Download size={13} />
            </a>
            <a 
              href="#contact" 
              className="btn-caramel text-xs font-bold uppercase tracking-wider px-5 py-2.5"
            >
              Contact Me
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="lg:hidden text-[#1c1917] p-1 focus:outline-none" 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} className="text-[#6d4300]" /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden max-w-sm mx-auto mt-2 bg-white/95 backdrop-blur-2xl border border-[#6d4300]/20 rounded-3xl p-6 flex flex-col gap-4 text-sm font-semibold shadow-2xl">
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-[#1c1917] hover:text-[#6d4300] py-1">Home</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-[#1c1917] hover:text-[#6d4300] py-1">About Me</a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)} className="text-[#1c1917] hover:text-[#6d4300] py-1">Featured Projects</a>
            <a href="#experience" onClick={() => setIsMenuOpen(false)} className="text-[#1c1917] hover:text-[#6d4300] py-1">Career Experience</a>
            <a href="#education" onClick={() => setIsMenuOpen(false)} className="text-[#1c1917] hover:text-[#6d4300] py-1">Education</a>
            <a href="#skills" onClick={() => setIsMenuOpen(false)} className="text-[#1c1917] hover:text-[#6d4300] py-1">Technical Skills</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-[#1c1917] hover:text-[#6d4300] py-1">Contact</a>
            
            <a 
              href="./Deeksha_G_Resume.pdf" 
              download="Deeksha_G_Resume.pdf" 
              className="inline-flex items-center justify-center gap-2 btn-caramel text-center py-2.5 text-xs font-bold uppercase tracking-wider mt-2"
            >
              Download Resume (PDF) <Download size={14} />
            </a>
          </div>
        )}
      </header>

      {/* ==================== MAIN CONTENT CONTAINER ==================== */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-28 sm:pt-36 pb-24 space-y-28 sm:space-y-36">

        {/* ==================== 1. HERO SECTION (AMELIA TUTORIAL STYLE) ==================== */}
        <section id="home" className="min-h-[80vh] flex items-center pt-2 sm:pt-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full">
            
            {/* Left Column: Organic Contoured Pebble Avatar */}
            <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
              <div className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[460px] animate-float-pebble">
                {/* Ambient Glow Backdrop */}
                <div className="absolute inset-0 bg-[#d4a373]/30 blur-[60px] rounded-full scale-90 -z-10" />
                
                {/* Organic Pebble Composite Image */}
                <img 
                  src="./assets/avatar-blob.png" 
                  alt="Deeksha G. - Software Engineer" 
                  className="w-full h-auto drop-shadow-2xl select-none"
                />

                {/* Micro floating badge */}
                <div className="absolute -bottom-2 -right-2 sm:bottom-4 sm:right-0 bg-white/95 backdrop-blur-md border border-[#6d4300]/20 rounded-2xl p-3 shadow-xl flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#6d4300] text-white flex items-center justify-center text-xs font-bold">
                    <Sparkles size={15} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#78350f] font-bold block">Academic Record</span>
                    <span className="text-xs font-bold text-[#1c1917]">7.8 CGPA • 7th Sem</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Narrative & Typewriter Content */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2 text-center lg:text-left">
              
              {/* Status Pill */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#faebd7]/90 border border-[#6d4300]/25 text-[#6d4300] text-xs font-semibold tracking-wide shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#6d4300] animate-pulse" />
                <span>7th Sem Engineer (2023 – 2027) • Open for Roles</span>
              </div>

              {/* Greeting & Headline */}
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1c1917] tracking-tight font-headline">
                  Hey I'm <span className="text-gradient">Deeksha</span>
                </h1>

                {/* Animated Typewriter Subtitle */}
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1c1917] font-headline min-h-[44px] flex items-center justify-center lg:justify-start">
                  <span>I'm a&nbsp;</span>
                  <span className="text-[#6d4300] text-caramel-glow">
                    {typewriterWords[wordIndex].substring(0, subIndex)}
                  </span>
                  <span className="cursor-blink border-r-3 border-[#6d4300] ml-1 h-7 inline-block"></span>
                </div>
              </div>

              {/* High-Signal Summary */}
              <p className="text-sm sm:text-base text-[#44403c] leading-relaxed max-w-xl mx-auto lg:mx-0">
                7th Semester undergraduate pursuing <strong className="text-[#1c1917]">B.E. in Computer Science & Business Systems</strong> at <strong className="text-[#1c1917]">Srinivas Institute of Technology (SIT), Mangaluru</strong> (Batch 2023–2027, 7.8 CGPA). Hands-on experience architecting scalable full-stack applications, applied AI workflows, and resilient cloud systems across 5 technical internships.
              </p>

              {/* Key Metrics Strip */}
              <div className="grid grid-cols-3 gap-3 max-w-lg mx-auto lg:mx-0 pt-1">
                <div className="amelia-card rounded-2xl p-3.5 text-center">
                  <span className="block text-xl sm:text-2xl font-extrabold text-[#6d4300] font-headline">7.8</span>
                  <span className="text-[11px] text-[#57534e] font-medium">CGPA (2023–2027)</span>
                </div>
                <div className="amelia-card rounded-2xl p-3.5 text-center">
                  <span className="block text-xl sm:text-2xl font-extrabold text-[#6d4300] font-headline">5</span>
                  <span className="text-[11px] text-[#57534e] font-medium">Internships</span>
                </div>
                <div className="amelia-card rounded-2xl p-3.5 text-center">
                  <span className="block text-xl sm:text-2xl font-extrabold text-[#6d4300] font-headline">10+</span>
                  <span className="text-[11px] text-[#57534e] font-medium">Live Projects</span>
                </div>
              </div>

              {/* Circular Social Buttons (Iconic Amelia Tutorial Style) */}
              <div className="flex items-center justify-center lg:justify-start gap-4 pt-2">
                <a 
                  href="https://github.com/DeekshaG96" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="social-circle"
                  title="GitHub Profile"
                >
                  <Github size={19} />
                </a>
                <button 
                  onClick={copyEmail}
                  className="social-circle cursor-pointer"
                  title="Copy Official Email"
                >
                  {copiedEmail ? <Check size={19} /> : <Mail size={19} />}
                </button>
                <a 
                  href="./Deeksha_G_Resume.pdf" 
                  download="Deeksha_G_Resume.pdf" 
                  className="social-circle"
                  title="Download Resume PDF"
                >
                  <Download size={19} />
                </a>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <a 
                  href="./Deeksha_G_Resume.pdf" 
                  download="Deeksha_G_Resume.pdf"
                  className="btn-caramel text-xs font-bold uppercase tracking-wider px-8 py-3.5 inline-flex items-center gap-2"
                >
                  Download CV <Download size={14} />
                </a>
                <a 
                  href="#contact"
                  className="btn-outline-caramel text-xs font-bold uppercase tracking-wider px-7 py-3.5 inline-flex items-center gap-2"
                >
                  Contact Me <ArrowRight size={14} />
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* ==================== 2. ABOUT SECTION ==================== */}
        <section id="about" className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#6d4300]">Profile & Focus</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1917] font-headline">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#57534e] max-w-xl mx-auto">
              Academic foundation in computer science and business systems, complemented by enterprise-grade engineering experience.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6 items-stretch">
            {/* Background & Engineering Narrative */}
            <div className="md:col-span-3 amelia-card rounded-3xl p-6 sm:p-8 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 text-[#1c1917] font-bold text-sm uppercase tracking-wider font-headline">
                  <Briefcase size={16} className="text-[#6d4300]" />
                  <span>Engineering Focus</span>
                </div>
                <p className="text-sm text-[#44403c] leading-relaxed">
                  I am a 7th Semester undergraduate pursuing <span className="text-[#1c1917] font-semibold">B.E. in Computer Science & Business Systems</span> at <span className="text-[#1c1917] font-semibold">Srinivas Institute of Technology (SIT), Mangaluru</span> (Batch 2023–2027, 7.8 CGPA).
                </p>
                <p className="text-sm text-[#57534e] leading-relaxed">
                  My technical focus centers on architecting scalable full-stack applications, integrating intelligent AI workflows, and deploying resilient cloud services. Through 5 internships across cybersecurity (<span className="text-[#1c1917] font-medium">Fortinet, Palo Alto Networks</span>), applied AI (<span className="text-[#1c1917] font-medium">Microsoft & SAP TechSaksham</span>), and cloud computing (<span className="text-[#1c1917] font-medium">AWS Academy</span>), I prioritize clean code, performance, and reliable system design.
                </p>
              </div>

              <div className="pt-4 border-t border-[#6d4300]/15 flex flex-wrap items-center justify-between gap-4 text-xs">
                <div className="flex items-center gap-1.5 text-[#57534e]">
                  <Calendar size={14} className="text-[#6d4300]" />
                  <span>7th Semester • Batch 2023 – 2027</span>
                </div>
                <span className="text-[#6d4300] font-bold bg-[#fceade] border border-[#6d4300]/30 px-3 py-1 rounded-full">
                  7.8 CGPA • VTU Affiliated
                </span>
              </div>
            </div>

            {/* Core Competencies */}
            <div className="md:col-span-2 amelia-card rounded-3xl p-6 sm:p-8 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 text-[#1c1917] font-bold text-sm uppercase tracking-wider font-headline">
                  <Sparkles size={16} className="text-[#6d4300]" />
                  <span>Core Strengths</span>
                </div>
                <ul className="space-y-3 text-xs text-[#44403c]">
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#6d4300] mt-1 shrink-0" />
                    <span><strong className="text-[#1c1917]">Full-Stack Web:</strong> React 19, Next.js, TypeScript, Node.js, Express, Tailwind CSS</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#6d4300] mt-1 shrink-0" />
                    <span><strong className="text-[#1c1917]">Applied AI & ML:</strong> Google Gemini API, Hugging Face NLP, PyTorch Computer Vision</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#6d4300] mt-1 shrink-0" />
                    <span><strong className="text-[#1c1917]">Cloud & DevOps:</strong> AWS, Google Cloud, Firebase, Docker, GitHub Actions CI/CD</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#6d4300] mt-1 shrink-0" />
                    <span><strong className="text-[#1c1917]">CS Foundations:</strong> Data Structures, Algorithms, DBMS, Operating Systems, Networks</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-[#6d4300]/15">
                <a 
                  href="#projects" 
                  className="text-xs font-bold text-[#6d4300] hover:text-[#543400] inline-flex items-center gap-1.5 transition-colors uppercase tracking-wider"
                >
                  View Featured Projects <ArrowRight size={13} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== 3. FEATURED PROJECTS ==================== */}
        <section id="projects" className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#6d4300]">Proof of Work</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1917] font-headline">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#57534e] max-w-xl mx-auto">
              Production-ready web applications, applied AI workflows, and enterprise platforms built with modern technologies.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-2">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#6d4300] text-white shadow-md shadow-[#6d4300]/25'
                    : 'bg-white/80 text-[#57534e] hover:text-[#1c1917] border border-[#6d4300]/15 hover:border-[#6d4300]/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6 pt-4">
            {filteredProjects.map((p) => (
              <div 
                key={p.num} 
                className="amelia-card rounded-3xl overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  {/* Project Image Banner */}
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-[#faebd7]">
                    <img 
                      src={p.img} 
                      alt={p.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider text-[#6d4300] border border-[#6d4300]/20">
                      {p.num} • {p.category}
                    </div>
                    {p.metric && (
                      <div className="absolute bottom-3 right-3 bg-[#1c1917]/85 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-white">
                        {p.metric}
                      </div>
                    )}
                  </div>

                  {/* Project Details */}
                  <div className="p-6 sm:p-7 space-y-3">
                    <span className="text-xs font-bold text-[#b45309] block uppercase tracking-wider">{p.tag}</span>
                    <h3 className="text-xl font-bold text-[#1c1917] font-headline group-hover:text-[#6d4300] transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#57534e] leading-relaxed line-clamp-3">
                      {p.desc}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {p.tech.map((t) => (
                        <span 
                          key={t}
                          className="px-2.5 py-1 rounded-lg bg-[#fceade]/70 text-[#6d4300] border border-[#6d4300]/20 text-[11px] font-semibold"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Links Footer */}
                <div className="px-6 pb-6 pt-2 border-t border-[#6d4300]/10 flex items-center justify-between">
                  <a 
                    href={p.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#57534e] hover:text-[#6d4300] transition-colors uppercase tracking-wider"
                  >
                    <Github size={14} /> Source Code
                  </a>
                  {p.live && (
                    <a 
                      href={p.live} 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#6d4300] hover:text-[#543400] transition-colors uppercase tracking-wider"
                    >
                      Live Demo <ExternalLink size={13} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==================== 4. CAREER EXPERIENCE ==================== */}
        <section id="experience" className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#6d4300]">Professional Trajectory</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1917] font-headline">
              Career <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#57534e] max-w-xl mx-auto">
              5 Technical internships across enterprise cybersecurity, applied AI, cloud architecture, and open-source ecosystems.
            </p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {experiences.map((exp, idx) => (
              <div 
                key={idx} 
                className="amelia-card rounded-3xl p-6 sm:p-7 space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#6d4300]/10 pb-3">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-base sm:text-lg font-bold text-[#1c1917] font-headline">{exp.role}</h3>
                      <span className="text-[11px] font-bold text-[#6d4300] bg-[#fceade] border border-[#6d4300]/30 px-2.5 py-0.5 rounded-full">
                        {exp.badge}
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-[#78350f] pt-0.5">{exp.company}</p>
                  </div>
                  <span className="text-xs text-[#6d4300] font-bold whitespace-nowrap">{exp.period}</span>
                </div>
                <ul className="space-y-1.5 text-xs sm:text-sm text-[#57534e]">
                  {exp.points.map((pt, pidx) => (
                    <li key={pidx} className="flex gap-2 leading-relaxed">
                      <span className="text-[#6d4300] font-bold">•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ==================== 5. FORMAL EDUCATION ==================== */}
        <section id="education" className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#6d4300]">Academic Foundation</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1917] font-headline">
              Formal <span className="text-gradient">Education</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#57534e] max-w-xl mx-auto">
              University degree foundation blending core computer science with enterprise business management.
            </p>
          </div>

          <div className="amelia-card rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-start gap-6 max-w-4xl mx-auto">
            <div className="space-y-2.5">
              <span className="text-xs font-bold text-[#6d4300] uppercase tracking-wider flex items-center gap-1.5">
                <GraduationCap size={17} /> Bachelor of Engineering (B.E.)
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1c1917] font-headline">
                Computer Science & Business Systems (CSBS)
              </h3>
              <p className="text-sm text-[#44403c] font-semibold">
                Srinivas Institute of Technology (SIT), Mangaluru
              </p>
              <p className="text-xs text-[#57534e]">
                Affiliated with Visvesvaraya Technological University (VTU), Belagavi
              </p>
              <p className="text-xs sm:text-sm text-[#57534e] pt-2 leading-relaxed max-w-xl">
                <span className="text-[#1c1917] font-bold">Key Coursework:</span> Data Structures & Algorithms, Object-Oriented Programming (Java/C++), Operating Systems, Database Management Systems (DBMS), Computer Networks, Software Engineering, Cloud Computing, Artificial Intelligence.
              </p>
            </div>

            <div className="sm:text-right shrink-0 bg-[#fceade]/80 border border-[#6d4300]/25 rounded-2xl p-5 w-full sm:w-auto text-center sm:text-right">
              <span className="text-xs text-[#78350f] font-semibold block">7th Semester • 2023 – 2027</span>
              <p className="text-3xl font-extrabold text-[#6d4300] font-headline my-1">7.8 CGPA</p>
              <span className="inline-block text-[11px] font-bold text-[#6d4300] bg-white/90 border border-[#6d4300]/30 px-3 py-1 rounded-full shadow-sm">
                Graduating 2027
              </span>
            </div>
          </div>
        </section>

        {/* ==================== 6. TECHNICAL SKILLS ==================== */}
        <section id="skills" className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#6d4300]">Technical Arsenal</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1917] font-headline">
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#57534e] max-w-xl mx-auto">
              Categorized programming languages, frameworks, cloud services, and security competencies.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillCategories.map((domain, i) => (
              <div key={i} className="amelia-card rounded-3xl p-6 space-y-3 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-2.5 text-[#1c1917] font-bold text-sm uppercase tracking-wider font-headline">
                    <div className="w-8 h-8 rounded-xl bg-[#faebd7] border border-[#6d4300]/25 flex items-center justify-center">
                      {domain.icon}
                    </div>
                    <span>{domain.title}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {domain.skills.map((skill) => (
                      <span 
                        key={skill} 
                        className="px-2.5 py-1 rounded-lg bg-white/90 text-[#44403c] border border-[#6d4300]/15 text-xs font-medium hover:border-[#6d4300]/50 hover:text-[#6d4300] transition-colors shadow-xs"
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

        {/* ==================== 7. CONTACT SECTION ==================== */}
        <section id="contact" className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#6d4300]">Get In Touch</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1917] font-headline">
              Contact <span className="text-gradient">Me</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#57534e] max-w-xl mx-auto">
              Interested in discussing a software engineering role, internship, or technical collaboration? Send a direct message!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start max-w-4xl mx-auto">
            {/* Functional Contact Form */}
            <div className="amelia-card rounded-3xl p-6 sm:p-8 space-y-4">
              <h3 className="text-lg font-bold text-[#1c1917] font-headline">Send a Direct Message</h3>
              
              {formSubmitted ? (
                <div className="bg-[#fceade] border border-[#6d4300]/30 rounded-2xl p-6 text-center space-y-2 animate-fadeIn">
                  <div className="w-10 h-10 rounded-full bg-[#6d4300] text-white flex items-center justify-center mx-auto">
                    <Check size={20} />
                  </div>
                  <h4 className="text-base font-bold text-[#1c1917] font-headline">Message Dispatched!</h4>
                  <p className="text-xs text-[#57534e]">
                    Thank you! Your message has been sent. Deeksha will get back to you promptly at {formState.email || 'your email'}.
                  </p>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleFormSubmit}>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#44403c]">Your Name *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Priya Sharma" 
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                      className="w-full bg-white/90 border border-[#6d4300]/20 rounded-xl px-4 py-3 text-sm text-[#1c1917] placeholder:text-stone-400 focus:border-[#6d4300] outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#44403c]">Email Address *</label>
                    <input 
                      type="email" 
                      required
                      placeholder="e.g. priya@company.com" 
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                      className="w-full bg-white/90 border border-[#6d4300]/20 rounded-xl px-4 py-3 text-sm text-[#1c1917] placeholder:text-stone-400 focus:border-[#6d4300] outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#44403c]">Subject</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Software Engineering Opportunity" 
                      value={formState.subject}
                      onChange={(e) => setFormState({...formState, subject: e.target.value})}
                      className="w-full bg-white/90 border border-[#6d4300]/20 rounded-xl px-4 py-3 text-sm text-[#1c1917] placeholder:text-stone-400 focus:border-[#6d4300] outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#44403c]">Message *</label>
                    <textarea 
                      rows={4} 
                      required
                      placeholder="Tell me about the engineering opportunity, timeline, or requirements..." 
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                      className="w-full bg-white/90 border border-[#6d4300]/20 rounded-xl px-4 py-3 text-sm text-[#1c1917] placeholder:text-stone-400 focus:border-[#6d4300] outline-none transition-colors resize-none"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full btn-caramel text-xs font-bold uppercase tracking-wider py-3.5 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Send Message <Send size={14} />
                  </button>
                </form>
              )}
            </div>

            {/* Direct Verified Channels Cards */}
            <div className="space-y-3.5">
              <button 
                onClick={copyEmail}
                className="amelia-card rounded-2xl p-5 text-left flex items-center justify-between group hover:border-[#6d4300]/50 w-full cursor-pointer"
              >
                <div className="space-y-0.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#6d4300] flex items-center gap-1.5">
                    <Mail size={13} /> Official Email
                  </span>
                  <p className="text-sm font-bold text-[#1c1917]">deekshagpbangera@gmail.com</p>
                </div>
                <span className="text-xs font-bold text-[#6d4300] bg-[#fceade] border border-[#6d4300]/30 px-3 py-1 rounded-full">
                  {copiedEmail ? 'Copied!' : 'Copy'}
                </span>
              </button>

              <a 
                href="https://github.com/DeekshaG96" 
                target="_blank" 
                rel="noreferrer" 
                className="amelia-card rounded-2xl p-5 flex items-center justify-between group hover:border-[#6d4300]/50"
              >
                <div className="space-y-0.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#6d4300] flex items-center gap-1.5">
                    <Github size={13} /> GitHub Profile
                  </span>
                  <p className="text-sm font-bold text-[#1c1917]">github.com/DeekshaG96</p>
                </div>
                <ArrowUpRight size={18} className="text-[#57534e] group-hover:text-[#6d4300] transition-colors" />
              </a>

              <div className="amelia-card rounded-2xl p-5 space-y-2 bg-[#fdfaf5]">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#78350f] block">
                  Quick Resume Download
                </span>
                <p className="text-xs text-[#57534e]">
                  Looking for the latest ATS-optimized single-page engineering resume?
                </p>
                <a 
                  href="./Deeksha_G_Resume.pdf" 
                  download="Deeksha_G_Resume.pdf"
                  className="btn-caramel text-xs font-bold uppercase tracking-wider px-4 py-2 inline-flex items-center gap-2 mt-1"
                >
                  Download PDF <Download size={13} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ==================== FOOTER ==================== */}
      <footer className="border-t border-[#6d4300]/15 bg-white/70 backdrop-blur-md py-14 text-center space-y-6">
        <div className="max-w-4xl mx-auto px-6 space-y-5">
          <a href="#home" className="text-3xl font-extrabold text-[#1c1917] inline-block hover:text-[#6d4300] transition-colors font-headline">
            Deeksha <span className="text-[#6d4300]">G.</span>
          </a>

          <h2 className="text-lg sm:text-xl font-bold uppercase tracking-wider text-[#1c1917] font-headline max-w-xl mx-auto leading-snug">
            Collaborate with Deeksha and build reliable engineering systems today.
          </h2>

          <div className="flex flex-wrap justify-center gap-6 text-xs uppercase tracking-wider font-bold text-[#57534e] pt-2">
            <a href="#home" className="hover:text-[#6d4300] transition-colors">Home</a>
            <a href="#about" className="hover:text-[#6d4300] transition-colors">About</a>
            <a href="#projects" className="hover:text-[#6d4300] transition-colors">Projects</a>
            <a href="#experience" className="hover:text-[#6d4300] transition-colors">Experience</a>
            <a href="#education" className="hover:text-[#6d4300] transition-colors">Education</a>
            <a href="#skills" className="hover:text-[#6d4300] transition-colors">Skills</a>
            <a href="./Deeksha_G_Resume.pdf" download="Deeksha_G_Resume.pdf" className="text-[#6d4300] hover:underline">Resume PDF</a>
          </div>

          <div className="flex justify-center gap-4 pt-2">
            <a 
              href="https://github.com/DeekshaG96" 
              target="_blank" 
              rel="noreferrer" 
              className="social-circle"
              title="GitHub Profile"
            >
              <Github size={16} />
            </a>
            <button 
              onClick={copyEmail} 
              className="social-circle cursor-pointer" 
              title="Copy Email Address"
            >
              <Mail size={16} />
            </button>
            <a 
              href="#home"
              className="social-circle"
              title="Back to Top"
            >
              <ChevronUp size={16} />
            </a>
          </div>

          <p className="text-xs text-[#78716c] pt-4 font-medium">
            © {new Date().getFullYear()} Deeksha G. All Rights Reserved. Built with React 19, TypeScript & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
