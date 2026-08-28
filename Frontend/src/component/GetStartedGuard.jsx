import { useState, useEffect } from 'react';
import { useUser, SignInButton } from '@clerk/react';
import UserProfileForm from './UserProfileForm';
import GetStarted from './getStarted';
import { Loader2, LogIn, Sparkles, ShieldCheck } from 'lucide-react';

const GetStartedGuard = () => {
  const { isSignedIn, isLoaded, user } = useUser();
  const [checkingProfile, setCheckingProfile] = useState(true);
  const [hasProfile, setHasProfile] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const checkUserProfile = async () => {
      if (!isLoaded) return;

      if (!isSignedIn || !user) {
        if (isMounted) {
          setCheckingProfile(false);
          setHasProfile(false);
        }
        return;
      }

      const email = user.primaryEmailAddress?.emailAddress;
      if (!email) {
        if (isMounted) {
          setCheckingProfile(false);
          setHasProfile(false);
        }
        return;
      }

      try {
        if (isMounted) setCheckingProfile(true);
        const response = await fetch(`http://localhost:3000/api/users/profile?email=${encodeURIComponent(email)}`);
        const data = await response.json();

        if (isMounted) {
          if (data.exists) {
            setHasProfile(true);
          } else {
            setHasProfile(false);
          }
        }
      } catch (err) {
        console.error('Failed to check user profile in DB:', err);
        if (isMounted) {
          setError('Could not verify profile status. Please make sure the backend database service is running.');
        }
      } finally {
        if (isMounted) setCheckingProfile(false);
      }
    };

    checkUserProfile();

    return () => {
      isMounted = false;
    };
  }, [isLoaded, isSignedIn, user]);

  // 1. Clerk Loading State
  if (!isLoaded || checkingProfile) {
    return (
      <div className="min-h-[calc(100vh-4rem)] bg-slate-950 flex flex-col items-center justify-center p-4">
        <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 p-8 rounded-3xl flex flex-col items-center gap-4 max-w-sm text-center shadow-xl">
          <Loader2 className="w-10 h-10 text-indigo-400 animate-spin" />
          <h3 className="text-lg font-semibold text-white">Checking Account & Profile</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Verifying your authentication and checking PostgreSQL records...
          </p>
        </div>
      </div>
    );
  }

  // 2. User Not Logged In State -> Prompt to Sign In
  if (!isSignedIn) {
    return (
      <div className="min-h-[calc(100vh-4rem)] bg-slate-950 flex items-center justify-center p-4 sm:p-6">
        <div className="relative max-w-md w-full bg-slate-900/70 backdrop-blur-xl border border-slate-800/80 rounded-3xl p-8 shadow-2xl text-center">
          <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mx-auto mb-5">
            <LogIn className="w-7 h-7 text-indigo-400" />
          </div>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Authentication Required
          </span>

          <h2 className="text-2xl font-extrabold text-white mb-2">Please Sign In First</h2>
          <p className="text-slate-400 text-sm mb-6 leading-relaxed">
            You need to be signed in to access Get Started and check your learning profile.
          </p>

          <SignInButton mode="modal">
            <button
              type="button"
              className="w-full py-3 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 shadow-lg shadow-purple-600/30 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <LogIn className="w-4 h-4" />
              <span>Sign In to Continue</span>
            </button>
          </SignInButton>
        </div>
      </div>
    );
  }

  // 3. Backend Error State
  if (error) {
    return (
      <div className="min-h-[calc(100vh-4rem)] bg-slate-950 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-slate-900/70 border border-rose-500/30 p-6 rounded-2xl text-center space-y-4">
          <p className="text-rose-300 text-sm font-medium">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-semibold"
          >
            Retry Connection
          </button>
        </div>
      </div>
    );
  }

  // 4. Conditional Rendering:
  // - If profile record does NOT exist in DB -> Render Profile Form
  // - If profile record DOES exist in DB -> Render GetStarted Dashboard Cards
  if (!hasProfile) {
    return <UserProfileForm onProfileSaved={() => setHasProfile(true)} />;
  }

  return <GetStarted />;
};

export default GetStartedGuard;
