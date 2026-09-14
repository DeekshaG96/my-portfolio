import { useState } from 'react';
import { 
  Github, 
  Mail, 
  ArrowUpRight,
  ExternalLink, 
  Download, 
  Copy, 
  Check, 
  Menu, 
  X,
  Code2,
  Briefcase,
  GraduationCap,
  Send,
  Calendar,
  Sparkles
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
  points: string[];
}

interface SkillCategory {
  title: string;
  skills: string[];
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  
  // GreatStack Interactive Tabs in About Section
  const [activeTab, setActiveTab] = useState<'Skills' | 'Experience' | 'Education'>('Skills');

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
      tech: ['React 19', 'Gemini AI', 'Firebase', 'E2E Testing', 'Tailwind CSS']
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
      metric: 'Microsoft & SAP Honors',
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
      role: 'Open Source Contributor', 
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
      badge: 'Grade O (Outstanding)',
      points: [
        'Graduated with Grade O across enterprise network security engineering curriculum.',
        'Configured stateful firewall inspection rules, Zero-Trust Network Access (ZTNA), and simulated enterprise attack vectors.'
      ]
    },
    { 
      period: 'Jan 2025 - Mar 2025', 
      role: 'Cybersecurity Engineering Intern', 
      company: 'Palo Alto Networks (via AICTE & EduSkills)',
      badge: 'Grade E (Excellent)',
      points: [
        'Completed 10-week intensive cybersecurity track, achieving Grade E (Excellent).',
        'Analyzed real-time network traffic telemetry, investigated simulated SOC alarms, and mitigated perimeter vulnerabilities.'
      ]
    },
    { 
      period: 'Nov 2024 - Dec 2024', 
      role: 'AI & Cloud Product Intern', 
      company: 'TechSaksham (Microsoft & SAP CSR Initiative)',
      badge: '94% Accuracy Honors',
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
      skills: ['Python', 'Java', 'C++', 'TypeScript', 'JavaScript (ES6+)', 'Solidity', 'SQL', 'Dart']
    },
    {
      title: 'Frontend Architecture',
      skills: ['React 19', 'Next.js', 'Tailwind CSS v4', 'HTML5 / CSS3', 'Vite', 'Redux Toolkit', 'Flutter']
    },
    {
      title: 'Backend & APIs',
      skills: ['Node.js', 'Express', 'FastAPI', 'RESTful APIs', 'JWT Authentication', 'Postman API Testing']
    },
    {
      title: 'Cloud & DevOps',
      skills: ['AWS (EC2, S3, VPC, IAM)', 'Google Cloud', 'Firebase Hosting', 'Docker', 'GitHub Actions CI/CD']
    },
    {
      title: 'Database & Storage',
      skills: ['MongoDB Atlas', 'PostgreSQL', 'Supabase', 'Cloud Firestore', 'MySQL', 'Local JSON Storage']
    },
    {
      title: 'AI, ML & Security',
      skills: ['Google Gemini AI', 'Scikit-Learn', 'PyTorch', 'CNNs', 'Zero-Trust (ZTNA)', 'Fortinet Firewalls']
    }
  ];

  return (
    <div className="min-h-screen bg-[#080808] text-[#ababab] font-sans antialiased selection:bg-[#ff004f]/30 selection:text-white">
      
      {/* ==================== HEADER & NAVBAR ==================== */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#080808]/90 backdrop-blur-md border-b border-white/10 px-6 lg:px-20 py-5">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#home" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-headline">
            <span className="text-[#ff004f]">D</span>eeksha.
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-9">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#projects" className="nav-link">Portfolio</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>

          {/* Desktop Right CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <a 
              href="./Deeksha_G_Resume.pdf" 
              download="Deeksha_G_Resume.pdf" 
              className="text-xs font-bold uppercase tracking-wider text-white hover:text-[#ff004f] transition-colors inline-flex items-center gap-1.5"
            >
              Resume <Download size={13} />
            </a>
            <a 
              href="#contact" 
              className="btn-greatstack-solid text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-lg"
            >
              Contact Me
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button 
            className="md:hidden text-white p-1 focus:outline-none" 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            aria-label="Toggle Navigation"
          >
            {isMenuOpen ? <X size={26} className="text-[#ff004f]" /> : <Menu size={26} />}
          </button>
        </nav>

        {/* Mobile Slide-down Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#111111] border border-white/10 rounded-2xl p-6 mt-3 space-y-4 shadow-2xl">
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="block text-white hover:text-[#ff004f] font-semibold">Home</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="block text-white hover:text-[#ff004f] font-semibold">About</a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)} className="block text-white hover:text-[#ff004f] font-semibold">Portfolio</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block text-white hover:text-[#ff004f] font-semibold">Contact</a>
            
            <a 
              href="./Deeksha_G_Resume.pdf" 
              download="Deeksha_G_Resume.pdf" 
              className="btn-greatstack-solid text-center w-full py-2.5 text-xs font-bold uppercase tracking-wider block rounded-lg mt-2"
            >
              Download CV (PDF)
            </a>
          </div>
        )}
      </header>

      {/* ==================== MAIN BODY ==================== */}
      <main className="max-w-7xl mx-auto px-6 lg:px-20 pt-28 space-y-28 sm:space-y-36 pb-20">

        {/* ==================== 1. HERO SECTION (GREATSTACK STYLE) ==================== */}
        <section id="home" className="min-h-[85vh] flex items-center pt-8 sm:pt-14">
          <div className="grid md:grid-cols-12 gap-10 items-center w-full">
            
            {/* Left Column: Big Headline & Info */}
            <div className="md:col-span-7 space-y-6 text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#ff004f]/30 text-white text-xs font-semibold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-[#ff004f] animate-pulse" />
                <span>7th Sem Engineer (2023 – 2027) • SIT Mangaluru</span>
              </div>

              <div className="space-y-3">
                <p className="text-xl sm:text-2xl font-semibold text-[#ababab]">
                  Computer Science & Business Systems Undergraduate
                </p>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] font-headline">
                  Hi, I'm <span className="text-[#ff004f]">Deeksha</span><br />
                  From SIT Mangaluru.
                </h1>
              </div>

              <p className="text-sm sm:text-base text-[#ababab] leading-relaxed max-w-xl">
                Hands-on experience architecting modern full-stack web applications, integrating applied AI models, and deploying resilient cloud services across 5 technical internships. Focused on building production-grade software solutions with clean code.
              </p>

              {/* Metrics Strip */}
              <div className="grid grid-cols-3 gap-4 max-w-md pt-2">
                <div className="bg-[#121212] border border-white/10 rounded-xl p-4 text-center">
                  <span className="block text-2xl font-bold text-white font-headline">2023–27</span>
                  <span className="text-[11px] text-[#888] font-medium">Batch (7th Sem)</span>
                </div>
                <div className="bg-[#121212] border border-white/10 rounded-xl p-4 text-center">
                  <span className="block text-2xl font-bold text-[#ff004f] font-headline">5</span>
                  <span className="text-[11px] text-[#888] font-medium">Internships</span>
                </div>
                <div className="bg-[#121212] border border-white/10 rounded-xl p-4 text-center">
                  <span className="block text-2xl font-bold text-white font-headline">10+</span>
                  <span className="text-[11px] text-[#888] font-medium">Live Projects</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a 
                  href="./Deeksha_G_Resume.pdf" 
                  download="Deeksha_G_Resume.pdf"
                  className="btn-greatstack btn-greatstack-solid"
                >
                  Download CV <Download size={14} />
                </a>
                <a 
                  href="#contact"
                  className="btn-greatstack"
                >
                  Contact Me
                </a>
              </div>
            </div>

            {/* Right Column: Avatar Portrait (GreatStack User Image) */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[360px] sm:max-w-[420px] group">
                <div className="absolute inset-0 bg-[#ff004f]/20 blur-[80px] rounded-full scale-90 -z-10 group-hover:bg-[#ff004f]/30 transition-all duration-500" />
                <div className="rounded-3xl overflow-hidden border-2 border-white/10 group-hover:border-[#ff004f]/50 transition-all duration-500 shadow-2xl shadow-black/80 bg-[#141414]">
                  <img 
                    src="./assets/avatar.jpg" 
                    alt="Deeksha G. - Software Engineer" 
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ==================== 2. ABOUT SECTION (GREATSTACK SIGNATURE TABS) ==================== */}
        <section id="about" className="pt-4">
          <div className="grid md:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* About Col 1: Portrait */}
            <div className="md:col-span-5 flex justify-center">
              <div className="sticky top-28 rounded-3xl overflow-hidden border border-white/10 w-full max-w-[360px] bg-[#121212] shadow-xl">
                <img 
                  src="./assets/avatar.jpg" 
                  alt="About Deeksha G." 
                  className="w-full h-auto object-cover object-top"
                />
              </div>
            </div>

            {/* About Col 2: Text & Interactive Tabs */}
            <div className="md:col-span-7 space-y-6">
              <h2 className="sub-title">About Me</h2>

              <p className="text-sm sm:text-base text-[#ababab] leading-relaxed">
                I am a 7th Semester undergraduate pursuing <strong className="text-white">B.E. in Computer Science & Business Systems</strong> at <strong className="text-white">Srinivas Institute of Technology (SIT), Mangaluru</strong> (Batch 2023–2027). My engineering journey focuses on developing scalable full-stack architectures, implementing intelligent AI workflows, and architecting resilient cloud systems.
              </p>
              <p className="text-sm sm:text-base text-[#ababab] leading-relaxed">
                Through 5 enterprise internships across cybersecurity (<strong className="text-white">Fortinet, Palo Alto Networks</strong>), applied AI (<strong className="text-white">Microsoft & SAP TechSaksham</strong>), and cloud infrastructure (<strong className="text-white">AWS Academy</strong>), alongside open-source contributions in GSSoC, I prioritize clean code, performance, and reliable system design.
              </p>

              {/* GreatStack Tab Titles */}
              <div className="flex items-center pt-3 border-b border-white/10">
                <span 
                  onClick={() => setActiveTab('Skills')}
                  className={`tab-links ${activeTab === 'Skills' ? 'active-link' : ''}`}
                >
                  Skills
                </span>
                <span 
                  onClick={() => setActiveTab('Experience')}
                  className={`tab-links ${activeTab === 'Experience' ? 'active-link' : ''}`}
                >
                  Experience
                </span>
                <span 
                  onClick={() => setActiveTab('Education')}
                  className={`tab-links ${activeTab === 'Education' ? 'active-link' : ''}`}
                >
                  Education
                </span>
              </div>

              {/* Tab Contents: SKILLS */}
              {activeTab === 'Skills' && (
                <div className="space-y-4 pt-1 animate-fadeIn">
                  {skillCategories.map((sc, idx) => (
                    <div key={idx} className="space-y-1">
                      <span className="text-[#ff004f] font-bold text-sm block">{sc.title}</span>
                      <p className="text-sm text-white">
                        {sc.skills.join(' • ')}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Tab Contents: EXPERIENCE */}
              {activeTab === 'Experience' && (
                <div className="space-y-5 pt-1 animate-fadeIn">
                  {experiences.map((exp, idx) => (
                    <div key={idx} className="space-y-1 border-b border-white/5 pb-3">
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <span className="text-[#ff004f] font-bold text-sm">{exp.role}</span>
                        <span className="text-xs text-[#888]">{exp.period}</span>
                      </div>
                      <p className="text-xs font-semibold text-white">{exp.company} <span className="text-[#ff004f]/80 font-normal">({exp.badge})</span></p>
                      <ul className="text-xs text-[#ababab] space-y-1 pt-1">
                        {exp.points.map((pt, pidx) => (
                          <li key={pidx} className="flex gap-2 leading-relaxed">
                            <span className="text-[#ff004f]">•</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {/* Tab Contents: EDUCATION */}
              {activeTab === 'Education' && (
                <div className="space-y-4 pt-1 animate-fadeIn">
                  <div className="space-y-1">
                    <span className="text-[#ff004f] font-bold text-sm block">Bachelor of Engineering (B.E.)</span>
                    <p className="text-sm font-semibold text-white">
                      Computer Science & Business Systems (CSBS)
                    </p>
                    <p className="text-xs text-[#ababab]">
                      Srinivas Institute of Technology (SIT), Mangaluru • VTU Affiliated
                    </p>
                    <p className="text-xs text-[#ff004f] font-medium pt-1">
                      7th Semester • Batch 2023 – 2027 (Graduating 2027)
                    </p>
                  </div>
                  <div className="pt-2">
                    <span className="text-xs font-bold text-white uppercase tracking-wider block mb-1">Key Engineering Coursework</span>
                    <p className="text-xs text-[#ababab] leading-relaxed">
                      Data Structures & Algorithms, Object-Oriented Programming (Java/C++), Operating Systems, Database Management Systems (DBMS), Computer Networks, Software Engineering, Cloud Computing, Artificial Intelligence.
                    </p>
                  </div>
                </div>
              )}

            </div>

          </div>
        </section>

        {/* ==================== 3. PORTFOLIO / MY WORK (GREATSTACK STYLE) ==================== */}
        <section id="projects" className="space-y-8 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold text-[#ff004f] uppercase tracking-widest">Featured Creations</p>
              <h2 className="sub-title">My Work</h2>
            </div>
            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {projectCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-[#ff004f] text-white shadow-md shadow-[#ff004f]/30'
                      : 'bg-[#141414] text-[#ababab] hover:text-white border border-white/10 hover:border-[#ff004f]/40'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Work Cards Grid with GreatStack Slide-up Hover Layer */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-2">
            {filteredProjects.map((p) => (
              <div key={p.num} className="work-card group">
                <img 
                  src={p.img} 
                  alt={p.title} 
                  className="w-full h-72 sm:h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* GreatStack Signature Slide-up Gradient Layer */}
                <div className="work-layer space-y-2.5">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-black bg-white px-2.5 py-0.5 rounded-full">
                    {p.num} • {p.category}
                  </span>
                  <h3 className="text-lg font-bold text-white font-headline leading-tight">
                    {p.title}
                  </h3>
                  <p className="text-xs text-white/90 line-clamp-3 leading-relaxed">
                    {p.desc}
                  </p>
                  
                  {/* Action Icons inside Hover Layer */}
                  <div className="flex items-center justify-center gap-3 pt-2">
                    <a 
                      href={p.github} 
                      target="_blank" 
                      rel="noreferrer"
                      className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                      title="View Source Code"
                    >
                      <Github size={18} />
                    </a>
                    {p.live && (
                      <a 
                        href={p.live} 
                        target="_blank" 
                        rel="noreferrer"
                        className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                        title="Live Demonstration"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-6">
            <a 
              href="https://github.com/DeekshaG96?tab=repositories" 
              target="_blank" 
              rel="noreferrer" 
              className="btn-greatstack inline-flex items-center gap-2"
            >
              See More on GitHub <ArrowUpRight size={16} />
            </a>
          </div>
        </section>

        {/* ==================== 4. CONTACT SECTION (GREATSTACK STYLE) ==================== */}
        <section id="contact" className="pt-4">
          <div className="grid md:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* Contact Left Column */}
            <div className="md:col-span-5 space-y-6">
              <h2 className="sub-title">Contact Me</h2>
              
              <p className="text-sm text-[#ababab] leading-relaxed">
                Interested in discussing a software engineering role, technical collaboration, or an internship opportunity? Feel free to reach out directly.
              </p>

              <div className="space-y-4 pt-2">
                <button 
                  onClick={copyEmail}
                  className="flex items-center gap-3 text-left group cursor-pointer w-full text-white"
                >
                  <div className="w-10 h-10 rounded-full bg-[#141414] border border-white/10 flex items-center justify-center group-hover:bg-[#ff004f] group-hover:border-[#ff004f] transition-all">
                    <Mail size={18} className="text-[#ff004f] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#888] uppercase tracking-wider block">Official Email</span>
                    <span className="text-sm font-semibold text-white group-hover:text-[#ff004f] transition-colors">
                      deekshagpbangera@gmail.com
                    </span>
                  </div>
                  <span className="text-[11px] text-[#ff004f] border border-[#ff004f]/40 px-2 py-0.5 rounded ml-auto">
                    {copiedEmail ? 'Copied!' : 'Copy'}
                  </span>
                </button>

                <a 
                  href="https://github.com/DeekshaG96" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-3 text-left group w-full text-white"
                >
                  <div className="w-10 h-10 rounded-full bg-[#141414] border border-white/10 flex items-center justify-center group-hover:bg-[#ff004f] group-hover:border-[#ff004f] transition-all">
                    <Github size={18} className="text-[#ff004f] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#888] uppercase tracking-wider block">GitHub Profile</span>
                    <span className="text-sm font-semibold text-white group-hover:text-[#ff004f] transition-colors">
                      github.com/DeekshaG96
                    </span>
                  </div>
                  <ArrowUpRight size={16} className="text-[#888] group-hover:text-[#ff004f] ml-auto transition-colors" />
                </a>
              </div>

              {/* Social Icons & Download CV */}
              <div className="pt-2">
                <a 
                  href="./Deeksha_G_Resume.pdf" 
                  download="Deeksha_G_Resume.pdf"
                  className="btn-greatstack btn-greatstack-solid"
                >
                  Download CV <Download size={14} />
                </a>
              </div>
            </div>

            {/* Contact Right Column: Form */}
            <div className="md:col-span-7 bg-[#101010] border border-white/10 rounded-2xl p-6 sm:p-8">
              {formSubmitted ? (
                <div className="bg-[#1a1013] border border-[#ff004f]/40 rounded-xl p-6 text-center space-y-2 animate-fadeIn">
                  <div className="w-10 h-10 rounded-full bg-[#ff004f] text-white flex items-center justify-center mx-auto">
                    <Check size={20} />
                  </div>
                  <h4 className="text-base font-bold text-white font-headline">Message Dispatched!</h4>
                  <p className="text-xs text-[#ababab]">
                    Thank you! Your message has been sent. Deeksha will respond promptly at {formState.email || 'your email'}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-2">
                  <input 
                    type="text" 
                    required
                    placeholder="Your Name" 
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    className="greatstack-input"
                  />
                  <input 
                    type="email" 
                    required
                    placeholder="Your Email" 
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    className="greatstack-input"
                  />
                  <input 
                    type="text" 
                    placeholder="Subject (e.g. Software Engineering Role)" 
                    value={formState.subject}
                    onChange={(e) => setFormState({...formState, subject: e.target.value})}
                    className="greatstack-input"
                  />
                  <textarea 
                    rows={5} 
                    required
                    placeholder="Your Message" 
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    className="greatstack-input resize-none"
                  />
                  <button 
                    type="submit" 
                    className="btn-greatstack btn-greatstack-solid mt-4 w-full sm:w-auto"
                  >
                    Submit <Send size={14} />
                  </button>
                </form>
              )}
            </div>

          </div>
        </section>

      </main>

      {/* ==================== FOOTER ==================== */}
      <footer className="border-t border-white/10 bg-[#050505] py-10 text-center space-y-4">
        <div className="max-w-7xl mx-auto px-6 space-y-3">
          <p className="text-xs text-[#737373]">
            Copyright © {new Date().getFullYear()} Deeksha G. All Rights Reserved. Built with React 19, TypeScript & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
