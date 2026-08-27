import { useState } from 'react';
import { 
  Brain, 
  Cpu, 
  Zap, 
  BarChart3, 
  Sparkles, 
  ArrowRight, 
  Layers, 
  Target, 
  Clock, 
  ShieldAlert, 
  BookOpen, 
  TrendingUp, 
  RefreshCw, 
  CheckCircle2, 
  FileText,
  Activity,
  Compass
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Research = () => {
  const brainMapping = [
    {
      brain: 'Prefrontal Cortex',
      role: 'Working memory, attention control, decision-making',
      approach: 'N-back + SDT',
      color: 'border-blue-500/30 bg-blue-500/5 text-blue-400'
    },
    {
      brain: 'Hippocampus',
      role: 'Fast learning, episodic memory, recall/pattern completion',
      approach: 'Hopfield Network',
      color: 'border-purple-500/30 bg-purple-500/5 text-purple-400'
    },
    {
      brain: 'Neocortex',
      role: 'Long-term memory, abstraction, knowledge generalization',
      approach: 'CLS + Hebbian Learning',
      color: 'border-pink-500/30 bg-pink-500/5 text-pink-400'
    }
  ];

  const references = [
    {
      citation: 'Kirchner, W. K. (1958)',
      title: 'Age differences in short-term retention of rapidly changing information.',
      domain: 'N-back Task'
    },
    {
      citation: 'Green, D. M., & Swets, J. A. (1966)',
      title: 'Signal Detection Theory and Psychophysics.',
      domain: 'Signal Detection Theory (d′)'
    },
    {
      citation: 'Hopfield, J. J. (1982)',
      title: 'Neural networks and physical systems with emergent collective computational abilities.',
      domain: 'Hopfield Network'
    },
    {
      citation: 'Marr, D. (1971)',
      title: 'Simple memory: a theory for archicortex.',
      domain: 'Hippocampal Pattern Completion'
    },
    {
      citation: 'McClelland, J. L., McNaughton, B. L., & O\'Reilly, R. C. (1995)',
      title: 'Why there are complementary learning systems in the hippocampus and neocortex.',
      domain: 'Complementary Learning Systems'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8 selection:bg-purple-500 selection:text-white">
      <div className="max-w-6xl mx-auto space-y-24">
        
        {/* ========================================================================= */}
        {/* SECTION 1 — RESEARCH HERO SECTION */}
        {/* ========================================================================= */}
        <section className="text-center space-y-8 pt-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs sm:text-sm font-semibold uppercase tracking-wider shadow-inner">
            <BookOpen className="w-4 h-4 text-indigo-400" />
            Scientific Foundations
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-indigo-300">
            The Science Behind Smart Learning Agent
          </h1>

          <p className="max-w-3xl mx-auto text-slate-300 text-base sm:text-lg leading-relaxed">
            Our system combines established computational models of memory, attention, and learning to build a data-driven understanding of individual learning performance.
          </p>

          {/* VISUAL EQUATION / FLOW */}
          <div className="max-w-4xl mx-auto p-6 rounded-2xl bg-slate-900/80 border border-slate-800/80 backdrop-blur-md shadow-xl">
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-xs sm:text-sm font-mono font-bold">
              <div className="px-4 py-2.5 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400">
                COGNITIVE SCIENCE
              </div>
              <span className="text-indigo-400 text-lg">+</span>
              <div className="px-4 py-2.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
                COMPUTATIONAL MODELS
              </div>
              <span className="text-indigo-400 text-lg">+</span>
              <div className="px-4 py-2.5 rounded-xl bg-pink-500/10 border border-pink-500/30 text-pink-400">
                LEARNING SCIENCE
              </div>
              <ArrowRight className="w-4 h-4 text-slate-600 rotate-90 md:rotate-0 my-1" />
              <div className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-extrabold shadow-md">
                SMART LEARNING AGENT
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3 — RESEARCH FOUNDATION */}
        {/* ========================================================================= */}
        <section className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-slate-800/80 space-y-8 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono font-semibold uppercase text-indigo-400 tracking-wider">Neuro-Computational Mapping</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">From Brain Functions to Computational Models</h2>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 text-xs font-mono">
              <Brain className="w-4 h-4 text-indigo-400" />
              Conceptual Abstraction
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {brainMapping.map((item) => (
              <div key={item.brain} className={`p-6 rounded-2xl border ${item.color} space-y-3`}>
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">Brain System</div>
                <h3 className="text-lg font-bold text-white">{item.brain}</h3>
                <div className="text-xs text-slate-300 leading-relaxed">
                  <strong className="text-slate-400">Role:</strong> {item.role}
                </div>
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="font-mono text-slate-400">Approach:</span>
                  <span className="font-mono font-bold text-white bg-slate-900 px-2.5 py-1 rounded border border-slate-800">{item.approach}</span>
                </div>
              </div>
            ))}
          </div>

          {/* IMPORTANT WORDING CALLOUT ALERT */}
          <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-4">
            <ShieldAlert className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
            <div className="space-y-1 text-xs sm:text-sm text-amber-200">
              <strong className="font-bold text-white">Conceptual Scope Clarification:</strong>
              <p className="leading-relaxed">
                These models are computational frameworks inspired by cognitive functions associated with these neural systems, rather than claiming to directly record physical brain activity.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4 — ALGORITHM 01: N-BACK + SDT */}
        {/* ========================================================================= */}
        <section className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-slate-800/80 space-y-8 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono font-bold uppercase text-blue-400 tracking-wider">Algorithm 01</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">01 — Working Memory & Attention</h2>
              <p className="text-slate-400 text-sm mt-1">N-back Task + Signal Detection Theory (SDT)</p>
            </div>
            <div className="flex gap-2 text-xs font-mono text-slate-400">
              <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700">Kirchner (1958)</span>
              <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700">Green & Swets (1966)</span>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">N-back Continuous Stimulus Task</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              The N-back task evaluates the ability to maintain and continuously update information in working memory. The user compares the current stimulus with a stimulus presented N positions earlier.
            </p>

            {/* 2-BACK EXAMPLE CARD */}
            <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-3">
              <div className="text-xs font-mono text-blue-400 font-bold uppercase">2-Back Sequence Match Example</div>
              <div className="flex items-center justify-center gap-3 py-3 font-mono font-bold text-lg">
                <span className="px-3 py-2 bg-slate-900 rounded-lg text-slate-400">A</span>
                <span className="px-3 py-2 bg-slate-900 rounded-lg text-slate-400">B</span>
                <span className="px-3 py-2 bg-blue-600/20 border border-blue-500 text-blue-300 rounded-lg">A</span>
                <span className="px-3 py-2 bg-slate-900 rounded-lg text-slate-400">C</span>
                <span className="px-3 py-2 bg-blue-600/20 border border-blue-500 text-blue-300 rounded-lg">A</span>
              </div>
              <p className="text-xs text-center text-slate-400 italic">
                Compare current item with item 2 positions back.
              </p>
            </div>
          </div>

          <div className="space-y-4 pt-2">
            <h3 className="text-lg font-bold text-white">Signal Detection Theory (SDT) Framework</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Signal Detection Theory provides a mathematical framework for distinguishing a user&apos;s ability to discriminate targets from non-targets independently from their response tendency (bias).
            </p>

            {/* SDT FLOW DIAGRAM */}
            <div className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800/80">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center text-xs font-mono">
                <div className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200">
                  User Responses
                </div>
                <ArrowRight className="w-4 h-4 text-slate-600 rotate-90 md:rotate-0" />
                <div className="flex gap-2">
                  <span className="px-3 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">Hits (H)</span>
                  <span className="px-3 py-2 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400">False Alarms (F)</span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-600 rotate-90 md:rotate-0" />
                <div className="px-4 py-2.5 rounded-xl bg-indigo-600/20 border border-indigo-500/40 text-indigo-300 font-bold text-sm">
                  d′ Index
                </div>
                <ArrowRight className="w-4 h-4 text-slate-600 rotate-90 md:rotate-0" />
                <div className="px-4 py-2.5 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-300 font-bold">
                  Discrimination Ability
                </div>
              </div>
            </div>
          </div>

          {/* VARIABLES METRIC CARDS */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest font-bold">Measured Variables</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {['Accuracy', 'Reaction Time', 'Hit Rate', 'False Alarm Rate', 'd′ (d-prime)'].map((varName) => (
                <div key={varName} className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-center font-mono text-xs font-bold text-blue-400">
                  {varName}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5 — ALGORITHM 02: HOPFIELD NETWORK */}
        {/* ========================================================================= */}
        <section className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-slate-800/80 space-y-8 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono font-bold uppercase text-purple-400 tracking-wider">Algorithm 02</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">02 — Associative Memory & Pattern Completion</h2>
              <p className="text-slate-400 text-sm mt-1">Hopfield Autoassociative Neural Model</p>
            </div>
            <div className="flex gap-2 text-xs font-mono text-slate-400">
              <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700">Hopfield (1982)</span>
              <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700">Marr (1971)</span>
            </div>
          </div>

          <p className="text-slate-300 text-sm leading-relaxed">
            A Hopfield Network is an autoassociative memory model that can retrieve a stored pattern from a partial or noisy input cue by minimizing system energy functions.
          </p>

          {/* VISUAL PIPELINE */}
          <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800/80">
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-mono">
              <span className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">Stored Pattern</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-600" />
              <span className="px-3 py-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400">Partial / Noisy Input</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-600" />
              <span className="px-4 py-2.5 rounded-xl bg-purple-600/20 border border-purple-500/40 text-purple-300 font-bold">Hopfield Network</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-600" />
              <span className="px-3 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">Recovered Pattern</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-600" />
              <span className="px-3 py-2 rounded-lg bg-blue-600/20 border border-blue-500/30 text-blue-300">Compare & Recall Score</span>
            </div>
          </div>

          {/* VARIABLES METRIC CARDS */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest font-bold">Measured Variables</h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {['Recall Accuracy', 'Pattern Completion', 'Noise Tolerance', 'Convergence'].map((varName) => (
                <div key={varName} className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-center font-mono text-xs font-bold text-purple-400">
                  {varName}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 6 — ALGORITHM 03: CLS + HEBBIAN LEARNING */}
        {/* ========================================================================= */}
        <section className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-slate-800/80 space-y-8 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono font-bold uppercase text-pink-400 tracking-wider">Algorithm 03</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">03 — Long-Term Learning & Retention</h2>
              <p className="text-slate-400 text-sm mt-1">Complementary Learning Systems + Hebbian Learning</p>
            </div>
            <div className="flex gap-2 text-xs font-mono text-slate-400">
              <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700">McClelland et al. (1995)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-2">
              <h3 className="text-sm font-bold text-white">Complementary Learning Systems (CLS)</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                The CLS framework proposes complementary learning processes that support rapid episodic learning alongside slower, more stable structural consolidation and generalization.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-2">
              <h3 className="text-sm font-bold text-white">Hebbian Synaptic Principle</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Hebbian learning provides a computational principle in which repeated co-activation strengthens associations between representations (&quot;cells that fire together wire together&quot;).
              </p>
            </div>
          </div>

          {/* VISUAL PIPELINE */}
          <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800/80">
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono">
              {[
                'Repeated Learning',
                'Repeated Activation',
                'Strengthened Associations',
                'More Stable Representations',
                'Long-Term Learning'
              ].map((step, idx, arr) => (
                <div key={step} className="flex items-center gap-2">
                  <span className="px-3 py-2 rounded-lg bg-pink-950/40 border border-pink-500/30 text-pink-300 font-bold">
                    {step}
                  </span>
                  {idx < arr.length - 1 && <ArrowRight className="w-3.5 h-3.5 text-slate-600" />}
                </div>
              ))}
            </div>
          </div>

          {/* VARIABLES METRIC CARDS */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest font-bold">Measured Variables</h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {['Retention Strength', 'Learning Rate', 'Stability', 'Generalization Ability'].map((varName) => (
                <div key={varName} className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-center font-mono text-xs font-bold text-pink-400">
                  {varName}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 7 — INTEGRATED COMPUTATIONAL FRAMEWORK */}
        {/* ========================================================================= */}
        <section className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-slate-800/80 space-y-8 backdrop-blur-sm">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400">System Integration</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">An Integrated Computational Framework</h2>
            <p className="text-slate-300 text-sm max-w-2xl mx-auto">
              Rather than independent modules, our three computational algorithms work synchronously to build a unified learner profile.
            </p>
          </div>

          {/* INTEGRATED FRAMEWORK DIAGRAM */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-950/90 border border-slate-800/80 space-y-6">
            <div className="flex justify-center">
              <div className="px-6 py-2.5 rounded-xl bg-indigo-600/20 border border-indigo-500/40 text-indigo-300 font-bold text-sm font-mono">
                USER & COGNITIVE TESTS
              </div>
            </div>

            <div className="flex justify-center">
              <ArrowRight className="w-4 h-4 text-slate-600 rotate-90" />
            </div>

            {/* THREE ALGORITHMS PARALLEL BRANCH */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-slate-900 border border-blue-500/30 text-center space-y-2">
                <div className="text-xs font-mono font-bold text-blue-400">N-BACK + SDT</div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-600 rotate-90 mx-auto" />
                <div className="text-xs text-slate-300 font-medium">Working Memory & Attention</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-purple-500/30 text-center space-y-2">
                <div className="text-xs font-mono font-bold text-purple-400">HOPFIELD NETWORK</div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-600 rotate-90 mx-auto" />
                <div className="text-xs text-slate-300 font-medium">Associative Recall</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-pink-500/30 text-center space-y-2">
                <div className="text-xs font-mono font-bold text-pink-400">CLS + HEBBIAN</div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-600 rotate-90 mx-auto" />
                <div className="text-xs text-slate-300 font-medium">Long-Term Learning</div>
              </div>
            </div>

            <div className="flex justify-center">
              <ArrowRight className="w-4 h-4 text-slate-600 rotate-90" />
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="px-8 py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-extrabold text-sm uppercase tracking-wider shadow-lg">
                LEARNING PROFILE SYNTHESIS
              </div>
              <ArrowRight className="w-4 h-4 text-slate-600 rotate-90" />
              <div className="px-6 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 font-mono text-xs">
                PERSONALIZATION LAYER → LEARNING STRATEGY
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 8 — VARIABLES & MEASUREMENTS TABLE */}
        {/* ========================================================================= */}
        <section className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-slate-800/80 space-y-6 backdrop-blur-sm">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400">Data Metrics</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">What Does the System Measure?</h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-800">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-950 text-xs font-mono text-slate-400 uppercase border-b border-slate-800">
                  <th className="py-4 px-6 font-bold">Cognitive Component</th>
                  <th className="py-4 px-6 font-bold">Collected Performance Measurements</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-xs sm:text-sm text-slate-300 font-mono">
                <tr className="hover:bg-slate-800/30 transition">
                  <td className="py-4 px-6 font-bold text-blue-400 font-sans">Working Memory & Attention</td>
                  <td className="py-4 px-6 text-slate-300">Accuracy, Reaction Time, Hit Rate, False Alarm Rate, d′</td>
                </tr>
                <tr className="hover:bg-slate-800/30 transition">
                  <td className="py-4 px-6 font-bold text-purple-400 font-sans">Associative Memory</td>
                  <td className="py-4 px-6 text-slate-300">Recall Accuracy, Pattern Completion, Noise Tolerance, Convergence</td>
                </tr>
                <tr className="hover:bg-slate-800/30 transition">
                  <td className="py-4 px-6 font-bold text-pink-400 font-sans">Long-Term Learning</td>
                  <td className="py-4 px-6 text-slate-300">Retention Strength, Learning Rate, Stability, Generalization</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 9 — FROM MEASUREMENTS TO LEARNER PROFILE */}
        {/* ========================================================================= */}
        <section className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-slate-800/80 space-y-8 backdrop-blur-sm">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400">Data Pipeline</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">From Raw Performance to a Learning Profile</h2>
          </div>

          <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800/80">
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono">
              {[
                'Raw Performance Data',
                'Performance Metrics',
                'Cognitive Dimensions',
                'Learner Profile',
                'Personalized Learning Strategy'
              ].map((step, idx, arr) => (
                <div key={step} className="flex items-center gap-2">
                  <span className="px-3 py-2 rounded-lg bg-indigo-950/40 border border-indigo-500/30 text-indigo-300 font-semibold">
                    {step}
                  </span>
                  {idx < arr.length - 1 && <ArrowRight className="w-3.5 h-3.5 text-slate-600" />}
                </div>
              ))}
            </div>
          </div>

          {/* ILLUSTRATIVE LEARNER PROFILE PREVIEW CARD */}
          <div className="max-w-md mx-auto p-6 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="font-bold text-white text-sm">Illustrative Learner Profile</span>
              <span className="text-[10px] font-mono text-indigo-400 uppercase">Preview Metrics</span>
            </div>

            <div className="space-y-3 text-xs">
              {[
                { label: 'Working Memory', val: 78, color: 'bg-blue-500' },
                { label: 'Attention', val: 72, color: 'bg-indigo-500' },
                { label: 'Recall', val: 86, color: 'bg-purple-500' },
                { label: 'Retention', val: 64, color: 'bg-pink-500' }
              ].map((m) => (
                <div key={m.label} className="space-y-1">
                  <div className="flex justify-between text-slate-300">
                    <span>{m.label}</span>
                    <span className="font-mono font-bold text-white">{m.val}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden">
                    <div className={`h-full ${m.color} rounded-full`} style={{ width: `${m.val}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-slate-500 text-center italic">
              Note: Metrics are illustrative previews.
            </p>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 10 — RESEARCH -> APPLICATION */}
        {/* ========================================================================= */}
        <section className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-slate-800/80 space-y-8 backdrop-blur-sm">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400">Implementation</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Turning Research Into Learning</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Research', desc: 'Established computational models of memory and attention.', tag: '01' },
              { title: 'Assessment', desc: 'Measure relevant performance variables via structured tasks.', tag: '02' },
              { title: 'Personalization', desc: 'Use the learner profile to guide tailored study strategies.', tag: '03' },
              { title: 'Adaptation', desc: 'Use subsequent performance data to refine the learning experience.', tag: '04' }
            ].map((card) => (
              <div key={card.title} className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-2">
                <span className="text-[10px] font-mono font-bold text-indigo-400 uppercase">{card.tag}</span>
                <h3 className="text-base font-bold text-white">{card.title}</h3>
                <p className="text-xs text-slate-400 leading-normal">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 11 — RESEARCH REFERENCES */}
        {/* ========================================================================= */}
        <section className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-slate-800/80 space-y-6 backdrop-blur-sm">
          <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
            <FileText className="w-5 h-5 text-indigo-400" />
            <h2 className="text-2xl font-extrabold text-white">Key Academic References</h2>
          </div>

          <div className="space-y-4 text-xs sm:text-sm">
            {references.map((ref) => (
              <div key={ref.citation} className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1">
                <div className="font-mono font-bold text-indigo-300">{ref.citation}</div>
                <div className="text-slate-200 italic">{ref.title}</div>
                <div className="text-[11px] text-slate-400 font-mono">Domain: {ref.domain}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 12 — FINAL CTA */}
        {/* ========================================================================= */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 border border-indigo-500/30 text-center space-y-8 shadow-2xl shadow-purple-950/40">
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ready to Understand Your Learning Profile?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Put the research into practice and discover how Smart Learning Agent can personalize your learning experience.
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

export default Research;
