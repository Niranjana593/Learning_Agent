import { useUser } from '@clerk/react';
import { Brain, BarChart3, ShieldCheck, Zap, Award, BookOpen, Sparkles, Activity, CheckCircle2 } from 'lucide-react';

const DashboardPage = () => {
  const { user } = useUser();

  const userName = user?.fullName || user?.firstName || 'Learner';

  const metrics = [
    { title: 'Working Memory Capacity', score: '94%', icon: Brain, color: 'from-indigo-500 to-blue-600', status: 'Optimal' },
    { title: 'Pattern Recognition', score: '88%', icon: BarChart3, color: 'from-purple-500 to-pink-600', status: 'High' },
    { title: 'Associative Plasticity', score: '92%', icon: Zap, color: 'from-pink-500 to-rose-600', status: 'Optimal' },
  ];

  return (
    <section className="relative min-h-[calc(100vh-4rem)] py-8 sm:py-12 bg-slate-950 text-slate-100 flex flex-col items-center">
      {/* Background Decorative Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[130px]" />
        <div className="absolute top-[30%] right-[15%] w-[450px] h-[450px] bg-purple-600/15 rounded-full blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        
        {/* Welcome Header */}
        <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-3xl p-6 sm:p-8 mb-8 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                All Assessments Verified
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Welcome to your Dashboard, <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">{userName}</span>!
            </h1>
            <p className="text-slate-400 text-sm mt-1">
              Your cognitive evaluation is complete. Here is your personalized learning profile overview.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-4 py-2 bg-slate-950 border border-slate-800 rounded-xl text-center">
              <span className="text-xs text-slate-500 block uppercase font-semibold">Status</span>
              <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> Unlocked
              </span>
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div key={idx} className="bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-2xl p-6 shadow-xl hover:border-slate-700 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${m.color} p-0.5 shadow-lg`}>
                    <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold">
                    {m.status}
                  </span>
                </div>
                <h3 className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">{m.title}</h3>
                <div className="text-3xl font-extrabold text-white">{m.score}</div>
              </div>
            );
          })}
        </div>

        {/* Learning Recommendations Section */}
        <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-3xl p-6 sm:p-8 shadow-2xl">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-purple-400" />
            <h2 className="text-xl font-bold text-white">Recommended Learning Strategy</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80 flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                <Activity className="w-5 h-5 text-indigo-400" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white mb-1">Spaced Repetition Schedule</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Based on your N-Back and Hopfield scores, review complex concepts at 24-hour and 72-hour intervals.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80 flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                <BookOpen className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white mb-1">Interactive Pattern Exercises</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Engage in associative problem solving to further boost Hebbian learning adaptability.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DashboardPage;
