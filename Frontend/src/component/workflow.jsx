const Workflow = () => {
  const row1Steps = [
    {
      step: '01',
      title: 'ASSESS',
      description: 'Take a quick diagnostic test to evaluate baseline strengths.',
      gradient: 'from-blue-500 to-indigo-500',
      shadow: 'shadow-blue-500/10',
    },
    {
      step: '02',
      title: 'ANALYZE',
      description: 'AI processes response speed, accuracy, and memory patterns.',
      gradient: 'from-indigo-500 to-purple-500',
      shadow: 'shadow-indigo-500/10',
    },
    {
      step: '03',
      title: 'PERSONALIZE',
      description: 'Generate a tailored study plan designed for your profile.',
      gradient: 'from-purple-500 to-pink-500',
      shadow: 'shadow-purple-500/10',
    },
    {
      step: '04',
      title: 'LEARN',
      description: 'Engage with adaptive learning modules for comprehension.',
      gradient: 'from-pink-500 to-rose-500',
      shadow: 'shadow-pink-500/10',
    },
  ];

  const row2Steps = [
    {
      step: '05',
      title: 'REVISE',
      description: 'Strengthen memory recall with scheduled spaced repetition.',
      gradient: 'from-rose-500 to-amber-500',
      shadow: 'shadow-rose-500/10',
    },
    {
      step: '06',
      title: 'IMPROVE',
      description: 'Track measurable cognitive growth and master retention.',
      gradient: 'from-amber-500 to-emerald-500',
      shadow: 'shadow-emerald-500/10',
    },
  ];

  return (
    <section id="how-it-works" className="relative py-12 sm:py-16 bg-slate-950 text-slate-100 border-t border-slate-800/80">
      {/* Background Decorative Mesh Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[700px] h-[350px] bg-purple-600/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-100 mb-2">
            How{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              Smart Learning Agent
            </span>{' '}
            Works
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-lg mx-auto">
            High-level cognitive workflow from assessment to long-term mastery.
          </p>
        </div>

        {/* Workflow Layout: Row 1 (4 items) -> Down Arrow -> Row 2 (2 items) */}
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
          
          {/* Row 1: Grid of 4 */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {row1Steps.map((item, index) => {
              const isLastRow1 = index === row1Steps.length - 1;
              return (
                <div key={item.title} className="relative flex flex-col h-full">
                  <div className={`flex-1 p-4 rounded-xl bg-slate-900/80 border border-slate-800/90 backdrop-blur-md hover:border-slate-700 transition-all duration-300 shadow-md ${item.shadow} flex flex-col justify-between group`}>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-extrabold tracking-widest text-slate-400">
                          STEP {item.step}
                        </span>
                        <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.gradient}`} />
                      </div>
                      <h3 className={`text-base font-black tracking-wider uppercase mb-1.5 text-transparent bg-clip-text bg-gradient-to-r ${item.gradient}`}>
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-slate-300 text-xs font-normal leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Horizontal Arrow between items in Row 1 (Desktop) */}
                  {!isLastRow1 && (
                    <div className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-20">
                      <svg className="w-4 h-4 text-purple-400/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Flow Connector Arrow pointing down to Row 2 */}
          <div className="flex flex-col items-center text-purple-400 my-1 animate-bounce">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>

          {/* Row 2: Grid of 2 (Centered) */}
          <div className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-4">
            {row2Steps.map((item, index) => {
              const isLastRow2 = index === row2Steps.length - 1;
              return (
                <div key={item.title} className="relative flex flex-col h-full">
                  <div className={`flex-1 p-4 rounded-xl bg-slate-900/80 border border-slate-800/90 backdrop-blur-md hover:border-slate-700 transition-all duration-300 shadow-md ${item.shadow} flex flex-col justify-between group`}>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-extrabold tracking-widest text-slate-400">
                          STEP {item.step}
                        </span>
                        <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.gradient}`} />
                      </div>
                      <h3 className={`text-base font-black tracking-wider uppercase mb-1.5 text-transparent bg-clip-text bg-gradient-to-r ${item.gradient}`}>
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-slate-300 text-xs font-normal leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Horizontal Arrow between item 5 & item 6 in Row 2 */}
                  {!isLastRow2 && (
                    <div className="hidden sm:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-20">
                      <svg className="w-4 h-4 text-purple-400/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Workflow;
