import { Link } from 'react-router-dom';
import { Brain, BarChart3, ArrowRight, Sparkles } from 'lucide-react';

const GetStarted = () => {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] overflow-hidden py-4 sm:py-6 md:py-8 bg-slate-950 text-slate-100 flex items-center justify-center">
      {/* Background Decorative Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[130px]" />
        <div className="absolute top-[20%] right-[15%] w-[450px] h-[450px] bg-purple-600/15 rounded-full blur-[130px]" />
        <div className="absolute top-[50%] left-[35%] w-[350px] h-[350px] bg-pink-600/10 rounded-full blur-[110px]" />

        {/* Radial Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        {/* Main Card Container with Outer Glow */}
        <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl shadow-purple-950/20 relative">
          
          {/* Header Badge */}
          <div className="flex items-center justify-center mb-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              GET STARTED
            </span>
          </div>

          {/* Main Title & Description */}
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-2 sm:mb-3">
              Start your journey with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                Learning Agent
              </span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Assess your cognitive ability and explore your personalized learning profile.
            </p>
          </div>

          {/* Two Action Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 max-w-4xl mx-auto">
            
            {/* Card 1: Take Assessment */}
            <div className="group relative bg-slate-950/80 hover:bg-slate-900/90 border-2 border-dashed border-indigo-500/40 hover:border-indigo-500 rounded-2xl p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1">
              <div>
                {/* Icon Container */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all duration-300">
                  <Brain className="w-6 h-6 sm:w-7 sm:h-7 text-pink-400 group-hover:text-pink-300 transition-colors" />
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5 group-hover:text-indigo-300 transition-colors">
                  Take Assessment
                </h3>

                {/* Subtitle / Description */}
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                  Evaluate your cognitive abilities
                </p>
              </div>

              {/* Button */}
              <Link
                to="/start-assessment"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 shadow-md shadow-purple-600/25 hover:shadow-purple-600/40 transition-all duration-200"
              >
                <span>Start Assessment</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Card 2: View Dashboard */}
            <div className="group relative bg-slate-950/80 hover:bg-slate-900/90 border-2 border-dashed border-purple-500/40 hover:border-purple-500 rounded-2xl p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1">
              <div>
                {/* Icon Container */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all duration-300">
                  <BarChart3 className="w-6 h-6 sm:w-7 sm:h-7 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5 group-hover:text-purple-300 transition-colors">
                  View Dashboard
                </h3>

                {/* Subtitle / Description */}
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                  View your cognitive profile & progress
                </p>
              </div>

              {/* Button */}
              <Link
                to="/dashboard"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 hover:from-purple-500 hover:via-indigo-500 hover:to-pink-500 shadow-md shadow-indigo-600/25 hover:shadow-indigo-600/40 transition-all duration-200"
              >
                <span>Open Dashboard</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
