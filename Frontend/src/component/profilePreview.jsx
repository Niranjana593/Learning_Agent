const ProfilePreview = () => {
  const metrics = [
    { label: 'Working Memory', percentage: 80, color: 'from-indigo-500 to-blue-500', shadow: 'shadow-indigo-500/20' },
    { label: 'Attention', percentage: 70, color: 'from-purple-500 to-indigo-500', shadow: 'shadow-purple-500/20' },
    { label: 'Recall', percentage: 90, color: 'from-pink-500 to-purple-500', shadow: 'shadow-pink-500/20' },
    { label: 'Retention', percentage: 60, color: 'from-amber-500 to-pink-500', shadow: 'shadow-amber-500/20' },
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-slate-950/80 text-slate-100 border-t border-slate-800/80">
      {/* Background Mesh Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[25%] left-[30%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[130px]" />
        <div className="absolute bottom-[20%] right-[25%] w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100 mb-4">
            Understand Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              Learning Profile
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Your assessment results are transformed into a learning profile that helps guide your personalized learning strategy.
          </p>
        </div>

        {/* Profile Card Container */}
        <div className="max-w-2xl mx-auto">
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800/90 backdrop-blur-xl shadow-2xl shadow-purple-950/20">
            
            {/* Header of Preview Card */}
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-800/80">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-slate-100 text-lg sm:text-xl">Sample Cognitive Metrics</h3>
                  <p className="text-xs text-slate-400">Illustrative Student Baseline</p>
                </div>
              </div>

              {/* Preview Badge */}
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/20">
                Sample Preview
              </span>
            </div>

            {/* Metric Bars */}
            <div className="space-y-6">
              {metrics.map((metric) => (
                <div key={metric.label} className="space-y-2">
                  <div className="flex justify-between items-center text-sm font-semibold text-slate-200">
                    <span className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${metric.color}`} />
                      {metric.label}
                    </span>
                    <span className="text-slate-400 font-mono">{metric.percentage}%</span>
                  </div>

                  {/* Progress Bar Container */}
                  <div className="w-full h-3 rounded-full bg-slate-950 p-0.5 border border-slate-800/90 overflow-hidden">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${metric.color} shadow-sm ${metric.shadow} transition-all duration-1000 ease-out`}
                      style={{ width: `${metric.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Caption Notice */}
            <div className="mt-8 pt-4 border-t border-slate-800/60 text-center">
              <p className="text-xs text-slate-400 italic">
                * This is a preview, not the actual results page.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ProfilePreview;
