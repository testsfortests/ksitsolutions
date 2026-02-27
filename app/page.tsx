"use client";

import { useState, useEffect, useRef } from "react";

// ─── Toggle Flag ───────────────────────────────────────────────────────────────
const showSuccessStats = true;

// ─── Data ──────────────────────────────────────────────────────────────────────
const WHATSAPP_NUMBER = "919530210019";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20KS%20IT%20Solutions%2C%20I%27m%20interested%20in%20your%20services!`;

const services = [
  { icon: "🌐", title: "Business Websites", desc: "Professional, fast-loading websites tailored for your brand identity and target audience." },
  { icon: "🛒", title: "E-Commerce Websites", desc: "Feature-rich online stores with payment gateways, inventory management, and more." },
  { icon: "📱", title: "Mobile Applications", desc: "Cross-platform Android & iOS apps with modern UI/UX and seamless performance." },
  { icon: "💻", title: "Web Applications", desc: "Scalable, secure web apps with admin panels, dashboards, and real-time features." },
  { icon: "⚙️", title: "Custom Software", desc: "Tailor-made software solutions designed around your unique business workflows." },
  { icon: "🎓", title: "Educational Portals", desc: "LMS platforms, coaching portals, and student management systems built to scale." },
];

const demos = [
  { title: "Restaurant Business Website", type: "Website", desc: "A visually stunning restaurant site with online menu, reservations, and gallery.", color: "#ff6b35" },
  { title: "School Management System", type: "Web App", desc: "Complete school ERP with student records, attendance, fees, and staff management.", color: "#00b4d8" },
  { title: "Fitness Mobile App", type: "Android App", desc: "Workout tracker, diet planner, and progress analytics for fitness enthusiasts.", color: "#06d6a0" },
  { title: "Coaching Portal", type: "Educational Platform", desc: "Online coaching platform with video classes, tests, and student progress tracking.", color: "#a855f7" },
];

const stats = [
  { value: "100+", label: "Projects Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "24/7", label: "Support" },
];

const testimonials = [
  { name: "Rahul Sharma", company: "FreshBite Restaurants", review: "KS IT Solutions built us a stunning restaurant website in just 5 days. The quality was exceptional and pricing was very fair. Highly recommended!", stars: 5 },
  { name: "Priya Patel", company: "StarStudy Academy", review: "Our coaching portal is exactly what we envisioned. Students love the interface and our enrollments have increased 3x since launch.", stars: 5 },
  { name: "Amit Verma", company: "FitZone Gym", review: "The mobile app they delivered for our gym is world-class. Professional team, on-time delivery, and excellent post-launch support.", stars: 5 },
  { name: "Neha Singh", company: "ShopKart India", review: "Our e-commerce store handles thousands of orders smoothly. The admin panel is intuitive and the performance is blazing fast.", stars: 5 },
];

const pricingPlans = [
  {
    tier: "🥉",
    name: "Starter",
    price: "₹2,499",
    popular: false,
    features: ["Static Website", "3–5 Pages", "Mobile Responsive", "Basic Design", "1 Month Support"],
  },
  {
    tier: "🥈",
    name: "Business",
    price: "₹7,999",
    popular: true,
    features: ["Dynamic Website", "Admin Panel", "SEO Friendly", "WhatsApp Integration", "3 Month Support"],
  },
  {
    tier: "🥇",
    name: "Premium",
    price: "₹19,999",
    popular: false,
    features: ["Web App / Custom Software", "Advanced Features", "Database Integration", "Full Customization", "6 Month Support"],
  },
];

// ─── Helpers ───────────────────────────────────────────────────────────────────
function StarRating({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ color: "#fbbf24", fontSize: 16 }}>★</span>
      ))}
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────
export default function KSITSolutions() {
  const [activeNav, setActiveNav] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) { el.scrollIntoView({ behavior: "smooth" }); setActiveNav(id); setMobileMenuOpen(false); }
  };

  return (
    <div style={{ fontFamily: "'Sora', 'Segoe UI', sans-serif", background: "#050b18", color: "#e2e8f0", minHeight: "100vh", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap');
        
        * { box-sizing: border-box; margin: 0; padding: 0; }
        
        :root {
          --primary: #3b82f6;
          --primary-dark: #1d4ed8;
          --accent: #8b5cf6;
          --accent2: #06b6d4;
          --bg: #050b18;
          --bg2: #0a1628;
          --bg3: #0f1f3d;
          --card: rgba(15, 31, 61, 0.8);
          --border: rgba(59, 130, 246, 0.2);
          --text: #e2e8f0;
          --text-muted: #94a3b8;
          --glow: 0 0 30px rgba(59,130,246,0.3);
        }

        html { scroll-behavior: smooth; }

        .nav-link {
          background: none; border: none; color: var(--text-muted);
          cursor: pointer; font-family: 'Sora', sans-serif; font-size: 14px;
          font-weight: 500; padding: 6px 14px; border-radius: 8px;
          transition: all 0.2s; letter-spacing: 0.3px;
        }
        .nav-link:hover, .nav-link.active { color: #fff; background: rgba(59,130,246,0.15); }

        .btn-primary {
          background: linear-gradient(135deg, var(--primary), var(--accent));
          border: none; border-radius: 12px; color: #fff; cursor: pointer;
          font-family: 'Sora', sans-serif; font-size: 15px; font-weight: 600;
          padding: 14px 28px; transition: all 0.3s; letter-spacing: 0.3px;
          box-shadow: 0 4px 24px rgba(59,130,246,0.35);
        }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(59,130,246,0.5); }

        .btn-ghost {
          background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.15);
          border-radius: 12px; color: #fff; cursor: pointer;
          font-family: 'Sora', sans-serif; font-size: 15px; font-weight: 600;
          padding: 14px 28px; transition: all 0.3s; backdrop-filter: blur(8px);
        }
        .btn-ghost:hover { background: rgba(255,255,255,0.12); border-color: rgba(59,130,246,0.5); transform: translateY(-2px); }

        .btn-wa {
          background: linear-gradient(135deg, #25d366, #128c7e);
          border: none; border-radius: 12px; color: #fff; cursor: pointer;
          font-family: 'Sora', sans-serif; font-size: 14px; font-weight: 600;
          padding: 12px 22px; transition: all 0.3s;
          box-shadow: 0 4px 20px rgba(37,211,102,0.35);
        }
        .btn-wa:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(37,211,102,0.5); }

        .card {
          background: var(--card); border: 1px solid var(--border);
          border-radius: 20px; backdrop-filter: blur(12px);
          transition: all 0.3s;
        }
        .card:hover { border-color: rgba(59,130,246,0.5); transform: translateY(-4px); box-shadow: var(--glow); }

        .section-title {
          font-size: clamp(28px, 5vw, 48px); font-weight: 800;
          background: linear-gradient(135deg, #fff 0%, #93c5fd 60%, #c4b5fd 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text; line-height: 1.15;
        }

        .badge {
          display: inline-block; padding: 4px 14px; border-radius: 999px;
          font-size: 12px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase;
          background: rgba(59,130,246,0.15); border: 1px solid rgba(59,130,246,0.3);
          color: #93c5fd;
        }

        .grid-bg {
          background-image: linear-gradient(rgba(59,130,246,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.06) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        .glow-orb {
          position: absolute; border-radius: 50%; filter: blur(80px); pointer-events: none;
        }

        .stat-card {
          text-align: center; padding: 32px 24px;
          background: linear-gradient(135deg, rgba(59,130,246,0.1), rgba(139,92,246,0.1));
          border: 1px solid rgba(59,130,246,0.25); border-radius: 20px;
          transition: all 0.3s;
        }
        .stat-card:hover { transform: translateY(-4px); box-shadow: var(--glow); }

        .pricing-card {
          background: var(--card); border: 1px solid var(--border);
          border-radius: 24px; padding: 36px 28px; position: relative;
          transition: all 0.3s; backdrop-filter: blur(12px);
        }
        .pricing-card.popular {
          border-color: var(--primary); box-shadow: 0 0 40px rgba(59,130,246,0.25);
          background: linear-gradient(135deg, rgba(29,78,216,0.2), rgba(109,40,217,0.2));
        }
        .pricing-card:hover { transform: translateY(-6px); }

        .testimonial-card {
          background: var(--card); border: 1px solid var(--border);
          border-radius: 20px; padding: 28px; transition: all 0.3s;
        }
        .testimonial-card:hover { border-color: rgba(59,130,246,0.4); transform: translateY(-3px); }

        .wa-float {
          position: fixed; bottom: 28px; right: 28px; z-index: 1000;
          width: 60px; height: 60px; border-radius: 50%;
          background: linear-gradient(135deg, #25d366, #128c7e);
          display: flex; align-items: center; justify-content: center;
          font-size: 28px; cursor: pointer; text-decoration: none;
          box-shadow: 0 6px 28px rgba(37,211,102,0.5);
          animation: pulse-wa 2.5s infinite;
          transition: transform 0.2s;
        }
        .wa-float:hover { transform: scale(1.1); }

        @keyframes pulse-wa {
          0%, 100% { box-shadow: 0 6px 28px rgba(37,211,102,0.5); }
          50% { box-shadow: 0 6px 40px rgba(37,211,102,0.75), 0 0 0 12px rgba(37,211,102,0.1); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fadeup { animation: fadeInUp 0.7s ease forwards; }
        .delay-1 { animation-delay: 0.1s; opacity: 0; }
        .delay-2 { animation-delay: 0.25s; opacity: 0; }
        .delay-3 { animation-delay: 0.4s; opacity: 0; }

        @media (max-width: 768px) {
          .mobile-hide { display: none !important; }
          .mobile-menu { display: flex !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu-panel { display: none !important; }
        }
        
        .check-item::before {
          content: "✓"; color: #3b82f6; font-weight: 700; margin-right: 10px;
        }

        section { scroll-margin-top: 80px; }

        .demo-thumb {
          width: 100%; height: 180px; border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          font-size: 48px; position: relative; overflow: hidden;
        }

        .learn-more-btn {
          background: rgba(59,130,246,0.12); border: 1px solid rgba(59,130,246,0.3);
          border-radius: 8px; color: #93c5fd; cursor: pointer;
          font-family: 'Sora', sans-serif; font-size: 13px; font-weight: 600;
          padding: 8px 18px; transition: all 0.2s; margin-top: 12px;
        }
        .learn-more-btn:hover { background: rgba(59,130,246,0.25); color: #fff; }

        .nav-mobile-link {
          display: block; padding: 14px 20px; color: var(--text-muted);
          font-size: 16px; font-weight: 500; border-bottom: 1px solid rgba(255,255,255,0.06);
          cursor: pointer; transition: all 0.2s; background: none; border-left: none; border-right: none; border-top: none; width: 100%; text-align: left; font-family: 'Sora', sans-serif;
        }
        .nav-mobile-link:hover { color: #fff; background: rgba(59,130,246,0.1); padding-left: 28px; }
      `}</style>

      {/* ── Floating WhatsApp ── */}
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="wa-float" title="Chat on WhatsApp">
        <svg viewBox="0 0 24 24" fill="white" width="28" height="28">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      {/* ── Header / Nav ── */}
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 900,
        padding: "0 5%",
        background: scrolled ? "rgba(5,11,24,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(59,130,246,0.15)" : "none",
        transition: "all 0.3s",
        height: 70, display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }} onClick={() => scrollTo("home")}>
          <div style={{
            width: 42, height: 42, borderRadius: 10, overflow: "hidden",
            background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 800, fontSize: 18, color: "#fff", letterSpacing: -1,
            flexShrink: 0,
          }}>
            KS
          </div>
          <div>
            <div style={{ fontWeight: 800, fontSize: 17, letterSpacing: -0.5, color: "#fff" }}>KS IT Solutions</div>
            <div style={{ fontSize: 10, color: "#64748b", letterSpacing: 1, textTransform: "uppercase" }}>Digital Agency</div>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="mobile-hide" style={{ display: "flex", gap: 4, alignItems: "center" }}>
          {[["home","Home"],["services","Services"],["demos","Projects"],["pricing","Pricing"],["testimonials","Reviews"]].map(([id, label]) => (
            <button key={id} className={`nav-link${activeNav === id ? " active" : ""}`} onClick={() => scrollTo(id)}>{label}</button>
          ))}
          <div style={{ width: 1, height: 20, background: "rgba(255,255,255,0.1)", margin: "0 8px" }} />
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <button className="btn-wa" style={{ padding: "9px 18px", fontSize: 13 }}>💬 WhatsApp</button>
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button className="mobile-menu" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{
          display: "none", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: 10, width: 42, height: 42, alignItems: "center", justifyContent: "center",
          cursor: "pointer", flexDirection: "column", gap: 5, padding: 10,
        }}>
          {[0,1,2].map(i => <span key={i} style={{ display: "block", width: 22, height: 2, background: "#fff", borderRadius: 2 }} />)}
        </button>
      </header>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="mobile-menu-panel" style={{
          position: "fixed", top: 70, left: 0, right: 0, zIndex: 899,
          background: "rgba(5,11,24,0.98)", backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(59,130,246,0.2)",
        }}>
          {[["home","Home"],["services","Services"],["demos","Projects"],["pricing","Pricing"],["testimonials","Reviews"]].map(([id, label]) => (
            <button key={id} className="nav-mobile-link" onClick={() => scrollTo(id)}>{label}</button>
          ))}
          <div style={{ padding: 16 }}>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={{ display: "block" }}>
              <button className="btn-wa" style={{ width: "100%" }}>💬 Chat on WhatsApp</button>
            </a>
          </div>
        </div>
      )}

      {/* ── HERO ── */}
      <section id="home" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "120px 5% 80px", overflow: "hidden" }}>
        <div className="grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.4 }} />
        <div className="glow-orb" style={{ width: 600, height: 600, background: "rgba(59,130,246,0.12)", top: -100, right: -200 }} />
        <div className="glow-orb" style={{ width: 400, height: 400, background: "rgba(139,92,246,0.1)", bottom: 0, left: -100 }} />
        <div className="glow-orb" style={{ width: 300, height: 300, background: "rgba(6,182,212,0.08)", top: "30%", left: "20%" }} />

        <div style={{ position: "relative", maxWidth: 820, textAlign: "center" }}>
          <div className="badge animate-fadeup" style={{ marginBottom: 20 }}>🚀 Trusted by 50+ Businesses Across India</div>

          <h1 className="section-title animate-fadeup delay-1" style={{ fontSize: "clamp(32px, 6vw, 68px)", marginBottom: 24, fontWeight: 800 }}>
            We Build Powerful &<br />Affordable Digital Solutions
          </h1>

          <p className="animate-fadeup delay-2" style={{ fontSize: "clamp(16px, 2.5vw, 20px)", color: "#94a3b8", marginBottom: 40, lineHeight: 1.7, maxWidth: 600, margin: "0 auto 40px" }}>
            Websites, Web Apps &amp; Mobile Applications for Growing Businesses. Fast delivery. Stunning design. Lifetime support.
          </p>

          <div className="animate-fadeup delay-3" style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <button className="btn-primary" style={{ fontSize: 16, padding: "16px 32px" }}>
                📞 Get Free Consultation
              </button>
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <button className="btn-ghost" style={{ fontSize: 16, padding: "16px 32px" }}>
                💬 Chat on WhatsApp
              </button>
            </a>
          </div>

          {/* Trust bar */}
          <div style={{ marginTop: 64, display: "flex", gap: 32, justifyContent: "center", flexWrap: "wrap" }}>
            {["⚡ 5-Day Delivery", "🔒 100% Secure", "💯 Client Satisfaction", "🇮🇳 Made in India"].map(t => (
              <div key={t} style={{ fontSize: 13, color: "#64748b", fontWeight: 500 }}>{t}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" style={{ padding: "100px 5%", position: "relative" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div className="badge" style={{ marginBottom: 16 }}>What We Do</div>
            <h2 className="section-title">Our Services</h2>
            <p style={{ color: "#64748b", marginTop: 16, fontSize: 17 }}>End-to-end digital solutions built to grow your business</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {services.map((s, i) => (
              <div key={i} className="card" style={{ padding: "32px 28px" }}>
                <div style={{ fontSize: 44, marginBottom: 16 }}>{s.icon}</div>
                <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 10, color: "#f1f5f9" }}>{s.title}</h3>
                <p style={{ color: "#64748b", lineHeight: 1.7, fontSize: 15 }}>{s.desc}</p>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <button className="learn-more-btn">Learn More →</button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEMO PROJECTS ── */}
      <section id="demos" style={{ padding: "100px 5%", background: "rgba(10,22,40,0.5)", position: "relative" }}>
        <div className="glow-orb" style={{ width: 500, height: 500, background: "rgba(139,92,246,0.08)", top: 0, right: 0 }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div className="badge" style={{ marginBottom: 16 }}>Portfolio</div>
            <h2 className="section-title">Our Demo Projects</h2>
            <p style={{ color: "#64748b", marginTop: 16, fontSize: 17 }}>Real-world solutions we've crafted for our clients</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {demos.map((d, i) => (
              <div key={i} className="card" style={{ padding: "0 0 24px", overflow: "hidden" }}>
                <div className="demo-thumb" style={{ background: `linear-gradient(135deg, ${d.color}22, ${d.color}44)`, borderBottom: `1px solid ${d.color}33` }}>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: 56 }}>
                      {["🍽️", "🏫", "💪", "📚"][i]}
                    </div>
                    <div style={{ fontSize: 11, color: d.color, fontWeight: 700, marginTop: 8, textTransform: "uppercase", letterSpacing: 1 }}>{d.type}</div>
                  </div>
                </div>
                <div style={{ padding: "20px 24px 0" }}>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: "#f1f5f9", marginBottom: 8 }}>{d.title}</h3>
                  <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.6 }}>{d.desc}</p>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <button style={{
                      marginTop: 16, background: `${d.color}20`, border: `1px solid ${d.color}50`,
                      borderRadius: 8, color: d.color, cursor: "pointer",
                      fontFamily: "'Sora', sans-serif", fontSize: 13, fontWeight: 700,
                      padding: "8px 18px", transition: "all 0.2s",
                    }}>
                      Demo Preview →
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUCCESS STATS ── */}
      {showSuccessStats && (
        <section style={{ padding: "100px 5%", position: "relative", overflow: "hidden" }}>
          <div className="glow-orb" style={{ width: 600, height: 300, background: "rgba(59,130,246,0.08)", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
          <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
            <div style={{ textAlign: "center", marginBottom: 60 }}>
              <div className="badge" style={{ marginBottom: 16 }}>By The Numbers</div>
              <h2 className="section-title">Our Achievements</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
              {stats.map((s, i) => (
                <div key={i} className="stat-card">
                  <div style={{ fontSize: "clamp(40px, 6vw, 60px)", fontWeight: 800, background: "linear-gradient(135deg, #3b82f6, #8b5cf6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", fontFamily: "'Space Mono', monospace" }}>
                    {s.value}
                  </div>
                  <div style={{ color: "#94a3b8", fontWeight: 600, marginTop: 8, fontSize: 15 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── PRICING ── */}
      <section id="pricing" style={{ padding: "100px 5%", background: "rgba(10,22,40,0.6)", position: "relative" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div className="badge" style={{ marginBottom: 16 }}>Transparent Pricing</div>
            <h2 className="section-title">Simple, Affordable Plans</h2>
            <p style={{ color: "#64748b", marginTop: 16, fontSize: 17 }}>No hidden costs. Pay only for what you need.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24, alignItems: "start" }}>
            {pricingPlans.map((plan, i) => (
              <div key={i} className={`pricing-card${plan.popular ? " popular" : ""}`} style={{ marginTop: plan.popular ? 0 : 24 }}>
                {plan.popular && (
                  <div style={{
                    position: "absolute", top: -16, left: "50%", transform: "translateX(-50%)",
                    background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                    borderRadius: 999, padding: "6px 20px",
                    fontSize: 12, fontWeight: 700, color: "#fff", letterSpacing: 0.5, whiteSpace: "nowrap",
                  }}>⭐ MOST POPULAR</div>
                )}

                <div style={{ fontSize: 36, marginBottom: 8 }}>{plan.tier}</div>
                <h3 style={{ fontSize: 24, fontWeight: 800, color: "#f1f5f9", marginBottom: 4 }}>{plan.name}</h3>
                <div style={{ fontSize: "clamp(32px, 5vw, 44px)", fontWeight: 800, color: plan.popular ? "#3b82f6" : "#f1f5f9", fontFamily: "'Space Mono', monospace", margin: "16px 0" }}>
                  {plan.price}
                </div>
                <p style={{ color: "#64748b", fontSize: 12, marginBottom: 28 }}>Starting price · GST extra</p>

                <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
                  {plan.features.map((f, j) => (
                    <div key={j} className="check-item" style={{ color: "#cbd5e1", fontSize: 15 }}>{f}</div>
                  ))}
                </div>

                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={{ display: "block" }}>
                  <button className={plan.popular ? "btn-primary" : "btn-ghost"} style={{ width: "100%", padding: "14px" }}>
                    💬 Contact on WhatsApp
                  </button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section id="testimonials" style={{ padding: "100px 5%", position: "relative" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div className="badge" style={{ marginBottom: 16 }}>Client Stories</div>
            <h2 className="section-title">What Our Clients Say</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <StarRating count={t.stars} />
                <p style={{ color: "#cbd5e1", lineHeight: 1.7, margin: "16px 0 20px", fontSize: 15, fontStyle: "italic" }}>
                  "{t.review}"
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: "50%",
                    background: `linear-gradient(135deg, hsl(${i * 80}, 70%, 50%), hsl(${i * 80 + 60}, 70%, 40%))`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontWeight: 700, fontSize: 18, color: "#fff",
                  }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: "#f1f5f9", fontSize: 15 }}>{t.name}</div>
                    <div style={{ color: "#64748b", fontSize: 13 }}>{t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "100px 5%", position: "relative", overflow: "hidden" }}>
        <div className="glow-orb" style={{ width: 800, height: 400, background: "rgba(59,130,246,0.1)", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
        <div style={{
          maxWidth: 860, margin: "0 auto", position: "relative",
          background: "linear-gradient(135deg, rgba(29,78,216,0.2), rgba(109,40,217,0.2))",
          border: "1px solid rgba(59,130,246,0.3)", borderRadius: 28,
          padding: "64px 40px", textAlign: "center",
          backdropFilter: "blur(12px)",
        }}>
          <h2 className="section-title" style={{ fontSize: "clamp(28px, 5vw, 52px)", marginBottom: 20 }}>
            Ready to Build Your<br />Business Online?
          </h2>
          <p style={{ color: "#94a3b8", fontSize: 18, marginBottom: 40, lineHeight: 1.7 }}>
            Join 50+ businesses that trust KS IT Solutions for their digital growth.<br />
            Let's build something amazing together.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <button className="btn-primary" style={{ fontSize: 16, padding: "16px 36px" }}>🚀 Get Started Today</button>
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <button className="btn-wa" style={{ fontSize: 16, padding: "16px 32px" }}>💬 WhatsApp Now</button>
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#030810", borderTop: "1px solid rgba(59,130,246,0.15)", padding: "60px 5% 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 48, marginBottom: 48 }}>
            {/* Brand */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 10, overflow: "hidden",
                  background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontWeight: 800, fontSize: 18, color: "#fff",
                }}>KS</div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: 17, color: "#fff" }}>KS IT Solutions</div>
                  <div style={{ fontSize: 10, color: "#475569", letterSpacing: 1, textTransform: "uppercase" }}>Digital Agency</div>
                </div>
              </div>
              <p style={{ color: "#475569", fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>
                Professional websites, web apps, and mobile applications for startups, local businesses, and enterprises.
              </p>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 8, color: "#25d366", fontSize: 15, fontWeight: 600, textDecoration: "none" }}>
                📱 WhatsApp: 9530210019
              </a>
            </div>

            {/* Quick Links */}
            <div>
              <h4 style={{ fontWeight: 700, color: "#f1f5f9", marginBottom: 20, fontSize: 16 }}>Quick Links</h4>
              {[["home","Home"],["services","Services"],["demos","Demo Projects"],["pricing","Pricing"],["testimonials","Reviews"]].map(([id, label]) => (
                <div key={id} style={{ marginBottom: 12 }}>
                  <button onClick={() => scrollTo(id)} style={{ background: "none", border: "none", color: "#475569", cursor: "pointer", fontSize: 14, fontFamily: "'Sora', sans-serif", padding: 0, transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#93c5fd")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#475569")}>
                    → {label}
                  </button>
                </div>
              ))}
            </div>

            {/* Services */}
            <div>
              <h4 style={{ fontWeight: 700, color: "#f1f5f9", marginBottom: 20, fontSize: 16 }}>Services</h4>
              {services.slice(0, 5).map((s) => (
                <div key={s.title} style={{ marginBottom: 10, color: "#475569", fontSize: 14 }}>
                  {s.icon} {s.title}
                </div>
              ))}
            </div>

            {/* Contact */}
            <div>
              <h4 style={{ fontWeight: 700, color: "#f1f5f9", marginBottom: 20, fontSize: 16 }}>Get In Touch</h4>
              <p style={{ color: "#475569", fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>
                Have a project in mind? Let's discuss and build it together.
              </p>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={{ display: "block" }}>
                <button className="btn-wa" style={{ width: "100%" }}>💬 Start a Conversation</button>
              </a>
            </div>
          </div>

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 28, display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "space-between", alignItems: "center" }}>
            <p style={{ color: "#334155", fontSize: 13 }}>© 2026 KS IT Solutions. All rights reserved.</p>
            <p style={{ color: "#334155", fontSize: 13 }}>Made with ❤️ in India</p>
          </div>
        </div>
      </footer>
    </div>
  );
}