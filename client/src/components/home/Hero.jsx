// src/components/home/HeroSection.jsx
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Sparkles, TrendingUp, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const FLOATING_CARDS = [
  {
    top: "12%", left: "4%",
    company: "Stripe", role: "Design Lead",
    salary: "$140K", color: "#635BFF",
    delay: 0,
  },
  {
    top: "62%", left: "2%",
    company: "Vercel", role: "Frontend Eng",
    salary: "$120K", color: "#00C7B7",
    delay: 0.3,
  },
  {
    top: "18%", right: "4%",
    company: "Linear", role: "PM",
    salary: "$130K", color: "#F74F6B",
    delay: 0.15,
  },
  {
    top: "68%", right: "3%",
    company: "Figma", role: "ML Eng",
    salary: "$160K", color: "#FF6B35",
    delay: 0.45,
  },
];

const TRENDING = ["React", "AI/ML", "DevOps", "Design", "Product"];

export default function HeroSection() {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const subRef = useRef(null);
  const searchRef = useRef(null);
  const tagsRef = useRef(null);
  const orbRef = useRef(null);
  const orbRef2 = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance timeline
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.fromTo(
        ".hero-badge",
        { opacity: 0, y: 20, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6 }
      )
        .fromTo(
          ".hero-word",
          { opacity: 0, y: 60, rotateX: -30 },
          { opacity: 1, y: 0, rotateX: 0, duration: 0.7, stagger: 0.1 },
          "-=0.2"
        )
        .fromTo(
          ".hero-sub",
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.3"
        )
        .fromTo(
          ".hero-search",
          { opacity: 0, y: 30, scale: 0.97 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6 },
          "-=0.3"
        )
        .fromTo(
          ".hero-tag",
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, stagger: 0.08, duration: 0.4 },
          "-=0.2"
        )
        .fromTo(
          ".float-card",
          { opacity: 0, scale: 0.7, y: 30 },
          { opacity: 1, scale: 1, y: 0, stagger: 0.12, duration: 0.7, ease: "back.out(1.4)" },
          "-=0.5"
        );

      // Ambient float animation for cards
      gsap.utils.toArray(".float-card").forEach((card, i) => {
        gsap.to(card, {
          y: i % 2 === 0 ? -12 : 12,
          duration: 2.5 + i * 0.4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.2,
        });
      });

      // Orb pulse animations
      gsap.to(orbRef.current, {
        scale: 1.15,
        opacity: 0.6,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(orbRef2.current, {
        scale: 1.2,
        opacity: 0.5,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.5,
      });

      // Scroll-driven parallax on orbs
      const handleScroll = () => {
        const y = window.scrollY;
        gsap.set(orbRef.current, { y: y * 0.3 });
        gsap.set(orbRef2.current, { y: y * -0.2 });
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 bg-white"
    >
      {/* Background noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px",
        }}
      />

      {/* Ambient orbs - kept for visual energy but softer on light background */}
      <div
        ref={orbRef}
        className="absolute top-[15%] left-[20%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(99,91,255,0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        ref={orbRef2}
        className="absolute bottom-[10%] right-[15%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(247,79,107,0.09) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Subtle grid lines - adjusted for light background
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      /> */}

      {/* Floating job cards — LEFT */}
      {FLOATING_CARDS.slice(0, 2).map((card, i) => (
        <FloatingCard key={i} card={card} />
      ))}
      {/* Floating job cards — RIGHT */}
      {FLOATING_CARDS.slice(2).map((card, i) => (
        <FloatingCard key={i + 2} card={card} />
      ))}

      {/* Center content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        {/* Badge - clean professional light version */}
        <div className="hero-badge inline-flex items-center gap-2 px-5 py-2.5 rounded-3xl border border-slate-200 bg-white text-sm font-medium text-slate-600 mb-8 shadow-sm">
          <Sparkles className="w-4 h-4 text-[#635BFF]" />
          <span>10,000+ jobs added this week</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        </div>

        {/* Headline split into words for stagger - dark professional text */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tighter mb-6" style={{ perspective: "800px" }}>
          <div className="overflow-hidden">
            {"Find Your".split(" ").map((w, i) => (
              <span key={i} className="hero-word inline-block mr-[0.2em] text-slate-950">
                {w}
              </span>
            ))}
          </div>
          <div className="overflow-hidden">
            {"Next".split(" ").map((w, i) => (
              <span
                key={i}
                className="hero-word inline-block mr-[0.2em]"
                style={{
                  background: "linear-gradient(135deg, #635BFF 0%, #F74F6B 50%, #FF6B35 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {w}
              </span>
            ))}
          </div>
          <div className="overflow-hidden">
            {"Career Move".split(" ").map((w, i) => (
              <span key={i} className="hero-word inline-block mr-[0.2em] text-slate-950">
                {w}
              </span>
            ))}
          </div>
        </h1>

        <p className="hero-sub text-lg md:text-xl text-slate-500 mb-10 max-w-xl mx-auto leading-relaxed font-['DM_Sans',sans-serif]">
          Join 2M+ professionals discovering curated roles at the world's most innovative companies — matched to your skills in real time.
        </p>

        {/* Search bar - clean, modern light version with subtle depth */}
        <div className="hero-search relative">
          <div className="flex flex-col sm:flex-row gap-3 p-2 rounded-3xl border border-slate-200 bg-white shadow-xl">
            {/* Job search field */}
            <div className="flex items-center gap-3 flex-1 px-5 py-4 rounded-2xl bg-slate-50">
              <Search className="w-5 h-5 text-slate-400 shrink-0" />
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Job title, keyword, or company..."
                className="w-full bg-transparent text-slate-900 placeholder:text-slate-400 text-base outline-none font-['DM_Sans',sans-serif]"
              />
            </div>

            {/* Location field */}
            <div className="flex items-center gap-3 flex-1 px-5 py-4 rounded-2xl bg-slate-50">
              <MapPin className="w-5 h-5 text-slate-400 shrink-0" />
              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="City, remote, or worldwide..."
                className="w-full bg-transparent text-slate-900 placeholder:text-slate-400 text-base outline-none font-['DM_Sans',sans-serif]"
              />
            </div>

            {/* Search button - kept vibrant gradient */}
            <button
              className="px-10 py-4 rounded-2xl font-semibold text-base text-white shrink-0 transition-all hover:scale-[1.03] active:scale-95 shadow-lg"
              style={{
                background: "linear-gradient(135deg, #635BFF, #F74F6B)",
              }}
            >
              Search Jobs
            </button>
          </div>
        </div>

        {/* Trending tags - professional light styling */}
        <div className="mt-8 flex items-center justify-center gap-2 flex-wrap">
          <span className="hero-tag text-xs text-slate-400 flex items-center gap-1">
            <TrendingUp className="w-3 h-3" /> Trending:
          </span>
          {TRENDING.map((tag) => (
            <button
              key={tag}
              className="hero-tag text-xs px-4 py-2 rounded-3xl border border-slate-200 text-slate-500 hover:text-slate-900 hover:border-slate-300 transition-all duration-200 bg-white"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function FloatingCard({ card }) {
  const style = {
    position: "absolute",
    top: card.top,
    left: card.left || undefined,
    right: card.right || undefined,
  };

  return (
    <div
      className="float-card hidden lg:block absolute z-20"
      style={style}
    >
      <div
        className="w-52 p-5 rounded-3xl border border-slate-100 bg-white shadow-2xl"
      >
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-9 h-9 rounded-2xl flex items-center justify-center text-sm font-black text-white shadow-inner"
            style={{ background: card.color }}
          >
            {card.company[0]}
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">{card.company}</p>
            <p className="text-xs text-slate-500">{card.role}</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-slate-900">{card.salary}</span>
          <span className="text-xs px-3 py-1 rounded-2xl bg-emerald-100 text-emerald-600 border border-emerald-200 font-medium">
            Hiring
          </span>
        </div>
      </div>
    </div>
  );
}
