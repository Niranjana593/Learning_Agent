import { useState, useEffect } from 'react';
import { useUser } from '@clerk/react';
import { Link, useLocation } from 'react-router-dom';
import { Brain, Network, Cpu, CheckCircle2, Circle, ArrowRight, Sparkles, Loader2, Lock, ShieldCheck, RefreshCw } from 'lucide-react';

const AssessmentPage = () => {
  const { user, isLoaded, isSignedIn } = useUser();
  const location = useLocation();

  const [loading, setLoading] = useState(true);
  const [updatingTest, setUpdatingTest] = useState(null);
  const [dashboardState, setDashboardState] = useState({
    n_back_test: false,
    hopfield_test: false,
    hebbian_test: false,
    allCompleted: false,
  });

  const redirectNotice = location.state?.notice || null;

  // Fetch status on mount
  useEffect(() => {
    fetchStatus();
  }, [isLoaded, isSignedIn, user]);

  const fetchStatus = async () => {
    if (!user?.primaryEmailAddress?.emailAddress) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const email = user.primaryEmailAddress.emailAddress;
      const res = await fetch(`http://localhost:3000/api/dashboard/status?email=${encodeURIComponent(email)}`);
      const data = await res.json();

      if (data.success) {
        setDashboardState({
          n_back_test: data.n_back_test,
          hopfield_test: data.hopfield_test,
          hebbian_test: data.hebbian_test,
          allCompleted: data.allCompleted,
        });
      }
    } catch (err) {
      console.error('Error fetching assessment status:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleToggleTest = async (testKey) => {
    if (!user?.primaryEmailAddress?.emailAddress) return;

    const email = user.primaryEmailAddress.emailAddress;
    const currentVal = dashboardState[testKey];
    const newVal = !currentVal;

    try {
      setUpdatingTest(testKey);
      const res = await fetch('http://localhost:3000/api/dashboard/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          test_name: testKey,
          completed: newVal,
        }),
      });

      const data = await res.json();
      if (data.success && data.dashboard) {
        setDashboardState({
          n_back_test: data.dashboard.n_back_test,
          hopfield_test: data.dashboard.hopfield_test,
          hebbian_test: data.dashboard.hebbian_test,
          allCompleted: data.dashboard.allCompleted,
        });
      }
    } catch (err) {
      console.error(`Error updating ${testKey}:`, err);
    } finally {
      setUpdatingTest(null);
    }
  };

  const tests = [
    {
      key: 'n_back_test',
      title: 'N-Back Working Memory Test',
      description: 'Measures working memory capacity and continuous attention tracking.',
      icon: Brain,
      color: 'from-indigo-500 to-blue-600',
      badgeColor: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
    },
    {
      key: 'hopfield_test',
      title: 'Hopfield Pattern Network Test',
      description: 'Evaluates associative memory retrieval and pattern reconstruction.',
      icon: Network,
      color: 'from-purple-500 to-pink-600',
      badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    },
    {
      key: 'hebbian_test',
      title: 'Hebbian Learning Plasticity Test',
      description: 'Assesses synaptic plasticity and associative rule learning dynamics.',
      icon: Cpu,
      color: 'from-pink-500 to-rose-600',
      badgeColor: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
    },
  ];

  const completedCount = [dashboardState.n_back_test, dashboardState.hopfield_test, dashboardState.hebbian_test].filter(Boolean).length;

  return (
    <section className="relative min-h-[calc(100vh-4rem)] py-8 sm:py-12 bg-slate-950 text-slate-100 flex flex-col justify-center items-center">
      {/* Background Decorative Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[15%] left-[20%] w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[130px]" />
        <div className="absolute top-[30%] right-[15%] w-[450px] h-[450px] bg-purple-600/15 rounded-full blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 w-full my-auto">
        
        {/* Header Badge & Title */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            COGNITIVE ASSESSMENTS
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Required Cognitive Assessments
          </h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Complete all three cognitive evaluations to unlock your personalized Dashboard.
          </p>
        </div>

        {/* Redirect Notice Banner (if user tried accessing dashboard while incomplete) */}
        {redirectNotice && !dashboardState.allCompleted && (
          <div className="mb-6 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-300 flex items-center gap-3 shadow-lg">
            <Lock className="w-5 h-5 text-amber-400 shrink-0" />
            <div className="text-sm">
              <span className="font-semibold block">Dashboard Access Locked</span>
              <span>{redirectNotice}</span>
            </div>
          </div>
        )}

        {/* Status Bar */}
        <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-2xl p-4 sm:p-5 mb-6 flex items-center justify-between shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Completion Progress</span>
              <span className="text-sm font-bold text-white">
                {completedCount} of 3 Assessments Completed
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-32 sm:w-48 h-2.5 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-500"
                style={{ width: `${(completedCount / 3) * 100}%` }}
              />
            </div>
            <span className="text-xs font-semibold text-purple-400">{Math.round((completedCount / 3) * 100)}%</span>
          </div>
        </div>

        {/* Assessment Cards Grid */}
        {loading ? (
          <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-3xl p-12 text-center flex flex-col items-center gap-3">
            <Loader2 className="w-8 h-8 text-indigo-400 animate-spin" />
            <p className="text-sm text-slate-400">Loading your assessment status from PostgreSQL...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {tests.map((test) => {
              const Icon = test.icon;
              const isCompleted = Boolean(dashboardState[test.key]);
              const isUpdating = updatingTest === test.key;

              return (
                <div
                  key={test.key}
                  className={`relative rounded-2xl p-6 border transition-all duration-300 flex flex-col justify-between ${
                    isCompleted
                      ? 'bg-slate-900/80 border-emerald-500/50 shadow-lg shadow-emerald-950/20'
                      : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div>
                    {/* Header Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${test.color} p-0.5 shadow-lg`}>
                        <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      {isCompleted ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Done
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-400 text-xs font-medium">
                          <Circle className="w-3.5 h-3.5" />
                          Pending
                        </span>
                      )}
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-white mb-2">{test.title}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed mb-6">{test.description}</p>
                  </div>

                  {/* Toggle Action Button */}
                  <button
                    type="button"
                    disabled={isUpdating}
                    onClick={() => handleToggleTest(test.key)}
                    className={`w-full py-2.5 px-4 rounded-xl font-semibold text-xs transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                      isCompleted
                        ? 'bg-slate-800 hover:bg-slate-700 text-emerald-400 border border-emerald-500/30'
                        : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-md shadow-indigo-600/20'
                    }`}
                  >
                    {isUpdating ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : isCompleted ? (
                      <>
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Completed (Click to Reset)</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4" />
                        <span>Complete Test</span>
                      </>
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        )}

        {/* Dashboard Unlock Action */}
        <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-3xl p-6 sm:p-8 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-lg font-bold text-white">
              {dashboardState.allCompleted ? '🎉 All Assessments Completed!' : 'Dashboard Currently Locked'}
            </h4>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              {dashboardState.allCompleted
                ? 'Your cognitive profile is ready. You can now access your full Dashboard.'
                : 'Complete N-Back, Hopfield, and Hebbian tests above to unlock your Dashboard.'}
            </p>
          </div>

          <Link
            to="/dashboard"
            className={`px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center gap-2 shrink-0 ${
              dashboardState.allCompleted
                ? 'bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-600 text-white shadow-lg shadow-emerald-500/30 hover:scale-105'
                : 'bg-slate-800 text-slate-500 border border-slate-700 cursor-not-allowed opacity-80'
            }`}
          >
            {dashboardState.allCompleted ? (
              <>
                <span>Open Dashboard</span>
                <ArrowRight className="w-4 h-4" />
              </>
            ) : (
              <>
                <Lock className="w-4 h-4 text-slate-500" />
                <span>Locked (Complete 3/3)</span>
              </>
            )}
          </Link>
        </div>

      </div>
    </section>
  );
};

export default AssessmentPage;
