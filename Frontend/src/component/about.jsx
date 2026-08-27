import { 
  Brain, 
  Target, 
  Sparkles, 
  ArrowRight, 
  Layers, 
  Cpu, 
  Zap, 
  TrendingUp, 
  RefreshCw, 
  CheckCircle2, 
  XCircle, 
  BookOpen, 
  Clock, 
  Activity, 
  Compass, 
  ShieldCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const differences = [
    { name: 'Working Memory', icon: Cpu, desc: 'Capacity for active holding and manipulating real-time info.' },
    { name: 'Attention', icon: Target, desc: 'Focus maintenance and signal discrimination from environmental noise.' },
    { name: 'Recall', icon: Zap, desc: 'Retrieval speed and pattern completion accuracy from memory cues.' },
    { name: 'Learning Speed', icon: Activity, desc: 'Rate of acquiring new concepts and building initial representations.' },
    { name: 'Retention', icon: Clock, desc: 'Stability of memory over time against natural decay curves.' },
    { name: 'Generalization', icon: Compass, desc: 'Ability to transfer learned principles to novel problems.' },
  ];

  const pillars = [
    {
      title: 'Assess',
      tag: '01',
      desc: 'Evaluate cognitive and learning-related performance using structured computational tasks.',
      icon: Brain,
      color: 'border-blue-500/30 bg-blue-500/5 text-blue-400'
    },
    {
      title: 'Understand',
      tag: '02',
      desc: 'Create a dynamic multi-dimensional profile based on assessment and learning data.',
      icon: Layers,
      color: 'border-purple-500/30 bg-purple-500/5 text-purple-400'
    },
    {
      title: 'Adapt',
      tag: '03',
      desc: 'Use the profile to personalize learning content, practice types, and revision intervals.',
      icon: RefreshCw,
      color: 'border-pink-500/30 bg-pink-500/5 text-pink-400'
    }
  ];

  const objectives = [
    {
      num: '01',
      title: 'Cognitive Assessment',
      desc: 'Measure selected cognitive and learning-related abilities using structured computational assessment approaches.',
      icon: Cpu,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      num: '02',
      title: 'Personalized Learning',
      desc: 'Use the resulting learner profile to recommend appropriate learning strategies tailored to cognitive strengths.',
      icon: Sparkles,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      num: '03',
      title: 'Better Retention',
      desc: 'Encourage effective recall and revision practices based on computational memory decay models to support long-term retention.',
      icon: Clock,
      color: 'from-purple-500 to-pink-500'
    },
    {
      num: '04',
      title: 'Continuous Improvement',
      desc: 'Track learning performance over time and adapt the learning experience as new interaction data becomes available.',
      icon: TrendingUp,
      color: 'from-pink-500 to-emerald-500'
    }
  ];

  const loopSteps = [
    { title: 'COGNITIVE PERFORMANCE', desc: 'Initial baseline tasks' },
    { title: 'LEARNER PROFILE', desc: 'Synthesized 6D metrics' },
    { title: 'PERSONALIZED STRATEGY', desc: 'Tailored study methods' },
    { title: 'LEARN & PRACTICE', desc: 'Adaptive learning activities' },
    { title: 'REVISION', desc: 'Scheduled spaced recall' },
    { title: 'RETENTION CHECK', desc: 'Performance evaluation' },
    { title: 'NEW PERFORMANCE', desc: 'Updated interaction data' },
    { title: 'UPDATED PROFILE', desc: 'Refined cognitive parameters' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8 selection:bg-purple-500 selection:text-white">
      <div className="max-w-6xl mx-auto space-y-24">
        
        {/* ========================================================================= */}
        {/* SECTION 1 — HERO SECTION */}
        {/* ========================================================================= */}
        <section className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs sm:text-sm font-semibold uppercase tracking-wider shadow-inner">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              About The Project
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-indigo-300">
              Understanding How You Learn
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Smart Learning Agent is an intelligent learning platform designed to understand individual learning and cognitive characteristics and use them to create a more personalized learning experience.
            </p>

            <div className="pt-2">
              <Link
                to="/how-it-works"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-200 hover:text-white text-sm font-semibold transition"
              >
                Explore How It Works
                <ArrowRight className="w-4 h-4 text-indigo-400" />
              </Link>
            </div>
          </div>

          {/* VISUAL ON RIGHT */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800/80 backdrop-blur-md shadow-2xl shadow-indigo-950/40 space-y-4">
              <div className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 text-center mb-6">
                Core Experience Flow
              </div>

              {[
                { step: 'LEARN', color: 'bg-blue-500/10 border-blue-500/30 text-blue-400' },
                { step: 'UNDERSTAND', color: 'bg-indigo-500/10 border-indigo-500/30 text-indigo-400' },
                { step: 'PERSONALIZE', color: 'bg-purple-500/10 border-purple-500/30 text-purple-400' },
                { step: 'IMPROVE', color: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' },
              ].map((item, idx) => (
                <div key={item.step} className="flex flex-col items-center">
                  <div className={`w-full py-3 px-4 rounded-xl border font-bold text-center text-sm tracking-wider uppercase transition-all hover:scale-[1.02] ${item.color}`}>
                    {item.step}
                  </div>
                  {idx < 3 && (
                    <div className="my-1.5 text-slate-600">
                      <ArrowRight className="w-4 h-4 rotate-90" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3 — WHY WE BUILT SMART LEARNING AGENT */}
        {/* ========================================================================= */}
        <section className="p-8 sm:p-12 rounded-3xl bg-slate-900/60 border border-slate-800/80 space-y-10 backdrop-blur-sm">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs font-mono font-semibold uppercase text-indigo-400 tracking-wider">Motivation</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Why Smart Learning Agent?</h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Traditional learning approaches often provide the exact same learning experience to every student regardless of their unique cognitive traits. However, students differ significantly in key learning mechanisms.
            </p>
          </div>

          {/* INDIVIDUAL DIFFERENCES GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {differences.map((diff) => (
              <div key={diff.name} className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800/80 space-y-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                    <diff.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-white">{diff.name}</h3>
                </div>
                <p className="text-xs text-slate-400 leading-normal">{diff.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-purple-200">
              <strong className="font-semibold text-white">Individualized Foundation:</strong> Smart Learning Agent is designed around the core principle that understanding these cognitive differences allows us to build a truly individualized learning process.
            </p>
          </div>

          {/* BEFORE VS AFTER COMPARISON */}
          <div className="space-y-4 pt-4">
            <h3 className="text-lg font-bold text-white text-center">Comparing Learning Approaches</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* TRADITIONAL LEARNING */}
              <div className="p-6 rounded-2xl bg-slate-950/90 border border-rose-500/20 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-rose-400" />
                    <span className="font-bold text-slate-200 text-sm uppercase">Traditional Learning</span>
                  </div>
                  <span className="text-[10px] font-mono text-rose-400 uppercase">One-Size-Fits-All</span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  {[
                    'Same approach',
                    'Same learning strategy',
                    'Same revision pattern',
                    'Limited personalization'
                  ].map((step, idx, arr) => (
                    <div key={step} className="flex flex-col items-center">
                      <div className="w-full py-2.5 px-3 rounded-lg bg-slate-900 border border-slate-800 text-rose-300 text-center">
                        {step}
                      </div>
                      {idx < arr.length - 1 && <ArrowRight className="w-3.5 h-3.5 text-slate-600 rotate-90 my-1" />}
                    </div>
                  ))}
                </div>
              </div>

              {/* SMART LEARNING AGENT */}
              <div className="p-6 rounded-2xl bg-slate-950/90 border border-emerald-500/30 space-y-4 shadow-lg shadow-emerald-950/20">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <span className="font-bold text-white text-sm uppercase">Smart Learning Agent</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold">Adaptive Profile</span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  {[
                    'Individual profile',
                    'Personalized strategy',
                    'Adaptive revision',
                    'Continuous improvement'
                  ].map((step, idx, arr) => (
                    <div key={step} className="flex flex-col items-center">
                      <div className="w-full py-2.5 px-3 rounded-lg bg-emerald-950/30 border border-emerald-500/40 text-emerald-300 text-center font-bold">
                        {step}
                      </div>
                      {idx < arr.length - 1 && <ArrowRight className="w-3.5 h-3.5 text-emerald-500/60 rotate-90 my-1" />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4 — WHAT IS SMART LEARNING AGENT? */}
        {/* ========================================================================= */}
        <section className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-slate-800/80 space-y-10 backdrop-blur-sm">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400">System Architecture</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">An Intelligent Learning Companion</h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Smart Learning Agent combines cognitive assessment, computational models of memory and learning, and personalized learning techniques into a single cohesive learning platform.
            </p>
          </div>

          {/* THREE PILLARS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((p) => (
              <div key={p.title} className={`p-6 rounded-2xl border ${p.color} space-y-3 relative`}>
                <span className="text-xs font-mono text-slate-500 font-bold uppercase">{p.tag}</span>
                <div className="flex items-center gap-3">
                  <p.icon className="w-6 h-6" />
                  <h3 className="text-lg font-bold text-white">{p.title}</h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          {/* THREE PILLARS DIAGRAM */}
          <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-4">
            <div className="text-xs font-mono text-slate-400 text-center uppercase tracking-widest">
              Pillar Integration Flow
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <div className="px-6 py-3 rounded-xl bg-blue-600/20 border border-blue-500/40 text-blue-300 font-bold text-sm uppercase">
                ASSESS
              </div>
              <ArrowRight className="w-4 h-4 text-slate-600 rotate-90 md:rotate-0" />
              <div className="px-6 py-3 rounded-xl bg-purple-600/20 border border-purple-500/40 text-purple-300 font-bold text-sm uppercase">
                UNDERSTAND
              </div>
              <ArrowRight className="w-4 h-4 text-slate-600 rotate-90 md:rotate-0" />
              <div className="px-6 py-3 rounded-xl bg-pink-600/20 border border-pink-500/40 text-pink-300 font-bold text-sm uppercase">
                ADAPT
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5 — OUR CORE OBJECTIVES */}
        {/* ========================================================================= */}
        <section className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-slate-800/80 space-y-8 backdrop-blur-sm">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400">Goals & Mission</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">What We Aim to Achieve</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {objectives.map((obj) => (
              <div key={obj.num} className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-3 hover:border-slate-700 transition">
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-gradient-to-r ${obj.color} text-white`}>
                    {obj.num}
                  </span>
                  <obj.icon className="w-5 h-5 text-slate-400" />
                </div>
                <h3 className="text-lg font-bold text-white">{obj.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{obj.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 6 — OUR APPROACH */}
        {/* ========================================================================= */}
        <section className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-slate-800/80 space-y-8 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono font-semibold uppercase text-indigo-400 tracking-wider">Methodology</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">From Assessment to Adaptive Learning</h2>
            </div>
            <div className="px-3 py-1.5 rounded-full text-xs font-mono bg-indigo-500/10 border border-indigo-500/30 text-indigo-300">
              Closed Loop Architecture
            </div>
          </div>

          {/* VISUAL LOOP DIAGRAM */}
          <div className="p-6 rounded-2xl bg-slate-950/90 border border-slate-800/80 space-y-6">
            <div className="text-xs font-mono text-slate-400 text-center uppercase tracking-widest">
              Continuous Adaptive Learning Loop
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {loopSteps.map((s, idx) => (
                <div key={s.title} className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1 text-center relative">
                  <span className="text-[9px] font-mono text-indigo-400 uppercase">Step 0{idx + 1}</span>
                  <div className="text-xs font-bold text-white font-mono">{s.title}</div>
                  <div className="text-[10px] text-slate-400">{s.desc}</div>
                </div>
              ))}
            </div>

            <div className="flex justify-center items-center gap-2 text-indigo-400 text-xs font-mono font-semibold">
              <RefreshCw className="w-4 h-4 animate-spin-slow" />
              <span>Continuous Feedback Cycle Refinement</span>
            </div>
          </div>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            The system is designed as a continuous learning loop rather than a one-time assessment. As the learner interacts with the system, new performance information can be used to refine the learner profile and guide future learning activities.
          </p>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 7 — VISION / FINAL CTA */}
        {/* ========================================================================= */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 border border-indigo-500/30 text-center space-y-8 shadow-2xl shadow-purple-950/40">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400">Looking Forward</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Our Vision
            </h2>
            <p className="text-slate-200 italic text-base sm:text-xl leading-relaxed">
              &ldquo;To move beyond one-size-fits-all learning by creating an intelligent system that understands individual learners and continuously adapts their learning experience.&rdquo;
            </p>
          </div>

          <div>
            <Link
              to="/get-started"
              className="inline-flex items-center gap-3 px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 rounded-2xl shadow-xl shadow-purple-600/30 hover:shadow-purple-600/50 transform hover:-translate-y-1 transition duration-200"
            >
              <Sparkles className="w-5 h-5" />
              Start Your Assessment
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
};

export default About;
