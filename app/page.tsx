"use client";

import { useState } from "react";

function IconBolt({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13 2L3 14h9l-1 8 10-12h-9L13 2z" />
    </svg>
  );
}
function IconCode({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M10 20l4-16M8 8 4 12l4 4M16 8l4 4-4 4" />
    </svg>
  );
}
function IconDatabase({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  );
}
function IconLayout({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
    </svg>
  );
}
function IconShield({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}
function IconFileText({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14,2 14,8 20,8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  );
}
function IconCheck({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <polyline points="20,6 9,17 4,12" />
    </svg>
  );
}
function IconArrowRight({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
function IconMenu({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}
function IconX({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
function IconSparkle({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.5L12 17 5.8 21.4l2.4-7.5L2 9.4h7.6L12 2z" />
    </svg>
  );
}

/* ── NAVBAR ── */
function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ["Features", "How it Works", "Pricing", "Docs"];
  return (
    <nav className="fixed top-4 left-4 right-4 z-50" role="navigation" aria-label="Main navigation">
      <div className="max-w-6xl mx-auto bg-[#1A1A2E]/90 backdrop-blur-md border border-[#252542] rounded-2xl px-5 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#A78BFA] rounded-lg flex items-center justify-center text-[#0A0A0F]">
            <IconBolt className="w-4 h-4" />
          </div>
          <span className="font-bold text-lg text-[#FAFAFA]">APEX AI</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase().replace(/ /g, "-")}`}
               className="text-[#9595B0] hover:text-[#FAFAFA] text-sm transition-colors duration-200 cursor-pointer">
              {l}
            </a>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-3">
          {/* <a href="#" className="text-[#9595B0] hover:text-[#FAFAFA] text-sm transition-colors duration-200 cursor-pointer">Sign in</a> */}
          {/* <a href="#cta" className="bg-[#A78BFA] hover:bg-[#9166E8] text-[#0A0A0F] font-semibold text-sm px-4 py-2 rounded-xl transition-colors duration-200 cursor-pointer active:scale-95 inline-block">
            Get Started Free
          </a> */}
        </div>
        <button onClick={() => setOpen(!open)}
          className="md:hidden text-[#9595B0] hover:text-[#FAFAFA] transition-colors duration-200 cursor-pointer p-1"
          aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <IconX /> : <IconMenu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden mt-2 bg-[#1A1A2E] border border-[#252542] rounded-2xl p-4 max-w-6xl mx-auto">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase().replace(/ /g, "-")}`}
               onClick={() => setOpen(false)}
               className="block py-2.5 text-[#9595B0] hover:text-[#FAFAFA] text-sm transition-colors duration-200 cursor-pointer border-b border-[#252542] last:border-0">
              {l}
            </a>
          ))}
          {/* <a href="#cta" onClick={() => setOpen(false)}
             className="mt-3 block text-center bg-[#A78BFA] text-[#0A0A0F] font-semibold text-sm px-4 py-2.5 rounded-xl cursor-pointer">
            Get Started Free
          </a> */}
        </div>
      )}
    </nav>
  );
}

/* ── HERO ── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
        style={{
          backgroundImage: "linear-gradient(rgba(51,65,85,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(51,65,85,0.25) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, #000 60%, transparent 100%)",
        }} />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] rounded-full pointer-events-none" aria-hidden="true"
        style={{ background: "radial-gradient(ellipse, rgba(167,139,250,0.10) 0%, transparent 70%)" }} />
      <div className="relative max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
        <div>
          <div className="inline-flex items-center gap-2 bg-[#1A1A2E] border border-[#252542] rounded-full px-3 py-1.5 mb-6">
            <span className="w-2 h-2 bg-[#A78BFA] rounded-full animate-pulse" aria-hidden="true" />
            <span className="text-[#9595B0] text-xs font-medium">Now supporting Oracle APEX 24.2</span>
          </div>
          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-5">
            Build{" "}
            <span className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #A78BFA 0%, #22D3EE 100%)" }}>
              Oracle APEX
            </span>
            <br />Apps 10&times; Faster
          </h1>
          <p className="text-[#9595B0] text-lg leading-relaxed mb-8 max-w-lg">
            AI-powered coding assistant that generates PL/SQL procedures, APEX components,
            and complex SQL queries from plain English. No documentation hunting required.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            {/* <a href="#cta"
               className="flex items-center justify-center gap-2 bg-[#A78BFA] hover:bg-[#9166E8] text-[#0A0A0F] font-bold px-6 py-3.5 rounded-xl transition-colors duration-200 cursor-pointer active:scale-95 text-base">
              Start Free Trial <IconArrowRight />
            </a> */}
            <a href="#demo"
               className="flex items-center justify-center gap-2 bg-[#1A1A2E] hover:bg-[#252542] text-[#FAFAFA] border border-[#252542] font-semibold px-6 py-3.5 rounded-xl transition-colors duration-200 cursor-pointer text-base">
              See it in Action <IconArrowRight />
            </a>
          </div>

        </div>
        {/* Code mockup */}
        <div className="relative">
          <div className="bg-[#1A1A2E] border border-[#252542] rounded-2xl overflow-hidden shadow-2xl">
            <div className="bg-[#0A0A0F] px-4 py-3 flex items-center gap-2 border-b border-[#252542]">
              <span className="w-3 h-3 rounded-full bg-[#EF4444]" aria-hidden="true" />
              <span className="w-3 h-3 rounded-full bg-[#F59E0B]" aria-hidden="true" />
              <span className="w-3 h-3 rounded-full bg-[#A78BFA]" aria-hidden="true" />
              <span className="ml-3 text-[#9595B0] text-xs font-mono">apex-ai &mdash; PL/SQL Generator</span>
            </div>
            <div className="p-5 font-mono text-xs leading-6 overflow-x-auto" aria-label="Example: AI-generated PL/SQL">
              <div className="flex gap-2 mb-3">
                <span className="text-[#A78BFA] shrink-0" aria-hidden="true">&#9658;</span>
                <span className="text-[#9595B0] italic">Update customer status based on payment history</span>
              </div>
              <div className="space-y-0.5">
                <div><span className="text-[#818CF8]">CREATE OR REPLACE </span><span className="text-[#38BDF8]">PROCEDURE </span><span className="text-[#A78BFA]">update_customer_status</span><span className="text-[#FAFAFA]"> (</span></div>
                <div className="pl-4"><span className="text-[#F59E0B]">p_customer_id </span><span className="text-[#38BDF8]">IN </span><span className="text-[#FAFAFA]">customers.customer_id</span><span className="text-[#818CF8]">%TYPE</span></div>
                <div><span className="text-[#FAFAFA]">) </span><span className="text-[#818CF8]">IS</span></div>
                <div className="pl-4"><span className="text-[#F59E0B]">v_overdue_days </span><span className="text-[#38BDF8]">NUMBER</span><span className="text-[#FAFAFA]">;</span></div>
                <div><span className="text-[#818CF8]">BEGIN</span></div>
                <div className="pl-4"><span className="text-[#818CF8]">SELECT </span><span className="text-[#FAFAFA]">MAX(SYSDATE - due_date) </span><span className="text-[#38BDF8]">INTO </span><span className="text-[#F59E0B]">v_overdue_days</span></div>
                <div className="pl-4"><span className="text-[#818CF8]">FROM </span><span className="text-[#FAFAFA]">payments </span><span className="text-[#818CF8]">WHERE </span><span className="text-[#FAFAFA]">customer_id = p_customer_id;</span></div>
                <div className="pl-4 mt-1"><span className="text-[#818CF8]">UPDATE </span><span className="text-[#FAFAFA]">customers </span><span className="text-[#818CF8]">SET </span><span className="text-[#FAFAFA]">status =</span></div>
                <div className="pl-6"><span className="text-[#818CF8]">CASE WHEN </span><span className="text-[#F59E0B]">v_overdue_days </span><span className="text-[#FAFAFA]">{">"} 90 </span><span className="text-[#818CF8]">THEN </span><span className="text-[#A3E635]">{"'SUSPENDED'"}</span></div>
                <div className="pl-6"><span className="text-[#818CF8]">WHEN </span><span className="text-[#F59E0B]">v_overdue_days </span><span className="text-[#FAFAFA]">{">"} 30 </span><span className="text-[#818CF8]">THEN </span><span className="text-[#A3E635]">{"'DELINQUENT'"}</span></div>
                <div className="pl-6"><span className="text-[#818CF8]">ELSE </span><span className="text-[#A3E635]">{"'ACTIVE'"}</span><span className="text-[#818CF8]"> END</span></div>
                <div className="pl-4"><span className="text-[#818CF8]">WHERE </span><span className="text-[#FAFAFA]">customer_id = p_customer_id;</span></div>
                <div><span className="text-[#818CF8]">END </span><span className="text-[#A78BFA]">update_customer_status</span><span className="text-[#FAFAFA]">;</span></div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-[#A78BFA] text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA] animate-pulse" aria-hidden="true" />
                Generated in 1.2s &mdash; 38 lines &middot; syntax valid &middot; rollback included
              </div>
            </div>
          </div>
          <div className="absolute -top-3 -right-3 bg-[#A78BFA] text-[#0A0A0F] text-xs font-bold px-3 py-1.5 rounded-xl shadow-lg" style={{ transform: "rotate(3deg)" }} aria-hidden="true">APEX 24.2 Ready</div>
          <div className="absolute -bottom-3 -left-3 bg-[#1A1A2E] border border-[#252542] text-[#9595B0] text-xs px-3 py-1.5 rounded-xl shadow-lg" style={{ transform: "rotate(-2deg)" }} aria-hidden="true">Production-ready PL/SQL</div>
        </div>
      </div>
    </section>
  );
}

/* ── STATS ── */
function Stats() {
  const items = [
    { value: "10×", label: "Faster Development", sub: "vs. writing code manually" },
    { value: "50+", label: "APEX Components", sub: "pages, reports, charts & more" },
    { value: "99.2%", label: "Code Accuracy", sub: "syntax-valid on first generation" },
    { value: "24.2", label: "APEX Version", sub: "Universal Theme 42 supported" },
  ];
  return (
    <section className="py-12 border-y border-[#1A1A2E]" aria-label="Key metrics">
      <div className="max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {items.map((s) => (
          <div key={s.value}>
            <div className="font-bold text-3xl text-[#A78BFA] mb-1">{s.value}</div>
            <div className="font-semibold text-[#FAFAFA] text-sm">{s.label}</div>
            <div className="text-[#9595B0] text-xs mt-0.5">{s.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── FEATURES ── */
function Features() {
  const smallCards = [
    { icon: <IconLayout />, title: "APEX Component Builder", desc: "Create pages, interactive reports, charts, and forms without navigating the APEX UI step-by-step." },
    { icon: <IconDatabase />, title: "SQL AI Studio", desc: "Build complex queries with multi-table joins, window functions, and aggregations instantly." },
    { icon: <IconShield />, title: "Code Review", desc: "AI flags bugs, performance bottlenecks, and SQL injection risks before you deploy to production." },
    { icon: <IconFileText />, title: "Auto Documentation", desc: "Generate inline docs and API references for your entire APEX application automatically." },
  ];
  return (
    <section id="features" className="py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#1A1A2E] border border-[#252542] rounded-full px-3 py-1.5 mb-4">
            <IconSparkle className="w-3.5 h-3.5 text-[#A78BFA]" />
            <span className="text-[#9595B0] text-xs font-medium">Everything you need</span>
          </div>
          <h2 className="font-bold text-3xl md:text-4xl mb-4">The complete AI toolkit for APEX developers</h2>
          <p className="text-[#9595B0] text-lg max-w-2xl mx-auto">
            Stop context-switching between documentation and your IDE. APEX AI puts everything you need inside one assistant.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Featured large card */}
          <div className="md:col-span-2 bg-[#1A1A2E] border border-[#252542] rounded-2xl p-6 hover:border-[#A78BFA]/50 transition-colors duration-200 cursor-pointer group">
            <div className="w-12 h-12 bg-[#A78BFA]/10 border border-[#A78BFA]/30 rounded-xl flex items-center justify-center text-[#A78BFA] mb-5 group-hover:bg-[#A78BFA]/20 transition-colors duration-200">
              <IconCode />
            </div>
            <h3 className="font-bold text-xl mb-2 text-[#FAFAFA]">PL/SQL Generator</h3>
            <p className="text-[#9595B0] leading-relaxed mb-5">
              Generate stored procedures, functions, triggers, and packages from natural language.
              Get production-ready Oracle PL/SQL with error handling, logging, and rollback logic built in.
            </p>
            <div className="bg-[#0A0A0F] rounded-xl p-4 font-mono text-xs leading-5">
              <div className="text-[#9595B0] italic mb-2">-- prompt: sync warehouse inventory</div>
              <div><span className="text-[#818CF8]">CREATE OR REPLACE </span><span className="text-[#38BDF8]">PROCEDURE </span><span className="text-[#A78BFA]">sync_inventory</span><span className="text-[#FAFAFA]"> (p_wh_id </span><span className="text-[#38BDF8]">IN NUMBER</span><span className="text-[#FAFAFA]">) </span><span className="text-[#818CF8]">AS</span></div>
              <div className="pl-4 text-[#9595B0] italic">-- 47 lines generated...</div>
              <div className="mt-2 text-[#A78BFA]">&#10003; Syntax valid &middot; Rollback included &middot; 0.8s</div>
            </div>
          </div>
          {/* Smart autocomplete */}
          <div className="bg-[#1A1A2E] border border-[#252542] rounded-2xl p-5 hover:border-[#A78BFA]/50 transition-colors duration-200 cursor-pointer group flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 bg-[#0A0A0F] border border-[#252542] rounded-xl flex items-center justify-center text-[#9595B0] mb-4 group-hover:text-[#A78BFA] group-hover:border-[#A78BFA]/30 transition-colors duration-200">
                <IconSparkle />
              </div>
              <h3 className="font-bold text-base mb-2 text-[#FAFAFA]">Smart Autocomplete</h3>
              <p className="text-[#9595B0] text-sm leading-relaxed">
                Context-aware autocomplete trained on Oracle APEX best practices and your own codebase patterns.
              </p>
            </div>
            <div className="mt-4 bg-[#0A0A0F] rounded-xl px-3 py-2 font-mono text-xs">
              <span className="text-[#FAFAFA]">apex.page.</span><span className="text-[#A78BFA] border-r-2 border-[#A78BFA] animate-pulse">submit</span>
              <span className="text-[#9595B0]"> &larr; AI suggests</span>
            </div>
          </div>
          {/* Small cards */}
          {smallCards.map((card) => (
            <div key={card.title} className="bg-[#1A1A2E] border border-[#252542] rounded-2xl p-5 hover:border-[#A78BFA]/50 transition-colors duration-200 cursor-pointer group">
              <div className="w-10 h-10 bg-[#0A0A0F] border border-[#252542] rounded-xl flex items-center justify-center text-[#9595B0] mb-3 group-hover:text-[#A78BFA] group-hover:border-[#A78BFA]/30 transition-colors duration-200">
                {card.icon}
              </div>
              <h3 className="font-bold text-base mb-1.5 text-[#FAFAFA]">{card.title}</h3>
              <p className="text-[#9595B0] text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ── DEMO VIDEO ── */
function DemoVideo() {
  return (
    <section id="demo" className="py-20" style={{ backgroundColor: "#111121" }}>
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-[#1A1A2E] border border-[#252542] rounded-full px-3 py-1.5 mb-4">
            <span className="w-2 h-2 bg-[#A78BFA] rounded-full animate-pulse" aria-hidden="true" />
            <span className="text-[#9595B0] text-xs font-medium">Live demo</span>
          </div>
          <h2 className="font-bold text-3xl md:text-4xl mb-4">See APEX AI in Action</h2>
          <p className="text-[#9595B0] text-lg max-w-xl mx-auto">
            Watch how APEX AI generates production-ready PL/SQL and APEX components in real time.
          </p>
        </div>
        <div className="relative">
          {/* Glow behind video */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(167,139,250,0.08) 0%, transparent 70%)" }}
            aria-hidden="true"
          />
          <div className="relative rounded-2xl overflow-hidden border border-[#252542] shadow-2xl">
            {/* Fake terminal header */}
            <div className="bg-[#0A0A0F] px-4 py-3 flex items-center gap-2 border-b border-[#252542]">
              <span className="w-3 h-3 rounded-full bg-[#EF4444]" aria-hidden="true" />
              <span className="w-3 h-3 rounded-full bg-[#F59E0B]" aria-hidden="true" />
              <span className="w-3 h-3 rounded-full bg-[#A78BFA]" aria-hidden="true" />
              <span className="ml-3 text-[#9595B0] text-xs font-mono">apex-ai &mdash; live session recording</span>
            </div>
            <video
              src="/demo.mp4"
              controls
              playsInline
              preload="metadata"
              className="w-full bg-[#0A0A0F] block"
              aria-label="APEX AI demo video showing AI-generated PL/SQL and APEX components"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── HOW IT WORKS ── */
function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Describe in Plain English",
      desc: "Tell APEX AI what you want to build — a procedure, a page, a complex query. No technical jargon required.",
      snippet: "> Create a paginated report of\n  overdue invoices with aging buckets",
    },
    {
      num: "02",
      title: "AI Generates the Code",
      desc: "In seconds you get production-ready PL/SQL, APEX page definitions, SQL queries, and component configurations.",
      snippet: "✓ 127 lines PL/SQL generated\n✓ APEX page definition: JSON\n✓ 3 CTEs, window functions",
    },
    {
      num: "03",
      title: "Review & Deploy",
      desc: "Review the code with inline explanations, adjust anything, and deploy directly to your Oracle APEX workspace.",
      snippet: "✓ Deployed to APEX workspace\n✓ Page 47 created successfully\n✓ 0 compilation errors",
    },
  ];
  return (
    <section id="how-it-works" className="py-20" style={{ backgroundColor: "#111121" }}>
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#1A1A2E] border border-[#252542] rounded-full px-3 py-1.5 mb-4">
            <span className="text-[#A78BFA] text-xs font-medium">Simple 3-step workflow</span>
          </div>
          <h2 className="font-bold text-3xl md:text-4xl mb-4">From idea to deployed code in seconds</h2>
          <p className="text-[#9595B0] text-lg max-w-xl mx-auto">APEX AI fits into your existing development workflow. Zero learning curve.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {steps.map((step, i) => (
            <div key={step.num} className="relative bg-[#1A1A2E] border border-[#252542] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-bold text-4xl text-[#A78BFA] opacity-70 leading-none">{step.num}</span>
                {i < 2 && (
                  <div className="hidden md:flex absolute -right-3 top-8 w-6 h-6 bg-[#A78BFA]/15 border border-[#A78BFA]/30 rounded-full items-center justify-center z-10 text-[#A78BFA]">
                    <IconArrowRight className="w-3 h-3" />
                  </div>
                )}
              </div>
              <h3 className="font-bold text-lg mb-2 text-[#FAFAFA]">{step.title}</h3>
              <p className="text-[#9595B0] text-sm leading-relaxed mb-4">{step.desc}</p>
              <div className="bg-[#0A0A0F] rounded-xl p-3 font-mono text-xs text-[#A78BFA] leading-5 whitespace-pre">{step.snippet}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CTA ── */
function CTASection() {
  return (
    <section id="cta" className="py-20">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="relative bg-[#1A1A2E] border border-[#252542] rounded-3xl p-10 md:p-14 overflow-hidden text-center">
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-96 h-48 rounded-full pointer-events-none" aria-hidden="true"
            style={{ background: "radial-gradient(ellipse, rgba(167,139,250,0.15) 0%, transparent 70%)" }} />
          <div className="relative">
            <div className="w-14 h-14 bg-[#A78BFA]/10 border border-[#A78BFA]/30 rounded-2xl flex items-center justify-center text-[#A78BFA] mx-auto mb-6">
              <IconBolt className="w-6 h-6" />
            </div>
            <h2 className="font-bold text-3xl md:text-4xl mb-4">Start building faster today</h2>
            <p className="text-[#9595B0] text-lg mb-8 max-w-xl mx-auto">
              Join Oracle APEX developers who ship features faster with AI-generated code.
            </p>
            {/* CTA buttons — hidden until auth is ready
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
              <a href="#"
                 className="flex items-center justify-center gap-2 bg-[#A78BFA] hover:bg-[#9166E8] text-[#0A0A0F] font-bold px-8 py-3.5 rounded-xl transition-colors duration-200 cursor-pointer active:scale-95 text-base">
                Start Free Trial <IconArrowRight />
              </a>
              <a href="#"
                 className="flex items-center justify-center gap-2 bg-transparent hover:bg-[#252542] text-[#FAFAFA] border border-[#252542] font-semibold px-8 py-3.5 rounded-xl transition-colors duration-200 cursor-pointer text-base">
                Book a Demo
              </a>
            </div>
            */}

          </div>
        </div>
      </div>
    </section>
  );
}

/* ── FOOTER ── */
function Footer() {
  return (
    <footer className="border-t border-[#1A1A2E] py-10">
      <div className="max-w-6xl mx-auto px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-[#A78BFA] rounded-lg flex items-center justify-center text-[#0A0A0F]">
            <IconBolt className="w-3.5 h-3.5" />
          </div>
          <span className="font-bold text-[#FAFAFA]">APEX AI</span>
        </div>
        <p className="text-[#9595B0] text-sm">&copy; 2026 APEX AI. All rights reserved.</p>
      </div>
    </footer>
  );
}

/* ── PAGE ── */
export default function Home() {
  return (
    <main className="bg-[#0A0A0F] text-[#FAFAFA] overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <DemoVideo />
      <HowItWorks />
      <CTASection />
      <Footer />
    </main>
  );
}
