const StrategyPreview = () => {
  const techniques = [
    {
      title: 'Active Recall',
      description: 'Strengthen memory through retrieval.',
      icon: (
        <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      badge: 'Cognitive Retrieval',
      gradient: 'from-indigo-500/20 via-indigo-500/5 to-transparent',
      borderColor: 'hover:border-indigo-500/50',
      badgeBg: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
    },
    {
      title: 'Spaced Revision',
      description: 'Review information at planned intervals.',
      icon: (
        <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      badge: 'Memory Decay Control',
      gradient: 'from-purple-500/20 via-purple-500/5 to-transparent',
      borderColor: 'hover:border-purple-500/50',
      badgeBg: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    },
    {
      title: 'Interleaving',
      description: 'Practice related concepts together.',
      icon: (
        <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      badge: 'Cross-Topic Mastery',
      gradient: 'from-emerald-500/20 via-emerald-500/5 to-transparent',
      borderColor: 'hover:border-emerald-500/50',
      badgeBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 flex  items-center bg-slate-950 text-slate-100 border-t border-slate-800/80">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[30%] right-[20%] w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-400 mb-4">
            Personalized Learning Preview
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100 mb-4">
            A Learning Strategy{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              Built for You
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Scientifically backed cognitive techniques dynamically assigned to match your learning profile.
          </p>
        </div>

        {/* 4 Technique Cards Grid */}
        <div className="flex gap-20 lg:grid-cols-4 gap-6">
          {techniques.map((item) => (
            <div
              key={item.title}
              className={`p-6 rounded-2xl bg-gradient-to-b ${item.gradient} bg-slate-900/80 border border-slate-800/90 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 ${item.borderColor} shadow-xl hover:shadow-2xl flex flex-col justify-between group`}
            >
              <div>
                {/* Header Icon & Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/90 border border-slate-700/60 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                </div>

                <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-extrabold tracking-wider border mb-3 uppercase ${item.badgeBg}`}>
                  {item.badge}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-white transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StrategyPreview;
