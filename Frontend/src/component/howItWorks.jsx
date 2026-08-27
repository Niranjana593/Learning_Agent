import { useState } from 'react';
import { 
  Brain, 
  Cpu, 
  Zap, 
  BarChart3, 
  BookOpen, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  Activity, 
  Search,
  Target,
  Clock,
  ShieldCheck,
  TrendingUp,
  RotateCcw
} from 'lucide-react';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [hopfieldNoise, setHopfieldNoise] = useState(true);

  // 6-step overall workflow steps
  const steps = [
    { id: 1, label: 'ASSESS', title: 'Step 1 — Assess', color: 'from-blue-500 to-indigo-500', shadow: 'shadow-blue-500/20' },
    { id: 2, label: 'ANALYZE', title: 'Step 2 — Analyze', color: 'from-indigo-500 to-purple-500', shadow: 'shadow-indigo-500/20' },
    { id: 3, label: 'PERSONALIZE', title: 'Step 3 — Personalize', color: 'from-purple-500 to-pink-500', shadow: 'shadow-purple-500/20' },
    { id: 4, label: 'LEARN', title: 'Step 4 — Learn', color: 'from-pink-500 to-rose-500', shadow: 'shadow-pink-500/20' },
    { id: 5, label: 'REVISE', title: 'Step 5 — Revise', color: 'from-rose-500 to-amber-500', shadow: 'shadow-rose-500/20' },
    { id: 6, label: 'IMPROVE', title: 'Step 6 — Improve', color: 'from-emerald-500 to-teal-500', shadow: 'shadow-emerald-500/20' },
  ];

  // N-back demo sequence
  const nBackSequence = [
    { item: 'A', index: 0, isMatch: false },
    { item: 'B', index: 1, isMatch: false },
    { item: 'A', index: 2, isMatch: true, text: 'Matches position 0 (A)' },
    { item: 'C', index: 3, isMatch: false },
    { item: 'A', index: 4, isMatch: true, text: 'Matches position 2 (A)' },
  ];

  // Strategy mapping data
  const strategies = [
    {
      observation: 'Lower working-memory performance',
      strategy: 'Chunking',
      desc: 'Breaks complex topics into bite-sized micro-modules to reduce cognitive load during initial encoding.',
      icon: Layers,
      color: 'border-blue-500/30 bg-blue-500/5 text-blue-400'
    },
    {
      observation: 'Lower recall performance',
      strategy: 'Active Recall',
      desc: 'Engages retrieval practice using partial cues and concept completion exercises.',
      icon: Search,
      color: 'border-purple-500/30 bg-purple-500/5 text-purple-400'
    },
    {
      observation: 'Lower retention strength',
      strategy: 'Spaced Revision',
      desc: 'Schedules review sessions at calculated intervals based on memory decay rates.',
      icon: Clock,
      color: 'border-pink-500/30 bg-pink-500/5 text-pink-400'
    },
    {
      observation: 'Difficulty maintaining attention',
      strategy: 'Focused Study Sessions',
      desc: 'Implements timed focus blocks with optimized stimulus variability to sustain attention.',
      icon: Target,
      color: 'border-emerald-500/30 bg-emerald-500/5 text-emerald-400'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8 selection:bg-purple-500 selection:text-white">
      <div className="max-w-6xl mx-auto space-y-20">
        
        {/* ========================================================================= */}
        {/* PAGE HEADER */}
        {/* ========================================================================= */}
        <section className="text-center space-y-8 pt-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs sm:text-sm font-semibold tracking-wide uppercase shadow-inner">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            Neuro-Computational Foundations
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-indigo-300">
            How Smart Learning Agent Works
          </h1>

          <div className="max-w-3xl mx-auto p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800/80 backdrop-blur-sm shadow-xl shadow-indigo-950/20">
            <blockquote className="text-slate-300 italic text-base sm:text-lg leading-relaxed">
              &ldquo;Smart Learning Agent combines cognitive assessment, computational memory models, and personalized learning techniques to understand how a student learns and continuously adapt the learning process.&rdquo;
            </blockquote>
          </div>

          {/* OVERALL WORKFLOW STEPPER */}
          <div className="pt-8">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">
              Overall Adaptive Learning Workflow
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {steps.map((step, idx) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`relative flex flex-col items-center justify-center p-4 rounded-xl border transition-all duration-300 text-left ${
                    activeStep === step.id
                      ? `bg-slate-800/90 border-indigo-500/80 shadow-lg ${step.shadow} scale-[1.03]`
                      : 'bg-slate-900/40 border-slate-800/60 hover:bg-slate-800/50 hover:border-slate-700'
                  }`}
                >
                  <span className="text-[10px] font-mono text-slate-400 uppercase mb-1">0{idx + 1}</span>
                  <span className={`text-xs font-bold bg-clip-text text-transparent bg-gradient-to-r ${step.color}`}>
                    {step.label}
                  </span>
                  {idx < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-slate-600">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 01 — STEP 1: ASSESS */}
        {/* ========================================================================= */}
        <section id="step-assess" className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-slate-800/80 space-y-8 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div>
              <div className="text-xs font-mono font-semibold uppercase text-indigo-400 tracking-wider">Step 01</div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Understand Your Cognitive Abilities</h2>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-indigo-950/40 border border-indigo-800/40 text-indigo-300 text-sm font-medium">
              <Brain className="w-5 h-5 text-indigo-400" />
              Cognitive Task Battery
            </div>
          </div>

          <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
            The process begins with a set of cognitive tasks designed to evaluate important aspects of learning and memory. Rather than relying solely on traditional test scores, our battery evaluates underlying neuro-cognitive mechanisms.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Working Memory', desc: 'Active holding & manipulation of information in real time.', icon: Cpu, color: 'text-blue-400' },
              { title: 'Attention', desc: 'Focus maintenance and signal discrimination from noise.', icon: Target, color: 'text-indigo-400' },
              { title: 'Recall & Pattern Completion', desc: 'Retrieval of stored memory representations from partial cues.', icon: Search, color: 'text-purple-400' },
              { title: 'Learning & Retention', desc: 'Long-term consolidation stability and generalization.', icon: TrendingUp, color: 'text-pink-400' },
            ].map((focus) => (
              <div key={focus.title} className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-2">
                <focus.icon className={`w-6 h-6 ${focus.color}`} />
                <h3 className="text-sm font-bold text-white">{focus.title}</h3>
                <p className="text-xs text-slate-400 leading-normal">{focus.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-indigo-200">
              <strong className="font-semibold text-white">Objective Measurement:</strong> The system records measurable performance variables (e.g., reaction times, false alarm rates, noise tolerance thresholds) rather than relying only on a single static test score.
            </p>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 02 — N-BACK + SIGNAL DETECTION THEORY */}
        {/* ========================================================================= */}
        <section className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-slate-800/80 space-y-8 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono font-semibold uppercase text-blue-400 tracking-wider">Cognitive Component 01</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Working Memory & Attention</h2>
              <p className="text-slate-400 text-sm mt-1">N-back Task + Signal Detection Theory (SDT)</p>
            </div>
            <div className="flex gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-slate-800 border border-slate-700 text-slate-300">Kirchner (1958)</span>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-slate-800 border border-slate-700 text-slate-300">Green & Swets (1966)</span>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-slate-300 leading-relaxed">
              The first computational component evaluates performance related to <strong>working memory and attention</strong>. The N-back task presents a continuous sequence of stimuli and requires the user to determine whether the current stimulus matches one presented <strong>N positions earlier</strong>. As N increases, working-memory demand increases.
            </p>

            {/* 2-BACK VISUAL EXAMPLE CARD */}
            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400">Example: 2-Back Sequence Task</span>
                <span className="text-xs text-slate-500 font-mono">N = 2</span>
              </div>
              
              <div className="flex flex-wrap items-center justify-center gap-3 py-4">
                {nBackSequence.map((seq) => (
                  <div
                    key={seq.index}
                    className={`relative flex flex-col items-center justify-center w-14 h-16 rounded-xl border font-bold text-xl transition-all ${
                      seq.isMatch
                        ? 'bg-blue-600/20 border-blue-500 text-blue-300 ring-2 ring-blue-500/40'
                        : 'bg-slate-900 border-slate-800 text-slate-200'
                    }`}
                  >
                    <span>{seq.item}</span>
                    <span className="text-[9px] font-mono text-slate-500 font-normal">idx: {seq.index}</span>
                    {seq.isMatch && (
                      <div className="absolute -top-3 bg-blue-500 text-white text-[9px] px-2 py-0.5 rounded-full uppercase font-mono font-bold">
                        MATCH
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <p className="text-xs text-center text-slate-400 italic">
                Notice at index 2 (A) and index 4 (A): The current item matches the item presented exactly 2 positions back.
              </p>
            </div>
          </div>

          {/* WHY SIGNAL DETECTION THEORY */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Activity className="w-5 h-5 text-indigo-400" />
              Why Signal Detection Theory (SDT)?
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Accuracy alone does not tell the complete story. A student might respond &quot;match&quot; frequently and obtain many correct matches, but also produce many false alarms. Signal Detection Theory separates pure discrimination capacity from response tendency (bias) using <strong>d′ (d-prime)</strong>.
            </p>

            {/* SDT CONCEPTUAL FLOWCHART */}
            <div className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800/80">
              <div className="text-xs font-mono text-slate-400 text-center uppercase tracking-widest mb-4">
                Signal Detection Analysis Flow
              </div>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
                <div className="px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs font-semibold w-full md:w-auto">
                  N-back Responses
                </div>
                <ArrowRight className="w-4 h-4 text-slate-600 rotate-90 md:rotate-0" />
                <div className="flex gap-2 w-full md:w-auto justify-center">
                  <div className="px-3 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                    Hit Rate (H)
                  </div>
                  <div className="px-3 py-2 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono">
                    False Alarm (F)
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-600 rotate-90 md:rotate-0" />
                <div className="px-5 py-3 rounded-xl bg-indigo-600/20 border border-indigo-500/40 text-indigo-300 text-sm font-mono font-bold w-full md:w-auto">
                  d′ = Z(H) - Z(F)
                </div>
                <ArrowRight className="w-4 h-4 text-slate-600 rotate-90 md:rotate-0" />
                <div className="px-4 py-3 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-300 text-xs font-semibold w-full md:w-auto">
                  Working Memory & Attention Profile
                </div>
              </div>
            </div>
          </div>

          {/* 3-PART VISUAL CARD FOR N-BACK + SDT */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-800">
            <div className="p-5 rounded-2xl bg-slate-950/80 border border-blue-500/30 space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-400">1. What It Does</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Evaluates working memory capacity and sustained attention load via continuous sequence matching tasks with variable N depth.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-950/80 border border-indigo-500/30 space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-indigo-400">2. What We Measure</div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {['Accuracy', 'Reaction Time (RT)', 'Hit Rate (H)', 'False Alarm Rate (F)', 'd′ (d-prime)'].map((m) => (
                  <span key={m} className="px-2 py-1 rounded bg-indigo-950/60 border border-indigo-800/40 text-[11px] font-mono text-indigo-300">
                    {m}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-slate-950/80 border border-purple-500/30 space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-purple-400">3. Application Contribution</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Establishes the prefrontal-cortex working memory index to determine if content should be presented in smaller chunks or higher granularity.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 03 — HOPFIELD NETWORK */}
        {/* ========================================================================= */}
        <section className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-slate-800/80 space-y-8 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono font-semibold uppercase text-purple-400 tracking-wider">Cognitive Component 02</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Associative Memory & Recall</h2>
              <p className="text-slate-400 text-sm mt-1">Hopfield Network (Autoassociative Neural Network)</p>
            </div>
            <div className="flex gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-slate-800 border border-slate-700 text-slate-300">Hopfield (1982)</span>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-slate-800 border border-slate-700 text-slate-300">Marr (1971)</span>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-slate-300 leading-relaxed">
              The second computational component models <strong>associative memory and pattern completion</strong> using a Hopfield Network. A Hopfield Network is a recurrent neural network that acts as an content-addressable memory system: given a partial or noisy version of a learned pattern, it iteratively reconstructs the complete original pattern.
            </p>

            {/* INTERACTIVE HOPFIELD RECONSTRUCTION DEMO */}
            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
                  Interactive Hopfield Pattern Completion Demo
                </span>
                <button
                  onClick={() => setHopfieldNoise(!hopfieldNoise)}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/40 text-purple-300 text-xs font-medium transition"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  {hopfieldNoise ? 'Recover Original Pattern' : 'Inject Noise / Missing Cues'}
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-center space-y-2">
                  <div className="text-[11px] font-mono text-slate-400">1. Stored Pattern</div>
                  <div className="font-mono font-bold text-lg text-emerald-400 tracking-widest">
                    1 0 1 1 0 1 0 1
                  </div>
                  <div className="text-[10px] text-slate-500">Target Memory Representation</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-center space-y-2">
                  <div className="text-[11px] font-mono text-slate-400">2. Input Pattern Cue</div>
                  <div className="font-mono font-bold text-lg text-amber-400 tracking-widest">
                    {hopfieldNoise ? '1 ? 1 1 ? 1 0 ?' : '1 0 1 1 0 1 0 1'}
                  </div>
                  <div className="text-[10px] text-slate-500">{hopfieldNoise ? 'Partial / Noisy Prompt' : 'Fully Recovered'}</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-purple-500/30 text-center space-y-2">
                  <div className="text-[11px] font-mono text-slate-400">3. Hopfield Network Output</div>
                  <div className="font-mono font-bold text-lg text-purple-300 tracking-widest">
                    1 0 1 1 0 1 0 1
                  </div>
                  <div className="text-[10px] text-purple-400 font-medium">100% Convergence Reached</div>
                </div>
              </div>
            </div>
          </div>

          {/* HOPFIELD CONCEPTUAL FLOW */}
          <div className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800/80">
            <div className="text-xs font-mono text-slate-400 text-center uppercase tracking-widest mb-4">
              Associative Recall Pipeline
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-mono">
              <span className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">Stored Pattern</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-600" />
              <span className="px-3 py-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400">Partial / Noisy Cue</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-600" />
              <span className="px-3 py-2 rounded-lg bg-purple-600/20 border border-purple-500/40 text-purple-300">Hopfield Energy Dynamics</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-600" />
              <span className="px-3 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">Pattern Completed</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-600" />
              <span className="px-3 py-2 rounded-lg bg-blue-600/20 border border-blue-500/30 text-blue-300">Recall Score</span>
            </div>
          </div>

          {/* 3-PART VISUAL CARD FOR HOPFIELD NETWORK */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-800">
            <div className="p-5 rounded-2xl bg-slate-950/80 border border-purple-500/30 space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-purple-400">1. What It Does</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Models associative memory retrieval, measuring how effectively a student reconstructs complete concepts when presented with incomplete prompts.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-950/80 border border-pink-500/30 space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-pink-400">2. What We Measure</div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {['Recall Accuracy', 'Pattern Completion', 'Noise Tolerance', 'Convergence Speed'].map((m) => (
                  <span key={m} className="px-2 py-1 rounded bg-pink-950/60 border border-pink-800/40 text-[11px] font-mono text-pink-300">
                    {m}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-slate-950/80 border border-indigo-500/30 space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-indigo-400">3. Application Contribution</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Identifies recall deficiencies and triggers Active Recall exercise generators with adaptive clue strength.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 04 — CLS + HEBBIAN LEARNING */}
        {/* ========================================================================= */}
        <section className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-slate-800/80 space-y-8 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono font-semibold uppercase text-pink-400 tracking-wider">Cognitive Component 03</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Long-Term Learning & Retention</h2>
              <p className="text-slate-400 text-sm mt-1">Complementary Learning Systems (CLS) + Hebbian Learning</p>
            </div>
            <div className="flex gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-slate-800 border border-slate-700 text-slate-300">McClelland et al. (1995)</span>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-slate-300 leading-relaxed">
              The third component models <strong>long-term retention, stability, and generalization</strong>. The Complementary Learning Systems (CLS) framework models two complementary computational systems: a rapid learning system (hippocampus) and a slower, structure-extracting system (neocortex).
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-indigo-500/30 space-y-2">
                <div className="text-xs font-mono font-bold uppercase text-indigo-400">Rapid Learning System</div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Supports rapid acquisition of episodic information without interfering with previously structured knowledge.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-pink-500/30 space-y-2">
                <div className="text-xs font-mono font-bold uppercase text-pink-400">Slow Generalization System</div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Extracts general structure across repeated exposures, building stable long-term representations.
                </p>
              </div>
            </div>

            {/* HEBBIAN LEARNING CONCEPT */}
            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-3">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-400" />
                Hebbian Synaptic Strengthening Principle
              </h3>
              <blockquote className="text-xs text-slate-400 italic">
                &ldquo;Neurons that fire together, wire together.&rdquo; — Repeated co-activation strengthens representations over time.
              </blockquote>
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2 text-[11px] font-mono">
                {['Repeated Learning', 'Repeated Activation', 'Stronger Associations', 'Stable Representation', 'Better Retention'].map((step, index) => (
                  <div key={step} className="flex items-center gap-2">
                    <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-pink-300 font-semibold">
                      {step}
                    </span>
                    {index < 4 && <ArrowRight className="w-3.5 h-3.5 text-slate-600" />}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 3-PART VISUAL CARD FOR CLS + HEBBIAN */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-800">
            <div className="p-5 rounded-2xl bg-slate-950/80 border border-pink-500/30 space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-pink-400">1. What It Does</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Simulates neocortical long-term consolidation and synaptic weight adjustment across repeated study-revision cycles.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-950/80 border border-rose-500/30 space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-rose-400">2. What We Measure</div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {['Retention Strength', 'Learning Rate', 'Representation Stability', 'Generalization Ability'].map((m) => (
                  <span key={m} className="px-2 py-1 rounded bg-rose-950/60 border border-rose-800/40 text-[11px] font-mono text-rose-300">
                    {m}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-slate-950/80 border border-amber-500/30 space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-400">3. Application Contribution</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Calculates optimal Spaced Revision timings to ensure information transitions permanently into long-term memory.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 05 — STEP 2: ANALYZE */}
        {/* ========================================================================= */}
        <section className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-slate-800/80 space-y-8 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="text-xs font-mono font-semibold uppercase text-indigo-400 tracking-wider">Step 02</div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Build Your Cognitive Profile</h2>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-950/40 border border-purple-800/40 text-purple-300 text-sm font-medium">
              <BarChart3 className="w-5 h-5 text-purple-400" />
              Multi-Dimensional Profile Synthesis
            </div>
          </div>

          <p className="text-slate-300 leading-relaxed">
            Once assessments are complete, the system aggregates parameters from all three algorithms into a personalized 6-dimensional cognitive profile:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              { dim: 'Working Memory', score: 'd′ & N-back depth' },
              { dim: 'Attention', score: 'Signal discrimination ratio' },
              { dim: 'Recall', score: 'Hopfield pattern retrieval accuracy' },
              { dim: 'Learning Stability', score: 'Hebbian weight accumulation' },
              { dim: 'Retention', score: 'CLS memory decay curve' },
              { dim: 'Generalization', score: 'Cross-topic transference rate' }
            ].map((d) => (
              <div key={d.dim} className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-1">
                <div className="text-sm font-bold text-white">{d.dim}</div>
                <div className="text-[11px] font-mono text-indigo-400">{d.score}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 06 — STEP 3: PERSONALIZE */}
        {/* ========================================================================= */}
        <section className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-slate-800/80 space-y-8 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="text-xs font-mono font-semibold uppercase text-purple-400 tracking-wider">Step 03</div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Turn Assessment Into a Learning Strategy</h2>
            </div>
          </div>

          <p className="text-slate-300 leading-relaxed">
            The cognitive profile enables the application to automatically select tailored study techniques addressing individual cognitive needs:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {strategies.map((strat) => (
              <div key={strat.strategy} className={`p-5 rounded-2xl border ${strat.color} space-y-3`}>
                <div className="flex items-center gap-3">
                  <strat.icon className="w-5 h-5 shrink-0" />
                  <div>
                    <div className="text-[11px] font-mono uppercase text-slate-400">Observation</div>
                    <div className="text-xs font-bold text-slate-200">{strat.observation}</div>
                  </div>
                </div>
                <div className="pt-2 border-t border-slate-800/60">
                  <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">Strategy: </span>
                  <span className="text-sm font-extrabold text-white">{strat.strategy}</span>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">{strat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTIONS 07, 08, 09 — LEARN, REVISE, IMPROVE */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* STEP 4 */}
          <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800/80 space-y-4 backdrop-blur-sm">
            <div className="text-xs font-mono font-bold uppercase text-pink-400">Step 04</div>
            <h3 className="text-xl font-bold text-white">Learn According to Profile</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Adapts learning practice type, study module length, revision frequency, and prompt formats to match measured working memory limits.
            </p>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-pink-400" /> Customized practice type</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-pink-400" /> Dynamic module size</li>
            </ul>
          </div>

          {/* STEP 5 */}
          <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800/80 space-y-4 backdrop-blur-sm">
            <div className="text-xs font-mono font-bold uppercase text-rose-400">Step 05</div>
            <h3 className="text-xl font-bold text-white">Strengthen & Revise</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Schedules scheduled retrieval sessions and retention checks to prevent memory decay and promote long-term consolidation.
            </p>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-rose-400" /> Spaced interval checks</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-rose-400" /> Active pattern retrieval</li>
            </ul>
          </div>

          {/* STEP 6 */}
          <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800/80 space-y-4 backdrop-blur-sm">
            <div className="text-xs font-mono font-bold uppercase text-emerald-400">Step 06</div>
            <h3 className="text-xl font-bold text-white">Continuously Adapt</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Re-assesses performance after revision cycles to dynamically update cognitive profile metrics and continuously optimize strategy.
            </p>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Closed-loop optimization</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Continuous profile updating</li>
            </ul>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 10 — ALGORITHM SUMMARY TABLE */}
        {/* ========================================================================= */}
        <section className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-slate-800/80 space-y-6 backdrop-blur-sm">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400">Technical Foundation</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">The Science Behind Smart Learning Agent</h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-800">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-950 text-xs font-mono text-slate-400 uppercase border-b border-slate-800">
                  <th className="py-4 px-6 font-bold">Cognitive / Learning Component</th>
                  <th className="py-4 px-6 font-bold">Algorithm & Framework</th>
                  <th className="py-4 px-6 font-bold">Key Measurements & Variables</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-xs sm:text-sm text-slate-300">
                <tr className="hover:bg-slate-800/30 transition">
                  <td className="py-4 px-6 font-semibold text-white">Working Memory & Attention</td>
                  <td className="py-4 px-6 font-mono text-blue-400 font-bold">N-back + SDT</td>
                  <td className="py-4 px-6 font-mono text-slate-400">Accuracy, RT, Hit Rate (H), False Alarm Rate (F), d′ (d-prime)</td>
                </tr>
                <tr className="hover:bg-slate-800/30 transition">
                  <td className="py-4 px-6 font-semibold text-white">Associative Memory & Recall</td>
                  <td className="py-4 px-6 font-mono text-purple-400 font-bold">Hopfield Network</td>
                  <td className="py-4 px-6 font-mono text-slate-400">Recall accuracy, pattern completion, noise tolerance, convergence</td>
                </tr>
                <tr className="hover:bg-slate-800/30 transition">
                  <td className="py-4 px-6 font-semibold text-white">Long-Term Learning & Retention</td>
                  <td className="py-4 px-6 font-mono text-pink-400 font-bold">CLS + Hebbian Learning</td>
                  <td className="py-4 px-6 font-mono text-slate-400">Retention strength, learning rate, stability, generalization ability</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 11 — FINAL CALL TO ACTION */}
        {/* ========================================================================= */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 border border-indigo-500/30 text-center space-y-8 shadow-2xl shadow-purple-950/40">
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              From Cognitive Assessment to Better Learning
            </h2>
            <blockquote className="text-slate-300 italic text-base sm:text-lg leading-relaxed">
              &ldquo;Smart Learning Agent transforms cognitive performance data into an adaptive learning process—helping students understand their learning profile, practice effectively, revise at appropriate intervals, and track improvement over time.&rdquo;
            </blockquote>
          </div>

          <div>
            <a
              href="/get-started"
              className="inline-flex items-center gap-3 px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 rounded-2xl shadow-xl shadow-purple-600/30 hover:shadow-purple-600/50 transform hover:-translate-y-1 transition duration-200"
            >
              <Sparkles className="w-5 h-5" />
              Start Your Assessment
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>

      </div>
    </div>
  );
};

export default HowItWorks;
