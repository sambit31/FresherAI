import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { FileText, MessageSquare, Briefcase, ArrowRight } from "lucide-react";

// Load these once in index.html:
// <link rel="preconnect" href="https://fonts.googleapis.com">
// <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=IBM+Plex+Mono:wght@500&display=swap" rel="stylesheet">

const fraunces = { fontFamily: "'Fraunces', ui-serif, Georgia, serif" };
const mono = { fontFamily: "'IBM Plex Mono', ui-monospace, monospace" };

const passes = [
  {
    icon: FileText,
    title: "Resume Builder",
    desc: "Turn your coursework and projects into a resume recruiters actually stop on.",
    tag: "PASS NO. 01",
  },
  {
    icon: MessageSquare,
    title: "Interview Prep",
    desc: "Practice with real questions from real hiring loops, then get told exactly what to fix.",
    tag: "PASS NO. 02",
  },
  {
    icon: Briefcase,
    title: "Job Matching",
    desc: "See roles picked for where you are now, not where a generic filter thinks you should be.",
    tag: "PASS NO. 03",
  },
];

const Home = () => {
  return (
    <div className="relative min-h-screen bg-[#0B0B0F] text-white overflow-hidden">
      {/* Spotlight glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-[900px] h-[900px] rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(245,184,65,0.35) 0%, rgba(245,184,65,0) 70%)",
        }}
      />

      {/* Hero */}
      <section className="relative max-w-5xl mx-auto px-6 md:px-12 pt-20 pb-28 text-center">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs tracking-[0.25em] text-[#F5B841] mb-6"
          style={mono}
        >
          YOUR CAREER DEBUT
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl leading-[1.1] mb-6"
          style={fraunces}
        >
          Every career has an
          <br />
          opening night.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl mx-auto text-gray-400 text-base md:text-lg mb-10"
        >
          FresherAI gets freshers ready for it — sharper resumes, rehearsed
          interviews, and roles worth walking into.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            to="/login"
            className="inline-flex items-center gap-2 bg-[#F5B841] hover:bg-[#e3a72f] text-black font-semibold px-6 py-3 rounded-full transition"
          >
            Start your debut
            <ArrowRight size={16} />
          </Link>
          <a
            href="#features"
            className="px-6 py-3 rounded-full border border-white/15 text-white hover:border-white/40 transition"
          >
            See how it works
          </a>
        </motion.div>
      </section>

      {/* Debut Kit */}
      <section id="features" className="relative max-w-6xl mx-auto px-6 md:px-12 pb-28">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.25em] text-[#F5B841] mb-3" style={mono}>
            YOUR DEBUT KIT
          </p>
          <h2 className="text-3xl md:text-4xl" style={fraunces}>
            Everything you need before curtain up.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {passes.map(({ icon: Icon, title, desc, tag }) => (
            <div
              key={title}
              className="relative bg-[#15151B] border border-white/10 rounded-2xl p-6 pt-8 hover:-translate-y-1 hover:border-[#F5B841]/40 transition duration-300"
            >
              {/* perforation */}
              <div
                className="absolute -top-[1px] left-0 right-0 h-2"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #0B0B0F 2px, transparent 2.5px)",
                  backgroundSize: "14px 14px",
                  backgroundPosition: "top center",
                }}
              />
              <span className="text-[10px] tracking-[0.2em] text-gray-500" style={mono}>
                {tag}
              </span>
              <div className="mt-4 mb-4 w-11 h-11 rounded-lg bg-[#F5B841]/10 flex items-center justify-center text-[#F5B841]">
                <Icon size={20} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-sm text-gray-400 leading-6">{desc}</p>

              {/* barcode stripe */}
              <div
                className="mt-6 h-4 rounded-sm opacity-60"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(90deg, #fff 0 2px, transparent 2px 5px)",
                }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative">
        <div className="max-w-5xl mx-auto px-6 md:px-12 pb-28">
          <div
            className="rounded-3xl px-8 py-14 text-center"
            style={{
              background:
                "linear-gradient(135deg, rgba(245,184,65,0.15), rgba(245,184,65,0.03))",
              border: "1px solid rgba(245,184,65,0.25)",
            }}
          >
            <h2 className="text-2xl md:text-3xl mb-4" style={fraunces}>
              Ready for your opening night?
            </h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              Create your profile in minutes and see where FresherAI thinks
              you should walk in first.
            </p>
            <Link
              to="/login"
              className="inline-flex items-center gap-2 bg-[#F5B841] hover:bg-[#e3a72f] text-black font-semibold px-6 py-3 rounded-full transition"
            >
              Get started
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;