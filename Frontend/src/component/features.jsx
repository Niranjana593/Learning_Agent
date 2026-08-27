const Features = () => {
  const steps = [
    {
      number: '01',
      title: 'Assess',
      description: 'Understand your cognitive performance.',
      icon: (
        <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      accentColor: 'from-indigo-500/20 to-indigo-500/5',
      borderColor: 'hover:border-indigo-500/50',
      badgeBg: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
    },
    {
      number: '02',
      title: 'Personalize',
      description: 'Identify learning strategies suited to your profile.',
      icon: (
        <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      accentColor: 'from-purple-500/20 to-purple-500/5',
      borderColor: 'hover:border-purple-500/50',
      badgeBg: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    },
    {
      number: '03',
      title: 'Improve',
      description: 'Learn, revise, and strengthen retention.',
      icon: (
        <svg className="w-6 h-6 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      accentColor: 'from-pink-500/20 to-pink-500/5',
      borderColor: 'hover:border-pink-500/50',
      badgeBg: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-slate-950/60 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading & Subtext */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100 mb-6">
            Learning Is Not{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              One-Size-Fits-All
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Every student has different strengths, weaknesses, and learning patterns. Smart Learning Agent evaluates cognitive performance and uses the results to create a personalized approach to learning and revision.
          </p>
        </div>

        {/* 3 Simple Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step) => (
            <div
              key={step.title}
              className={`relative p-8 rounded-2xl bg-gradient-to-b ${step.accentColor} bg-slate-900/80 border border-slate-800/90 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 ${step.borderColor} shadow-xl hover:shadow-2xl hover:shadow-purple-900/10 group`}
            >
              {/* Header inside card: Step Badge & Icon */}
              <div className="flex items-center justify-between mb-6">
                <span className={`px-3 py-1 rounded-full text-xs font-extrabold border ${step.badgeBg}`}>
                  STEP {step.number}
                </span>
                <div className="w-12 h-12 rounded-xl bg-slate-800/90 border border-slate-700/60 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-white transition-colors">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;
