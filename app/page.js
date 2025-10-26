"use client"

import React, { useState, useEffect } from 'react';
import { ArrowRight, Zap, Target, Check, RefreshCw, DollarSign, Shield, Users, TrendingUp, Clock, Activity, Menu, X } from 'lucide-react';

// Custom component to simulate the Vercel-like button style
const VercelButton = ({ children, className = '', variant = 'primary', href }) => {
    let baseStyle = 'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-200 text-sm tracking-tight shadow-md hover:shadow-lg';
    let variantStyle = '';

    if (variant === 'primary') {
        variantStyle = 'bg-white text-black hover:bg-gray-200';
    } else if (variant === 'secondary') {
        // Vercel's secondary button often has a subtle dark border and white text
        variantStyle = 'bg-[#0A0A0A] text-white border border-[#1F1F1F] hover:border-white/30 hover:bg-[#1A1A1A]';
    } else if (variant === 'small-primary') {
        baseStyle = 'inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-200 text-xs tracking-tight shadow-md hover:shadow-lg';
        variantStyle = 'bg-white text-black hover:bg-gray-200';
    } else if (variant === 'small-secondary') {
        baseStyle = 'inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-200 text-xs tracking-tight shadow-md hover:shadow-lg';
        variantStyle = 'bg-[#0A0A0A] text-white border border-[#1F1F1F] hover:border-white/30 hover:bg-[#1A1A1A]';
    }

    const Tag = href ? 'a' : 'button';

    return (
        <Tag href={href} className={`${baseStyle} ${variantStyle} ${className}`}>
            {children}
        </Tag>
    );
};

// Custom utility component for Vercel-like card styling
const VercelCard = ({ children, className = '', border = true, background = '#0A0A0A', hoverEffect = true }) => {
    const borderStyle = border ? 'border border-[#1F1F1F]' : '';
    const hoverStyle = hoverEffect ? 'hover:border-white/20 hover:shadow-xl' : '';

    return (
        <div
            className={`transition-all duration-300 rounded-3xl p-8 ${borderStyle} ${hoverStyle} ${className}`}
            style={{ backgroundColor: background }}
        >
            {children}
        </div>
    );
};

// --- Main Component ---

export default function MiraiTech() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // --- Content (Kept from original code) ---

    const stats = [
        { value: '40%+', label: 'Average ROI' },
        { value: '6', label: 'Months to ROI' },
        { value: '50+', label: 'Companies Transformed' },
        { value: '96%', label: 'Diagnostic Accuracy' }
    ];

    const industries = [
        {
            title: 'Healthcare',
            tag: 'Industry-specific AI solutions',
            painPoints: ['3+ hour patient wait times', 'Missed critical diagnoses (12% error rate)', 'Manual triage causing bottlenecks', 'Compliance and documentation overhead'],
            solutions: ['AI triage with 96% diagnostic accuracy', 'Automated patient flow optimization', 'Real-time clinical decision support', 'Compliance automation and reporting'],
            results: [{ label: 'Wait Time Reduction', value: '70%' }, { label: 'Diagnostic Accuracy', value: '96%' }, { label: 'Critical Case Detection', value: '+40%' }]
        },
        {
            title: 'Financial Services',
            tag: 'Industry-specific AI solutions',
            painPoints: ['15-day month-end closing cycles', '12% reconciliation error rate', 'Manual financial reporting', 'Poor forecast accuracy (65%)'],
            solutions: ['Automated financial reconciliation', 'Real-time financial analytics', 'AI-powered forecasting models', 'Automated compliance reporting'],
            results: [{ label: 'Closing Time', value: '4.5 days' }, { label: 'Error Reduction', value: '95%' }, { label: 'Forecast Accuracy', value: '92%' }]
        },
        {
            title: 'Renewable Energy',
            tag: 'Industry-specific AI solutions',
            painPoints: ['65% operational efficiency', 'Poor energy forecasting (70% accuracy)', 'Reactive maintenance causing downtime', 'Suboptimal energy production'],
            solutions: ['AI-powered energy optimization', 'Predictive maintenance systems', 'Advanced weather forecasting', 'Smart grid integration'],
            results: [{ label: 'Energy Output', value: '+18%' }, { label: 'Cost Reduction', value: '25%' }, { label: 'Uptime Improvement', value: '92%' }]
        }
    ];

    const features = [
        { icon: <Zap className="w-5 h-5 text-white" />, title: 'Proven ROI in 6 Months', description: "While others promise results 'someday', we deliver measurable ROI within 6 months. Our clients see 40%+ ROI on average." },
        { icon: <Target className="w-5 h-5 text-white" />, title: 'Industry-Specific Expertise', description: "We don't build generic AI. Our solutions are tailored to healthcare, finance, and energy sectors with deep domain knowledge." },
        { icon: <Check className="w-5 h-5 text-white" />, title: 'Measurable Results Guarantee', description: "We guarantee specific outcomes or we don't get paid. Our success is tied to your success with transparent metrics." },
        { icon: <RefreshCw className="w-5 h-5 text-white" />, title: 'End-to-End Implementation', description: 'From strategy to deployment to maintenance. We handle everything so you can focus on your business, not AI complexity.' },
        { icon: <DollarSign className="w-5 h-5 text-white" />, title: 'Transparent Pricing & Timeline', description: 'No hidden costs or surprise delays. We provide clear project scope, timeline, and budget upfront with regular updates.' },
        { icon: <Shield className="w-5 h-5 text-white" />, title: '24/7 Support & Maintenance', description: 'AI systems need ongoing care. We provide round-the-clock support and continuous optimization to ensure peak performance.' }
    ];

    const team = [
        { name: 'Dr. Sarah Chen', role: 'CEO & Co-Founder', specialty: 'AI Strategy & Healthcare', bio: 'Former Google AI researcher with 15+ years in healthcare AI. Led AI initiatives at Stanford Medicine, published 50+ papers on medical AI applications.', achievements: ['50+ Research Papers', 'Stanford AI Fellow'] },
        { name: 'Michael Rodriguez', role: 'CTO & Co-Founder', specialty: 'AI Architecture & Energy', bio: 'Ex-Tesla AI engineer specializing in renewable energy optimization. Built AI systems for 100+ solar and wind farms, reducing operational costs by 25%.', achievements: ['Tesla Innovation Award', 'Energy Efficiency Patent'] },
        { name: 'Jennifer Walsh', role: 'VP of AI Solutions', specialty: 'Financial AI & Automation', bio: 'Former Goldman Sachs quant with expertise in financial AI. Led development of AI systems processing $50B+ in transactions with 99.9% accuracy.', achievements: ['Goldman Sachs Excellence Award', 'Financial AI Patent'] },
        { name: 'Dr. Alex Kim', role: 'Head of Research', specialty: 'Machine Learning & Data Science', bio: 'Former Microsoft Research scientist with expertise in deep learning and computer vision. Published 30+ papers on AI optimization and model efficiency.', achievements: ['Microsoft Research Award', '30+ Research Papers'] },
        { name: 'Lisa Thompson', role: 'Head of Implementation', specialty: 'Project Management & Delivery', bio: 'Former Deloitte consultant with 12+ years managing enterprise AI implementations. Led 50+ successful AI deployments across Fortune 500 companies.', achievements: ['Deloitte Excellence Award', '50+ Successful Deployments'] },
        { name: 'David Park', role: 'Head of Security', specialty: 'Cybersecurity & Compliance', bio: 'Former NSA cybersecurity specialist with expertise in AI security and data protection. Led security for 200+ enterprise AI systems with zero breaches.', achievements: ['NSA Recognition Award', 'Zero Security Breaches'] }
    ];

    const testimonials = [
        { quote: "MiraiTech transformed our customer service with their AI chatbot solution. We saw a 70% reduction in response time and 95% customer satisfaction rate within the first month.", author: 'Sarah Johnson', position: 'Director of Operations, TechCorp' },
        { quote: "The AI-powered analytics platform provided by MiraiTech has revolutionized our decision-making process. We've seen a 45% increase in operational efficiency.", author: 'Michael Chen', position: 'CEO, DataFlow Systems' },
        { quote: "Implementing MiraiTech's automation solutions helped us reduce costs by 60% while improving accuracy and speed across all departments.", author: 'Emily Rodriguez', position: 'VP of Technology, FinanceFlow' },
        { quote: "Their machine learning models have transformed how we predict market trends. Our forecasting accuracy improved by 80% in just three months.", author: 'James Mitchell', position: 'Chief Analyst, Market Insights Inc' },
        { quote: "The natural language processing solution from MiraiTech enabled us to automate 85% of our document processing workflow.", author: 'Anna Williams', position: 'Operations Manager, DocuTech' },
        { quote: "Outstanding AI integration! Their computer vision system reduced our quality control inspection time by 75% while increasing accuracy.", author: 'Robert Chang', position: 'Quality Director, ManufacturePro' }
    ];

    // --- Utility Classes ---
    // Simulating Vercel's use of Geist fonts with a generic system font and fallback monospace for Geist Mono
    const geistFont = 'font-sans'; // Use system font as proxy for Geist
    const geistMono = 'font-mono tracking-tighter'; // Use generic mono as proxy for Geist Mono

    // --- Component JSX ---

    return (
        <div className={`min-h-screen bg-black text-white ${geistFont}`}>
            {/* Animated Background - Vercel Style */}
            <div className="fixed inset-0 -z-10 bg-[#0A0A0A]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1A1A1A_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
                {/* Subtle Glows - Less prominent and more monochromatic than original */}
                <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl opacity-10" />
                <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl opacity-5" />
            </div>

            {/* Navigation */}
            <nav className={`sticky top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'}`}>
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="text-xl font-bold tracking-tight">MiraiTech</div>
                    <div className="hidden md:flex items-center gap-8">
                        <a href="#industries" className="text-[#A1A1A1] hover:text-white transition-colors text-sm font-medium">Industries</a>
                        <a href="#solutions" className="text-[#A1A1A1] hover:text-white transition-colors text-sm font-medium">Solutions</a>
                        <a href="#team" className="text-[#A1A1A1] hover:text-white transition-colors text-sm font-medium">Team</a>
                        <a href="#testimonials" className="text-[#A1A1A1] hover:text-white transition-colors text-sm font-medium">Testimonials</a>
                    </div>
                    <div className="hidden md:block">
                        <VercelButton variant="primary" className="text-sm font-semibold">
                            Get Started
                        </VercelButton>
                    </div>
                    <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden bg-black/90 backdrop-blur-md pb-4 border-t border-white/10">
                        <a href="#industries" className="block px-6 py-2 text-[#A1A1A1] hover:text-white" onClick={() => setMobileMenuOpen(false)}>Industries</a>
                        <a href="#solutions" className="block px-6 py-2 text-[#A1A1A1] hover:text-white" onClick={() => setMobileMenuOpen(false)}>Solutions</a>
                        <a href="#team" className="block px-6 py-2 text-[#A1A1A1] hover:text-white" onClick={() => setMobileMenuOpen(false)}>Team</a>
                        <a href="#testimonials" className="block px-6 py-2 text-[#A1A1A1] hover:text-white" onClick={() => setMobileMenuOpen(false)}>Testimonials</a>
                        <div className="px-6 pt-4">
                            <VercelButton variant="primary" className="w-full text-sm font-semibold">
                                Get Started
                            </VercelButton>
                        </div>
                    </div>
                )}
            </nav>

          {/* Hero Section */}
<section
  className="min-h-screen flex items-center justify-center px-6 pt-10 relative overflow-hidden bg-black"
  style={{
    backgroundImage: `
      url('./bg.png')
    `,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)] -z-10" />
  <div className="max-w-6xl mx-auto text-center relative z-10 pt-20">
    <div
      className={`inline-block mb-6 px-4 py-2 ${geistMono} bg-[#1A1A1A]/80 border border-[#1F1F1F] rounded-full text-xs text-white/70 uppercase tracking-widest`}
    >
      Introducing AI Solutions 2.0
    </div>

    <h1
      className={`text-6xl md:text-8xl font-extrabold mb-8 leading-[1.1] tracking-tight ${geistFont} max-w-4xl mx-auto`}
    >
      <span className="bg-gradient-to-br from-white to-[#A1A1A1] bg-clip-text text-transparent">
        AI that delivers
      </span>
      <br />
      <span className="bg-gradient-to-br from-white to-[#A1A1A1] bg-clip-text text-transparent">
        measurable results
      </span>
    </h1>

    <p
      className={`text-xl text-[#A1A1A1] mb-12 max-w-3xl mx-auto leading-relaxed ${geistFont}`}
    >
      Industry-specific AI solutions with guaranteed ROI in 6 months. Stop
      experimenting, start delivering.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
      <VercelButton variant="primary" className="text-base font-semibold">
        Start Deploying
        <Zap className="w-4 h-4" />
      </VercelButton>
      <VercelButton variant="secondary" className="text-base font-semibold">
        View Case Studies
        <ArrowRight className="w-4 h-4" />
      </VercelButton>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-[#1F1F1F]  -mx-6 md:-mx-12">
      {stats.map((stat, i) => (
        <div key={i} className="text-center">
          <div
            className={`text-4xl md:text-5xl font-extrabold mb-2 ${geistFont} tracking-tighter text-white`}
          >
            {stat.value}
          </div>
          <div
            className={`text-[#A1A1A1] text-xs ${geistMono} uppercase tracking-widest`}
          >
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


            {/* Feature Showcase */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Intelligent Automation Card (First Row, First Column) */}
                        <VercelCard className="group">
                            <div className="w-10 h-10 bg-[#1A1A1A] border border-[#1F1F1F] rounded-lg flex items-center justify-center mb-6">
                                <Zap className="w-5 h-5 text-[#0fffa9]" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-white">Intelligent Automation</h3>
                            <p className="text-[#A1A1A1] text-sm leading-relaxed mb-6">Automate complex workflows with AI-powered decision making. Reduce manual tasks by 85%.</p>
                            <div className="relative h-40 bg-[#1A1A1A] rounded-xl border border-[#1F1F1F] overflow-hidden p-4">
                                <div className="grid grid-cols-3 gap-2">
                                    {[...Array(9)].map((_, i) => (
                                        <div key={i} className="h-10 bg-[#0fffa9]/10 rounded-lg border border-[#0fffa9]/20" />
                                    ))}
                                </div>
                            </div>
                        </VercelCard>

                        {/* Real-time Insights Card (First Row, Second Column) */}
                        <VercelCard className="group">
                            <div className="w-10 h-10 bg-[#1A1A1A] border border-[#1F1F1F] rounded-lg flex items-center justify-center mb-6">
                                <Activity className="w-5 h-5 text-[#ffce20]" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-white">Real-time Insights</h3>
                            <p className="text-[#A1A1A1] text-sm leading-relaxed mb-6">Get instant visibility into operations. Make data-driven decisions in seconds, not days.</p>
                            <div className="relative h-40 bg-[#1A1A1A] rounded-xl border border-[#1F1F1F] overflow-hidden p-4 flex flex-col justify-end">
                                <div className="space-y-3">
                                    {[85, 92, 78, 96].map((val, i) => (
                                        <div key={i} className="flex items-center gap-2">
                                            <div className="h-2 bg-gradient-to-r from-[#ffce20] to-transparent rounded-full" style={{ width: `${val}%` }} />
                                            <span className={`text-xs text-[#A1A1A1] w-8 ${geistMono}`}>{val}%</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </VercelCard>

                        {/* Predictive Intelligence Card (First Row, Third Column) */}
                        <VercelCard className="group">
                            <div className="w-10 h-10 bg-[#1A1A1A] border border-[#1F1F1F] rounded-lg flex items-center justify-center mb-6">
                                <TrendingUp className="w-5 h-5 text-[#c50000]" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-white">Predictive Intelligence</h3>
                            <p className="text-[#A1A1A1] text-sm leading-relaxed mb-6">Forecast trends and prevent issues before they happen. 92%+ prediction accuracy.</p>
                            <div className="relative h-40 bg-[#1A1A1A] rounded-xl border border-[#1F1F1F] overflow-hidden p-4">
                                <svg className="w-full h-full" viewBox="0 0 200 130">
                                    <defs>
                                        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" style={{ stopColor: '#c50000', stopOpacity: 0.8 }} />
                                            <stop offset="100%" style={{ stopColor: '#ffce20', stopOpacity: 0.6 }} />
                                        </linearGradient>
                                    </defs>
                                    <path d="M 0 100 Q 50 70, 100 75 T 200 30" fill="none" stroke="url(#lineGrad)" strokeWidth="3" strokeLinecap="round" />
                                    {/* Add a subtle shaded area below the line to give more depth */}
                                    <path d="M 0 130 L 0 100 Q 50 70, 100 75 T 200 30 L 200 130 Z" fill="#c50000" fillOpacity="0.1" />
                                </svg>
                            </div>
                        </VercelCard>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Deployment Card (Second Row, First Column) */}
                        <VercelCard className="group p-10">
                            <div className="w-10 h-10 bg-[#1A1A1A] border border-[#1F1F1F] rounded-lg flex items-center justify-center mb-6">
                                <Clock className="w-5 h-5 text-[#0fffa9]" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-3 text-white">Deploy in Days, Not Months</h3>
                            <p className="text-[#A1A1A1] leading-relaxed mb-8">Pre-built industry solutions ready to deploy. Get up and running with production-grade AI in as little as 2 weeks.</p>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="bg-[#1A1A1A] border border-[#1F1F1F] rounded-xl p-4">
                                    <div className={`text-2xl font-bold mb-1 ${geistMono} text-white`}>2 weeks</div>
                                    <div className={`text-xs text-[#A1A1A1] uppercase tracking-widest ${geistMono}`}>Avg Deployment</div>
                                </div>
                                <div className="bg-[#1A1A1A] border border-[#1F1F1F] rounded-xl p-4">
                                    <div className={`text-2xl font-bold mb-1 ${geistMono} text-white`}>99.9%</div>
                                    <div className={`text-xs text-[#A1A1A1] uppercase tracking-widest ${geistMono}`}>Uptime SLA</div>
                                </div>
                                <div className="bg-[#1A1A1A] border border-[#1F1F1F] rounded-xl p-4">
                                    <div className={`text-2xl font-bold mb-1 ${geistMono} text-white`}>24/7</div>
                                    <div className={`text-xs text-[#A1A1A1] uppercase tracking-widest ${geistMono}`}>Support</div>
                                </div>
                            </div>
                        </VercelCard>

                        {/* Security Card (Second Row, Second Column) */}
                        <VercelCard className="group p-10">
                            <div className="w-10 h-10 bg-[#1A1A1A] border border-[#1F1F1F] rounded-lg flex items-center justify-center mb-6">
                                <Shield className="w-5 h-5 text-[#0059ab]" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-3 text-white">Enterprise-Grade Security</h3>
                            <p className="text-[#A1A1A1] leading-relaxed mb-8">SOC 2 Type II certified with end-to-end encryption. Your data stays secure and compliant with industry standards.</p>
                            <div className="flex gap-3 flex-wrap">
                                {['SOC 2 Type II', 'HIPAA', 'GDPR', 'ISO 27001', 'PCI DSS'].map((cert, i) => (
                                    <div key={i} className="bg-[#1A1A1A] border border-[#1F1F1F] rounded-full px-4 py-2 text-sm text-[#A1A1A1] hover:text-white transition-colors">
                                        {cert}
                                    </div>
                                ))}
                            </div>
                        </VercelCard>
                    </div>
                </div>
            </section>

            <hr className="my-16 border-t border-[#1F1F1F]" />

            {/* Industries */}
            <section id="industries" className="py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className={`text-5xl md:text-6xl font-bold mb-4 tracking-tight ${geistFont}`}>Industry Solutions</h2>
                        <p className="text-[#A1A1A1] text-lg max-w-2xl mx-auto">Tailored AI solutions that address your industry's specific challenges with proven results</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {industries.map((industry, i) => (
                            <VercelCard key={i} className="p-8">
                                <h3 className="text-2xl font-bold mb-3 text-white">{industry.title}</h3>
                                <span className={`inline-block px-3 py-1 bg-[#1A1A1A] border border-[#1F1F1F] rounded-full text-xs text-[#A1A1A1] mb-8 ${geistMono} uppercase tracking-wider`}>{industry.tag}</span>

                                <div className="mb-8">
                                    <h4 className={`text-xs uppercase tracking-widest text-[#A1A1A1] font-semibold mb-4 ${geistMono}`}>Common Pain Points</h4>
                                    <ul className="space-y-3">
                                        {industry.painPoints.map((point, j) => (
                                            <li key={j} className="text-[#A1A1A1] text-sm pb-3 border-b border-white/5 last:border-0">{point}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mb-8">
                                    <h4 className={`text-xs uppercase tracking-widest text-[#A1A1A1] font-semibold mb-4 ${geistMono}`}>Our Solutions</h4>
                                    <ul className="space-y-3">
                                        {industry.solutions.map((solution, j) => (
                                            <li key={j} className="text-[#A1A1A1] text-sm pb-3 border-b border-white/5 last:border-0">{solution}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-[#1A1A1A] rounded-xl p-6 border border-[#1F1F1F]">
                                    <h4 className="font-semibold mb-4 text-sm text-white">Typical Results</h4>
                                    {industry.results.map((result, j) => (
                                        <div key={j} className="flex justify-between items-center py-2 text-sm">
                                            <span className="text-[#A1A1A1]">{result.label}</span>
                                            <span className={`font-bold text-lg text-white ${geistMono}`}>{result.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </VercelCard>
                        ))}
                    </div>
                </div>
            </section>

            <hr className="my-16 border-t border-[#1F1F1F]" />

           {/* Why Choose MiraiTech Section */}
{/* Why Choose MiraiTech Section */}
<section className="bg-black text-white py-28 px-6">
     <div className="text-center mb-20">
      <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white tracking-tight">
        Why Choose <span className="text-[#52A9FF]">MiraiTech</span>
      </h2>
      <p className="text-[#A1A1A1] text-lg max-w-2xl mx-auto">
        We're not just another AI consultancy — we craft intelligent, future-ready solutions.
      </p>
    </div>
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-[#1F1F1F] divide-x divide-y divide-[#1F1F1F]">

    {/* 1 — Intro Block */}
    <div className="p-10 flex flex-col justify-center">
      <h2 className="text-4xl font-extrabold mb-4 leading-tight">
        Your product, <br /> delivered.
      </h2>
      <p className="text-[#A1A1A1] text-base max-w-sm">
        Security, speed, and AI included — so you can focus on your users.
      </p>
    </div>

    {/* 2 — Agents */}
    <div className="p-10 hover:bg-[#0A0A0A] transition-colors duration-300">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-xl font-semibold">Agents</h3>
        <svg className="w-5 h-5 text-[#A1A1A1]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
      <p className="text-[#A1A1A1] text-sm leading-relaxed">
        Deliver more value by executing complex workflows automatically.
      </p>
      <div className="mt-6 p-3 border border-[#1F1F1F] rounded-lg text-sm text-[#A1A1A1] bg-[#0A0A0A]">
        <span className="text-white">🤖 Thinking...</span>
      </div>
    </div>

    {/* 3 — AI Apps */}
    <div className="p-10 hover:bg-[#0A0A0A] transition-colors duration-300">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-xl font-semibold">AI Apps</h3>
        <svg className="w-5 h-5 text-[#A1A1A1]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
      <p className="text-[#A1A1A1] text-sm mb-6 leading-relaxed">
        Enrich your products with the latest AI models and developer tools.
      </p>
      <div className="flex flex-wrap gap-2">
        {["AI SDK", "Workflow", "Sandbox", "BotID"].map((tag, i) => (
          <span key={i} className="px-3 py-1 text-xs border border-[#1F1F1F] rounded-md bg-[#0A0A0A] text-[#A1A1A1]">
            {tag}
          </span>
        ))}
      </div>
    </div>

    {/* 4 — Web Apps */}
    <div className="p-10 hover:bg-[#0A0A0A] transition-colors duration-300">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-xl font-semibold">Web Apps</h3>
        <svg className="w-5 h-5 text-[#A1A1A1]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
      <p className="text-[#A1A1A1] text-sm">
        Ship beautiful, high-performance interfaces with modern tech.
      </p>
    </div>

    {/* 5 — Composable Commerce */}
    <div className="p-10 hover:bg-[#0A0A0A] transition-colors duration-300">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-xl font-semibold">Composable Commerce</h3>
        <svg className="w-5 h-5 text-[#A1A1A1]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
      <p className="text-[#A1A1A1] text-sm">
        Boost conversions with personalized storefronts and AI-driven UX.
      </p>
    </div>

    {/* 6 — Multi-tenant Platform */}
    <div className="p-10 hover:bg-[#0A0A0A] transition-colors duration-300">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-xl font-semibold">Multi-tenant Platform</h3>
        <svg className="w-5 h-5 text-[#A1A1A1]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
      <p className="text-[#A1A1A1] text-sm">
        Serve millions securely across isolated, AI-managed environments.
      </p>
    </div>
  </div>
</section>



            <hr className="my-16 border-t border-[#1F1F1F]" />

            {/* Team */}
            <section id="team" className="py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className={`text-5xl md:text-6xl font-bold mb-4 tracking-tight ${geistFont}`}>Meet the Experts</h2>
                        <p className="text-[#A1A1A1] text-lg max-w-2xl mx-auto">Our team combines decades of experience from top tech companies and research institutions</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {team.map((member, i) => (
                            <VercelCard key={i} className="p-8">
                                <h3 className="text-xl font-bold mb-1 text-white">{member.name}</h3>
                                <p className={`text-xs uppercase tracking-widest text-[#A1A1A1] font-semibold mb-2 ${geistMono}`}>{member.role}</p>
                                <p className="text-white text-sm mb-4">{member.specialty}</p>
                                <p className="text-[#A1A1A1] text-sm leading-relaxed mb-6">{member.bio}</p>
                                <div className="pt-6 border-t border-white/10">
                                    <h4 className={`text-xs uppercase tracking-widest text-[#A1A1A1] font-semibold mb-3 ${geistMono}`}>Key Achievements</h4>
                                    <ul className="space-y-2">
                                        {member.achievements.map((achievement, j) => (
                                            <li key={j} className="text-white/80 text-sm flex items-center gap-2">
                                                <Users className="w-4 h-4 text-[#A1A1A1]" />
                                                {achievement}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </VercelCard>
                        ))}
                    </div>
                </div>
            </section>

            <hr className="my-16 border-t border-[#1F1F1F]" />

            {/* Testimonials */}
            {/* Testimonials Section */}
<section id="testimonials" className="relative py-28 px-6 bg-black overflow-hidden">
  {/* Background gradient glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(82,169,255,0.1)_0%,transparent_70%)] pointer-events-none"></div>

  <div className="max-w-7xl mx-auto relative z-10">
    {/* Header */}
    <div className="text-center mb-20">
      <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-white">
        Trusted by Industry Leaders
      </h2>
      <p className="text-[#A1A1A1] text-lg max-w-2xl mx-auto">
        See how top companies are transforming their operations with MiraiTech AI.
      </p>
    </div>

    {/* Testimonials Grid */}
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
      {testimonials.map((testimonial, i) => (
        <div
          key={i}
          className="break-inside-avoid bg-[#0A0A0A] border border-[#1F1F1F] rounded-2xl p-8 shadow-lg shadow-black/20 hover:shadow-[#52A9FF20] hover:border-[#52A9FF40] transition-all duration-300"
        >
          <p className="text-white/90 text-base leading-relaxed italic mb-6">
            "{testimonial.quote}"
          </p>
          <div className="pt-4 border-t border-[#1F1F1F]">
            <h4 className="font-semibold text-white text-sm">
              {testimonial.author}
            </h4>
            <p className="text-[#A1A1A1] text-xs uppercase tracking-wide">
              {testimonial.position}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


            <hr className="my-16 border-t border-[#1F1F1F]" />

            {/* CTA */}
            <section  style={{
    backgroundImage: `
      url('./bg.png')
    `,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }} className="py-32 px-6 relative overflow-hidden ">
                <div className="max-w-4xl mx-auto text-center relative z-10 p-12 border border-[#1F1F1F] rounded-[3rem] bg-black shadow-2xl shadow-black/50">
                    <h2 className={`text-5xl md:text-6xl font-bold mb-6 tracking-tight ${geistFont}`}>Ready to Transform Your Business?</h2>
                    <p className="text-xl text-[#A1A1A1] mb-10 max-w-2xl mx-auto">Join 50+ companies that have already transformed their operations with our AI solutions. Get your free ROI assessment today.</p>
                    <VercelButton variant="primary" className="text-lg px-10 py-4 font-semibold">
                        Schedule Free Consultation
                        <ArrowRight className="w-5 h-5" />
                    </VercelButton>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-[#1F1F1F] pt-16 pb-8 px-6 bg-black">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-12">
                        <div className="col-span-2">
                            <div className="text-xl font-bold mb-4 tracking-tight">MiraiTech</div>
                            <p className="text-[#A1A1A1] text-sm leading-relaxed">
                                AI Solutions for Your Industry. Delivering measurable results with guaranteed ROI.
                            </p>
                        </div>
                        <div>
                            <h3 className={`font-semibold mb-4 text-[#EDEDED] text-sm uppercase tracking-widest ${geistMono}`}>Industries</h3>
                            <ul className="space-y-3 text-sm">
                                <li><a href="#industries" className="text-[#A1A1A1] hover:text-white transition-colors">Healthcare</a></li>
                                <li><a href="#industries" className="text-[#A1A1A1] hover:text-white transition-colors">Financial Services</a></li>
                                <li><a href="#industries" className="text-[#A1A1A1] hover:text-white transition-colors">Renewable Energy</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className={`font-semibold mb-4 text-[#EDEDED] text-sm uppercase tracking-widest ${geistMono}`}>Solutions</h3>
                            <ul className="space-y-3 text-sm">
                                <li><a href="#solutions" className="text-[#A1A1A1] hover:text-white transition-colors">AI Consulting</a></li>
                                <li><a href="#solutions" className="text-[#A1A1A1] hover:text-white transition-colors">Implementation</a></li>
                                <li><a href="#solutions" className="text-[#A1A1A1] hover:text-white transition-colors">Support & Maintenance</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className={`font-semibold mb-4 text-[#EDEDED] text-sm uppercase tracking-widest ${geistMono}`}>Company</h3>
                            <ul className="space-y-3 text-sm">
                                <li><a href="#team" className="text-[#A1A1A1] hover:text-white transition-colors">About Us</a></li>
                                                <li><a href="#team" className="text-[#A1A1A1] hover:text-white transition-colors">Our Team</a></li>
                                <li><a href="#testimonials" className="text-[#A1A1A1] hover:text-white transition-colors">Case Studies</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="pt-8 border-t border-[#1F1F1F] text-center text-[#A1A1A1] text-xs uppercase tracking-widest">
                        © 2024 MiraiTech. All rights reserved. | Enterprise-Grade AI Solutions
                    </div>
                </div>
            </footer>
        </div>
    );
}