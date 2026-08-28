import { useState, useEffect } from 'react';
import { useUser } from '@clerk/react';
import { Navigate } from 'react-router-dom';
import DashboardPage from './DashboardPage';
import { Loader2 } from 'lucide-react';

const DashboardGuard = () => {
  const { user, isLoaded, isSignedIn } = useUser();
  const [checking, setChecking] = useState(true);
  const [allCompleted, setAllCompleted] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const checkDashboardStatus = async () => {
      if (!isLoaded) return;

      if (!isSignedIn || !user) {
        if (isMounted) {
          setChecking(false);
          setAllCompleted(false);
        }
        return;
      }

      const email = user.primaryEmailAddress?.emailAddress;
      if (!email) {
        if (isMounted) {
          setChecking(false);
          setAllCompleted(false);
        }
        return;
      }

      try {
        if (isMounted) setChecking(true);
        const res = await fetch(`http://localhost:3000/api/dashboard/status?email=${encodeURIComponent(email)}`);
        const data = await res.json();

        if (isMounted) {
          if (data.success && data.allCompleted) {
            setAllCompleted(true);
          } else {
            setAllCompleted(false);
          }
        }
      } catch (err) {
        console.error('Error fetching dashboard status:', err);
        if (isMounted) {
          setError('Failed to check dashboard completion status.');
        }
      } finally {
        if (isMounted) setChecking(false);
      }
    };

    checkDashboardStatus();

    return () => {
      isMounted = false;
    };
  }, [isLoaded, isSignedIn, user]);

  // Loading state
  if (!isLoaded || checking) {
    return (
      <div className="min-h-[calc(100vh-4rem)] bg-slate-950 flex flex-col items-center justify-center p-4">
        <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 p-8 rounded-3xl flex flex-col items-center gap-4 max-w-sm text-center shadow-xl">
          <Loader2 className="w-10 h-10 text-indigo-400 animate-spin" />
          <h3 className="text-lg font-semibold text-white">Verifying Assessment Status</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Checking PostgreSQL dashboard record for N-back, Hopfield, and Hebbian tests...
          </p>
        </div>
      </div>
    );
  }

  // Not signed in -> redirect to get-started (which prompts sign in)
  if (!isSignedIn) {
    return <Navigate to="/get-started" replace />;
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-[calc(100vh-4rem)] bg-slate-950 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-slate-900/70 border border-rose-500/30 p-6 rounded-2xl text-center space-y-4">
          <p className="text-rose-300 text-sm font-medium">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-semibold"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  // If NOT all 3 tests completed -> REDIRECT TO ASSESSMENT PAGE
  if (!allCompleted) {
    return (
      <Navigate
        to="/start-assessment"
        state={{ notice: "Please complete all 3 cognitive tests (N-back, Hopfield, and Hebbian) before viewing your Dashboard." }}
        replace
      />
    );
  }

  // If ALL 3 tests ARE completed -> ALLOW ACCESS TO DASHBOARD PAGE
  return <DashboardPage />;
};

export default DashboardGuard;
